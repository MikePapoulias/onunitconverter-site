// Base unit: ampere (A) - the SI base unit of electric current.
// Electric current I is the rate of flow of electric charge past a point.
// All factors express how many amperes equal 1 unit of the given measure.
//
// Exact foundations (2019 SI revision):
//   e   = 1.602 176 634 × 10⁻¹⁹ C   (exact, elementary charge definition)
//   1 A is defined by fixing e; corresponds to e/s per elementary charge
//   c   = 299 792 458 m/s             (exact, speed of light definition)
//
// SI prefix units (all exact by definition):
//   1 aA = 10⁻¹⁸ A    1 fA = 10⁻¹⁵ A    1 pA = 10⁻¹² A
//   1 nA = 10⁻⁹ A     1 µA = 10⁻⁶ A     1 mA = 10⁻³ A
//   1 kA = 10³ A       1 MA = 10⁶ A      1 GA = 10⁹ A
//
// Statampere (CGS-Gaussian) - exact:
//   1 statA = 1 statC/s = 1/(10 × c) A   where c = 2.99792458 × 10⁸ m/s
//           = 1/(2.99792458 × 10⁹) A ≈ 3.335 640 951 × 10⁻¹⁰ A
//
// Abampere / Biot (CGS-EMU) - exact:
//   1 abA = 1 Bi = 10 A  (from the CGS-EMU definition: two wires 1 cm apart
//           carrying 1 abA each experience 2 dyn/cm force)

const toAmperes = {
  // -- Attoampere -------------------------------------------------------------
  attoamperes:  1e-18,               // exact: 10⁻¹⁸ A (SI prefix atto)
  // -- Femtoampere ------------------------------------------------------------
  femtoamperes: 1e-15,               // exact: 10⁻¹⁵ A (SI prefix femto)
  // -- Picoampere -------------------------------------------------------------
  picoamperes:  1e-12,               // exact: 10⁻¹² A (SI prefix pico)
  // -- Statampere (CGS-Gaussian) ----------------------------------------------
  statamperes:  1 / (2.99792458e9),  // exact: 1 statC/s = 1/(10c) A ≈ 3.336e-10 A
  // -- Nanoampere -------------------------------------------------------------
  nanoamperes:  1e-9,                // exact: 10⁻⁹ A (SI prefix nano)
  // -- Microampere ------------------------------------------------------------
  microamperes: 1e-6,                // exact: 10⁻⁶ A (SI prefix micro)
  // -- Milliampere ------------------------------------------------------------
  milliamperes: 1e-3,                // exact: 10⁻³ A (SI prefix milli)
  // -- Ampere (SI base unit) --------------------------------------------------
  amperes:      1,                   // reference (base unit)
  // -- Abampere / Biot (CGS-EMU) ----------------------------------------------
  abamperes:    10,                  // exact: 1 abA = 1 Bi = 10 A
  // -- Kiloampere -------------------------------------------------------------
  kiloamperes:  1e3,                 // exact: 10³ A (SI prefix kilo)
  // -- Megaampere -------------------------------------------------------------
  megaamperes:  1e6,                 // exact: 10⁶ A (SI prefix mega)
  // -- Gigaampere -------------------------------------------------------------
  gigaamperes:  1e9,                 // exact: 10⁹ A (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attoamperes: {
    name: "Attoamperes",
    description: "The attoampere (aA) equals 10\u207b\u00b9\u2078 A, the scale of single-electron tunnelling currents in quantum devices. Individual electrons tunnelling through a molecular junction or quantum dot produce average currents of order 1-100 aA when measured at sub-microsecond resolution; cryogenic shot-noise electrometers achieve sub-attoampere sensitivity. 1 aA = 10\u207b\u00b3 fA = 10\u207b\u00b9\u2078 A.",
    symbol: "aA"
  },
  femtoamperes: {
    name: "Femtoamperes",
    description: "The femtoampere (fA) equals 10\u207b\u00b9\u2075 A, encountered in patch-clamp background noise, advanced CMOS sub-threshold leakage, and electrochemical scanning probe measurements. Individual ion channels in biological membranes produce baseline noise currents of a few femtoamperes; the off-state leakage of a modern 3 nm transistor is well below 1 fA per device. 1 fA = 10\u207b\u00b3 pA = 10\u00b3 aA.",
    symbol: "fA"
  },
  picoamperes: {
    name: "Picoamperes",
    description: "The picoampere (pA) equals 10\u207b\u00b9\u00b2 A, the standard scale for electrometer measurements, reverse-bias diode leakage, and single ion-channel currents in patch-clamp electrophysiology. A typical open potassium channel carries 1-20 pA; high-quality electrometer inputs resolve below 1 pA; insulation resistance measurements on cables are reported in pA at known voltage. 1 pA = 10\u207b\u00b3 nA = 10\u00b3 fA.",
    symbol: "pA"
  },
  statamperes: {
    name: "Statamperes",
    description: "The statampere (statA) is the current unit of the CGS-Gaussian system, equal to 1 statC/s = 1/(10c) A \u2248 3.336 \u00d7 10\u207b\u00b9\u2070 A (exact, since c = 2.997\u202f924\u202f58 \u00d7 10\u2078 m/s is exact). Two long parallel wires each carrying 1 statA and separated by 1 cm experience a force of 1/c\u00b2 dyn per centimetre. The statampere is used in electrostatics texts where Coulomb's law is written without \u03b5\u2080. 1 statA \u2248 333.6 pA.",
    symbol: "statA"
  },
  nanoamperes: {
    name: "Nanoamperes",
    description: "The nanoampere (nA) equals 10\u207b\u2079 A, typical for reverse saturation currents of silicon diodes, quiescent supply currents of CMOS logic, and microelectrode measurements in analytical electrochemistry. A silicon p-n junction at room temperature has a saturation current of 1-10 nA; a well-designed op-amp input bias current is 1-100 nA; wearable biosensors commonly operate in the nanoampere range. 1 nA = 10\u207b\u00b3 \u00b5A = 10\u00b3 pA.",
    symbol: "nA"
  },
  microamperes: {
    name: "Microamperes",
    description: "The microampere (\u00b5A) equals 10\u207b\u2076 A, common in low-power sensor circuits, analogue signal conditioning, and bioelectrical measurement. Surface ECG electrodes record body currents of 1-100 \u00b5A; a 1 mW signal at 5 V draws 200 \u00b5A; modern low-power microcontrollers sleep at 1-10 \u00b5A, enabling coin-cell operation for months or years. 1 \u00b5A = 10\u207b\u00b3 mA = 10\u00b3 nA.",
    symbol: "\u00b5A"
  },
  milliamperes: {
    name: "Milliamperes",
    description: "The milliampere (mA) equals 10\u207b\u00b3 A, the everyday unit in consumer electronics and safety standards. Standard LEDs operate at 5-30 mA; USB 2.0 ports supply up to 500 mA; USB-C fast-charging delivers 3\u202f000-5\u202f000 mA. The milliampere is also the clinically important range for electric shock - ventricular fibrillation threshold is around 100 mA, and 1 mA is the threshold of perception. 1 mA = 10\u207b\u00b3 A = 10\u00b3 \u00b5A.",
    symbol: "mA"
  },
  amperes: {
    name: "Amperes",
    description: "The ampere (A) is the SI base unit of electric current, defined since 2019 by fixing the elementary charge e = 1.602\u202f176\u202f634 \u00d7 10\u207b\u00b9\u2079 C. One ampere corresponds to approximately 6.241 \u00d7 10\u00b9\u2078 electrons passing a cross-section per second. Common benchmarks: a 60 W incandescent lamp draws 0.5 A at 120 V; household circuit breakers protect at 10-30 A; a car starter motor draws 100-200 A on cranking.",
    symbol: "A"
  },
  abamperes: {
    name: "Abamperes",
    description: "The abampere (abA), also called the biot (Bi), equals exactly 10 A - the current unit of the CGS-EMU (electromagnetic) system. Two long parallel wires each carrying 1 abA and separated by 1 cm experience a force of exactly 2 dyn per centimetre; this definition directly parallels the original 1948 SI definition of the ampere. The abampere appears in nineteenth- and early-twentieth-century electrical engineering literature. 1 abA = 1 Bi = 10 A.",
    symbol: "abA"
  },
  kiloamperes: {
    name: "Kiloamperes",
    description: "The kiloampere (kA) equals 10\u00b3 A, the scale of industrial arc furnaces, short-circuit fault currents in power networks, and lightning return strokes. Medium-frequency induction furnaces for steel melting operate at 1-10 kA; substation busbar faults can reach 50-100 kA; a typical cloud-to-ground lightning stroke carries 10-30 kA for tens of microseconds. 1 kA = 10\u00b3 A = 10\u207b\u00b3 MA.",
    symbol: "kA"
  },
  megaamperes: {
    name: "Megaamperes",
    description: "The megaampere (MA) equals 10\u2076 A, encountered in pulsed-power research, electromagnetic launcher experiments, and Z-pinch plasma physics. The Sandia Z Machine delivers peak currents of 20-26 MA to drive inertial confinement fusion implosions; large-scale rail-gun prototypes operate at 1-5 MA; nuclear-weapon electromagnetic pulse can induce megaampere transients in extended conductors. 1 MA = 10\u2076 A = 10\u00b3 kA.",
    symbol: "MA"
  },
  gigaamperes: {
    name: "Gigaamperes",
    description: "The gigaampere (GA) equals 10\u2079 A, a scale that lies beyond any man-made device and arises only in extreme astrophysical or geophysical contexts. Large-scale magnetospheric Birkeland field-aligned currents between Earth's ionosphere and magnetosphere are estimated at 1-10 MA total, well below 1 GA; however, pulsar magnetosphere discharge models and neutron-star lightning analogues are sometimes expressed in gigaampere terms. 1 GA = 10\u2079 A = 10\u00b3 MA.",
    symbol: "GA"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toAmperes);
}

function convertCurrent() {
  convertFactorBased(toAmperes);
}

initConverterPage();
