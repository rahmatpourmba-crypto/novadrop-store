import type { Lang } from "./i18n/core";

export interface ProductTranslation {
  title: string;
  description: string;
}

/**
 * Product titles and descriptions translated into all store languages.
 * Keyed by product slug. Empty fields fall back to the English title/description.
 */
export const PRODUCT_TRANSLATIONS: Record<string, Partial<Record<Lang, ProductTranslation>>> = {
  "wireless-charger-3-in-1": {
    fa: {
      title: "پایه شارژ بی‌سیم مغناطیسی ۳ در ۱",
      description:
        "گوشی، ایرباد و ساعت هوشمند خود را همزمان با این پایه شارژ مغناطیسی شیک شارژ کنید. شارژ بی‌سیم سریع با محافظ داخلی در برابر داغ شدن. قابل تا شدن برای سفر.\n\n• شارژ مغناطیسی ۳ در ۱\n• شارژ سریع ۱۵ وات\n• جمع‌شونده و مناسب سفر\n• سازگار با انواع دستگاه‌ها",
    },
    ar: {
      title: "حامل شحن لاسلكي مغناطيسي 3 في 1",
      description:
        "اشحن هاتفك وسماعاتك وساعتك الذكية في نفس الوقت مع هذا الحامل المغنايسي الأنيق. شحن لاسلكي سريع مع حماية مدمجة من الحرارة الزائدة. قابل للطي للسفر.\n\n• شحن مغناطيسي 3 في 1\n• شحن سريع 15 واط\n• قابل للطي ومناسب للسفر\n• توافق شامل",
    },
    ckb: {
      title: "شوکری بێتەلی موگناتیسی سێ-لە-یەک",
      description:
        "مۆبایل، هێدفۆن و کاتژمێری زیرەکەکەت بە یەک جار شوکری بکە بەم ڕاگرەی موگناتیسی جوانە. شوکری بێتەلی خێرا لەگەڵ پارێزگاری لە گەرمبوونەوە. بەشێوەیەکی دۆخی سەفەر دادەچیت.\n\n• شوکری موگناتیسی سێ-لە-یەک\n• شوکری خێرا ١٥ وات\n• دۆخە و گونجاو بۆ گەشت\n• گونجاو لەگەڵ هەموو ئامێرەکان",
    },
    es: {
      title: "Soporte de carga inalámbrica magnética 3 en 1",
      description:
        "Carga tu teléfono, auriculares y reloj inteligente a la vez con este elegante soporte magnético. Carga rápida con protección contra sobrecalentamiento. Plegable para viajes.\n\n• Carga magnética 3 en 1\n• Carga rápida de 15 W\n• Plegable y fácil de llevar\n• Compatibilidad universal",
    },
    fr: {
      title: "Support de charge sans fil magnétique 3-en-1",
      description:
        "Rechargez votre téléphone, vos écouteurs et votre montre simultanément avec ce support magnétique élégant. Charge rapide avec protection contre la surchauffe. Pliable pour les voyages.\n\n• Charge magnétique 3-en-1\n• Charge rapide 15 W\n• Pliable et nomade\n• Compatibilité universelle",
    },
    de: {
      title: "Magnetische 3-in-1 Wireless-Ladestation",
      description:
        "Laden Sie Telefon, Ohrhörer und Smartwatch gleichzeitig mit dieser eleganten magnetischen Ladestation. Schnelles Laden mit Überhitzungsschutz. Flach zusammenfaltbar für Reisen.\n\n• 3-in-1 Magnetisches Laden\n• 15 W Schnellladung\n• Faltbar &amp; reisefreundlich\n• Universelle Kompatibilität",
    },
    ru: {
      title: "Магнитная беспроводная зарядная подставка 3-в-1",
      description:
        "Заряжайте телефон, наушники и умные часы одновременно с этой элегантной магнитной подставкой. Быстрая беспроводная зарядка со встроенной защитой от перегрева. Складывается для путешествий.\n\n• Магнитная зарядка 3-в-1\n• Быстрая зарядка 15 Вт\n• Складная для путешествий\n• Универсальная совместимость",
    },
    tr: {
      title: "Manyetik 3'ü 1 Arada Kablosuz Şarj Standı",
      description:
        "Telefonunuzu, kulaklığınızı ve akıllı saatinizi bu şık manyetik şarj standıyla aynı anda şarj edin. Aşırı ısınma korumalı hızlı kablosuz şarj. Seyahat için katlanabilir.\n\n• 3'ü 1 arada manyetik şarj\n• 15W hızlı şarj\n• Katlanabilir ve taşınabilir\n• Evrensel uyumluluk",
    },
    zh: {
      title: "磁吸三合一无线充电支架",
      description:
        "使用这款时尚的磁吸充电支架，同时为手机、耳机和智能手表充电。内置过热保护的快速无线充电。可折叠，便于旅行携带。\n\n• 三合一磁吸充电\n• 15W 快充\n• 可折叠，适合旅行\n• 通用兼容",
    },
  },
  "led-neon-sign": {
    fa: {
      title: "تابلوی نئونی LED سفارشی با ریموت",
      description:
        "با این تابلو نئونی LED قابل شخصی‌سازی، فضایی چشمگیر در هر اتاقی بسازید. مجهز به ۱۶ حالت رنگی، تنظیم نور و تایمر ۱۲ ساعته. با برق USB و نصب آسان.\n\n• ۱۶ رنگ + محو شدن خودکار\n• شامل کنترل از راه دور\n• تغذیه با USB\n• امکان سفارشی‌سازی",
    },
    ar: {
      title: "لوحة نيون LED مخصصة مع جهاز تحكم",
      description:
        "اصنع جوا ساحرا في أي غرفة مع لوحة النيون LED القابلة للتخصيص. تأتي مع 16 وضعا لونيا وخفتا للإضاءة ومؤقتا لـ 12 ساعة. تعمل بواسطة USB وسهلة التركيب.\n\n• 16 لونا + تلاشي تلقائي\n• يشمل جهاز التحكم عن بعد\n• تعمل عبر USB\n• تخصيص حسب الطلب",
    },
    ckb: {
      title: "پلاکی نەئۆنی LED بە دەگمەنی کۆنتڕۆڵ",
      description:
        "بەم پلاکە نەئۆنییەی LED کە دەتوانیت تایبەت بە خۆت بیکەیت، ژینگەیەکی سەرنجڕاکێش لە هەر ژوورێک دروست بکە. لەگەڵ ١٦ حاڵەتی ڕەنگ، کۆنترۆڵی ڕووناکی و تایمەری ١٢ کاتژمێری. بە USB کاردەکات و بە ئاسانی دادەنرێت.\n\n• ١٦ ڕەنگ + ڕووناکی بەرز و نزمی ئۆتۆماتیکی\n• کۆنتڕۆڵی دوور لە خۆ لەگەڵدایە\n• کارکردن بە USB\n• دەتوانیت بە دڵی خۆت بیگۆڕیت",
    },
    es: {
      title: "Letrero de neón LED personalizado con control remoto",
      description:
        "Crea un ambiente impresionante en cualquier habitación con este letrero de neón LED personalizable. Incluye 16 modos de color, regulador de brillo y temporizador de 12 horas. Alimentado por USB y fácil de montar.\n\n• 16 colores + desvanecimiento automático\n• Incluye control remoto\n• Alimentación por USB\n• Personalización disponible",
    },
    fr: {
      title: "Enseigne néon LED personnalisable avec télécommande",
      description:
        "Créez une ambiance magnifique dans n'importe quelle pièce avec cette enseigne néon LED personnalisable. 16 modes de couleur, variateur et minuterie de 12 heures. Alimentée par USB et facile à installer.\n\n• 16 couleurs + fondu automatique\n• Télécommande incluse\n• Alimentation USB\n• Personnalisation possible",
    },
    de: {
      title: "Individuelles LED-Neonschild mit Fernbedienung",
      description:
        "Schaffen Sie eine beeindruckende Atmosphäre in jedem Raum mit diesem individuell gestaltbaren LED-Neonschild. 16 Farbmodi, Dimmfunktion und 12-Stunden-Timer. USB-betrieben und einfach zu montieren.\n\n• 16 Farben + Auto-Fade\n• Fernbedienung enthalten\n• USB-betrieben\n• DIY-Personalisierung",
    },
    ru: {
      title: "Неоновая LED-вывеска на заказ с пультом",
      description:
        "Создайте потрясающую атмосферу в любой комнате с этой настраиваемой неоновой LED-вывеской. 16 цветовых режимов, диммирование и таймер на 12 часов. Работает от USB и легко крепится.\n\n• 16 цветов + автосмена\n• Пульт в комплекте\n• Питание от USB\n• Возможна кастомизация",
    },
    tr: {
      title: "Kumandalı Özel LED Neon Tabela",
      description:
        "Bu kişiselleştirilebilir LED neon tabelayla her odada etkileyici bir atmosfer yaratın. 16 renk modu, kısma ve 12 saatlik zamanlayıcı. USB güçlü ve kolay montaj.\n\n• 16 renk + otomatik geçiş\n• Uzaktan kumanda dahil\n• USB ile çalışır\n• Kendin yap kişiselleştirme",
    },
    zh: {
      title: "带遥控器的定制LED霓虹灯牌",
      description:
        "用这款可定制的LED霓虹灯牌在任何房间营造惊艳氛围。具有16种颜色模式、调光和12小时定时功能。USB供电，易于安装。\n\n• 16色+自动渐变\n• 包含遥控器\n• USB供电\n• 支持定制",
    },
  },
  "fitness-resistance-bands": {
    fa: {
      title: "ست کامل نوارهای مقاومتی حرفه‌ای (۵ عددی)",
      description:
        "راه‌حل کامل تمرین در خانه با ۵ سطح مقاومت. ساخته شده از لاتکس طبیعی با کیفیت، هر نوار دارای دستگیره‌های ضدلغزش و بند مچ پا است. شامل کیف حمل و راهنمای تمرین.\n\n• ۵ سطح مقاومت (۱۰-۵۰ پوند)\n• دستگیره ضدلغزش\n• شامل لنگر درب و بند مچ\n• راهنمای تمرین رایگان",
    },
    ar: {
      title: "طقم أربطة المقاومة الاحترافي (5 قطع)",
      description:
        "حل متكامل للتمرينات المنزلية مع 5 مستويات مقاومة. مصنوعة من اللاتكس الطبيعي الفاخر، كل رباط مزود بمقابض مانعة للانزلاق وحزام كاحل. تشمل حقيبة حمل ودليلا للتمرين.\n\n• 5 مستويات مقاومة (10-50 رطلا)\n• قبضة مانعة للانزلاق\n• يشمل مثبت الباب وأحزمة الكاحل\n• دليل تمرين مجاني",
    },
    ckb: {
      title: "کۆمەڵە بانزی بەرگری پرۆفیشناڵ (٥ دانە)",
      description:
        "چارەسەری تەواو بۆ ڕاهێنان لە ماڵەوە لەگەڵ ٥ ئاستی بەرگری. لە لاتێکسی سروشتی بەرزەوە دروست کراوە، هەر بانزێک دەستی ناسلت و بەندی قاچی تێدایە. لەگەڵ کیف و ڕێنمایی ڕاهێنان دێت.\n\n• ٥ ئاستی بەرگری (١٠-٥٠ پاوند)\n• دەستی ناسلت\n• لەگەڵ لنگر و بەندی قاچ\n• ڕێنمایی ڕاهێنانی بەخۆڕایی",
    },
    es: {
      title: "Set profesional de bandas de resistencia (5 unidades)",
      description:
        "Solución completa para entrenar en casa con 5 niveles de resistencia. Fabricadas en látex natural premium, cada banda tiene asas antideslizantes y correa para tobillo. Incluye bolsa y guía de ejercicios.\n\n• 5 niveles de resistencia (10-50 lb)\n• Agarre antideslizante\n• Incluye ancla de puerta y correas\n• Guía de ejercicios gratuita",
    },
    fr: {
      title: "Set professionnel d'élastiques de résistance (5 pièces)",
      description:
        "Solution complète pour le sport à la maison avec 5 niveaux de résistance. En latex naturel premium, chaque élastique a des poignées antidérapantes et une sangle de cheville. Sac et guide inclus.\n\n• 5 niveaux de résistance (10-50 lb)\n• Poignée antidérapante\n• Ancre de porte et sangles incluses\n• Guide d'entraînement gratuit",
    },
    de: {
      title: "Professionelles Widerstandsbänder-Set (5er-Pack)",
      description:
        "Komplette Lösung für das Training zu Hause mit 5 Widerstandsstufen. Aus hochwertigem Naturlatex, mit rutschfesten Griffen und Knöchelband. Inklusive Tasche und Trainingsanleitung.\n\n• 5 Widerstandsstufen (10-50 lbs)\n• Rutschfester Griff\n• Inkl. Türverankerung + Knöchelbänder\n• Kostenlose Trainingsanleitung",
    },
    ru: {
      title: "Набор профессиональных эспандеров (5 шт.)",
      description:
        "Полное решение для домашних тренировок с 5 уровнями сопротивления. Из премиального натурального латекса, с антискользящими ручками и ремнем для лодыжек. Включает сумку и руководство.\n\n• 5 уровней сопротивления (10-50 фунтов)\n• Антискользящий хват\n• Крепление к двери и ремни в комплекте\n• Бесплатное руководство",
    },
    tr: {
      title: "Profesyonel Direnç Bantları Seti (5'li Paket)",
      description:
        "5 direnç seviyesiyle eksiksiz ev egzersiz çözümü. Premium doğal lateksten üretilmiştir, her bant kaymaz tutamaçlı ve ayak bileği kayışlıdır. Taşıma çantası ve egzersiz rehberi dahil.\n\n• 5 direnç seviyesi (10-50 lbs)\n• Kaymaz tutuş\n• Kapı çapası + bilek kayışları dahil\n• Ücretsiz egzersiz rehberi",
    },
    zh: {
      title: "专业阻力带套装（5件装）",
      description:
        "完整的居家锻炼解决方案，提供5个阻力等级。采用优质天然乳胶制成，每条阻力带带有防滑手柄和脚踝带。包括收纳袋和锻炼指南。\n\n• 5个阻力等级（10-50磅）\n• 防滑握把\n• 包含门锚和脚踝带\n• 免费锻炼指南",
    },
  },
  "smart-watch-s7": {
    fa: {
      title: "ساعت هوشمند فوق حرفه‌ای با تماس بلوتوثی",
      description:
        "همیشه متصل بمانید. نمایشگر HD ۱.۸ اینچی، تماس بلوتوثی، پایش ضربان قلب و اکسیژن خون، بیش از ۱۰۰ حالت ورزشی و باتری ۷ روزه. ضدآب IP68.\n\n• تماس بلوتوثی\n• پایش ضربان قلب و SpO2\n• بیش از ۱۰۰ حالت ورزشی\n• باتری ۷ روزه",
    },
    ar: {
      title: "ساعة ذكية فائقة مع مكالمات بلوتوث",
      description:
        "ابق على اتصال دائما. شاشة HD بحجم 1.8 بوصة ومكالمات بلوتوث ومراقبة لمعدل ضربات القلب والأكسجين في الدم وأكثر من 100 وضع رياضي وبطارية تدوم 7 أيام. مقاومة للماء بمعيار IP68.\n\n• مكالمات بلوتوث\n• مراقبة القلب وSpO2\n• أكثر من 100 وضع رياضي\n• بطارية تدوم 7 أيام",
    },
    ckb: {
      title: "کاتژمێری زیرەکی سوپەر لەگەڵ پەیوەندی بلوتوث",
      description:
        "هەمیشە بەردەوام بە. شاشەی HD بە ١.٨ ئینچ، پەیوەندی بلوتوث، چاودێریی لێدانی دڵ و ئۆکسجینی خوێن، زیاتر لە ١٠٠ حاڵەتی وەرزشی و باتری ٧ ڕۆژی. ئاوپارێز بە IP68.\n\n• پەیوەندی بلوتوث\n• چاودێری دڵ و SpO2\n• زیاتر لە ١٠٠ حاڵەتی وەرزش\n• باتری ٧ ڕۆژ",
    },
    es: {
      title: "Reloj inteligente Ultra con llamadas Bluetooth",
      description:
        "Mantente conectado sobre la marcha. Pantalla HD de 1,8 pulgadas, monitoreo de frecuencia cardíaca y oxígeno en sangre, más de 100 modos deportivos y 7 días de batería. Resistente al agua IP68.\n\n• Llamadas Bluetooth\n• Monitor de ritmo cardíaco + SpO2\n• Más de 100 modos deportivos\n• 7 días de batería",
    },
    fr: {
      title: "Montre intelligente Ultra avec appels Bluetooth",
      description:
        "Restez connecté en déplacement. Écran HD de 1,8 pouce, appels Bluetooth, surveillance de la fréquence cardiaque et du SpO2, plus de 100 modes sportifs et 7 jours d'autonomie. Étanche IP68.\n\n• Appels Bluetooth\n• Fréquence cardiaque + SpO2\n• Plus de 100 modes sportifs\n• 7 jours d'autonomie",
    },
    de: {
      title: "Ultra Smartwatch mit Bluetooth-Anrufen",
      description:
        "Bleiben Sie unterwegs verbunden. 1,8 Zoll HD-Display, Bluetooth-Anrufe, Herzfrequenz- und Blutsauerstoffmessung, über 100 Sportmodi und 7 Tage Akkulaufzeit. IP68 wasserdicht.\n\n• Bluetooth-Anrufe\n• Herzfrequenz- + SpO2-Monitor\n• Über 100 Sportmodi\n• 7 Tage Akkulaufzeit",
    },
    ru: {
      title: "Умные часы Ultra с Bluetooth-звонками",
      description:
        "Оставайтесь на связи. HD-дисплей 1,8 дюйма, звонки через Bluetooth, мониторинг пульса и уровня кислорода в крови, более 100 спортивных режимов и 7 дней работы. Влагозащита IP68.\n\n• Bluetooth-звонки\n• Пульс + SpO2\n• Более 100 спортивных режимов\n• 7 дней автономности",
    },
    tr: {
      title: "Bluetooth Aramalı Ultra Akıllı Saat",
      description:
        "Hareket halindeyken bağlı kalın. 1,8 inç HD ekran, Bluetooth aramaları, kalp atışı ve kan oksijeni takibi, 100+ spor modu ve 7 gün pil ömrü. IP68 su geçirmez.\n\n• Bluetooth aramaları\n• Kalp atışı + SpO2 takibi\n• 100+ spor modu\n• 7 gün pil ömrü",
    },
    zh: {
      title: "Ultra蓝牙通话智能手表",
      description:
        "随时保持连接。1.8英寸高清屏幕、蓝牙通话、心率和血氧监测、100多种运动模式以及7天电池续航。IP68防水。\n\n• 蓝牙通话\n• 心率+血氧监测\n• 100多种运动模式\n• 7天电池续航",
    },
  },
  "portable-blender": {
    fa: {
      title: "مخلوط‌کن قابل حمل با شارژ USB",
      description:
        "اسموتی، شیک و آبمیوه را هر جا که هستید درست کنید. بطری ۳۸۰ میلی‌لیتری بدون BPA، ۶ تیغه استیل ضدزنگ و شارژ سریع USB-C. عالی برای باشگاه، محل کار و سفر.\n\n• ظرفیت ۳۸۰ میلی‌لیتر\n• شارژ USB-C\n• ۶ تیغه استیل ضدزنگ\n• طراحی ضدنشت",
    },
    ar: {
      title: "خلاط محمول قابل الشحن عبر USB",
      description:
        "اصنع العصائر والمشروبات في أي مكان. زجاجة بسعة 380 مل خالية من BPA و6 شفرات من الفولاذ المقاوم للصدأ وشحن سريع عبر USB-C. مثالي للجيم والمكتب والسفر.\n\n• سعة 380 مل\n• شحن USB-C\n• 6 شفرات فولاذية\n• تصميم مانع للتسرب",
    },
    ckb: {
      title: "بێندەری گەڕۆک بە شوکری USB",
      description:
        "سمودی و ئاوی میوە لە هەر شوێنێک دروست بکە. مووچکەی ٣٨٠ ملمی بێ BPA، ٦ تیغی پۆڵای نەزەنگ و شوکری خێرای USB-C. بەرزترین باش بۆ جیم، نووسینگە و سەفەر.\n\n• جێگای ٣٨٠ ملم\n• شوکری USB-C\n• ٦ تیغی پۆڵای نەزەنگ\n• دیزاینی نەنۆشتاویی",
    },
    es: {
      title: "Licuadora portátil recargable por USB",
      description:
        "Prepara batidos y jugos en cualquier lugar. Botella de 380 ml libre de BPA, 6 cuchillas de acero inoxidable y carga rápida USB-C. Perfecta para gimnasio, oficina y viajes.\n\n• Capacidad de 380 ml\n• Carga USB-C\n• 6 cuchillas de acero inoxidable\n• Diseño a prueba de fugas",
    },
    fr: {
      title: "Blender portable rechargeable USB",
      description:
        "Préparez smoothies, shakes et jus partout. Bouteille de 380 ml sans BPA, 6 lames en acier inoxydable et charge rapide USB-C. Parfait pour la salle de sport, le bureau et les voyages.\n\n• Capacité 380 ml\n• Charge USB-C\n• 6 lames en acier inoxydable\n• Design anti-fuite",
    },
    de: {
      title: "Tragbarer USB-Mixbecher",
      description:
        "Mixen Sie Smoothies und Säfte überall. 380-ml-BPA-freie Flasche, 6 Edelstahlklingen und USB-C-Schnellladung. Perfekt für Fitnessstudio, Büro und Reisen.\n\n• 380 ml Fassungsvermögen\n• USB-C-Ladung\n• 6 Edelstahlklingen\n• Auslaufsicheres Design",
    },
    ru: {
      title: "Портативный USB-блендер",
      description:
        "Готовьте смузи и соки где угодно. Бутылка 380 мл без BPA, 6 лезвий из нержавеющей стали и быстрая зарядка USB-C. Идеален для спортзала, офиса и путешествий.\n\n• Объем 380 мл\n• Зарядка USB-C\n• 6 лезвий из нержавейки\n• Герметичная конструкция",
    },
    tr: {
      title: "Taşınabilir USB Şarjlı Blender",
      description:
        "Smoothie, shake ve meyve sularını her yerde hazırlayın. 380ml BPA içermeyen şişe, 6 paslanmaz çelik bıçak ve USB-C hızlı şarj. Spor salonu, ofis ve seyahat için mükemmel.\n\n• 380ml kapasite\n• USB-C şarj\n• 6 paslanmaz çelik bıçak\n• Sızdırmaz tasarım",
    },
    zh: {
      title: "便携式USB充电搅拌机",
      description:
        "随时随地制作冰沙、奶昔和果汁。380毫升不含BPA的瓶子、6个不锈钢刀片和USB-C快速充电。非常适合健身房、办公室和旅行。\n\n• 380毫升容量\n• USB-C充电\n• 6个不锈钢刀片\n• 防漏设计",
    },
  },
  "retro-mini-console": {
    fa: {
      title: "کنسول بازی مینی رترو (۵۰۰ بازی)",
      description:
        "۵۰۰ بازی کلاسیک در یک کنسول جیبی از پیش بارگذاری شده است. صفحه‌نمایش ۳ اینچی، باتری قابل شارژ و خروجی HDMI به تلویزیون. هدیه‌ای عالی برای علاقه‌مندان به بازی‌های نوستالژیک.\n\n• ۵۰۰ بازی داخلی\n• خروجی HDMI به تلویزیون\n• صفحه‌نمایش LCD ۳ اینچی\n• باتری قابل شارژ ۲۰۰۰ میلی‌آمپری",
    },
    ar: {
      title: "كونسول ألعاب رجعي مصغر (500 لعبة)",
      description:
        "500 لعبة كلاسيكية محملة مسبقا في كونسول بحجم الجيب. شاشة 3 بوصات وبطارية قابلة للشحن وإخراج HDMI للتلفزيون. هدية مثالية لعشاق الألعاب الرجعية.\n\n• 500 لعبة مدمجة\n• إخراج HDMI للتلفزيون\n• شاشة LCD بوصة واحدة\n• بطارية قابلة للشحن 2000mAh",
    },
    ckb: {
      title: "کۆنسۆڵی یاری مینی ڕێترۆ (٥٠٠ یاری)",
      description:
        "٥٠٠ یاری کلاسیک لە کۆنسۆڵێکی بچووکی کیشەوەدا پێشتر بارکراون. شاشەی ٣ ئینچ، باتریی دووبارە شوکرکراوە و دەرچەی HDMI بۆ تەلەڤیزیۆن. دیارییەکی بەرز بۆ خاوەنی یارییە نۆستالژییەکان.\n\n• ٥٠٠ یاری لە ناخەوە\n• دەرچەی HDMI بۆ تەلەڤیزیۆن\n• شاشەی LCD بە ٣ ئینچ\n• باتری ٢٠٠٠ میلی ئەمپێری دووبارە شوکرکراوە",
    },
    es: {
      title: "Consola mini retro (500 juegos)",
      description:
        "500 juegos clásicos precargados en una consola de bolsillo. Pantalla de 3 pulgadas, batería recargable y salida HDMI para TV. Un regalo nostálgico perfecto.\n\n• 500 juegos integrados\n• Salida HDMI a TV\n• Pantalla LCD de 3 pulgadas\n• Batería recargable de 2000mAh",
    },
    fr: {
      title: "Console mini rétro (500 jeux)",
      description:
        "500 jeux classiques préchargés dans une console de poche. Écran de 3 pouces, batterie rechargeable et sortie HDMI vers la TV. Un cadeau nostalgique parfait.\n\n• 500 jeux intégrés\n• Sortie HDMI vers la TV\n• Écran LCD 3 pouces\n• Batterie rechargeable 2000mAh",
    },
    de: {
      title: "Retro-Mini-Konsole (500 Spiele)",
      description:
        "500 klassische Spiele vorinstalliert in einer Taschenkonsole. 3-Zoll-Bildschirm, wiederaufladbarer Akku und HDMI-Ausgang zum Fernseher. Ein perfektes nostalgisches Geschenk.\n\n• 500 integrierte Spiele\n• HDMI-Ausgang zum TV\n• 3-Zoll-LCD-Bildschirm\n• Wiederaufladbarer 2000-mAh-Akku",
    },
    ru: {
      title: "Ретро мини-консоль (500 игр)",
      description:
        "500 классических игр предустановлены в карманной консоли. Экран 3, перезаряжаемый аккумулятор и выход HDMI на телевизор. Идеальный ностальгический подарок.\n\n• 500 встроенных игр\n• Выход HDMI на ТВ\n• ЖК-экран 3\n• Аккумулятор 2000 мАч",
    },
    tr: {
      title: "Retro Mini Oyun Konsolu (500 Oyun)",
      description:
        "500 klasik oyun cep boyutunda bir konsolda önceden yüklü. 3 inç ekran, şarj edilebilir pil ve TV'ye HDMI çıkışı. Mükemmel nostaljik bir hediye.\n\n• 500 dahili oyun\n• TV'ye HDMI çıkışı\n• 3 inç LCD ekran\n• 2000mAh şarj edilebilir pil",
    },
    zh: {
      title: "复古迷你游戏机（500款游戏）",
      description:
        "500款经典游戏预装在掌上游戏机中。3英寸屏幕、可充电电池和HDMI电视输出。完美的怀旧礼物。\n\n• 内置500款游戏\n• HDMI电视输出\n• 3英寸LCD屏幕\n• 2000mAh可充电电池",
    },
  },
  "wireless-earbuds-pro": {
    fa: {
      title: "ایربادهای بی‌سیم با نویزکنسلینگ فعال و قاب شارژ",
      description:
        "ایربادهای ممتاز با حذف نویز فعال و مجموعاً ۳۰ ساعت باتری. کنترل لمسی، مقاومت در برابر آب IPX5 و حالت بازی با تأخیر کم.\n\n• حذف نویز فعال\n• مجموعاً ۳۰ ساعت باتری\n• کنترل لمسی\n• ضدآب IPX5",
    },
    ar: {
      title: "سماعات أذن لاسلكية بإلغاء الضوضاء وعلبة شحن",
      description:
        "سماعات ممتازة بإلغاء ضوضاء نشط و30 ساعة من البطارية. لمس للتحكم ومقاومة للماء بمعيار IPX5 ووضع ألعاب منخفض التأخير.\n\n• إلغاء ضوضاء نشط\n• 30 ساعة إجمالي البطارية\n• تحكم باللمس\n• مقاومة للماء IPX5",
    },
    ckb: {
      title: "هێدفۆنی بێتەلی بە کانسلکردنی دەنگ و سندوقی شوکر",
      description:
        "هێدفۆنی بەرز لەگەڵ هەڵوەشاندنەوەی چالاکی دەنگ و کۆی ٣٠ کاتژمێر باتری. کۆنترۆڵی دەستی، بەرگری ئاو IPX5 و حاڵەتی یاری بە دواکەوتنی کەم.\n\n• هەڵوەشاندنەوەی چالاکی دەنگ\n• کۆی ٣٠ کاتژمێر باتری\n• کۆنترۆڵی دەستی\n• ئاوپارێز IPX5",
    },
    es: {
      title: "Auriculares inalámbricos ANC con estuche de carga",
      description:
        "Auriculares premium con cancelación activa de ruido y 30 horas de batería. Controles táctiles, resistencia al agua IPX5 y modo de juego de baja latencia.\n\n• Cancelación activa de ruido\n• 30 horas de batería\n• Controles táctiles\n• Resistente al agua IPX5",
    },
    fr: {
      title: "Écouteurs sans fil ANC avec boîtier de charge",
      description:
        "Écouteurs premium avec réduction active du bruit et 30 heures d'autonomie. Commandes tactiles, résistance à l'eau IPX5 et mode jeu à faible latence.\n\n• Réduction active du bruit\n• 30 h d'autonomie totale\n• Commandes tactiles\n• Étanche IPX5",
    },
    de: {
      title: "ANC-Kabellose Ohrhörer mit Ladecase",
      description:
        "Premium-Ohrhörer mit aktivem Noise Cancelling und 30 Stunden Gesamtakkulaufzeit. Touch-Bedienung, IPX5-Wasserschutz und Game-Modus mit geringer Latenz.\n\n• Aktives Noise Cancelling\n• 30 h Gesamtakkulaufzeit\n• Touch-Bedienung\n• IPX5 wasserdicht",
    },
    ru: {
      title: "Беспроводные наушники ANC с зарядным кейсом",
      description:
        "Премиальные наушники с активным шумоподавлением и 30 часами работы. Сенсорное управление, защита IPX5 и игровой режим с низкой задержкой.\n\n• Активное шумоподавление\n• 30 часов работы\n• Сенсорное управление\n• Влагозащита IPX5",
    },
    tr: {
      title: "Şarj Kutusuyla ANC Kablosuz Kulaklıklar",
      description:
        "Aktif gürültü engellemeli ve toplam 30 saat pilli premium kulaklıklar. Dokunmatik kontroller, IPX5 su direnci ve düşük gecikmeli oyun modu.\n\n• Aktif gürültü engelleme\n• Toplam 30 saat pil\n• Dokunmatik kontroller\n• IPX5 su geçirmez",
    },
    zh: {
      title: "ANC无线耳机带充电盒",
      description:
        "高品质主动降噪耳机，总续航30小时。触控、IPX5防水和低延迟游戏模式。\n\n• 主动降噪\n• 总续航30小时\n• 触控\n• IPX5防水",
    },
  },
  "unisex-oversized-hoodie": {
    fa: {
      title: "هودی فلانل اورسایز (یونیسکس)",
      description:
        "هودی فلانل گرم با وزن ۳۵۰ گرم در متر و فیت اورسایز راحت. هود دولایه، جیب کانگورویی و مچ کش‌دار. در ۵ رنگ موجود است.\n\n• فلانل برس‌خورده ۳۵۰ گرمی\n• فیت اورسایز\n• هود دولایه\n• قابل شستشو با ماشین",
    },
    ar: {
      title: "هودي صوفي بحجم كبير (للجنسين)",
      description:
        "هودي صوفي دافئ بوزن 350 غرام وقصّة واسعة مريحة. غطاء مزدوج وجيب أمامي وأكمام مضلعة. متوفر في 5 ألوان.\n\n• صوف 350 غرام\n• قصّة واسعة\n• غطاء مزدوج\n• قابل للغسل في الغسالة",
    },
    ckb: {
      title: "هۆدی فلیس گەورە (هاوسێکست)",
      description:
        "هۆدی فلیسی گەرم بە ٣٥٠ گرام و شێوازی گەورەی ئاسوودە. هۆدی دوو تەبەقی، کیشەی کەنگوروویی و دەستی کارەبایی. لە ٥ ڕەنگدا بەردەستە.\n\n• فلیسی ٣٥٠ گرامی\n• شێوازی گەورە\n• هۆدی دوو تەبەق\n• دەتوانیت بە مەکینە بشۆیتەوە",
    },
    es: {
      title: "Sudadera con capucha de forro polar oversized (unisex)",
      description:
        "Sudadera de forro polar cálida de 350gsm con corte holgado. Capucha de doble capa, bolsillo canguro y puños acanalados. Disponible en 5 colores.\n\n• Forro polar cepillado de 350gsm\n• Corte holgado\n• Capucha de doble capa\n• Lavable a máquina",
    },
    fr: {
      title: "Sweat à capuche en polaire oversized (unisexe)",
      description:
        "Sweat en polaire chaud 350gsm à coupe ample. Capuche doublée, poche kangourou et poignets côtelés. Disponible en 5 couleurs.\n\n• Polaire brossée 350gsm\n• Coupe oversized\n• Capuche doublée\n• Lavable en machine",
    },
    de: {
      title: "Oversized-Fleece-Hoodie (Unisex)",
      description:
        "Kuscheliger, schwerer 350gsm-Fleece-Hoodie mit lässiger Oversized-Passform. Doppellagige Kapuze, Kängurutasche und gerippte Bündchen. In 5 Farben erhältlich.\n\n• 350gsm-Bürstenfleece\n• Oversized-Passform\n• Doppellagige Kapuze\n• Maschinenwaschbar",
    },
    ru: {
      title: "Свободный флисовый худи (унисекс)",
      description:
        "Уютный плотный флисовый худи 350 г/м² свободного кроя. Двухслойный капюшон, карман-кенгуру и трикотажные манжеты. Доступен в 5 цветах.\n\n• Начесный флис 350 г/м²\n• Свободный крой\n• Двухслойный капюшон\n• Машинная стирка",
    },
    tr: {
      title: "Oversize Polar Kapüşonlu Sweatshirt (Unisex)",
      description:
        "350gsm ağırlığında sıcak, rahat kesimli oversize polar sweatshirt. Çift kat kapüşon, kanguru cep ve ribanalı manşetler. 5 renkte mevcut.\n\n• 350gsm fırçalı polar\n• Oversize kesim\n• Çift kat kapüşon\n• Makinede yıkanabilir",
    },
    zh: {
      title: "超大码摇粒绒连帽衫（中性款）",
      description:
        "舒适厚实的350克摇粒绒连帽衫，宽松超大连帽设计。双层帽兜、袋鼠口袋和罗纹袖口。有5种颜色可选。\n\n• 350克刷毛摇粒绒\n• 超大连帽款式\n• 双层帽兜\n• 可机洗",
    },
  },
  "capsule-espresso-machine": {
    fa: {
      title: "اسپرسوساز کپسولی کوچک",
      description:
        "اسپرسوی باکیفیت باریستا را در کمتر از یک دقیقه دم کنید. طراحی جمع‌وجور برای هر آشپزخانه، فشار ۲۰ بار و همراه با ۲۰ کپسول شروع.\n\n• فشار ۲۰ بار پمپ\n• گرم شدن در ۳۰ ثانیه\n• طراحی جمع‌وجور\n• شامل ۲۰ کپسول",
    },
    ar: {
      title: "ماكينة إسبريسو مصغرة بالكبسولات",
      description:
        "اصنع إسبريسو بجودة المقاهي في أقل من دقيقة. تصميم مضغوط يناسب أي مطبخ، ضغط 20 بار ويأتي مع 20 كبسولة للمبتدئين.\n\n• ضغط مضخة 20 بار\n• تسخين خلال 30 ثانية\n• تصميم مضغوط\n• تشمل 20 كبسولة",
    },
    ckb: {
      title: "ئامێری ئیسپرێسۆی کەپسوڵی بچووک",
      description:
        "ئیسپرێسۆی بە کوالیتیی باڕیستا لە کەمتر لە خولەکێکدا ئامادە بکە. دیزاینی بچووک گونجاوە بۆ هەر چێشتخانەیەک، پەستانی ٢٠ بار و لەگەڵ ٢٠ کەپسوڵ دێت.\n\n• پەستانی پەمپ ٢٠ بار\n• گەرمبوونەوە لە ٣٠ چرکە\n• دیزاینی بچووک\n• لەگەڵ ٢٠ کەپسوڵ دێت",
    },
    es: {
      title: "Máquina de espresso de cápsulas mini",
      description:
        "Prepara un espresso de calidad barista en menos de un minuto. Diseño compacto para cualquier cocina, presión de 20 bares e incluye 20 cápsulas de inicio.\n\n• Presión de 20 bares\n• Calentamiento en 30 s\n• Diseño compacto\n• Incluye 20 cápsulas",
    },
    fr: {
      title: "Machine à espresso à capsules mini",
      description:
        "Préparez un espresso de qualité barista en moins d'une minute. Design compact pour toutes les cuisines, pression de 20 bars et 20 capsules incluses.\n\n• Pression de 20 bars\n• Chauffage en 30 s\n• Design compact\n• 20 capsules incluses",
    },
    de: {
      title: "Mini-Kapsel-Espressomaschine",
      description:
        "Bereiten Sie Barista-Qualitäts-Espresso in unter einer Minute zu. Kompaktes Design für jede Küche, 20-bar-Pumpendruck und 20 Startkapseln inklusive.\n\n• 20-bar-Pumpendruck\n• 30 s Aufheizzeit\n• Kompaktes Design\n• 20 Kapseln enthalten",
    },
    ru: {
      title: "Мини-кофемашина для капсульного эспрессо",
      description:
        "Готовьте эспрессо уровня бариста меньше чем за минуту. Компактный дизайн для любой кухни, давление 20 бар и 20 стартовых капсул.\n\n• Давление насоса 20 бар\n• Нагрев за 30 с\n• Компактный дизайн\n• 20 капсул в комплекте",
    },
    tr: {
      title: "Mini Kapsüllü Espresso Makinesi",
      description:
        "Bir dakikadan kısa sürede barista kalitesinde espresso yapın. Her mutfağa uyan kompakt tasarım, 20 bar basınç ve 20 başlangıç kapsülü.\n\n• 20 bar pompa basıncı\n• 30 sn ısınma süresi\n• Kompakt tasarım\n• 20 kapsül dahil",
    },
    zh: {
      title: "迷你胶囊意式浓缩咖啡机",
      description:
        "在一分钟内制作出咖啡师级浓缩咖啡。紧凑设计适合任何厨房，20巴泵压，附赠20个入门胶囊。\n\n• 20巴泵压\n• 30秒加热时间\n• 紧凑设计\n• 附赠20个胶囊",
    },
  },
  "yoga-mat-pro": {
    fa: {
      title: "تشک یوگای حرفه‌ای ضدلغزش با خطوط تراز",
      description:
        "تشک یوگا TPE با تراکم بالا و ضخامت ۶ میلی‌متر با خطوط تراز بدن و بند حمل. ضدلغزش در هر دو طرف، مقاوم در برابر عرق و به‌راحتی تمیز می‌شود.\n\n• TPE با تراکم بالا ۶ میلی‌متر\n• خطوط تراز بدن\n• ضدلغزش در هر دو طرف\n• شامل بند حمل",
    },
    ar: {
      title: "سجادة يوجا احترافية مانعة للانزلاق مع خطوط محاذاة",
      description:
        "سجادة يوجا TPE عالية الكثافة بسمك 6 ملم مع خطوط محاذاة الجسم وحزام حمل. مانعة للانزلاق من الجهتين ومقاومة للعرق وسهلة التنظيف.\n\n• TPE عالي الكثافة 6 ملم\n• خطوط محاذاة\n• غير قابلة للانزلاق\n• تشمل حزام حمل",
    },
    ckb: {
      title: "بڕسکەی یۆگای پرۆفیشناڵ ناسلت لەگەڵ هێڵی ڕێکخستن",
      description:
        "بڕسکەی یۆگای TPE بە چڕی بەرز و ٦ ملم ئەستوور لەگەڵ هێڵی ڕێکخستنی جەستە و بەندی هەڵگرتن. لە هەردوو لا ناسلتە و بەرگەی ئارەق دەگرێت.\n\n• TPE بە چڕی بەرز ٦ ملم\n• هێڵی ڕێکخستن\n• ناسلت لە هەردوو لا\n• لەگەڵ بەندی هەڵگرتن",
    },
    es: {
      title: "Esterilla de yoga profesional antideslizante con líneas de alineación",
      description:
        "Esterilla de yoga TPE de alta densidad de 6 mm con líneas de alineación y correa de transporte. Antideslizante en ambos lados, resistente al sudor y fácil de limpiar.\n\n• TPE de alta densidad 6 mm\n• Líneas de alineación\n• Antideslizante en ambos lados\n• Correa de transporte incluida",
    },
    fr: {
      title: "Tapis de yoga pro antidérapant avec lignes d'alignement",
      description:
        "Tapis de yoga en TPE haute densité de 6 mm avec lignes d'alignement et sangle de transport. Antidérapant des deux côtés, résistant à la transpiration et facile à nettoyer.\n\n• TPE haute densité 6 mm\n• Lignes d'alignement\n• Antidérapant des deux côtés\n• Sangle incluse",
    },
    de: {
      title: "Rutschfeste Pro-Yogamatte mit Ausrichtungslinien",
      description:
        "Hochdichte 6-mm-TPE-Yogamatte mit Körperausrichtungslinien und Tragegurt. Beidseitig rutschfest, schweißresistent und leicht zu reinigen.\n\n• 6 mm hochdichtes TPE\n• Ausrichtungslinien\n• Beidseitig rutschfest\n• Tragegurt inklusive",
    },
    ru: {
      title: "Профессиональный нескользящий коврик для йоги",
      description:
        "Плотный коврик из TPE 6 мм с линиями для выравнивания и ремнем. Нескользящий с обеих сторон, устойчив к поту и легко чистится.\n\n• Плотный TPE 6 мм\n• Линии выравнивания\n• Нескользящий с двух сторон\n• Ремень в комплекте",
    },
    tr: {
      title: "Hizalama Çizgili Profesyonel Kaymaz Yoga Matı",
      description:
        "Vücut hizalama çizgileri ve taşıma kayışlı 6mm yüksek yoğunluklu TPE yoga matı. Her iki yüzeyi kaymaz, tere dayanıklı ve kolay temizlenir.\n\n• 6mm yüksek yoğunluklu TPE\n• Hizalama çizgileri\n• Her iki yüzey kaymaz\n• Taşıma kayışı dahil",
    },
    zh: {
      title: "带对齐线的专业防滑瑜伽垫",
      description:
        "6毫米高密度TPE瑜伽垫，带身体对齐线和背带。两面防滑，防汗且易于清洁。\n\n• 6毫米高密度TPE\n• 对齐线\n• 两面防滑\n• 附赠背带",
    },
  },
  "mini-projector": {
    fa: {
      title: "ویدئوپروژکتور مینی HD قابل حمل 1080P",
      description:
        "هر دیواری را به سینما تبدیل کنید. رزولوشن اصلی 1080P، تصویر تا ۱۰۰ اینچ، بلندگوی داخلی و اتصال بی‌سیم موبایل. عالی برای شب‌های فیلم.\n\n• Full HD 1080P\n• تصویر تا ۱۰۰ اینچ\n• اتصال بی‌سیم\n• بلندگوی داخلی ۵ وات",
    },
    ar: {
      title: "بروجكتور مصغر محمول بدقة عالية 1080P",
      description:
        "حوّل أي جدار إلى سينما. دقة أصلية 1080P وصورة حتى 100 بوصة ومكبرات صوت مدمجة وعرض لاسلكي من الهاتف. مثالي لليالي السينما.\n\n• Full HD 1080P\n• شاشة حتى 100 بوصة\n• عرض لاسلكي\n• مكبر صوت مدمج 5 واط",
    },
    ckb: {
      title: "پڕۆژکتۆری مینی HD گەڕۆک 1080P",
      description:
        "هەر دیوارێک بکە بە سینەما. ڕەسەنایەتی 1080P، وێنە هەتا ١٠٠ ئینچ، سپیکەری ناوەکی و وەصلکردنی بێتەلی مۆبایل. باشترین بۆ شەوانی فیلم.\n\n• Full HD 1080P\n• هەتا ١٠٠ ئینچ شاشە\n• وەصلکردنی بێتەلی\n• سپیکەری ناوەکی ٥ وات",
    },
    es: {
      title: "Mini proyector portátil HD 1080P",
      description:
        "Convierte cualquier pared en un cine. Resolución nativa 1080P, proyección de hasta 100 pulgadas, altavoces integrados y duplicación inalámbrica del móvil. Perfecto para noches de cine.\n\n• Full HD 1080P\n• Pantalla de hasta 100\"\n• Duplicación inalámbrica\n• Altavoz integrado de 5 W",
    },
    fr: {
      title: "Mini projecteur portable HD 1080P",
      description:
        "Transformez n'importe quel mur en cinéma. Résolution native 1080P, projection jusqu'à 100 pouces, haut-parleurs intégrés et miroir sans fil du téléphone. Parfait pour les soirées cinéma.\n\n• Full HD 1080P\n• Écran jusqu'à 100 pouces\n• Miroir sans fil\n• Haut-parleur 5 W intégré",
    },
    de: {
      title: "Tragbarer HD-Mini-Beamer 1080P",
      description:
        "Verwandeln Sie jede Wand in ein Kino. Native 1080P-Auflösung, Projektion bis 100 Zoll, eingebaute Lautsprecher und kabelloses Spiegeln vom Handy. Perfekt für Filmabende.\n\n• Full HD 1080P\n• Bis zu 100 Zoll Bildschirm\n• Kabelloses Spiegeln\n• Eingebauter 5-W-Lautsprecher",
    },
    ru: {
      title: "Портативный мини-проектор HD 1080P",
      description:
        "Превратите любую стену в кинотеатр. Нативное разрешение 1080P, изображение до 100 дюймов, встроенные динамики и беспроводное подключение телефона. Идеален для киновечеров.\n\n• Full HD 1080P\n• Изображение до 100\"\n• Беспроводное подключение\n• Встроенный динамик 5 Вт",
    },
    tr: {
      title: "Taşınabilir HD Mini Projektör 1080P",
      description:
        "Her duvarı sinemaya dönüştürün. Gerçek 1080P çözünürlük, 100 inçe kadar görüntü, dahili hoparlörler ve kablosuz telefon yansıtma. Film geceleri için mükemmel.\n\n• Full HD 1080P\n• 100 inçe kadar ekran\n• Kablosuz yansıtma\n• Dahili 5W hoparlör",
    },
    zh: {
      title: "便携式高清迷你投影仪1080P",
      description:
        "把任何墙壁变成电影院。原生1080P分辨率、最高100英寸画面、内置扬声器和手机无线投屏。非常适合电影之夜。\n\n• 全高清1080P\n• 最大100英寸屏幕\n• 无线投屏\n• 内置5W扬声器",
    },
  },
  "aesthetic-decor-lamp": {
    fa: {
      title: "لامپ پروجکشن غروب آفتاب زیبا",
      description:
        "ساعت طلایی را به داخل خانه بیاورید. نور گرم محیطی برای عکاسی و آرامش. با برق USB و سر چرخان قابل تنظیم.\n\n• پروجکشن گرادیان غروب\n• سر ۳۶۰ درجه قابل تنظیم\n• تغذیه با USB\n• عالی برای عکاسی",
    },
    ar: {
      title: "مصباح إسقاط غروب الشمس الجمالي",
      description:
        "أحضر الساعة الذهبية إلى منزلك. توهج دافئ للصور والاسترخاء. يعمل عبر USB مع رأس قابل للتعديل 360 درجة.\n\n• إسقاط متدرج لغروب الشمس\n• رأس قابل للتعديل 360°\n• يعمل عبر USB\n• رائع للصور",
    },
    ckb: {
      title: "چراغی پڕۆژەکردنی ئاوابوونی خۆر",
      description:
        "کاتژمێری زێڕین ببە بۆ ماڵەوە. تیشکی گەرمی ژینگەیی بۆ وێنە و ئاسوودەیی. بە USB کاردەکات و سەری خولاوەی ٣٦٠ پلەیە.\n\n• پڕۆژەکردنی گڕادیێنتی ئاوابوون\n• سەری خولاوەی ٣٦٠ پلە\n• کارکردن بە USB\n• بەرزترین بۆ وێنە",
    },
    es: {
      title: "Lámpara estética de proyección de atardecer",
      description:
        "Trae la hora dorada al interior de tu hogar. Crea un resplandor ambiental cálido para fotos y relajación. Alimentada por USB con cabezal ajustable.\n\n• Proyección de degradado de atardecer\n• Cabezal ajustable 360°\n• Alimentación USB\n• Genial para fotos",
    },
    fr: {
      title: "Lampe esthétique de projection de coucher de soleil",
      description:
        "Apportez l'heure dorée à l'intérieur. Une lueur ambiante chaleureuse pour les photos et la détente. Alimentée par USB avec tête orientable.\n\n• Projection de dégradé de coucher de soleil\n• Tête orientable 360°\n• Alimentation USB\n• Parfait pour les photos",
    },
    de: {
      title: "Ästhetische Sonnenuntergangs-Projektionslampe",
      description:
        "Bringen Sie die goldene Stunde nach drinnen. Warmes Umgebungslicht für Fotos und Entspannung. USB-betrieben mit verstellbarem Kopf.\n\n• Sonnenuntergangs-Verlaufsprojektion\n• 360° verstellbarer Kopf\n• USB-betrieben\n• Großartig für Fotos",
    },
    ru: {
      title: "Эстетичная лампа-проектор заката",
      description:
        "Привнесите золотой час в свой дом. Создает теплый уютный свет для фото и отдыха. Работает от USB с регулируемой головкой.\n\n• Проекция градиента заката\n• Головка 360°\n• Питание от USB\n• Отлично для фото",
    },
    tr: {
      title: "Estetik Gün Batımı Projeksiyon Lambası",
      description:
        "Altın saati iç mekana getirin. Fotoğraflar ve rahatlama için sıcak ortam ışığı. Ayarlanabilir başlıklı USB güçlü.\n\n• Gün batımı degrade projeksiyonu\n• 360° ayarlanabilir başlık\n• USB ile çalışır\n• Fotoğraflar için harika",
    },
    zh: {
      title: "美学日落投影灯",
      description:
        "把黄金时刻带回家。为拍照和放松营造温暖的环境光。USB供电，头部可调节。\n\n• 日落渐变投影\n• 360°可调灯头\n• USB供电\n• 非常适合拍照",
    },
  },
  "solar-led-candle-light": {
    en: {
      title: "Solar LED Candle Light",
      description:
        "Solar-powered LED candles that charge in daylight and glow warmly at night. Waterproof and safe for outdoor tables, patios and gardens. No batteries needed.\n\n• Solar powered, no batteries\n• Waterproof outdoor design\n• Warm flickering LED flame\n• Auto on/off at dusk and dawn",
    },
    fa: {
      title: "شمع ال‌ای‌دی خورشیدی",
      description:
        "شمع‌های LED خورشیدی که در روز شارژ می‌شوند و شب‌ها با نوری گرم می‌درخشند. ضدآب و ایمن برای میزهای فضای باز، حیاط و باغ. بدون نیاز به باتری.\n\n• شارژ خورشیدی، بدون باتری\n• طراحی ضدآب فضای باز\n• شعله LED سوسوزن گرم\n• روشن/خاموش خودکار در غروب و طلوع",
    },
    ar: {
      title: "شمعة LED تعمل بالطاقة الشمسية",
      description:
        "شموع LED تعمل بالطاقة الشمسية وتشحن في ضوء النهار وتتوهج دافئة ليلا. مقاومة للماء وآمنة لطاولات الخارج والباحات والحدائق. لا حاجة للبطاريات.\n\n• طاقة شمسية بدون بطاريات\n• تصميم خارجي مقاوم للماء\n• لهب LED وامض دافئ\n• تشغيل تلقائي عند الغسق والفجر",
    },
    ckb: {
      title: "مۆمی LED بە وزەی خۆر",
      description:
        "مۆمی LED بە وزەی خۆر کە لە ڕووناکی ڕۆژدا شوکر دەبێت و لە شەودا بە تیشکی گەرم دەدرەوشێنەوە. ئاوپارێزە و بۆ مێزی دەرەوە، حەوشە و باخ بە سەلامەتە. بێ پێویستی بە باتری.\n\n• وزەی خۆر، بێ باتری\n• دیزاینی ئاوپارێزی دەرەوە\n• گڕی LED گەرم لەرزۆک\n• لە ئێوارە و بەیانی بە شێوەی ئۆتۆماتیکی دەگیرسێت",
    },
    es: {
      title: "Vela LED solar",
      description:
        "Velas LED con energía solar que se cargan de día y brillan cálidamente de noche. Impermeables y seguras para mesas de exterior, patios y jardines. Sin necesidad de pilas.\n\n• Energía solar, sin pilas\n• Diseño impermeable de exterior\n• Llama LED parpadeante y cálida\n• Encendido/apagado automático al anochecer y al amanecer",
    },
    fr: {
      title: "Bougie LED solaire",
      description:
        "Bougies LED à énergie solaire qui se rechargent le jour et brillent doucement la nuit. Étanches et sûres pour les tables d'extérieur, terrasses et jardins. Sans piles.\n\n• Énergie solaire, sans piles\n• Design étanche extérieur\n• Flamme LED chaude et vacillante\n• Allumage/extinction automatique au crépuscule",
    },
    de: {
      title: "Solar-LED-Kerze",
      description:
        "Solarbetriebene LED-Kerzen, die sich am Tag aufladen und nachts warm leuchten. Wasserdicht und sicher für Außentische, Terrassen und Gärten. Keine Batterien nötig.\n\n• Solarbetrieben, keine Batterien\n• Wasserdichtes Outdoor-Design\n• Warm flackernde LED-Flamme\n• Auto an/aus bei Dämmerung",
    },
    ru: {
      title: "Солнечная светодиодная свеча",
      description:
        "Светодиодные свечи на солнечной энергии, заряжаются днем и тепло светятся ночью. Водонепроницаемые и безопасные для уличных столов, патио и садов. Без батареек.\n\n• Солнечная энергия, без батареек\n• Водонепроницаемый дизайн\n• Теплое мерцающее пламя\n• Автовключение в сумерках",
    },
    tr: {
      title: "Güneş Enerjili LED Mum",
      description:
        "Gündüz şarj olan, gece sıcak bir ışıkla parlayan güneş enerjili LED mumlar. Su geçirmez; dış mekan masaları, veranda ve bahçeler için güvenli. Pil gerekmez.\n\n• Güneş enerjili, pilsiz\n• Su geçirmez dış mekan tasarımı\n• Sıcak titreyen LED alev\n• Akşam ve şafakta otomatik aç/kapa",
    },
    zh: {
      title: "太阳能LED蜡烛灯",
      description:
        "白天充电、夜晚散发温暖光芒的太阳能LED蜡烛灯。防水，适合户外餐桌、露台和花园。无需电池。\n\n• 太阳能供电，无需电池\n• 户外防水设计\n• 温暖闪烁的LED火焰\n• 黄昏和黎明自动开关",
    },
  },
  "liqin-wireless-speaker": {
    en: {
      title: "Liqin Wireless Bluetooth Speaker",
      description:
        "Compact wireless speaker with rich bass and clear highs. Connects via Bluetooth, features a built-in microphone, TF card slot and long battery life. Great for travel and home.\n\n• Bluetooth connectivity\n• Built-in microphone\n• TF card slot\n• Rechargeable battery",
    },
    fa: {
      title: "اسپیکر بی‌سیم بلوتوثی",
      description:
        "اسپیکر بی‌سیم جمع‌وجور با بیس قوی و صدای شفاف. اتصال بلوتوثی، میکروفون داخلی، درگاه کارت حافظه و باتری بادوام. عالی برای سفر و خانه.\n\n• اتصال بلوتوث\n• میکروفون داخلی\n• درگاه کارت TF\n• باتری قابل شارژ",
    },
    ar: {
      title: "مكبر صوت لاسلكي بلوتوث",
      description:
        "مكبر صوت لاسلكي مضغوط بجهير غني وصوت واضح. يتصل عبر البلوتوث مع ميكروفون مدمج ومنفذ بطاقة ذاكرة وبطارية طويلة الأمد. رائع للسفر والمنزل.\n\n• اتصال بلوتوث\n• ميكروفون مدمج\n• منفذ بطاقة ذاكرة\n• بطارية قابلة للشحن",
    },
    ckb: {
      title: "سپیکەری بێتەلی بلوتوث",
      description:
        "سپیکەری بێتەلی بچووک لەگەڵ بەیسی بەهێز و دەنگی ڕوون. بە بلوتوث کاردەکات، مایکرۆفۆنی ناوەکی و شوێنی کارتی بیرگە و باترییەکی بەردەوامی هەیە. بەرزترین بۆ سەفەر و ماڵ.\n\n• پەیوەندی بلوتوث\n• مایکرۆفۆنی ناوەکی\n• شوێنی کارتی TF\n• باتری دووبارە شوکرکراوە",
    },
    es: {
      title: "Altavoz inalámbrico Bluetooth Liqin",
      description:
        "Altavoz inalámbrico compacto con graves ricos y agudos claros. Conexión Bluetooth, micrófono integrado, ranura para tarjeta TF y larga duración de batería. Ideal para viajes y el hogar.\n\n• Conexión Bluetooth\n• Micrófono integrado\n• Ranura para tarjeta TF\n• Batería recargable",
    },
    fr: {
      title: "Enceinte sans fil Bluetooth Liqin",
      description:
        "Enceinte sans fil compacte avec des basses riches et des aigus clairs. Connexion Bluetooth, microphone intégré, port carte TF et longue autonomie. Parfaite pour les voyages et la maison.\n\n• Connectivité Bluetooth\n• Microphone intégré\n• Port carte TF\n• Batterie rechargeable",
    },
    de: {
      title: "Liqin Kabelloser Bluetooth-Lautsprecher",
      description:
        "Kompakter kabelloser Lautsprecher mit kräftigen Bässen und klaren Höhen. Bluetooth-Verbindung, eingebautes Mikrofon, TF-Kartensteckplatz und lange Akkulaufzeit. Ideal für Reisen und Zuhause.\n\n• Bluetooth-Konnektivität\n• Eingebautes Mikrofon\n• TF-Kartensteckplatz\n• Wiederaufladbarer Akku",
    },
    ru: {
      title: "Беспроводная Bluetooth-колонка Liqin",
      description:
        "Компактная беспроводная колонка с насыщенными басами и чистым звуком. Bluetooth, встроенный микрофон, слот для карты TF и долгая работа от батареи. Отлично для путешествий и дома.\n\n• Bluetooth\n• Встроенный микрофон\n• Слот для карты TF\n• Аккумулятор",
    },
    tr: {
      title: "Liqin Kablosuz Bluetooth Hoparlör",
      description:
        "Zengin bas ve net tizlere sahip kompakt kablosuz hoparlör. Bluetooth bağlantısı, dahili mikrofon, TF kart yuvası ve uzun pil ömrü. Seyahat ve ev için harika.\n\n• Bluetooth bağlantısı\n• Dahili mikrofon\n• TF kart yuvası\n• Şarj edilebilir pil",
    },
    zh: {
      title: "Liqin无线蓝牙音箱",
      description:
        "紧凑型无线音箱，低音浑厚，高音清晰。支持蓝牙连接，内置麦克风、TF卡槽和持久电池续航。非常适合旅行和居家。\n\n• 蓝牙连接\n• 内置麦克风\n• TF卡槽\n• 可充电电池",
    },
  },
  "winter-sheepskin-half-finger-gloves": {
    en: {
      title: "Winter Sheepskin Half Finger Gloves",
      description:
        "Warm half-finger gloves with soft sheepskin-like lining. Keep your hands cozy while staying free to use your phone. Great for driving, cycling and daily winter use.\n\n• Soft warm lining\n• Half-finger design for touchscreen use\n• Fleece cuffs keep warmth in\n• Fits most hand sizes",
    },
    fa: {
      title: "دستکش نیمه‌انگشتی زمستانی پشمی",
      description:
        "دستکش‌های نیمه‌انگشتی گرم با آستر نرم و پشمی. دستان شما را گرم نگه می‌دارند و در عین حال امکان استفاده از گوشی را می‌دهند. عالی برای رانندگی، دوچرخه‌سواری و روزهای زمستان.\n\n• آستر نرم و گرم\n• طراحی نیمه‌انگشتی برای کار با صفحه‌نمایش\n• مچ کش‌دار برای حفظ گرما\n• مناسب اکثر اندازه‌ها",
    },
    ar: {
      title: "قفازات صوفية شتوية نصف أصابع",
      description:
        "قفازات شتوية نصف أصابع ببطانة صوفية ناعمة. تبقي يديك دافئتين وتسمح لك باستخدام هاتفك بحرية. مثالية للقيادة وركوب الدراجة والاستخدام اليومي شتاء.\n\n• بطانة ناعمة دافئة\n• تصميم نصف أصابع للاستخدام مع الشاشات\n• أكمام صوفية تحافظ على الدفء\n• تناسب معظم المقاسات",
    },
    ckb: {
      title: "دەستکێشی زستانەی نیمچە پەنجە بە خوری",
      description:
        "دەستکێشی گەرمی نیمچە پەنجە بە ئاستەری خوری نەرم. دەستەکانت گەرم دەکات و دەتوانیت مۆبایلت بەکاربێنیت. بەرزترین بۆ شۆفێری، سوواری پاسکیل و بەکارهێنانی ڕۆژانەی زستان.\n\n• ئاستەری نەرم و گەرم\n• دیزاینی نیمچە پەنجە بۆ شاشەی دەستی\n• دەستەکانی فلیس بۆ گەرمی\n• گونجاو بۆ زۆربەی قەبارەکان",
    },
    es: {
      title: "Guantes de invierno de piel de oveja sin dedos",
      description:
        "Guantes cálidos sin dedos con suave forro tipo piel de oveja. Mantienen tus manos calientes y libres para usar el móvil. Ideales para conducir, ciclismo y el día a día invernal.\n\n• Forro suave y cálido\n• Diseño sin dedos para pantallas\n• Puños de forro que retienen el calor\n• Se adaptan a la mayoría de tallas",
    },
    fr: {
      title: "Gants d'hiver en peau de mouton sans doigts",
      description:
        "Gants chauds sans doigts avec une doublure douce façon peau de mouton. Gardent vos mains au chaud tout en vous laissant utiliser votre téléphone. Parfaits pour conduire, le vélo et l'hiver.\n\n• Doublure douce et chaude\n• Design sans doigts pour écrans tactiles\n• Poignets polaires qui retiennent la chaleur\n• Conviennent à la plupart des tailles",
    },
    de: {
      title: "Winter-Fingerhandschuhe aus Schaffell",
      description:
        "Warme Fingerhandschuhe mit weichem Schaffell-Futter. Halten die Hände warm und lassen Sie Ihr Handy frei bedienen. Ideal zum Autofahren, Radfahren und für den Winteralltag.\n\n• Weiches, warmes Futter\n• Halbfinger-Design für Touchscreens\n• Fleece-Bündchen halten Wärme\n• Passen den meisten Handgrößen",
    },
    ru: {
      title: "Зимние перчатки из овчины без пальцев",
      description:
        "Теплые полупальчатые перчатки с мягкой подкладкой как овчина. Согревают руки и позволяют пользоваться телефоном. Отлично подходят для вождения, велосипеда и зимних будней.\n\n• Мягкая теплая подкладка\n• Полупальцы для сенсорных экранов\n• Флисовые манжеты сохраняют тепло\n• Подходят большинству размеров",
    },
    tr: {
      title: "Kışlık Yapağı Yarım Parmak Eldiven",
      description:
        "Yumuşak yapağı benzeri astarlı sıcak yarım parmak eldivenler. Ellerinizi sıcak tutar ve telefonunuzu rahatça kullanmanızı sağlar. Sürüş, bisiklet ve kış için harika.\n\n• Yumuşak sıcak astar\n• Ekran kullanımı için yarım parmak tasarım\n• Isıyı koruyan polar manşetler\n• Çoğu el boyutuna uyar",
    },
    zh: {
      title: "冬季羊皮半指手套",
      description:
        "带有柔软羊皮状衬里的保暖半指手套。保持双手温暖，同时可以自由使用手机。非常适合驾驶、骑行和冬季日常使用。\n\n• 柔软保暖内衬\n• 半指设计方便触屏操作\n• 摇粒绒袖口锁住温暖\n• 适合大多数手型",
    },
  },
  "applicable-universal-phone-case-mobile-phone-case-aromatherapy-metal": {
    en: {
      title: "Aromatherapy Metal Phone Case (Universal)",
      description:
        "Stylish metal phone case with a built-in aromatherapy vent holder. Drop the essential oil pad inside and enjoy a calming scent on the go. Universal fit with precise cutouts.\n\n• Built-in aromatherapy holder\n• Durable metal back\n• Universal compatibility\n• Precise cutouts for ports",
    },
    fa: {
      title: "قاب فلزی گوشی با محفظه رایحه‌درمانی",
      description:
        "قاب فلزی شیک گوشی با نگه‌دارنده رایحه داخلی. پد روغن‌های ضروری را داخل آن بگذارید و در حال حرکت از بوی آرامش‌بخش لذت ببرید. مناسب اکثر گوشی‌ها با برش‌های دقیق.\n\n• نگه‌دارنده رایحه داخلی\n• پشت فلزی مقاوم\n• سازگاری جهانی\n• برش‌های دقیق برای درگاه‌ها",
    },
    ar: {
      title: "غلاف هاتف معدني بالعلاج العطري (عالمي)",
      description:
        "غلاف هاتف معدني أنيق مع حامل عطري مدمج. ضع وسادة الزيوت العطرية بالداخل واستمتع برائحة مهدئة أثناء التنقل. توافق عالمي مع فتحات دقيقة.\n\n• حامل عطري مدمج\n• ظهر معدني متين\n• توافق عالمي\n• فتحات دقيقة للمنافذ",
    },
    ckb: {
      title: "كێسی مۆبایلی کانزایی بە بۆنخۆشی",
      description:
        "كێسی مۆبایلی کانزایی جوان لەگەڵ شوێنی بۆنی تێکردن. پەدی ڕۆنی بۆنخۆش بخەرە ناوەوە و لە بۆنی ئاسوودەکەر کەف بکە لە کاتی گەشتی. گونجاو بۆ زۆربەی مۆبایلەکان.\n\n• شوێنی بۆنخۆشی لە ناوەوە\n• پشتی کانزایی بەهێز\n• گونجاو لەگەڵ زۆربەی مۆبایلەکان\n• کونی ورد بۆ دروازەکان",
    },
    es: {
      title: "Funda metálica para móvil con aromaterapia (universal)",
      description:
        "Elegante funda metálica con soporte de aromaterapia integrado. Introduce la pastilla de aceites esenciales y disfruta de una fragancia relajante. Ajuste universal con recortes precisos.\n\n• Soporte de aromaterapia integrado\n• Trasera metálica resistente\n• Compatibilidad universal\n• Recortes precisos para los puertos",
    },
    fr: {
      title: "Coque métallique pour téléphone avec aromathérapie (universel)",
      description:
        "Coque métallique élégante avec porte-aromathérapie intégré. Glissez la pastille d'huiles essentielles à l'intérieur et profitez d'un parfum apaisant en déplacement. Compatibilité universelle.\n\n• Porte-aromathérapie intégré\n• Dos métallique résistant\n• Compatibilité universelle\n• Découpes précises",
    },
    de: {
      title: "Aromatherapie-Metall-Handyhülle (universal)",
      description:
        "Stilvolle Metall-Handyhülle mit integriertem Aromatherapie-Halter. Legen Sie das Duftkissen hinein und genießen Sie einen beruhigenden Duft unterwegs. Universelle Passform mit präzisen Ausschnitten.\n\n• Integrierter Aromatherapie-Halter\n• Robustes Metall-Rückteil\n• Universelle Kompatibilität\n• Präzise Ausschnitte",
    },
    ru: {
      title: "Металлический чехол с ароматерапией (универсальный)",
      description:
        "Стильный металлический чехол со встроенным держателем для ароматерапии. Вставьте подушечку с эфирным маслом и наслаждайтесь успокаивающим ароматом. Универсальная совместимость.\n\n• Встроенный держатель для ароматерапии\n• Прочная металлическая спинка\n• Универсальная совместимость\n• Точные вырезы под разъемы",
    },
    tr: {
      title: "Aromaterapi Metal Telefon Kılıfı (Evrensel)",
      description:
        "Dahili aromaterapi tutucusu olan şık metal telefon kılıfı. İçine esansiyel yağ pedini koyun ve hareket halindeyken sakinleştirici bir koku keyfi yaşayın. Evrensel uyum.\n\n• Dahili aromaterapi tutucusu\n• Dayanıklı metal sırt\n• Evrensel uyumluluk\n• Portlar için hassas kesimler",
    },
    zh: {
      title: "香薰金属手机壳（通用款）",
      description:
        "时尚金属手机壳，内置香薰挥发槽。将精油垫放入其中，随时随地享受舒缓香气。通用适配，开孔精准。\n\n• 内置香薰槽\n• 耐用金属背板\n• 通用兼容\n• 端口开孔精准",
    },
  },
  "big-belly-cup-appearance-straw-plastic-high-temperature-resistant-sports-portable-water-bottle": {
    en: {
      title: "Sports Water Bottle with Straw (Big Belly)",
      description:
        "Large-capacity portable water bottle with a convenient straw lid. Made of high-temperature resistant plastic, perfect for sports, travel and daily hydration.\n\n• Big capacity design\n• Convenient straw lid\n• High-temperature resistant\n• Lightweight and portable",
    },
    fa: {
      title: "بطری آب ورزشی با نی (شکم‌گنده)",
      description:
        "بطری آب قابل حمل با ظرفیت بالا و در نی‌دار کاربردی. ساخته شده از پلاستیک مقاوم در برابر حرارت بالا؛ عالی برای ورزش، سفر و آبرسانی روزانه.\n\n• طراحی با ظرفیت بالا\n• درب نی‌دار راحت\n• مقاوم در برابر حرارت بالا\n• سبک و قابل حمل",
    },
    ar: {
      title: "زجاجة ماء رياضية بماصة (سعة كبيرة)",
      description:
        "زجاجة ماء محمولة كبيرة السعة مع غطاء ماصة مريح. مصنوعة من بلاستيك مقاوم لدرجات الحرارة العالية، مثالية للرياضة والسفر والترطيب اليومي.\n\n• تصميم كبير السعة\n• غطاء ماصة مريح\n• مقاوم لدرجات الحرارة العالية\n• خفيفة الوزن وسهلة الحمل",
    },
    ckb: {
      title: "مووچکەی ئاوی وەرزشی بە سترێو (گەورە)",
      description:
        "مووچکەی ئاوی گەڕۆکی قەبارە گەورە لەگەڵ داپۆشەرێکی سترێوی ئاسان. لە پلاستیکی بەرگەر گیراوە بۆ پلەی گەرمی بەرز، بەرزترین بۆ وەرزش، سەفەر و ئاوی ڕۆژانە.\n\n• دیزاینی قەبارە گەورە\n• داپۆشەری سترێوی ئاسان\n• بەرگەر بۆ پلەی گەرمی بەرز\n• سووک و گەڕۆک",
    },
    es: {
      title: "Botella de agua deportiva con pajita (gran capacidad)",
      description:
        "Botella de agua portátil de gran capacidad con una práctica tapa con pajita. Hecha de plástico resistente a altas temperaturas, perfecta para deporte, viajes e hidratación diaria.\n\n• Diseño de gran capacidad\n• Tapa con pajita práctica\n• Resistente a altas temperaturas\n• Ligera y portátil",
    },
    fr: {
      title: "Bouteille d'eau sport avec paille (grande capacité)",
      description:
        "Bouteille d'eau portable grande capacité avec un bouchon paille pratique. Fabriquée en plastique résistant aux hautes températures, parfaite pour le sport, les voyages et l'hydratation quotidienne.\n\n• Grande capacité\n• Bouchon paille pratique\n• Résistant aux hautes températures\n• Légère et portable",
    },
    de: {
      title: "Sport-Wasserflasche mit Trinkhalm (großes Volumen)",
      description:
        "Tragbare Wasserflasche mit großem Fassungsvermögen und praktischem Trinkhalm-Deckel. Aus hitzebeständigem Kunststoff, ideal für Sport, Reisen und den täglichen Flüssigkeitsbedarf.\n\n• Großes Fassungsvermögen\n• Praktischer Trinkhalm-Deckel\n• Hitzebeständig\n• Leicht und tragbar",
    },
    ru: {
      title: "Спортивная бутылка для воды с трубочкой (большая)",
      description:
        "Портативная бутылка для воды большой емкости с удобной крышкой-трубочкой. Из термостойкого пластика, идеальна для спорта, путешествий и ежедневного увлажнения.\n\n• Большая емкость\n• Удобная крышка-трубочка\n• Термостойкий пластик\n• Легкая и портативная",
    },
    tr: {
      title: "Bardaklı Büyük Spor Su Şişesi",
      description:
        "Büyük kapasiteli, pratik pipetli kapağa sahip taşınabilir su şişesi. Yüksek sıcaklığa dayanıklı plastikten üretilmiştir; spor, seyahat ve günlük su ihtiyacı için mükemmel.\n\n• Büyük kapasite tasarımı\n• Pratik pipetli kapak\n• Yüksek sıcaklığa dayanıklı\n• Hafif ve taşınabilir",
    },
    zh: {
      title: "带吸管大肚运动水瓶",
      description:
        "大容量便携水瓶，带方便的吸管盖。采用耐高温塑料制成，非常适合运动、旅行和日常补水。\n\n• 大容量设计\n• 方便的吸管盖\n• 耐高温\n• 轻便便携",
    },
  },
  "men-women-sport-road-bike-sunglasses-uv400-cycling-glasses": {
    en: {
      title: "UV400 Sport Cycling Sunglasses",
      description:
        "Lightweight sport sunglasses with UV400 protection and polarized lenses. Anti-slip nose pads keep them in place on rides and runs. Unisex design for men and women.\n\n• UV400 full protection\n• Anti-slip nose pads\n• Lightweight frame\n• Unisex fit",
    },
    fa: {
      title: "عینک آفتابی ورزشی UV400 دوچرخه‌سواری",
      description:
        "عینک آفتابی ورزشی سبک با محافظت UV400 و لنز پلاریزه. پد بینی ضدلغزش برای ثبات هنگام دوچرخه‌سواری و دویدن. طراحی یونیسکس برای مردان و زنان.\n\n• محافظت کامل UV400\n• پد بینی ضدلغزش\n• قاب سبک\n• فیت یونیسکس",
    },
    ar: {
      title: "نظارات رياضية للدراجات UV400",
      description:
        "نظارات رياضية خفيفة بحماية UV400 وعدسات مستقطبة. وسائد أنف مانعة للانزلاق تبقيهما ثابتتين أثناء ركوب الدراجات والجري. تصميم للجنسين.\n\n• حماية كاملة UV400\n• وسائد أنف مانعة للانزلاق\n• إطار خفيف\n• مقاس للجنسين",
    },
    ckb: {
      title: "عیناکی وەرزشی سواری UV400",
      description:
        "عیناکی وەرزشی سووک بە پاراستنی UV400 و لینزی پۆلارایزد. پادی لوت ناسلت هێشتەی لە شوێنی خۆیدا دەهێڵێت لە کاتی سواری و ڕاکردن. دیزاینی هاوسێکست بۆ پیاو و ژن.\n\n• پاراستنی تەواو UV400\n• پادی لوت ناسلت\n• چوارچێوەی سووک\n• گونجاو بۆ هەردوو ڕەگەز",
    },
    es: {
      title: "Gafas de sol deportivas UV400 para ciclismo",
      description:
        "Gafas deportivas ligeras con protección UV400 y lentes polarizadas. Las almohadillas nasales antideslizantes las mantienen en su sitio. Diseño unisex para hombres y mujeres.\n\n• Protección UV400 completa\n• Almohadillas nasales antideslizantes\n• Montura ligera\n• Ajuste unisex",
    },
    fr: {
      title: "Lunettes de sport UV400 pour cyclisme",
      description:
        "Lunettes de sport légères avec protection UV400 et verres polarisés. Plaquettes de nez antidérapantes pour rester en place. Design unisexe pour hommes et femmes.\n\n• Protection UV400 complète\n• Plaquettes antidérapantes\n• Monture légère\n• Coupe unisexe",
    },
    de: {
      title: "UV400-Sport-Sonnenbrille fürs Radfahren",
      description:
        "Leichte Sport-Sonnenbrille mit UV400-Schutz und polarisierten Gläsern. Rutschfeste Nasenpads halten sie bei Fahrten und Läufen an Ort und Stelle. Unisex-Design.\n\n• Vollständiger UV400-Schutz\n• Rutschfeste Nasenpads\n• Leichter Rahmen\n• Unisex-Passform",
    },
    ru: {
      title: "Спортивные очки UV400 для велосипеда",
      description:
        "Легкие спортивные очки с защитой UV400 и поляризованными линзами. Нескользящие носовые упоры удерживают их при езде и беге. Унисекс-дизайн.\n\n• Полная защита UV400\n• Нескользящие носовые упоры\n• Легкая оправа\n• Унисекс",
    },
    tr: {
      title: "UV400 Spor Bisiklet Güneş Gözlüğü",
      description:
        "UV400 korumalı ve polarize lensli hafif spor güneş gözlüğü. Kaymaz burun pedleri sürüş ve koşularda yerinde kalmasını sağlar. Kadın ve erkek için unisex tasarım.\n\n• Tam UV400 koruma\n• Kaymaz burun pedleri\n• Hafif çerçeve\n• Unisex uyum",
    },
    zh: {
      title: "UV400运动骑行太阳镜",
      description:
        "轻便运动太阳镜，UV400防护和偏光镜片。防滑鼻托在骑行和跑步时保持固定。男女通用设计。\n\n• 全面UV400防护\n• 防滑鼻托\n• 轻便镜框\n• 男女通用",
    },
  },
  "yoga-exercise-suit": {
    en: {
      title: "Yoga Exercise Suit Set",
      description:
        "Comfortable two-piece yoga set with moisture-wicking fabric. Stretchy and breathable for yoga, pilates and home workouts. Moves with your body.\n\n• Two-piece set\n• Moisture-wicking fabric\n• Stretchy and breathable\n• Perfect for yoga and pilates",
    },
    fa: {
      title: "ست لباس یوگا",
      description:
        "ست دو تکه یوگای راحت با پارچه خشک‌کننده رطوبت. کش‌دار و تنفس‌پذیر برای یوگا، پیلاتس و تمرین خانگی. همراه با حرکات بدن حرکت می‌کند.\n\n• ست دو تکه\n• پارچه خشک‌کننده رطوبت\n• کش‌دار و تنفس‌پذیر\n• عالی برای یوگا و پیلاتس",
    },
    ar: {
      title: "طقم ملابس اليوغا",
      description:
        "طقم يوجا مريح من قطعتين بقماش يمتص الرطوبة. مطاط وقابل للتنفس لليوجا والبيلاتس والتمارين المنزلية. يتحرك مع جسدك.\n\n• طقم من قطعتين\n• قماش يمتص الرطوبة\n• مطاط وقابل للتنفس\n• مثالي لليوجا والبيلاتس",
    },
    ckb: {
      title: "کۆمەڵە جلی یۆگا",
      description:
        "کۆمەڵە جلی یۆگای ئاسوودەی دوو پارچەیی بە جلێک کە ئارەق بە خێرایی وشک دەکات. قەستاو و هەناسەدانە بۆ یۆگا، پیلاتێس و ڕاهێنانی ماڵەوە. لەگەڵ جەستەت دەجوڵێت.\n\n• کۆمەڵەی دوو پارچەیی\n• جلەکە ئارەق بە خێرایی وشک دەکات\n• قەستاو و هەناسەدانە\n• بەرزترین بۆ یۆگا و پیلاتێس",
    },
    es: {
      title: "Traje de ejercicio de yoga",
      description:
        "Cómodo conjunto de yoga de dos piezas con tejido que absorbe la humedad. Elástico y transpirable para yoga, pilates y entrenamientos en casa. Se mueve con tu cuerpo.\n\n• Conjunto de dos piezas\n• Tejido que absorbe la humedad\n• Elástico y transpirable\n• Perfecto para yoga y pilates",
    },
    fr: {
      title: "Ensemble de yoga",
      description:
        "Ensemble de yoga confortable de deux pièces en tissu qui évacue l'humidité. Extensible et respirant pour le yoga, le pilates et le sport à la maison. Suit vos mouvements.\n\n• Ensemble deux pièces\n• Tissu évacuant l'humidité\n• Extensible et respirant\n• Parfait pour yoga et pilates",
    },
    de: {
      title: "Yoga-Trainingsanzug",
      description:
        "Bequemes zweiteiliges Yoga-Set aus feuchtigkeitsableitendem Stoff. Dehnbar und atmungsaktiv für Yoga, Pilates und Heimtraining. Bewegt sich mit Ihrem Körper.\n\n• Zweiteiliges Set\n• Feuchtigkeitsableitender Stoff\n• Dehnbar und atmungsaktiv\n• Perfekt für Yoga und Pilates",
    },
    ru: {
      title: "Костюм для йоги",
      description:
        "Удобный двухкомплектный набор для йоги из влагоотводящей ткани. Эластичный и дышащий для йоги, пилатеса и домашних тренировок. Движется вместе с телом.\n\n• Комплект из двух предметов\n• Влагоотводящая ткань\n• Эластичный и дышащий\n• Идеален для йоги и пилатеса",
    },
    tr: {
      title: "Yoga Egzersiz Takımı",
      description:
        "Nemi emen kumaştan rahat iki parçalı yoga seti. Yoga, pilates ve ev egzersizleri için esnek ve nefes alabilir. Vücudunuzla birlikte hareket eder.\n\n• İki parçalı set\n• Nemi emen kumaş\n• Esnek ve nefes alabilir\n• Yoga ve pilates için mükemmel",
    },
    zh: {
      title: "瑜伽运动套装",
      description:
        "舒适的两件套瑜伽套装，采用吸湿排汗面料。弹性透气，适合瑜伽、普拉提和居家锻炼。随身体自由伸展。\n\n• 两件套\n• 吸湿排汗面料\n• 弹性透气\n• 非常适合瑜伽和普拉提",
    },
  },
  "lard-jar-kitchen-ceramic-seasoning-jar": {
    en: {
      title: "Ceramic Seasoning Jar for Kitchen",
      description:
        "Elegant ceramic jar perfect for storing seasonings, herbs and spices. Keeps contents fresh and adds a vintage touch to your kitchen counter.\n\n• Durable ceramic material\n• Airtight seal\n• Vintage style design\n• Multipurpose storage",
    },
    fa: {
      title: "شیشه ادویه سرامیکی آشپزخانه",
      description:
        "شیشه سرامیکی شیک برای نگهداری ادویه، سبزیجات خشک و چاشنی‌ها. محتویات را تازه نگه می‌دارد و جلوه قدیمی به پیشخوان آشپزخانه می‌دهد.\n\n• جنس سرامیکی بادوام\n• درب هوابند\n• طراحی سبک قدیمی\n• کاربری چندمنظوره",
    },
    ar: {
      title: "مرطبان بهارات سيراميكي للمطبخ",
      description:
        "مرطبان سيراميكي أنيق مثالي لتخزين البهارات والأعشاب والتوابل. يحفظ المحتويات طازجة ويضيف لمسة كلاسيكية لطاولة مطبخك.\n\n• مادة سيراميكية متينة\n• غطاء محكم\n• تصميم كلاسيكي\n• تخزين متعدد الأغراض",
    },
    ckb: {
      title: "قووتوی تووامی سیرامیکی بۆ چێشتخانە",
      description:
        "قووتوی سیرامیکی جوان بۆ هەڵگرتنی تووامی، گژوگیا و بەهارات. ناوەکە تازە دەهێڵێتەوە و دیمەنی کۆنی بۆ مێزی چێشتخانەت زیاد دەکات.\n\n• مادەی سیرامیکی بەهێز\n• داپۆشەری هەوا-نەدەر\n• دیزاینی شێوازی کۆن\n• هەڵگرتنی چەند مەبەست",
    },
    es: {
      title: "Frasco de especias de cerámica para cocina",
      description:
        "Elegante frasco de cerámica perfecto para guardar especias, hierbas y condimentos. Mantiene el contenido fresco y añade un toque vintage a tu encimera.\n\n• Cerámica resistente\n• Cierre hermético\n• Diseño vintage\n• Almacenamiento multiusos",
    },
    fr: {
      title: "Pot à épices en céramique pour la cuisine",
      description:
        "Élégant pot en céramique parfait pour stocker épices, herbes et condiments. Garde le contenu frais et apporte une touche vintage à votre plan de travail.\n\n• Céramique durable\n• Fermeture hermétique\n• Style vintage\n• Rangement polyvalent",
    },
    de: {
      title: "Keramik-Gewürzglas für die Küche",
      description:
        "Elegantes Keramikglas, perfekt zur Aufbewahrung von Gewürzen, Kräutern und Würzmitteln. Hält den Inhalt frisch und verleiht Ihrer Küchenzeile einen Vintage-Touch.\n\n• Langlebiges Keramikmaterial\n• Luftdichter Verschluss\n• Vintage-Design\n• Mehrzweck-Aufbewahrung",
    },
    ru: {
      title: "Керамическая банка для приправ",
      description:
        "Элегантная керамическая банка для хранения приправ, трав и специй. Сохраняет содержимое свежим и придает винтажный вид кухонной стойке.\n\n• Прочная керамика\n• Герметичная крышка\n• Винтажный дизайн\n• Многофункциональное хранение",
    },
    tr: {
      title: "Mutfak Seramik Baharat Kavanozu",
      description:
        "Baharat, ot ve çeşnileri saklamak için mükemmel şık seramik kavanoz. İçindekileri taze tutar ve mutfak tezgahınıza vintage bir dokunuş katar.\n\n• Dayanıklı seramik malzeme\n• Hava geçirmez kapak\n• Vintage tarz tasarım\n• Çok amaçlı saklama",
    },
    zh: {
      title: "厨房陶瓷调料罐",
      description:
        "优雅的陶瓷罐，非常适合存放调味料、香草和香料。保持内容物新鲜，为厨房台面增添复古气息。\n\n• 耐用陶瓷材质\n• 密封盖\n• 复古风格设计\n• 多用途收纳",
    },
  },
  "rj45-network-docking-converter-cable-extension-connector-ne8ff": {
    en: {
      title: "RJ45 Network Cable Extension Adapter",
      description:
        "Reliable RJ45 docking converter for extending network cables. Durable metal housing and gold-plated contacts for stable signal. Perfect for home and office wiring.\n\n• RJ45 to RJ45 extension\n• Metal housing\n• Gold-plated contacts\n• Stable signal transfer",
    },
    fa: {
      title: "مبدل کابل شبکه RJ45",
      description:
        "مبدل RJ45 قابل اعتماد برای افزایش طول کابل شبکه. بدنه فلزی مقاوم و اتصالات طلاکاری‌شده برای سیگنال پایدار. عالی برای سیم‌کشی منزل و دفتر.\n\n• افزایش طول RJ45 به RJ45\n• بدنه فلزی\n• اتصالات طلاکاری‌شده\n• انتقال سیگنال پایدار",
    },
    ar: {
      title: "موصل تمديد كابل الشبكة RJ45",
      description:
        "موصل RJ45 موثوق لتمديد كابلات الشبكة. هيكل معدني متين وملامسات مطلية بالذهب لاستقرار الإشارة. مثالي للأسلاك في المنزل والمكتب.\n\n• تمديد RJ45 إلى RJ45\n• هيكل معدني\n• ملامسات مطلية بالذهب\n• نقل إشارة مستقر",
    },
    ckb: {
      title: "پێکهاتەری درێژکەرەوەی کەبڵی تۆڕ RJ45",
      description:
        "پێکهاتەری RJ45 باوەرپێکراو بۆ درێژکردنەوەی کەبڵی تۆڕ. لەشی کانزایی بەهێز و پەیوەندییە ئاڵتونییەکان بۆ سینگناڵی جێگیر. بەرزترین بۆ سیمکێشانی ماڵ و نووسینگە.\n\n• درێژکردنەوەی RJ45 بۆ RJ45\n• لەشی کانزایی\n• پەیوەندی ئاڵتونی\n• گواستنەوەی سینگناڵی جێگیر",
    },
    es: {
      title: "Adaptador de extensión de cable de red RJ45",
      description:
        "Conversor de conexión RJ45 fiable para alargar cables de red. Carcasa metálica resistente y contactos chapados en oro para una señal estable. Perfecto para cableado doméstico y de oficina.\n\n• Extensión RJ45 a RJ45\n• Carcasa metálica\n• Contactos dorados\n• Transferencia de señal estable",
    },
    fr: {
      title: "Adaptateur d'extension de câble réseau RJ45",
      description:
        "Convertisseur RJ45 fiable pour prolonger les câbles réseau. Boîtier métallique robuste et contacts dorés pour un signal stable. Parfait pour les câblages à la maison et au bureau.\n\n• Extension RJ45 vers RJ45\n• Boîtier métallique\n• Contacts dorés\n• Signal stable",
    },
    de: {
      title: "RJ45-Netzwerkkabel-Verlängerungsadapter",
      description:
        "Zuverlässiger RJ45-Adapter zum Verlängern von Netzwerkkabeln. Robustes Metallgehäuse und vergoldete Kontakte für stabiles Signal. Perfekt für Haus- und Büroverkabelung.\n\n• RJ45-zu-RJ45-Verlängerung\n• Metallgehäuse\n• Vergoldete Kontakte\n• Stabile Signalübertragung",
    },
    ru: {
      title: "Удлинительный разъем RJ45 для сетевого кабеля",
      description:
        "Надежный переходник RJ45 для удлинения сетевых кабелей. Прочный металлический корпус и позолоченные контакты для стабильного сигнала. Идеален для дома и офиса.\n\n• Удлинение RJ45 к RJ45\n• Металлический корпус\n• Позолоченные контакты\n• Стабильная передача сигнала",
    },
    tr: {
      title: "RJ45 Ağ Kablosu Uzatma Adaptörü",
      description:
        "Ağ kablolarını uzatmak için güvenilir RJ45 dönüştürücü. Dayanıklı metal kasa ve kararlı sinyal için altın kaplama kontaklar. Ev ve ofis kablolaması için mükemmel.\n\n• RJ45'ten RJ45'e uzatma\n• Metal kasa\n• Altın kaplama kontaklar\n• Kararlı sinyal iletimi",
    },
    zh: {
      title: "RJ45网络线延长连接器",
      description:
        "可靠的RJ45对接转换器，用于延长网线。耐用的金属外壳和镀金触点确保信号稳定。非常适合家庭和办公室布线。\n\n• RJ45转RJ45延长\n• 金属外壳\n• 镀金触点\n• 信号传输稳定",
    },
  },
  "smart-bracelet-fitness-tracker-waterproof-heart-rate-blood-pressure-fitness-bracelet-smart-watch": {
    en: {
      title: "Waterproof Fitness Tracker Smart Bracelet",
      description:
        "Track your steps, heart rate and sleep with this waterproof smart bracelet. Large display, long battery life and multiple sport modes. Monitors blood pressure and health data.\n\n• Heart rate and blood pressure monitoring\n• Waterproof design\n• Sleep and step tracking\n• Long battery life",
    },
    fa: {
      title: "دستبند هوشمند ضدآب ردیاب سلامت",
      description:
        "قدم‌ها، ضربان قلب و خواب خود را با این دستبند هوشمند ضدآب ردیابی کنید. نمایشگر بزرگ، باتری بادوام و چندین حالت ورزشی. پایش فشار خون و داده‌های سلامت.\n\n• پایش ضربان قلب و فشار خون\n• طراحی ضدآب\n• ردیابی خواب و قدم\n• باتری بادوام",
    },
    ar: {
      title: "سوار ذكي مقاوم للماء لتتبع اللياقة",
      description:
        "تتبع خطواتك ونبض قلبك ونومك مع هذا السوار الذكي المقاوم للماء. شاشة كبيرة وبطارية طويلة الأمد وعدة أوضاع رياضية. يراقب ضغط الدم والبيانات الصحية.\n\n• مراقبة ضربات القلب وضغط الدم\n• تصميم مقاوم للماء\n• تتبع النوم والخطوات\n• بطارية طويلة الأمد",
    },
    ckb: {
      title: "بازوبەندی زیرەکی ئاوپارێز بۆ چاودێری تەندروستی",
      description:
        "هەنگاوەکانت، لێدانی دڵ و خەوت چاودێری بکە بەم بازوبەندە زیرەکیە ئاوپارێزە. شاشەی گەورە، باتری بەردەوام و چەندین حاڵەتی وەرزشی. پەستانی خوێن و زانیاری تەندروستی چاودێری دەکات.\n\n• چاودێری لێدانی دڵ و پەستانی خوێن\n• دیزاینی ئاوپارێز\n• چاودێری خەو و هەنگاو\n• باتری بەردەوام",
    },
    es: {
      title: "Pulsera inteligente resistente al agua para seguimiento fitness",
      description:
        "Haz un seguimiento de tus pasos, ritmo cardíaco y sueño con esta pulsera inteligente resistente al agua. Pantalla grande, batería duradera y varios modos deportivos. Monitorea presión arterial.\n\n• Monitoreo de frecuencia cardíaca y presión\n• Diseño resistente al agua\n• Seguimiento de sueño y pasos\n• Batería de larga duración",
    },
    fr: {
      title: "Bracelet intelligent étanche pour le suivi de forme",
      description:
        "Suivez vos pas, votre fréquence cardiaque et votre sommeil avec ce bracelet intelligent étanche. Grand écran, longue autonomie et plusieurs modes sportifs. Surveille la tension.\n\n• Fréquence cardiaque et tension\n• Design étanche\n• Suivi du sommeil et des pas\n• Longue autonomie",
    },
    de: {
      title: "Wasserdichtes Fitness-Tracker-Smartband",
      description:
        "Verfolgen Sie Schritte, Herzfrequenz und Schlaf mit diesem wasserdichten Smartband. Großes Display, lange Akkulaufzeit und mehrere Sportmodi. Überwacht Blutdruck und Gesundheitsdaten.\n\n• Herzfrequenz- und Blutdruckmessung\n• Wasserdichtes Design\n• Schlaf- und Schritttracking\n• Lange Akkulaufzeit",
    },
    ru: {
      title: "Водонепроницаемый фитнес-браслет",
      description:
        "Отслеживайте шаги, пульс и сон с этим водонепроницаемым умным браслетом. Большой дисплей, долгая работа и несколько спортивных режимов. Мониторинг давления.\n\n• Пульс и давление\n• Водонепроницаемый дизайн\n• Отслеживание сна и шагов\n• Долгая работа батареи",
    },
    tr: {
      title: "Su Geçirmez Akıllı Fitness Takip Bilekliği",
      description:
        "Bu su geçirmez akıllı bileklikle adımlarınızı, kalp atışınızı ve uykunuzu takip edin. Büyük ekran, uzun pil ömrü ve birden fazla spor modu. Kan basıncı takibi.\n\n• Kalp atışı ve tansiyon takibi\n• Su geçirmez tasarım\n• Uyku ve adım takibi\n• Uzun pil ömrü",
    },
    zh: {
      title: "防水智能手环健康追踪器",
      description:
        "用这款防水智能手环追踪您的步数、心率和睡眠。大屏幕、长续航和多种运动模式。监测血压和健康数据。\n\n• 心率和血压监测\n• 防水设计\n• 睡眠和步数追踪\n• 长续航",
    },
  },
  "memory-foam-yoga-pillow": {
    en: {
      title: "Memory Foam Yoga Pillow",
      description:
        "Supportive memory foam cushion that relieves pressure during yoga, meditation and recovery. Durable cover is removable and easy to clean.\n\n• High-density memory foam\n• Pressure relief support\n• Removable washable cover\n• Great for yoga and meditation",
    },
    fa: {
      title: "بالشتک یوگا با فوم حافظه",
      description:
        "کوسن فوم حافظه‌ای حمایت‌کننده که در یوگا، مدیتیشن و استراحت فشار را کم می‌کند. روکش بادوام قابل جدا شدن و به‌راحتی تمیز می‌شود.\n\n• فوم حافظه با تراکم بالا\n• حمایت و کاهش فشار\n• روکش قابل شستشو\n• عالی برای یوگا و مدیتیشن",
    },
    ar: {
      title: "وسادة يوغا من الإسفنج الذكي",
      description:
        "وسادة إسفنج ذكي داعمة تخفف الضغط أثناء اليوغا والتأمل والاسترخاء. الغطاء المتين قابل للإزالة وسهل التنظيف.\n\n• إسفنج ذكي عالي الكثافة\n• دعم وتخفيف الضغط\n• غطاء قابل للإزالة والغسل\n• رائعة لليوغا والتأمل",
    },
    ckb: {
      title: "پاڵاوە یۆگای فۆمی بیرگە",
      description:
        "پاڵاوەی فۆمی بیرگەی پشتگیر کە لە یۆگا، مەراقە و ئاسوودەبوونەوەدا پەستانی کەم دەکاتەوە. داپۆشەری بەهێزە و دەتوانیت بیبشۆیتەوە.\n\n• فۆمی بیرگە بە چڕی بەرز\n• پشتگیری و کەمکردنەوەی پەستان\n• داپۆشەری قەبارەکراو و بشۆراو\n• بەرزترین بۆ یۆگا و مەراقە",
    },
    es: {
      title: "Almohada de yoga de espuma viscoelástica",
      description:
        "Cojín de espuma viscoelástica de apoyo que alivia la presión durante yoga, meditación y recuperación. La funda duradera es extraíble y fácil de limpiar.\n\n• Espuma viscoelástica de alta densidad\n• Soporte que alivia presión\n• Funda extraíble y lavable\n• Ideal para yoga y meditación",
    },
    fr: {
      title: "Coussin de yoga en mousse à mémoire de forme",
      description:
        "Coussin en mousse à mémoire de forme qui soulage la pression pendant le yoga, la méditation et la récupération. Housse durable amovible et lavable.\n\n• Mousse à mémoire haute densité\n• Soulage la pression\n• Housse amovible et lavable\n• Parfait pour yoga et méditation",
    },
    de: {
      title: "Memory-Foam-Yogakissen",
      description:
        "Stützendes Memory-Foam-Kissen, das Druck bei Yoga, Meditation und Erholung lindert. Der strapazierfähige Bezug ist abnehmbar und leicht zu reinigen.\n\n• Hochdichter Memory-Schaum\n• Druckentlastung\n• Abnehmbarer, waschbarer Bezug\n• Ideal für Yoga und Meditation",
    },
    ru: {
      title: "Подушка для йоги с эффектом памяти",
      description:
        "Поддерживающая подушка с эффектом памяти, снимающая напряжение при йоге, медитации и восстановлении. Прочный чехол съемный и легко чистится.\n\n• Плотный материал с эффектом памяти\n• Снимает давление\n• Съемный моющийся чехол\n• Отлично для йоги и медитации",
    },
    tr: {
      title: "Hafıza Köpüğü Yoga Yastığı",
      description:
        "Yoga, meditasyon ve dinlenme sırasında basıncı azaltan destekleyici hafıza köpüğü yastık. Dayanıklı kılıf çıkarılabilir ve kolay temizlenir.\n\n• Yüksek yoğunluklu hafıza köpüğü\n• Basınç azaltıcı destek\n• Çıkarılabilir yıkanabilir kılıf\n• Yoga ve meditasyon için harika",
    },
    zh: {
      title: "记忆棉瑜伽枕",
      description:
        "支撑性记忆棉垫，在瑜伽、冥想和恢复时缓解压力。耐用枕套可拆卸，易于清洁。\n\n• 高密度记忆棉\n• 减压支撑\n• 可拆洗枕套\n• 非常适合瑜伽和冥想",
    },
  },
  "magnetic-portable-smart-watch-wireless-charger": {
    en: {
      title: "Magnetic Portable Smart Watch Charger",
      description:
        "Compact magnetic charging dock for your smart watch. Snap the watch on and it charges fast, anywhere. USB powered with a lightweight travel-friendly design.\n\n• Magnetic snap-on design\n• Fast wireless charging\n• USB powered\n• Compact for travel",
    },
    fa: {
      title: "شارژر مغناطیسی قابل حمل ساعت هوشمند",
      description:
        "پایه شارژ مغناطیسی جمع‌وجور برای ساعت هوشمند شما. ساعت را بگذارید و سریع شارژ کنید؛ هر کجا که باشید. با برق USB و طراحی سبک مناسب سفر.\n\n• طراحی مغناطیسی\n• شارژ سریع بی‌سیم\n• برق USB\n• جمع‌وجور برای سفر",
    },
    ar: {
      title: "شاحن مغناطيسي محمول للساعة الذكية",
      description:
        "قاعدة شحن مغناطيسية مضغوطة لساعتك الذكية. ضع الساعة وستشحن بسرعة في أي مكان. تعمل عبر USB بتصميم خفيف مناسب للسفر.\n\n• تصميم مغناطيسي\n• شحن لاسلكي سريع\n• يعمل عبر USB\n• مضغوط للسفر",
    },
    ckb: {
      title: "شوکەری موگناتیسی گەڕۆکی کاتژمێری زیرەک",
      description:
        "ڕاگرەی شوکری موگناتیسی بچووک بۆ کاتژمێری زیرەکەکەت. کاتژمێرەکە دابنێ و بە خێرایی شوکر دەبێت، لە هەر شوێنێک. بە USB کاردەکات و سووکە بۆ گەشت.\n\n• دیزاینی موگناتیسی\n• شوکری خێرای بێتەلی\n• کارکردن بە USB\n• بچووک بۆ سەفەر",
    },
    es: {
      title: "Cargador magnético portátil para smartwatch",
      description:
        "Base de carga magnética compacta para tu reloj inteligente. Coloca el reloj y se carga rápido, en cualquier lugar. Alimentada por USB con diseño ligero ideal para viajes.\n\n• Diseño magnético de enganche\n• Carga inalámbrica rápida\n• Alimentación USB\n• Compacta para viajar",
    },
    fr: {
      title: "Chargeur magnétique portable pour montre connectée",
      description:
        "Station de charge magnétique compacte pour votre montre connectée. Clipsez la montre et elle se recharge rapidement, où que vous soyez. Alimentée par USB.\n\n• Design magnétique\n• Charge sans fil rapide\n• Alimentation USB\n• Compacte pour les voyages",
    },
    de: {
      title: "Magnetischer tragbarer Smartwatch-Ladegerät",
      description:
        "Kompakte magnetische Ladestation für Ihre Smartwatch. Uhr auflegen und überall schnell laden. USB-betrieben mit leichtem, reisefreundlichem Design.\n\n• Magnetisches Einrast-Design\n• Schnelles kabelloses Laden\n• USB-betrieben\n• Kompakt für Reisen",
    },
    ru: {
      title: "Магнитное портативное зарядное устройство для часов",
      description:
        "Компактная магнитная зарядная подставка для умных часов. Закрепите часы — они быстро заряжаются где угодно. Питание от USB, легкий дизайн.\n\n• Магнитное крепление\n• Быстрая беспроводная зарядка\n• Питание от USB\n• Компактность для путешествий",
    },
    tr: {
      title: "Manyetik Taşınabilir Akıllı Saat Şarj Cihazı",
      description:
        "Akıllı saatiniz için kompakt manyetik şarj üssü. Saati takın, her yerde hızlıca şarj olsun. USB güçlü ve seyahat dostu hafif tasarım.\n\n• Manyetik tak-çıkar tasarım\n• Hızlı kablosuz şarj\n• USB güç\n• Seyahat için kompakt",
    },
    zh: {
      title: "磁性便携智能手表充电器",
      description:
        "为您的智能手表设计的紧凑磁性充电底座。吸附即可快速充电，随处可用。USB供电，轻便旅行友好。\n\n• 磁吸设计\n• 快速无线充电\n• USB供电\n• 旅行便携",
    },
  },
  "retro-leather-watch-band-men": {
    en: {
      title: "Retro Leather Watch Band for Men",
      description:
        "Vintage-style genuine leather watch strap with a comfortable fit. Ages beautifully and fits most standard watches. Easy to install without tools.\n\n• Genuine leather\n• Vintage retro style\n• Fits most watches\n• Tool-free installation",
    },
    fa: {
      title: "بند چرمی ساعت رترو مردانه",
      description:
        "بند چرم طبیعی به سبک قدیمی با فیت راحت. به مرور زیباتر می‌شود و با اکثر ساعت‌های استاندارد سازگار است. نصب آسان بدون ابزار.\n\n• چرم طبیعی\n• سبک قدیمی و رترو\n• سازگار با اکثر ساعت‌ها\n• نصب بدون ابزار",
    },
    ar: {
      title: "سوار جلد ساعة جلد كلاسيكي للرجال",
      description:
        "سوار ساعة من الجلد الطبيعي بأسلوب كلاسيكي ومقاس مريح. يزداد جماله مع الوقت ويناسب معظم الساعات القياسية. سهل التركيب دون أدوات.\n\n• جلد طبيعي\n• أسلوب رجعي كلاسيكي\n• يناسب معظم الساعات\n• تركيب دون أدوات",
    },
    ckb: {
      title: "بەندی چەرمی کاتژمێری ڕێترۆ بۆ پیاو",
      description:
        "بەندی کاتژمێری چەرمی سروشتی بە شێوازی کۆن و فیتێکی ئاسوودە. بە تێپەڕبوونی کات جوانتر دەبێت و لەگەڵ زۆربەی کاتژمێرە ستانداردەکان دەگونجێت. بە بێ ئامراز دادەنرێت.\n\n• چەرمی سروشتی\n• شێوازی کۆنی ڕێترۆ\n• گونجاو لەگەڵ زۆربەی کاتژمێرەکان\n• دامەزراندن بە بێ ئامراز",
    },
    es: {
      title: "Correa de reloj de cuero retro para hombre",
      description:
        "Correa de reloj de cuero genuino de estilo vintage con ajuste cómodo. Mejora con el tiempo y se adapta a la mayoría de relojes estándar. Fácil de instalar sin herramientas.\n\n• Cuero genuino\n• Estilo retro vintage\n• Se adapta a la mayoría de relojes\n• Instalación sin herramientas",
    },
    fr: {
      title: "Bracelet de montre en cuir rétro pour homme",
      description:
        "Bracelet de montre en cuir véritable style vintage avec un ajustement confortable. Vieillit magnifiquement et s'adapte à la plupart des montres. Installation facile.\n\n• Cuir véritable\n• Style rétro vintage\n• S'adapte à la plupart des montres\n• Installation sans outils",
    },
    de: {
      title: "Retro-Lederarmband für Herren",
      description:
        "Vintage-Uhrarmband aus echtem Leder mit bequemer Passform. Altert wunderschön und passt zu den meisten Standarduhren. Einfach ohne Werkzeug zu installieren.\n\n• Echtes Leder\n• Vintage-Retro-Stil\n• Passt zu den meisten Uhren\n• Werkzeugfreie Installation",
    },
    ru: {
      title: "Ретро кожаный ремешок для часов (мужской)",
      description:
        "Ремешок из натуральной кожи в винтажном стиле с удобной посадкой. Красиво стареет и подходит к большинству часов. Устанавливается без инструментов.\n\n• Натуральная кожа\n• Винтажный ретро-стиль\n• Подходит к большинству часов\n• Без инструментов",
    },
    tr: {
      title: "Erkekler İçin Retro Deri Saat Bandı",
      description:
        "Konforlu uyuma sahip vintage tarzı gerçek deri saat kayışı. Zamanla güzelleşir ve çoğu standart saate uyar. Aletsiz kolay kurulum.\n\n• Gerçek deri\n• Vintage retro tarz\n• Çoğu saate uyar\n• Aletsiz kurulum",
    },
    zh: {
      title: "复古皮革男士表带",
      description:
        "复古风格的天然皮革表带，佩戴舒适。越用越有质感，适配大多数标准手表。无需工具即可轻松安装。\n\n• 天然皮革\n• 复古怀旧风格\n• 适配大多数手表\n• 免工具安装",
    },
  },
  "wireless-controller-charger": {
    en: {
      title: "Wireless Game Controller Charger",
      description:
        "Handy wireless charging station for game controllers. Docks your controller neatly and charges it fast. Compact and keeps your desk tidy.\n\n• Wireless charging dock\n• Fast charge\n• Compact design\n• Keeps controllers organized",
    },
    fa: {
      title: "شارژر بی‌سیم دسته بازی",
      description:
        "ایستگاه شارژ بی‌سیم کاربردی برای دسته‌های بازی. دسته را مرتب جای می‌دهد و سریع شارژ می‌کند. جمع‌وجور و میز شما را منظم نگه می‌دارد.\n\n• پایه شارژ بی‌سیم\n• شارژ سریع\n• طراحی جمع‌وجور\n• نظم‌دهی دسته‌ها",
    },
    ar: {
      title: "شاحن لاسلكي لأذرع الألعاب",
      description:
        "محطة شحن لاسلكية عملية لأذرع الألعاب. تثبّت الذراع بأناقة وتشحنه بسرعة. مضغوطة وتحافظ على ترتيب مكتبك.\n\n• قاعدة شحن لاسلكية\n• شحن سريع\n• تصميم مضغوط\n• تنظيم أذرع التحكم",
    },
    ckb: {
      title: "شوکەری بێتەلی دەستە یارییەکان",
      description:
        "وێستگەی شوکری بێتەلی بەکارهێنەر بۆ دەستە یارییەکان. دەستەکە بە ڕێکی دادەنێت و بە خێرایی شوکر دەکات. بچووکە و مێزەکەت ڕێک دەهێڵێت.\n\n• ڕاگرەی شوکری بێتەلی\n• شوکری خێرا\n• دیزاینی بچووک\n• ڕێکخستنی دەستە یارییەکان",
    },
    es: {
      title: "Cargador inalámbrico para mandos de juegos",
      description:
        "Práctica estación de carga inalámbrica para mandos de videojuegos. Acopla tu mando con orden y lo carga rápido. Compacta y mantiene tu escritorio ordenado.\n\n• Base de carga inalámbrica\n• Carga rápida\n• Diseño compacto\n• Organiza los mandos",
    },
    fr: {
      title: "Chargeur sans fil pour manettes de jeu",
      description:
        "Station de charge sans fil pratique pour manettes. Docking soigné et recharge rapide. Compacte, elle garde votre bureau organisé.\n\n• Station de charge sans fil\n• Charge rapide\n• Design compact\n• Organise les manettes",
    },
    de: {
      title: "Kabelloses Ladegerät für Gamecontroller",
      description:
        "Praktische kabellose Ladestation für Gamecontroller. Docks Ihren Controller ordentlich und lädt ihn schnell. Kompakt und hält Ihren Schreibtisch aufgeräumt.\n\n• Kabellose Ladestation\n• Schnelles Laden\n• Kompaktes Design\n• Organisiert Controller",
    },
    ru: {
      title: "Беспроводная зарядка для геймпадов",
      description:
        "Удобная беспроводная зарядная станция для игровых контроллеров. Аккуратно фиксирует геймпад и быстро заряжает. Компактная, поддерживает порядок.\n\n• Беспроводная док-станция\n• Быстрая зарядка\n• Компактный дизайн\n• Порядок для геймпадов",
    },
    tr: {
      title: "Kablosuz Oyun Kumandası Şarj Cihazı",
      description:
        "Oyun kumandaları için pratik kablosuz şarj istasyonu. Kumandanızı düzenli bir şekilde yerleştirir ve hızlıca şarj eder. Kompakt ve masanızı düzenli tutar.\n\n• Kablosuz şarj istasyonu\n• Hızlı şarj\n• Kompakt tasarım\n• Kumandaları düzenler",
    },
    zh: {
      title: "无线游戏手柄充电器",
      description:
        "方便的游戏手柄无线充电底座。整齐放置手柄并快速充电。小巧，保持桌面整洁。\n\n• 无线充电底座\n• 快速充电\n• 紧凑设计\n• 让手柄井井有条",
    },
  },
  "compatible-with-apple-mini-portable-single-port-pd-charger-for-iphone12-charging-head-20w": {
    en: {
      title: "20W PD Fast Charging Head (Mini Portable)",
      description:
        "Compact 20W USB-C PD charger that powers up your phone quickly. Small enough for pocket or travel bag, with smart safety protections built in.\n\n• 20W PD fast charge\n• USB-C output\n• Compact and portable\n• Safety protections",
    },
    fa: {
      title: "آداپتور شارژ سریع PD 20 وات",
      description:
        "آداپتور جمع‌وجور ۲۰ وات PD با خروجی USB-C که گوشی شما را سریع شارژ می‌کند. آن‌قدر کوچک که در جیب یا کیف سفر جا می‌شود، با محافظ‌های ایمنی هوشمند.\n\n• شارژ سریع PD 20 وات\n• خروجی USB-C\n• جمع‌وجور و قابل حمل\n• محافظ‌های ایمنی",
    },
    ar: {
      title: "رأس شحن سريع PD بقوة 20 واط",
      description:
        "رأس شحن مضغوط بقوة 20 واط PD مع منفذ USB-C يشحن هاتفك بسرعة. صغير بما يكفي للجيب أو حقيبة السفر، مع حمايات أمان ذكية.\n\n• شحن سريع PD 20 واط\n• منفذ USB-C\n• مضغوط ومحمول\n• حمايات أمان",
    },
    ckb: {
      title: "سەری شوکری خێرای PD ٢٠ وات",
      description:
        "سەری شوکری بچووکی ٢٠ وات PD بە دەرچەی USB-C کە مۆبایلەکەت بە خێرایی شوکر دەکات. ئەوەندە بچووکە کە لە کیشە یا جەنتاڵی سەفەردا دەچێتەوە، لەگەڵ پارێزگاری ئەمنییەتی زیرەک.\n\n• شوکری خێرای PD ٢٠ وات\n• دەرچەی USB-C\n• بچووک و گەڕۆک\n• پارێزگاری ئەمنییەت",
    },
    es: {
      title: "Cargador rápido PD de 20 W (mini portátil)",
      description:
        "Cargador PD de 20 W compacto con salida USB-C que carga tu teléfono rápido. Suficientemente pequeño para el bolsillo, con protecciones de seguridad inteligentes.\n\n• Carga rápida PD de 20 W\n• Salida USB-C\n• Compacto y portátil\n• Protecciones de seguridad",
    },
    fr: {
      title: "Chargeur rapide PD 20 W (mini portable)",
      description:
        "Chargeur PD 20 W compact avec sortie USB-C qui recharge votre téléphone rapidement. Assez petit pour une poche, avec protections de sécurité intelligentes.\n\n• Charge rapide PD 20 W\n• Sortie USB-C\n• Compact et portable\n• Protections de sécurité",
    },
    de: {
      title: "20-W-PD-Schnellladegerät (Mini-portabel)",
      description:
        "Kompaktes 20-W-USB-C-PD-Ladegerät, das Ihr Telefon schnell auflädt. Klein genug für die Tasche, mit intelligenten Sicherheitsschutzfunktionen.\n\n• 20-W-PD-Schnellladung\n• USB-C-Ausgang\n• Kompakt und tragbar\n• Sicherheitsschutz",
    },
    ru: {
      title: "Зарядное устройство 20 Вт PD (мини-портативное)",
      description:
        "Компактное зарядное устройство 20 Вт PD с выходом USB-C, быстро заряжающее телефон. Помещается в кармане, с умной защитой.\n\n• Быстрая зарядка PD 20 Вт\n• Выход USB-C\n• Компактное и портативное\n• Защита",
    },
    tr: {
      title: "20W PD Hızlı Şarj Adaptörü (Mini Taşınabilir)",
      description:
        "Telefonunuzu hızla şarj eden kompakt 20W USB-C PD şarj adaptörü. Cebe veya seyahat çantasına sığacak kadar küçük, akıllı güvenlik korumalı.\n\n• 20W PD hızlı şarj\n• USB-C çıkış\n• Kompakt ve taşınabilir\n• Güvenlik korumaları",
    },
    zh: {
      title: "20W PD快速充电头（迷你便携）",
      description:
        "紧凑型20W USB-C PD充电器，快速为手机充电。小巧到可以放入口袋或旅行包，内置智能安全保护。\n\n• 20W PD快充\n• USB-C输出\n• 紧凑便携\n• 安全保护",
    },
  },
  "bluetooth-calling-smart-watch-hd-large-screen": {
    en: {
      title: "Bluetooth Calling Smart Watch (HD Large Screen)",
      description:
        "Smart watch with a large HD screen and Bluetooth calling. Tracks fitness, sleep and notifications. Long battery life and comfortable strap.\n\n• Bluetooth calling\n• Large HD screen\n• Fitness and sleep tracking\n• Long battery life",
    },
    fa: {
      title: "ساعت هوشمند تماس بلوتوثی با نمایشگر بزرگ HD",
      description:
        "ساعت هوشمند با نمایشگر بزرگ HD و تماس بلوتوثی. ردیابی تناسب اندام، خواب و اعلان‌ها. باتری بادوام و بند راحت.\n\n• تماس بلوتوثی\n• نمایشگر بزرگ HD\n• ردیابی ورزش و خواب\n• باتری بادوام",
    },
    ar: {
      title: "ساعة ذكية بمكالمات بلوتوث وشاشة كبيرة HD",
      description:
        "ساعة ذكية بشاشة كبيرة HD ومكالمات بلوتوث. تتبع اللياقة والنوم والإشعارات. بطارية طويلة الأمد وحزام مريح.\n\n• مكالمات بلوتوث\n• شاشة كبيرة HD\n• تتبع اللياقة والنوم\n• بطارية طويلة الأمد",
    },
    ckb: {
      title: "کاتژمێری زیرەک بە پەیوەندی بلوتوث و شاشەی گەورەی HD",
      description:
        "کاتژمێری زیرەک بە شاشەی گەورەی HD و پەیوەندی بلوتوث. تەندروستی، خەو و ئاگادارکردنەوەکان چاودێری دەکات. باتری بەردەوام و بەندی ئاسوودە.\n\n• پەیوەندی بلوتوث\n• شاشەی گەورەی HD\n• چاودێری تەندروستی و خەو\n• باتری بەردەوام",
    },
    es: {
      title: "Reloj inteligente con llamadas Bluetooth y pantalla grande HD",
      description:
        "Reloj inteligente con gran pantalla HD y llamadas Bluetooth. Hace seguimiento de fitness, sueño y notificaciones. Batería duradera y correa cómoda.\n\n• Llamadas Bluetooth\n• Gran pantalla HD\n• Seguimiento de fitness y sueño\n• Batería duradera",
    },
    fr: {
      title: "Montre connectée avec appels Bluetooth et grand écran HD",
      description:
        "Montre intelligente avec grand écran HD et appels Bluetooth. Suivi de la forme, du sommeil et des notifications. Longue autonomie et bracelet confortable.\n\n• Appels Bluetooth\n• Grand écran HD\n• Suivi forme et sommeil\n• Longue autonomie",
    },
    de: {
      title: "Bluetooth-Anruf-Smartwatch (großes HD-Display)",
      description:
        "Smartwatch mit großem HD-Display und Bluetooth-Anrufen. Verfolgt Fitness, Schlaf und Benachrichtigungen. Lange Akkulaufzeit und bequemes Armband.\n\n• Bluetooth-Anrufe\n• Großes HD-Display\n• Fitness- und Schlaf-Tracking\n• Lange Akkulaufzeit",
    },
    ru: {
      title: "Умные часы с Bluetooth-звонками и большим HD-экраном",
      description:
        "Умные часы с большим HD-экраном и Bluetooth-звонками. Отслеживание фитнеса, сна и уведомлений. Долгая работа и удобный ремешок.\n\n• Bluetooth-звонки\n• Большой HD-экран\n• Отслеживание фитнеса и сна\n• Долгая работа",
    },
    tr: {
      title: "Bluetooth Aramalı Akıllı Saat (Büyük HD Ekran)",
      description:
        "Büyük HD ekranlı ve Bluetooth aramalı akıllı saat. Fitness, uyku ve bildirimleri takip eder. Uzun pil ömrü ve rahat kayış.\n\n• Bluetooth aramaları\n• Büyük HD ekran\n• Fitness ve uyku takibi\n• Uzun pil ömrü",
    },
    zh: {
      title: "蓝牙通话智能手表（高清大屏）",
      description:
        "大屏幕高清显示屏和蓝牙通话的智能手表。追踪健身、睡眠和通知。续航持久，表带舒适。\n\n• 蓝牙通话\n• 高清大屏\n• 健身和睡眠追踪\n• 长续航",
    },
  },
  "pro-phone-case-protective-case-leather-case": {
    en: {
      title: "Pro Leather Protective Phone Case",
      description:
        "Sleek leather-look protective case with raised edges for screen and camera protection. Slim profile with a comfortable grip and precise cutouts.\n\n• Leather-look finish\n• Raised edge protection\n• Slim and grippy\n• Precise cutouts",
    },
    fa: {
      title: "قاب چرمی محافظ گوشی",
      description:
        "قاب محافظ با ظاهر چرمی شیک و لبه‌های برجسته برای محافظت از صفحه‌نمایش و دوربین. باریک با گیرایی راحت و برش‌های دقیق.\n\n• روکش ظاهر چرمی\n• محافظت لبه برجسته\n• باریک و ضدلغزش\n• برش‌های دقیق",
    },
    ar: {
      title: "غلاف هاتف جلد حامي فاخر",
      description:
        "غلاف حامي بمظهر جلد أنيق وحواف مرتفعة لحماية الشاشة والكاميرا. تصميم نحيف بقبضة مريحة وفتحات دقيقة.\n\n• لمسة جلدية أنيقة\n• حواف مرتفعة للحماية\n• نحيف ومقبض\n• فتحات دقيقة",
    },
    ckb: {
      title: "كێسی مۆبایلی چەرمی پارێزەر",
      description:
        "كێسی پارێزەر بە دیمەنی چەرمی جوان و لێوارەی بەرز بۆ پاراستنی شاشە و کامێرا. باریکە و دەستی ئاسودە و کونی وردی هەیە.\n\n• دیمەنی چەرمی\n• لێوارەی بەرز بۆ پاراستن\n• باریک و دەستگر\n• کونی ورد",
    },
    es: {
      title: "Funda de cuero protectora para móvil",
      description:
        "Elegante funda protectora con acabado tipo cuero y bordes elevados para proteger pantalla y cámara. Perfil fino, agarre cómodo y recortes precisos.\n\n• Acabado tipo cuero\n• Protección de bordes elevados\n• Fina y con agarre\n• Recortes precisos",
    },
    fr: {
      title: "Coque de protection en cuir pour téléphone",
      description:
        "Coque protectrice élégante aspect cuir avec bords surélevés pour protéger écran et caméra. Profil fin, prise en main confortable et découpes précises.\n\n• Finition aspect cuir\n• Protection des bords surélevés\n• Fine et antidérapante\n• Découpes précises",
    },
    de: {
      title: "Pro-Lederschutz-Handyhülle",
      description:
        "Elegante Schutzhülle mit Lederoptik und erhöhten Kanten zum Schutz von Bildschirm und Kamera. Schlankes Profil mit komfortablem Griff.\n\n• Lederoptik\n• Schutz mit erhöhten Kanten\n• Schlank und griffig\n• Präzise Ausschnitte",
    },
    ru: {
      title: "Профессиональный кожаный защитный чехол",
      description:
        "Элегантный защитный чехол с кожаной отделкой и приподнятыми краями для защиты экрана и камеры. Тонкий профиль, удобный хват и точные вырезы.\n\n• Кожаная отделка\n• Приподнятые края\n• Тонкий и нескользящий\n• Точные вырезы",
    },
    tr: {
      title: "Deri Görünümlü Pro Koruyucu Telefon Kılıfı",
      description:
        "Ekran ve kamera koruması için yükseltilmiş kenarlı şık deri görünümlü koruyucu kılıf. İnce profil, rahat tutuş ve hassas kesimler.\n\n• Deri görünümü\n• Yükseltilmiş kenar koruması\n• İnce ve kaymaz\n• Hassas kesimler",
    },
    zh: {
      title: "专业皮革保护手机壳",
      description:
        "时尚皮革质感保护壳，凸起边缘保护屏幕和相机。纤薄外形，握感舒适，开孔精准。\n\n• 皮革质感\n• 凸起边缘保护\n• 纤薄防滑\n• 开孔精准",
    },
  },
  "pet-outdoor-foldable-bottle-dog-travel-water-bottle-dog-water-dispenser": {
    en: {
      title: "Foldable Dog Travel Water Bottle & Dispenser",
      description:
        "Two-in-one bottle and bowl for walking your dog. One-hand operation pours fresh water into the attached cup. Leak-proof and easy to clean.\n\n• Bottle and bowl in one\n• One-hand operation\n• Leak-proof design\n• Easy to clean",
    },
    fa: {
      title: "بطری آب سگ قابل حمل با ظرف",
      description:
        "بطری و کاسه دو کاره برای پیاده‌روی با سگ. با یک دست آب تازه در ظرف متصل ریخته می‌شود. ضد نشتی و به‌راحتی تمیز می‌شود.\n\n• بطری و کاسه یکی است\n• کار با یک دست\n• طراحی ضدنشت\n• به‌راحتی تمیز می‌شود",
    },
    ar: {
      title: "زجاجة ماء الكلب المحمولة مع وعاء",
      description:
        "زجاجة ووعاء في واحد للمشي مع كلبك. تشغيل بيد واحدة لصب الماء الطازج في الوعاء المرفق. مانعة للتسرب وسهلة التنظيف.\n\n• زجاجة ووعاء معا\n• تشغيل بيد واحدة\n• تصميم مانع للتسرب\n• سهلة التنظيف",
    },
    ckb: {
      title: "مووچکەی ئاوی سەگ بە دەفر",
      description:
        "مووچکە و دەفر بەیەکەوە بۆ ڕێکردن لەگەڵ سەگەکەت. بە دەستێک ئاوی تازە لە دەفرەکەدا دەکرێت. نەنۆشتە و بە ئاسانی پاک دەبێتەوە.\n\n• مووچکە و دەفر بەیەکەوە\n• کارکردن بە دەستێک\n• دیزاینی نەنۆشتاویی\n• بە ئاسانی پاک دەبێتەوە",
    },
    es: {
      title: "Botella de agua para perro plegable y dispensador",
      description:
        "Botella y cuenco en uno para pasear a tu perro. Operación con una sola mano que vierte agua fresca en el cuenco. A prueba de fugas y fácil de limpiar.\n\n• Botella y cuenco en uno\n• Operación con una mano\n• A prueba de fugas\n• Fácil de limpiar",
    },
    fr: {
      title: "Bouteille d'eau pliable pour chien et abreuvoir",
      description:
        "Bouteille et gamelle en un pour promener votre chien. Une seule main suffit pour verser de l'eau fraîche dans le gobelet intégré. Anti-fuite et facile à nettoyer.\n\n• Bouteille et gamelle combinées\n• Usage à une main\n• Anti-fuite\n• Facile à nettoyer",
    },
    de: {
      title: "Faltbare Hundetrinkflasche mit Spender",
      description:
        "Zwei-in-eins-Flasche und Napf für Gassigänge. Einhandbedienung gießt frisches Wasser in den integrierten Becher. Auslaufsicher und leicht zu reinigen.\n\n• Flasche und Napf in einem\n• Einhandbedienung\n• Auslaufsicher\n• Leicht zu reinigen",
    },
    ru: {
      title: "Складная поилка-бутылка для собак",
      description:
        "Бутылка и миска в одном для прогулок с собакой. Одной рукой легко налить свежую воду в чашку. Герметичная и легко моется.\n\n• Бутылка и миска в одном\n• Использование одной рукой\n• Герметичность\n• Легко чистится",
    },
    tr: {
      title: "Katlanabilir Köpek Seyahat Su Şişesi & Dispenseri",
      description:
        "Köpeğinizi gezdirmek için iki arada bir su şişesi ve kap. Tek elle kullanım, ekli bardağa taze su döker. Sızdırmaz ve kolay temizlenir.\n\n• Şişe ve kap bir arada\n• Tek el kullanım\n• Sızdırmaz tasarım\n• Kolay temizlik",
    },
    zh: {
      title: "可折叠狗狗旅行水瓶&饮水器",
      description:
        "遛狗用的二合一水瓶和水碗。单手操作即可将新鲜水倒入附带的杯子中。防漏且易于清洁。\n\n• 水瓶水碗二合一\n• 单手操作\n• 防漏设计\n• 易于清洁",
    },
  },
  "5v2a-charger-usb-multi-port-mobile-phone-charger": {
    en: {
      title: "5V/2A Multi-Port USB Phone Charger",
      description:
        "Multi-port USB charger to power several devices at once. Compact travel-friendly design with smart charging for safe, fast output.\n\n• Multiple USB ports\n• 5V/2A output\n• Compact design\n• Smart charging protection",
    },
    fa: {
      title: "شارژر USB چند پورت 5V/2A",
      description:
        "شارژر USB چند پورت برای شارژ همزمان چند دستگاه. طراحی جمع‌وجور مناسب سفر با شارژ هوشمند برای خروجی ایمن و سریع.\n\n• چند پورت USB\n• خروجی 5V/2A\n• طراحی جمع‌وجور\n• محافظت شارژ هوشمند",
    },
    ar: {
      title: "شاحن USB متعدد المنافذ 5V/2A",
      description:
        "شاحن USB متعدد المنافذ لتشغيل عدة أجهزة في آن واحد. تصميم مضغوط مناسب للسفر مع شحن ذكي لإخراج آمن وسريع.\n\n• منافذ USB متعددة\n• خرج 5V/2A\n• تصميم مضغوط\n• حماية الشحن الذكية",
    },
    ckb: {
      title: "شوکەری USB چەند دروازەیی 5V/2A",
      description:
        "شوکەری USB چەند دروازەیی بۆ شوکرکردنی چەند ئامێر بەیەک جار. دیزاینی بچووک بۆ گەشت لەگەڵ شوکری زیرەک بۆ دەرچەی سەلامەت و خێرا.\n\n• چەند دروازەی USB\n• دەرچەی 5V/2A\n• دیزاینی بچووک\n• پارێزگاری شوکری زیرەک",
    },
    es: {
      title: "Cargador USB multipuerto de 5 V/2 A",
      description:
        "Cargador USB multipuerto para alimentar varios dispositivos a la vez. Diseño compacto ideal para viajes con carga inteligente y salida segura y rápida.\n\n• Varios puertos USB\n• Salida de 5 V/2 A\n• Diseño compacto\n• Protección de carga inteligente",
    },
    fr: {
      title: "Chargeur USB multiport 5 V/2 A",
      description:
        "Chargeur USB multiport pour alimenter plusieurs appareils à la fois. Design compact pour les voyages avec charge intelligente et sortie sûre.\n\n• Plusieurs ports USB\n• Sortie 5 V/2 A\n• Design compact\n• Protection de charge intelligente",
    },
    de: {
      title: "5V/2A-Multiport-USB-Ladegerät",
      description:
        "Multiport-USB-Ladegerät für mehrere Geräte gleichzeitig. Kompaktes Reisedesign mit intelligentem Laden für sicheren, schnellen Output.\n\n• Mehrere USB-Anschlüsse\n• 5V/2A-Ausgang\n• Kompaktes Design\n• Intelligenter Ladeschutz",
    },
    ru: {
      title: "Многопортовое USB-зарядное устройство 5V/2A",
      description:
        "Многопортовое зарядное устройство для одновременной зарядки нескольких устройств. Компактный дизайн с интеллектуальной зарядкой.\n\n• Несколько USB-портов\n• Выход 5V/2A\n• Компактный дизайн\n• Защита при зарядке",
    },
    tr: {
      title: "5V/2A Çok Portlu USB Telefon Şarj Cihazı",
      description:
        "Aynı anda birkaç cihazı şarj etmek için çok portlu USB şarj cihazı. Akıllı şarjlı kompakt seyahat dostu tasarım.\n\n• Çoklu USB portları\n• 5V/2A çıkış\n• Kompakt tasarım\n• Akıllı şarj koruması",
    },
    zh: {
      title: "5V/2A多口USB手机充电器",
      description:
        "多口USB充电器，可同时为多个设备充电。紧凑的旅行友好设计，智能充电确保安全快速的输出。\n\n• 多个USB端口\n• 5V/2A输出\n• 紧凑设计\n• 智能充电保护",
    },
  },
  "sports-underwear-women-can-wear-yoga-beauty-back-bra": {
    en: {
      title: "Women's Sports Back Beauty Bra",
      description:
        "Comfortable sports bra with a stylish back design. Breathable, stretchy fabric supports you during yoga, workouts and everyday wear.\n\n• Breathable fabric\n• Stylish back design\n• Stretchy support\n• Great for yoga and workouts",
    },
    fa: {
      title: "سوتین ورزشی زنانه با طراحی پشت زیبا",
      description:
        "سوتین ورزشی راحت با طراحی شیک پشت. پارچه تنفس‌پذیر و کش‌دار که در یوگا، تمرین و استفاده روزانه از شما حمایت می‌کند.\n\n• پارچه تنفس‌پذیر\n• طراحی شیک پشت\n• حمایت کش‌دار\n• عالی برای یوگا و تمرین",
    },
    ar: {
      title: "حمالة رياضية نسائية بتصميم ظهر أنيق",
      description:
        "حمالة رياضية مريحة بتصميم ظهر أنيق. قماش قابل للتنفس ومطاط يدعمك خلال اليوغا والتمارين والاستخدام اليومي.\n\n• قماش قابل للتنفس\n• تصميم ظهر أنيق\n• دعم مطاطي\n• مثالية لليوغا والتمارين",
    },
    ckb: {
      title: "برای وەرزشی ژنان بە دیزاینی پشتی جوان",
      description:
        "برای وەرزشی ئاسوودە بە دیزاینی پشتی جوان. جلێکی هەناسەدانە و قەستاو کە لە یۆگا، ڕاهێنان و بەکارهێنانی ڕۆژانەدا پشتگیری دەکات.\n\n• جلێکی هەناسەدانە\n• دیزاینی پشتی جوان\n• پشتگیری قەستاو\n• بەرزترین بۆ یۆگا و ڕاهێنان",
    },
    es: {
      title: "Sujetador deportivo de espalda bonita para mujer",
      description:
        "Sujetador deportivo cómodo con un diseño de espalda elegante. Tejido transpirable y elástico que te sostiene en yoga, entrenamientos y uso diario.\n\n• Tejido transpirable\n• Diseño de espalda elegante\n• Soporte elástico\n• Ideal para yoga y entrenamientos",
    },
    fr: {
      title: "Soutien-gorge de sport à dos ouvert pour femme",
      description:
        "Soutien-gorge de sport confortable au dos élégant. Tissu respirant et extensible qui vous soutient au yoga, à l'entraînement et au quotidien.\n\n• Tissu respirant\n• Dos élégant\n• Soutien extensible\n• Parfait pour yoga et sport",
    },
    de: {
      title: "Sport-BH mit schönem Rücken für Damen",
      description:
        "Bequemer Sport-BH mit elegantem Rücken-Design. Atmungsaktiver, elastischer Stoff unterstützt Sie bei Yoga, Workouts und im Alltag.\n\n• Atmungsaktiver Stoff\n• Elegantes Rücken-Design\n• Elastischer Halt\n• Ideal für Yoga und Workouts",
    },
    ru: {
      title: "Женский спортивный бюстгальтер с красивой спиной",
      description:
        "Удобный спортивный бюстгальтер с элегантным дизайном спины. Дышащая эластичная ткань поддерживает при йоге, тренировках и в повседневной носке.\n\n• Дышащая ткань\n• Элегантная спина\n• Эластичная поддержка\n• Отлично для йоги и тренировок",
    },
    tr: {
      title: "Şık Sırtlı Kadın Spor Sütyeni",
      description:
        "Şık sırt tasarımlı rahat spor sütyen. Nefes alabilir, esnek kumaş sizi yoga, egzersiz ve günlük kullanımda destekler.\n\n• Nefes alabilir kumaş\n• Şık sırt tasarımı\n• Esnek destek\n• Yoga ve egzersiz için harika",
    },
    zh: {
      title: "美背女士运动文胸",
      description:
        "舒适的运动文胸，背部设计时尚。透气弹性面料在瑜伽、锻炼和日常穿着中提供支撑。\n\n• 透气面料\n• 时尚背部设计\n• 弹性支撑\n• 非常适合瑜伽和锻炼",
    },
  },
  "1pair-unisex-black-leather-gloves-winter-warm-windproof-high-quality-soft-gloves-outdoor-cycling-skiing-running-motorbik": {
    en: {
      title: "Unisex Black Winter Leather Gloves",
      description:
        "Warm, windproof leather gloves for cycling, skiing, running and motorcycling. Soft lining keeps hands cozy in cold weather. Touchscreen fingertips.\n\n• Windproof leather\n• Warm soft lining\n• Touchscreen fingertips\n• Unisex fit",
    },
    fa: {
      title: "دستکش چرمی مشکی زمستانی یونیسکس",
      description:
        "دستکش چرمی گرم و ضدباد برای دوچرخه‌سواری، اسکی، دویدن و موتورسواری. آستر نرم در هوای سرد دستان را گرم نگه می‌دارد. نوک انگشتان سازگار با صفحه‌نمایش لمسی.\n\n• چرم ضدباد\n• آستر نرم گرم\n• نوک انگشتان لمسی\n• فیت یونیسکس",
    },
    ar: {
      title: "قفازات جلد سوداء شتوية للجنسين",
      description:
        "قفازات جلد دافئة ومقاومة للرياح لركوب الدراجة والتزلج والجري وركوب الدراجة النارية. بطانة ناعمة تحافظ على دفء يديك. أطراف أصابع تعمل مع الشاشات.\n\n• جلد مقاوم للرياح\n• بطانة ناعمة دافئة\n• أطراف أصابع تعمل باللمس\n• مقاس للجنسين",
    },
    ckb: {
      title: "دەستکێشی چەرمی ڕەشی زستانەی هاوسێکست",
      description:
        "دەستکێشی چەرمی گەرم و بەرگری با بۆ سواری پاسکیل، سکی، ڕاکردن و موتۆرسایکل. ئاستەری نەرم لە هەوای ساردا دەستەکان گەرم دەکات. سەری پەنجەکان لەگەڵ شاشە کاردەکات.\n\n• چەرمی بەرگری با\n• ئاستەری نەرم و گەرم\n• سەری پەنجە بۆ شاشەی دەستی\n• گونجاو بۆ هەردوو ڕەگەز",
    },
    es: {
      title: "Guantes de cuero negros de invierno unisex",
      description:
        "Guantes de cuero cálidos y a prueba de viento para ciclismo, esquí, running y moto. Forro suave que mantiene las manos calientes. Puntas compatibles con pantallas táctiles.\n\n• Cuero resistente al viento\n• Forro suave y cálido\n• Puntas para pantallas táctiles\n• Ajuste unisex",
    },
    fr: {
      title: "Gants en cuir noirs unisexes d'hiver",
      description:
        "Gants en cuir chauds et coupe-vent pour le vélo, le ski, la course et la moto. Doublure douce qui garde vos mains au chaud. Bout des doigts tactiles.\n\n• Cuir coupe-vent\n• Doublure douce et chaude\n• Doigts tactiles\n• Coupe unisexe",
    },
    de: {
      title: "Unisex Schwarze Winter-Lederhandschuhe",
      description:
        "Warme, winddichte Lederhandschuhe für Radfahren, Skifahren, Laufen und Motorradfahren. Weiches Futter hält die Hände warm. Touchscreen-fähige Fingerspitzen.\n\n• Winddichtes Leder\n• Warmes, weiches Futter\n• Touchscreen-Fingerspitzen\n• Unisex-Passform",
    },
    ru: {
      title: "Унисекс черные кожаные зимние перчатки",
      description:
        "Теплые ветрозащитные кожаные перчатки для велосипеда, лыж, бега и мотоцикла. Мягкая подкладка согревает руки. Сенсорные кончики пальцев.\n\n• Ветрозащитная кожа\n• Теплая мягкая подкладка\n• Сенсорные кончики\n• Унисекс",
    },
    tr: {
      title: "Unisex Siyah Kış Deri Eldiven",
      description:
        "Bisiklet, kayak, koşu ve motosiklet için sıcak, rüzgar geçirmez deri eldivenler. Yumuşak astar elleri sıcak tutar. Dokunmatik parmak uçları.\n\n• Rüzgar geçirmez deri\n• Sıcak yumuşak astar\n• Dokunmatik parmak uçları\n• Unisex uyum",
    },
    zh: {
      title: "男女通用黑色冬季皮手套",
      description:
        "适合骑行、滑雪、跑步和摩托车的保暖防风皮手套。柔软内衬在寒冷天气中保持双手温暖。指尖可触屏。\n\n• 防风皮革\n• 柔软保暖内衬\n• 触屏指尖\n• 男女通用",
    },
  },
  "car-charger-super-fast-charge-multi-function": {
    en: {
      title: "Multi-Function Super Fast Car Charger",
      description:
        "Dual-port car charger with super fast charging output. Charges phones and tablets on the go. Compact design with safety protections for the road.\n\n• Dual USB ports\n• Super fast charging\n• Compact design\n• Safety protections",
    },
    fa: {
      title: "شارژر فندکی ماشین فوق‌سریع چندکاره",
      description:
        "شارژر فندکی دو پورت با خروجی شارژ فوق‌سریع. گوشی و تبلت را در حال حرکت شارژ می‌کند. طراحی جمع‌وجور با محافظ‌های ایمنی برای جاده.\n\n• دو پورت USB\n• شارژ فوق‌سریع\n• طراحی جمع‌وجور\n• محافظ‌های ایمنی",
    },
    ar: {
      title: "شاحن سيارة سريع متعدد الوظائف",
      description:
        "شاحن سيارة بمنفذين مع خرج شحن فائق السرعة. يشحن الهواتف والأجهزة اللوحية أثناء التنقل. تصميم مضغوط مع حمايات أمان.\n\n• منفذا USB\n• شحن فائق السرعة\n• تصميم مضغوط\n• حمايات أمان",
    },
    ckb: {
      title: "شوکەری ئۆتۆمبێلی زۆر خێرا چەند مەبەست",
      description:
        "شوکەری ئۆتۆمبێلی دوو دروازەیی لەگەڵ دەرچەی شوکری زۆر خێرا. مۆبایل و تەبلیت لە کاتی گەشتدا شوکر دەکات. دیزاینی بچووک لەگەڵ پارێزگاری ئەمنییەت.\n\n• دوو دروازەی USB\n• شوکری زۆر خێرا\n• دیزاینی بچووک\n• پارێزگاری ئەمنییەت",
    },
    es: {
      title: "Cargador de coche multiusos de carga superrápida",
      description:
        "Cargador de coche de doble puerto con carga superrápida. Carga móviles y tabletas en movimiento. Diseño compacto con protecciones de seguridad.\n\n• Dos puertos USB\n• Carga superrápida\n• Diseño compacto\n• Protecciones de seguridad",
    },
    fr: {
      title: "Chargeur de voiture multifonction super rapide",
      description:
        "Chargeur de voiture double port avec charge ultra rapide. Recharge téléphones et tablettes en déplacement. Design compact et protections de sécurité.\n\n• Deux ports USB\n• Charge ultra rapide\n• Design compact\n• Protections de sécurité",
    },
    de: {
      title: "Multifunktionales Super-Schnell-Autoladegerät",
      description:
        "Doppel-USB-Autoladegerät mit Superschnellladung. Lädt Handys und Tablets unterwegs. Kompaktes Design mit Sicherheitsschutz.\n\n• Zwei USB-Anschlüsse\n• Superschnelles Laden\n• Kompaktes Design\n• Sicherheitsschutz",
    },
    ru: {
      title: "Многофункциональное супербыстрое автомобильное зарядное устройство",
      description:
        "Автомобильное зарядное устройство с двумя портами и сверхбыстрой зарядкой. Заряжает телефоны и планшеты в пути. Компактный дизайн с защитой.\n\n• Два USB-порта\n• Сверхбыстрая зарядка\n• Компактный дизайн\n• Защита",
    },
    tr: {
      title: "Çok Fonksiyonlu Süper Hızlı Araba Şarj Cihazı",
      description:
        "Süper hızlı şarj çıkışlı çift portlu araba şarj cihazı. Hareket halindeyken telefon ve tabletleri şarj eder. Güvenlik korumalı kompakt tasarım.\n\n• Çift USB portu\n• Süper hızlı şarj\n• Kompakt tasarım\n• Güvenlik korumaları",
    },
    zh: {
      title: "多功能超级快充车载充电器",
      description:
        "双口车载充电器，具有超级快充输出。旅途中为手机和平板充电。紧凑设计，具备安全保护。\n\n• 双USB口\n• 超级快充\n• 紧凑设计\n• 安全保护",
    },
  },
  "smart-led-light-colorful-atmosphere-lamp-bedside": {
    en: {
      title: "Smart LED Atmosphere Lamp (Colorful, Bedside)",
      description:
        "Colorful LED lamp that sets a relaxing mood in any room. Multiple colors and modes, remote or app control, perfect as a bedside or gaming light.\n\n• Multiple colors and modes\n• Remote / app control\n• Relaxing ambient glow\n• Great bedside light",
    },
    fa: {
      title: "لامپ هوشمند LED رنگی فضاساز",
      description:
        "لامپ LED رنگی که حال‌وهوای آرامش‌بخش در هر اتاق ایجاد می‌کند. چندین رنگ و حالت، کنترل با ریموت یا اپلیکیشن، عالی برای کنار تخت یا اتاق بازی.\n\n• چند رنگ و حالت\n• کنترل با ریموت/اپلیکیشن\n• نور محیطی آرامش‌بخش\n• نور عالی کنار تخت",
    },
    ar: {
      title: "مصباح LED ذكي ملوّن للجو",
      description:
        "مصباح LED ملوّن يخلق جوا مريحا في أي غرفة. ألوان وأوضاع متعددة وتحكم عن بعد أو بالتطبيق، مثالي للطاولة الجانبية أو ألعاب الفيديو.\n\n• ألوان وأوضاع متعددة\n• تحكم عن بعد / بالتطبيق\n• توهج محيطي مريح\n• إضاءة جانبية رائعة",
    },
    ckb: {
      title: "چراغی زیرەکی LED ڕەنگاوڕەنگی ژینگە",
      description:
        "چراغی LED ڕەنگاوڕەنگ کە ژینگەیەکی ئاسوودە لە هەر ژوورێک دروست دەکات. چەند ڕەنگ و حاڵەت، کۆنترۆڵ بە کۆنتڕۆڵ یان ئەپ، بەرزترین بۆ تەنیشت لیژنە یان ژووری یاری.\n\n• چەند ڕەنگ و حاڵەت\n• کۆنترۆڵ بە کۆنتڕۆڵ/ئەپ\n• تیشکی ژینگەیی ئاسوودە\n• ڕووناکی بەرز بۆ تەنیشت لیژنە",
    },
    es: {
      title: "Lámpara LED inteligente de ambiente colorida",
      description:
        "Lámpara LED colorida que crea un ambiente relajante en cualquier habitación. Varios colores y modos, control por mando o app, perfecta como luz de mesita o gaming.\n\n• Varios colores y modos\n• Control por mando / app\n• Resplandor ambiental relajante\n• Gran luz de mesita",
    },
    fr: {
      title: "Lampe LED intelligente d'ambiance colorée",
      description:
        "Lampe LED colorée qui crée une ambiance relaxante dans n'importe quelle pièce. Plusieurs couleurs et modes, contrôle à distance ou par app, parfaite en chevet ou gaming.\n\n• Plusieurs couleurs et modes\n• Contrôle à distance / app\n• Lueur d'ambiance relaxante\n• Parfaite en chevet",
    },
    de: {
      title: "Smarte bunte LED-Atmosphärenlampe",
      description:
        "Bunte LED-Lampe, die in jedem Raum eine entspannte Stimmung schafft. Mehrere Farben und Modi, Steuerung per Fernbedienung oder App, ideal als Nachttisch- oder Gaming-Licht.\n\n• Mehrere Farben und Modi\n• Fernbedienung / App-Steuerung\n• Entspannendes Umgebungslicht\n• Großartiges Nachttischlicht",
    },
    ru: {
      title: "Умная цветная LED-лампа для атмосферы",
      description:
        "Цветная LED-лампа, создающая расслабляющую атмосферу в любой комнате. Несколько цветов и режимов, управление с пульта или приложения. Идеальна у кровати.\n\n• Несколько цветов и режимов\n• Управление с пульта / приложения\n• Расслабляющая подсветка\n• Отличный ночник",
    },
    tr: {
      title: "Akıllı LED Renkli Atmosfer Lambası",
      description:
        "Her odada rahatlatıcı bir atmosfer yaratan renkli LED lamba. Birden fazla renk ve mod, uzaktan kumanda veya uygulama kontrolü, komodin veya oyun ışığı için mükemmel.\n\n• Birden fazla renk ve mod\n• Kumanda / uygulama kontrolü\n• Rahatlatıcı ortam ışığı\n• Harika komodin ışığı",
    },
    zh: {
      title: "智能LED彩色氛围床头灯",
      description:
        "彩色LED灯，在任何房间营造放松氛围。多种颜色和模式，遥控或APP控制，非常适合床头或游戏灯光。\n\n• 多种颜色和模式\n• 遥控/APP控制\n• 放松的氛围光\n• 极佳的床头灯",
    },
  },
  "barbed-wire-necklace": {
    en: {
      title: "Barbed Wire Necklace",
      description:
        "Edgy barbed wire design necklace. Lightweight metal finish makes a bold statement with any outfit. A unique gift for fashion lovers.\n\n• Unique barbed wire design\n• Lightweight metal\n• Bold statement piece\n• Great gift",
    },
    fa: {
      title: "گردنبند سیم خاردار",
      description:
        "گردنبند با طراحی سیم خاردار خاص. جنس فلزی سبک با ظاهری جسورانه که با هر لباسی ست می‌شود. هدیه‌ای خاص برای عاشقان مد.\n\n• طراحی منحصربه‌فرد سیم خاردار\n• فلز سبک\n• قطعه ای با ظاهر جسورانه\n• هدیه عالی",
    },
    ar: {
      title: "عقد سلك شائك",
      description:
        "عقد بتصميم سلك شائك جريء. لمسة معدنية خفيفة تجعله قطعة بارزة مع أي إطلالة. هدية فريدة لعشاق الموضة.\n\n• تصميم سلك شائك فريد\n• معدن خفيف\n• قطعة بارزة\n• هدية رائعة",
    },
    ckb: {
      title: "ملمڵانی سیمی دراوی",
      description:
        "ملمڵانی بە دیزاینی سیمی دراوی جیاواز. جۆری کانزایی سووک بە دیمەنێکی ئازایانە کە لەگەڵ هەر جلێکدا جوان دەبێت. دیارییەکی تایبەت بۆ خاوەنی فەیشن.\n\n• دیزاینی سیمی دراوی تایبەت\n• کانزایی سووک\n• پارچەیەکی ئازایانە\n• دیارییەکی بەرز",
    },
    es: {
      title: "Collar de alambre de púas",
      description:
        "Collar de diseño atrevido con alambre de púas. Acabado metálico ligero que marca estilo con cualquier outfit. Un regalo único para amantes de la moda.\n\n• Diseño único de alambre de púas\n• Metal ligero\n• Pieza de estilo atrevido\n• Gran regalo",
    },
    fr: {
      title: "Collier barbelé",
      description:
        "Collier au design audacieux en fil barbelé. Finition métallique légère pour une déclaration de style avec n'importe quelle tenue. Cadeau unique pour les amateurs de mode.\n\n• Design barbelé unique\n• Métal léger\n• Pièce de style audacieux\n• Excellent cadeau",
    },
    de: {
      title: "Stacheldraht-Halskette",
      description:
        "Kühne Halskette mit Stacheldraht-Design. Leichtes Metall-Finish setzt zu jedem Outfit ein starkes Statement. Ein einzigartiges Geschenk für Modefans.\n\n• Einzigartiges Stacheldraht-Design\n• Leichtes Metall\n• Mutiges Statement-Piece\n• Großartiges Geschenk",
    },
    ru: {
      title: "Колье в виде колючей проволоки",
      description:
        "Дерзкое колье в виде колючей проволоки. Легкий металлический дизайн — смелый акцент к любому образу. Уникальный подарок для любителей моды.\n\n• Уникальный дизайн\n• Легкий металл\n• Смелый аксессуар\n• Отличный подарок",
    },
    tr: {
      title: "Dikenli Tel Kolye",
      description:
        "Cesur dikenli tel tasarımlı kolye. Hafif metal kaplama her kıyafetle iddialı bir duruş sağlar. Moda tutkunları için benzersiz bir hediye.\n\n• Benzersiz dikenli tel tasarımı\n• Hafif metal\n• İddialı parça\n• Harika hediye",
    },
    zh: {
      title: "铁丝网项链",
      description:
        "前卫的铁丝网设计项链。轻质金属质感，与任何穿搭都能彰显个性。送给时尚爱好者的独特礼物。\n\n• 独特的铁丝网设计\n• 轻质金属\n• 个性张扬的配饰\n• 绝佳礼物",
    },
  },
  "added-extension-tupe-water-dispenser-automatic-water-bottle-desktop-rechargeable-water-dispenser-with-stand": {
    en: {
      title: "Desktop Rechargeable Water Dispenser (With Stand)",
      description:
        "Automatic water dispenser that fits standard bottles. One press dispenses fresh water. Rechargeable and portable with a convenient stand. Great for home, office and camping.\n\n• One-press dispensing\n• Rechargeable battery\n• Fits standard bottles\n• Portable with stand",
    },
    fa: {
      title: "آب‌پاش رومیزی قابل شارژ (با پایه)",
      description:
        "آب‌پاش اتوماتیک که روی بطری‌های استاندارد نصب می‌شود. با یک دکمه آب تازه می‌ریزد. قابل شارژ و قابل حمل با پایه کاربردی. عالی برای خانه، دفتر و کمپینگ.\n\n• آب‌دهی با یک دکمه\n• باتری قابل شارژ\n• مناسب بطری‌های استاندارد\n• قابل حمل با پایه",
    },
    ar: {
      title: "موزع مياه مكتبي قابل للشحن (مع حامل)",
      description:
        "موزع مياه أوتوماتيكي يناسب الزجاجات القياسية. ضغطة واحدة توزع ماء طازجا. قابل للشحن ومحمول مع حامل مريح. رائع للمنزل والمكتب والتخييم.\n\n• توزيع بضغطة واحدة\n• بطارية قابلة للشحن\n• يناسب الزجاجات القياسية\n• محمول مع حامل",
    },
    ckb: {
      title: "دەسکەپێدەری ئاوی مێزی بە شوکر (لەگەڵ ڕاگر)",
      description:
        "دەسکەپێدەری ئاوی ئۆتۆماتیکی کە لەگەڵ مووچکەی ستاندارد دەگونجێت. بە پەستانێک ئاوی تازە دەڕژێت. بە شوکر و گەڕۆکە لەگەڵ ڕاگرێکی بەکارهێنەر. بەرزترین بۆ ماڵ، نووسینگە و کەمپینگ.\n\n• دەسکەپێدان بە پەستانێک\n• باتری بە شوکر\n• لەگەڵ مووچکەی ستاندارد دەگونجێت\n• گەڕۆک لەگەڵ ڕاگر",
    },
    es: {
      title: "Dispensador de agua de escritorio recargable (con soporte)",
      description:
        "Dispensador de agua automático que se adapta a botellas estándar. Una pulsación dispensa agua fresca. Recargable y portátil con un práctico soporte. Ideal para casa, oficina y camping.\n\n• Dispensado con una pulsación\n• Batería recargable\n• Se adapta a botellas estándar\n• Portátil con soporte",
    },
    fr: {
      title: "Distributeur d'eau rechargeable de bureau (avec support)",
      description:
        "Distributeur d'eau automatique compatible avec les bouteilles standard. Une pression distribue de l'eau fraîche. Rechargeable et portable avec support pratique.\n\n• Distribution en une pression\n• Batterie rechargeable\n• Compatible bouteilles standard\n• Portable avec support",
    },
    de: {
      title: "Wiederaufladbarer Tischwasserspender (mit Ständer)",
      description:
        "Automatischer Wasserspender, der zu Standardflaschen passt. Ein Knopfdruck spendet frisches Wasser. Wiederaufladbar und tragbar mit praktischem Ständer.\n\n• Ein-Knopf-Spende\n• Wiederaufladbarer Akku\n• Passt zu Standardflaschen\n• Tragbar mit Ständer",
    },
    ru: {
      title: "Настольный водяной диспенсер с подставкой (аккумуляторный)",
      description:
        "Автоматический диспенсер для стандартных бутылок. Одно нажатие — свежая вода. Аккумуляторный, портативный, с удобной подставкой. Для дома, офиса и кемпинга.\n\n• Подача в одно касание\n• Аккумулятор\n• Для стандартных бутылок\n• Портативный с подставкой",
    },
    tr: {
      title: "Şarj Edilebilir Masa Üstü Su Dispenseri (Standlı)",
      description:
        "Standart şişelere uyan otomatik su dispenseri. Tek dokunuşla taze su akıtır. Şarj edilebilir ve pratik stand ile taşınabilir. Ev, ofis ve kamp için harika.\n\n• Tek dokunuşla akıtma\n• Şarj edilebilir pil\n• Standart şişelere uyar\n• Stand ile taşınabilir",
    },
    zh: {
      title: "台式可充电饮水机（带底座）",
      description:
        "适合标准瓶装的自动饮水机。一按即出新鲜水。可充电，带便捷底座便于携带。非常适合家庭、办公室和露营。\n\n• 一按出水\n• 可充电电池\n• 适合标准瓶\n• 带底座便携",
    },
  },
  "creative-cloud-sink-drain-rack-kitchen-sink-garbage-filter-sink-disposable-filter-mesh-bag-anti-blocking-strainer-kitche": {
    en: {
      title: "Sink Drain Filter Mesh Bag (Anti-Blocking)",
      description:
        "Creative mesh filter bags that catch food waste and prevent sink blockages. Easy to install, disposable and affordable. Keeps your kitchen drain clean.\n\n• Catches food waste\n• Prevents blockages\n• Disposable and hygienic\n• Easy to install",
    },
    fa: {
      title: "صافی سینک ظرفشویی (ضد انسداد)",
      description:
        "کیسه صافی خلاقانه که زباله غذایی را جمع می‌کند و از گرفتگی سینک جلوگیری می‌کند. نصب آسان، یک‌بارمصرف و مقرون‌به‌صرفه. لوله فاضلاب آشپزخانه را تمیز نگه می‌دارد.\n\n• جمع‌آوری زباله غذایی\n• جلوگیری از گرفتگی\n• یک‌بارمصرف و بهداشتی\n• نصب آسان",
    },
    ar: {
      title: "مصفى شبكي لبالوعة المطبخ (مانع للانسداد)",
      description:
        "أكياس مصفاة شبكية إبداعية تلتقط بقايا الطعام وتمنع انسداد البالوعة. سهلة التركيب وقابلة للاستخدام مرة واحدة وبأسعار مناسبة. تحافظ على نظافة مصرف مطبخك.\n\n• تلتقط بقايا الطعام\n• تمنع الانسداد\n• قابلة للرمي وصحية\n• سهلة التركيب",
    },
    ckb: {
      title: "پاڵاوەی گڕیزی چێشتخانە (بەرگری بەستن)",
      description:
        "کیشەی پاڵاوەی داهێنەر کە پاشماوەی خۆراک کۆدەکاتەوە و ڕێگری لە بەستنی گڕیز دەکات. بە ئاسانی دادەنرێت، تاکبەکار و هەرزانە. لەشی چێشتخانەت پاک دەهێڵێتەوە.\n\n• پاشماوەی خۆراک کۆدەکاتەوە\n• ڕێگری لە بەستن دەکات\n• تاکبەکار و تەندروست\n• بە ئاسانی دادەنرێت",
    },
    es: {
      title: "Colador de desagüe de fregadero (anti-obstrucción)",
      description:
        "Creativas bolsas de filtro que atrapan residuos de comida y evitan obstrucciones. Fáciles de instalar, desechables y económicas. Mantienen limpio el desagüe.\n\n• Atrapa residuos de comida\n• Evita obstrucciones\n• Desechables e higiénicas\n• Fáciles de instalar",
    },
    fr: {
      title: "Filtre d'évacuation d'évier (anti-bouchage)",
      description:
        "Sacs filtrants créatifs qui attrapent les déchets alimentaires et évitent les obstructions. Faciles à installer, jetables et abordables.\n\n• Capture les déchets alimentaires\n• Évite les obstructions\n• Jetables et hygiéniques\n• Installation facile",
    },
    de: {
      title: "Spülenabflusssieb (anti-verstopfung)",
      description:
        "Kreative Filtersiebe, die Essensreste auffangen und Verstopfungen verhindern. Einfach zu installieren, wegwerfbar und günstig. Hält den Abfluss sauber.\n\n• Fängt Essensreste auf\n• Verhindert Verstopfungen\n• Wegwerfbar und hygienisch\n• Einfach zu installieren",
    },
    ru: {
      title: "Сетчатый фильтр для раковины (против засора)",
      description:
        "Креативные сетчатые фильтры, улавливающие пищевые отходы и предотвращающие засоры. Легко устанавливаются, одноразовые и доступные.\n\n• Улавливает пищевые отходы\n• Предотвращает засоры\n• Одноразовые и гигиеничные\n• Легкая установка",
    },
    tr: {
      title: "Lavabo Süzgeç Filtre Torbası (Tıkanma Önleyici)",
      description:
        "Yemek atıklarını yakalayan ve lavabo tıkanıklığını önleyen yaratıcı filtre torbaları. Kolay kurulum, tek kullanımlık ve uygun fiyatlı.\n\n• Yemek atıklarını yakalar\n• Tıkanmayı önler\n• Tek kullanımlık ve hijyenik\n• Kolay kurulum",
    },
    zh: {
      title: "水槽过滤网袋（防堵）",
      description:
        "创意过滤网袋，捕捉食物残渣，防止水槽堵塞。易于安装，一次性使用，价格实惠。保持厨房排水管清洁。\n\n• 捕捉食物残渣\n• 防止堵塞\n• 一次性卫生\n• 易于安装",
    },
  },
  "stone-mortar-vintage-marble-kitchen-home-grinder": {
    en: {
      title: "Marble Mortar and Pestle (Kitchen Grinder)",
      description:
        "A classic marble mortar and pestle for grinding herbs, spices and garlic. Durable natural stone with a vintage look. A timeless kitchen essential.\n\n• Natural marble stone\n• Vintage design\n• Grinds spices, herbs, garlic\n• Durable and easy to clean",
    },
    fa: {
      title: "هاون سنگی مرمری آشپزخانه",
      description:
        "هاون و دسته سنگی کلاسیک مرمری برای ساییدن ادویه، سبزی و سیر. سنگ طبیعی بادوام با ظاهر قدیمی. یک ابزار ضروری ماندگار در آشپزخانه.\n\n• سنگ مرمر طبیعی\n• طراحی قدیمی\n• ساییدن ادویه، سبزی و سیر\n• بادوام و آسان برای تمیز کردن",
    },
    ar: {
      title: "هاون رخامي للمطبخ",
      description:
        "هاون ومدقة رخامية كلاسيكية لطحن الأعشاب والتوابل والثوم. حجر طبيعي متين بمظهر قديم. أداة مطبخ أساسية خالدة.\n\n• حجر رخامي طبيعي\n• تصميم قديم\n• يطحن التوابل والأعشاب والثوم\n• متين وسهل التنظيف",
    },
    ckb: {
      title: "هەوێن بەردی مارمەڕی چێشتخانە",
      description:
        "هەوێن و دەستە بەردی کلاسیکی مارمەڕی بۆ هەڵمژاندنی بەهارات، ڕەوە و سیر. بەردی سروشتی بەهێز بە دیمەنی کۆن. ئامرازێکی پێویستی چێشتخانە.\n\n• بەردی سروشتی مارمەڕی\n• دیزاینی کۆن\n• بەهارات، ڕەوە و سیر دەسوێنێت\n• بەهێز و بە ئاسانی پاک دەبێتەوە",
    },
    es: {
      title: "Mortero de mármol para cocina",
      description:
        "Un clásico mortero de mármol para moler hierbas, especias y ajo. Piedra natural duradera con aspecto vintage. Un imprescindible atemporal de cocina.\n\n• Mármol natural\n• Diseño vintage\n• Muele especias, hierbas y ajo\n• Duradero y fácil de limpiar",
    },
    fr: {
      title: "Mortier en marbre pour la cuisine",
      description:
        "Un mortier en marbre classique pour moudre herbes, épices et ail. Pierre naturelle durable au look vintage. Un indispensable intemporel de cuisine.\n\n• Marbre naturel\n• Design vintage\n• Moud épices, herbes et ail\n• Durable et facile à nettoyer",
    },
    de: {
      title: "Marmor-Mörser für die Küche",
      description:
        "Ein klassischer Marmor-Mörser zum Mahlen von Kräutern, Gewürzen und Knoblauch. Langlebiger Naturstein im Vintage-Look. Ein zeitloser Küchenklassiker.\n\n• Natürlicher Marmor\n• Vintage-Design\n• Mahlt Gewürze, Kräuter, Knoblauch\n• Langlebig und leicht zu reinigen",
    },
    ru: {
      title: "Мраморная ступка для кухни",
      description:
        "Классическая мраморная ступка для измельчения трав, специй и чеснока. Прочный натуральный камень в винтажном стиле. Вечный кухонный атрибут.\n\n• Натуральный мрамор\n• Винтажный дизайн\n• Измельчает специи, травы, чеснок\n• Прочная и легко моется",
    },
    tr: {
      title: "Mermer Mutfak Havan",
      description:
        "Ot, baharat ve sarımsak öğütmek için klasik mermer havan. Vintage görünümlü dayanıklı doğal taş. Zamansız bir mutfak gereci.\n\n• Doğal mermer\n• Vintage tasarım\n• Baharat, ot ve sarımsak öğütür\n• Dayanıklı ve temizlemesi kolay",
    },
    zh: {
      title: "大理石厨房捣蒜臼",
      description:
        "经典大理石研钵，用于研磨香草、香料和大蒜。耐用的天然石材，复古外观。永恒的厨房必备品。\n\n• 天然大理石\n• 复古设计\n• 研磨香料、香草、大蒜\n• 耐用且易于清洁",
    },
  },
  "genuine-leather-protective-case-shatterproof-mobile-phone-case": {
    en: {
      title: "Genuine Leather Shatterproof Phone Case",
      description:
        "Genuine leather phone case with strong shock and shatter protection. Precise cutouts, soft touch finish and a premium look that ages beautifully.\n\n• Genuine leather\n• Shatterproof protection\n• Precise cutouts\n• Premium soft-touch finish",
    },
    fa: {
      title: "قاب گوشی چرمی اصلی ضدضربه",
      description:
        "قاب گوشی از چرم اصل با محافظت قوی در برابر ضربه و شکست. برش‌های دقیق، بافت نرم و ظاهری لوکس که با مرور زمان زیباتر می‌شود.\n\n• چرم اصل\n• محافظت ضدضربه\n• برش‌های دقیق\n• بافت نرم و لوکس",
    },
    ar: {
      title: "غطاء هاتف جلدي أصلي ضد الصدمات",
      description:
        "غطاء هاتف من الجلد الأصلي مع حماية قوية ضد الصدمات والكسر. قصاصات دقيقة ولمسة ناعمة ومظهر فاخر يتجمل مع الوقت.\n\n• جلد أصلي\n• حماية ضد الصدمات\n• قصاصات دقيقة\n• لمسة نهائية فاخرة ناعمة",
    },
    ckb: {
      title: "کلیپی مۆبایلی چەرمی ڕەسەن بەرگری لێدەدەن",
      description:
        "کلیپی مۆبایل لە چەرمی ڕەسەن لەگەڵ پارێزگاری بەهێز لە لێدان و شکانی شاشە. پڕێکی ورد، پێستێکی نەرم و دیمەنێکی لوکس کە بە تێپەڕبوونی کات جوانتر دەبێت.\n\n• چەرمی ڕەسەن\n• پارێزگاری لێدەدەن\n• پڕێکی ورد\n• پێستی نەرم و لوکس",
    },
    es: {
      title: "Funda de móvil de cuero genuino a prueba de golpes",
      description:
        "Funda de cuero genuino con fuerte protección contra golpes y roturas. Recortes precisos, tacto suave y aspecto premium que mejora con el tiempo.\n\n• Cuero genuino\n• Protección a prueba de golpes\n• Recortes precisos\n• Acabado premium de tacto suave",
    },
    fr: {
      title: "Coque en cuir véritable anti-choc",
      description:
        "Coque en cuir véritable avec une protection renforcée contre les chocs. Découpes précises, toucher doux et finition premium qui s'embellit avec le temps.\n\n• Cuir véritable\n• Protection anti-choc\n• Découpes précises\n• Finition premium au toucher doux",
    },
    de: {
      title: "Echte-Leder-Handyhülle (stoßfest)",
      description:
        "Echte-Leder-Hülle mit starkem Stoß- und Bruchschutz. Präzise Ausschnitte, weiche Haptik und ein Premium-Look, der mit der Zeit schöner wird.\n\n• Echtes Leder\n• Stoßfester Schutz\n• Präzise Ausschnitte\n• Premium-Soft-Touch-Oberfläche",
    },
    ru: {
      title: "Чехол из натуральной кожи для телефона (ударопрочный)",
      description:
        "Чехол из натуральной кожи с надежной защитой от ударов. Точные вырезы, мягкое покрытие и премиальный вид, который со временем становится только лучше.\n\n• Натуральная кожа\n• Ударопрочность\n• Точные вырезы\n• Премиальное мягкое покрытие",
    },
    tr: {
      title: "Hakiki Deri Kırılmaz Telefon Kılıfı",
      description:
        "Güçlü darbe ve kırılma korumasına sahip hakiki deri telefon kılıfı. Hassas kesimler, yumuşak dokunuş ve zamanla güzelleşen premium görünüm.\n\n• Hakiki deri\n• Kırılmaya karşı koruma\n• Hassas kesimler\n• Premium yumuşak dokunuş",
    },
    zh: {
      title: "真皮防碎手机壳",
      description:
        "真皮手机壳，具有强力防震防碎保护。精准开孔，触感柔软，高端外观经久耐用。\n\n• 真皮材质\n• 防碎保护\n• 精准开孔\n• 高端柔软触感",
    },
  },
  "watch-card-positioning-boy-girl-student-smart-watch": {
    en: {
      title: "Kids Student Smart Watch with Card Positioning",
      description:
        "A smart watch designed for students with calling and card positioning features. Durable and easy to use with useful tools for school and play.\n\n• Calling feature\n• Card positioning\n• Durable build\n• Great for school use",
    },
    fa: {
      title: "ساعت هوشمند دانش‌آموزی با کارت موقعیت‌یاب",
      description:
        "ساعت هوشمند طراحی‌شده برای دانش‌آموزان با قابلیت تماس و کارت موقعیت‌یاب. بادوام و آسان برای استفاده با ابزارهای مفید برای مدرسه و بازی.\n\n• قابلیت تماس\n• کارت موقعیت‌یاب\n• بدنه بادوام\n• عالی برای مدرسه",
    },
    ar: {
      title: "ساعة ذكية للطلاب مع بطاقة تحديد المواقع",
      description:
        "ساعة ذكية مصممة للطلاب مع ميزة الاتصال وبطاقة تحديد المواقع. متينة وسهلة الاستخدام مع أدوات مفيدة للمدرسة واللعب.\n\n• ميزة الاتصال\n• بطاقة تحديد المواقع\n• هيكل متين\n• رائعة للمدرسة",
    },
    ckb: {
      title: "ساعی زیرەکی خوێندکاران لەگەڵ کارتی دۆزینەوەی شوێن",
      description:
        "ساعیەکی زیرەک کە بۆ خوێندکاران دیزاین کراوە لەگەڵ تایبەتمەندی پەیوەندی و کارتی دۆزینەوەی شوێن. بەهێز و بە ئاسانی بەکارهێنراوە لەگەڵ ئامرازی بەسوود بۆ قوتابخانە و یاری.\n\n• تایبەتمەندی پەیوەندی\n• کارتی دۆزینەوەی شوێن\n• لەشی بەهێز\n• بەرزترین بۆ قوتابخانە",
    },
    es: {
      title: "Smartwatch para estudiantes con localización",
      description:
        "Un smartwatch diseñado para estudiantes con llamadas y tarjeta de localización. Robusto y fácil de usar con herramientas útiles para el colegio y el juego.\n\n• Función de llamada\n• Tarjeta de localización\n• Construcción resistente\n• Ideal para el colegio",
    },
    fr: {
      title: "Montre intelligente pour étudiants avec positionnement",
      description:
        "Une montre intelligente conçue pour les étudiants avec appels et positionnement par carte. Robuste, facile à utiliser avec des outils utiles pour l'école.\n\n• Fonction appel\n• Positionnement par carte\n• Construction robuste\n• Idéale pour l'école",
    },
    de: {
      title: "Schüler-Smartwatch mit Kartenortung",
      description:
        "Eine für Schüler entwickelte Smartwatch mit Anruffunktion und Kartenortung. Robust und einfach zu bedienen mit nützlichen Tools für Schule und Freizeit.\n\n• Anruffunktion\n• Kartenortung\n• Robuste Bauweise\n• Ideal für die Schule",
    },
    ru: {
      title: "Умные часы для школьников с картой позиционирования",
      description:
        "Умные часы для школьников со звонками и картой позиционирования. Прочные и простые в использовании, с полезными функциями для учебы и игр.\n\n• Функция звонка\n• Карта позиционирования\n• Прочная конструкция\n• Идеальны для школы",
    },
    tr: {
      title: "Kart Konumlu Öğrenci Akıllı Saati",
      description:
        "Arama ve kart konum özellikli, öğrenciler için tasarlanmış akıllı saat. Okul ve oyun için kullanışlı araçlarla dayanıklı ve kolay kullanım.\n\n• Arama özelliği\n• Kart konum takibi\n• Dayanıklı yapı\n• Okul için harika",
    },
    zh: {
      title: "学生智能手表（带卡定位）",
      description:
        "专为学生设计的智能手表，具备通话和卡定位功能。耐用易用，内置实用的学习与娱乐工具。\n\n• 通话功能\n• 卡定位\n• 耐用机身\n• 非常适合上学佩戴",
    },
  },
  "three-in-one-wireless-charger": {
    en: {
      title: "Three-in-One Wireless Charger",
      description:
        "Charges phone, watch and earbuds at the same time with one cable. Foldable design, safe fast charging and a clean cable-free desk.\n\n• Charges 3 devices at once\n• Foldable design\n• Safe fast charging\n• Declutter your desk",
    },
    fa: {
      title: "شارژر بی‌سیم سه‌دریک",
      description:
        "گوشی، ساعت و هدفون را همزمان با یک کابل شارژ می‌کند. طراحی تاشو، شارژ سریع ایمن و میز بدون سیم.\n\n• شارژ همزمان ۳ دستگاه\n• طراحی تاشو\n• شارژ سریع ایمن\n• میز مرتب بدون سیم",
    },
    ar: {
      title: "شاحن لاسلكي ثلاثي في واحد",
      description:
        "يشحن الهاتف والساعة وسماعات الأذن في نفس الوقت بكابل واحد. تصميم قابل للطي وشحن سريع آمن ومكتب بدون أسلاك.\n\n• يشحن 3 أجهزة معا\n• تصميم قابل للطي\n• شحن سريع آمن\n• مكتب مرتب بلا أسلاك",
    },
    ckb: {
      title: "شوکەری بێسیم سێ-لە-یەک",
      description:
        "مۆبایل، ساعەت و هێدفۆن لە هەمان کاتدا بە یەک کێبڵ شوکر دەکات. دیزاینی بە شیکردنەوە، شوکری خێرای سەلامەت و مێزێکی پاک بێ کێبڵ.\n\n• سێ ئامێر لە یەک کاتدا شوکر دەکات\n• دیزاینی قۆناغی\n• شوکری خێرای سەلامەت\n• مێزەکەت بێ کێبڵ دەکات",
    },
    es: {
      title: "Cargador inalámbrico 3 en 1",
      description:
        "Carga móvil, reloj y auriculares a la vez con un solo cable. Diseño plegable, carga rápida segura y escritorio limpio sin cables.\n\n• Carga 3 dispositivos a la vez\n• Diseño plegable\n• Carga rápida segura\n• Escritorio sin cables",
    },
    fr: {
      title: "Chargeur sans fil 3-en-1",
      description:
        "Recharge téléphone, montre et écouteurs en même temps avec un seul câble. Design pliable, charge rapide sûre et bureau sans câbles.\n\n• Recharge 3 appareils à la fois\n• Design pliable\n• Charge rapide sûre\n• Bureau sans encombrement",
    },
    de: {
      title: "3-in-1 kabelloses Ladegerät",
      description:
        "Lädt Handy, Uhr und Kopfhörer gleichzeitig mit einem Kabel. Faltbares Design, sicheres Schnellladen und ein aufgeräumter Schreibtisch.\n\n• Lädt 3 Geräte gleichzeitig\n• Faltbares Design\n• Sicheres Schnellladen\n• Aufgeräumter Schreibtisch",
    },
    ru: {
      title: "Беспроводное зарядное устройство 3-в-1",
      description:
        "Заряжает телефон, часы и наушники одновременно одним кабелем. Складная конструкция, безопасная быстрая зарядка и стол без проводов.\n\n• Заряжает 3 устройства сразу\n• Складная конструкция\n• Безопасная быстрая зарядка\n• Стол без проводов",
    },
    tr: {
      title: "3'ü 1 Arada Kablosuz Şarj Cihazı",
      description:
        "Tek kabloyla telefon, saat ve kulaklığı aynı anda şarj eder. Katlanabilir tasarım, güvenli hızlı şarj ve kablosuz temiz masa.\n\n• Aynı anda 3 cihazı şarj eder\n• Katlanabilir tasarım\n• Güvenli hızlı şarj\n• Masanızı düzenler",
    },
    zh: {
      title: "三合一无线充电器",
      description:
        "一根线同时为手机、手表和耳机充电。可折叠设计，安全快充，桌面整洁无线缆。\n\n• 同时为3台设备充电\n• 可折叠设计\n• 安全快充\n• 整洁桌面",
    },
  },
  "running-slim-yoga-wear-trousers": {
    en: {
      title: "Running Slim Yoga Pants",
      description:
        "Slim-fit yoga and running pants with a comfortable stretch. Moisture-wicking fabric keeps you dry through any workout. Ideal for yoga, gym and daily wear.\n\n• Slim fit\n• Stretchy and comfortable\n• Moisture-wicking\n• Great for yoga, gym and running",
    },
    fa: {
      title: "شلوار یوگا لاغر",
      description:
        "شلوار یوگا و دویدن با فیت لاغر و کشسانی راحت. پارچه ضدعرق در طول تمرین شما را خشک نگه می‌دارد. ایده‌آل برای یوگا، باشگاه و استفاده روزانه.\n\n• فیت لاغر\n• کشسان و راحت\n• ضدعرق\n• عالی برای یوگا، باشگاه و دویدن",
    },
    ar: {
      title: "بنطال يوغا نحيف للركض",
      description:
        "بنطال يوغا وركض بقصّة نحيفة ومطاط مريح. قماش يمتص الرطوبة يبقيك جافا خلال التمرين. مثالي لليوغا والجيم والاستخدام اليومي.\n\n• قصّة نحيفة\n• مطاط ومريح\n• يمتص الرطوبة\n• رائع لليوغا والجيم والركض",
    },
    ckb: {
      title: "شەلوارێکی یۆگای لاغر",
      description:
        "شەلوارێکی یۆگا و ڕاکردن بە فیتێکی لاغر و قاچاوی ئاسوودە. پێستەی خوێنبەر لە کاتی ڕاهێناندا تەڕ نیویت دەکات. بەرزترین بۆ یۆگا، جیم و بەکارهێنانی ڕۆژانە.\n\n• فیتێکی لاغر\n• قاچاوی و ئاسوودە\n• خوێنبەر\n• بەرزترین بۆ یۆگا، جیم و ڕاکردن",
    },
    es: {
      title: "Pantalones de yoga ceñidos para correr",
      description:
        "Pantalones de yoga y running de corte ceñido con elástico cómodo. Tejido que absorbe la humedad para mantenerte seco en cualquier entrenamiento.\n\n• Corte ceñido\n• Elásticos y cómodos\n• Absorben la humedad\n• Ideales para yoga, gimnasio y running",
    },
    fr: {
      title: "Pantalon de yoga slim pour la course",
      description:
        "Pantalon de yoga et de course à coupe slim et élastique confortable. Tissu respirant qui vous garde au sec pendant l'effort.\n\n• Coupe slim\n• Élastique et confortable\n• Respirant\n• Idéal yoga, salle et course",
    },
    de: {
      title: "Slim-Fit Yogahose zum Laufen",
      description:
        "Slim-Fit Yoga- und Laufhose mit bequemem Stretch. Feuchtigkeitsableitender Stoff hält dich bei jedem Training trocken.\n\n• Slim Fit\n• Stretch und bequem\n• Feuchtigkeitsableitend\n• Ideal für Yoga, Gym und Laufen",
    },
    ru: {
      title: "Облегающие брюки для йоги и бега",
      description:
        "Облегающие брюки для йоги и бега с комфортным стрейчем. Влагоотводящая ткань сохраняет сухость во время тренировки.\n\n• Облегающий крой\n• Эластичные и удобные\n• Влагоотводящие\n• Для йоги, спортзала и бега",
    },
    tr: {
      title: "Slim Koşu Yoga Pantolonu",
      description:
        "Slim kesim yoga ve koşu pantolonu, konforlu elastik yapı. Nemi emen kumaş her antrenmanda kuru kalmanı sağlar.\n\n• Slim kesim\n• Esnek ve konforlu\n• Nemi emer\n• Yoga, spor ve koşu için harika",
    },
    zh: {
      title: "修身跑步瑜伽裤",
      description:
        "修身款瑜伽跑步裤，弹性舒适。吸湿排汗面料让您在锻炼时保持干爽。非常适合瑜伽、健身房和日常穿着。\n\n• 修身版型\n• 弹性舒适\n• 吸湿排汗\n• 适合瑜伽、健身和跑步",
    },
  },
  "motorcycle-riding-gloves-rock-climbing-outdoor-non-slip-wear-resistant-labor-protection-gloves": {
    en: {
      title: "Motorcycle Riding & Outdoor Work Gloves",
      description:
        "Durable non-slip gloves for motorcycle riding, climbing and outdoor work. Wear-resistant palms with protective padding. Reinforced knuckles for extra safety.\n\n• Non-slip grip\n• Wear-resistant\n• Protective padding\n• Ideal for riding and work",
    },
    fa: {
      title: "دستکش موتورسواری و کار در فضای باز",
      description:
        "دستکش بادوام ضدلغزش برای موتورسواری، کوهنوردی و کار در فضای باز. کف دست مقاوم در برابر سایش با پد محافظ. بند انگشت تقویت‌شده برای ایمنی بیشتر.\n\n• چسبندگی ضدلغزش\n• مقاوم در برابر سایش\n• پد محافظ\n• ایده‌آل برای رانندگی و کار",
    },
    ar: {
      title: "قفازات ركوب الدراجة النارية والعمل الخارجي",
      description:
        "قفازات متينة غير قابلة للانزلاق لركوب الدراجة النارية والتسلق والعمل في الهواء الطلق. راحة مقاومة للتآكل مع حشوة واقية. مفاصل معززة لأمان إضافي.\n\n• قبضة مانعة للانزلاق\n• مقاومة للتآكل\n• حشوة واقية\n• مثالية للركوب والعمل",
    },
    ckb: {
      title: "دەستکێشی سواری موتۆر و کاری دەرەوە",
      description:
        "دەستکێشی بەهێز ناخلیسک بۆ سواری موتۆر، چەخساندن و کاری دەرەوە. دەستی بەرگری سترێس لەگەڵ پادێکی پارێزەر. ژێی پەنجەکان بەهێزکراو بۆ سەلامەتی زیاتر.\n\n• گرتنی ناخلیسک\n• بەرگری سترێس\n• پادێکی پارێزەر\n• بەرزترین بۆ سواری و کار",
    },
    es: {
      title: "Guantes de moto y trabajo al aire libre",
      description:
        "Guantes antideslizantes resistentes para moto, escalada y trabajo al aire libre. Palmas resistentes a la abrasión con acolchado protector. Nudillos reforzados.\n\n• Agarre antideslizante\n• Resistentes a la abrasión\n• Acolchado protector\n• Ideales para conducir y trabajar",
    },
    fr: {
      title: "Gants de moto et de travail en extérieur",
      description:
        "Gants antidérapants résistants pour la moto, l'escalade et le travail extérieur. Paumes résistantes à l'abrasion avec rembourrage de protection.\n\n• Grip antidérapant\n• Résistant à l'abrasion\n• Rembourrage protecteur\n• Idéal conduite et travail",
    },
    de: {
      title: "Motorrad- und Arbeitshandschuhe für draußen",
      description:
        "Robuste, rutschfeste Handschuhe für Motorradfahren, Klettern und Outdoor-Arbeiten. Abriebfeste Handflächen mit Schutzpolsterung. Verstärkte Knöchel.\n\n• Rutschfester Griff\n• Abriebfest\n• Schutzpolsterung\n• Ideal zum Fahren und Arbeiten",
    },
    ru: {
      title: "Перчатки для мотоцикла и работ на открытом воздухе",
      description:
        "Прочные нескользящие перчатки для езды на мотоцикле, скалолазания и работ на улице. Износостойкие ладони с защитной подкладкой. Усиленные костяшки.\n\n• Нескользящий хват\n• Износостойкие\n• Защитная подкладка\n• Для езды и работы",
    },
    tr: {
      title: "Motosiklet ve Dış Mekan İş Eldiveni",
      description:
        "Motosiklet, tırmanış ve açık hava işleri için dayanıklı kaymaz eldivenler. Koruyucu dolgulu aşınmaya dayanıklı avuç içleri. Güçlendirilmiş eklemler.\n\n• Kaymaz tutuş\n• Aşınmaya dayanıklı\n• Koruyucu dolgu\n• Sürüş ve iş için ideal",
    },
    zh: {
      title: "摩托车骑行与户外作业手套",
      description:
        "耐用防滑手套，适用于摩托车骑行、攀岩和户外作业。耐磨掌部带保护垫。加固指关节，安全加倍。\n\n• 防滑抓握\n• 耐磨\n• 保护衬垫\n• 适合骑行和工作",
    },
  },
  "handwriting-second-generation-pen-shaped-flying-squirrel-mouse-pen-wireless-gaming-optical-pen": {
    en: {
      title: "Wireless Pen Mouse (2nd Gen)",
      description:
        "A pen-shaped wireless mouse with a precise optical sensor. Comfortable grip, quiet clicks and easy portability. Works great for office work and everyday use.\n\n• Pen-shaped design\n• Wireless optical sensor\n• Comfortable grip\n• Portable and lightweight",
    },
    fa: {
      title: "ماوس قلمی بی‌سیم نسل دوم",
      description:
        "ماوس قلم‌شکل بی‌سیم با سنسور نوری دقیق. دسته راحت، کلیک‌های بی‌صدا و حمل آسان. مناسب کارهای اداری و استفاده روزمره.\n\n• طراحی قلم‌شکل\n• سنسور نوری بی‌سیم\n• دسته راحت\n• قابل حمل و سبک",
    },
    ar: {
      title: "فأرة قلمية لاسلكية (الجيل الثاني)",
      description:
        "فأرة لاسلكية بشكل قلم مع مستشعر بصري دقيق. قبضة مريحة ونقرات هادئة وسهولة في الحمل. مثالية للعمل المكتبي والاستخدام اليومي.\n\n• تصميم بشكل قلم\n• مستشعر بصري لاسلكي\n• قبضة مريحة\n• خفيفة ومحمولة",
    },
    ckb: {
      title: "ماووسی قەڵەمی بێسیم (نەوەی دووەم)",
      description:
        "ماووسی قەڵەمشێوەی بێسیم لەگەڵ سینسۆری نووری ورد. دەستێکی ئاسوودە، کرتە بێدەنگ و بە ئاسانی هەڵدەگریت. بەرزترین بۆ کاری نووسینگە و بەکارهێنانی ڕۆژانە.\n\n• دیزاینی قەڵەمشێوە\n• سینسۆری نووری بێسیم\n• دەستی ئاسوودە\n• گەڕۆک و سووک",
    },
    es: {
      title: "Ratón lápiz inalámbrico (2.ª gen)",
      description:
        "Un ratón inalámbrico con forma de lápiz y sensor óptico preciso. Agarre cómodo, clics silenciosos y fácil de transportar. Ideal para oficina y uso diario.\n\n• Diseño en forma de lápiz\n• Sensor óptico inalámbrico\n• Agarre cómodo\n• Portátil y ligero",
    },
    fr: {
      title: "Souris-stylo sans fil (2e génération)",
      description:
        "Une souris sans fil en forme de stylo avec un capteur optique précis. Prise en main confortable, clics silencieux et facile à transporter.\n\n• Design stylo\n• Capteur optique sans fil\n• Prise en main confortable\n• Portable et légère",
    },
    de: {
      title: "Kabellose Stiftmaus (2. Generation)",
      description:
        "Eine kabellose Maus in Stiftform mit präzisem optischem Sensor. Komfortabler Griff, leise Klicks und einfach zu transportieren.\n\n• Stiftförmiges Design\n• Kabelloser optischer Sensor\n• Komfortabler Griff\n• Tragbar und leicht",
    },
    ru: {
      title: "Беспроводная мышь в форме ручки (2-е поколение)",
      description:
        "Беспроводная мышь в форме ручки с точным оптическим сенсором. Удобный хват, тихие клики, легкая транспортировка.\n\n• Форма ручки\n• Оптический сенсор\n• Удобный хват\n• Портативная и легкая",
    },
    tr: {
      title: "Kablosuz Kalem Fare (2. Nesil)",
      description:
        "Hassas optik sensörlü, kalem şeklinde kablosuz fare. Rahat tutuş, sessiz tıklamalar ve kolay taşınabilirlik. Ofis işleri ve günlük kullanım için harika.\n\n• Kalem şeklinde tasarım\n• Kablosuz optik sensör\n• Rahat tutuş\n• Taşınabilir ve hafif",
    },
    zh: {
      title: "无线笔式鼠标（第二代）",
      description:
        "笔形无线鼠标，配备精准光学传感器。握感舒适，点击安静，便于携带。非常适合办公和日常使用。\n\n• 笔形设计\n• 无线光学传感器\n• 舒适握感\n• 便携轻巧",
    },
  },
  "travel-cable-bag-portable-digital-usb-gadget-organizer-charger-wires-cosmetic-zipper-storage-pouch-kit-case-accessories-": {
    en: {
      title: "Travel Cable Organizer Bag (USB Gadget Pouch)",
      description:
        "Keep cables, chargers and gadgets neatly organized in one portable zipper pouch. Great for travel, work and daily carry. Durable fabric with easy access.\n\n• Multiple compartments\n• Zipper closure\n• Portable and durable\n• Organizes cables and gadgets",
    },
    fa: {
      title: "کیف سازمان‌دهی کابل مسافرتی",
      description:
        "کابل‌ها، شارژرها و لوازم دیجیتال را در یک کیف زیپ‌دار قابل حمل مرتب نگه می‌دارد. عالی برای سفر، کار و استفاده روزانه. پارچه بادوام با دسترسی آسان.\n\n• چند بخش مجزا\n• بست زیپ\n• قابل حمل و بادوام\n• سازمان‌دهی کابل و لوازم",
    },
    ar: {
      title: "حقيبة تنظيم الكابلات للسفر",
      description:
        "حافظ على الكابلات والشواحن والأجهزة مرتبة في حقيبة سحاب واحدة محمولة. رائعة للسفر والعمل والاستخدام اليومي. قماش متين مع وصول سهل.\n\n• أقسام متعددة\n• إغلاق بسحاب\n• محمولة ومتينة\n• تنظم الكابلات والأجهزة",
    },
    ckb: {
      title: "کیسە ڕێکخەری کێبڵی گەشت",
      description:
        "کێبڵەکان، شوکەر و ئامێرەکان لە یەک کیسەی زیپداردا بە ڕێکی بپارێزە. بەرزترین بۆ گەشت، کار و بەکارهێنانی ڕۆژانە. پێستەی بەهێز بە دەستگەیشتنی ئاسان.\n\n• چەند بەشی جیاواز\n• بەستی زیپ\n• گەڕۆک و بەهێز\n• کێبڵ و ئامێرەکان ڕێکدەکات",
    },
    es: {
      title: "Bolsa organizadora de cables de viaje",
      description:
        "Mantén cables, cargadores y gadgets ordenados en una práctica bolsa con cremallera. Ideal para viajes, trabajo y uso diario. Tejido resistente con fácil acceso.\n\n• Varios compartimentos\n• Cierre con cremallera\n• Portátil y resistente\n• Organiza cables y gadgets",
    },
    fr: {
      title: "Sac organiseur de câbles de voyage",
      description:
        "Gardez câbles, chargeurs et gadgets bien rangés dans une pochette à fermeture éclair portable. Parfaite pour les voyages, le travail et le quotidien.\n\n• Plusieurs compartiments\n• Fermeture éclair\n• Portable et durable\n• Organise câbles et gadgets",
    },
    de: {
      title: "Reise-Kabel-Organizer-Tasche",
      description:
        "Halte Kabel, Ladegeräte und Gadgets ordentlich in einer tragbaren Reißverschluss-Tasche. Ideal für Reisen, Arbeit und den Alltag. Strapazierfähiger Stoff.\n\n• Mehrere Fächer\n• Reißverschluss\n• Tragbar und robust\n• Organisiert Kabel und Gadgets",
    },
    ru: {
      title: "Дорожная сумка-органайзер для кабелей",
      description:
        "Аккуратно храните кабели, зарядки и гаджеты в одной портативной сумке на молнии. Отлично для путешествий, работы и повседневного использования.\n\n• Несколько отделений\n• Застежка-молния\n• Портативная и прочная\n• Организует кабели и гаджеты",
    },
    tr: {
      title: "Seyahat Kablo Organizatör Çantası",
      description:
        "Kabloları, şarj cihazlarını ve aygıtları tek bir taşınabilir fermuarlı çantada düzenli tutun. Seyahat, iş ve günlük kullanım için harika.\n\n• Çoklu bölmeler\n• Fermuarlı kapatma\n• Taşınabilir ve dayanıklı\n• Kabloları ve aygıtları düzenler",
    },
    zh: {
      title: "旅行线材收纳包",
      description:
        "将线缆、充电器和数码设备整齐收纳在一个便携拉链袋中。非常适合旅行、工作和日常携带。耐用面料，取用方便。\n\n• 多个隔层\n• 拉链闭合\n• 便携耐用\n• 整理线缆和小工具",
    },
  },
  "full-circle-screen-card-sedentary-sleep-monitoring-watch": {
    en: {
      title: "Full Round Screen Smart Watch (Health Monitor)",
      description:
        "Full round screen smart watch with health tracking. Monitors activity, sedentary reminders and sleep quality. Lightweight and comfortable for all-day wear.\n\n• Full round screen\n• Activity tracking\n• Sedentary reminders\n• Sleep monitoring",
    },
    fa: {
      title: "ساعت هوشمند صفحه تمام‌دایره (پایش سلامت)",
      description:
        "ساعت هوشمند با صفحه تمام‌دایره و پایش سلامت. فعالیت روزانه، یادآوری کم‌تحرکی و کیفیت خواب را ردیابی می‌کند. سبک و راحت برای استفاده تمام‌روز.\n\n• صفحه تمام‌دایره\n• ردیابی فعالیت\n• یادآوری کم‌تحرکی\n• پایش خواب",
    },
    ar: {
      title: "ساعة ذكية بشاشة دائرية كاملة (مراقبة الصحة)",
      description:
        "ساعة ذكية بشاشة دائرية كاملة مع تتبع الصحة. تراقب النشاط وتذكيرات الجلوس وجودة النوم. خفيفة ومريحة للاستخدام طوال اليوم.\n\n• شاشة دائرية كاملة\n• تتبع النشاط\n• تذكيرات الجلوس\n• مراقبة النوم",
    },
    ckb: {
      title: "ساعی زیرەکی شاشەی بازنەیی تەواو (چاودێری تەندروستی)",
      description:
        "ساعی زیرەک لەگەڵ شاشەی بازنەیی تەواو و چاودێری تەندروستی. چالاکی، یادخەریی دانیشتن و جۆری خەو چاودێری دەکات. سووک و ئاسوودە بۆ لەبەرکردنی هەموو ڕۆژ.\n\n• شاشەی بازنەیی تەواو\n• چاودێری چالاکی\n• یادخەریی دانیشتن\n• چاودێری خەو",
    },
    es: {
      title: "Smartwatch de pantalla circular completa (monitor de salud)",
      description:
        "Smartwatch de pantalla circular completa con seguimiento de salud. Supervisa actividad, recordatorios de sedentarismo y calidad del sueño. Ligero y cómodo.\n\n• Pantalla circular completa\n• Seguimiento de actividad\n• Recordatorios de sedentarismo\n• Monitorización del sueño",
    },
    fr: {
      title: "Montre intelligente à écran rond plein (santé)",
      description:
        "Montre intelligente à écran entièrement rond avec suivi de santé. Surveille l'activité, les rappels anti-sédentarité et le sommeil. Légère et confortable.\n\n• Écran entièrement rond\n• Suivi d'activité\n• Rappels anti-sédentarité\n• Suivi du sommeil",
    },
    de: {
      title: "Smartwatch mit vollem Runddisplay (Gesundheitsmonitor)",
      description:
        "Smartwatch mit vollem Runddisplay und Gesundheits-Tracking. Überwacht Aktivität, Sitz-Erinnerungen und Schlafqualität. Leicht und bequem.\n\n• Volles Runddisplay\n• Aktivitäts-Tracking\n• Sitz-Erinnerungen\n• Schlafüberwachung",
    },
    ru: {
      title: "Умные часы с полным круглым экраном (мониторинг здоровья)",
      description:
        "Умные часы с полным круглым экраном и отслеживанием здоровья. Контроль активности, напоминания о сидячем образе жизни и качество сна. Легкие и удобные.\n\n• Полный круглый экран\n• Отслеживание активности\n• Напоминания о сидячем положении\n• Мониторинг сна",
    },
    tr: {
      title: "Tam Dairesel Ekran Akıllı Saat (Sağlık Takibi)",
      description:
        "Sağlık takipli tam dairesel ekran akıllı saat. Aktivite, hareketsizlik hatırlatıcıları ve uyku kalitesini izler. Tüm gün takılmak için hafif ve konforlu.\n\n• Tam dairesel ekran\n• Aktivite takibi\n• Hareketsizlik hatırlatıcıları\n• Uyku takibi",
    },
    zh: {
      title: "全圆屏智能手表（健康监测）",
      description:
        "全圆屏智能手表，具备健康追踪功能。监测活动、久坐提醒和睡眠质量。轻巧舒适，适合全天佩戴。\n\n• 全圆屏幕\n• 活动追踪\n• 久坐提醒\n• 睡眠监测",
    },
  },
  "10w-fast-wireless-car-charger": {
    en: {
      title: "10W Fast Wireless Car Charger",
      description:
        "Fast wireless charging for your phone while you drive. Secure mount with easy one-hand access. Charges through most cases. Compatible with all Qi-enabled phones.\n\n• 10W fast charging\n• Secure car mount\n• One-hand access\n• Qi-enabled compatible",
    },
    fa: {
      title: "شارژر بی‌سیم خودرو ۱۰ وات",
      description:
        "شارژ بی‌سیم سریع گوشی هنگام رانندگی. پایه محکم با دسترسی آسان با یک دست. حتی با بیشتر قاب‌ها شارژ می‌کند. سازگار با همه گوشی‌های Qi.\n\n• شارژ سریع ۱۰ وات\n• پایه محکم خودرو\n• دسترسی با یک دست\n• سازگار با Qi",
    },
    ar: {
      title: "شاحن سيارة لاسلكي سريع 10 واط",
      description:
        "شحن لاسلكي سريع لهاتفك أثناء القيادة. حامل آمن مع وصول سهل بيد واحدة. يشحن مع معظم الحالات. متوافق مع هواتف Qi.\n\n• شحن سريع 10 واط\n• حامل سيارة آمن\n• وصول بيد واحدة\n• متوافق مع Qi",
    },
    ckb: {
      title: "شوکەری بێسیمی خێرای ئۆتۆمبێل ١٠W",
      description:
        "شوکری بێسیمی خێرا بۆ مۆبایلت لە کاتی شۆفێری. ڕاگرێکی بەهێز لەگەڵ دەستگەیشتن بە دەستێک. لەگەڵ زۆربەی کلیپەکان کاردەکات. لەگەڵ هەموو مۆبایلە Qi دەگونجێت.\n\n• شوکری خێرای ١٠W\n• ڕاگرێکی بەهێز بۆ ئۆتۆمبێل\n• دەستگەیشتن بە دەستێک\n• دەگونجێت لەگەڵ Qi",
    },
    es: {
      title: "Cargador inalámbrico rápido de coche 10W",
      description:
        "Carga inalámbrica rápida para tu móvil mientras conduces. Soporte seguro de fácil acceso con una mano. Carga incluso con la mayoría de fundas. Compatible con Qi.\n\n• Carga rápida 10W\n• Soporte de coche seguro\n• Acceso con una mano\n• Compatible con Qi",
    },
    fr: {
      title: "Chargeur de voiture sans fil rapide 10W",
      description:
        "Charge sans fil rapide pour votre téléphone en conduisant. Support sûr avec accès facile à une main. Recharge avec la plupart des coques. Compatible Qi.\n\n• Charge rapide 10W\n• Support voiture sûr\n• Accès à une main\n• Compatible Qi",
    },
    de: {
      title: "10W Schnell-Ladegerät kabellos fürs Auto",
      description:
        "Schnelles kabelloses Laden für dein Handy beim Fahren. Sicherer Halter mit einfachem Zugriff mit einer Hand. Lädt durch die meisten Hüllen. Qi-kompatibel.\n\n• 10W Schnellladung\n• Sicherer Auto-Halter\n• Einhand-Zugriff\n• Qi-kompatibel",
    },
    ru: {
      title: "Быстрое беспроводное автомобильное зарядное устройство 10 Вт",
      description:
        "Быстрая беспроводная зарядка телефона во время вождения. Надежное крепление с доступом одной рукой. Заряжает через большинство чехлов. Qi-совместимо.\n\n• Быстрая зарядка 10 Вт\n• Надежное крепление\n• Доступ одной рукой\n• Qi-совместимо",
    },
    tr: {
      title: "10W Hızlı Kablosuz Araba Şarj Cihazı",
      description:
        "Sürüş sırasında telefonunuz için hızlı kablosuz şarj. Tek elle kolay erişimli güvenli tutucu. Çoğu kılıfla şarj eder. Qi uyumlu.\n\n• 10W hızlı şarj\n• Güvenli araç tutucusu\n• Tek elle erişim\n• Qi uyumlu",
    },
    zh: {
      title: "10W快充车载无线充电器",
      description:
        "驾车时为手机快速无线充电。稳固支架，单手轻松取放。大多数手机壳均可透过充电。兼容所有Qi手机。\n\n• 10W快充\n• 稳固车载支架\n• 单手取放\n• Qi兼容",
    },
  },
  "yoga-fitness-track-pants-women": {
    en: {
      title: "Women's Yoga Fitness Track Pants",
      description:
        "Comfortable track pants for yoga, pilates and fitness. Soft stretchy fabric with a flattering high waist. Move freely through every pose.\n\n• High waist\n• Stretchy soft fabric\n• Comfortable fit\n• Great for yoga and fitness",
    },
    fa: {
      title: "شلوار ورزشی یوگا زنانه",
      description:
        "شلوار ورزشی راحت برای یوگا، پیلاتس و تناسب اندام. پارچه نرم و کشسان با کمر بالا و زیبا. در هر حرکت آزادانه حرکت می‌کند.\n\n• کمر بالا\n• پارچه نرم و کشسان\n• فیت راحت\n• عالی برای یوگا و فیتنس",
    },
    ar: {
      title: "بنطال يوغا رياضي نسائي",
      description:
        "بنطال رياضي مريح لليوغا والبيلاتس واللياقة. قماش ناعم مطاطي مع خصر مرتفع جذاب. تحرك بحرية خلال كل وضعية.\n\n• خصر مرتفع\n• قماش مطاطي ناعم\n• مقاس مريح\n• رائع لليوغا واللياقة",
    },
    ckb: {
      title: "شەلوارێکی یۆگای وەرزشی ژنانە",
      description:
        "شەلوارێکی وەرزشی ئاسوودە بۆ یۆگا، پیلاتس و فیتنەس. پێستەی نەرم و قاچاوی لەگەڵ کەمەری بەرز و جوان. لە هەموو جوڵەدا بە ئازادی دەجوڵێت.\n\n• کەمەری بەرز\n• پێستەی نەرم و قاچاوی\n• فیتێکی ئاسوودە\n• بەرزترین بۆ یۆگا و فیتنەس",
    },
    es: {
      title: "Pantalones deportivos de yoga para mujer",
      description:
        "Pantalones cómodos para yoga, pilates y fitness. Tejido suave y elástico con cintura alta favorecedora. Muévete libremente en cada postura.\n\n• Cintura alta\n• Tejido suave y elástico\n• Ajuste cómodo\n• Ideales para yoga y fitness",
    },
    fr: {
      title: "Pantalon de sport yoga femme",
      description:
        "Pantalon confortable pour le yoga, le pilates et la forme. Tissu doux et extensible avec taille haute flatteuse. Bougez librement dans chaque posture.\n\n• Taille haute\n• Tissu extensible et doux\n• Coupe confortable\n• Idéal yoga et fitness",
    },
    de: {
      title: "Frauen Yoga-Fitness-Hose",
      description:
        "Bequeme Hose für Yoga, Pilates und Fitness. Weicher Stretchstoff mit schmeichelndem hohen Bund. Bewege dich frei in jeder Pose.\n\n• Hoher Bund\n• Weicher Stretchstoff\n• Bequeme Passform\n• Ideal für Yoga und Fitness",
    },
    ru: {
      title: "Женские спортивные штаны для йоги",
      description:
        "Удобные спортивные штаны для йоги, пилатеса и фитнеса. Мягкая эластичная ткань с высокой талией. Свободно двигайтесь в любой позе.\n\n• Высокая талия\n• Мягкая эластичная ткань\n• Удобный крой\n• Для йоги и фитнеса",
    },
    tr: {
      title: "Kadın Yoga Fitness Pantolonu",
      description:
        "Yoga, pilates ve fitness için rahat pantolon. Hoş yüksek belli, yumuşak esnek kumaş. Her poza özgürce hareket edin.\n\n• Yüksek bel\n• Esnek yumuşak kumaş\n• Rahat uyum\n• Yoga ve fitness için harika",
    },
    zh: {
      title: "女款瑜伽健身运动裤",
      description:
        "适合瑜伽、普拉提和健身的舒适运动裤。柔软弹性面料，高腰显瘦。每个姿势都能自由伸展。\n\n• 高腰设计\n• 柔软弹性面料\n• 舒适贴合\n• 适合瑜伽和健身",
    },
  },
  "outdoor-cycling-motorcycle-touch-screen-training-tactical-gloves": {
    en: {
      title: "Tactical Touchscreen Cycling & Motorcycle Gloves",
      description:
        "Durable tactical gloves for cycling, motorcycle riding and training. Touchscreen fingertips, non-slip palms and reinforced protection for outdoor use.\n\n• Touchscreen fingertips\n• Non-slip palms\n• Reinforced protection\n• Great for cycling and riding",
    },
    fa: {
      title: "دستکش تاکتیکال لمسی دوچرخه‌سواری و موتور",
      description:
        "دستکش تاکتیکال بادوام برای دوچرخه‌سواری، موتورسواری و تمرین. نوک انگشتان لمسی، کف دست ضدلغزش و محافظت تقویت‌شده برای استفاده در فضای باز.\n\n• نوک انگشتان لمسی\n• کف دست ضدلغزش\n• محافظت تقویت‌شده\n• عالی برای دوچرخه و موتور",
    },
    ar: {
      title: "قفازات تكتيكية تعمل باللمس للدراجات والموتوسيكلات",
      description:
        "قفازات تكتيكية متينة لركوب الدراجة والموتوسيكل والتدريب. أطراف أصابع تعمل باللمس وراحة غير قابلة للانزلاق وحماية معززة.\n\n• أطراف أصابع باللمس\n• راحة غير قابلة للانزلاق\n• حماية معززة\n• رائعة للدراجات والموتوسيكلات",
    },
    ckb: {
      title: "دەستکێشی تاتیکی دەستلێدان بۆ پاسکیل و موتۆر",
      description:
        "دەستکێشی تاتیکی بەهێز بۆ سواری پاسکیل، موتۆر و ڕاهێنان. سەری پەنجەکانی دەستلێدان، دەستی ناخلیسک و پارێزگاری بەهێزکراو بۆ بەکارهێنانی دەرەوە.\n\n• سەری پەنجەی دەستلێدان\n• دەستی ناخلیسک\n• پارێزگاری بەهێزکراو\n• بەرزترین بۆ پاسکیل و موتۆر",
    },
    es: {
      title: "Guantes tácticos táctiles para ciclismo y moto",
      description:
        "Guantes tácticos resistentes para ciclismo, moto y entrenamiento. Puntas táctiles, palmas antideslizantes y protección reforzada para exteriores.\n\n• Puntas táctiles\n• Palmas antideslizantes\n• Protección reforzada\n• Ideales para ciclismo y moto",
    },
    fr: {
      title: "Gants tactiles tactiques pour vélo et moto",
      description:
        "Gants tactiques résistants pour le vélo, la moto et l'entraînement. Doigts tactiles, paumes antidérapantes et protection renforcée pour l'extérieur.\n\n• Doigts tactiles\n• Paumes antidérapantes\n• Protection renforcée\n• Idéals vélo et moto",
    },
    de: {
      title: "Taktische Touchscreen-Handschuhe für Rad und Motorrad",
      description:
        "Robuste taktische Handschuhe für Radfahren, Motorradfahren und Training. Touchscreen-Fingerspitzen, rutschfeste Handflächen und verstärkter Schutz.\n\n• Touchscreen-Fingerspitzen\n• Rutschfeste Handflächen\n• Verstärkter Schutz\n• Ideal für Rad und Motorrad",
    },
    ru: {
      title: "Тактические перчатки с сенсорным экраном для вело и мото",
      description:
        "Прочные тактические перчатки для велосипеда, мотоцикла и тренировок. Сенсорные кончики пальцев, нескользящие ладони, усиленная защита.\n\n• Сенсорные кончики пальцев\n• Нескользящие ладони\n• Усиленная защита\n• Для велосипеда и мотоцикла",
    },
    tr: {
      title: "Dokunmatik Ekranlı Taktik Bisiklet ve Moto Eldiveni",
      description:
        "Bisiklet, motosiklet ve antrenman için dayanıklı taktik eldivenler. Dokunmatik parmak uçları, kaymaz avuç içleri ve güçlendirilmiş koruma.\n\n• Dokunmatik parmak uçları\n• Kaymaz avuç içleri\n• Güçlendirilmiş koruma\n• Bisiklet ve motosiklet için harika",
    },
    zh: {
      title: "户外骑行摩托车触屏战术手套",
      description:
        "耐用战术手套，适用于骑行、摩托车和训练。触屏指尖，防滑掌部，加固保护，适合户外使用。\n\n• 触屏指尖\n• 防滑掌部\n• 加固保护\n• 适合骑行和驾驶",
    },
  },
  "new-printed-yoga-pants-women": {
    en: {
      title: "Printed Yoga Pants for Women",
      description:
        "Stylish printed yoga pants with a comfortable high waist. Soft stretchy fabric that shapes and moves with you. Perfect for yoga, gym and lounging.\n\n• Unique printed design\n• High waist\n• Soft stretchy fabric\n• Great for yoga and gym",
    },
    fa: {
      title: "شلوار یوگای طرح‌دار زنانه",
      description:
        "شلوار یوگای طرح‌دار شیک با کمر بالا و راحت. پارچه نرم و کشسان که با شما فرم می‌گیرد و حرکت می‌کند. عالی برای یوگا، باشگاه و استراحت.\n\n• طراحی طرح‌دار خاص\n• کمر بالا\n• پارچه نرم و کشسان\n• عالی برای یوگا و باشگاه",
    },
    ar: {
      title: "بنطال يوغا مطبوع للنساء",
      description:
        "بنطال يوغا مطبوع وأنيق مع خصر مرتفع مريح. قماش ناعم مطاطي يتشكل ويتحرك معك. مثالي لليوغا والجيم والاسترخاء.\n\n• تصميم مطبوع فريد\n• خصر مرتفع\n• قماش ناعم مطاطي\n• رائع لليوغا والجيم",
    },
    ckb: {
      title: "شەلوارێکی یۆگای چاپکراو بۆ ژنان",
      description:
        "شەلوارێکی یۆگای چاپکراوی شیک لەگەڵ کەمەری بەرز و ئاسوودە. پێستەی نەرم و قاچاوی کە لەگەڵ تۆدا شێوە و جوڵە دەکات. بەرزترین بۆ یۆگا، جیم و پشوودان.\n\n• دیزاینی چاپکراوی تایبەت\n• کەمەری بەرز\n• پێستەی نەرم و قاچاوی\n• بەرزترین بۆ یۆگا و جیم",
    },
    es: {
      title: "Pantalones de yoga estampados para mujer",
      description:
        "Pantalones de yoga estampados y elegantes con cintura alta cómoda. Tejido suave y elástico que se adapta y se mueve contigo. Perfectos para yoga, gimnasio y descanso.\n\n• Diseño estampado único\n• Cintura alta\n• Tejido suave y elástico\n• Ideales para yoga y gimnasio",
    },
    fr: {
      title: "Pantalon de yoga imprimé femme",
      description:
        "Pantalon de yoga imprimé élégant avec taille haute confortable. Tissu doux et extensible qui épouse et suit vos mouvements. Parfait yoga, salle et détente.\n\n• Design imprimé unique\n• Taille haute\n• Tissu doux et extensible\n• Idéal yoga et salle",
    },
    de: {
      title: "Bedruckte Yogahose für Frauen",
      description:
        "Stylische bedruckte Yogahose mit bequemem hohen Bund. Weicher Stretchstoff, der sich dir anpasst und mit dir bewegt. Perfekt für Yoga, Gym und Entspannung.\n\n• Einzigartiges Print-Design\n• Hoher Bund\n• Weicher Stretchstoff\n• Ideal für Yoga und Gym",
    },
    ru: {
      title: "Женские штаны для йоги с принтом",
      description:
        "Стильные штаны для йоги с принтом и удобной высокой талией. Мягкая эластичная ткань, повторяющая движения. Идеальны для йоги, зала и отдыха.\n\n• Уникальный принт\n• Высокая талия\n• Мягкая эластичная ткань\n• Для йоги и зала",
    },
    tr: {
      title: "Baskılı Kadın Yoga Pantolonu",
      description:
        "Konforlu yüksek belli, şık baskılı yoga pantolon. Sizinle hareket eden yumuşak esnek kumaş. Yoga, spor ve dinlenme için mükemmel.\n\n• Benzersiz baskılı tasarım\n• Yüksek bel\n• Yumuşak esnek kumaş\n• Yoga ve spor için harika",
    },
    zh: {
      title: "印花女款瑜伽裤",
      description:
        "时尚印花瑜伽裤，高腰舒适。柔软弹性面料，贴合身形随您而动。非常适合瑜伽、健身房和休闲。\n\n• 独特印花设计\n• 高腰设计\n• 柔软弹性面料\n• 适合瑜伽和健身",
    },
  },
  "yoga-sports-running-cycling-yoga-wear-jacket": {
    en: {
      title: "Yoga Sports Running Jacket",
      description:
        "Lightweight sports jacket for yoga, running and cycling. Breathable stretchy fabric keeps you comfortable during any activity. Stylish and easy to move in.\n\n• Lightweight and breathable\n• Stretchy fabric\n• Great for yoga, running, cycling\n• Stylish sports look",
    },
    fa: {
      title: "ژاکت ورزشی یوگا و دویدن",
      description:
        "ژاکت ورزشی سبک برای یوگا، دویدن و دوچرخه‌سواری. پارچه تنفس‌پذیر و کشسان در هر فعالیتی راحتی شما را حفظ می‌کند. شیک و آسان برای حرکت.\n\n• سبک و تنفس‌پذیر\n• پارچه کشسان\n• عالی برای یوگا، دویدن و دوچرخه\n• ظاهر ورزشی شیک",
    },
    ar: {
      title: "سترة رياضية لليوغا والركض",
      description:
        "سترة رياضية خفيفة لليوغا والركض وركوب الدراجة. قماش قابل للتنفس ومطاط يحافظ على راحتك في أي نشاط. أنيقة وسهلة الحركة.\n\n• خفيفة وقابلة للتنفس\n• قماش مطاطي\n• رائعة لليوغا والركض والدراجة\n• مظهر رياضي أنيق",
    },
    ckb: {
      title: "جاکێتی وەرزشی یۆگا و ڕاکردن",
      description:
        "جاکێتی وەرزشی سووک بۆ یۆگا، ڕاکردن و سواری پاسکیل. پێستەی هەناسەدان و قاچاوی لە هەر چالاکییەکدا ئاسوودەت دەپارێزێت. شیک و بە ئاسانی دەجوڵێت.\n\n• سووک و هەناسەدان\n• پێستەی قاچاوی\n• بەرزترین بۆ یۆگا، ڕاکردن و پاسکیل\n• دیمەنی وەرزشی شیک",
    },
    es: {
      title: "Chaqueta deportiva de yoga y running",
      description:
        "Chaqueta deportiva ligera para yoga, running y ciclismo. Tejido elástico transpirable que te mantiene cómodo en cualquier actividad. Elegante y fácil de mover.\n\n• Ligera y transpirable\n• Tejido elástico\n• Ideal para yoga, running y ciclismo\n• Look deportivo elegante",
    },
    fr: {
      title: "Veste de sport yoga et running",
      description:
        "Veste de sport légère pour le yoga, la course et le vélo. Tissu extensible respirant qui vous garde à l'aise dans toute activité. Élégante et facile à bouger.\n\n• Légère et respirante\n• Tissu extensible\n• Idéale yoga, course, vélo\n• Look sportif élégant",
    },
    de: {
      title: "Yoga-Sport-Running-Jacke",
      description:
        "Leichte Sportjacke für Yoga, Laufen und Radfahren. Atmungsaktiver Stretchstoff hält dich bei jeder Aktivität komfortabel. Stylisch und flexibel.\n\n• Leicht und atmungsaktiv\n• Stretchstoff\n• Ideal für Yoga, Laufen, Radfahren\n• Stylischer Sport-Look",
    },
    ru: {
      title: "Спортивная куртка для йоги и бега",
      description:
        "Легкая спортивная куртка для йоги, бега и велосипеда. Дышащая эластичная ткань сохраняет комфорт в любой активности. Стильная и удобная.\n\n• Легкая и дышащая\n• Эластичная ткань\n• Для йоги, бега и велосипеда\n• Стильный спортивный вид",
    },
    tr: {
      title: "Yoga Spor Koşu Ceketi",
      description:
        "Yoga, koşu ve bisiklet için hafif spor ceket. Nefes alan esnek kumaş her aktivitede konfor sağlar. Şık ve hareket etmesi kolay.\n\n• Hafif ve nefes alır\n• Esnek kumaş\n• Yoga, koşu ve bisiklet için harika\n• Şık spor görünüm",
    },
    zh: {
      title: "瑜伽运动跑步外套",
      description:
        "轻盈运动外套，适合瑜伽、跑步和骑行。透气弹性面料让您在任何活动中都保持舒适。时尚且活动自如。\n\n• 轻盈透气\n• 弹性面料\n• 适合瑜伽、跑步、骑行\n• 时尚运动外观",
    },
  },
};
