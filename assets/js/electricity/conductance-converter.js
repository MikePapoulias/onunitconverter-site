// Base unit: siemens (S) - the SI derived unit of electrical conductance.
// Electrical conductance G [M\u207b\u00b9 L\u207b\u00b2 T\u00b3 A\u00b2] is the reciprocal of resistance: G = 1/R.
// All factors express how many siemens equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 S = 1 A/V = 1 \u03a9\u207b\u00b9 = 1 kg\u207b\u00b9\u00b7m\u207b\u00b2\u00b7A\u00b2\u00b7s\u00b3
//
// SI prefix units (all exact by definition):
//   1 pS = 10\u207b\u00b9\u00b2 S    1 nS = 10\u207b\u2079 S    1 \u00b5S = 10\u207b\u2076 S
//   1 mS = 10\u207b\u00b3 S    1 kS = 10\u00b3 S     1 MS = 10\u2076 S    1 GS = 10\u2079 S    1 TS = 10\u00b9\u00b2 S
//
// Statsiemens (CGS-Gaussian) - exact:
//   1 statS = 1/stat\u03a9 = 1/(c\u00b2 \u00d7 10\u207b\u2075) S = 10\u2075/c\u00b2 S
//           = 10\u2075 / (299 792 458)\u00b2 S
//           \u2248 1.112 650 056 \u00d7 10\u207b\u00b9\u00b2 S   (exact, since c is exact)
//
// Absiemens (CGS-EMU) - exact:
//   1 abS = 1/ab\u03a9 = 1/(10\u207b\u2079 \u03a9) = 10\u2079 S  (exactly equal to 1 GS)

const toSiemens = {
  // -- Picosiemens ------------------------------------------------------------
  picosiemens:  1e-12,                         // exact: 10\u207b\u00b9\u00b2 S (SI prefix pico)
  // -- Statsiemens (CGS-Gaussian) ---------------------------------------------
  statsiemens:  1e5 / (299792458 * 299792458), // exact: 10\u2075/c\u00b2 S \u2248 1.113 \u00d7 10\u207b\u00b9\u00b2 S
  // -- Nanosiemens ------------------------------------------------------------
  nanosiemens:  1e-9,                          // exact: 10\u207b\u2079 S (SI prefix nano)
  // -- Microsiemens -----------------------------------------------------------
  microsiemens: 1e-6,                          // exact: 10\u207b\u2076 S (SI prefix micro)
  // -- Millisiemens -----------------------------------------------------------
  millisiemens: 1e-3,                          // exact: 10\u207b\u00b3 S (SI prefix milli)
  // -- Siemens (SI derived unit) ----------------------------------------------
  siemens:      1,                             // reference (base unit)
  // -- Kilosiemens ------------------------------------------------------------
  kilosiemens:  1e3,                           // exact: 10\u00b3 S (SI prefix kilo)
  // -- Megasiemens ------------------------------------------------------------
  megasiemens:  1e6,                           // exact: 10\u2076 S (SI prefix mega)
  // -- Gigasiemens ------------------------------------------------------------
  gigasiemens:  1e9,                           // exact: 10\u2079 S (SI prefix giga)
  // -- Absiemens (CGS-EMU) ----------------------------------------------------
  absiemens:    1e9,                           // exact: 1/ab\u03a9 = 1/(10\u207b\u2079 \u03a9) = 10\u2079 S (= 1 GS)
  // -- Terasiemens ------------------------------------------------------------
  terasiemens:  1e12,                          // exact: 10\u00b9\u00b2 S (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  picosiemens: {
    name: "Picosiemens",
    description: "The picosiemens (pS) equals 10\u207b\u00b9\u00b2 S, the practical scale for leakage conductance in MOSFET gate oxides, precision insulators, and high-impedance voltage probes. A 10 G\u03a9 oscilloscope probe presents 100 pS input conductance; reverse-leakage in a silicon signal diode at room temperature is typically 1-10 pS; PTFE cable insulation is specified below 1 pS/m. 1 pS = 10\u207b\u00b3 nS = 10\u207b\u00b9\u00b2 S.",
    symbol: "pS"
  },
  statsiemens: {
    name: "Statsiemens",
    description: "The statsiemens (statS) is the conductance unit of the CGS-Gaussian system, equal to 1/stat\u03a9 = 10\u2075/c\u00b2 S \u2248 1.113 \u00d7 10\u207b\u00b9\u00b2 S (exact, where c = 299\u202f792\u202f458 m/s). It is the reciprocal of the statohm and appears in electrostatics and plasma-physics texts where Coulomb's law is written without \u03b5\u2080; a resistor of 1 stat\u03a9 has conductance exactly 1 statS. 1 statS \u2248 1.113 pS.",
    symbol: "statS"
  },
  nanosiemens: {
    name: "Nanosiemens",
    description: "The nanosiemens (nS) equals 10\u207b\u2079 S, the scale for JFET gate leakage, ion-channel patch-clamp measurements, and high-value resistor characterisation. A 1 G\u03a9 resistor presents 1 nS; single open ion channels in biological membranes are quantified in nanosiemens by patch-clamp electrophysiology; environmental soil conductivity sensors use nanosiemens readouts at high resistivity. 1 nS = 10\u207b\u00b3 \u00b5S = 10\u207b\u2079 S.",
    symbol: "nS"
  },
  microsiemens: {
    name: "Microsiemens",
    description: "The microsiemens (\u00b5S) equals 10\u207b\u2076 S, the standard unit for water-quality conductivity measurement and analogue signal-path impedance. Drinking water has conductivity of 50-500 \u00b5S/cm; a 1 M\u03a9 resistor presents 1 \u00b5S; conductivity meters for hydroponics and aquaculture read directly in microsiemens or millisiemens per centimetre. 1 \u00b5S = 10\u207b\u00b3 mS = 10\u207b\u2076 S.",
    symbol: "\u00b5S"
  },
  millisiemens: {
    name: "Millisiemens",
    description: "The millisiemens (mS) equals 10\u207b\u00b3 S, covering physiological saline, seawater, and electrochemical cell conductances. Seawater conductivity is about 50 mS/cm; blood plasma is around 15 mS/cm; a 1 k\u03a9 resistor presents 1 mS; a forward-biased transistor junction at a few milliamperes has dynamic conductance in the millisiemens range. 1 mS = 10\u207b\u00b3 S = 10\u00b3 \u00b5S.",
    symbol: "mS"
  },
  siemens: {
    name: "Siemens",
    description: "The siemens (S) is the SI derived unit of electrical conductance, equal to 1 ampere per volt (1 A/V = 1 \u03a9\u207b\u00b9 = 1 kg\u207b\u00b9\u00b7m\u207b\u00b2\u00b7A\u00b2\u00b7s\u00b3), named after Werner von Siemens (1816-1892). Also known as the mho (\u2127), it describes how easily current flows: a 1 \u03a9 resistor has 1 S conductance. Power MOSFETs are characterised by 1/R\u209b_\u2092\u2099 in siemens; large RF transistors operate with transconductance of 1-10 S.",
    symbol: "S"
  },
  kilosiemens: {
    name: "Kilosiemens",
    description: "The kilosiemens (kS) equals 10\u00b3 S, encountered in high-conductance metallic connections and power-semiconductor on-state characterisation. A large copper busbar of 100 mm\u00b2 cross-section and 1 m length has conductance of about 60 kS; high-power IGBT modules with R\u209b\u2092\u2099 below 1 m\u03a9 present conductances exceeding 1 kS; arc furnace electrodes exhibit kilosiemens-range contact conductance. 1 kS = 10\u00b3 S = 10\u207b\u00b3 MS.",
    symbol: "kS"
  },
  megasiemens: {
    name: "Megasiemens",
    description: "The megasiemens (MS) equals 10\u2076 S, the scale for very-low-resistance metallic structures such as thick busbars and short heavy-gauge connectors. A 10 cm long, 1 cm\u00b2 copper bar has conductance of roughly 600 MS; aluminium overhead grid feeders have per-span conductances in the megasiemens range; conductance of grain boundaries in polycrystalline conductors at cryogenic temperatures reaches megasiemens. 1 MS = 10\u2076 S = 10\u00b3 kS.",
    symbol: "MS"
  },
  gigasiemens: {
    name: "Gigasiemens",
    description: "The gigasiemens (GS) equals 10\u2079 S, the conductance equivalent of a 1 n\u03a9 resistance and numerically identical to the CGS-EMU absiemens. Short, thick copper interconnects in power electronics - such as a 10 mm thick 10 cm\u00b2 copper slug - approach 1 GS conductance; cryogenically cooled metallic bar specimens near absolute zero show gigasiemens values. 1 GS = 10\u2079 S = 1 abS.",
    symbol: "GS"
  },
  absiemens: {
    name: "Absiemens",
    description: "The absiemens (abS) is the conductance unit of the CGS-EMU system, equal to 1/ab\u03a9 = 1/(10\u207b\u2079 \u03a9) = 10\u2079 S, exactly identical to 1 GS in SI. It appears in nineteenth- and early-twentieth-century electromagnetic engineering texts; 1 abS corresponds to the conductance of a 1 n\u03a9 connection typical of large cryogenically cooled bus joints or welded thick-copper structures. 1 abS = 10\u2079 S = 1 GS.",
    symbol: "abS"
  },
  terasiemens: {
    name: "Terasiemens",
    description: "The terasiemens (TS) equals 10\u00b9\u00b2 S, the conductance equivalent of a 1 p\u03a9 resistance. No bulk conductor approaches terasiemens conductance at room temperature - even a 1 m\u00b3 copper block has conductance of about 60 GS; terasiemens figures arise in theoretical treatments of macroscopic superconducting structures and in conductor-scaling extrapolations. 1 TS = 10\u00b9\u00b2 S = 10\u00b3 GS.",
    symbol: "TS"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toSiemens);
}

function convertConductance() {
  convertFactorBased(toSiemens);
}

initConverterPage();
