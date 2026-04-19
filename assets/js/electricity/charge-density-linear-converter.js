// Base unit: coulomb per metre (C/m) - the SI coherent unit of linear charge density.
// Linear charge density \u03bb [A T L\u207b\u00b9] is charge per unit length: \u03bb = Q/L.
// All factors express how many C/m equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 in  = 0.0254 m                    (exact, international inch definition)
//   1 ft  = 0.3048 m                    (exact, international foot definition)
//   1 C/m = 1 A\u00b7s\u00b7m\u207b\u00b9
//
// SI prefix units per metre (all exact by definition):
//   1 aC/m = 10\u207b\u00b9\u2078 C/m    1 fC/m = 10\u207b\u00b9\u2075 C/m    1 pC/m = 10\u207b\u00b9\u00b2 C/m
//   1 nC/m = 10\u207b\u2079 C/m    1 \u00b5C/m = 10\u207b\u2076 C/m    1 mC/m = 10\u207b\u00b3 C/m
//   1 kC/m = 10\u00b3 C/m    1 MC/m = 10\u2076 C/m    1 GC/m = 10\u2079 C/m
//
// Statcoulomb per centimetre (CGS-Gaussian) - exact:
//   1 statC = 10\u207b\u00b9/c C  (exact, since c is exact)
//   1 statC/cm = (10\u207b\u00b9/c C) / 0.01 m = 10/c C/m
//             = 10 / 299 792 458 C/m \u2248 3.3356 \u00d7 10\u207b\u2078 C/m
//
// Abcoulomb per centimetre (CGS-EMU) - exact:
//   1 abC = 10 C  (exact)
//   1 abC/cm = 10 C / 0.01 m = 1 000 C/m  (exactly equal to 1 kC/m)
//
// Per-centimetre variants (1 cm = 0.01 m, exact):
//   1 \u00b5C/cm = 10\u207b\u2076 / 0.01 = 10\u207b\u2074 C/m
//   1 C/cm  = 1    / 0.01 = 100   C/m
//
// Per-inch and per-foot (exact):
//   1 C/in = 1 / 0.0254 m \u2248 39.370 C/m
//   1 C/ft = 1 / 0.3048 m \u2248  3.281 C/m

const toCoulombsPerMetre = {
  // -- Attocoulombs per metre ------------------------------------------------
  attocoulombs_per_metre:         1e-18,                   // exact: 10\u207b\u00b9\u2078 C/m (SI prefix atto)
  // -- Femtocoulombs per metre -----------------------------------------------
  femtocoulombs_per_metre:        1e-15,                   // exact: 10\u207b\u00b9\u2075 C/m (SI prefix femto)
  // -- Picocoulombs per metre ------------------------------------------------
  picocoulombs_per_metre:         1e-12,                   // exact: 10\u207b\u00b9\u00b2 C/m (SI prefix pico)
  // -- Nanocoulombs per metre ------------------------------------------------
  nanocoulombs_per_metre:         1e-9,                    // exact: 10\u207b\u2079 C/m (SI prefix nano)
  // -- Statcoulombs per centimetre (CGS-Gaussian) ----------------------------
  statcoulombs_per_centimetre:    10 / 299792458,          // exact: 10/c C/m \u2248 3.3356 \u00d7 10\u207b\u2078 C/m
  // -- Microcoulombs per metre -----------------------------------------------
  microcoulombs_per_metre:        1e-6,                    // exact: 10\u207b\u2076 C/m (SI prefix micro)
  // -- Microcoulombs per centimetre ------------------------------------------
  microcoulombs_per_centimetre:   1e-6 / 0.01,             // exact: 10\u207b\u2074 C/m
  // -- Millicoulombs per metre -----------------------------------------------
  millicoulombs_per_metre:        1e-3,                    // exact: 10\u207b\u00b3 C/m (SI prefix milli)
  // -- Coulombs per metre (SI unit) ------------------------------------------
  coulombs_per_metre:             1,                       // reference (base unit)
  // -- Coulombs per foot -----------------------------------------------------
  coulombs_per_foot:              1 / 0.3048,              // exact: 1 / 0.3048 m \u2248 3.2808 C/m (1 ft = 0.3048 m)
  // -- Coulombs per inch -----------------------------------------------------
  coulombs_per_inch:              1 / 0.0254,              // exact: 1 / 0.0254 m \u2248 39.370 C/m (1 in = 0.0254 m)
  // -- Coulombs per centimetre -----------------------------------------------
  coulombs_per_centimetre:        1 / 0.01,                // exact: 100 C/m (1 cm = 0.01 m)
  // -- Abcoulombs per centimetre (CGS-EMU) -----------------------------------
  abcoulombs_per_centimetre:      10 / 0.01,               // exact: 10 C / 0.01 m = 1 000 C/m (= 1 kC/m)
  // -- Kilocoulombs per metre ------------------------------------------------
  kilocoulombs_per_metre:         1e3,                     // exact: 10\u00b3 C/m (SI prefix kilo; = abC/cm)
  // -- Megacoulombs per metre ------------------------------------------------
  megacoulombs_per_metre:         1e6,                     // exact: 10\u2076 C/m (SI prefix mega)
  // -- Gigacoulombs per metre ------------------------------------------------
  gigacoulombs_per_metre:         1e9,                     // exact: 10\u2079 C/m (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attocoulombs_per_metre: {
    name: "Attocoulombs per metre",
    description: "The attocoulomb per metre (aC/m) equals 10\u207b\u00b9\u2078 C/m, the scale for linear charge density in quantum-confined nanostructures. Induced charge along a quantum dot nanowire segment under a modest gate voltage is in the aC/m to fC/m range; charge delocalised along conjugated organic molecules is estimated in aC/m; electron-beam lithography exposure doses on sub-10 nm features translate to aC/m line dosages. 1 aC/m = 10\u207b\u00b9\u2078 C/m = 10\u207b\u00b3 fC/m.",
    symbol: "aC/m"
  },
  femtocoulombs_per_metre: {
    name: "Femtocoulombs per metre",
    description: "The femtocoulomb per metre (fC/m) equals 10\u207b\u00b9\u2075 C/m, arising in scanning probe measurements of charged surface features and in single-molecule electrostatic force microscopy. A single elementary charge (1.6 \u00d7 10\u207b\u00b9\u2079 C) localised on a 1 \u00b5m polymer segment gives about 0.16 fC/m; EFM tip-sample interaction models use fC/m-scale induced charge distributions. 1 fC/m = 10\u207b\u00b9\u2075 C/m = 10\u207b\u00b3 pC/m.",
    symbol: "fC/m"
  },
  picocoulombs_per_metre: {
    name: "Picocoulombs per metre",
    description: "The picocoulomb per metre (pC/m) equals 10\u207b\u00b9\u00b2 C/m, the scale for charge induced on carbon nanotubes by gate electrodes and for lightly charged polymer chains. A metallic single-wall carbon nanotube at a gate bias of a few volts carries about 10-100 pC/m; weakly charged polyelectrolytes in high-salt solution have effective linear charge densities of 1-100 pC/m after ion condensation. 1 pC/m = 10\u207b\u00b9\u00b2 C/m = 10\u207b\u00b3 nC/m.",
    symbol: "pC/m"
  },
  nanocoulombs_per_metre: {
    name: "Nanocoulombs per metre",
    description: "The nanocoulomb per metre (nC/m) equals 10\u207b\u2079 C/m, the scale for DNA backbone charge density and strongly gated carbon nanotube charge. B-form DNA carries approximately -2 elementary charges per 0.34 nm base pair spacing, giving an intrinsic linear charge density of about -0.94 nC/m; strongly biased nanotube transistors reach several nC/m. 1 nC/m = 10\u207b\u2079 C/m = 10\u207b\u00b3 \u00b5C/m.",
    symbol: "nC/m"
  },
  statcoulombs_per_centimetre: {
    name: "Statcoulombs per centimetre",
    description: "The statcoulomb per centimetre (statC/cm) is the linear charge density unit of the CGS-Gaussian system, equal to 10/c C/m where c = 299\u202f792\u202f458 m/s, giving exactly 10/299\u202f792\u202f458 C/m \u2248 3.336 \u00d7 10\u207b\u2078 C/m. It falls between nC/m and \u00b5C/m in the SI scale; the electric field of a line charge is written E = 2\u03bb/r in Gaussian units without a 4\u03c0\u03b5\u2080 factor. 1 statC/cm \u2248 33.356 nC/m.",
    symbol: "statC/cm"
  },
  microcoulombs_per_metre: {
    name: "Microcoulombs per metre",
    description: "The microcoulomb per metre (\u00b5C/m) equals 10\u207b\u2076 C/m, the practical unit for high-voltage transmission line charge density and surface charge on dielectric films. A 400 kV overhead transmission line has a linear charge density of about 4-8 \u00b5C/m; triboelectrically charged polymer films carry surface charge equivalent to 1-100 \u00b5C/m along a strip; Van de Graaff belt charge densities are in this range. 1 \u00b5C/m = 10\u207b\u2076 C/m = 10\u207b\u00b3 mC/m.",
    symbol: "\u00b5C/m"
  },
  microcoulombs_per_centimetre: {
    name: "Microcoulombs per centimetre",
    description: "The microcoulomb per centimetre (\u00b5C/cm) equals exactly 10\u207b\u2074 C/m, used in electrophoresis and charged-particle beam physics. Charged particle beams in linear accelerators are characterised by bunch charge per unit beam length; a 1 nC electron bunch compressed to 1 mm gives 1 \u00b5C/cm = 0.1 mC/m; ion implant beam line charge densities are quoted in \u00b5C/cm for process uniformity. 1 \u00b5C/cm = 10\u207b\u2074 C/m = 0.1 mC/m.",
    symbol: "\u00b5C/cm"
  },
  millicoulombs_per_metre: {
    name: "Millicoulombs per metre",
    description: "The millicoulomb per metre (mC/m) equals 10\u207b\u00b3 C/m, the scale for charge on highly loaded triboelectric surfaces, electret films, and return-stroke lightning channel segments. Industrial electret microphone films carry surface charge densities of 0.1-10 mC/m\u00b2, which corresponds to similar values per metre along a thin strip; return-stroke lightning channel charge is 1-10 mC/m distributed along the leader. 1 mC/m = 10\u207b\u00b3 C/m = 10\u00b3 \u00b5C/m.",
    symbol: "mC/m"
  },
  coulombs_per_metre: {
    name: "Coulombs per metre",
    description: "The coulomb per metre (C/m) is the SI coherent unit of linear charge density, equal to 1 A\u00b7s\u00b7m\u207b\u00b9. A typical lightning return stroke carries about 2-5 C/m along the channel; heavily charged surfaces like Van de Graaff sphere surfaces are described in C/m\u00b2 (surface), but a thin wire coated with 1 C of charge per metre has a C/m linear density. Textbook Gauss's law problems routinely use C/m for infinite line-charge problems. 1 C/m = 10\u00b3 mC/m.",
    symbol: "C/m"
  },
  coulombs_per_foot: {
    name: "Coulombs per foot",
    description: "The coulomb per foot (C/ft) equals exactly 1/0.3048 C/m \u2248 3.2808 C/m, used in North American electrical engineering for charge per unit length on power cables and conductor specifications. High-voltage DC cable charge density ratings are sometimes quoted in C/ft in ANSI/NEMA specifications; lightning protection standards may express charge density per foot of conductor. 1 C/ft = 1/0.3048 C/m \u2248 3.2808 C/m.",
    symbol: "C/ft"
  },
  coulombs_per_inch: {
    name: "Coulombs per inch",
    description: "The coulomb per inch (C/in) equals exactly 1/0.0254 C/m \u2248 39.370 C/m, used in insulation specifications and dielectric withstand testing at the component level. Dielectric tape and insulating sleeve charge retention is sometimes expressed in C/in in US industry datasheets; PCB creepage and clearance charge density specifications for high-voltage designs appear in C/in. 1 C/in = 1/0.0254 C/m \u2248 39.370 C/m.",
    symbol: "C/in"
  },
  coulombs_per_centimetre: {
    name: "Coulombs per centimetre",
    description: "The coulomb per centimetre (C/cm) equals exactly 100 C/m, used in high-energy particle physics and pulsed-power engineering. Particle accelerator beam current densities along the beam axis are quoted in C/cm for high-intensity bunches; pulsed lightning-simulator spark channels carry several C/cm at peak current; field-emission cathode models describe space-charge limited current in C/cm. 1 C/cm = 100 C/m = 10\u207b\u00b2 kC/m.",
    symbol: "C/cm"
  },
  abcoulombs_per_centimetre: {
    name: "Abcoulombs per centimetre",
    description: "The abcoulomb per centimetre (abC/cm) is the linear charge density unit of the CGS-EMU system, equal to 1 abC / 1 cm = 10 C / 0.01 m = 1\u202f000 C/m, exactly equal to 1 kC/m in SI. It appears in nineteenth-century electromagnetic engineering texts on telegraphy cables and in EMU derivations of inductance and capacitance per unit length. 1 abC/cm = 1\u202f000 C/m = 1 kC/m.",
    symbol: "abC/cm"
  },
  kilocoulombs_per_metre: {
    name: "Kilocoulombs per metre",
    description: "The kilocoulomb per metre (kC/m) equals 10\u00b3 C/m, identical in value to the abcoulomb per centimetre (CGS-EMU). At this scale, charge densities appear in pulsed-power transmission lines, railgun barrel charge distribution models, and theoretical descriptions of dense plasma filaments. Large capacitor banks discharged through thin conductors deposit kC/m-scale charge before ablation. 1 kC/m = 10\u00b3 C/m = 1 abC/cm.",
    symbol: "kC/m"
  },
  megacoulombs_per_metre: {
    name: "Megacoulombs per metre",
    description: "The megacoulomb per metre (MC/m) equals 10\u2076 C/m, far beyond any engineered conductor but arising in theoretical models of dense plasma pinches, astrophysical jets, and extreme pulsed-power scenarios. Z-pinch experiments driving MA-scale currents through thin wires involve MC/m-scale charge redistribution during the implosion phase; magnetohydrodynamic models of solar flare current sheets use MC/m in scaling analyses. 1 MC/m = 10\u2076 C/m = 10\u00b3 kC/m.",
    symbol: "MC/m"
  },
  gigacoulombs_per_metre: {
    name: "Gigacoulombs per metre",
    description: "The gigacoulomb per metre (GC/m) equals 10\u2079 C/m, a value with no engineering realisation but used in astrophysical and cosmological electromagnetic models. Magnetar magnetic fields, pulsar magnetosphere current sheet charge densities, and theoretical cosmic string electromagnetic scenarios are described at GC/m scales in research literature. 1 GC/m = 10\u2079 C/m = 10\u00b3 MC/m.",
    symbol: "GC/m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCoulombsPerMetre);
}

function convertChargeDensityLinear() {
  convertFactorBased(toCoulombsPerMetre);
}

initConverterPage();
