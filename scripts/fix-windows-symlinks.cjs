// Patch fs.symlinkSync so directory symlinks are created as junctions on
// Windows. Creating a real directory symlink requires Developer Mode or an
// elevated shell; junctions work without either. This only affects local
// builds (GitHub Actions/Linux uses real symlinks and is unaffected).
// Load via: node --require ./scripts/fix-windows-symlinks.cjs ...
const fs = require("node:fs");

const origSymlinkSync = fs.symlinkSync;

fs.symlinkSync = function symlinkSync(target, path, type) {
  if (process.platform === "win32") {
    try {
      const stat = fs.statSync(target);
      if (stat.isDirectory()) {
        return origSymlinkSync.call(fs, target, path, "junction");
      }
    } catch {
      // fall through and let the original throw/behave normally
    }
  }
  return origSymlinkSync.call(fs, target, path, type);
};
