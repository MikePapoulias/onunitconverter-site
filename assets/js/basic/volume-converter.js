const toLiters = {
  picoliters:        1e-12,
  nanoliters:        1e-9,
  cubicMillimeters:  1e-6,
  microliters:       1e-6,
  minims:            6.1611519921875e-5,
  milliliters:       1e-3,
  cubicCentimeters:  1e-3,
  fluidDrams:        3.6966911953125e-3,
  teaspoons:         4.92892159375e-3,
  centiliters:       1e-2,
  tablespoons:       1.478676478125e-2,
  cubicInches:       1.6387064e-2,
  fluidOunces:       2.95735295625e-2,
  jiggers:           4.436029434375e-2,
  deciliters:        1e-1,
  gills:             1.1829411825e-1,
  cups:              2.365882365e-1,
  pints:             4.73176473e-1,
  imperialPints:     5.6826125e-1,
  quarts:            9.46352946e-1,
  liters:            1,
  gallons:           3.785411784,
  imperialGallons:   4.54609,
  pecks:             8.80976754172,
  cubicFeet:         28.316846592,
  firkins:           34.068706056,
  bushels:           35.23907016688,
  oilBarrels:        158.987294928,
  hogsheads:         238.480942392,
  pipes:             476.961884784,
  cubicYards:        764.554857984,
  tuns:              953.923769568,
  kiloliters:        1000,
  cubicMeters:       1000,
  acrefeet:          1233481.83754752,
  megaliters:        1e6,
  cubicKilometers:   1e12,
  cubicMiles:        4168181825440.58
};

// Unit descriptions
const unitDescriptions = {
  picoliters: {
    name: "Picoliter",
    description: "A picoliter (pL) = 10⁻¹² L = one cubic micrometre. Inkjet printers deposit 1-10 pL droplets per dot to achieve >600 DPI. Droplet microfluidics uses pL-sized reaction chambers for digital PCR and single-cell analysis, detecting a single DNA molecule per droplet. High-throughput drug-screening robots dispense compounds in pL volumes into 1,536-well plates. 1 pL = 10⁻¹² L.",
    symbol: "pL"
  },
  nanoliters: {
    name: "Nanoliter",
    description: "A nanoliter (nL) = 10⁻⁹ L. High-throughput drug screening platforms dispense 1-100 nL per well across 384- or 1,536-well plates. Acoustic liquid handlers (Echo) transfer nL volumes with <10% error CV. A human red blood cell ≈0.09 nL; a typical mammalian cell 1-4 nL. Capillary electrophoresis separates proteins in nL sample plugs. 1 nL = 10⁻⁹ L.",
    symbol: "nL"
  },
  cubicMillimeters: {
    name: "Cubic Millimeter",
    description: "A cubic millimeter (mm³) is the volume of a cube with sides of one millimeter - equal to one millionth of a liter (0.001 mL). Despite its tiny size, the cubic millimeter is an essential unit in engineering and science. In medicine, red blood cell counts are reported per cubic millimeter of blood (a healthy adult has roughly 5 million red blood cells per mm³). In 3D printing and CNC machining, material volumes and tolerances are routinely specified in mm³. A single raindrop is roughly 50 mm³, and a grain of table salt approximately 0.1 mm³.",
    symbol: "mm³"
  },
  microliters: {
    name: "Microliter",
    description: "A microliter (μL) = 10⁻⁶ L = 1 mm³. Standard unit for tiny liquid volumes in laboratory science and medicine. PCR, DNA extraction, and ELISA assays are routinely measured in μL. Insulin syringes: 100-1,000 μL; laboratory micropipettes: 0.5-1,000 μL. 1 μL = 10⁻⁶ L = 1 mm³.",
    symbol: "μL"
  },
  minims: {
    name: "Minim",
    description: "A minim (min) is the smallest US apothecary unit = 1/480 fl oz ≈ 0.0616 mL, defined as approximately one drop of water. 60 minims = one fluid dram; 480 minims = one fluid ounce. Now largely superseded by millilitres, minims survive in traditional compounding recipes, older US pharmacopeias, and historical pharmaceutical literature. 1 min ≈ 0.0616 mL.",
    symbol: "min"
  },
  milliliters: {
    name: "Milliliter",
    description: "A milliliter (mL) is one thousandth of a liter (0.001 L) and exactly equal to one cubic centimeter (cc/cm³). It is one of the most commonly used units in everyday life - standard medicine doses, cooking measurements, and beverage labels all reference milliliters. A standard teaspoon holds about 5 mL, a tablespoon 15 mL, and a standard wine glass typically 150-250 mL. The milliliter is the workhorse of liquid measurement in medicine, cooking, chemistry, and consumer products worldwide, bridging the gap between the full liter and laboratory-scale measurements.",
    symbol: "mL"
  },
  cubicCentimeters: {
    name: "Cubic Centimeter",
    description: "A cubic centimeter (cm³), also written cc, is the volume of a cube with sides of one centimetre = exactly 1 mL. 'cc' is the preferred notation in medicine, mechanical engineering, and automotive contexts. Engine displacement is measured in cc (a 1,000 cc motorcycle engine has 1 L displacement); syringe dosages are labelled in cc. A standard sugar cube ≈1 cm³. 1 cm³ = 1 mL.",
    symbol: "cm³"
  },
  fluidDrams: {
    name: "Fluid Dram",
    description: "A fluid dram (fl dr, also 'drachm') = 1/8 fl oz ≈ 3.697 mL. Used by apothecaries for precise medicinal compounding; a fluid dram divided into 60 minims. Largely superseded by millilitres but still appears in traditional compounding recipes, older US pharmacopeias, and historical medical literature. 1 fl dr ≈ 3.697 mL.",
    symbol: "fl dr"
  },
  teaspoons: {
    name: "Teaspoon",
    description: "A teaspoon (tsp) is a US customary and cooking measurement unit equal to 1/3 of a tablespoon - approximately 4.929 mL. It is fundamental to cooking and baking worldwide: nearly every recipe in US-published cookbooks uses teaspoons as the basic small measurement for spices, baking powder, vanilla, and other minor ingredients. In medicine, over-the-counter liquid medications (especially children's doses) are measured in teaspoons, with 5 mL the standard metric equivalent used on US medication labels. Three teaspoons make one tablespoon, and six teaspoons make one fluid ounce.",
    symbol: "tsp"
  },
  centiliters: {
    name: "Centiliter",
    description: "A centiliter (cL) = 0.01 L = 10 mL. Standard small-drink unit on menus and bottle labels across continental Europe. French wine pours: 15 cL (half-glass) or 25 cL; a European spirits shot = 4 cL (40 mL). EU Packaging Directive mandates cL or mL labelling on all pre-packaged beverages. 1 cL = 0.01 L = 10 mL.",
    symbol: "cL"
  },
  tablespoons: {
    name: "Tablespoon",
    description: "A tablespoon (tbsp) is a US customary cooking measurement equal to 3 teaspoons or 1/2 fluid ounce - approximately 14.787 mL. It is the standard 'large spoon' measurement in hundreds of millions of American recipes - used for butter portions, oil, sugar, sauce, and condiment quantities. Outside cooking, tablespoons appear in DIY instructions, garden fertilizer dosages, and cleaning product formulations. A typical soup spoon holds roughly one tablespoon. The tablespoon is the practical bridge between the tiny teaspoon and the larger cup in everyday kitchen measurement.",
    symbol: "tbsp"
  },
  cubicInches: {
    name: "Cubic Inch",
    description: "A cubic inch (in³) is the volume of a cube with sides of one inch (25.4 mm), equal to approximately 16.387 mL. It is widely used in US engineering and manufacturing - engine displacement was traditionally described in cubic inches (a 350 in³ V8 engine displaces 5.7 liters), and product specifications for items sold in the US frequently reference cubic inches. Speaker cabinet volumes, wine bottle capacities in older US standards, refrigerator compartment sizes, and box shipping calculations in imperial units all use cubic inches. One liter equals approximately 61.024 cubic inches.",
    symbol: "in³"
  },
  fluidOunces: {
    name: "Fluid Ounce",
    description: "A fluid ounce (fl oz) is a US customary volume unit equal to 1/8 of a cup or 1/128 of a gallon - approximately 29.574 mL. Despite sharing a name with the weight unit 'ounce', fluid ounces measure volume, not mass. In the US, beverages are universally labeled in fluid ounces: a standard can of soda is 12 fl oz, a standard wine pour is 5 fl oz, and a shot of spirits is 1.5 fl oz. Note that the UK imperial fluid ounce (28.413 mL) differs slightly from the US fluid ounce (29.574 mL) - a common source of confusion in international recipes and product comparisons.",
    symbol: "fl oz"
  },
  jiggers: {
    name: "Jigger",
    description: "A jigger = 1.5 US fl oz ≈ 44.36 mL, the standard bartending measure. The double-ended tool has a 1.5 oz large cup and a 1 oz 'pony' cup. Classic cocktails are specified in jiggers: margarita 1.5 jig tequila; negroni 1 jig each of gin, Campari, and vermouth. Required equipment in any licensed bar. 1 jig = 1.5 fl oz ≈ 44.36 mL.",
    symbol: "jig"
  },
  deciliters: {
    name: "Deciliter",
    description: "A deciliter (dL) = 0.1 L = 100 mL - the universal blood-test reporting unit: blood glucose in mg/dL, haemoglobin in g/dL, cholesterol in mg/dL, BAC in g/dL. Normal fasting glucose <100 mg/dL; dangerous BAC >0.3 g/dL. Also the primary volumetric cooking unit in Scandinavian recipes (Sweden, Norway, Denmark, Finland). 1 dL = 0.1 L.",
    symbol: "dL"
  },
  gills: {
    name: "Gill",
    description: "A gill (gi) = 4 US fl oz ≈ 118.3 mL. The UK gill = 5 imperial fl oz ≈ 142.1 mL. Once the standard tavern measure for spirits and wine, now mainly found in traditional recipes, historical distillery records, and Scottish whisky contexts where pub measures were defined in gill fractions. 1 US gi ≈ 118.3 mL; 1 UK gi ≈ 142.1 mL.",
    symbol: "gi"
  },
  cups: {
    name: "Cup",
    description: "A cup = 8 fl oz = 16 tbsp ≈ 236.6 mL - the fundamental unit of American cooking. Almost every US recipe uses cups for dry and liquid ingredients. The US customary cup (236.588 mL) differs from the US legal cup (240 mL, used in nutrition labelling) and the metric cup (Australia/Canada: 250 mL). Kitchen sets come in 1/4, 1/3, 1/2, and 1 cup sizes. 2 cups = 1 US pint.",
    symbol: "cup"
  },
  pints: {
    name: "Pint",
    description: "A pint (pt) is a US customary volume unit equal to 2 cups or 16 fluid ounces - approximately 473.176 mL. The pint is culturally iconic for measuring beer and dairy in American and British contexts. However, the US liquid pint (473 mL) is significantly smaller than the UK imperial pint (568 mL) - a key difference for anyone ordering drinks across the Atlantic. In the US, ice cream containers, pint-glass beers, and blood donation volumes are commonly quoted in pints. Fruit and berries are sold by the pint basket at farmers markets. Two US pints equal one US quart.",
    symbol: "pt"
  },
  imperialPints: {
    name: "Imperial Pint",
    description: "A UK imperial pint = exactly 20 imperial fl oz ≈ 568.3 mL - about 20% larger than the US liquid pint (473.2 mL). Protected by the UK Weights and Measures Act 1985 as the legal measure for draught beer, cider, and milk by the glass in British and Irish pubs. 'Going for a pint' encapsulates British pub culture; short-pours risk Trading Standards fines. 1 UK pt ≈ 568.3 mL.",
    symbol: "UK pt"
  },
  quarts: {
    name: "Quart",
    description: "A quart (qt) is a US customary volume unit equal to 2 pints or 4 cups - approximately 946.353 mL (just under one liter). Motor oil, paint, and large containers of juice or milk are commonly sold by the quart in the United States. The term 'quart' derives from the Latin 'quartus' (fourth), as it is one quarter of a gallon. The US liquid quart (946 mL) differs from the UK imperial quart (1136 mL). Engine coolant, transmission fluid, and many automotive products are measured and sold in quart containers in the US. Four quarts equal one US gallon.",
    symbol: "qt"
  },
  liters: {
    name: "Liter",
    description: "A liter (L) is the fundamental metric unit of volume, equal to one cubic decimeter (1 dm³ = 1,000 cm³ = 1,000 mL). Since its adoption as part of the metric system in 1793, the liter has become the world's most widely used volume measurement for liquids. Bottled water, soft drinks, wine, milk, and engine oil are all routinely sold by the liter globally. One liter of pure water at 4°C weighs almost exactly one kilogram - a convenient property that makes the liter central to everyday science, cooking, and industry worldwide. The liter is also written 'litre' in British English.",
    symbol: "L"
  },
  gallons: {
    name: "Gallon",
    description: "A US gallon (gal) = 4 quarts = 128 fl oz ≈ 3.785 L. Gasoline, milk, water, paint, and pesticides are sold by the gallon in the US. About 20% smaller than the UK imperial gallon (4.546 L) - a critical difference when comparing fuel economy across the Atlantic. 1 US gal = 3.785 L = 4 qt = 128 fl oz.",
    symbol: "gal"
  },
  imperialGallons: {
    name: "Imperial Gallon",
    description: "A US imperial gallon (UK gal) = exactly 8 imperial pints or 10 lb of pure water at 62°F ≈ 4.546 L - about 20% larger than the US liquid gallon (3.785 L). The weight-based definition made it verifiable with simple scales. Still the legal fuel measure in the Cayman Islands and other British Overseas Territories. UK mpg ratings use imperial gallons: 50 UK mpg ≈ 42 US mpg. 1 UK gal ≈ 4.546 L.",
    symbol: "UK gal"
  },
  pecks: {
    name: "Peck",
    description: "A peck (pk) is a dry volume unit in the US customary system equal to 2 dry gallons or 8 dry quarts - approximately 8.810 liters. It was historically used to measure grain, produce, and bulk goods at market - a 'peck of potatoes' or 'peck of apples' was a standard quantity. The nursery rhyme 'Peter Piper picked a peck of pickled peppers' has made the peck culturally familiar even though it is rarely used in modern commerce. Four pecks equal one US bushel. In agriculture, pecks still appear in older US crop yield tables, traditional market records, and historical American cookbooks.",
    symbol: "pk"
  },
  cubicFeet: {
    name: "Cubic Foot",
    description: "A cubic foot (ft³) is the volume of a cube with sides of one foot (30.48 cm), equal to approximately 28.317 liters. It is widely used in US construction, HVAC engineering, natural gas distribution, and real estate. Natural gas consumption is billed in cubic feet (Ccf = 100 ft³, Mcf = 1,000 ft³); refrigerator, oven, and storage compartment capacity are rated in cubic feet; and concrete or soil orders are quoted in cubic yards or cubic feet. One cubic foot of water weighs approximately 62.4 pounds. Air conditioning units are sized in BTU per hour for room volumes measured in cubic feet.",
    symbol: "ft³"
  },
  firkins: {
    name: "Firkin",
    description: "A firkin (fir) ≈ 34.07 L (9 US gallons) - the most common cask for British real-ale delivery (9 imperial gallons = 40.91 L). A busy pub cellar cycles through several firkins per week. Craft breweries stage 'firkin tappings' of limited experimental ales. The name comes from Middle Dutch 'vierdekijn' (little fourth), as a firkin was one quarter of a barrel. 1 fir = 9 US gal ≈ 34.07 L.",
    symbol: "fir"
  },
  bushels: {
    name: "Bushel",
    description: "A US bushel (bu) is a dry volume unit equal to 4 pecks or 8 dry gallons - approximately 35.239 liters. It is the primary unit for measuring and trading dry agricultural commodities in the United States: wheat, corn, soybeans, oats, and barley are all priced and traded globally in bushels on commodity exchanges like the Chicago Board of Trade. An acre of wheat typically yields 40-60 bushels; a standard grain truck holds 800-1000 bushels. The US bushel (35.24 L) differs slightly from the UK bushel (36.37 L). Commodity market prices per bushel directly affect global food prices.",
    symbol: "bu"
  },
  oilBarrels: {
    name: "Oil Barrel",
    description: "An oil barrel (bbl) = exactly 42 US gallons ≈ 158.99 L - established by the Pennsylvania oil industry in the 1860s and now the global petroleum standard. Global oil production, OPEC quotas, and crude spot prices are all quoted in barrels or Mb/d (millions of barrels per day); world consumption ~100 Mb/d in 2024. 'Bbl' derives from the 'blue barrel' mark on petroleum containers. 1 bbl = 42 US gal ≈ 159 L.",
    symbol: "bbl"
  },
  hogsheads: {
    name: "Hogshead",
    description: "A hogshead (hhd) = 63 US gallons ≈ 238.5 L - used in the spirits industry for maturing whiskey. Kentucky bourbon distilleries use hogsheads (63 gal) alongside standard barrels (53 gal); Scotch and Irish traders deal in hogsheads of maturing spirit. Colonial Virginia tobacco shipping records and 17th-19th-century trade manifests routinely quoted hogsheads. 1 hhd = 63 US gal ≈ 238.5 L.",
    symbol: "hhd"
  },
  pipes: {
    name: "Pipe",
    description: "A pipe (also called a butt) = 2 hogsheads = 126 US gallons ≈ 477 L. The traditional ageing vessel for Port and Madeira: Port lodges in Vila Nova de Gaia store hundreds of thousands of pipes of Tawny, Ruby, and Vintage Port. Sherry butts (identical vessel) hold ~600 L. Craft American distilleries use pipes for extended whiskey maturation. 1 pipe = 126 US gal ≈ 477 L.",
    symbol: "pipe"
  },
  cubicYards: {
    name: "Cubic Yard",
    description: "A cubic yard (yd³) = 27 ft³ ≈ 764.6 L. Standard unit for bulk construction materials in the US: concrete pours, mulch, topsoil, gravel, and fill dirt are ordered and delivered by the yard. A standard concrete mixer truck carries 8-10 yd³. Earth-moving and landfill capacity are measured in millions of cubic yards. One yd³ of concrete ≈4,000 lb. 1 yd³ = 27 ft³ ≈ 764.6 L.",
    symbol: "yd³"
  },
  tuns: {
    name: "Tun",
    description: "A tun = 4 hogsheads = 252 US gallons ≈ 953.9 L - the largest traditional wine cask and origin of the English word 'ton': a full tun of wine weighed ~1 long ton. English shipping law rated cargo capacity in 'tuns burden'. Scottish distilleries use 'tun rooms' for large vatting/blending vats. 1 tun = 252 US gal = 2 pipes = 4 hogsheads ≈ 953.9 L.",
    symbol: "tun"
  },
  kiloliters: {
    name: "Kiloliter",
    description: "A kiloliter (kL) = 1,000 L = 1 m³. Preferred in water management over 'cubic metre'. Municipal water bills in Australia and South Africa are issued in kL; pool and tank volumes are described in kL. A standard bathtub ≈0.3 kL; Olympic swimming pool 2,500 kL; annual household water use 50-150 kL/person. 1 kL = 1,000 L = 1 m³.",
    symbol: "kL"
  },
  cubicMeters: {
    name: "Cubic Meter",
    description: "A cubic meter (m³) is the SI derived unit of volume - the volume of a cube with sides of one meter - equal to 1,000 liters. It is the standard international unit for large fluid volumes, solid materials, and gas quantities. Concrete production and placement is measured in cubic meters; river discharge is reported in cubic meters per second (m³/s, or 'cumecs'); shipping container capacity is quoted in cubic meters; and natural gas is traded in standard cubic meters. An Olympic swimming pool holds 2,500 m³. One cubic meter of water has a mass of exactly 1,000 kg (one metric tonne).",
    symbol: "m³"
  },
  acrefeet: {
    name: "Acre-Foot",
    description: "An acre-foot (ac ft) = the volume covering 1 acre to 1 ft depth ≈ 1,233.5 m³ (325,851 US gal). Almost exclusively used in US water resource management. California's Lake Shasta: 4.55 million ac ft at capacity. A typical US household uses ~0.5-1 ac ft/year. Water rights on the Colorado and Sacramento rivers are traded in acre-feet. 1 ac ft ≈ 1,233.5 m³.",
    symbol: "ac ft"
  },
  megaliters: {
    name: "Megaliter",
    description: "A megaliter (ML) = 10⁶ L = 1,000 m³. Australian and New Zealand water utilities report consumption and storage in ML; dam storage levels are broadcast in ML on national weather services. An Olympic swimming pool holds 2.5 ML. Sydney's total drinking water storage >2.6 million ML. 1 ML = 10⁶ L = 1,000 m³.",
    symbol: "ML"
  },
  cubicKilometers: {
    name: "Cubic Kilometer",
    description: "A cubic kilometre (km³) = 10⁹ m³ = 10¹² L. Lake Baikal: 23,615 km³ (world's largest freshwater lake by volume). Amazon River discharge: ~6,600 km³/year. Earth's total freshwater: ~35,000,000 km³; oceans: ~1,335,000,000 km³. Glaciologists track polar ice-sheet losses in km³/year as a key climate metric. 1 km³ = 10⁹ m³.",
    symbol: "km³"
  },
  cubicMiles: {
    name: "Cubic Mile",
    description: "A cubic mile (mi³) ≈ 4.168 km³ = 4.168 × 10¹² L. Lake Superior: ~2,900 mi³ (world's largest freshwater lake by surface area). Total volume of all glaciers and ice caps (excl. Antarctica and Greenland): ~170,000 mi³. Volcanic magma chamber sizes and major US aquifer volumes are sometimes quoted in cubic miles in American geoscience literature. 1 mi³ ≈ 4.168 km³.",
    symbol: "mi³"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toLiters);
}

function convertVolume() {
  convertFactorBased(toLiters);
}

initConverterPage();
