const toSquareMeters = {
  barns:               1e-28,
  squareNanometers:    1e-18,
  squareMicrometers:   1e-12,
  circularMils:        5.067074790974978e-10,
  squareThou:          6.4516e-10,
  squareMillimeters:   1e-6,
  squareCentimeters:   1e-4,
  squareInches:        0.00064516,
  squareDecimeters:    0.01,
  squareFeet:          0.09290304,
  squareYards:         0.83612736,
  squareMeters:        1,
  tsubo:               3.305785123966942,
  pyeong:              3.305785123966942,
  squareRods:          25.29285264,
  marlas:              25.29285264,
  ares:                100,
  squareChains:        404.68564224,
  mu:                  666.6666666666667,
  stremmata:           1000,
  dunam:               1000,
  roods:               1011.7141056,
  rai:                 1600,
  bighas:              2529.285264,
  acres:               4046.8564224,
  feddan:              4200,
  hectares:            10000,
  squareFurlongs:      40468.564224,
  homesteads:          647497.027584,
  squareKilometers:    1e6,
  squareMiles:         2589988.110336,
  squareNauticalMiles: 3429904,
  townships:           93239571.972096,
  squareMegameters:    1e12
};

// Unit descriptions
const unitDescriptions = {
  barns: {
    name: "Barn",
    description: "A barn (b) is a unit of area used in nuclear and particle physics to measure effective cross-sections of atomic nuclei and particle interaction probabilities. Equal to 10⁻²⁸ m² (10⁻²⁴ cm²), it was humorously named during the Manhattan Project - physicists joked that uranium nuclei were 'as big as a barn' at the subatomic scale. Particle physics experiments at accelerators like CERN report cross-sections in millibarns (mb), microbarns (μb), nanobarns (nb), and femtobarns (fb).",
    symbol: "b"
  },
  squareNanometers: {
    name: "Square Nanometer",
    description: "A square nanometer (nm²) is an extraordinarily small unit of area - the area of a square with sides just one billionth of a meter. At this scale we measure individual molecules and atomic structures. The cross-section of a DNA double helix is roughly 20 nm², and modern transistor gates in cutting-edge microchips have areas measured in tens of nm². Square nanometers are essential in nanotechnology, semiconductor fabrication, surface chemistry, and scanning-tunnelling microscopy.",
    symbol: "nm²"
  },
  squareMicrometers: {
    name: "Square Micrometer",
    description: "A square micrometer (μm²), also called a square micron, equals one trillionth of a square meter - the area of a square with sides one millionth of a meter (10⁻¹² m²). This is the natural scale of biological cells: a human red blood cell has a surface area of about 135 μm², and a typical bacterium might occupy 2-10 μm². Square micrometers are the standard unit in cell biology, histology, microscopy, and semiconductor characterisation where individual features on wafers are measured.",
    symbol: "μm²"
  },
  circularMils: {
    name: "Circular Mil",
    description: "A circular mil (cmil) is a unit used in electrical engineering to specify the cross-sectional area of round wires and cables. Equal to the area of a circle with a diameter of exactly one thou (one thousandth of an inch) - approximately 5.067 × 10⁻¹⁰ m² - it simplifies wire calculations: the cross-sectional area in cmil equals the wire diameter in mils, squared. US electrical codes (NEC/NEMA) specify conductor sizes in circular mils, and large cables are rated in thousands of circular mils (kcmil or MCM). A 12 AWG wire, common in US household wiring, has a cross-section of 6,530 cmil.",
    symbol: "cmil"
  },
  squareThou: {
    name: "Square Thou",
    description: "A square thou (thou²), sometimes called a square mil, is the area of a square with sides of one thousandth of an inch (0.0254 mm), equal to approximately 6.452 × 10⁻¹⁰ m². This tiny imperial unit is indispensable in precision engineering, PCB (printed circuit board) design, and manufacturing, where conductor widths, dielectric coating thicknesses, and tight machining tolerances are specified in thou. Wire insulation, thin films, and precision-stamped metal components are commonly described using this unit.",
    symbol: "thou²"
  },
  squareMillimeters: {
    name: "Square Millimeter",
    description: "A square millimeter (mm²) is a metric unit of area equal to a square with sides of one millimeter. It is commonly used in precision engineering, electronics, and measuring very small surfaces such as microchips or printed circuit boards. To visualise: a typical pinhead has an area of about 2-3 mm². This unit is essential in microscopy, medical imaging, and manufacturing where tiny, precise measurements are critical.",
    symbol: "mm²"
  },
  squareCentimeters: {
    name: "Square Centimeter",
    description: "A square centimeter (cm²) is a metric unit of area equal to a square with sides of one centimeter (10 mm × 10 mm). It is widely used for measuring moderate-sized surfaces like postage stamps, credit cards, or smartphone screens. A standard credit card has an area of about 46 cm². This unit is common in everyday crafts, school science, and smaller construction projects where precision matters but square meters would be too large.",
    symbol: "cm²"
  },
  squareInches: {
    name: "Square Inch",
    description: "A square inch (in²) is an imperial unit of area equal to a square with sides of one inch (25.4 mm × 25.4 mm). It is commonly used in the United States for measuring small areas like fabric swatches, screen sizes, or printed materials. A standard business card is about 6 in², and a typical smartphone screen might be 15-20 in². This unit remains prevalent in American manufacturing, printing, and retail.",
    symbol: "in²"
  },
  squareDecimeters: {
    name: "Square Decimeter",
    description: "A square decimeter (dm²) is a metric area unit equal to 100 square centimeters (10 cm × 10 cm) or 0.01 square meters. It represents roughly the footprint of a large paperback book or a standard floor tile. While less common in everyday language than cm² or m², square decimeters appear in cooking (pan sizes), packaging design, and as a useful stepping stone in metric calculations - notably, exactly 1 liter of liquid forms a layer 1 dm² × 1 cm deep.",
    symbol: "dm²"
  },
  squareFeet: {
    name: "Square Foot",
    description: "A square foot (ft²) is an imperial unit of area equal to a square with sides of one foot (12 in × 12 in or 144 in²). It is the standard for measuring floor space in the United States and some other countries. A typical bedroom is 100-150 ft², and the average American house is roughly 2,000-2,500 ft². This unit dominates real estate listings, flooring sales, and construction in countries using imperial measurements.",
    symbol: "ft²"
  },
  squareYards: {
    name: "Square Yard",
    description: "A square yard (yd²) is an imperial unit of area equal to a square with sides of one yard (3 ft × 3 ft or 9 ft²). It is commonly used for measuring carpet, fabric, and concrete in construction projects. A queen-size mattress covers about 5 yd², and a typical driveway might require 30-50 yd² of concrete. This unit is particularly common in the textile, carpeting, and landscaping industries in imperial-system countries.",
    symbol: "yd²"
  },
  squareMeters: {
    name: "Square Meter",
    description: "A square meter (m²) is the SI derived unit of area, equal to the area of a square with sides of one meter. It is the standard worldwide for measuring room sizes, apartments, houses, and land plots. A king-size bed occupies about 4 m², a parking space is roughly 12-15 m², and a small apartment might be 50-60 m². This unit is fundamental in real estate, construction, architecture, and interior design globally.",
    symbol: "m²"
  },
  tsubo: {
    name: "Tsubo",
    description: "A tsubo (坪) is the traditional Japanese unit of floor area, equal to 400/121 m² (approximately 3.306 m²) - defined as the footprint of two tatami mats placed side by side. It has been the standard for measuring rooms and apartments in Japan for centuries and remains widely used in real estate and architecture today. Apartment sizes in Japan are routinely quoted in tsubo alongside square meters. One tsubo equals approximately 35.58 square feet or 3.95 square yards.",
    symbol: "坪"
  },
  pyeong: {
    name: "Pyeong",
    description: "A pyeong (평) is the traditional Korean unit of floor area, equal to approximately 3.306 m² - historically derived from the Japanese tsubo, with which it shares the same value. Despite South Korea officially adopting square meters, pyeong remains deeply embedded in Korean real estate culture. Apartment listings in Seoul and Busan still commonly advertise sizes in pyeong, and a typical Korean family apartment is around 25-33 pyeong. One pyeong equals approximately 35.58 square feet.",
    symbol: "평"
  },
  squareRods: {
    name: "Square Rod",
    description: "A square rod (sq rd), also called a perch or square pole, equals the area of a square with sides of one rod (5.0292 m or 16.5 ft), giving approximately 25.29 m². This traditional unit was central to land surveying before the adoption of the metric system and remains embedded in legal property descriptions in the United States. There are exactly 160 square rods in one acre, and 40 square rods in one rood. Old farmland deeds and archaic land records in the UK and US frequently reference perches and square rods.",
    symbol: "sq rd"
  },
  marlas: {
    name: "Marla",
    description: "A marla is a traditional unit of land area used in Pakistan, India, and Bangladesh, equal to 30.25 square yards (approximately 25.29 m²) - effectively the same as one square rod. In Pakistan's land registry system, 20 marlas equal one kanal and 8 kanals equal one acre. Despite metrification, marla remains the dominant unit for measuring residential plots and urban land in Pakistan. Property listings in Lahore, Karachi, and Islamabad routinely quote plot sizes in marlas, making it essential knowledge for anyone dealing with South Asian real estate.",
    symbol: "marla"
  },
  ares: {
    name: "Are",
    description: "An are (a) is a metric unit of area equal to 100 square meters (10 m × 10 m). Though less commonly used today, it served as an intermediate unit between square meters and hectares in the metric system. One are equals 0.01 hectares or about 119.6 yd². It is still occasionally used in some European countries for measuring medium-sized land plots, gardens, and vineyards. The dekameter-squared (dam²) is another name for the same unit.",
    symbol: "a"
  },
  squareChains: {
    name: "Square Chain",
    description: "A square chain (ch²) is a surveying unit equal to the area of a square with sides of one Gunter's chain (66 feet or ~20.12 m), approximately 404.69 m². Ten square chains equal exactly one acre, making it the natural subdivision unit in traditional land surveying. The US Public Land Survey System used chains to lay out townships and sections, and square chains appear throughout old legal property descriptions and government land grants across North America. One square chain equals exactly 16 square rods.",
    symbol: "ch²"
  },
  mu: {
    name: "Mu",
    description: "The mu (亩, also written mǔ) is China's traditional unit of agricultural land area, equal to 1/15 hectare or approximately 666.67 m². It has been the standard land measurement in China for over two thousand years. China's total farmland is reported in hundreds of millions of mu, and rural property records across China use mu as the primary unit. One hectare equals exactly 15 mu. One mu equals approximately 0.165 acres or about 797 square yards.",
    symbol: "亩"
  },
  stremmata: {
    name: "Stremma",
    description: "A stremma (στρέμμα, plural: stremmata) is the standard Greek unit of land area, equal to exactly 1,000 m² (0.1 hectare). It is the unit every Greek and Cypriot uses for fields, olive groves, vineyards, and rural plots - in everyday Greek, no one says '1,000 square meters'; they say 'ένα στρέμμα.' Greece's total agricultural land is measured in millions of stremmata. One stremma equals approximately 0.2471 acres or 10 ares. The word derives from the Greek 'στρέφω' (to turn), historically referring to the area a plough could turn in a given time.",
    symbol: "στρ"
  },
  dunam: {
    name: "Dunam",
    description: "A dunam (also dönüm or donum) is a unit of land area equal to exactly 1,000 m², used across Turkey, Israel, Palestine, Jordan, Lebanon, Iraq, and former Ottoman Empire territories. One dunam equals one stremma and one decare. The modern metric dunam of 1,000 m² was standardised during the British Mandate period; older Ottoman dunams varied by region (approximately 919-1,600 m²). It remains the primary land measurement unit for agricultural and property records throughout the Middle East, with properties routinely listed in dunams in Israeli and Palestinian real estate.",
    symbol: "dunam"
  },
  roods: {
    name: "Rood",
    description: "A rood (ro) is a traditional English unit of land area equal to one quarter of an acre, or 40 square rods, approximately 1,011.71 m². Originating in medieval England, the rood was used alongside the acre and the perch for describing land ownership. The name shares its root with 'rod,' the linear unit used to measure it. While largely obsolete in modern use, roods still appear in old English legal documents, historical land surveys, and certain rural property records in England and Wales.",
    symbol: "ro"
  },
  rai: {
    name: "Rai",
    description: "A rai (ไร่) is the standard Thai unit of land area, defined as exactly 1,600 m² (40 m × 40 m). It is used throughout Thailand for all land measurement - from rice paddies to urban plots and national parks. Thai real estate listings always quote land area in rai, ngan (400 m² = ¼ rai), and talang wah (4 m² = 1 square wah). Thailand's total rice-paddy area is reported in millions of rai. One rai equals approximately 0.395 acres or 0.16 hectares.",
    symbol: "rai"
  },
  bighas: {
    name: "Bigha",
    description: "A bigha is a traditional South Asian land area unit used across India, Nepal, and Bangladesh, with its size varying significantly by region. The standardised pucca bigha (common in Uttar Pradesh and Bihar) equals 3,025 square yards (approximately 2,529 m²). In West Bengal it is approximately 1,337 m², in Rajasthan around 1,618 m², and in Nepal over 6,773 m². Despite metrification, bigha remains the dominant land measurement in rural India. When dealing with legal or property matters, always verify the local definition, as regional variants differ substantially.",
    symbol: "bigha"
  },
  acres: {
    name: "Acre",
    description: "An acre is a traditional unit of land area used primarily in the United States, United Kingdom, and countries with British heritage. One acre equals 43,560 ft² or about 4,047 m². Historically based on the area a yoke of oxen could plow in one day, it remains the standard for measuring agricultural land, residential plots, and rural properties. A football field (without end zones) is roughly 1.32 acres, and most suburban house lots range from 0.25 to 1 acre.",
    symbol: "ac"
  },
  feddan: {
    name: "Feddan",
    description: "A feddan (فدان) is the primary unit of land area in Egypt, Sudan, and parts of the Arab world, equal to approximately 4,200 m² (1.038 acres or 0.42 hectares). Its name derives from the Arabic word for 'yoke of oxen,' reflecting its agricultural origins - similar to the British acre. Egypt reports its cultivated farmland in millions of feddan; the fertile Nile Delta that feeds Egypt is measured in feddan. The feddan is subdivided into 24 kirats (each ~175 m²). It remains the legal standard for agricultural land registration in Egypt and Sudan.",
    symbol: "fed"
  },
  hectares: {
    name: "Hectare",
    description: "A hectare (ha) is a metric unit of area equal to 10,000 m² (100 m × 100 m). It is the primary unit for measuring agricultural land, forests, and large properties worldwide outside the United States. One hectare equals 2.471 acres. A FIFA-regulation football pitch is about 0.7 ha, and Vatican City is 44 ha. This unit is fundamental in agriculture, forestry, environmental conservation, and international land measurement standards.",
    symbol: "ha"
  },
  squareFurlongs: {
    name: "Square Furlong",
    description: "A square furlong is an area unit equal to a square with sides of one furlong (220 yards or ~201.17 m), approximately 40,469 m² or exactly 10 acres. The furlong (from Old English 'furrow-long') was historically the standard ploughing distance, and 10 square furlongs equals one acre - a relationship that made traditional land surveying convenient. While square furlongs are rarely used in official modern measurements, they appear in historical land surveys, British horse racing contexts, and as a handy reference for visualising 10-acre blocks.",
    symbol: "fur²"
  },
  homesteads: {
    name: "Homestead",
    description: "A homestead is a land area unit of exactly 160 acres (approximately 64.75 hectares or 0.6475 km²) - one quarter of a one-square-mile section - established by the US Homestead Act of 1862. The Act promised 160 acres to settlers willing to farm the land for five years, transforming the American West: over 270 million acres (about 10% of the entire continental US) were granted to 1.6 million homesteaders. In the US Public Land Survey System, one homestead equals a quarter-section, with four homesteads forming one full section of 640 acres.",
    symbol: "hmstd"
  },
  squareKilometers: {
    name: "Square Kilometer",
    description: "A square kilometer (km²) is a metric unit of area equal to a square with sides of one kilometer (1,000 m × 1,000 m). It is used for measuring large land areas such as cities, forests, lakes, and countries. Manhattan (New York) is about 59 km², and Monaco (the second smallest country) is just over 2 km². This unit is essential in geography, urban planning, forestry, and environmental impact studies.",
    symbol: "km²"
  },
  squareMiles: {
    name: "Square Mile",
    description: "A square mile (mi²) is an imperial unit of area equal to a square with sides of one mile (5,280 ft × 5,280 ft). It is used for measuring large land areas like counties, states, and countries in the United States. Los Angeles covers about 503 mi², Rhode Island (smallest US state) is roughly 1,214 mi², and Alaska is about 665,384 mi². This unit is standard in American geography, land surveying, and regional planning.",
    symbol: "mi²"
  },
  squareNauticalMiles: {
    name: "Square Nautical Mile",
    description: "A square nautical mile (nmi²) equals the area of a square with sides of one nautical mile (1,852 m), giving approximately 3,429,904 m² - about 343 hectares. This unit is used in maritime and aviation contexts to describe patrol zones, territorial extents, and maritime boundaries. Exclusive Economic Zones (EEZs) and military operating areas are often quoted in square nautical miles. One square nautical mile is approximately 1.32 square statute miles.",
    symbol: "nmi²"
  },
  townships: {
    name: "Township",
    description: "A township (twp) is a large survey unit used in the US Public Land Survey System, defined as a square with sides of 6 statute miles, giving exactly 36 square miles or approximately 93,240,000 m². Each township is subdivided into 36 one-square-mile sections of 640 acres each. The Township and Range system is how most US land west of Ohio was divided and sold; township numbers and names still appear in legal land descriptions, county records, and geographic placenames across the American Midwest and West.",
    symbol: "twp"
  },
  squareMegameters: {
    name: "Square Megameter",
    description: "A square megameter (Mm²) equals the area of a square with sides of one million meters - 10¹² m², or one trillion square meters. At this scale we describe major geographic and planetary regions. The entire land surface of Earth is about 149 Mm², the Indian Ocean covers roughly 70 Mm², and the Sahara Desert spans approximately 9.2 Mm². Square megameters provide a convenient scale for comparing continent-sized areas without resorting to hundreds of millions of square kilometers.",
    symbol: "Mm²"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toSquareMeters);
}

function convertArea() {
  convertFactorBased(toSquareMeters);
}

initConverterPage();
