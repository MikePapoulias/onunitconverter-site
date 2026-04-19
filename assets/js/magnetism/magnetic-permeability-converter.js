// Base unit: henry per metre (H/m) - the SI coherent derived unit of absolute magnetic permeability.
// Absolute permeability \u00b5 [H/m = kg\u00b7m\u00b7s\u207b\u00b2\u00b7A\u207b\u00b2] relates flux density to field strength:
//   B = \u00b5 H  (in linear isotropic media; B in T, H in A/m)
//   \u00b5 = \u00b5\u1d63 \u00b5\u2080  where \u00b5\u1d63 is the dimensionless relative permeability
// All factors express how many H/m equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 H/m = 1 kg\u00b7m\u00b7s\u207b\u00b2\u00b7A\u207b\u00b2 = 1 T\u00b7m/A = 1 Wb/(A\u00b7m)  (SI coherent derived unit)
//   \u00b5\u2080 = 4\u03c0 \u00d7 10\u207b\u2077 H/m (pre-2019 SI: exact;
//          2019 SI: experimentally determined as 1.25663706212(19) \u00d7 10\u207b\u2076 H/m)
//   SI prefix units (fH/m, pH/m, nH/m, \u00b5H/m, mH/m, kH/m): exact by SI prefix definitions.
//
// Factor order (smallest to largest):
//   fH/m (1e-15) < pH/m (1e-12) < nH/m (1e-9) < \u00b5H/m (1e-6) < \u00b5\u2080 (~1.2566e-6) < mH/m (1e-3) < H/m (1) < kH/m (1e3)

const toHenriesPerMetre = {
  'femtohenries-per-metre':  1e-15,              // exact: 10\u207b\u00b9\u2075 H/m (SI prefix femto)
  'picohenries-per-metre':   1e-12,              // exact: 10\u207b\u00b9\u00b2 H/m (SI prefix pico)
  'nanohenries-per-metre':   1e-9,               // exact: 10\u207b\u2079 H/m (SI prefix nano)
  'microhenries-per-metre':  1e-6,               // exact: 10\u207b\u2076 H/m (SI prefix micro)
  'vacuum-permeability':     4 * Math.PI * 1e-7, // 4\u03c0 \u00d7 10\u207b\u2077 H/m \u2248 1.25663706212 \u00d7 10\u207b\u2076 H/m (\u00b5\u2080)
  'millihenries-per-metre':  1e-3,               // exact: 10\u207b\u00b3 H/m (SI prefix milli)
  'henries-per-metre':       1,                  // reference (base unit)
  'kilohenries-per-metre':   1e3,                // exact: 10\u00b3 H/m (SI prefix kilo)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'femtohenries-per-metre': {
    name: "Femtohenries per metre",
    description: "The femtohenry per metre (fH/m) equals 10\u207b\u00b9\u2075 H/m. A theoretical subunit used in precision electromagnetic metrology. Even the extreme diamagnet bismuth (\u00b5\u1d63 = 0.999834) departs from \u00b5\u2080 by about \u2212207 nH/m - far above the fH/m scale. Primarily a reference unit for quantum EM standard calculations. 1 fH/m = 10\u207b\u00b9\u2075 H/m.",
    symbol: "fH/m"
  },
  'picohenries-per-metre': {
    name: "Picohenries per metre",
    description: "The picohenry per metre (pH/m) equals 10\u207b\u00b9\u00b2 H/m. Used in calculations for nanoscale magnetic sensors and quantum circuit inductance per unit length. A superconductor in the Meissner state has \u00b5 = 0 H/m (B = 0 inside); the full range from 0 to \u00b5\u2080 spans about 1 256 637 000 pH/m. 1 pH/m = 10\u207b\u00b9\u00b2 H/m.",
    symbol: "pH/m"
  },
  'nanohenries-per-metre': {
    name: "Nanohenries per metre",
    description: "The nanohenry per metre (nH/m) equals 10\u207b\u2079 H/m. The natural scale for expressing permeability deviations of nearly non-magnetic materials from \u00b5\u2080 \u2248 1 256.6 nH/m: paramagnetic aluminium (\u00b5\u1d63 = 1.0000220) exceeds \u00b5\u2080 by about 28 nH/m; diamagnetic copper (\u00b5\u1d63 = 0.999994) falls about 8 nH/m below \u00b5\u2080. 1 nH/m = 10\u207b\u2079 H/m.",
    symbol: "nH/m"
  },
  'microhenries-per-metre': {
    name: "Microhenries per metre",
    description: "The microhenry per metre (\u00b5H/m) equals 10\u207b\u2076 H/m. The most practical scale for absolute permeability: vacuum permeability \u00b5\u2080 \u2248 1.257 \u00b5H/m, so all non-magnetic materials (air, plastics, biological tissue) have \u00b5 between 1.256 and 1.258 \u00b5H/m. Relative permeability is simply \u00b5\u1d63 = \u00b5 / 1.257 \u00b5H/m. 1 \u00b5H/m = 10\u207b\u2076 H/m.",
    symbol: "\u00b5H/m"
  },
  'vacuum-permeability': {
    name: "Vacuum permeabilities",
    description: "The vacuum permeability (\u00b5\u2080), also called the magnetic constant, equals 4\u03c0 \u00d7 10\u207b\u2077 H/m \u2248 1.25664 \u00b5H/m. In the 2019 SI it is experimentally determined: \u00b5\u2080 = 1.25663706212(19) \u00d7 10\u207b\u2076 H/m. The absolute permeability of any material is \u00b5 = \u00b5\u1d63 \u00d7 \u00b5\u2080. 1 \u00b5\u2080 = 4\u03c0 \u00d7 10\u207b\u2077 H/m.",
    symbol: "\u00b5\u2080"
  },
  'millihenries-per-metre': {
    name: "Millihenries per metre",
    description: "The millihenry per metre (mH/m) equals 10\u207b\u00b3 H/m \u2248 796 \u00b5\u2080. The range for soft magnetic materials: grain-oriented silicon steel (CRGO) has \u00b5 \u2248 1-10 mH/m at working flux densities (\u00b5\u1d63 \u2248 1 000-8 000); MnZn power ferrites are 3-10 mH/m; nickel-iron alloys (Permalloy 78) reach 25-100 mH/m at low fields. 1 mH/m = 10\u207b\u00b3 H/m.",
    symbol: "mH/m"
  },
  'henries-per-metre': {
    name: "Henries per metre",
    description: "The henry per metre (H/m) is the SI coherent unit of absolute magnetic permeability, equal to 1 kg\u00b7m\u00b7s\u207b\u00b2\u00b7A\u207b\u00b2. Only the highest-permeability alloys reach this scale: annealed Mu-metal achieves \u00b5 \u2248 0.1-0.4 H/m (\u00b5\u1d63 up to 300 000); Supermalloy under optimal conditions approaches \u00b5 \u2248 1 H/m (\u00b5\u1d63 \u2248 10\u2076). 1 H/m \u2248 7.96 \u00d7 10\u2075 \u00b5\u2080.",
    symbol: "H/m"
  },
  'kilohenries-per-metre': {
    name: "Kilohenries per metre",
    description: "The kilohenry per metre (kH/m) equals 10\u00b3 H/m \u2248 7.96 \u00d7 10\u2078 \u00b5\u2080. A theoretical reference scale beyond any known bulk magnetic material: achieving kH/m would require \u00b5\u1d63 \u2273 10\u2079, far exceeding the highest measured value (~10\u2076 for Supermalloy). Used as an upper bound in theoretical magnetics. 1 kH/m = 10\u00b3 H/m.",
    symbol: "kH/m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toHenriesPerMetre);
}

function convertMagneticPermeability() {
  convertFactorBased(toHenriesPerMetre);
}

initConverterPage();
