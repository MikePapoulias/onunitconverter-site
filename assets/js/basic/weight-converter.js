const toKilograms = {
  electronVolts:      1.782661921627898e-36,
  nanograms:          1e-12,
  micrograms:         1e-9,
  milligrams:         1e-6,
  grains:             6.479891e-5,
  carats:             2e-4,
  grams:              1e-3,
  scruple:            1.2959782e-3,
  pennyweights:       1.55517384e-3,
  avoirdupoisDrams:   1.7718451953125e-3,
  apothecaryDrams:    3.8879346e-3,
  tolas:              1.16638038e-2,
  baht:               1.52e-2,
  ticals:             1.6329e-2,
  avoirdupoisOunces:  2.8349523125e-2,
  apothecaryOunces:   3.1103476800e-2,
  troyOunces:         3.1103476800e-2,
  newtons:            1.0197162129779283e-1,
  troyPounds:         3.7324172160e-1,
  avoirdupoisPounds:  4.5359237e-1,
  catties:            6.04e-1,
  kilograms:          1,
  stones:             6.35029318,
  quarters:           12.70058636,
  slugs:              14.59390293720636,
  shortHundredweights:4.5359237e1,
  longHundredweights: 5.0802345440e1,
  shortTons:          9.0718474e2,
  metricTons:         1e3,
  longTons:           1.0160469088e3,
  kilotons:           1e6,
  megatons:           1e9,
  gigatons:           1e12,
  solarMasses:        1.98892e30,
};

// Unit descriptions
const unitDescriptions = {
  electronVolts: {
    name: "Electronvolt (mass)",
    description: "In particle physics, mass and energy are interchangeable via Einstein's E = mc². The electronvolt (eV) as a mass unit equals the mass equivalent of 1 eV of energy (approximately 1.783 × 10⁻³⁶ kg). Particle masses at the subatomic scale are routinely expressed in MeV/c² or GeV/c² - the proton mass is 938.3 MeV/c², and the electron is 0.511 MeV/c². The Higgs boson, discovered at CERN in 2012, has a mass of approximately 125.25 GeV/c². This unit is exclusively used in high-energy physics and quantum field theory, where conventional mass units like grams would require impossibly small exponents.",
    symbol: "eV/c²"
  },
  nanograms: {
    name: "Nanogram",
    description: "A nanogram (ng) is one billionth of a gram (10⁻⁹ g). This is the standard mass unit in analytical chemistry, pharmacology, and toxicology for detecting trace substances. Blood plasma concentrations of hormones, drugs, and environmental contaminants are routinely reported in nanograms per milliliter (ng/mL). A typical therapeutic blood level for many medications is in the range of 10-500 ng/mL. In forensic science, nanogram-level DNA quantities can be amplified by PCR to yield a full genetic profile.",
    symbol: "ng"
  },
  micrograms: {
    name: "Microgram",
    description: "A microgram (µg or mcg) is one millionth of a gram (10⁻⁶ g). It is the standard dosing unit for potent medications and micronutrients: vitamin B12 recommended daily intake is 2.4 µg, folic acid supplements are 400 µg, and levothyroxine (thyroid medication) doses are typically 25-200 µg. Air quality standards measure fine particulate matter (PM2.5) in micrograms per cubic meter - the WHO guideline is 15 µg/m³ annual mean. A grain of sand weighs about 50-100 micrograms, and a single snowflake approximately 3 micrograms.",
    symbol: "µg"
  },
  milligrams: {
    name: "Milligram",
    description: "A milligram (mg) is one thousandth of a gram (10⁻³ g). It is the primary unit for pharmaceutical dosing: aspirin tablets are typically 500 mg, ibuprofen 200-400 mg, and melatonin supplements 0.5-10 mg. Precious metal assay results and alloy compositions are specified in milligrams per kilogram (mg/kg = ppm). Nutritional labels worldwide list mineral content in milligrams - the recommended daily intake of iron is 8-18 mg, calcium 1000 mg, and sodium under 2300 mg. A grain of rice weighs about 25-30 mg, and a medium eyelash approximately 0.1 mg.",
    symbol: "mg"
  },
  carats: {
    name: "Carat",
    description: "A metric carat (ct or CD) is exactly 200 milligrams (0.2 g), the universal standard for weighing gemstones. Established internationally in 1907, it replaced fractionally different regional carat weights previously used in different countries. The total weight of a diamond or colored gemstone is always expressed in carats: a 1.00 ct diamond of excellent cut and color can command over $5,000. The Cullinan diamond, the largest gem-quality rough diamond ever found, weighed 3,106.75 carats.",
    symbol: "ct"
  },
  grains: {
    name: "Grain",
    description: "A grain (gr) is the smallest unit in both the avoirdupois and troy weight systems, equal to exactly 64.79891 milligrams. Originally defined as the mass of a single grain of barley or wheat from the middle of an ear, it has been a standard of weight since ancient times. Today, grains are used to weigh gunpowder charges and bullets (a standard .308 rifle bullet weighs 168 gr), pharmaceutical preparations in apothecary compounding, and the fineness of gold alloys. Arrowhead and fishing hook weights are also specified in grains.",
    symbol: "gr"
  },
  scruple: {
    name: "Scruple",
    description: "A scruple (s ap) is a unit of the apothecary weight system equal to 20 grains or approximately 1.296 grams. Derived from the Latin 'scrupulus' (a small sharp stone used as a counterweight), it was the basic dispensing unit in pre-metric pharmacy across Europe. The apothecary system divided the fluid ounce into 8 drams, each dram into 3 scruples, and each scruple into 20 grains - a hierarchy memorised by every 19th-century pharmacist.",
    symbol: "s ap"
  },
  pennyweights: {
    name: "Pennyweight",
    description: "A pennyweight (dwt or pwt) equals 24 grains or 1/20 of a troy ounce - approximately 1.555 grams. Its name derives from the weight of an English silver penny in the medieval period. Pennyweights are the standard unit used by jewellers and goldsmiths in North America for weighing precious metals: gold, silver, and platinum. When a jeweller quotes the gold weight of a ring or chain, they typically use pennyweights. Gold buyers, refiners, and scrap metal dealers quote prices per pennyweight (often abbreviated 'DWT') when appraising jewellery.",
    symbol: "dwt"
  },
  grams: {
    name: "Gram",
    description: "The gram (g) is the basic metric unit of mass, equal to one thousandth of a kilogram. It is universally used in cooking, nutrition, postal services, and scientific measurement. Almost all food packaging worldwide shows nutritional information per 100 g. A US nickel coin weighs exactly 5 g, a teaspoon of sugar about 4 g, and a standard paperclip approximately 1 g. In chemistry, the gram is central to molar mass: one mole of carbon-12 atoms weighs exactly 12 g. Postal rates are typically scaled per gram or per 100 g.",
    symbol: "g"
  },
  apothecaryDrams: {
    name: "Apothecary Dram",
    description: "An apothecary dram (dr ap) equals 3 scruples or 60 grains - approximately 3.888 grams. Part of the traditional apothecary system used by physicians and pharmacists from the Middle Ages through the 19th century, it was the standard unit for prescribing and dispensing medicines. Prescriptions written in the apothecary system used special symbols: the dram symbol (℈) and ounce symbol (℥) appear throughout historical medical records and old pharmacy ledgers. The apothecary dram differs from the fluid dram (a volume unit) and from the avoirdupois dram.",
    symbol: "dr ap"
  },
  avoirdupoisDrams: {
    name: "Avoirdupois Dram",
    description: "An avoirdupois dram (dr av) is 1/16 of an avoirdupois ounce - approximately 1.772 grams. Part of the avoirdupois system that governs everyday trade weights in the UK and US, it was historically used to measure small quantities of goods and spices in commerce. While rarely used in modern commerce (having been replaced by grams in most applications), the avoirdupois dram still appears in some spice and herbalist contexts, in US gunpowder loading data (where charges are specified in grains and drams), and in archaic recipe books.",
    symbol: "dr av"
  },
  apothecaryOunces: {
    name: "Apothecary Ounce",
    description: "An apothecary ounce (oz ap) is identical in mass to the troy ounce - approximately 31.10 grams - and equals 8 apothecary drams or 480 grains. It was the standard ounce used by pharmacists and physicians across Europe and North America from medieval times until the 20th century. Although the apothecary system has been replaced by SI units in modern medicine, the apothecary ounce still appears in historical pharmacopeias, traditional herbal medicine texts, and some compounding pharmacy references.",
    symbol: "oz ap"
  },
  avoirdupoisOunces: {
    name: "Avoirdupois Ounce",
    description: "The avoirdupois ounce (oz) is 1/16 of a pound, equal to approximately 28.35 grams. It is the everyday ounce used in the United States and United Kingdom for food portions, household quantities, and general trade. US food packages, recipe measurements, and nutrition labels reference ounces; a standard stick of butter is 4 oz, a can of soup typically 10.75 oz, and a baseball weighs 5-5.25 oz. Unlike the troy ounce (31.10 g) used for precious metals, the avoirdupois ounce (28.35 g) is lighter.",
    symbol: "oz"
  },
  ticals: {
    name: "Tical",
    description: "A tical (also baht or kyat in historical usage) is a traditional Southeast Asian unit of mass, equal to approximately 16.329 grams. It was historically the standard weight for gold and silver trade throughout Thailand, Myanmar, Cambodia, and Laos. In Thailand, the tical is the root of the currency 'baht' - the baht coin was originally defined as the weight of one tical of silver. In Myanmar, the traditional kyat weight system used ticals as a primary unit.",
    symbol: "tical"
  },
  troyOunces: {
    name: "Troy Ounce",
    description: "The troy ounce (ozt or oz t) is the global standard for weighing and pricing precious metals - gold, silver, platinum, and palladium. Equal to 31.1034768 grams (about 10% heavier than the avoirdupois ounce), it originates from the medieval fair at Troyes, France, where a standardised weight system facilitated international trade. All gold spot prices quoted on financial markets (LBMA, COMEX, MCX) are priced per troy ounce. A standard 'Good Delivery' gold bar approved by the London Bullion Market Association weighs approximately 400 troy ounces (12.4 kg).",
    symbol: "ozt"
  },
  baht: {
    name: "Baht (weight)",
    description: "The baht (บาท) as a unit of mass equals 15.244 grams and is the traditional gold weight standard of Thailand. While the baht is now primarily known as Thailand's currency, its weight meaning remains very much live: Thai gold jewellery is universally sold and priced by the baht weight. A '1 baht gold chain' in a Thai jewellery shop contains one baht (15.244 g) of gold alloy. Gold shops (ร้านทอง) throughout Thailand, and in Thai communities worldwide, post daily buying and selling prices per baht of gold.",
    symbol: "baht"
  },
  tolas: {
    name: "Tola",
    description: "A tola is a traditional South Asian unit of mass equal to the weight of a silver rupee coin - approximately 11.664 grams. It was the standard unit for weighing gold and silver across India, Pakistan, Nepal, and Bangladesh for centuries, and remains actively used in gold jewellery markets throughout the subcontinent. Gold is routinely priced and bought in tolas at jewellers' shops (sarrafas) in India and Pakistan. A 10-tola gold bar (116.64 g) is the most popular retail gold bar size in South Asia and the Middle East.",
    symbol: "tola"
  },
  kilograms: {
    name: "Kilogram",
    description: "The kilogram (kg) is the SI base unit of mass - the fundamental unit from which all other mass measurements in the metric system are derived. Since 2019 it has been defined by fixing the Planck constant h to exactly 6.62607015 × 10⁻³⁴ J·s, replacing the 130-year-old International Prototype Kilogram (a platinum-iridium cylinder kept in Sèvres, France). The kilogram governs daily life worldwide: body weight in most countries, grocery shopping, luggage allowances, postal rates, freight pricing, and ingredient quantities in cooking all reference kilograms.",
    symbol: "kg"
  },
  troyPounds: {
    name: "Troy Pound",
    description: "A troy pound (lb t) equals 12 troy ounces or 5,760 grains - approximately 373.24 grams. It is lighter than the common avoirdupois pound (453.59 g) because the troy system divides the pound into 12 ounces rather than 16. Historically used across Europe for trade in precious metals and pharmaceuticals, the troy pound was the legal standard in England from the 15th century until 1878. In the United States, the troy pound was once the official standard for coinage but was abolished for commercial use in 1828.",
    symbol: "lb t"
  },
  avoirdupoisPounds: {
    name: "Pound",
    description: "The avoirdupois pound (lb) is the primary unit of weight in the United States and United Kingdom for everyday use, equal to 16 ounces or exactly 453.59237 grams. It dominates American life: body weight, grocery produce, deli counter cuts, freight shipping costs, gym weights, and building material quantities are all measured in pounds and ounces. American recipes use pounds for meat and large quantities. The pound derives from the Roman 'libra pondo' (a pound by weight) - hence both the symbol 'lb' (from libra) and the British currency symbol '£'.",
    symbol: "lb"
  },
  catties: {
    name: "Catty",
    description: "The catty (also jin 斤 in Chinese) is a traditional unit of mass used across East and Southeast Asia, equal to 600 grams in its modern metric form. It was historically the standard unit of trade for goods at markets throughout China, Japan, Korea, and Southeast Asia for over a thousand years. Today the catty remains widely used in Chinese, Vietnamese, Malaysian, and Singaporean wet markets and grocery stores for weighing vegetables, meat, and fish. In Hong Kong, the catty (斤) is precisely 604.79 grams; in mainland China it is exactly 500 grams (half a kilogram).",
    symbol: "catty"
  },
  newtons: {
    name: "Newton (weight)",
    description: "The newton (N) is the SI unit of force, but because weight is technically the gravitational force on a mass, newtons are the scientifically correct unit for what most people call 'weight.' At standard gravity (9.80665 m/s²), 1 kg of mass exerts a weight force of approximately 9.81 N. Scales in physics labs and engineering contexts display results in newtons rather than kilograms. The distinction matters in aerospace and high-altitude contexts: an astronaut's mass stays constant at, say, 70 kg, but their weight in newtons changes from ~686 N on Earth's surface to nearly 0 N in free-fall orbit.",
    symbol: "N"
  },
  quarters: {
    name: "Quarter",
    description: "A quarter (qr) in the avoirdupois system equals 28 pounds or one quarter of a hundredweight - approximately 12.70 kg. Historically, quarters were used in British trade for measuring grain, wool, and other bulk commodities. The British quarter of grain (28 lb) was the standard purchase quantity at markets and mills throughout medieval and early modern England. In the US, the term 'quarter' sometimes refers to a quarter of a short hundredweight (25 lb) rather than the British 28 lb.",
    symbol: "qr"
  },
  stones: {
    name: "Stone",
    description: "A stone (st) equals 14 pounds or approximately 6.350 kg. It is the standard unit for expressing human body weight in the United Kingdom and Ireland, where a person will say they weigh '11 stone 4' (meaning 11 stone and 4 pounds, or 158 lb / 71.7 kg). Despite the UK's official adoption of the metric system, stones remain the dominant unit for personal body weight on British bathroom scales, in doctors' offices, and in everyday conversation. British newspapers and sports reports routinely describe athletes' weights in stones and pounds.",
    symbol: "st"
  },
  slugs: {
    name: "Slug",
    description: "A slug is a unit of mass in the British imperial and US customary foot-pound-second (FPS) engineering system, equal to the mass that accelerates at 1 foot per second squared under a force of 1 pound-force - approximately 14.594 kg. The slug was introduced to simplify dynamics calculations in engineering: using slugs ensures that F = ma holds without unit conversion factors when force is in pounds-force and acceleration in ft/s². Aerospace engineers and mechanical engineers working in US customary units use slugs for aircraft mass, structural dynamics, and ballistic calculations.",
    symbol: "slug"
  },
  shortHundredweights: {
    name: "Short Hundredweight",
    description: "A short hundredweight (cwt, US cwt) equals exactly 100 pounds or approximately 45.359 kg. Used primarily in the United States for commodity trading, it represents the practical 'hundred-pound' unit for measuring coal, agricultural produce, livestock feed, and industrial materials. Commodity markets for cattle, hogs, and grain in the US price their products per hundredweight ($/cwt or $/100 lb). Steel and non-ferrous metal quotations in North America are commonly expressed in dollars per short hundredweight. The 'short' modifier distinguishes it from the UK long hundredweight (112 lb).",
    symbol: "cwt"
  },
  longHundredweights: {
    name: "Long Hundredweight",
    description: "A long hundredweight (long cwt) equals 112 pounds or approximately 50.802 kg - equal to 8 stone. The standard hundredweight in the United Kingdom and much of its historical trading sphere, it reflects the medieval English stone of 14 lb (8 × 14 = 112). British agricultural commodity prices, wool trade records, and livestock market reports historically used long hundredweights. The UK meat trade still occasionally references hundredweights in wholesale pricing.",
    symbol: "long cwt"
  },
  shortTons: {
    name: "Short Ton",
    description: "A short ton (also known as a US ton) equals exactly 2,000 pounds or approximately 907.185 kg. It is the standard ton in the United States for coal, scrap metal, aggregate, freight, and agricultural commodities. US electricity, energy, and mining production statistics are reported in short tons or millions of short tons (MMst). American trucking weight limits, rail car capacities, and bulk cargo specifications use short tons. When Americans refer to a 'ton' without qualification, they almost always mean the short ton.",
    symbol: "ton"
  },
  longTons: {
    name: "Long Ton",
    description: "A long ton (UK ton, displacement ton) equals 2,240 pounds or exactly 1,016.0469088 kg. The standard ton in the United Kingdom and Commonwealth countries, it equals 20 long hundredweights of 112 lb each. Naval architecture and ship displacement are specified in long tons: the displacement of a warship or cargo vessel is the weight of water it displaces, expressed in long tons. The Titanic had a displacement of approximately 52,310 long tons. British agricultural, mining, and coal trade statistics from the 18th through mid-20th centuries used long tons exclusively.",
    symbol: "L/T"
  },
  metricTons: {
    name: "Metric Ton (Tonne)",
    description: "A metric ton (t), also called a tonne, equals exactly 1,000 kilograms. It is the standard large mass unit in the international SI system, used worldwide for shipping, trade, agriculture, industry, and environmental monitoring. Global steel production, grain harvests, CO₂ emissions, shipping freight, and oil production are all reported in millions of metric tonnes. A standard TEU shipping container can carry up to approximately 28 metric tonnes of cargo. Carbon footprint calculators express emissions in CO₂ equivalent tonnes (tCO₂e).",
    symbol: "t"
  },
  kilotons: {
    name: "Kilotonne",
    description: "A kilotonne (kt) equals 1,000 metric tonnes (10⁶ kg). In military and geopolitical contexts, nuclear weapon yields are expressed in kilotons of TNT equivalent (kt TNT): the atomic bomb dropped on Hiroshima had a yield of approximately 15 kt TNT. Environmental science uses kilotonnes for reporting regional greenhouse gas inventories, industrial pollutant releases, and annual waste generation. Mining operations quote ore extraction rates in kilotonnes per day. The global atmospheric inventory of various trace gases is reported in kilotonnes.",
    symbol: "kt"
  },
  megatons: {
    name: "Megaton",
    description: "A megaton (Mt) equals one million metric tonnes (10⁹ kg). Nuclear weapon yields are measured in megatons of TNT equivalent: the largest weapon ever detonated, the Soviet Tsar Bomba tested in 1961, had a yield of approximately 50 Mt TNT and produced a fireball 8 km in diameter. Annual global CO₂ emissions are reported in gigatons (Gt), but regional emissions data and specific industrial sectors are quoted in megatons. The Chicxulub asteroid impact that caused the Cretaceous-Paleogene mass extinction released energy equivalent to roughly 100 million Mt of TNT.",
    symbol: "Mt"
  },
  gigatons: {
    name: "Gigaton",
    description: "A gigaton (Gt) equals one billion metric tonnes (10¹² kg). It is the standard unit for planetary-scale mass measurements and global environmental budgets. Annual human CO₂ emissions are approximately 37 Gt CO₂; Earth's atmosphere contains roughly 5,480 Gt of air; Antarctic ice sheet mass is around 26,500,000 Gt of ice. Climate scientists report ice sheet mass balance changes in gigatons per year - the Greenland ice sheet loses approximately 280 Gt of ice annually due to climate change.",
    symbol: "Gt"
  },
  solarMasses: {
    name: "Solar Mass",
    description: "A solar mass (M☉) is the mass of our Sun - approximately 1.989 × 10³⁰ kg - and is the standard unit for measuring stellar and galactic masses in astronomy. The Sun contains 99.86% of the total mass of the Solar System. Stellar evolution models describe stars of 0.08 M☉ (the minimum for hydrogen fusion) to over 200 M☉ (the most massive known stars). Supermassive black holes at the centres of galaxies range from millions to billions of solar masses: the black hole at the centre of the Milky Way (Sagittarius A*) is approximately 4.3 million M☉.",
    symbol: "M☉"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toKilograms);
}

function convertWeight() {
  convertFactorBased(toKilograms);
}

initConverterPage();
