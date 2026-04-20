// Base unit: ampere-turn (A\u00b7t) - the SI practical unit of magnetomotive force.
// Magnetomotive force (MMF) F = N \u00d7 I (number of turns \u00d7 current) drives
// magnetic flux around a magnetic circuit, analogous to EMF (voltage) in an
// electric circuit. "Turn" is dimensionless in SI, so the coherent SI unit is
// the ampere (A), but A\u00b7t is universally used in practice.
// All factors express how many A\u00b7t equal 1 unit of the given measure.
//
// Exact foundations:
//   1 A\u00b7t  = 1 A (SI; "turn" is dimensionless - windings count has no SI unit)
//   1 Gb   = 10/(4\u03c0) A\u00b7t  (exact; gilbert, CGS-EMU/CGS-Gaussian; 4\u03c0 Gb = 10 A\u00b7t)
//
// SI prefix A\u00b7t units (exact by SI prefix definitions):
//   1 fA\u00b7t = 10\u207b\u00b9\u2075 A\u00b7t   1 pA\u00b7t = 10\u207b\u00b9\u00b2 A\u00b7t   1 nA\u00b7t = 10\u207b\u2079 A\u00b7t
//   1 \u00b5A\u00b7t = 10\u207b\u2076 A\u00b7t    1 mA\u00b7t = 10\u207b\u00b3 A\u00b7t     1 kA\u00b7t = 10\u00b3 A\u00b7t
//   1 MA\u00b7t = 10\u2076 A\u00b7t      1 GA\u00b7t = 10\u2079 A\u00b7t
//
// Gilbert-based units (1 Gb = 10/(4\u03c0) A\u00b7t - exact):
//   1 mGb = 10\u207b\u00b3 \u00d7 10/(4\u03c0) A\u00b7t \u2248 7.9577 \u00d7 10\u207b\u2074 A\u00b7t
//   1 Gb  = 10/(4\u03c0) A\u00b7t \u2248 0.79577 A\u00b7t
//   1 kGb = 10\u2074/(4\u03c0) A\u00b7t \u2248 795.77 A\u00b7t
//   1 MGb = 10\u2077/(4\u03c0) A\u00b7t \u2248 7.9577 \u00d7 10\u2075 A\u00b7t
//   1 GGb = 10\u00b9\u2070/(4\u03c0) A\u00b7t \u2248 7.9577 \u00d7 10\u2078 A\u00b7t

const toAmpereTurns = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtoampere_turns:    1e-15,                          // exact: 10\u207b\u00b9\u2075 A\u00b7t (SI prefix femto)
  picoampere_turns:     1e-12,                          // exact: 10\u207b\u00b9\u00b2 A\u00b7t (SI prefix pico)
  nanoampere_turns:     1e-9,                           // exact: 10\u207b\u2079 A\u00b7t (SI prefix nano)
  microampere_turns:    1e-6,                           // exact: 10\u207b\u2076 A\u00b7t (SI prefix micro)
  // -- Gilbert sub-unit (CGS) ------------------------------------------------
  milligilberts:        1e-3 * 10 / (4 * Math.PI),     // exact: 10/(4000\u03c0) A\u00b7t; 1 mGb = 10\u207b\u00b3 Gb
  // -- SI milli prefix -------------------------------------------------------
  milliampere_turns:    1e-3,                           // exact: 10\u207b\u00b3 A\u00b7t (SI prefix milli)
  // -- Gilbert (CGS base unit) -----------------------------------------------
  gilberts:             10 / (4 * Math.PI),             // exact: 10/(4\u03c0) A\u00b7t; 4\u03c0 Gb = 10 A\u00b7t (CGS-EMU)
  // -- Base unit (SI) --------------------------------------------------------
  ampere_turns:         1,                              // reference (base unit)
  // -- Kilo scale ------------------------------------------------------------
  kilogilberts:         1e4 / (4 * Math.PI),            // exact: 10\u2074/(4\u03c0) A\u00b7t; 1 kGb = 10\u00b3 Gb
  kiloampere_turns:     1e3,                            // exact: 10\u00b3 A\u00b7t (SI prefix kilo)
  // -- Mega scale ------------------------------------------------------------
  megagilberts:         1e7 / (4 * Math.PI),            // exact: 10\u2077/(4\u03c0) A\u00b7t; 1 MGb = 10\u2076 Gb
  megaampere_turns:     1e6,                            // exact: 10\u2076 A\u00b7t (SI prefix mega)
  // -- Giga scale ------------------------------------------------------------
  gigagilberts:         1e10 / (4 * Math.PI),           // exact: 10\u00b9\u2070/(4\u03c0) A\u00b7t; 1 GGb = 10\u2079 Gb
  gigaampere_turns:     1e9,                            // exact: 10\u2079 A\u00b7t (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtoampere_turns: {
    name: "Femtoampere-turns",
    description: "The femtoampere-turn (fA\u00b7t) equals 10\u207b\u00b9\u2075 A\u00b7t. Used in SQUID-based nanoscale magnetic sensor calibration and spintronics research where single-turn excitation loops carry femtoampere bias currents. 1 fA\u00b7t = 10\u207b\u00b9\u2075 A\u00b7t.",
    symbol: "fA\u00b7t"
  },
  picoampere_turns: {
    name: "Picoampere-turns",
    description: "The picoampere-turn (pA\u00b7t) equals 10\u207b\u00b9\u00b2 A\u00b7t. Relevant in ultra-sensitive flux detection with SQUID magnetometers for magnetoencephalography (MEG), where millikelvin-cooled coils respond to pA\u00b7t-level signals from neural currents. 1 pA\u00b7t = 10\u207b\u00b9\u00b2 A\u00b7t.",
    symbol: "pA\u00b7t"
  },
  nanoampere_turns: {
    name: "Nanoampere-turns",
    description: "The nanoampere-turn (nA\u00b7t) equals 10\u207b\u2079 A\u00b7t. Applicable in fluxgate and search-coil magnetometer calibration for geomagnetic survey instruments, and in micro-inductor testing for CMOS RF circuits. 1 nA\u00b7t = 10\u207b\u2079 A\u00b7t.",
    symbol: "nA\u00b7t"
  },
  microampere_turns: {
    name: "Microampere-turns",
    description: "The microampere-turn (\u00b5A\u00b7t) equals 10\u207b\u2076 A\u00b7t. Used in precision current transformer calibration and thin-film magnetic sensor testing where small coil excitations generate \u00b5A\u00b7t-scale magnetomotive forces. 1 \u00b5A\u00b7t = 10\u207b\u2076 A\u00b7t.",
    symbol: "\u00b5A\u00b7t"
  },
  milligilberts: {
    name: "Milligilberts",
    description: "The milligilbert (mGb) equals 10\u207b\u00b3 Gb = 10/(4000\u03c0) A\u00b7t \u2248 7.958 \u00d7 10\u207b\u2074 A\u00b7t. A CGS submultiple rarely seen in modern practice; encountered in early 20th-century electrical engineering literature and vintage relay test records. 1 mGb = 10/(4000\u03c0) A\u00b7t.",
    symbol: "mGb"
  },
  milliampere_turns: {
    name: "Milliampere-turns",
    description: "The milliampere-turn (mA\u00b7t) equals 10\u207b\u00b3 A\u00b7t. Practical unit for reed relays and small inductors - a typical reed relay operates at 20-100 mA\u00b7t; audio transformer cores for hearing aids are magnetised at a few mA\u00b7t. 1 mA\u00b7t = 10\u207b\u00b3 A\u00b7t.",
    symbol: "mA\u00b7t"
  },
  gilberts: {
    name: "Gilberts",
    description: "The gilbert (Gb) equals exactly 10/(4\u03c0) A\u00b7t \u2248 0.7958 A\u00b7t, the CGS unit of magnetomotive force named after William Gilbert (1544-1603). Widely used in older relay and electromagnet datasheets; 1 Gb = 1 oersted\u00b7centimetre. 1 Gb = 10/(4\u03c0) A\u00b7t.",
    symbol: "Gb"
  },
  ampere_turns: {
    name: "Ampere-turns",
    description: "The ampere-turn (A\u00b7t) is the SI practical unit of magnetomotive force, defined as F = N \u00d7 I (turns \u00d7 current). A 100-turn relay coil at 10 mA produces 1 A\u00b7t; power transformer cores typically operate at 100-1000 A\u00b7t. 1 A\u00b7t = 1 A (turn is dimensionless in SI).",
    symbol: "A\u00b7t"
  },
  kilogilberts: {
    name: "Kilogilberts",
    description: "The kilogilbert (kGb) equals 10\u00b3 Gb = 10\u2074/(4\u03c0) A\u00b7t \u2248 795.8 A\u00b7t. Used in permanent magnet characterisation and demagnetisation testing; hard ferrite magnets develop a coercive MMF of roughly 1-5 kGb across a centimetre-scale air gap. 1 kGb = 10\u2074/(4\u03c0) A\u00b7t.",
    symbol: "kGb"
  },
  kiloampere_turns: {
    name: "Kiloampere-turns",
    description: "The kiloampere-turn (kA\u00b7t) equals 10\u00b3 A\u00b7t. Standard engineering unit for industrial electromagnets and transformer windings - a 500-turn winding at 2 A produces 1 kA\u00b7t; MRI gradient coils are driven at tens of kA\u00b7t. 1 kA\u00b7t = 10\u00b3 A\u00b7t.",
    symbol: "kA\u00b7t"
  },
  megagilberts: {
    name: "Megagilberts",
    description: "The megagilbert (MGb) equals 10\u2076 Gb = 10\u2077/(4\u03c0) A\u00b7t \u2248 7.958 \u00d7 10\u2075 A\u00b7t. Found in CGS-based calculations for large resistive electromagnets; some superconducting magnetic energy storage (SMES) coils reach the MGb range. 1 MGb = 10\u2077/(4\u03c0) A\u00b7t.",
    symbol: "MGb"
  },
  megaampere_turns: {
    name: "Megaampere-turns",
    description: "The megaampere-turn (MA\u00b7t) equals 10\u2076 A\u00b7t. Characteristic MMF of large superconducting solenoids - a 3 T MRI bore magnet requires roughly 2-5 MA\u00b7t; particle accelerator dipole bending magnets at CERN reach several MA\u00b7t. 1 MA\u00b7t = 10\u2076 A\u00b7t.",
    symbol: "MA\u00b7t"
  },
  gigagilberts: {
    name: "Gigagilberts",
    description: "The gigagilbert (GGb) equals 10\u2079 Gb = 10\u00b9\u2070/(4\u03c0) A\u00b7t \u2248 7.958 \u00d7 10\u2078 A\u00b7t. An extreme unit used in astrophysical and fusion research; pulsed-power Z-pinch drivers and tokamak plasma experiments transiently approach GGb-scale magnetomotive forces. 1 GGb = 10\u00b9\u2070/(4\u03c0) A\u00b7t.",
    symbol: "GGb"
  },
  gigaampere_turns: {
    name: "Gigaampere-turns",
    description: "The gigaampere-turn (GA\u00b7t) equals 10\u2079 A\u00b7t. Relevant only in astrophysics - the equivalent MMF of a magnetar neutron star's surface field spans GA\u00b7t to TA\u00b7t; proposed inertial confinement fusion targets require GA\u00b7t-scale pulsed solenoid drives. 1 GA\u00b7t = 10\u2079 A\u00b7t.",
    symbol: "GA\u00b7t"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toAmpereTurns);
}

function convertMagnetomotiveForce() {
  convertFactorBased(toAmpereTurns);
}

initConverterPage();
