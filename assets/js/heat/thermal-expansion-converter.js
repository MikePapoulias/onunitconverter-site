// Base unit: per kelvin (1/K) - SI derived unit for linear thermal expansion coefficient.
// All factors express how many 1/K equal 1 unit of the given measure.
//
// Exact foundations:
//   Temperature interval: 1 K = 1 \u00b0C (exact) \u2192 1/K = 1/\u00b0C (exact)
//   Temperature interval: 1 \u00b0F = 1 \u00b0R (exact) \u2192 1/\u00b0F = 1/\u00b0R (exact)
//   Kelvin-Fahrenheit: 1 K = 9/5 \u00b0F (exact) \u2192 1/\u00b0F = 9/5 \u00d7 1/K (exact)
//   ppm = 10\u207b\u2076 (exact); ppb = 10\u207b\u2079 (exact); % = 10\u207b\u00b2 (exact)
//   1 mm/(m\u00b7K) = 10\u207b\u00b3 /K (exact); 1 mK = 10\u207b\u00b3 K; 1 \u03bcK = 10\u207b\u2076 K (exact)

const toPerKelvin = {
  ppb_per_kelvin:                  1e-9,               // exact: 1 ppb = 10\u207b\u2079; 1 K = 1 K
  ppb_per_fahrenheit:              9 / 5 * 1e-9,       // exact: 1/\u00b0F = 9/5 /K; 1 ppb = 10\u207b\u2079
  ppm_per_kelvin:                  1e-6,               // exact: 1 ppm = 10\u207b\u2076 (= \u03bcm/(m\u00b7K))
  microns_per_metre_per_celsius:   1e-6,               // exact: 1 °C = 1 K (interval); = ppm/K
  ppm_per_fahrenheit:              9 / 5 * 1e-6,       // exact: 1/\u00b0F = 9/5 /K; 1 ppm = 10\u207b\u2076
  microinches_per_inch_per_fahrenheit: 9 / 5 * 1e-6,  // exact: 1/°F = 9/5 /K; = ppm/°F
  mm_per_metre_per_kelvin:         1e-3,               // exact: 1 mm/m = 10\u207b\u00b3
  mm_per_metre_per_celsius:        1e-3,               // exact: 1 °C = 1 K (interval); = mm/(m·K)
  mm_per_metre_per_fahrenheit:     9 / 5 * 1e-3,       // exact: 1/\u00b0F = 9/5 /K; 1 mm/m = 10\u207b\u00b3
  percent_per_kelvin:              1e-2,               // exact: 1 % = 10\u207b\u00b2
  percent_per_fahrenheit:          9 / 5 * 1e-2,       // exact: 1/\u00b0F = 9/5 /K; 1 % = 10\u207b\u00b2
  per_kelvin:                      1,                  // reference unit (SI base, = 1/\u00b0C)
  per_degree_celsius:              1,                  // exact: 1 °C = 1 K (interval); = 1/K
  per_degree_fahrenheit:           9 / 5,              // exact: 1/\u00b0F = 9/5 /K (= 1/\u00b0R)
  per_millikelvin:                 1e3,                // exact: 1/mK = 10\u00b3 /K
  per_microkelvin:                 1e6,                // exact: 1/\u03bcK = 10\u2076 /K
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  ppb_per_kelvin: {
    name: "Parts per billion per kelvin",
    description: "The ppb/K (parts per billion per kelvin) equals 10\u207b\u2079 /K and is the resolution unit for ultra-low-CTE materials. Zerodur Class 0 (\u00b10.02 ppb/K) and ULE titanium-silicate glass (\u00b10.03 ppb/K) at 20 \u00b0C are characterised in ppb/K for gravitational-wave interferometers and space telescope optical benches. 1 ppb/K = 10\u207b\u2079 /K = 10\u207b\u00b3 ppm/K.",
    symbol: "ppb/K"
  },
  ppb_per_fahrenheit: {
    name: "Parts per billion per degree Fahrenheit",
    description: "The ppb/\u00b0F equals 9/5 \u00d7 10\u207b\u2079 /K \u22481.8 \u00d7 10\u207b\u2079 /K, the Fahrenheit counterpart of ppb/K. Used when ultra-low-expansion glass ceramics are characterised in US laboratories using Fahrenheit protocols. Zerodur at \u00b10.02 ppb/K \u2248 \u00b10.011 ppb/\u00b0F. 1 ppb/\u00b0F = 9/5 \u00d7 10\u207b\u2079 /K \u22481.8 ppb/K.",
    symbol: "ppb/\u00b0F"
  },
  ppm_per_kelvin: {
    name: "Parts per million per kelvin",
    description: "The ppm/K (= \u03bcm/(m\u00b7K) exactly) equals 10\u207b\u2076 /K and is the universal CTE unit in international materials standards (ISO, EN, DIN). Aluminium: 23.1 ppm/K; steel: \u224812 ppm/K; ordinary glass: \u22489 ppm/K; fused silica: 0.55 ppm/K; Invar: \u22481.2 ppm/K. 1 ppm/K = 10\u207b\u2076 /K.",
    symbol: "ppm/K"
  },
  microns_per_metre_per_celsius: {
    name: "Microns per metre per degree Celsius",
    description: "The micrometre per metre per degree Celsius (μm/(m·°C)) equals exactly 10⁻⁶ /K, since temperature intervals 1 °C = 1 K (exact). It is the standard CTE notation in European engineering datasheets, ISO material standards, and many textbooks. Numerically identical to ppm/K. Aluminium: 23.1 μm/(m·°C); steel: ≈12 μm/(m·°C). 1 μm/(m·°C) = 1 ppm/K = 10⁻⁶ /K.",
    symbol: "μm/(m·°C)"
  },
  ppm_per_fahrenheit: {
    name: "Parts per million per degree Fahrenheit",
    description: "The ppm/\u00b0F (= \u03bcin/(in\u00b7\u00b0F) exactly) equals 9/5 \u00d7 10\u207b\u2076 /K \u22481.8 \u00d7 10\u207b\u2076 /K and is the dominant CTE unit in US ASTM standards, ASME piping codes, and mechanical engineering handbooks. Steel \u22486.7 ppm/\u00b0F; aluminium \u224812.8 ppm/\u00b0F; copper \u22489.4 ppm/\u00b0F. 1 ppm/\u00b0F = 9/5 \u00d7 10\u207b\u2076 /K.",
    symbol: "ppm/\u00b0F"
  },
  microinches_per_inch_per_fahrenheit: {
    name: "Microinches per inch per degree Fahrenheit",
    description: "The microinch per inch per degree Fahrenheit (μin/(in·°F)) equals exactly 9/5 × 10⁻⁶ /K = 1 ppm/°F. It is the native US CTE unit in ASTM E228 and ASTM E831 standards; most US material datasheets list CTE values in this unit. Steel: ≈6.7 μin/(in·°F); aluminium: ≈12.8 μin/(in·°F); titanium: ≈4.9 μin/(in·°F). 1 μin/(in·°F) = 1 ppm/°F.",
    symbol: "μin/(in·°F)"
  },
  mm_per_metre_per_kelvin: {
    name: "Millimetres per metre per kelvin",
    description: "The mm/(m\u00b7K) equals exactly 10\u207b\u00b3 /K = 1000 ppm/K and is used in structural and civil engineering for bridge girder and pipeline thermal-expansion calculations. Steel at 0.012 mm/(m\u00b7K) expands 12 mm per 100 m track per 10 K rise. Polymers: 0.07-0.20 mm/(m\u00b7K). 1 mm/(m\u00b7K) = 10\u207b\u00b3 /K = 1000 ppm/K.",
    symbol: "mm/(m\u00b7K)"
  },
  mm_per_metre_per_celsius: {
    name: "Millimetres per metre per degree Celsius",
    description: "The millimetre per metre per degree Celsius (mm/(m·°C)) equals exactly 10⁻³ /K = 1 mm/(m·K), since temperature intervals 1 °C = 1 K (exact). Used in European structural engineering, EN standards, and civil/mechanical design codes for expansion joint sizing. Steel rail: 0.012 mm/(m·°C); aluminium curtain wall: 0.023 mm/(m·°C). 1 mm/(m·°C) = 10⁻³ /K = 1 mm/(m·K).",
    symbol: "mm/(m·°C)"
  },
  mm_per_metre_per_fahrenheit: {
    name: "Millimetres per metre per degree Fahrenheit",
    description: "The mm/(m\u00b7\u00b0F) equals 9/5 \u00d7 10\u207b\u00b3 /K \u22481.8 \u00d7 10\u207b\u00b3 /K, combining metric displacement with Fahrenheit temperature. It appears in US-origin pipeline and structural reports where dimensions are given in metres but temperatures in \u00b0F. Steel: \u22480.00667 mm/(m\u00b7\u00b0F); aluminium: \u22480.01283 mm/(m\u00b7\u00b0F). 1 mm/(m\u00b7\u00b0F) = 9/5 \u00d7 10\u207b\u00b3 /K.",
    symbol: "mm/(m\u00b7\u00b0F)"
  },
  percent_per_kelvin: {
    name: "Percent per kelvin",
    description: "The %/K equals exactly 10\u207b\u00b2 /K = 10 000 ppm/K and is used for high-CTE materials such as polymers, foams, and rubber. PTFE: \u22480.0135 %/K; HDPE: \u22480.015 %/K; natural rubber: \u22480.06 %/K; silicone rubber: \u22480.10 %/K. 1 %/K = 10\u207b\u00b2 /K = 10 mm/(m\u00b7K) = 10 000 ppm/K.",
    symbol: "%/K"
  },
  percent_per_fahrenheit: {
    name: "Percent per degree Fahrenheit",
    description: "The %/\u00b0F equals 9/5 \u00d7 10\u207b\u00b2 /K \u2248 0.018 /K, the Fahrenheit percent-expansion unit used in US polymer and rubber industry specifications. PTFE: \u22480.0075 %/\u00b0F; HDPE: \u22480.0083 %/\u00b0F; silicone rubber: \u22480.056 %/\u00b0F. 1 %/\u00b0F = 9/5 \u00d7 10\u207b\u00b2 /K \u22481.8 %/K.",
    symbol: "%/\u00b0F"
  },
  per_kelvin: {
    name: "Per kelvin",
    description: "The per kelvin (1/K = K\u207b\u00b9) is the SI unit for linear thermal expansion coefficient (\u03b1 = (1/L) dL/dT). Used in NIST databases, FEA material cards, and thermodynamics textbooks. Liquid mercury: \u22486.1 \u00d7 10\u207b\u2075 /K; aluminium: \u22482.3 \u00d7 10\u207b\u2075 /K; fused silica: \u22485.5 \u00d7 10\u207b\u2077 /K. 1 /K = 10\u2076 ppm/K = 1/\u00b0C.",
    symbol: "1/K"
  },
  per_degree_celsius: {
    name: "Per degree Celsius",
    description: "The per degree Celsius (1/°C = °C⁻¹) equals exactly 1/K since temperature intervals 1 °C = 1 K (exact). Common in European and ISO standards, chemistry textbooks, and physics literature as an alternative notation for the SI unit 1/K. A material with α = 12 × 10⁻⁶ /K is identically expressed as 12 × 10⁻⁶ /°C. 1 /°C = 1 /K = 10⁶ ppm/K.",
    symbol: "1/°C"
  },
  per_degree_fahrenheit: {
    name: "Per degree Fahrenheit",
    description: "The per degree Fahrenheit (1/\u00b0F = \u00b0F\u207b\u00b9) equals exactly 9/5 /K = 1.8 /K and is the imperial counterpart of the SI unit. Found in ASME boiler and pressure vessel codes, ASHRAE engineering tables, and UL material data sheets. Iron: \u22486.7 \u00d7 10\u207b\u2076 /\u00b0F; ordinary glass: \u22484.9 \u00d7 10\u207b\u2076 /\u00b0F. 1 /\u00b0F = 9/5 /K (= 1/\u00b0R).",
    symbol: "1/\u00b0F"
  },
  per_millikelvin: {
    name: "Per millikelvin",
    description: "The per millikelvin (1/mK) equals exactly 10\u00b3 /K and is encountered in cryogenic physics where working temperatures lie in the millikelvin range. Near quantum phase transitions and magnetic ordering temperatures, anomalous CTE values can reach orders far above room-temperature CTE. 1 /mK = 10\u00b3 /K = 10\u2079 ppm/K.",
    symbol: "1/mK"
  },
  per_microkelvin: {
    name: "Per microkelvin",
    description: "The per microkelvin (1/\u03bcK) equals exactly 10\u2076 /K. It is used in ultra-precision experiments probing anomalous thermal expansion extremely close to second-order phase transitions, such as the superfluid He-4 lambda point (2.1768 K) and magnetic phase boundaries in rare-earth compounds. 1 /\u03bcK = 10\u2076 /K = 10\u00b9\u00b2 ppm/K.",
    symbol: "1/\u03bcK"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toPerKelvin);
}

function convertThermalExpansion() {
  convertFactorBased(toPerKelvin);
}

initConverterPage();
