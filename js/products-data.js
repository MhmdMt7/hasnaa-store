/**
 * HAS NAA | WOMEN'S FASHION
 * Master Product Catalog Data (Bilingual EN / AR)
 * Philosophy: Quiet Luxury &middot; Handcrafted Elegance
 */

const HASNAA_PRODUCTS = [
  // ================= CLOTHING =================
  {
    id: "the-alabaster-silk-gown",
    category: "clothing",
    subCategory: "evening-gowns",
    sku: "HN-DR-2601",
    price: 4850,
    isNew: true,
    isFeatured: true,
    name: {
      en: "The Alabaster Silk Crepe Gown",
      ar: "فستان المرمر من كريب الحرير النقي"
    },
    tagline: {
      en: "Fluid 100% Mulberry Silk with architectural drape and hand-rolled hems.",
      ar: "حرير التوت الطبيعي النقي ١٠٠٪ بقصة انسيابية وتشطيب يدوي فاخر."
    },
    description: {
      en: "Crafted from double-weight mulberry silk crepe, the Alabaster Gown embodies effortless poise. It features a sculpted high boat neckline that cascades into a fluid, bias-cut silhouette. Finished with blind-stitched hems and concealed mother-of-pearl buttons.",
      ar: "صُنع فستان المرمر من كريب حرير التوت المزدوج ليجسد الرقي العفوي. يتميز بياقة مقوسة راقية تنساب بنعومة بقصة مائلة تبرز جمال القوام بحشمة وأناقة، مع تشطيب يدوي مخفي وأزرار من عرق اللؤلؤ الطبيعي."
    },
    fabric: {
      en: "100% Pure Mulberry Silk Crepe (40 momme). Breathable, hypoallergenic, with natural luminous lustre.",
      ar: "١٠٠٪ كريب حرير التوت النقي (٤٠ مومي). ناعم الملمس، مسامي، بلمعان حريري طبيعي هادئ."
    },
    tailoring: {
      en: "French seams throughout, hand-finished rolled hem, relaxed A-line silhouette.",
      ar: "درزات فرنسية مزدوجة، حواشٍ ملفوفة يدوياً، وقصة مريحة بانسدال ناعم."
    },
    colors: [
      { code: "ivory", hex: "#F5F0E8", name: { en: "Primary Ivory", ar: "عاجي طبيعي" } },
      { code: "mocha", hex: "#6B5140", name: { en: "Mocha Brown", ar: "موكا دافئ" } },
      { code: "champagne", hex: "#DCC8AC", name: { en: "Champagne Beige", ar: "بيج شامبانيا" } }
    ],
    sizes: ["36 (FR)", "38 (FR)", "40 (FR)", "42 (FR)", "Custom Size"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-monogram-saddle-bag", "the-dunes-silk-foulard", "the-sculptural-brass-belt"]
  },
  {
    id: "the-zamalek-tailored-coat",
    category: "clothing",
    subCategory: "ready-to-wear",
    sku: "HN-JK-2602",
    price: 3650,
    isNew: true,
    isFeatured: true,
    name: {
      en: "The Zamalek Tailored Linen Coat",
      ar: "معطف الزمالك الكتاني المفصل"
    },
    tagline: {
      en: "Architectural lightweight coat in unbleached Egyptian linen.",
      ar: "معطف صيفي خفيف بقصة هندسية من الكتان المصري الفاخر."
    },
    description: {
      en: "Constructed from heavyweight natural Egyptian linen, this unlined tailored coat draws inspiration from Mediterranean classical architecture. Clean notched lapels, horn buttons, and patch pockets create a timeless transitional layer.",
      ar: "صُنع هذا المعطف من الكتان المصري الطبيعي غير المصبوغ، مستوحى من العمارة الكلاسيكية للبحر المتوسط. يجمع بين طيات صدر محكمة وأزرار قرنية طبيعية ليكون رفيقك المثالي في الإطلالات اليومية والمسائية."
    },
    fabric: {
      en: "100% Egyptian Flax Linen. Pre-washed for soft, tactile comfort that gains character with age.",
      ar: "١٠٠٪ كتان مصري طبيعي، مغسول مسبقاً لراحة ناعمة تزداد فخامة مع الوقت."
    },
    tailoring: {
      en: "Unlined tailored shoulders, bound interior seams, relaxed straight cut.",
      ar: "أكتاف مهندمة بدون بطانة ثقيلة، درزات داخلية مقواة بحواف من الحرير."
    },
    colors: [
      { code: "taupe", hex: "#A68B70", name: { en: "Warm Taupe", ar: "توب دافئ" } },
      { code: "ivory", hex: "#F5F0E8", name: { en: "Primary Ivory", ar: "عاجي طبيعي" } }
    ],
    sizes: ["36 (FR)", "38 (FR)", "40 (FR)", "42 (FR)"],
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-monogram-saddle-bag", "the-sculptural-brass-belt"]
  },
  {
    id: "the-dunes-pleated-coord",
    category: "clothing",
    subCategory: "ready-to-wear",
    sku: "HN-CO-2603",
    price: 3200,
    isNew: false,
    isFeatured: true,
    name: {
      en: "The Dunes Pleated Silk Co-ord",
      ar: "طقم الكثبان الحريري المكسر"
    },
    tagline: {
      en: "Two-piece relaxed ensemble in micro-pleated sand crepe.",
      ar: "طقم راقٍ من قطعتين بكريشة دقيقة تنساب بنعومة رمال الصحراء."
    },
    description: {
      en: "A refined two-piece coordinates set consisting of an oversized tunic blouse with dropped shoulders and matching wide-leg trousers. Micro-pleated texture catches the Mediterranean light with subtle dimension.",
      ar: "طقم متناسق يتكون من بلوزة تونيك فضفاضة بأكتاف منسدلة وبنطال واسع الساق مريح. يمنحك التكسير الدقيق إشراقة ساحرة مع كل حركة دون الحاجة إلى كي مستمر."
    },
    fabric: {
      en: "Silk-Cotton Crepe Blend (70% Mulberry Silk, 30% Giza Cotton).",
      ar: "مزيج حرير وقطن مصري (٧٠٪ حرير، ٣٠٪ قطن جيزة)."
    },
    tailoring: {
      en: "Elasticated high-rise waist, side in-seam pockets, delicate split hem.",
      ar: "خصر مطاطي مريح، جيوب جانبية مخفية، وفتحات جانبية أنيقة."
    },
    colors: [
      { code: "champagne", hex: "#DCC8AC", name: { en: "Champagne Beige", ar: "بيج شامبانيا" } },
      { code: "mocha", hex: "#6B5140", name: { en: "Mocha Brown", ar: "موكا بني" } }
    ],
    sizes: ["36 (FR)", "38 (FR)", "40 (FR)", "42 (FR)"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-dunes-silk-foulard", "the-monogram-saddle-bag"]
  },
  {
    id: "the-nocturne-velvet-abaya",
    category: "clothing",
    subCategory: "modest-luxury",
    sku: "HN-AB-2604",
    price: 5200,
    isNew: true,
    isFeatured: false,
    name: {
      en: "The Nocturne Silk-Velvet Abaya",
      ar: "عباءة نكتورن من مخمل الحرير"
    },
    tagline: {
      en: "Deep charcoal silk-velvet with delicate champagne piping.",
      ar: "مخمل حريري فاحم مزين بشريط شامبانيا دقيق لإطلالة مسائية مهيبة."
    },
    description: {
      en: "Designed for evening galas, this stately open-front abaya is cut from plush silk-blend velvet in deep Charcoal. Edged with a hand-stitched Champagne satin piping that traces the lapel and cuffs.",
      ar: "صُممت للمناسبات المسائية الكبرى، تتميز بقصة مفتوحة من مخمل الحرير الفاخر بلون الفحم الغني، مؤطرة بشريط ساتان شامبانيا مشغول يدوياً بطول الياقة والأكمام."
    },
    fabric: {
      en: "65% Silk, 35% Rayon Velvet with 100% Silk Satin Facing.",
      ar: "٦٥٪ حرير، ٣٥٪ رايون مخملي مع بطانة ياقة من ساتان الحرير النقي."
    },
    tailoring: {
      en: "Concealed snap front closure, wide kimono sleeves, full floor-grazing length.",
      ar: "إغلاق أمامي مخفي، أكمام كيمونو واسعة، وطول كامل يلامس الأرض برقي."
    },
    colors: [
      { code: "charcoal", hex: "#292522", name: { en: "Obsidian Charcoal", ar: "فحم داكن" } }
    ],
    sizes: ["38 (FR)", "40 (FR)", "42 (FR)", "Custom Size"],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-alexandria-evening-clutch", "the-sculptural-brass-belt"]
  },
  {
    id: "the-alexandria-resort-shirt-dress",
    category: "clothing",
    subCategory: "resort-linen",
    sku: "HN-DR-2605",
    price: 2950,
    isNew: false,
    isFeatured: false,
    name: {
      en: "The Alexandria Resort Shirt Dress",
      ar: "فستان قميص الإسكندرية ريزورت"
    },
    tagline: {
      en: "Breezy Egyptian cotton shirt dress with removable self-tie sash.",
      ar: "فستان قميص صيفي من القطن المصري بنعومة نسيم البحر الأبيض."
    },
    description: {
      en: "Inspired by Alexandria's belle-époque summers, this crisp Giza cotton shirt dress features an elongated tunic cut, deep side vents, and a sash belt that cinches the waist with effortless feminine definition.",
      ar: "مستوحى من صيف الإسكندرية الكلاسيكي، يتميز هذا الفستان المصنوع من قطن جيزة بنعومة ملمسه وقصته الانسيابية مع فتحات جانبية وحزام قابل للتعديل لتحديد الخصر بنعومة."
    },
    fabric: {
      en: "100% Certified Giza 45 Long-Staple Egyptian Cotton Poplin.",
      ar: "١٠٠٪ قطن مصري فائق الطول جيزة ٤٥ ناصع ومعتمد."
    },
    tailoring: {
      en: "Mother-of-pearl front buttons, curved shirt-tail hem, mandarin collar.",
      ar: "أزرار صدفية أصلية، ياقة صينية منخفضة، وأطراف مقوسة كلاسيكية."
    },
    colors: [
      { code: "ivory", hex: "#F5F0E8", name: { en: "Primary Ivory", ar: "عاجي طبيعي" } },
      { code: "taupe", hex: "#A68B70", name: { en: "Warm Sand", ar: "رملي دافئ" } }
    ],
    sizes: ["36 (FR)", "38 (FR)", "40 (FR)", "42 (FR)"],
    images: [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-dunes-silk-foulard", "the-monogram-saddle-bag"]
  },

  // ================= ACCESSORIES =================
  {
    id: "the-monogram-saddle-bag",
    category: "accessories",
    subCategory: "leather-bags",
    sku: "HN-BG-2606",
    price: 3450,
    isNew: true,
    isFeatured: true,
    name: {
      en: "The Monogram Saddle Leather Bag",
      ar: "حقيبة السرج الجلدية بنقش المونوغرام"
    },
    tagline: {
      en: "Sculpted calfskin saddle bag with blind-debossed HN seal.",
      ar: "حقيبة سرج منحوتة من جلد العجل الطبيعي مع ختم مونوغرام غائر."
    },
    description: {
      en: "Hand-crafted from semi-vegetable tanned full-grain calfskin, the Monogram Saddle Bag balances equestrian curve with modernist simplicity. Features an understated blind-debossed HN medallion on the magnetic flap and a detachable shoulder strap.",
      ar: "صُنعت يدوياً من أجود جلود العجل المدبوغة نباتياً. تجمع بين انحناءة السرج الكلاسيكية وبساطة التصميم الحديث، مع قفل مغناطيسي خفي يزينه ختم مونوغرام حسناء الغائر وحزام كتف قابل للتعديل."
    },
    fabric: {
      en: "100% Full-Grain Calfskin Leather with raw suede lining and brushed champagne brass hardware.",
      ar: "١٠٠٪ جلد عجل طبيعي نخب أول، مع بطانة من الشمواه وإكسسوارات نحاسية بلون الشامبانيا المات."
    },
    tailoring: {
      en: "Hand-lacquered edge painting, reinforced saddle stitching, interior slip pocket.",
      ar: "حواف مصقولة يدوياً، خياطة سرج مقواة، وجيب داخلي للبطاقات."
    },
    colors: [
      { code: "mocha", hex: "#6B5140", name: { en: "Mocha Brown", ar: "موكا كلاسيكي" } },
      { code: "charcoal", hex: "#292522", name: { en: "Obsidian Charcoal", ar: "فحم أسود" } },
      { code: "champagne", hex: "#DCC8AC", name: { en: "Champagne Beige", ar: "بيج شامبانيا" } }
    ],
    sizes: ["One Size (24 x 18 x 7 cm)"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-alabaster-silk-gown", "the-dunes-silk-foulard"]
  },
  {
    id: "the-dunes-silk-foulard",
    category: "accessories",
    subCategory: "silk-foulards",
    sku: "HN-SC-2607",
    price: 1450,
    isNew: true,
    isFeatured: true,
    name: {
      en: "The Dunes Hand-Rolled Silk Foulard",
      ar: "وشاح الكثبان الحريري بحواف ملفوفة يدوياً"
    },
    tagline: {
      en: "90x90cm pure silk twill with geometric calligraphic accents.",
      ar: "مربع حرير طبيعي ٩٠×٩٠ سم بزخارف هندسية مستوحاة من خط الرقعة."
    },
    description: {
      en: "Woven from luminous 18-momme pure silk twill, the Dunes Foulard features an intricate geometric motif derived from classical Arabic letterforms in warm Ivory, Champagne, and Mocha. Finished by master artisans with hand-rolled roulotté hems.",
      ar: "نُسج من حرير التويل الطبيعي ١٨ مومي. يزدان بنقوش هندسية تجريدية مستوحاة من روعة الحروف العربية بألوان العاجي والشامبانيا والموكا، مع حواف مبرومة ومحاكة يدوياً بدقة فائقة."
    },
    fabric: {
      en: "100% Pure Mulberry Silk Twill (18 momme). Dry clean only.",
      ar: "١٠٠٪ تويل حرير التوت الطبيعي (١٨ مومي). تنظيف جاف فقط."
    },
    tailoring: {
      en: "Hand-rolled and hand-stitched roulotté edges (takes 45 minutes per scarf).",
      ar: "أطراف رولوتيه ملفوفة ومخيطة يدوياً بالكامل."
    },
    colors: [
      { code: "champagne", hex: "#DCC8AC", name: { en: "Champagne Motif", ar: "نقش الشامبانيا" } },
      { code: "mocha", hex: "#6B5140", name: { en: "Mocha Palette", ar: "لوحة الموكا" } }
    ],
    sizes: ["90 x 90 cm"],
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-alabaster-silk-gown", "the-monogram-saddle-bag"]
  },
  {
    id: "the-sculptural-brass-belt",
    category: "accessories",
    subCategory: "belts",
    sku: "HN-BL-2608",
    price: 1850,
    isNew: false,
    isFeatured: false,
    name: {
      en: "The Sculptural Brass Waist Belt",
      ar: "حزام الخصر النحاسي المنحوت"
    },
    tagline: {
      en: "Full-grain calfskin with artisanal organic brass buckle.",
      ar: "جلد عجل طبيعي مع إبزيم نحاسي عضوي مصبوب يدوياً."
    },
    description: {
      en: "A statement accessory designed to cinch draped dresses and tailored coats. Features an organic cast-brass buckle finished in a soft satin champagne sheen, mounted on smooth Italian calfskin leather.",
      ar: "قطعة فنية تحدد الخصر برقي فوق الفساتين المنسدلة والمعاطف المهندمة. تتميز بإبزيم نحاسي مصبوب يدوياً بلمعة شامبانيا هادئة مثبت على جلد عجل إيطالي ناعم."
    },
    fabric: {
      en: "Full-Grain Italian Vegetable-Tanned Leather and Solid Cast Brass.",
      ar: "جلد عجل طبيعي مدبوغ نباتياً ونحاس مصبوب صلب."
    },
    tailoring: {
      en: "Double keeper loops, hand-burnished edges, 5-hole adjustment range.",
      ar: "حلقتان لتثبيت الحزام، حواف مصقولة يدوياً بشمع العسل الطبيعي."
    },
    colors: [
      { code: "mocha", hex: "#6B5140", name: { en: "Mocha Brown", ar: "موكا كلاسيكي" } },
      { code: "charcoal", hex: "#292522", name: { en: "Obsidian Charcoal", ar: "فحم أسود" } }
    ],
    sizes: ["75 cm", "85 cm", "95 cm"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-zamalek-tailored-coat", "the-alabaster-silk-gown"]
  },
  {
    id: "the-alexandria-evening-clutch",
    category: "accessories",
    subCategory: "leather-bags",
    sku: "HN-BG-2609",
    price: 2800,
    isNew: true,
    isFeatured: true,
    name: {
      en: "The Alexandria Pleated Evening Clutch",
      ar: "كلتش الإسكندرية المسائي المكسر"
    },
    tagline: {
      en: "Soft pleated nappa leather with magnetic frame closure.",
      ar: "جلد نابا ناعم مكسر مع إطار إغلاق مغناطيسي خفي."
    },
    description: {
      en: "Sculpted like an antique cloud, this evening pouch clutch is crafted from buttery-soft pleated lambskin. Opens to reveal a champagne silk lining and an interior card slot with embossed HN authenticity seal.",
      ar: "منحوتة بنعومة تشبه السحاب، صُنعت هذه الحقيبة المسائية من جلد الحمل فائق النعومة. تفتح على بطانة حريرية بلون الشامبانيا مع جيب للبطاقات يحمل ختم حسناء الأصلي."
    },
    fabric: {
      en: "100% Lambskin Nappa Leather with 100% Silk Habotai Lining.",
      ar: "١٠٠٪ جلد حمل نابا فائق النعومة مع بطانة حرير طبيعي."
    },
    tailoring: {
      en: "Concealed magnetic brass frame, delicate chain strap included.",
      ar: "إطار مغناطيسي خفي مع سلسلة كتف رفيعة قابلة للفصل."
    },
    colors: [
      { code: "ivory", hex: "#F5F0E8", name: { en: "Primary Ivory", ar: "عاجي طبيعي" } },
      { code: "champagne", hex: "#DCC8AC", name: { en: "Champagne Beige", ar: "بيج شامبانيا" } }
    ],
    sizes: ["28 x 16 x 10 cm"],
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85"
    ],
    related: ["the-nocturne-velvet-abaya", "the-alabaster-silk-gown"]
  }
];

// Export for module systems or attach to global window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HASNAA_PRODUCTS };
}
