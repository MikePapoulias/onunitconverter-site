// Base unit: ampere per weber (A/Wb) - the SI coherent derived unit of magnetic reluctance.
// Magnetic reluctance \u211b [A/Wb = H\u207b\u00b9 = kg\u207b\u00b9\u00b7m\u207b\u00b2\u00b7s\u00b2\u00b7A\u00b2] is the ratio of MMF to flux:
//   \u211b = \u2131 / \u03a6  (magnetomotive force in A\u00b7t, magnetic flux \u03a6 in Wb)
//   \u211b = l / (\u00b5 A)  (for a uniform section of length l, permeability \u00b5, area A)
//   \u211b = N\u00b2 / L    (for an N-turn coil with inductance L in H)
// All factors express how many A/Wb equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 A/Wb = 1 H\u207b\u00b9 = 1 kg\u207b\u00b9\u00b7m\u207b\u00b2\u00b7s\u00b2\u00b7A\u00b2   (SI coherent derived unit)
//   1 Gb/Mx = 10\u2079/(4\u03c0) A/Wb \u2248 7.9577471546\u00d710\u2077 A/Wb  (exact; CGS unit)
//     derived from: 1 Gb = 10/(4\u03c0) A\u00b7t; 1 Mx = 10\u207b\u2078 Wb
//   SI prefix units (\u00b5A/Wb, mA/Wb, kA/Wb, MA/Wb, GA/Wb, TA/Wb): exact by SI prefix definitions.
//
// Factor order (smallest to largest):
//   \u00b5A/Wb (1e-6) < mA/Wb (1e-3) < A/Wb (1) < kA/Wb (1e3) < MA/Wb (1e6) < Gb/Mx (~7.9577e7) < GA/Wb (1e9) < TA/Wb (1e12)

const toAmperesPerWeber = {
  'microamperes-per-weber':  1e-6,               // exact: 10\u207b\u2076 A/Wb (SI prefix micro)
  'milliamperes-per-weber':  1e-3,               // exact: 10\u207b\u00b3 A/Wb (SI prefix milli)
  'amperes-per-weber':       1,                  // reference (base unit)
  'kiloamperes-per-weber':   1e3,                // exact: 10\u00b3 A/Wb (SI prefix kilo)
  'megaamperes-per-weber':   1e6,                // exact: 10\u2076 A/Wb (SI prefix mega)
  'gilberts-per-maxwell':    1e9 / (4 * Math.PI), // exact: 10\u2079/(4\u03c0) A/Wb \u2248 7.95774715459477\u00d710\u2077 A/Wb (CGS unit)
  'gigaamperes-per-weber':   1e9,                // exact: 10\u2079 A/Wb (SI prefix giga)
  'teraamperes-per-weber':   1e12,               // exact: 10\u00b9\u00b2 A/Wb (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'microamperes-per-weber': {
    name: "Microamperes per weber",
    description: "The microampere per weber (\u00b5A/Wb) equals 10\u207b\u2076 H\u207b\u00b9. Represents extremely-low-reluctance circuits, only achievable in superconducting systems where flux is sustained without current. A 1 000-turn superconducting coil with L = 10\u2076 H has \u211b = N\u00b2/L = 10\u207b\u00b3 \u00b5A/Wb. A purely theoretical reference scale for normal materials. 1 \u00b5A/Wb = 10\u207b\u2076 H\u207b\u00b9.",
    symbol: "\u00b5A/Wb"
  },
  'milliamperes-per-weber': {
    name: "Milliamperes per weber",
    description: "The milliampere per weber (mA/Wb) equals 10\u207b\u00b3 H\u207b\u00b9. A 500-turn coil on a large annealed nickel-iron toroid with L = 250 H has \u211b = N\u00b2/L = 1 000 mA/Wb; power-frequency toroidal current transformers with very-high-permeability cores can approach this scale. 1 mA/Wb = 10\u207b\u00b3 H\u207b\u00b9.",
    symbol: "mA/Wb"
  },
  'amperes-per-weber': {
    name: "Amperes per weber",
    description: "The ampere per weber (A/Wb) is the SI coherent unit of magnetic reluctance, equal to 1 H\u207b\u00b9. For a 100-turn coil with inductance L = 10 H the reluctance is \u211b = 10\u00b2/10 = 1 000 A/Wb. Also the unit of inverse inductance; a 1 H inductor has reluctance (referred to 1 turn) of 1 A/Wb. 1 A/Wb = 1 H\u207b\u00b9.",
    symbol: "A/Wb"
  },
  'kiloamperes-per-weber': {
    name: "Kiloamperes per weber",
    description: "The kiloampere per weber (kA/Wb) equals 10\u00b3 H\u207b\u00b9. Typical for wound high-permeability cores: a 200-turn CRGO silicon-steel toroid with L = 40 H has \u211b = 10\u00b3 kA/Wb; nanocrystalline and amorphous common-mode chokes for EMI filtering typically have core reluctances in the kA/Wb - MA/Wb range. 1 kA/Wb = 10\u00b3 H\u207b\u00b9.",
    symbol: "kA/Wb"
  },
  'megaamperes-per-weber': {
    name: "Megaamperes per weber",
    description: "The megaampere per weber (MA/Wb) equals 10\u2076 H\u207b\u00b9. The most common design scale for transformer and inductor magnetic circuits: a ferrite E-core for a 100 kHz SMPS has \u211b \u2248 1-50 MA/Wb; a 1 000-turn winding with L = 1 H gives \u211b = 1 MA/Wb; DC motor air-gap reluctances are typically 10-100 MA/Wb. 1 MA/Wb = 10\u2076 H\u207b\u00b9.",
    symbol: "MA/Wb"
  },
  'gilberts-per-maxwell': {
    name: "Gilberts per maxwell",
    description: "The gilbert per maxwell (Gb/Mx) is the CGS-EMU unit of magnetic reluctance. 1 Gb/Mx = 10\u2079/(4\u03c0) A/Wb \u2248 79.577 MA/Wb, placing it between MA/Wb and GA/Wb. Found in pre-SI magnetics literature and design tables. Derived from: 1 gilbert = 10/(4\u03c0) A\u00b7t and 1 maxwell = 10\u207b\u2078 Wb. 1 Gb/Mx \u2248 7.9577 \u00d7 10\u2077 A/Wb.",
    symbol: "Gb/Mx"
  },
  'gigaamperes-per-weber': {
    name: "Gigaamperes per weber",
    description: "The gigaampere per weber (GA/Wb) equals 10\u2079 H\u207b\u00b9. The scale for small air gaps and miniaturized cores: a 0.1 mm air gap with 1 mm\u00b2 cross-section has \u211b = 0.1\u00d710\u207b\u00b3 / (1.257\u00d710\u207b\u2076 \u00d7 10\u207b\u2076) \u2248 80 GA/Wb; MEMS micro-inductors and integrated on-chip magnetics operate in the GA/Wb range. 1 GA/Wb = 10\u2079 H\u207b\u00b9.",
    symbol: "GA/Wb"
  },
  'teraamperes-per-weber': {
    name: "Teraamperes per weber",
    description: "The teraampere per weber (TA/Wb) equals 10\u00b9\u00b2 H\u207b\u00b9. Reached in nanoscale magnetic structures: a thin-film permalloy inductor with 10 \u00b5m path length, 100 \u00b5m\u00b2 cross-section and \u00b5\u1d63 = 8 000 has \u211b = 10\u207b\u2075 / (8\u00d710\u00b3\u00d71.257\u00d710\u207b\u2076\u00d710\u207b\u00b9\u2070) \u2248 0.1 TA/Wb. Used in MEMS and spintronics research. 1 TA/Wb = 10\u00b9\u00b2 H\u207b\u00b9.",
    symbol: "TA/Wb"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toAmperesPerWeber);
}

function convertMagneticReluctance() {
  convertFactorBased(toAmperesPerWeber);
}

initConverterPage();
