"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface PaymentData {
  paymentId: string;
  orderId: string;
  currency: string;
  provider: string;
  address: string;
  amount: number;
  amountFixed: number;
  amountUsd: number;
  qr: string;
}

interface Props {
  orderId: string;
  totalUsd: number;
  currency: string;
  initialPayment: {
    provider: string;
    currency: string;
    address: string;
    amount_crypto: number;
    amount_usd: number;
    txid: string;
    status: string;
  } | null;
}

const CURRENCIES = [
  { code: "btc", name: "Bitcoin", symbol: "BTC" },
  { code: "usdt", name: "Tether", symbol: "USDT" },
  { code: "eth", name: "Ethereum", symbol: "ETH" },
  { code: "ltc", name: "Litecoin", symbol: "LTC" },
];

export default function PaymentClient({ orderId, totalUsd, currency, initialPayment }: Props) {
  const [selected, setSelected] = useState("btc");
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [txid, setTxid] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [paid, setPaid] = useState(initialPayment?.status === "paid");
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  const checkStatus = useCallback(async () => {
    try {
      const res = await fetch(`/api/payment/status/${orderId}`, { cache: "no-store" });
      const data = await res.json();
      if (data.status === "paid") {
        setPaid(true);
        stopPolling();
      } else if (data.status === "failed") {
        stopPolling();
      }
    } catch {
      // retry on next tick
    }
  }, [orderId, stopPolling]);

  useEffect(() => {
    if (initialPayment?.status !== "paid") {
      pollRef.current = setInterval(checkStatus, 6000);
      return () => stopPolling();
    }
  }, [initialPayment?.status, checkStatus, stopPolling]);

  async function generate() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, currency: selected }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not generate payment.");
        setBusy(false);
        return;
      }
      setPayment(data);
      setBusy(false);
    } catch {
      setError("Network error. Please try again.");
      setBusy(false);
    }
  }

  async function confirmPayment(e: React.FormEvent) {
    e.preventDefault();
    if (!txid.trim()) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/payment/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, txid }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not confirm payment.");
        setBusy(false);
        return;
      }
      setConfirmed(true);
      if (data.approved) {
        setPaid(true);
        stopPolling();
      }
      setBusy(false);
    } catch {
      setError("Network error. Please try again.");
      setBusy(false);
    }
  }

  function copyAddress() {
    if (!payment) return;
    navigator.clipboard?.writeText(payment.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  if (paid) {
    return (
      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-emerald-900">Payment received!</h2>
        <p className="mt-2 text-sm text-emerald-800">
          Thank you! Your order is being prepared for shipment.
        </p>
        <Link
          href={`/order/${orderId}`}
          className="mt-6 inline-block rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          View order status
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {!payment ? (
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="mb-4 font-bold">1. Choose your cryptocurrency</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setSelected(c.code)}
                className={`rounded-xl border p-4 text-left transition ${
                  selected === c.code
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 hover:border-gray-900"
                }`}
              >
                <div className="text-lg font-bold">{c.symbol}</div>
                <div className={`text-xs ${selected === c.code ? "text-gray-300" : "text-gray-500"}`}>
                  {c.name}
                </div>
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="button"
            disabled={busy}
            onClick={generate}
            className="mt-6 rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700 disabled:opacity-50"
          >
            {busy ? "Generating…" : "Generate payment details"}
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="mb-1 font-bold">2. Send your payment</h2>
          <p className="text-sm text-gray-500">
            Send exactly <span className="font-semibold text-gray-900">{payment.amount} {payment.currency.toUpperCase()}</span>{" "}
            (≈ {formatPrice(payment.amountUsd)}) to the address below.
          </p>

          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={payment.qr} alt="QR code" className="h-52 w-52 rounded-xl border border-gray-200" />
              <div className="mt-2 text-center text-xs text-gray-400">
                Scan with your wallet
              </div>
            </div>
            <div className="w-full">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">Network</div>
              <div className="mt-1 font-semibold">{payment.currency.toUpperCase()}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Amount to send</div>
              <div className="mt-1 text-xl font-bold">{payment.amount} {payment.currency.toUpperCase()}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">Deposit address</div>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
                <code className="flex-1 break-all font-mono text-xs">{payment.address}</code>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="shrink-0 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-gray-700"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-xs text-amber-800">
                {payment.provider === "nowpayments"
                  ? "Payment is tracked automatically. This page updates when the blockchain confirms your transaction."
                  : "After sending, enter your transaction ID below so we can verify your payment."}
              </div>

              {confirmed && (
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Thank you! Your payment is under review. We will confirm it shortly.
                </div>
              )}

              <form onSubmit={confirmPayment} className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Transaction ID (TXID)
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    value={txid}
                    onChange={(e) => setTxid(e.target.value)}
                    placeholder="Paste your transaction hash…"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
                  />
                  <button
                    type="submit"
                    disabled={busy || !txid.trim()}
                    className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 disabled:opacity-50"
                  >
                    {busy ? "…" : "I&apos;ve sent it"}
                  </button>
                </div>
              </form>

              <p className="mt-4 text-xs text-gray-400">
                We update the status every few seconds. Keep this page open until it confirms.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-gray-500">Order {orderId}</span>
        <Link href={`/order/${orderId}`} className="font-semibold text-gray-900 hover:underline">
          View order status →
        </Link>
      </div>
    </div>
  );
}
