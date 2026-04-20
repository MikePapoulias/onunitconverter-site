// Base unit: lux (lx) - the SI coherent derived unit of illuminance.
// Illuminance E [lx = lm/m\u00b2] is the luminous flux received per unit area:
//   E = d\u03a6 / dA  (\u03a6: luminous flux in lm, A: area in m\u00b2)
//   E = I / r\u00b2   (point source, inverse-square law: I in cd, r in m)
// All factors express how many lux equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 lx = 1 lm/m\u00b2 = 1 cd\u00b7sr/m\u00b2  (SI coherent derived unit)
//   1 ph  (phot)                = 10\u2074 lx = 1 lm/cm\u00b2  (exact; CGS-photometric unit)
//   1 fc  (foot-candle)         = 1 lm/ft\u00b2 = 1/0.09290304 lx  (exact; 1 ft\u00b2 = 0.09290304 m\u00b2)
//   1 lm/yd\u00b2                    = 1/0.83612736 lx  (exact; 1 yd\u00b2 = 0.9144\u00b2 m\u00b2 = 0.83612736 m\u00b2)
//   1 lm/in\u00b2                    = 1/0.00064516 lx  (exact; 1 in\u00b2 = 0.0254\u00b2 m\u00b2 = 0.00064516 m\u00b2)
//   SI prefix units (plx, nlx, \u00b5lx, mlx, klx, Mlx): exact by SI prefix definitions.
//   1 mlx = 1 nox (CIE historical unit; exact equivalence)
//
// Factor order (smallest to largest):
//   plx (1e-12) < nlx (1e-9) < \u00b5lx (1e-6) < mlx (1e-3) < lx (1)
//   < lm/yd\u00b2 (~1.196) < fc (~10.764) < klx (1e3) < lm/in\u00b2 (~1550) < ph (1e4) < Mlx (1e6)

const toLuxes = {
  'picolux':                   1e-12,              // exact: 10\u207b\u00b9\u00b2 lx (SI prefix pico)
  'nanolux':                   1e-9,               // exact: 10\u207b\u2079 lx (SI prefix nano)
  'microlux':                  1e-6,               // exact: 10\u207b\u2076 lx (SI prefix micro)
  'millilux':                  1e-3,               // exact: 10\u207b\u00b3 lx (SI prefix milli; = 1 nox)
  'lux':                       1,                  // reference (base unit)
  'lumens-per-square-yard':    1 / 0.83612736,     // exact: 1/0.83612736 lx \u2248 1.19599004630 lx (1 yd = 0.9144 m)
  'foot-candles':              1 / 0.09290304,     // exact: 1/0.09290304 lx \u2248 10.76391041671 lx (1 ft = 0.3048 m)
  'kilolux':                   1e3,                // exact: 10\u00b3 lx (SI prefix kilo)
  'lumens-per-square-inch':    1 / 0.00064516,     // exact: 1/0.00064516 lx \u2248 1550.003100006 lx (1 in = 0.0254 m)
  'phots':                     1e4,                // exact: 10\u2074 lx = 1 lm/cm\u00b2 (CGS unit)
  'megalux':                   1e6,                // exact: 10\u2076 lx (SI prefix mega)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'picolux': {
    name: "Picolux",
    description: "The picolux (plx) equals 10\u207b\u00b9\u00b2 lx. A theoretical subunit used only in precision photometric standard traceability. Even the faintest measurable natural illuminance - starlight on a moonless night at ~200 nlx - is 200 billion times brighter. Appears only in SI reference chains for calibration laboratories. 1 plx = 10\u207b\u00b9\u00b2 lx.",
    symbol: "plx"
  },
  'nanolux': {
    name: "Nanolux",
    description: "The nanolux (nlx) equals 10\u207b\u2079 lx. Astronomical night-sky scale: the zodiacal band contributes ~10-50 nlx; airglow ~150 nlx; the Milky Way core ~100 nlx. The absolute human eye threshold is around 100 nlx. Used in night-sky quality metrics and photomultiplier tube calibration. 1 nlx = 10\u207b\u2079 lx.",
    symbol: "nlx"
  },
  'microlux': {
    name: "Microlux",
    description: "The microlux (\u00b5lx) equals 10\u207b\u2076 lx. Natural night illuminance: a moonless overcast sky ~100 \u00b5lx; scattered starlight ~200-300 \u00b5lx; crescent moon ~10-50 \u00b5lx. Used in night-vision equipment sensitivity specifications and observatory site-quality assessments. 1 \u00b5lx = 10\u207b\u2076 lx.",
    symbol: "\u00b5lx"
  },
  'millilux': {
    name: "Millilux",
    description: "The millilux (mlx) equals 10\u207b\u00b3 lx, also called 1 nox (CIE historical unit). Moonless clear sky: ~1 mlx; quarter moon: ~20-50 mlx; full moon at zenith: ~100-270 mlx. Minimum for dark-adapted outdoor navigation. Emergency exit pathway lighting is typically 1-5 mlx. 1 mlx = 10\u207b\u00b3 lx = 1 nox.",
    symbol: "mlx"
  },
  'lux': {
    name: "Lux",
    description: "The lux (lx) is the SI coherent unit of illuminance, equal to 1 lm/m\u00b2. Civil twilight outdoors: ~10 lx; dimly lit corridor: ~50 lx; typical office (EN 12464): 300-500 lx; operating theatre: ~1 000 lx. The most widely used illuminance unit in lighting standards worldwide. 1 lx = 1 lm/m\u00b2.",
    symbol: "lx"
  },
  'lumens-per-square-yard': {
    name: "Lumens per square yard",
    description: "The lumen per square yard (lm/yd\u00b2) equals 1/0.83612736 lx \u2248 1.196 lx. Used occasionally in UK outdoor area lighting specifications alongside foot-candles. A 3 lx minimum car-park standard equals ~2.5 lm/yd\u00b2; a 100 lx sports-field requirement ~84 lm/yd\u00b2. 1 lm/yd\u00b2 = 1/0.83612736 lx.",
    symbol: "lm/yd\u00b2"
  },
  'foot-candles': {
    name: "Foot-candles",
    description: "The foot-candle (fc) equals 1 lm/ft\u00b2 \u2248 10.764 lx. Standard in North American lighting design: IESNA recommends 30-50 fc for general offices, 50-100 fc for retail displays, 12-16 fc for cinema screens. Still the dominant unit in the US, Canada and some other countries. 1 fc = 1/0.09290304 lx.",
    symbol: "fc"
  },
  'kilolux': {
    name: "Kilolux",
    description: "The kilolux (klx) equals 1 000 lx. Outdoor daytime scale: overcast sky ~10-20 klx; direct mid-latitude sunshine at noon ~80-100 klx. Required for fine inspection work, surgery, and color-critical print evaluation (ISO 3664: 2 klx). Also the range for plant-growth LED systems at canopy level. 1 klx = 10\u00b3 lx.",
    symbol: "klx"
  },
  'lumens-per-square-inch': {
    name: "Lumens per square inch",
    description: "The lumen per square inch (lm/in\u00b2) equals 1/0.00064516 lx \u2248 1 550 lx. Used in US optics and LED backlight datasheets when specifying output over small aperture areas. Rare in general lighting but found in US optical engineering catalogs and LCD backlight specifications. 1 lm/in\u00b2 = 1/0.00064516 lx.",
    symbol: "lm/in\u00b2"
  },
  'phots': {
    name: "Phots",
    description: "The phot (ph) equals 1 lm/cm\u00b2 = 10 000 lx. The CGS-photometric unit of illuminance. Pre-SI optics texts express daylight in phots: full tropical sunshine is ~10 ph (100 klx); overcast sky ~0.1-0.2 ph. Wholly superseded by lux and kilolux in modern standards. 1 ph = 10\u2074 lx.",
    symbol: "ph"
  },
  'megalux': {
    name: "Megalux",
    description: "The megalux (Mlx) equals 10\u2076 lx. Reached only by extreme short-range sources: a short-arc xenon lamp at 5 cm produces ~1-10 Mlx; pulsed photographic strobes at close range several Mlx. The full solar disc on Earth's surface gives ~100 klx - far below 1 Mlx. 1 Mlx = 10\u2076 lx.",
    symbol: "Mlx"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toLuxes);
}

function convertIlluminance() {
  convertFactorBased(toLuxes);
}

initConverterPage();
