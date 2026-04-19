// Base unit: lumen (lm) - SI derived unit of luminous flux.
// Luminous flux \u03a6 [lm] is the total luminous power emitted by a source, weighted by the photopic
// luminosity function V(\u03bb):  \u03a6 = K_m \u222b \u03a6_e(\u03bb) V(\u03bb) d\u03bb   (K_m = 683 lm/W, exact per 2019 SI)
// 1 lm = 1 cd\u00b7sr  (candela times steradian; exact by definition of the lumen)
// The lumen is defined since 2019 SI by fixing K_cd = 683 lm\u00b7W\u207b\u00b9 at \u03bd = 540 \u00d7 10\u00b9\u00b2 Hz.
//
// All factors express how many lm equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 lm       = 1 cd\u00b7sr  (SI derived unit; exact by definition)
//   1 W\u2085\u2085\u2085    = 683 lm  (watt at ~555 nm; K_cd = 683 lm/W exact per 2019 SI at 540 THz)
//   SI prefix units (plm, nlm, \u00b5lm, mlm, klm, Mlm, Glm): exact by SI prefix definitions.
//
// Factor order (smallest to largest):
//   plm (1e-12) < nlm (1e-9) < \u00b5lm (1e-6) < mlm (1e-3) < lm (1)
//   < W\u2085\u2085\u2085 (683) < klm (1e3) < Mlm (1e6) < Glm (1e9)

const toLumens = {
  'picolumens':      1e-12,   // exact: 10\u207b\u00b9\u00b2 lm (SI prefix pico)
  'nanolumens':      1e-9,    // exact: 10\u207b\u2079 lm (SI prefix nano)
  'microlumens':     1e-6,    // exact: 10\u207b\u2076 lm (SI prefix micro)
  'millilumens':     1e-3,    // exact: 10\u207b\u00b3 lm (SI prefix milli)
  'lumens':          1,       // reference (base unit)
  'watts-at-555nm':  683,     // exact: K_cd = 683 lm/W at 540 THz (\u2248 555 nm); 2019 SI definition (exact)
  'kilolumens':      1e3,     // exact: 10\u00b3 lm (SI prefix kilo)
  'megalumens':      1e6,     // exact: 10\u2076 lm (SI prefix mega)
  'gigalumens':      1e9,     // exact: 10\u2079 lm (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'picolumens': {
    name: "Picolumens",
    description: "The picolumen (plm) equals 10\u207b\u00b9\u00b2 lm. A sub-unit used only in precision optical metrology and photomultiplier calibration chains. Equivalent to the photometric output of a 555 nm monochromatic source radiating approximately 1.46 fW of radiant power. Below the sensitivity threshold of most photometric instruments without special cooling. 1 plm = 10\u207b\u00b9\u00b2 lm.",
    symbol: "plm"
  },
  'nanolumens': {
    name: "Nanolumens",
    description: "The nanolumen (nlm) equals 10\u207b\u2079 lm. The scale of single-cell bioluminescence: an individual bioluminescent bacterium emits roughly 1-100 nlm; a luciferin-luciferase reaction in a single cell reaches the low-nanolumen range. Also the range for fiber-optic evanescent-wave sensors and fluorescence microscopy background levels. 1 nlm = 10\u207b\u2079 lm.",
    symbol: "nlm"
  },
  'microlumens': {
    name: "Microlumens",
    description: "The microlumen (\u00b5lm) equals 10\u207b\u2076 lm. LED indicators in deep-sleep power-save mode, fiber-optic signal pilots, and OLED display pixels at minimum brightness fall into this range. Equivalent to a 555 nm source radiating approximately 1.46 nW of radiant power. A night-vision display backlight operates at 1-100 \u00b5lm. 1 \u00b5lm = 10\u207b\u2076 lm.",
    symbol: "\u00b5lm"
  },
  'millilumens': {
    name: "Millilumens",
    description: "The millilumen (mlm) equals 10\u207b\u00b3 lm. The output range for typical LED indicator packages: a standard 5 mm through-hole LED at 20 mA produces 10-200 mlm depending on color and efficiency. Small wearable health-monitor LEDs and remote-control emitter LEDs operate in this range. 1 mlm = 10\u207b\u00b3 lm.",
    symbol: "mlm"
  },
  'lumens': {
    name: "Lumens",
    description: "The lumen (lm) is the SI derived unit of luminous flux, equal to 1 cd\u00b7sr. A standard wax candle emits approximately 12 lm total; a 40 W incandescent bulb about 450 lm; the common 800 lm LED lamp is the direct replacement for a 60 W incandescent. Defined since 2019 SI by fixing K_cd = 683 lm/W at 540 THz. 1 lm = 1 cd\u00b7sr.",
    symbol: "lm"
  },
  'watts-at-555nm': {
    name: "Watts (at 555 nm)",
    description: "The watt at 555 nm equals 683 lm exactly, by the 2019 SI definition fixing the luminous efficacy constant K_cd = 683 lm/W at 540 THz (\u2248 555 nm, the peak of the photopic eye-sensitivity curve V(\u03bb)). Used in LED optical design and photonics research to convert between radiometric power and photometric flux at peak eye sensitivity. 1 W\u2085\u2085\u2085 = 683 lm.",
    symbol: "W\u2085\u2085\u2085"
  },
  'kilolumens': {
    name: "Kilolumens",
    description: "The kilolumen (klm) equals 1 000 lm. High-efficiency LED light fittings: a modern 100 W-equivalent LED lamp emits 1.4-1.6 klm; a 100 W halogen PAR38 spot approximately 1.1 klm; short-throw projectors are rated at 1-5 klm (ANSI lumens). The standard unit for commercial LED fixture specifications and projector brightness. 1 klm = 10\u00b3 lm.",
    symbol: "klm"
  },
  'megalumens': {
    name: "Megalumens",
    description: "The megalumen (Mlm) equals 10\u2076 lm. The output range for high-bay industrial luminaires and stadium floodlights: a 1 000 W high-pressure sodium lamp array produces approximately 1.1 Mlm; full LED stadium lighting systems reach 1-10 Mlm; maritime lighthouse optics emit in the low-megalumen range. 1 Mlm = 10\u2076 lm.",
    symbol: "Mlm"
  },
  'gigalumens': {
    name: "Gigalumens",
    description: "The gigalumen (Glm) equals 10\u2079 lm. The scale for very large lighting installations and for theoretical comparisons: a large airport apron illuminated to 30 lx over 1 km\u00b2 would require approximately 30 Glm of total installed luminous flux. The full-disk luminous flux of the Sun is approximately 3.6 \u00d7 10\u00b2\u2078 lm. 1 Glm = 10\u2079 lm.",
    symbol: "Glm"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toLumens);
}

function convertLuminousFlux() {
  convertFactorBased(toLumens);
}

initConverterPage();
