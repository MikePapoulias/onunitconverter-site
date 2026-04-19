// Base unit: farad (F) - the SI derived unit of electrical capacitance.
// Electrical capacitance C [M\u207b\u00b9 L\u207b\u00b2 T\u2074 A\u00b2] relates stored charge to voltage: Q = CV.
// All factors express how many farads equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 F = 1 C/V = 1 A\u00b2\u00b7s\u2074\u00b7kg\u207b\u00b9\u00b7m\u207b\u00b2
//
// SI prefix units (all exact by definition):
//   1 aF = 10\u207b\u00b9\u2078 F    1 fF = 10\u207b\u00b9\u2075 F    1 pF = 10\u207b\u00b9\u00b2 F
//   1 nF = 10\u207b\u2079 F    1 \u00b5F = 10\u207b\u2076 F    1 mF = 10\u207b\u00b3 F
//   1 kF = 10\u00b3 F    1 MF = 10\u2076 F    1 GF = 10\u2079 F
//
// Statfarad (CGS-Gaussian) - exact:
//   1 statF = 1 statC / 1 statV = 10\u2075/c\u00b2 F
//           = 10\u2075 / (299 792 458)\u00b2 F
//           \u2248 1.112 650 056 \u00d7 10\u207b\u00b9\u00b2 F   (exact, since c is exact)
//
// Abfarad (CGS-EMU) - exact:
//   1 abF = 1 abC / 1 abV = 10 C / 10\u207b\u2078 V = 10\u2079 F  (exactly equal to 1 GF)

const toFarads = {
  // -- Attofarads -----------------------------------------------------------
  attofarads:   1e-18,                          // exact: 10\u207b\u00b9\u2078 F (SI prefix atto)
  // -- Femtofarads ----------------------------------------------------------
  femtofarads:  1e-15,                          // exact: 10\u207b\u00b9\u2075 F (SI prefix femto)
  // -- Picofarads -----------------------------------------------------------
  picofarads:   1e-12,                          // exact: 10\u207b\u00b9\u00b2 F (SI prefix pico)
  // -- Statfarads (CGS-Gaussian) --------------------------------------------
  statfarads:   1e5 / (299792458 * 299792458),  // exact: 10\u2075/c\u00b2 F \u2248 1.1127 \u00d7 10\u207b\u00b9\u00b2 F
  // -- Nanofarads -----------------------------------------------------------
  nanofarads:   1e-9,                           // exact: 10\u207b\u2079 F (SI prefix nano)
  // -- Microfarads ----------------------------------------------------------
  microfarads:  1e-6,                           // exact: 10\u207b\u2076 F (SI prefix micro)
  // -- Millifarads ----------------------------------------------------------
  millifarads:  1e-3,                           // exact: 10\u207b\u00b3 F (SI prefix milli)
  // -- Farads (SI derived unit) ---------------------------------------------
  farads:       1,                              // reference (base unit)
  // -- Kilofarads -----------------------------------------------------------
  kilofarads:   1e3,                            // exact: 10\u00b3 F (SI prefix kilo)
  // -- Megafarads -----------------------------------------------------------
  megafarads:   1e6,                            // exact: 10\u2076 F (SI prefix mega)
  // -- Gigafarads -----------------------------------------------------------
  gigafarads:   1e9,                            // exact: 10\u2079 F (SI prefix giga)
  // -- Abfarads (CGS-EMU) ---------------------------------------------------
  abfarads:     1e9,                            // exact: 1 abC / 1 abV = 10 C / 10\u207b\u2078 V = 10\u2079 F (= 1 GF)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attofarads: {
    name: "Attofarads",
    description: "The attofarad (aF) equals 10\u207b\u00b9\u2078 F, the scale for quantum-mechanical and nanoscale capacitances. Carbon-nanotube transistor gate capacitances are 1-100 aF; single-electron tunnel junctions in Coulomb-blockade devices operate in the attofarad range; scanning-probe microscopy tip-sample junctions at sub-nanometre separation approach 1 aF. 1 aF = 10\u207b\u00b3 fF = 10\u207b\u00b9\u2078 F.",
    symbol: "aF"
  },
  femtofarads: {
    name: "Femtofarads",
    description: "The femtofarad (fF) equals 10\u207b\u00b9\u2075 F, the standard unit for transistor gate capacitances in CMOS technology and MEMS sensors. Transistors in 7 nm process nodes have gate capacitances of 0.5-5 fF; MEMS capacitive pressure sensors use sense-gap capacitances of 1-100 fF; integrated-circuit bond-pad parasitics and via coupling are quantified in femtofarads. 1 fF = 10\u207b\u00b3 pF = 10\u207b\u00b9\u2075 F.",
    symbol: "fF"
  },
  picofarads: {
    name: "Picofarads",
    description: "The picofarad (pF) equals 10\u207b\u00b9\u00b2 F, the everyday unit for small-signal capacitors in RF and high-frequency circuits. Ceramic chip capacitors range from 0.5 to 100 pF; crystal oscillator load capacitance is typically 12-22 pF; PCB trace-to-trace coupling is 0.1-10 pF/cm; the human body presents roughly 100 pF at radio frequencies. 1 pF = 10\u207b\u00b3 nF = 10\u207b\u00b9\u00b2 F.",
    symbol: "pF"
  },
  statfarads: {
    name: "Statfarads",
    description: "The statfarad (statF) is the capacitance unit of the CGS-Gaussian system, equal to exactly 10\u2075/c\u00b2 F where c = 299\u202f792\u202f458 m/s, giving \u2248 1.1127 \u00d7 10\u207b\u00b9\u00b2 F. A sphere of 1 cm radius in vacuum has capacitance exactly 1 statF in Gaussian units; Gaussian-system electrostatics texts and plasma-physics codes express capacitances in statfarads. 1 statF = 10\u2075/c\u00b2 F \u2248 1.113 pF.",
    symbol: "statF"
  },
  nanofarads: {
    name: "Nanofarads",
    description: "The nanofarad (nF) equals 10\u207b\u2079 F, covering ceramic and film bypass capacitors, ESD protection networks, and resonant filter circuits. X7R ceramic decoupling capacitors are commonly 10-100 nF; RC snubber networks in power electronics use 1-100 nF; audio equalisation and RF tuning networks use nanofarad-range components. 1 nF = 10\u207b\u00b3 \u00b5F = 10\u207b\u2079 F.",
    symbol: "nF"
  },
  microfarads: {
    name: "Microfarads",
    description: "The microfarad (\u00b5F) equals 10\u207b\u2076 F, the practical scale for power supply filtering, motor-run capacitors, and audio crossovers. Aluminium electrolytic capacitors range from 1 \u00b5F to 100\u202f000 \u00b5F; DC link bus capacitors in inverter drives are 100-1\u202f000 \u00b5F; motor-run capacitors are 1-100 \u00b5F per phase; audio crossover networks use 1-100 \u00b5F film capacitors. 1 \u00b5F = 10\u207b\u00b3 mF = 10\u207b\u2076 F.",
    symbol: "\u00b5F"
  },
  millifarads: {
    name: "Millifarads",
    description: "The millifarad (mF) equals 10\u207b\u00b3 F, spanning large electrolytic capacitors and low-capacitance supercapacitors. Camera strobe flash capacitors are 2\u202f000-5\u202f000 \u00b5F = 2-5 mF; bulk reservoir capacitors in high-current amplifiers reach 10-100 mF; coin-cell electric double-layer capacitors (EDLC) for SRAM backup typically provide 100-1\u202f000 mF. 1 mF = 10\u207b\u00b3 F = 10\u00b3 \u00b5F.",
    symbol: "mF"
  },
  farads: {
    name: "Farads",
    description: "The farad (F) is the SI derived unit of electrical capacitance, equal to 1 coulomb per volt (1 C/V = 1 A\u00b2\u00b7s\u2074\u00b7kg\u207b\u00b9\u00b7m\u207b\u00b2), named after Michael Faraday (1791-1867). One farad is impractically large for classical components: electric double-layer supercapacitors (EDLC) are the only practical devices in the farad range, from 1 F coin cells to 3\u202f000 F modules used in regenerative braking. 1 F = 10\u00b3 mF = 10\u2076 \u00b5F.",
    symbol: "F"
  },
  kilofarads: {
    name: "Kilofarads",
    description: "The kilofarad (kF) equals 10\u00b3 F, reached only by large supercapacitor assemblies for energy buffering. Industrial supercapacitor modules for tram and metro regenerative braking are rated 500-10\u202f000 F = 0.5-10 kF; hybrid-bus energy buffers stack 3\u202f000 F cells to achieve several kilofarads; grid fast-response voltage-stabilisation banks are discussed in the kilofarad range. 1 kF = 10\u00b3 F = 10\u207b\u00b3 MF.",
    symbol: "kF"
  },
  megafarads: {
    name: "Megafarads",
    description: "The megafarad (MF) equals 10\u2076 F, a scale not reached by any discrete capacitor available today. Theoretical projections of utility-scale ultracapacitor arrays for grid energy storage discuss megafarad totals; the Earth-ionosphere spherical capacitor is estimated at about 0.9 F, so MF is well beyond any natural or engineered capacitor at present. 1 MF = 10\u00b3 kF = 10\u2076 F.",
    symbol: "MF"
  },
  gigafarads: {
    name: "Gigafarads",
    description: "The gigafarad (GF) equals 10\u2079 F, numerically identical to the CGS-EMU abfarad. No physical capacitor approaches 1 GF; the value arises in theoretical superconducting circuit analysis and in historical CGS-EMU electromagnetic texts where the abfarad (= 1 GF) was the natural capacitance unit. 1 GF = 10\u00b3 MF = 10\u2079 F = 1 abF.",
    symbol: "GF"
  },
  abfarads: {
    name: "Abfarads",
    description: "The abfarad (abF) is the capacitance unit of the CGS-EMU system, equal to 1 abC / 1 abV = 10 C / 10\u207b\u2078 V = 10\u2079 F, exactly equal to 1 GF in SI. It appeared in nineteenth-century and early twentieth-century electromagnetic engineering texts alongside abohms and abamperes; 1 abF represents the capacitance of a connection storing 10 C at 10 nV. 1 abF = 10\u2079 F = 1 GF.",
    symbol: "abF"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toFarads);
}

function convertCapacitance() {
  convertFactorBased(toFarads);
}

initConverterPage();
