// Base unit: siemens per metre (S/m) - the SI coherent unit of electrical conductivity.
// Electrical conductivity \u03c3 [M\u207b\u00b9 L\u207b\u00b3 T\u00b3 A\u00b2] describes how easily a material carries current: J = \u03c3 E.
// All factors express how many S/m equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 S/m = 1 A/(V\u00b7m) = 1 \u03a9\u207b\u00b9\u00b7m\u207b\u00b9 = 1 kg\u207b\u00b9\u00b7m\u207b\u00b3\u00b7A\u00b2\u00b7s\u00b3
//
// SI prefix units per metre (all exact by definition):
//   1 pS/m  = 10\u207b\u00b9\u00b2 S/m    1 nS/m = 10\u207b\u2079 S/m    1 \u00b5S/m = 10\u207b\u2076 S/m
//   1 mS/m  = 10\u207b\u00b3 S/m    1 kS/m = 10\u00b3 S/m    1 MS/m = 10\u2076 S/m    1 GS/m = 10\u2079 S/m
//
// Per-centimetre SI variants - exact (1 cm = 0.01 m):
//   1 \u00b5S/cm = 1e-6 / 0.01 = 1e-4  S/m
//   1 mS/cm  = 1e-3 / 0.01 = 0.1   S/m
//   1 S/cm   = 1    / 0.01 = 100   S/m
//
// Statsiemens per centimetre (CGS-Gaussian) - exact:
//   1 statS/cm = (10\u2075/c\u00b2 S) / 0.01 m = 10\u2077/c\u00b2 S/m
//             \u2248 1.112 650 056 \u00d7 10\u207b\u00b9\u2070 S/m   (exact, since c is exact)
//
// Absiemens per centimetre (CGS-EMU) - exact:
//   1 abS/cm = (10\u2079 S) / 0.01 m = 10\u00b9\u00b9 S/m

const toSiemensPerMetre = {
  // -- Picosiemens per metre -------------------------------------------------
  picosiemens_per_metre:          1e-12,                             // exact: 10\u207b\u00b9\u00b2 S/m (SI prefix pico)
  // -- Statsiemens per centimetre (CGS-Gaussian) ----------------------------
  statsiemens_per_centimetre:     1e7 / (299792458 * 299792458),     // exact: 10\u2077/c\u00b2 S/m \u2248 1.113 \u00d7 10\u207b\u00b9\u2070 S/m
  // -- Nanosiemens per metre -------------------------------------------------
  nanosiemens_per_metre:          1e-9,                              // exact: 10\u207b\u2079 S/m (SI prefix nano)
  // -- Microsiemens per metre ------------------------------------------------
  microsiemens_per_metre:         1e-6,                              // exact: 10\u207b\u2076 S/m (SI prefix micro)
  // -- Microsiemens per centimetre -------------------------------------------
  microsiemens_per_centimetre:    1e-6 / 0.01,                      // exact: 10\u207b\u2074 S/m
  // -- Millisiemens per metre ------------------------------------------------
  millisiemens_per_metre:         1e-3,                              // exact: 10\u207b\u00b3 S/m (SI prefix milli)
  // -- Millisiemens per centimetre -------------------------------------------
  millisiemens_per_centimetre:    1e-3 / 0.01,                      // exact: 0.1 S/m
  // -- Siemens per metre (SI unit) -------------------------------------------
  siemens_per_metre:              1,                                 // reference (base unit)
  // -- Siemens per centimetre ------------------------------------------------
  siemens_per_centimetre:         1 / 0.01,                         // exact: 100 S/m
  // -- Kilosiemens per metre -------------------------------------------------
  kilosiemens_per_metre:          1e3,                               // exact: 10\u00b3 S/m (SI prefix kilo)
  // -- Megasiemens per metre -------------------------------------------------
  megasiemens_per_metre:          1e6,                               // exact: 10\u2076 S/m (SI prefix mega)
  // -- Gigasiemens per metre -------------------------------------------------
  gigasiemens_per_metre:          1e9,                               // exact: 10\u2079 S/m (SI prefix giga)
  // -- Absiemens per centimetre (CGS-EMU) ------------------------------------
  absiemens_per_centimetre:       1e9 / 0.01,                       // exact: 10\u00b9\u00b9 S/m (1 abS = 10\u2079 S, 1 cm = 0.01 m)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  picosiemens_per_metre: {
    name: "Picosiemens per metre",
    description: "The picosiemens per metre (pS/m) equals 10\u207b\u00b9\u00b2 S/m, the scale for the most resistive solid dielectrics: amber (~10\u207b\u00b9\u2074 S/m), borosilicate glass (~10\u207b\u00b9\u00b2 S/m), and PTFE (<10\u207b\u00b9\u2075 S/m). A material with 1 T\u03a9\u00b7m bulk resistivity has conductivity of exactly 1 pS/m. 1 pS/m = 10\u207b\u00b9\u00b2 S/m = 10\u207b\u00b4 \u00b5S/m.",
    symbol: "pS/m"
  },
  statsiemens_per_centimetre: {
    name: "Statsiemens per centimetre",
    description: "The statsiemens per centimetre (statS/cm) is the CGS-Gaussian unit of electrical conductivity, equal to exactly 10\u2077/c\u00b2 S/m where c = 299\u202f792\u202f458 m/s, giving \u22481.113 \u00d7 10\u207b\u00b9\u2070 S/m. It is the reciprocal of the stat\u03a9/cm and appears in Gaussian-system plasma physics and dielectric spectroscopy texts. 1 statS/cm \u2248 0.1113 nS/m.",
    symbol: "statS/cm"
  },
  nanosiemens_per_metre: {
    name: "Nanosiemens per metre",
    description: "The nanosiemens per metre (nS/m) equals 10\u207b\u2079 S/m, characteristic of ultra-pure deionised water (\u22485 nS/m at 25\u202f\u00b0C), very dry granite, and lightly doped semiconductor substrates. Environmental hydrogeologists use nS/m for freshwater aquifer conductivity mapping; geophysical borehole logs report low-salinity formation water in nS/m. 1 nS/m = 10\u207b\u2079 S/m = 10\u207b\u00b3 \u00b5S/m.",
    symbol: "nS/m"
  },
  microsiemens_per_metre: {
    name: "Microsiemens per metre",
    description: "The microsiemens per metre (\u00b5S/m) equals 10\u207b\u2076 S/m, the scale for freshwater lakes and rivers (100-2\u202f000 \u00b5S/m) and weakly mineralised groundwater. It is the SI-coherent companion to the more commonly measured \u00b5S/cm: divide a \u00b5S/cm reading by 100 to obtain \u00b5S/m. 1 \u00b5S/m = 10\u207b\u2076 S/m = 0.01 \u00b5S/cm.",
    symbol: "\u00b5S/m"
  },
  microsiemens_per_centimetre: {
    name: "Microsiemens per centimetre",
    description: "The microsiemens per centimetre (\u00b5S/cm) equals 10\u207b\u2074 S/m and is the standard unit for drinking-water conductivity monitoring (50-800 \u00b5S/cm) and surface-water quality surveys. Regulatory thresholds for potable water are often set in \u00b5S/cm; hand-held probes for aquaculture and hydroponics report in \u00b5S/cm. 1 \u00b5S/cm = 100 \u00b5S/m = 10\u207b\u2074 S/m.",
    symbol: "\u00b5S/cm"
  },
  millisiemens_per_metre: {
    name: "Millisiemens per metre",
    description: "The millisiemens per metre (mS/m) equals 10\u207b\u00b3 S/m and is the preferred unit in geophysical electromagnetic induction surveys (EM-31, EM-38) for soil and shallow-subsurface conductivity mapping. Agricultural soil reads 5-200 mS/m; saline soils exceed 400 mS/m; near-surface marine sediments reach 1\u202f000 mS/m. 1 mS/m = 10\u207b\u00b3 S/m = 10 \u00b5S/cm.",
    symbol: "mS/m"
  },
  millisiemens_per_centimetre: {
    name: "Millisiemens per centimetre",
    description: "The millisiemens per centimetre (mS/cm) equals 0.1 S/m, the practical scale for seawater (\u224850 mS/cm), blood plasma (\u224814 mS/cm), and standard electrolyte solutions in electrochemistry laboratories. Conductivity-cell instruments for desalination plants and industrial process control commonly read in mS/cm; NIST-traceable calibration solutions are certified in mS/cm. 1 mS/cm = 100 mS/m = 0.1 S/m.",
    symbol: "mS/cm"
  },
  siemens_per_metre: {
    name: "Siemens per metre",
    description: "The siemens per metre (S/m) is the SI unit of electrical conductivity, equal to 1 A/(V\u00b7m) = 1 \u03a9\u207b\u00b9\u00b7m\u207b\u00b9 = 1 kg\u207b\u00b9\u00b7m\u207b\u00b3\u00b7A\u00b2\u00b7s\u00b3. Seawater \u22485 S/m, human blood \u22480.7 S/m, graphite \u224810\u2074 S/m, copper 59.6 MS/m; the full range from insulators (10\u207b\u00b9\u2077 S/m) to superconductors (\u221e) is expressed in S/m. 1 S/m = 0.01 S/cm.",
    symbol: "S/m"
  },
  siemens_per_centimetre: {
    name: "Siemens per centimetre",
    description: "The siemens per centimetre (S/cm) equals 100 S/m and is used in analytical chemistry where measurements are performed in centimetre-scale conductivity cells. Concentrated KCl solutions (\u22481.29 S/cm at 25\u202f\u00b0C) serve as primary calibration standards; concentrated H\u2082SO\u2084 \u22481 S/cm; liquid mercury \u22481\u202f000 S/cm. Equivalent conductance in electrochemistry is traditionally tabulated in S\u00b7cm\u00b2/mol. 1 S/cm = 100 S/m.",
    symbol: "S/cm"
  },
  kilosiemens_per_metre: {
    name: "Kilosiemens per metre",
    description: "The kilosiemens per metre (kS/m) equals 10\u00b3 S/m, spanning liquid metals and very concentrated electrolytes. Molten NaCl at 900\u202f\u00b0C \u22483.6 kS/m; liquid mercury \u22481\u202f000 kS/m; bismuth melt \u2248750 kS/m. Magnetohydrodynamic (MHD) channel design and induction heating studies express melt conductivities in kS/m. 1 kS/m = 10\u00b3 S/m = 10 S/cm.",
    symbol: "kS/m"
  },
  megasiemens_per_metre: {
    name: "Megasiemens per metre",
    description: "The megasiemens per metre (MS/m) equals 10\u2076 S/m, the natural scale for metallic conductors: silver 63\u202fMS/m, copper 59.6\u202fMS/m, gold 45\u202fMS/m, aluminium 37\u202fMS/m, iron \u224810\u202fMS/m. IEC and ASTM wire specifications use %IACS (100%\u202fIACS \u2261 58\u202fMS/m); eddy-current and skin-depth calculations for metals work in MS/m. 1 MS/m = 10\u2076 S/m.",
    symbol: "MS/m"
  },
  gigasiemens_per_metre: {
    name: "Gigasiemens per metre",
    description: "The gigasiemens per metre (GS/m) equals 10\u2079 S/m, relevant for cryogenically cooled pure metals. Pure aluminium at 4\u202fK reaches \u224810 GS/m; pure copper near 4\u202fK approaches \u224860 GS/m. RF cryogenic resonator design and superconductor proximity-effect modelling use GS/m to benchmark normal-metal residual losses. 1 GS/m = 10\u2079 S/m = 10\u00b3 MS/m.",
    symbol: "GS/m"
  },
  absiemens_per_centimetre: {
    name: "Absiemens per centimetre",
    description: "The absiemens per centimetre (abS/cm) is the CGS-EMU unit of electrical conductivity, exactly 10\u00b9\u00b9 S/m (= 100\u202fGS/m). It appears in nineteenth-century electromagnetic engineering texts alongside abohms and abamperes; no real bulk material at ambient conditions approaches 1 abS/cm. The figure arises in theoretical conductor-scaling and historical performance tables. 1 abS/cm = 10\u00b9\u00b9 S/m.",
    symbol: "abS/cm"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toSiemensPerMetre);
}

function convertConductivity() {
  convertFactorBased(toSiemensPerMetre);
}

initConverterPage();
