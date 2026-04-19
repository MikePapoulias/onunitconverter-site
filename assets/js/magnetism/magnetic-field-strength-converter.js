// Base unit: ampere per metre (A/m) - the SI derived unit of magnetic field strength.
// Magnetic field strength H [A m\u207b\u00b9] represents the driving force of a magnetic field,
// independent of the medium: H = B/\u00b5 - M (where B is flux density, \u00b5 permeability, M magnetisation).
// All factors express how many A/m equal 1 unit of the given measure.
//
// Exact foundations:
//   1 A/m    (SI coherent derived unit; Ampere per metre)
//   1 Oe     = 1000/(4\u03c0) A/m  (exact; oersted, CGS-Gaussian/CGS-EMU; 1 Oe = 1 Gb/cm)
//   1 Gb/cm  = 1000/(4\u03c0) A/m  (exact; gilbert per centimetre = oersted in CGS)
//
// SI prefix A/m units (all exact by SI prefix definitions):
//   1 fA/m  = 10\u207b\u00b9\u2075 A/m   1 pA/m = 10\u207b\u00b9\u00b2 A/m   1 nA/m = 10\u207b\u2079 A/m
//   1 \u00b5A/m  = 10\u207b\u2076 A/m   1 mA/m = 10\u207b\u00b3 A/m    1 kA/m = 10\u00b3 A/m
//   1 MA/m  = 10\u2076 A/m    1 GA/m = 10\u2079 A/m
//
// Oersted-based units (1 Oe = 1000/(4\u03c0) A/m - exact):
//   1 mOe = 1/(4\u03c0) A/m \u2248 0.07958 A/m    1 Oe = 1000/(4\u03c0) A/m \u2248 79.577 A/m
//   1 kOe = 10\u2076/(4\u03c0) A/m \u2248 79577 A/m    1 MOe = 10\u2079/(4\u03c0) A/m \u2248 7.958\u00d710\u2077 A/m
//
// Practical per-length units (all exact from SI length definitions):
//   1 A/cm = 100 A/m            1 A/in = 1/0.0254 A/m \u2248 39.370 A/m
//   1 A/ft = 1/0.3048 A/m \u2248 3.281 A/m

const toAmperesPerMetre = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtoamperes_per_metre:    1e-15,                      // exact: 10\u207b\u00b9\u2075 A/m (SI prefix femto)
  picoamperes_per_metre:     1e-12,                      // exact: 10\u207b\u00b9\u00b2 A/m (SI prefix pico)
  nanoamperes_per_metre:     1e-9,                       // exact: 10\u207b\u2079 A/m (SI prefix nano)
  microamperes_per_metre:    1e-6,                       // exact: 10\u207b\u2076 A/m (SI prefix micro)
  milliamperes_per_metre:    1e-3,                       // exact: 10\u207b\u00b3 A/m (SI prefix milli)
  // -- Oersted sub-unit ------------------------------------------------------
  millioersteds:             1 / (4 * Math.PI),          // exact: 1/(4\u03c0) A/m; 1 mOe = 10\u207b\u00b3 Oe = 10\u207b\u00b3 \u00d7 1000/(4\u03c0) A/m
  // -- Base unit (SI) --------------------------------------------------------
  amperes_per_metre:         1,                          // reference (base unit)
  // -- Practical per-length units --------------------------------------------
  amperes_per_foot:          1 / 0.3048,                 // exact: 1/0.3048 A/m; 1 ft = 0.3048 m (exact)
  amperes_per_inch:          1 / 0.0254,                 // exact: 1/0.0254 A/m; 1 in = 0.0254 m (exact)
  // -- Oersted (CGS base unit) -----------------------------------------------
  oersteds:                  1000 / (4 * Math.PI),       // exact: 1000/(4\u03c0) A/m; 1 Oe = 1 Gb/cm (CGS)
  // -- Practical per-length (metric) -----------------------------------------
  amperes_per_centimetre:    100,                        // exact: 100 A/m; 1 A/cm = 1 A / 0.01 m
  // -- SI prefix (kilo and above) --------------------------------------------
  kiloamperes_per_metre:     1e3,                        // exact: 10\u00b3 A/m (SI prefix kilo)
  kilooersteds:              1e6 / (4 * Math.PI),        // exact: 10\u2076/(4\u03c0) A/m; 1 kOe = 10\u00b3 Oe
  megaamperes_per_metre:     1e6,                        // exact: 10\u2076 A/m (SI prefix mega)
  megaoersteds:              1e9 / (4 * Math.PI),        // exact: 10\u2079/(4\u03c0) A/m; 1 MOe = 10\u2076 Oe
  gigaamperes_per_metre:     1e9,                        // exact: 10\u2079 A/m (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtoamperes_per_metre: {
    name: "Femtoamperes per metre",
    description: "The femtoampere per metre (fA/m) equals 10\u207b\u00b9\u2075 A/m. Used in SQUID (superconducting quantum interference device) magnetometer research to characterise noise floors in ultra-sensitive magnetic field measurements; the Earth's geomagnetic DC drift and biomagnetic fields from neurons produce field gradients at the fA/m level in heavily shielded rooms. 1 fA/m = 10\u207b\u00b9\u2075 A/m.",
    symbol: "fA/m"
  },
  picoamperes_per_metre: {
    name: "Picoamperes per metre",
    description: "The picoampere per metre (pA/m) equals 10\u207b\u00b9\u00b2 A/m. Encountered in magnetic anomaly detection (MAD) systems for submarine hunting, where the difference between Earth's background field and a submerged hull is measured with pA/m sensitivity; atomic magnetometers in zero-field NMR spectroscopy operate at this level. 1 pA/m = 10\u207b\u00b9\u00b2 A/m = 10\u207b\u00b3 nA/m.",
    symbol: "pA/m"
  },
  nanoamperes_per_metre: {
    name: "Nanoamperes per metre",
    description: "The nanoampere per metre (nA/m) equals 10\u207b\u2079 A/m. Geomagnetic surveys for mineral exploration report spatial variations in Earth's field at nA/m resolution; optically pumped caesium and rubidium magnetometers used in archaeological prospection detect nA/m-scale buried structure anomalies. 1 nA/m = 10\u207b\u2079 A/m = 10\u207b\u00b3 \u00b5A/m.",
    symbol: "nA/m"
  },
  microamperes_per_metre: {
    name: "Microamperes per metre",
    description: "The microampere per metre (\u00b5A/m) equals 10\u207b\u2076 A/m. The Earth's geomagnetic field at mid-latitudes is approximately 40-50 A/m (50 000 nT / \u00b5\u2080); low-frequency EMC immunity testing of sensitive electronics involves \u00b5A/m-level ambient AC magnetic fields. 1 \u00b5A/m = 10\u207b\u2076 A/m = 10\u207b\u00b3 mA/m.",
    symbol: "\u00b5A/m"
  },
  milliamperes_per_metre: {
    name: "Milliamperes per metre",
    description: "The milliampere per metre (mA/m) equals 10\u207b\u00b3 A/m. Antenna near-field H-field measurements and EMC pre-compliance tests use mA/m; CISPR 14/16 and FCC Part 15 limit radiated field strength for consumer electronics in mA/m or equivalent dB\u00b5A/m at specified distances. 1 mA/m = 10\u207b\u00b3 A/m = 10\u207b\u00b3 Oe \u00d7 (1000/4\u03c0).",
    symbol: "mA/m"
  },
  millioersteds: {
    name: "Millioersteds",
    description: "The millioersted (mOe) equals 1/(4\u03c0) A/m \u2248 79.577 mA/m. Used in magnetic recording media characterisation - remanent coercivity of flexible magnetic media (floppy disks, cassette tape) is often cited in mOe in legacy test standards; sensitive fluxgate magnetometers report data in mOe in older geomagnetic survey literature. 1 mOe = 1/(4\u03c0) A/m \u2248 0.07958 A/m.",
    symbol: "mOe"
  },
  amperes_per_metre: {
    name: "Amperes per metre",
    description: "The ampere per metre (A/m) is the SI coherent unit of magnetic field strength H, expressing the magnetomotive force per unit length. It defines how strongly a field drives magnetic flux through a material. Earth's geomagnetic H field is approximately 40-60 A/m; a typical transformer core operates at 100-1000 A/m. 1 A/m = 1 A m\u207b\u00b9.",
    symbol: "A/m"
  },
  amperes_per_foot: {
    name: "Amperes per foot",
    description: "The ampere per foot (A/ft) equals 1/0.3048 A/m \u2248 3.281 A/m. Used in US electromagnetic coil design and transformer winding specifications where dimensions are in feet; older US Navy and DoD magnetic shielding specifications for shipboard demagnetisation state H values in A/ft. 1 A/ft = 1/0.3048 A/m \u2248 3.2808 A/m.",
    symbol: "A/ft"
  },
  amperes_per_inch: {
    name: "Amperes per inch",
    description: "The ampere per inch (A/in) equals 1/0.0254 A/m \u2248 39.370 A/m. Standard unit in US magnetic core and inductor datasheets from manufacturers like Magnetics Inc. and Ferroxcube; B-H curves and core loss specifications for powder cores and ferrites are commonly plotted in Oe (H-axis) or A/in in North American catalogs. 1 A/in = 1/0.0254 A/m \u2248 39.37 A/m.",
    symbol: "A/in"
  },
  oersteds: {
    name: "Oersteds",
    description: "The oersted (Oe) equals exactly 1000/(4\u03c0) A/m \u2248 79.577 A/m, the CGS unit of magnetic field strength named after Hans Christian \u00d8rsted. Still widely used in permanent magnet characterisation (NdFeB, SmCo, AlNiCo), magnetic recording, and older MRI literature. Earth's surface field is \u2248 0.5 Oe; a typical speaker magnet \u2248 5000 Oe. 1 Oe = 1000/(4\u03c0) A/m.",
    symbol: "Oe"
  },
  amperes_per_centimetre: {
    name: "Amperes per centimetre",
    description: "The ampere per centimetre (A/cm) equals 100 A/m. Widely used in European and Japanese magnetics datasheets and IEC standards; soft ferrite B-H curves in power electronics applications are frequently plotted with H in A/cm; magnetic core loss characterisation in IEC 60404 uses A/cm for H values. 1 A/cm = 100 A/m = 4\u03c0/10 Oe.",
    symbol: "A/cm"
  },
  kiloamperes_per_metre: {
    name: "Kiloamperes per metre",
    description: "The kiloampere per metre (kA/m) equals 10\u00b3 A/m. The primary practical unit for strong magnetic fields - MRI scanner bore fields of 1-3 T correspond to 800 kA/m-2.4 MA/m in free space; coercivity of hard ferrite permanent magnets (ceramic) is 150-300 kA/m; NdFeB magnets have coercivity 900-2000 kA/m. 1 kA/m = 10\u00b3 A/m \u2248 12.566 Oe.",
    symbol: "kA/m"
  },
  kilooersteds: {
    name: "Kilooersteds",
    description: "The kilooersted (kOe) equals 10\u2076/(4\u03c0) A/m \u2248 79 577 A/m. Standard unit for permanent magnet coercivity in North American and Japanese industry datasheets: AlNiCo magnets have H\u1d04 = 1-2 kOe, hard ferrites 1.5-4 kOe, NdFeB 10-30 kOe, SmCo 15-30 kOe. X-band EPR spectrometers sweep H from 0 to \u22483.5 kOe. 1 kOe = 10\u2076/(4\u03c0) A/m.",
    symbol: "kOe"
  },
  megaamperes_per_metre: {
    name: "Megaamperes per metre",
    description: "The megaampere per metre (MA/m) equals 10\u2076 A/m. High-field electromagnets for physics research (Bitter magnets, hybrid magnets) generate 40-100 T requiring MA/m fields; particle accelerator dipole magnets (LHC: 8.3 T) operate at several MA/m; saturation magnetisation of iron is \u22481.36 MA/m. 1 MA/m = 10\u2076 A/m \u2248 12 566 Oe.",
    symbol: "MA/m"
  },
  megaoersteds: {
    name: "Megaoersteds",
    description: "The megaoersted (MOe) equals 10\u2079/(4\u03c0) A/m \u2248 7.958 \u00d7 10\u2077 A/m. Encountered in ultra-high-field pulsed magnet research - National High Magnetic Field Laboratory (NHMFL) 100 T pulsed fields correspond to \u22481 MOe; internal crystalline fields at magnetic rare-earth sites in hyperfine studies are of this order. 1 MOe = 10\u2079/(4\u03c0) A/m.",
    symbol: "MOe"
  },
  gigaamperes_per_metre: {
    name: "Gigaamperes per metre",
    description: "The gigaampere per metre (GA/m) equals 10\u2079 A/m. Encountered only in extreme physics - neutron stars (magnetars) have surface fields of 10\u2079-10\u00b9\u00b9 T, corresponding to GA/m to TA/m H-fields; plasma pinch experiments in z-pinch fusion drivers transiently achieve GA/m field strengths along the pinch axis. 1 GA/m = 10\u2079 A/m.",
    symbol: "GA/m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toAmperesPerMetre);
}

function convertMagneticFieldStrength() {
  convertFactorBased(toAmperesPerMetre);
}

initConverterPage();
