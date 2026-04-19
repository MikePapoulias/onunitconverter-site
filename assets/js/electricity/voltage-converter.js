// Base unit: volt (V) - the SI derived unit of electric potential (voltage).
// Electric potential V [M L² T⁻³ A⁻¹] is the work done per unit charge to
// move a test charge from a reference point to a given point in an electric field.
// All factors express how many volts equal 1 unit of the given measure.
//
// Exact foundations (2019 SI revision):
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 V = 1 W/A = 1 J/C = 1 kg·m²·A⁻¹·s⁻³
//
// SI prefix units (all exact by definition):
//   1 aV = 10⁻¹⁸ V    1 fV = 10⁻¹⁵ V    1 pV = 10⁻¹² V
//   1 nV = 10⁻⁹ V     1 µV = 10⁻⁶ V     1 mV = 10⁻³ V
//   1 kV = 10³ V       1 MV = 10⁶ V      1 GV = 10⁹ V      1 TV = 10¹² V
//
// Abvolt (CGS-EMU) - exact:
//   1 abV = 10⁻⁸ V  (from 1 erg/abC = 10⁻⁷ J / 10 C = 10⁻⁸ V, exact)
//
// Statvolt (CGS-Gaussian) - exact:
//   1 statV = 1 erg/statC
//           = 10⁻⁷ J / (1/(10c) C)
//           = 10⁻⁷ × 10 × c V
//           = c × 10⁻⁶ V
//           = 299 792 458 × 10⁻⁶ V
//           = 299.792 458 V        (exact, since c is exact)

const toVolts = {
  // -- Attovolt ---------------------------------------------------------------
  attovolts:    1e-18,               // exact: 10⁻¹⁸ V (SI prefix atto)
  // -- Femtovolt --------------------------------------------------------------
  femtovolts:   1e-15,               // exact: 10⁻¹⁵ V (SI prefix femto)
  // -- Picovolt ---------------------------------------------------------------
  picovolts:    1e-12,               // exact: 10⁻¹² V (SI prefix pico)
  // -- Nanovolt ---------------------------------------------------------------
  nanovolts:    1e-9,                // exact: 10⁻⁹ V (SI prefix nano)
  // -- Abvolt (CGS-EMU) -------------------------------------------------------
  abvolts:      1e-8,                // exact: 1 erg/abC = 10⁻⁸ V
  // -- Microvolt --------------------------------------------------------------
  microvolts:   1e-6,                // exact: 10⁻⁶ V (SI prefix micro)
  // -- Millivolt --------------------------------------------------------------
  millivolts:   1e-3,                // exact: 10⁻³ V (SI prefix milli)
  // -- Volt (SI base unit) ----------------------------------------------------
  volts:        1,                   // reference (base unit)
  // -- Statvolt (CGS-Gaussian) ------------------------------------------------
  statvolts:    299792458 / 1e6,     // exact: c × 10⁻⁶ V = 299.792 458 V
  // -- Kilovolt ---------------------------------------------------------------
  kilovolts:    1e3,                 // exact: 10³ V (SI prefix kilo)
  // -- Megavolt ---------------------------------------------------------------
  megavolts:    1e6,                 // exact: 10⁶ V (SI prefix mega)
  // -- Gigavolt ---------------------------------------------------------------
  gigavolts:    1e9,                 // exact: 10⁹ V (SI prefix giga)
  // -- Teravolt ---------------------------------------------------------------
  teravolts:    1e12,                // exact: 10¹² V (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attovolts: {
    name: "Attovolts",
    description: "The attovolt (aV) equals 10\u207b\u00b9\u2078 V, representing the tiniest detectable voltage signals in quantum electronics. SQUID (Superconducting Quantum Interference Device) magnetometers in flux-locked-loop mode achieve sub-attovolt-equivalent noise floors; theoretical calculations of vacuum fluctuations in nanoscale Josephson junctions reference the attovolt range. 1 aV = 10\u207b00b3 fV = 10\u207b\u00b9\u2078 V.",
    symbol: "aV"
  },
  femtovolts: {
    name: "Femtovolts",
    description: "The femtovolt (fV) equals 10\u207b\u00b9\u2075 V, at the threshold of the most sensitive voltage amplifiers ever built. Cryogenic SQUID amplifiers for neutrino-mass experiments and dark-matter searches operate near 1 fV/\u221aHz noise levels; Josephson-voltage-standard arrays show thermal voltage noise of a few femtovolts at millikelvin temperatures. 1 fV = 10\u207b00b3 pV = 10\u00b3 aV.",
    symbol: "fV"
  },
  picovolts: {
    name: "Picovolts",
    description: "The picovolt (pV) equals 10\u207b\u00b9\u00b2 V, the realm of precision metrology and quantum voltage standards. The Josephson voltage standard used by national metrology institutes (NIST, PTB, NPL) reproduces the volt to within 0.01 pV using Cooper-pair tunnelling arrays driven by microwave radiation. Thermocouple noise in cryogenic circuits is also measured in picovolts. 1 pV = 10\u207b00b3 nV = 10\u00b3 fV.",
    symbol: "pV"
  },
  nanovolts: {
    name: "Nanovolts",
    description: "The nanovolt (nV) equals 10\u207b\u2079 V, the sensitivity scale of precision nanovoltmeters and cryogenic measurement chains. Type K thermocouples generate about 40 \u00b5V/\u00b0C, but at cryogenic temperatures the Seebeck coefficient drops to nanvolts per kelvin; lock-in amplifiers in MEMS research resolve signals of 1-10 nV. A modern 8.5-digit benchtop multimeter (e.g. Agilent 34420A) has a nanovolt resolution range. 1 nV = 10\u207b00b3 \u00b5V = 10\u00b3 pV.",
    symbol: "nV"
  },
  abvolts: {
    name: "Abvolts",
    description: "The abvolt (abV) equals exactly 10\u207b\u2078 V - the electric potential unit of the CGS-EMU (electromagnetic) system, defined as 1 erg per abcoulomb (= 10\u207b\u2077 J / 10 C). One abvolt per centimetre is the corresponding electric field unit (abV/cm). The abvolt appears in nineteenth- and early-twentieth-century electromagnetic engineering texts and in nuclear physics tables where CGS-EMU units are retained. 1 abV = 10\u207b\u2078 V = 10 nV.",
    symbol: "abV"
  },
  microvolts: {
    name: "Microvolts",
    description: "The microvolt (\u00b5V) equals 10\u207b\u2076 V, the scale of bioelectric signals and precision sensor outputs. EEG electroencephalography records brain-wave amplitudes of 10-100 \u00b5V; a standard thermocouple junction generates 5-40 \u00b5V/\u00b0C depending on type; Wheatstone-bridge strain-gauge outputs under load are typically 1-100 \u00b5V/V excitation. Instrumentation amplifiers with sub-microvolt offset are used in ECG front-ends. 1 \u00b5V = 10\u207b\u00b3 mV = 10\u00b3 nV.",
    symbol: "\u00b5V"
  },
  millivolts: {
    name: "Millivolts",
    description: "The millivolt (mV) equals 10\u207b\u00b3 V, the everyday scale of biomedical and electrochemical measurements. ECG R-wave peaks are 0.5-3 mV; a silicon p-n junction has a forward voltage of about 600 mV; pH electrodes produce roughly 59.2 mV per pH unit (Nernst equation at 25 \u00b0C); lithium-ion cells have an end-of-discharge cutoff at 2\u202f700-3\u202f000 mV. 1 mV = 10\u207b\u00b3 V = 10\u00b3 \u00b5V.",
    symbol: "mV"
  },
  volts: {
    name: "Volts",
    description: "The volt (V) is the SI derived unit of electric potential, defined as 1 joule per coulomb (1 J/C = 1 W/A = 1 kg\u00b7m\u00b2\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3). Named after Alessandro Volta who built the first electrochemical battery in 1800. Common benchmarks: a fresh AA alkaline cell is 1.5 V; USB 2.0 supplies 5 V; a car lead-acid battery is 12 V; household electricity in Europe is 230 V RMS. The volt is reproduced internationally via the Josephson voltage standard.",
    symbol: "V"
  },
  statvolts: {
    name: "Statvolts",
    description: "The statvolt (statV) is the electric potential unit of the CGS-Gaussian system, equal to 1 erg/statC = c \u00d7 10\u207b\u2076 V = 299.792\u202f458 V (exact, where c = 299\u202f792\u202f458 m/s). In Gaussian CGS the electric field is measured in statV/cm, and Coulomb's law is written without \u03b5\u2080. The statvolt appears in electrostatics and atomic-physics textbooks and in calculations involving the fine-structure constant. 1 statV \u2248 299.8 V.",
    symbol: "statV"
  },
  kilovolts: {
    name: "Kilovolts",
    description: "The kilovolt (kV) equals 10\u00b3 V, used in high-voltage power supplies, X-ray machines, and electricity distribution. Dental and medical X-ray tubes operate at 60-120 kV; CRT television picture tubes required 20-30 kV for the final anode; distribution transformers step down from transmission lines at 11-33 kV to the local grid. Tesla coils generate sparks at tens to hundreds of kilovolts. 1 kV = 10\u00b3 V = 10\u207b\u00b3 MV.",
    symbol: "kV"
  },
  megavolts: {
    name: "Megavolts",
    description: "The megavolt (MV) equals 10\u2076 V, the scale of lightning and particle accelerator potentials. A typical cloud-to-ground lightning channel has a potential difference of 100-300 MV between cloud and ground; Van de Graaff generators in tandem accelerators reach 10-25 MV; ultra-high-voltage direct-current (UHVDC) transmission lines operate at 0.8-1.1 MV to carry bulk power thousands of kilometres with low losses. 1 MV = 10\u2076 V = 10\u207b\u00b3 GV.",
    symbol: "MV"
  },
  gigavolts: {
    name: "Gigavolts",
    description: "The gigavolt (GV) equals 10\u2079 V, arising in extreme natural phenomena and in theoretical particle-physics contexts. Ball lightning and superbolts - the most energetic lightning events - are estimated to involve potentials approaching 1 GV; pulsed-power generators like the Sandia Z Machine produce multi-GV transients for fusion research; the electrostatic potential of a highly charged Van Allen belt particle can be expressed in gigavolts. 1 GV = 10\u2079 V = 10\u207b\u00b3 TV.",
    symbol: "GV"
  },
  teravolts: {
    name: "Teravolts",
    description: "The teravolt (TV) equals 10\u00b9\u00b2 V, far beyond any engineered device and encountered only in astrophysical contexts. The interstellar medium near magnetar-class neutron stars and in active galactic nuclei jets can sustain electric field regions with potential differences estimated at teravolt scales; cosmic-ray particles with energies of 10\u00b9\u2076-10\u00b2\u00b0 eV correspond to equivalent accelerating voltages of teravolts to exavolts. 1 TV = 10\u00b9\u00b2 V = 10\u207b\u00b3 PV.",
    symbol: "TV"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toVolts);
}

function convertVoltage() {
  convertFactorBased(toVolts);
}

initConverterPage();
