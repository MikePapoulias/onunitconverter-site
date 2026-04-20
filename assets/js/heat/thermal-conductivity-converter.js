// Base unit: watt per metre kelvin (W/(m·K)) - the SI unit for thermal conductivity.
// All factors express how many W/(m·K) equal 1 unit of the given measure.
//
// Exact foundations:
//   1 W/(m·K) = 1 W/(m·°C)  (exact: temperature interval 1 K = 1 °C)
//   1 BTU(IT) = 1055.05585262 J  (exact, ASTM/ISO definition)
//   1 kcal(IT) = 4186.8 J  (exact, international table)
//   1 cal(th) = 4.184 J  (exact, thermochemical calorie)
//   1 cal(IT) = 4.1868 J  (exact, international table calorie)
//   1 ft = 0.3048 m  (exact, international foot 1959)
//   1 in = 0.0254 m  (exact, international inch 1959)
//   1 h = 3600 s  (exact);  1 °F = 5/9 K  (exact)
//   1 cm = 0.01 m  (exact);  1 mW = 10\u207b\u00b3 W  (exact);  1 kW = 10\u00b3 W  (exact);  1 MW = 10\u2076 W  (exact);  1 \u00b5W = 10\u207b\u2076 W  (exact);  1 mm = 10\u207b\u00b3 m  (exact)

const toWattPerMetreKelvin = {
  microwatt_per_metre_kelvin:           1e-6,                                                         // exact: 1 \u00b5W = 10\u207b\u2076 W
  milliwatt_per_metre_kelvin:           1e-3,                                                         // exact: 1 mW = 10\u207b\u00b3 W
  milliwatt_per_metre_celsius:          1e-3,                                                         // exact: 1 mW/(m\u00b7\u00b0C) = 1 mW/(m\u00b7K)  (temperature interval 1 \u00b0C = 1 K)
  milliwatt_per_centimetre_kelvin:      1e-3 / 1e-2,                                                  // exact: 1 mW = 10\u207b\u00b3 W; 1 cm = 10\u207b\u00b2 m  \u2192 0.1 W/(m\u00b7K)
  btu_inch_per_hour_sqft_degf:          1055.05585262 * 0.0254 * 9 / (3600 * 0.09290304 * 5),        // exact: 1 BTU(IT) = 1055.05585262 J; 1 in = 0.0254 m; 1 ft\u00b2 = 0.09290304 m\u00b2; 1 h = 3600 s; 1 \u00b0F = 5/9 K
  watt_per_metre_kelvin:                1,                                                             // reference unit (SI)
  watt_per_metre_celsius:               1,                                                             // exact: 1 \u00b0C = 1 K  (temperature interval)
  kcal_per_metre_hour_celsius:          4186.8 / 3600,                                                // exact: 1 kcal(IT) = 4186.8 J; 1 h = 3600 s  \u2192 1.163 W/(m\u00b7K) exactly
  btu_per_hour_foot_degf:               1055.05585262 * 9 / (3600 * 0.3048 * 5),                     // exact: 1 BTU(IT) = 1055.05585262 J; 1 ft = 0.3048 m; 1 h = 3600 s; 1 \u00b0F = 5/9 K
  watt_per_centimetre_kelvin:           1e2,                                                           // exact: 1 cm = 10\u207b\u00b2 m  \u2192 1/10\u207b\u00b2 = 100 W/(m\u00b7K)
  kcal_per_centimetre_hour_celsius:     4186.8 / (3600 * 1e-2),                                       // exact: 1 kcal(IT) = 4186.8 J; 1 h = 3600 s; 1 cm = 10\u207b\u00b2 m  \u2192 116.3 W/(m\u00b7K) exactly
  cal_th_per_centimetre_second_celsius: 4.184 / 1e-2,                                                 // exact: 1 cal(th) = 4.184 J; 1 cm = 10\u207b\u00b2 m  \u2192 418.4 W/(m\u00b7K)
  cal_it_per_centimetre_second_celsius: 4.1868 / 1e-2,                                                // exact: 1 cal(IT) = 4.1868 J; 1 cm = 10\u207b\u00b2 m  \u2192 418.68 W/(m\u00b7K)
  kilowatt_per_metre_kelvin:            1e3,                                                           // exact: 1 kW = 10\u00b3 W
  kilowatt_per_metre_celsius:           1e3,                                                           // exact: 1 kW/(m\u00b7\u00b0C) = 1 kW/(m\u00b7K)  (temperature interval 1 \u00b0C = 1 K)
  watt_per_millimetre_kelvin:           1 / 1e-3,                                                     // exact: 1 mm = 10\u207b\u00b3 m  \u2192 1/10\u207b\u00b3 = 1000 W/(m\u00b7K)
  btu_per_second_foot_degf:             1055.05585262 * 9 / (0.3048 * 5),                             // exact: 1 BTU(IT) = 1055.05585262 J; 1 ft = 0.3048 m; 1 \u00b0F = 5/9 K  \u2192 \u22486230.6 W/(m\u00b7K)
  megawatt_per_metre_kelvin:            1e6,                                                           // exact: 1 MW = 10\u2076 W
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  microwatt_per_metre_kelvin: {
    name: "Microwatt per metre kelvin",
    description: "The microwatt per metre kelvin (\u00b5W/(m\u00b7K)) equals exactly 10\u207b\u2076 W/(m\u00b7K). Used for near-vacuum conditions and evacuated superinsulation systems where the effective thermal conductivity falls well below the mW/(m\u00b7K) range. Evacuated multi-layer insulation (MLI) at high vacuum can reach 0.001-10 \u00b5W/(m\u00b7K) effective conductivity. Completes the SI prefix chain below mW/(m\u00b7K). 1 \u00b5W/(m\u00b7K) = 10\u207b\u2076 W/(m\u00b7K) = 10\u207b\u00b3 mW/(m\u00b7K).",
    symbol: "\u00b5W/(m\u00b7K)"
  },
  milliwatt_per_metre_kelvin: {
    name: "Milliwatt per metre kelvin",
    description: "The milliwatt per metre kelvin (mW/(m\u00b7K)) equals exactly 10\u207b\u00b3 W/(m\u00b7K). Used for gases and ultra-low thermal conductivity solids: still air \u224826 mW/(m\u00b7K), CO\u2082 \u224816 mW/(m\u00b7K), aerogels 12-20 mW/(m\u00b7K), vacuum insulation panels \u22485 mW/(m\u00b7K). Standard insulation products are typically specified in mW/(m\u00b7K). 1 mW/(m\u00b7K) = 10\u207b\u00b3 W/(m\u00b7K) = 0.1 mW/(cm\u00b7K).",
    symbol: "mW/(m\u00b7K)"
  },
  milliwatt_per_metre_celsius: {
    name: "Milliwatt per metre degree Celsius",
    description: "The milliwatt per metre degree Celsius (mW/(m\u00b7\u00b0C)) equals exactly 1 mW/(m\u00b7K) = 10\u207b\u00b3 W/(m\u00b7K) since temperature intervals 1 \u00b0C = 1 K. Used interchangeably with mW/(m\u00b7K) in building physics, insulation standards (EN ISO 10456), and material datasheets where Celsius is the preferred temperature scale. Still air \u224826 mW/(m\u00b7\u00b0C); mineral wool \u224835 mW/(m\u00b7\u00b0C). 1 mW/(m\u00b7\u00b0C) = 1 mW/(m\u00b7K) = 10\u207b\u00b3 W/(m\u00b7K).",
    symbol: "mW/(m\u00b7\u00b0C)"
  },
  milliwatt_per_centimetre_kelvin: {
    name: "Milliwatt per centimetre kelvin",
    description: "The milliwatt per centimetre kelvin (mW/(cm\u00b7K)) equals exactly 0.1 W/(m\u00b7K). Used in semiconductor and thermoelectric materials research: bismuth telluride \u224815 mW/(cm\u00b7K), yttria-stabilised zirconia \u22482 mW/(cm\u00b7K). Bridges the scale gap between mW/(m\u00b7K) for insulators and W/(m\u00b7K) for bulk solids. 1 mW/(cm\u00b7K) = 0.1 W/(m\u00b7K) = 100 mW/(m\u00b7K).",
    symbol: "mW/(cm\u00b7K)"
  },
  btu_inch_per_hour_sqft_degf: {
    name: "BTU inch per hour per square foot per degree Fahrenheit",
    description: "The BTU\u00b7in/(h\u00b7ft\u00b2\u00b7\u00b0F) equals (1055.05585262 \u00d7 0.0254 \u00d7 9)/(3600 \u00d7 0.09290304 \u00d7 5) W/(m\u00b7K) \u22480.1442 W/(m\u00b7K). The standard US k-factor unit for insulation per ASTM C177, C335, and C518. Mineral wool \u22480.25; expanded polystyrene \u22480.24; polyurethane foam \u22480.14 BTU\u00b7in/(h\u00b7ft\u00b2\u00b7\u00b0F). 1 BTU\u00b7in/(h\u00b7ft\u00b2\u00b7\u00b0F) \u22480.1442 W/(m\u00b7K).",
    symbol: "BTU\u00b7in/(h\u00b7ft\u00b2\u00b7\u00b0F)"
  },
  watt_per_metre_kelvin: {
    name: "Watt per metre kelvin",
    description: "The watt per metre kelvin (W/(m\u00b7K)) is the SI unit for thermal conductivity defined by Fourier's law q = -\u03bb\u2207T. Materials span orders of magnitude: aerogels \u22480.015, glass \u22481.0, stainless steel \u224816, aluminium \u2248205, copper \u2248385, diamond \u22482200 W/(m\u00b7K). Referenced in ISO 22007, EN 12667, and all major international standards. 1 W/(m\u00b7K) = 1 W/(m\u00b7\u00b0C).",
    symbol: "W/(m\u00b7K)"
  },
  watt_per_metre_celsius: {
    name: "Watt per metre degree Celsius",
    description: "The watt per metre degree Celsius (W/(m\u00b7\u00b0C)) equals exactly 1 W/(m\u00b7K) since temperature intervals 1 \u00b0C = 1 K. Widely used in building physics (EN ISO 6946), HVAC engineering, and European material datasheets as an equivalent notation. Stone: \u22482.5 W/(m\u00b7\u00b0C); softwood timber: \u22480.14 W/(m\u00b7\u00b0C); glass wool: \u22480.04 W/(m\u00b7\u00b0C). 1 W/(m\u00b7\u00b0C) = 1 W/(m\u00b7K).",
    symbol: "W/(m\u00b7\u00b0C)"
  },
  kcal_per_metre_hour_celsius: {
    name: "Kilocalorie per metre per hour per degree Celsius",
    description: "The kcal/(m\u00b7h\u00b7\u00b0C) equals exactly 4186.8/3600 W/(m\u00b7K) = 1.163 W/(m\u00b7K) (1 kcal(IT) = 4186.8 J). Used in pre-SI continental European engineering literature, older DIN/BS standards, and Soviet-era technical documentation. Brick: \u22480.6; dense concrete: \u22481.3; carbon steel: \u224838 kcal/(m\u00b7h\u00b7\u00b0C). 1 kcal/(m\u00b7h\u00b7\u00b0C) = 1.163 W/(m\u00b7K).",
    symbol: "kcal/(m\u00b7h\u00b7\u00b0C)"
  },
  btu_per_hour_foot_degf: {
    name: "BTU per hour per foot per degree Fahrenheit",
    description: "The BTU/(h\u00b7ft\u00b7\u00b0F) equals (1055.05585262 \u00d7 9)/(3600 \u00d7 0.3048 \u00d7 5) W/(m\u00b7K) \u22481.7307 W/(m\u00b7K). Standard US thermal conductivity unit in ASHRAE Handbook and ASTM C1045. Copper: \u2248223; carbon steel: \u224826; brick: \u22480.44; glass fibre insulation: \u22480.025 BTU/(h\u00b7ft\u00b7\u00b0F). 1 BTU/(h\u00b7ft\u00b7\u00b0F) = 12 BTU\u00b7in/(h\u00b7ft\u00b2\u00b7\u00b0F) \u22481.7307 W/(m\u00b7K).",
    symbol: "BTU/(h\u00b7ft\u00b7\u00b0F)"
  },
  watt_per_centimetre_kelvin: {
    name: "Watt per centimetre kelvin",
    description: "The watt per centimetre kelvin (W/(cm\u00b7K)) equals exactly 100 W/(m\u00b7K). Used for highly conductive materials in electronics and cryogenics: silver \u22484.29, copper \u22483.85, aluminium \u22482.05 W/(cm\u00b7K); synthetic diamond \u224822 W/(cm\u00b7K). Common in semiconductor and power device literature where component dimensions are centimetre-scale. 1 W/(cm\u00b7K) = 100 W/(m\u00b7K).",
    symbol: "W/(cm\u00b7K)"
  },
  kcal_per_centimetre_hour_celsius: {
    name: "Kilocalorie per centimetre per hour per degree Celsius",
    description: "The kcal/(cm\u00b7h\u00b7\u00b0C) equals exactly 4186.8/36 W/(m\u00b7K) = 116.3 W/(m\u00b7K) (1 kcal(IT) = 4186.8 J; 1 h = 3600 s; 1 cm = 0.01 m). Used in older CGS-metric European and Soviet literature for metallic heat transfer. Steel: \u22480.137; copper: \u22483.31 kcal/(cm\u00b7h\u00b7\u00b0C). 1 kcal/(cm\u00b7h\u00b7\u00b0C) = 116.3 W/(m\u00b7K) = 100 \u00d7 kcal/(m\u00b7h\u00b7\u00b0C).",
    symbol: "kcal/(cm\u00b7h\u00b7\u00b0C)"
  },
  cal_th_per_centimetre_second_celsius: {
    name: "Thermochemical calorie per centimetre per second per degree Celsius",
    description: "The cal(th)/(cm\u00b7s\u00b7\u00b0C) equals exactly 4.184/0.01 = 418.4 W/(m\u00b7K) (1 thermochemical calorie = 4.184 J). The CGS thermal conductivity unit dominant in US physics and chemistry before SI adoption. Copper: \u22480.921; aluminium: \u22480.489 cal(th)/(cm\u00b7s\u00b7\u00b0C). Not equal to cal(IT)/(cm\u00b7s\u00b7\u00b0C). 1 cal(th)/(cm\u00b7s\u00b7\u00b0C) = 418.4 W/(m\u00b7K).",
    symbol: "cal(th)/(cm\u00b7s\u00b7\u00b0C)"
  },
  cal_it_per_centimetre_second_celsius: {
    name: "International table calorie per centimetre per second per degree Celsius",
    description: "The cal(IT)/(cm\u00b7s\u00b7\u00b0C) equals exactly 4.1868/0.01 = 418.68 W/(m\u00b7K) (1 international table calorie = 4.1868 J). Used in pre-SI thermodynamics, steam tables, and international heat transfer references. Copper: \u22480.920 cal(IT)/(cm\u00b7s\u00b7\u00b0C). Slightly larger than cal(th)/(cm\u00b7s\u00b7\u00b0C). 1 cal(IT)/(cm\u00b7s\u00b7\u00b0C) = 418.68 W/(m\u00b7K).",
    symbol: "cal(IT)/(cm\u00b7s\u00b7\u00b0C)"
  },
  kilowatt_per_metre_kelvin: {
    name: "Kilowatt per metre kelvin",
    description: "The kilowatt per metre kelvin (kW/(m\u00b7K)) equals exactly 1000 W/(m\u00b7K). Used for exceptionally conductive materials: type IIa diamond \u22482.2 kW/(m\u00b7K), isotopically pure \u00b2\u2078Si \u22481.0 kW/(m\u00b7K), single-crystal graphene > 5 kW/(m\u00b7K) at room temperature. Convenient for comparing advanced thermal management and heat spreader materials. 1 kW/(m\u00b7K) = 1000 W/(m\u00b7K).",
    symbol: "kW/(m\u00b7K)"
  },
  kilowatt_per_metre_celsius: {
    name: "Kilowatt per metre degree Celsius",
    description: "The kilowatt per metre degree Celsius (kW/(m\u00b7\u00b0C)) equals exactly 1 kW/(m\u00b7K) = 1000 W/(m\u00b7K) since temperature intervals 1 \u00b0C = 1 K. An alternative notation for kW/(m\u00b7K) used in European engineering and scientific literature. Type IIa diamond \u22482.2 kW/(m\u00b7\u00b0C); crystalline silicon \u22480.14 kW/(m\u00b7\u00b0C); \u00b2\u2078Si single crystal \u22481.0 kW/(m\u00b7\u00b0C). 1 kW/(m\u00b7\u00b0C) = 1 kW/(m\u00b7K) = 1000 W/(m\u00b7K).",
    symbol: "kW/(m\u00b7\u00b0C)"
  },
  watt_per_millimetre_kelvin: {
    name: "Watt per millimetre kelvin",
    description: "The watt per millimetre kelvin (W/(mm\u00b7K)) equals exactly 1000 W/(m\u00b7K) since 1 mm = 10\u207b\u00b3 m. Used in microelectronics thermal engineering where components are millimetre-scale: copper \u22480.385, silicon \u22480.148 W/(mm\u00b7K). Thermal interface material datasheets for high-performance pads and solder joints commonly use this unit. 1 W/(mm\u00b7K) = 1000 W/(m\u00b7K) = 10 W/(cm\u00b7K).",
    symbol: "W/(mm\u00b7K)"
  },
  btu_per_second_foot_degf: {
    name: "BTU per second per foot per degree Fahrenheit",
    description: "The BTU per second per foot per degree Fahrenheit (BTU/(s\u00b7ft\u00b7\u00b0F)) equals (1055.05585262 \u00d7 9)/(0.3048 \u00d7 5) W/(m\u00b7K) \u22486230.6 W/(m\u00b7K). Equal to 3600 \u00d7 BTU/(h\u00b7ft\u00b7\u00b0F). Reserved for extremely high-power transient applications in US engineering literature; copper \u22480.0617; carbon steel \u22480.0072 BTU/(s\u00b7ft\u00b7\u00b0F). 1 BTU/(s\u00b7ft\u00b7\u00b0F) = 3600 BTU/(h\u00b7ft\u00b7\u00b0F) \u22486230.6 W/(m\u00b7K).",
    symbol: "BTU/(s\u00b7ft\u00b7\u00b0F)"
  },
  megawatt_per_metre_kelvin: {
    name: "Megawatt per metre kelvin",
    description: "The megawatt per metre kelvin (MW/(m\u00b7K)) equals exactly 10\u2076 W/(m\u00b7K). A theoretical and research unit for modelling exotic or nanostructured materials: theoretical carbon nanotube axial conductivity predictions and astrophysical plasma heat transport can reach the MW/(m\u00b7K) range. No bulk engineering material approaches this value. 1 MW/(m\u00b7K) = 10\u2076 W/(m\u00b7K) = 1000 kW/(m\u00b7K).",
    symbol: "MW/(m\u00b7K)"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toWattPerMetreKelvin);
}

function convertThermalConductivity() {
  convertFactorBased(toWattPerMetreKelvin);
}

initConverterPage();
