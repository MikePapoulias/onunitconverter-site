// Base unit: kelvin per watt (K/W) - the SI coherent unit for thermal resistance.
// All factors express how many K/W equal 1 unit of the given measure.
//
// Exact foundations:
//   1 K/W = 1 \u00b0C/W (exact: temperature interval 1 K = 1 \u00b0C)
//   1 \u00b0F = 5/9 K (exact) \u2192 1 \u00b0F/W = 5/9 K/W (exact)
//   1 \u03bcK = 10\u207b\u2076 K (exact) \u2192 1 \u03bcK/W = 10\u207b\u2076 K/W (exact)
//   1 mK = 10\u207b\u00b3 K (exact) \u2192 1 mK/W = 10\u207b\u00b3 K/W (exact)
//   1 kK = 10\u00b3 K (exact) \u2192 1 kK/W = 10\u00b3 K/W (exact)
//   1 BTU(IT) = 1055.05585262 J (exact, ASTM/ISO definition)
//   1 kcal(IT) = 4186.8 J (exact, international table definition)
//   1 hp(mech) = 550 ft\u00b7lbf/s = 745.69987158 W (1 ft = 0.3048 m; 1 lbf = 0.45359237 \u00d7 9.80665 N)

const toKelvinPerWatt = {
  microkelvin_per_watt:            1e-6,                              // exact: 1 \u03bcK = 10\u207b\u2076 K
  second_fahrenheit_per_btu:       5 / 9 / 1055.05585262,            // exact: 1 BTU(IT) = 1055.05585262 J; 1 \u00b0F = 5/9 K
  millikelvin_per_watt:            1e-3,                              // exact: 1 mK = 10\u207b\u00b3 K
  kelvin_per_horsepower:           1 / 745.69987158,                  // 1 hp(mech) = 550 ft\u00b7lbf/s = 745.69987158 W
  minute_fahrenheit_per_btu:       5 / 9 * 60 / 1055.05585262,       // exact: 1 BTU(IT) = 1055.05585262 J; 1 \u00b0F = 5/9 K; 1 min = 60 s
  degree_fahrenheit_per_watt:      5 / 9,                             // exact: 1 \u00b0F = 5/9 K
  hour_celsius_per_kcal:           3600 / 4186.8,                     // exact: 1 kcal(IT) = 4186.8 J; 1 h = 3600 s
  kelvin_per_watt:                 1,                                  // reference unit (SI)
  celsius_per_watt:                1,                                  // exact: 1 \u00b0C/W = 1 K/W (temperature interval)
  hour_fahrenheit_per_btu:         5 / 9 * 3600 / 1055.05585262,      // exact: 1 BTU(IT) = 1055.05585262 J; 1 h = 3600 s; 1 \u00b0F = 5/9 K
  celsius_per_milliwatt:           1e3,                                // exact: 1 mW = 10\u207b\u00b3 W
  kilokelvin_per_watt:             1e3,                                // exact: 1 kK = 10\u00b3 K
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  microkelvin_per_watt: {
    name: "Microkelvin per watt",
    description: "The microkelvin per watt (μK/W) equals exactly 10⁻⁶ K/W. Used in ultra-precision cryogenic and nanotechnology research to characterise thermal contact resistance of atomically bonded interfaces, van der Waals heterostructures, and superconducting qubit heat links at millikelvin temperatures. Also quoted for on-chip thermal connections in quantum processor prototypes. 1 μK/W = 10⁻⁶ K/W.",
    symbol: "μK/W"
  },
  second_fahrenheit_per_btu: {
    name: "Second-degree Fahrenheit per BTU",
    description: "The second-degree Fahrenheit per BTU (s·°F/BTU) equals (5/9)/1055.05585262 K/W ≈ 5.265 × 10⁻⁴ K/W. Used in US aerospace and nuclear engineering where thermal transient analyses express power as BTU/s and temperature in °F, e.g. rocket engine heat rejection and reactor coolant loop calculations. 1 s·°F/BTU ≈ 5.265 × 10⁻⁴ K/W.",
    symbol: "s·°F/BTU"
  },
  millikelvin_per_watt: {
    name: "Millikelvin per watt",
    description: "The millikelvin per watt (mK/W) equals exactly 10\u207b\u00b3 K/W. It is used for ultra-low thermal resistances in high-conductivity materials such as diamond heat spreaders (\u2248 0.3 mK/W per mm thickness for 1 cm\u00b2 area), liquid metal TIMs, and cryogenic heat links. Measuring at this scale requires precision power dissipation and calorimetric temperature sensing. 1 mK/W = 10\u207b\u00b3 K/W.",
    symbol: "mK/W"
  },
  kelvin_per_horsepower: {
    name: "Kelvin per horsepower",
    description: "The kelvin per horsepower (K/hp) equals 1/745.69987158 K/W ≈ 1.341 × 10⁻³ K/W. Used in mechanical engineering when rating engine cooling systems, gearbox oil coolers, and hydraulic heat exchangers alongside power expressed in horsepower. A transmission cooler at 0.05 K/hp raises fluid temperature 3.73 K per 75 hp of friction losses. 1 K/hp ≈ 1.341 × 10⁻³ K/W.",
    symbol: "K/hp"
  },
  degree_fahrenheit_per_watt: {
    name: "Degree Fahrenheit per watt",
    description: "The degree Fahrenheit per watt (\u00b0F/W) equals exactly 5/9 K/W \u2248 0.5556 K/W. It appears in US power electronics datasheets and legacy JEDEC thermal specifications where junction-to-case resistance is reported in \u00b0F/W rather than \u00b0C/W or K/W. A device rated 5 \u00b0F/W has R = 5 \u00d7 5/9 \u2248 2.78 K/W. 1 \u00b0F/W = 5/9 K/W.",
    symbol: "\u00b0F/W"
  },
  hour_celsius_per_kcal: {
    name: "Hour-degree Celsius per kilocalorie",
    description: "The h\u00b7\u00b0C/kcal equals 3600/4186.8 K/W \u2248 0.8598 K/W. Used in pre-SI European engineering literature (French, German, Italian) for heat transfer system calculations. A boiler with 1 h\u00b7\u00b0C/kcal resistance passes 1 kcal/h per \u00b0C temperature difference. Superseded by K/W and h\u00b7\u00b0C/W in modern standards. 1 h\u00b7\u00b0C/kcal \u2248 0.8598 K/W.",
    symbol: "h\u00b7\u00b0C/kcal"
  },
  kelvin_per_watt: {
    name: "Kelvin per watt",
    description: "The kelvin per watt (K/W) is the SI coherent unit for thermal resistance, defined as the temperature rise (K) per unit of steady-state power dissipation (W). Used universally in electronic component datasheets (junction-to-ambient, junction-to-case), heat sink ratings, and thermal circuit analysis. A CPU heatsink at 0.3 K/W raises temperature 30 K per 100 W. 1 K/W = 1 \u00b0C/W.",
    symbol: "K/W"
  },
  celsius_per_watt: {
    name: "Degree Celsius per watt",
    description: "The degree Celsius per watt (\u00b0C/W) equals exactly 1 K/W since temperature intervals 1 \u00b0C = 1 K. It is the dominant notation in semiconductor, LED, and power electronics datasheets worldwide. Thermal resistance values such as R\u03b8JA (junction-to-ambient) and R\u03b8JC (junction-to-case) are almost universally quoted in \u00b0C/W. A package at 50 \u00b0C/W dissipating 2 W yields \u0394T = 100 \u00b0C. 1 \u00b0C/W = 1 K/W.",
    symbol: "\u00b0C/W"
  },
  hour_fahrenheit_per_btu: {
    name: "Hour-degree Fahrenheit per BTU",
    description: "The h\u00b7\u00b0F/BTU equals (5/9 \u00d7 3600)/1055.05585262 K/W \u2248 1.8956 K/W. It is the traditional US unit for thermal resistance in HVAC, building science, and insulation engineering. A pipe fitting with R = 1 h\u00b7\u00b0F/BTU passes 1 BTU/h per \u00b0F driving difference. Appears in ASHRAE handbooks, ASTM C177, and older US plumbing codes. 1 h\u00b7\u00b0F/BTU \u2248 1.8956 K/W.",
    symbol: "h\u00b7\u00b0F/BTU"
  },
  minute_fahrenheit_per_btu: {
    name: "Minute-degree Fahrenheit per BTU",
    description: "The minute-degree Fahrenheit per BTU (min\u00b7\u00b0F/BTU) equals (5/9 \u00d7 60)/1055.05585262 K/W \u2248 0.03159 K/W. Used in US refrigeration and air-conditioning engineering where capacity is expressed in BTU/min - 1 ton of refrigeration equals 200 BTU/min. Thermal resistance of evaporator and condenser circuits is conveniently quoted in this unit. 1 min\u00b7\u00b0F/BTU \u2248 0.03159 K/W = 60 s\u00b7\u00b0F/BTU.",
    symbol: "min\u00b7\u00b0F/BTU"
  },
  celsius_per_milliwatt: {
    name: "Degree Celsius per milliwatt",
    description: "The degree Celsius per milliwatt (\u00b0C/mW) equals exactly 1000 K/W since 1 mW = 10\u207b\u00b3 W and 1 \u00b0C = 1 K. Widely used in low-power semiconductor datasheets for characterising junction-to-ambient resistance: small-signal transistors, LEDs, photodiodes, and SMD resistors typically show R\u03b8JA of 50-500 \u00b0C/mW. A device at 200 \u00b0C/mW dissipating 5 mW rises 1 \u00b0C. 1 \u00b0C/mW = 1000 K/W = 1 kK/W.",
    symbol: "\u00b0C/mW"
  },
  kilokelvin_per_watt: {
    name: "Kilokelvin per watt",
    description: "The kilokelvin per watt (kK/W) equals exactly 1000 K/W. Used for high thermal resistances in aerogel films, vacuum insulation panels with small contact area, and micron-scale thin-film insulation layers in microelectronics packaging. Numerically identical to \u00b0C/mW; both notations denote the same thermal resistance in different engineering contexts. 1 kK/W = 1000 K/W = 1 \u00b0C/mW.",
    symbol: "kK/W"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toKelvinPerWatt);
}

function convertThermalResistance() {
  convertFactorBased(toKelvinPerWatt);
}

initConverterPage();
