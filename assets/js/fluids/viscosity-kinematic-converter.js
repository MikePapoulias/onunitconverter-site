// Base unit: square metre per second (m²/s) - the SI coherent unit of kinematic viscosity.
// All factors express how many m²/s equal 1 unit of the given measure.
//
// Exact foundations:
//   1 St (Stokes) = 1 cm²/s = (0.01 m)²/s = 1e-4 m²/s (exact, CGS definition)
//   1 cSt (centistoke) = 1e-2 St = 1e-6 m²/s = 1 mm²/s (exact)
//   SI prefixes: micro=1e-6, milli=1e-3, kilo=1e3 (all exact)
//   1 ft = 0.3048 m (exact); 1 in = 0.0254 m (exact)
//   1 ft² = 0.3048² = 0.09290304 m² (exact)
//   1 in² = 0.0254² = 6.4516e-4 m² (exact)
//   Time: 1 min = 60 s, 1 h = 3600 s (exact)
//
//   Numeric values (all exact in IEEE 754 arithmetic):
//   microstokes:                   1e-10  (1e-6 × 1e-4)
//   square_millimetres_per_hour:   2.7̄7̄×10⁻¹⁰  (1e-6 / 3600)
//   square_millimetres_per_minute: 1.6̄7̄×10⁻⁸  (1e-6 / 60)
//   millistokes:                   1e-7   (1e-3 × 1e-4)
//   square_inches_per_hour:        6.4516e-4 / 3600 ≈ 1.79211e-7
//   square_millimetres_per_second: 1e-6
//   centistokes:                   1e-6   (= 1 mm²/s)
//   square_inches_per_minute:      6.4516e-4 / 60 ≈ 1.07527e-5
//   square_feet_per_hour:          0.09290304 / 3600 = 2.58064e-5
//   stokes:                        1e-4
//   square_centimetres_per_second: 1e-4   (= 1 St)
//   square_metres_per_hour:        1 / 3600 ≈ 2.7̄7̄8e-4
//   square_inches_per_second:      6.4516e-4
//   square_feet_per_minute:        0.09290304 / 60 = 1.548384e-3
//   square_feet_per_second:        0.09290304
//   kilostokes:                    0.1    (1000 × 1e-4)
//   square_metres_per_second:      1      (reference/base unit)

const toSquareMetresPerSecond = {
  // -- Microstokes ----------------------------------------------------------
  microstokes:                   1e-10,                            // exact: 1e-6 × 1e-4
  // -- Square millimetres ---------------------------------------------------
  square_millimetres_per_hour:   1e-6 / 3600,                     // exact
  square_millimetres_per_minute: 1e-6 / 60,                       // exact
  square_millimetres_per_second: 1e-6,                             // exact (= 1 cSt)
  // -- Millistokes ----------------------------------------------------------
  millistokes:                   1e-7,                             // exact: 1e-3 × 1e-4
  // -- Square inches --------------------------------------------------------
  square_inches_per_hour:        0.0254 * 0.0254 / 3600,          // = 6.4516e-4 / 3600 (exact)
  square_inches_per_minute:      0.0254 * 0.0254 / 60,            // = 6.4516e-4 / 60 (exact)
  square_inches_per_second:      0.0254 * 0.0254,                 // = 6.4516e-4 m²/s (exact)
  // -- Centistokes ----------------------------------------------------------
  centistokes:                   1e-6,                             // exact: 1e-2 × 1e-4 (= 1 mm²/s)
  // -- Square feet ----------------------------------------------------------
  square_feet_per_hour:          0.3048 * 0.3048 / 3600,          // = 0.09290304 / 3600 (exact)
  square_feet_per_minute:        0.3048 * 0.3048 / 60,            // = 0.09290304 / 60 (exact)
  square_feet_per_second:        0.3048 * 0.3048,                 // = 0.09290304 m²/s (exact)
  // -- Stokes / Square centimetres per second -------------------------------
  stokes:                        1e-4,                             // exact: 1 St = 1 cm²/s = 1e-4 m²/s
  square_centimetres_per_second: 0.01 * 0.01,                     // = 1e-4 m²/s (exact; = 1 St)
  // -- Square metres --------------------------------------------------------
  square_metres_per_hour:        1 / 3600,                         // exact
  square_metres_per_second:      1,                                // reference (base unit)
  // -- Kilostokes -----------------------------------------------------------
  kilostokes:                    0.1,                              // exact: 1000 × 1e-4
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  microstokes: {
    name: "Microstokes",
    description: "The microstoke (\u00b5St) equals 10\u207b\u00b9\u2070 m\u00b2/s, the smallest CGS subdivision of practical interest for kinematic viscosity. It covers extremely rarified or high-temperature gas viscosity and is rarely encountered outside theoretical research. The centistoke is the practical lower bound in most engineering work. 1 \u00b5St = 10\u207b\u2076 St = 10\u207b\u00b9\u2070 m\u00b2/s.",
    symbol: "\u00b5St"
  },
  square_millimetres_per_hour: {
    name: "Square millimetres per hour",
    description: "The square millimetre per hour (mm\u00b2/h) equals 1/(3.6 \u00d7 10\u2079) m\u00b2/s \u2248 2.78 \u00d7 10\u207b\u00b9\u2070 m\u00b2/s. It appears in materials science for solid-state diffusion and thin-film growth studies where hourly timescales are more natural than seconds. 1 mm\u00b2/h = 1/3600 mm\u00b2/s = 1/3600 cSt.",
    symbol: "mm\u00b2/h"
  },
  square_millimetres_per_minute: {
    name: "Square millimetres per minute",
    description: "The square millimetre per minute (mm\u00b2/min) equals 1/(6 \u00d7 10\u2077) m\u00b2/s \u2248 1.667 \u00d7 10\u207b\u2078 m\u00b2/s. It is used in polymer-film formation and printing-ink diffusion studies where minute-scale time resolution is more convenient. 1 mm\u00b2/min = 1/60 cSt.",
    symbol: "mm\u00b2/min"
  },
  millistokes: {
    name: "Millistokes",
    description: "The millistoke (mSt) equals 10\u207b\u2077 m\u00b2/s. It appears in research on low-viscosity solvents, dilute polymer solutions, and light gases whose kinematic viscosity is in the sub-centistoke range. 1 mSt = 10\u207b\u00b3 St = 0.1 cSt = 10\u207b\u2077 m\u00b2/s.",
    symbol: "mSt"
  },
  square_inches_per_hour: {
    name: "Square inches per hour",
    description: "The square inch per hour (in\u00b2/h) equals 0.0254\u00b2/3600 \u2248 1.792 \u00d7 10\u207b\u2077 m\u00b2/s. It is found in US heat-transfer and diffusion textbooks that use the BTU-inch-hour unit system alongside thermal diffusivity tables. 1 in\u00b2/h \u2248 0.1792 cSt.",
    symbol: "in\u00b2/h"
  },
  square_millimetres_per_second: {
    name: "Square millimetres per second",
    description: "The square millimetre per second (mm\u00b2/s) equals 10\u207b\u2076 m\u00b2/s, numerically identical to 1 centistoke (cSt). It is the preferred SI-consistent expression: ISO 3104, DIN 51562, and ASTM viscosity standards all use mm\u00b2/s interchangeably with cSt. Water at 20 \u00b0C \u2248 1.004 mm\u00b2/s; SAE 10W-30 at 100 \u00b0C: 9.3-12.5 mm\u00b2/s. 1 mm\u00b2/s = 1 cSt.",
    symbol: "mm\u00b2/s"
  },
  centistokes: {
    name: "Centistokes",
    description: "The centistoke (cSt) equals 10\u207b\u2076 m\u00b2/s = 1 mm\u00b2/s. It is the dominant unit for kinematic viscosity in industry worldwide. ASTM D445, ISO 3104, and ACEA lubricant specifications all use cSt. Water at 20 \u00b0C \u2248 1.004 cSt; diesel at 40 \u00b0C: 2.0-4.5 cSt; SAE 40 oil at 100 \u00b0C: 12.5-16.3 cSt. 1 cSt = 10\u207b\u00b2 St.",
    symbol: "cSt"
  },
  square_inches_per_minute: {
    name: "Square inches per minute",
    description: "The square inch per minute (in\u00b2/min) equals 0.0254\u00b2/60 \u2248 1.075 \u00d7 10\u207b\u2075 m\u00b2/s. It appears in US coating and printing industry references where area coverage rates in in\u00b2/min are combined with kinematic flow data. 1 in\u00b2/min \u2248 10.75 cSt.",
    symbol: "in\u00b2/min"
  },
  square_feet_per_hour: {
    name: "Square feet per hour",
    description: "The square foot per hour (ft\u00b2/h) equals 0.3048\u00b2/3600 \u2248 2.581 \u00d7 10\u207b\u2075 m\u00b2/s. It is the standard US unit for thermal diffusivity in the BTU-ft-h system, used alongside heat-transfer and mass-transfer calculations. Air at 20 \u00b0C \u2248 0.573 ft\u00b2/h; water at 20 \u00b0C \u2248 0.0096 ft\u00b2/h. 1 ft\u00b2/h \u2248 25.81 cSt.",
    symbol: "ft\u00b2/h"
  },
  stokes: {
    name: "Stokes",
    description: "The stoke (St) equals 1 cm\u00b2/s = 10\u207b\u2074 m\u00b2/s, the CGS unit of kinematic viscosity named after Sir George Gabriel Stokes. Its hundredth part, the centistoke, is now dominant, but the stoke still appears in older fluid-mechanics texts and archival API and ASTM data. Water at 20 \u00b0C \u2248 0.01004 St; air at 20 \u00b0C \u2248 0.1516 St. 1 St = 100 cSt = 10\u207b\u2074 m\u00b2/s.",
    symbol: "St"
  },
  square_centimetres_per_second: {
    name: "Square centimetres per second",
    description: "The square centimetre per second (cm\u00b2/s) equals 10\u207b\u2074 m\u00b2/s, numerically identical to 1 stoke (St). It is the explicit CGS dimensional form, preferred in dimensional analysis or when avoiding named units. 1 cm\u00b2/s = 1 St = 100 cSt.",
    symbol: "cm\u00b2/s"
  },
  square_metres_per_hour: {
    name: "Square metres per hour",
    description: "The square metre per hour (m\u00b2/h) equals 1/3600 m\u00b2/s \u2248 277.8 cSt. It is convenient in European process engineering when kinematic viscosity is used alongside metre-based pipe geometry and hourly flow rates. 1 m\u00b2/h \u2248 277.8 cSt.",
    symbol: "m\u00b2/h"
  },
  square_inches_per_second: {
    name: "Square inches per second",
    description: "The square inch per second (in\u00b2/s) equals 0.0254\u00b2 = 6.4516 \u00d7 10\u207b\u2074 m\u00b2/s. It is the coherent FPS kinematic unit based on the inch, found in US fluid power, hydraulics, and bearing-design references. 1 in\u00b2/s = 645.16 cSt = 6.4516 St.",
    symbol: "in\u00b2/s"
  },
  square_feet_per_minute: {
    name: "Square feet per minute",
    description: "The square foot per minute (ft\u00b2/min) equals 0.3048\u00b2/60 \u2248 1.548 \u00d7 10\u207b\u00b3 m\u00b2/s. It appears in US HVAC, ventilation, and turbine-cooling design where velocities are quoted in ft/min. 1 ft\u00b2/min \u2248 1548 cSt.",
    symbol: "ft\u00b2/min"
  },
  square_feet_per_second: {
    name: "Square feet per second",
    description: "The square foot per second (ft\u00b2/s) equals 0.3048\u00b2 = 0.09290304 m\u00b2/s. It is the coherent FPS kinematic viscosity unit, used in US aerospace, hydraulic machinery, and civil/coastal engineering. Water at 20 \u00b0C \u2248 1.082 \u00d7 10\u207b\u2075 ft\u00b2/s; air at 20 \u00b0C \u2248 1.632 \u00d7 10\u207b\u2074 ft\u00b2/s. 1 ft\u00b2/s \u2248 92903 cSt.",
    symbol: "ft\u00b2/s"
  },
  kilostokes: {
    name: "Kilostokes",
    description: "The kilostoke (kSt) equals 1000 St = 0.1 m\u00b2/s. It is used for extremely viscous materials such as heavy polymer melts and bitumen at low temperatures, where centistoke values would reach into the hundreds of thousands. 1 kSt = 10\u00b3 St = 10\u2075 cSt = 0.1 m\u00b2/s.",
    symbol: "kSt"
  },
  square_metres_per_second: {
    name: "Square metres per second",
    description: "The square metre per second (m\u00b2/s) is the SI coherent unit of kinematic viscosity (\u03bd = \u03bc/\u03c1). Air at 20 \u00b0C \u2248 1.516 \u00d7 10\u207b\u2075 m\u00b2/s; water at 20 \u00b0C \u2248 1.004 \u00d7 10\u207b\u2076 m\u00b2/s; glycerol \u2248 1.19 \u00d7 10\u207b\u00b3 m\u00b2/s. It is the standard in CFD codes and SI research literature. 1 m\u00b2/s = 10\u2074 St = 10\u2076 cSt.",
    symbol: "m\u00b2/s"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toSquareMetresPerSecond);
}

function convertViscosityKinematic() {
  convertFactorBased(toSquareMetresPerSecond);
}

initConverterPage();
