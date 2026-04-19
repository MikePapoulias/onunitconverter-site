// Base unit: cubic metres (m3)
// All factors express how many cubic metres equal 1 unit of the given measure.
//
// Exact foundations:
//   1 in  = 0.0254 m  (international inch, defined 1959)
//   1 ft  = 0.3048 m  (international foot = 12 in, exact)
//   1 yd  = 0.9144 m  (international yard = 3 ft, exact)
//   1 ft3 = 0.3048^3  = 0.028316846592 m3 (exact)
//   1 in3 = 0.0254^3  = 0.00001638706400000000 m3 (exact)
//   1 board foot (bf) = 144 in3 = 0.002359737216 m3 (exact)
//   pi used for Hoppus units = Math.PI (IEEE 754 double)

const _FT3 = 0.028316846592;        // 1 ft3 in m3 (exact)
const _BF  = 144 * 0.00001638706400000000; // 1 board foot = 144 in3 = 0.002359737216 m3 (exact)

const toLumberM3 = {
  board_feet:           _BF,                      // 0.002359737216 m3 (exact: 144 in3)
  cord_feet:            16 * _FT3,                // 0.45306954547200 m3 (16 ft3, exact)
  hoppus_feet:          Math.PI / 4 * _FT3,       // ~0.022239999306564 m3 (pi/4 ft3)
  cubic_feet:           _FT3,                     // 0.028316846592 m3 (exact)
  cubic_yards:          Math.pow(0.9144, 3),       // 0.764554857984 m3 (exact)
  steres:               1,                         // 1 m3 (exact, stere = 1 m3 by definition)
  cubic_metres:         1,                         // base unit
  loads:                40 * _FT3,                // 1.132673863680 m3 (UK timber load = 40 ft3, exact)
  hoppus_tons:          50 * Math.PI / 4 * _FT3, // ~1.111999965328205 m3 (50 Hoppus feet)
  cords:                128 * _FT3,               // 3.624556363776 m3 (128 ft3, exact)
  petrograd_standards:  165 * _FT3,               // 4.672279687680 m3 (165 ft3, exact)
  timber_fathoms:       216 * _FT3,               // 6.116438863872 m3 (6x6x6 ft, exact)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  board_feet: {
    name: "Board foot",
    description: "The board foot (bf) is the standard lumber-trade unit in the USA, Canada, and the Philippines: 1 ft × 1 ft × 1 in = 144 in³ = 0.002359737216 m³ (exact). Always calculated from nominal dimensions - a 1×6×8 ft board = 4 bf nominal, actual dressed volume is less. Hardwood lumber priced from ~$2/bf (common poplar) to $100+/bf (premium walnut). Log rules: Doyle (SE USA), Scribner (Pacific NW), International ΒΌ-inch (most accurate). 1 bf = 144 in³ = 0.00236 m³ ≈ 1/12 ft³.",
    symbol: "bf"
  },
  cord_feet: {
    name: "Cord foot",
    description: "A cord foot = 1/8 cord: a stack of firewood 4 ft wide × 4 ft tall × 1 ft deep = 16 ft³ = 0.45307 m³. Used in New England pulpwood purchasing and regulated by NIST Handbook 44. Actual solid wood content is only 60-80% of the nominal volume - the rest is air space between logs. 1 cord foot = 16 ft³ = 0.45307 m³ = 1/8 cord.",
    symbol: "cord ft"
  },
  hoppus_feet: {
    name: "Hoppus foot",
    description: "The Hoppus foot (H ft) is a British-Commonwealth round-log unit devised by Edward Hoppus (1736): V(H ft) = (girth/4 in)² × length/ft, yielding Ο€/4 of the true cylindrical volume ≈ 78.54% - the usable square-sawn fraction. Replaced by m³ in UK trade (1963) but still used in Sri Lanka, Malaysia, Myanmar, and Bangladesh. 1 H ft = Ο€/4 ft³ ≈ 0.02224 m³.",
    symbol: "H ft"
  },
  cubic_feet: {
    name: "Cubic foot",
    description: "The cubic foot (ft³) = 0.028316846592 m³ (exact) - the primary US lumber volume unit for large structural timber; also underlies the cord (128 ft³) and board foot (1 bf = 1/12 ft³ nominal). US Forest Service sale contracts specify cruise volumes in Mbf or ft³. Export docs for EU/Asia convert to m³: 1 m³ = 35.315 ft³. 1 ft³ = 0.02832 m³ = 1,728 in³ ≈ 12 bf.",
    symbol: "ft³"
  },
  cubic_yards: {
    name: "Cubic yard",
    description: "The cubic yard (yd³) = 27 ft³ = 0.764554857984 m³ (exact). Standard unit for bulk wood by-products in North America: landscaping bark mulch ~$25-70/yd³, wood chips for biomass boilers, timber crib-wall volumes. Typical residential mulch job: 5-15 yd³. Arborist chips ≈ 180-200 lb/yd³ fresh. 1 yd³ = 27 ft³ = 0.7646 m³ ≈ 324 bf.",
    symbol: "yd³"
  },
  steres: {
    name: "Stere",
    description: "The stere (st) = exactly 1 m³ - a metric firewood unit from the 1793 French Republican system. Still used colloquially in France, Germany, and Switzerland: Ster/Raummeter (stacked m³), Festmeter (solid m³ = fm), SchΓΌttraummeter (loose chips ≈ 0.4 fm). One stacked stere contains ≈ 0.5-0.7 m³ of actual solid wood. 1 stere = 1 m³ = 35.315 ft³ ≈ 424 bf.",
    symbol: "st"
  },
  cubic_metres: {
    name: "Cubic metre",
    description: "The cubic metre (m³) is the SI unit for all international timber trade and FAO forest statistics. Global roundwood production > 4 billion m³/year (2022); sawnwood ≈ 500 million m³/year. European C24 structural timber priced in EUR/m³; CLT mass-timber buildings use 500-2,000 m³ of panels. FSC/PEFC chain-of-custody tracks certified fibre in m³. 1 m³ = 1 stere = 35.315 ft³ ≈ 423.8 bf.",
    symbol: "m³"
  },
  loads: {
    name: "Load",
    description: "The load (statutory load) is a traditional English round-timber unit = 40 ft³ = 1.13267 m³, established under the 1842 Weights and Measures Act. Used in Royal Navy timber procurement (oak, elm for warships) and 18th-19th-century estate forestry accounts. No longer a legal trade unit after the Weights and Measures Act 1963. 1 load = 40 ft³ = 1.1327 m³ ≈ 480 bf.",
    symbol: "load"
  },
  hoppus_tons: {
    name: "Hoppus ton",
    description: "The Hoppus ton (H ton) = 50 Hoppus feet = 50 × (Ο€/4) ft³ ≈ 1.112 m³. The '50' approximated one ton of tropical hardwood by weight (teak/mahogany at 700-900 kg/m³ × 1.112 m³ ≈ 0.9 metric ton). Standard for British colonial timber imports - teak from Burma, iroko from West Africa, meranti from SE Asia. Superseded by m³ after metrication. 1 H ton = 50 H ft ≈ 1.112 m³.",
    symbol: "H ton"
  },
  cords: {
    name: "Cord",
    description: "The cord is the standard North American firewood/pulpwood unit = 4 ft × 4 ft × 8 ft stacked = 128 ft³ = 3.6246 m³ (exact). NIST Handbook 44 requires all US firewood to be sold in cords or legal fractions. Seasoned split hardwood ≈ 20-24 million BTU/cord; air-dry pine ≈ 15-18 million BTU/cord. 'Face cord' or 'rick' is NOT a legal unit. 1 cord = 128 ft³ = 3.6246 m³ = 8 cord feet.",
    symbol: "cord"
  },
  petrograd_standards: {
    name: "Petrograd standard",
    description: "The Petrograd standard (St Petersburg standard) = 165 ft³ = 4.6723 m³, representing 120 pieces of dressed Baltic softwood 12 ft × 11 in × 1.5 in = 165 ft³ exactly. Dominated 18th-19th century Baltic-to-Britain sawn-timber export trade from St Petersburg, Riga, and Danzig. Replaced by m³ in UK trade during 1970s metrication. 1 Petrograd standard = 165 ft³ = 4.6723 m³ ≈ 1,980 bf.",
    symbol: "Pet. std"
  },
  timber_fathoms: {
    name: "Timber fathom",
    description: "The timber fathom is an archaic Scottish/N.English unit = 6 ft × 6 ft × 6 ft = 216 ft³ = 6.1164 m³ (not to be confused with the nautical fathom of water depth = 6 ft length). Used in Scottish estate forestry and Lanarkshire mine pit-prop purchasing; surveyors stacked poles in a 6×6×6 ft crib to measure delivery. Superseded by ft³ and load by late 19th century. 1 timber fathom = 216 ft³ = 6.1164 m³ ≈ 2,592 bf.",
    symbol: "tim. fath."
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toLumberM3);
}

function convertLumber() {
  convertFactorBased(toLumberM3);
}

initConverterPage();
