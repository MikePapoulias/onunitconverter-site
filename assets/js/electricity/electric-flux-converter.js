// Base unit: volt-metre (V\u00b7m) - the SI coherent unit of electric flux.
// Electric flux \u03a6_E [M L\u00b3 T\u207b\u00b3 A\u207b\u00b9] is the surface integral of the electric field: \u03a6_E = \u222eE\u00b7dA.
// All factors express how many V\u00b7m equal 1 unit of the given measure.
//
// Exact foundations:
//   c    = 299 792 458 m/s          (exact, speed of light definition)
//   1 cm = 0.01 m                   (exact)
//   1 V\u00b7m = 1 N\u00b7m\u00b2/C = 1 kg\u00b7m\u00b3\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3  (SI derived unit, exact equivalences)
//
// SI prefix units (all exact by definition):
//   1 fV\u00b7m = 10\u207b\u00b9\u2075 V\u00b7m    1 pV\u00b7m = 10\u207b\u00b9\u00b2 V\u00b7m    1 nV\u00b7m = 10\u207b\u2079 V\u00b7m
//   1 \u00b5V\u00b7m = 10\u207b\u2076 V\u00b7m     1 mV\u00b7m = 10\u207b\u00b3 V\u00b7m      1 kV\u00b7m = 10\u00b3 V\u00b7m
//   1 MV\u00b7m = 10\u2076 V\u00b7m      1 GV\u00b7m = 10\u2079 V\u00b7m
//
// Per-centimetre variants (1 cm = 0.01 m - exact):
//   1 V\u00b7cm  = 1 V \u00d7 0.01 m = 10\u207b\u00b2 V\u00b7m
//   1 kV\u00b7cm = 10\u00b3 V \u00d7 0.01 m = 10 V\u00b7m
//
// Abvolt-centimetre (CGS-EMU) - exact:
//   1 abV = 10\u207b\u2078 V  (exact)
//   1 abV\u00b7cm = 10\u207b\u2078 V \u00d7 0.01 m = 10\u207b\u00b9\u2070 V\u00b7m
//
// Statvolt-centimetre (CGS-Gaussian) - exact:
//   1 statV = c \u00d7 10\u207b\u2076 V  (exact, c = 299 792 458 m/s)
//   1 statV\u00b7cm = c \u00d7 10\u207b\u2076 V \u00d7 0.01 m = c \u00d7 10\u207b\u2078 V\u00b7m
//              \u2248 2.99792458 V\u00b7m  (between V\u00b7m and 10 V\u00b7m)

const toVoltMetres = {
  // -- Femtovolt-metre -------------------------------------------------------
  femtovolt_metres:            1e-15,                     // exact: 10\u207b\u00b9\u2075 V\u00b7m (SI prefix femto)
  // -- Picovolt-metre --------------------------------------------------------
  picovolt_metres:             1e-12,                     // exact: 10\u207b\u00b9\u00b2 V\u00b7m (SI prefix pico)
  // -- Abvolt-centimetre (CGS-EMU) -------------------------------------------
  abvolt_centimetres:          1e-8 * 0.01,               // exact: 10\u207b\u2078 V \u00d7 0.01 m = 10\u207b\u00b9\u2070 V\u00b7m
  // -- Nanovolt-metre --------------------------------------------------------
  nanovolt_metres:             1e-9,                      // exact: 10\u207b\u2079 V\u00b7m (SI prefix nano)
  // -- Microvolt-metre -------------------------------------------------------
  microvolt_metres:            1e-6,                      // exact: 10\u207b\u2076 V\u00b7m (SI prefix micro)
  // -- Millivolt-metre -------------------------------------------------------
  millivolt_metres:            1e-3,                      // exact: 10\u207b\u00b3 V\u00b7m (SI prefix milli)
  // -- Volt-centimetre -------------------------------------------------------
  volt_centimetres:            0.01,                      // exact: 1 V \u00d7 0.01 m = 10\u207b\u00b2 V\u00b7m
  // -- Volt-metre (SI unit) --------------------------------------------------
  volt_metres:                 1,                         // reference (base unit)
  // -- Statvolt-centimetre (CGS-Gaussian) ------------------------------------
  statvolt_centimetres:        299792458 * 1e-8,          // exact: c \u00d7 10\u207b\u2078 V\u00b7m \u2248 2.99792458 V\u00b7m
  // -- Kilovolt-centimetre ---------------------------------------------------
  kilovolt_centimetres:        1e3 * 0.01,                // exact: 10\u00b3 V \u00d7 0.01 m = 10 V\u00b7m
  // -- Kilovolt-metre --------------------------------------------------------
  kilovolt_metres:             1e3,                       // exact: 10\u00b3 V\u00b7m (SI prefix kilo)
  // -- Megavolt-metre --------------------------------------------------------
  megavolt_metres:             1e6,                       // exact: 10\u2076 V\u00b7m (SI prefix mega)
  // -- Gigavolt-metre --------------------------------------------------------
  gigavolt_metres:             1e9,                       // exact: 10\u2079 V\u00b7m (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtovolt_metres: {
    name: "Femtovolt-metres",
    description: "The femtovolt-metre (fV\u00b7m) equals 10\u207b\u00b9\u2075 V\u00b7m, the smallest practical scale for electric flux. Shot noise-limited flux measurements in single-electron transistors and nanoscale sensors operate in the fV\u00b7m range; flux through sub-micron apertures exposed to extremely weak quasi-static fields spans fV\u00b7m to pV\u00b7m. 1 fV\u00b7m = 10\u207b\u00b9\u2075 V\u00b7m = 10\u207b\u00b3 pV\u00b7m.",
    symbol: "fV\u00b7m"
  },
  picovolt_metres: {
    name: "Picovolt-metres",
    description: "The picovolt-metre (pV\u00b7m) equals 10\u207b\u00b9\u00b2 V\u00b7m. Electrostatic flux through the gate dielectric area of a MOSFET at sub-threshold bias is in the pV\u00b7m range; flux variations detected by precision Kelvin-probe force microscopy over nanoscale surface patches are in the pV\u00b7m to nV\u00b7m range. 1 pV\u00b7m = 10\u207b\u00b9\u00b2 V\u00b7m = 10\u207b\u00b3 nV\u00b7m.",
    symbol: "pV\u00b7m"
  },
  abvolt_centimetres: {
    name: "Abvolt-centimetres",
    description: "The abvolt-centimetre (abV\u00b7cm) is the electric flux unit of the CGS-EMU system, equal to 10\u207b\u2078 V \u00d7 0.01 m = 10\u207b\u00b9\u2070 V\u00b7m. In the EMU system Gauss's law is applied with charge in abcoulombs and fields in abV/cm; the abV\u00b7cm numerically bridges the pV\u00b7m and nV\u00b7m scales. 1 abV\u00b7cm = 10\u207b\u00b9\u2070 V\u00b7m = 0.1 nV\u00b7m.",
    symbol: "abV\u00b7cm"
  },
  nanovolt_metres: {
    name: "Nanovolt-metres",
    description: "The nanovolt-metre (nV\u00b7m) equals 10\u207b\u2079 V\u00b7m, the scale for precision weak-field sensors. Electric flux through a 1 cm\u00b2 sensor in a 10 \u00b5V/m electromagnetic background is \u22481 nV\u00b7m; flux detected by cryogenic SQUID-based electrometer preamplifiers operates in the nV\u00b7m range. 1 nV\u00b7m = 10\u207b\u2079 V\u00b7m = 10\u207b\u00b3 \u00b5V\u00b7m.",
    symbol: "nV\u00b7m"
  },
  microvolt_metres: {
    name: "Microvolt-metres",
    description: "The microvolt-metre (\u00b5V\u00b7m) equals 10\u207b\u2076 V\u00b7m. Electric flux through a 1 mm\u00b2 sensor element in a 1 V/m field is 1 \u00b5V\u00b7m; ESD-sensitive MEMS membranes with residual charge distributions exhibit local flux in the \u00b5V\u00b7m range; electrochemical double-layer flux on microelectrodes scales to \u00b5V\u00b7m. 1 \u00b5V\u00b7m = 10\u207b\u2076 V\u00b7m = 10\u207b\u00b3 mV\u00b7m.",
    symbol: "\u00b5V\u00b7m"
  },
  millivolt_metres: {
    name: "Millivolt-metres",
    description: "The millivolt-metre (mV\u00b7m) equals 10\u207b\u00b3 V\u00b7m. Electric flux through a 1 cm\u00b2 PCB trace area at 100 V/m field is 1 mV\u00b7m; flux through a coaxial cable cross-section exposed to 10 V/m is in the mV\u00b7m range; Kelvin probe contact-potential measurements on metal surfaces yield mV\u00b7m flux values. 1 mV\u00b7m = 10\u207b\u00b3 V\u00b7m.",
    symbol: "mV\u00b7m"
  },
  volt_centimetres: {
    name: "Volt-centimetres",
    description: "The volt-centimetre (V\u00b7cm) equals 0.01 V\u00b7m, used in semiconductor device physics where field strengths in V/cm and areas in cm\u00b2 are standard. Flux through a 1 cm\u00b2 silicon cross-section at 1 V/cm is 1 V\u00b7cm; breakdown flux integrals in GaN and SiC power devices are quoted in V\u00b7cm and kV\u00b7cm. 1 V\u00b7cm = 0.01 V\u00b7m = 10 mV\u00b7m.",
    symbol: "V\u00b7cm"
  },
  volt_metres: {
    name: "Volt-metres",
    description: "The volt-metre (V\u00b7m) is the SI coherent unit of electric flux, equal to 1 N\u00b7m\u00b2/C = 1 kg\u00b7m\u00b3\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3. By Gauss's law \u03a6 = Q/\u03b5\u2080: a surface enclosing 1 nC has total flux \u22480.113 kV\u00b7m; fair-weather atmospheric flux through a horizontal 1 m\u00b2 is \u2248130 V\u00b7m. 1 V\u00b7m = N\u00b7m\u00b2/C = 100 V\u00b7cm.",
    symbol: "V\u00b7m"
  },
  statvolt_centimetres: {
    name: "Statvolt-centimetres",
    description: "The statvolt-centimetre (statV\u00b7cm) is the electric flux unit of the CGS-Gaussian system, equal to c \u00d7 10\u207b\u2078 V\u00b7m \u2248 2.99792458 V\u00b7m where c = 299\u202f792\u202f458 m/s. In Gaussian units Gauss's law is \u2207\u00b7E = 4\u03c0\u03c1 (no \u03b5\u2080); the statV\u00b7cm is the natural flux unit when fields are in statV/cm and areas in cm\u00b2. 1 statV\u00b7cm \u2248 2.998 V\u00b7m.",
    symbol: "statV\u00b7cm"
  },
  kilovolt_centimetres: {
    name: "Kilovolt-centimetres",
    description: "The kilovolt-centimetre (kV\u00b7cm) equals 10\u00b3 V \u00d7 0.01 m = 10 V\u00b7m. In power device characterisation where field strengths are in kV/cm (typical dielectric breakdown is 3-30 kV/cm) and areas in cm\u00b2, the kV\u00b7cm is the natural flux unit; SiC MOSFET blocking-layer flux integrals are in the kV\u00b7cm range. 1 kV\u00b7cm = 10 V\u00b7m = 10\u00b3 V\u00b7cm.",
    symbol: "kV\u00b7cm"
  },
  kilovolt_metres: {
    name: "Kilovolt-metres",
    description: "The kilovolt-metre (kV\u00b7m) equals 10\u00b3 V\u00b7m. By Gauss's law a surface enclosing 1 \u00b5C has total flux Q/\u03b5\u2080 \u2248 113 kV\u00b7m; flux through a 10 m\u00b2 cross-section of a 100 V/m atmospheric field region is 1 kV\u00b7m; flux integrals in high-voltage substation insulator analysis are in the kV\u00b7m range. 1 kV\u00b7m = 10\u00b3 V\u00b7m.",
    symbol: "kV\u00b7m"
  },
  megavolt_metres: {
    name: "Megavolt-metres",
    description: "The megavolt-metre (MV\u00b7m) equals 10\u2076 V\u00b7m. Electric flux through a 1 m\u00b2 cross-section of a 1 MV/m field near a lightning channel is 1 MV\u00b7m; total flux from a 10 mC enclosed charge is Q/\u03b5\u2080 \u2248 1.13 \u00d7 10\u00b3 MV\u00b7m; large electrostatic precipitator discharge electrodes generate flux in the MV\u00b7m range. 1 MV\u00b7m = 10\u2076 V\u00b7m.",
    symbol: "MV\u00b7m"
  },
  gigavolt_metres: {
    name: "Gigavolt-metres",
    description: "The gigavolt-metre (GV\u00b7m) equals 10\u2079 V\u00b7m, the extreme scale for pulsed-power and plasma physics. Electric flux through a large-aperture (1 m\u00b2) laser-plasma target at GV/m field strengths is in the GV\u00b7m range; total closed-surface flux of a multi-coulomb charge distribution is in the GV\u00b7m scale. 1 GV\u00b7m = 10\u2079 V\u00b7m = 10\u00b3 MV\u00b7m.",
    symbol: "GV\u00b7m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toVoltMetres);
}

function convertElectricFlux() {
  convertFactorBased(toVoltMetres);
}

initConverterPage();
