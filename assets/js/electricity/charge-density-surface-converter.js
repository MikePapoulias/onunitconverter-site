// Base unit: coulomb per square metre (C/m\u00b2) - the SI coherent unit of surface charge density.
// Surface charge density \u03c3 [A T L\u207b\u00b2] is charge per unit area: \u03c3 = Q/A.
// All factors express how many C/m\u00b2 equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 in  = 0.0254 m                    (exact, international inch definition)
//   1 ft  = 0.3048 m                    (exact, international foot definition)
//   1 C/m\u00b2 = 1 A\u00b7s\u00b7m\u207b\u00b2
//
// SI prefix units per square metre (all exact by definition):
//   1 aC/m\u00b2 = 10\u207b\u00b9\u2078 C/m\u00b2    1 fC/m\u00b2 = 10\u207b\u00b9\u2075 C/m\u00b2    1 pC/m\u00b2 = 10\u207b\u00b9\u00b2 C/m\u00b2
//   1 nC/m\u00b2 = 10\u207b\u2079 C/m\u00b2     1 \u00b5C/m\u00b2 = 10\u207b\u2076 C/m\u00b2     1 mC/m\u00b2 = 10\u207b\u00b3 C/m\u00b2
//   1 kC/m\u00b2 = 10\u00b3 C/m\u00b2     1 MC/m\u00b2 = 10\u2076 C/m\u00b2     1 GC/m\u00b2 = 10\u2079 C/m\u00b2
//
// Per-square-centimetre variants (1 cm\u00b2 = 10\u207b\u2074 m\u00b2, exact):
//   1 \u00b5C/cm\u00b2 = 10\u207b\u2076 / 10\u207b\u2074 = 10\u207b\u00b2 C/m\u00b2 = 0.01 C/m\u00b2
//   1 mC/cm\u00b2  = 10\u207b\u00b3 / 10\u207b\u2074 = 10    C/m\u00b2
//   1 C/cm\u00b2   = 1    / 10\u207b\u2074 = 10\u2074   C/m\u00b2
//
// Statcoulomb per square centimetre (CGS-Gaussian) - exact:
//   1 statC = 10\u207b\u00b9/c C  where c = 299 792 458 m/s
//   1 statC/cm\u00b2 = (10\u207b\u00b9/c C) / 10\u207b\u2074 m\u00b2 = 10\u00b3/c C/m\u00b2
//             \u2248 3.3356 \u00d7 10\u207b\u2076 C/m\u00b2   (exact, since c is exact)
//
// Abcoulomb per square centimetre (CGS-EMU) - exact:
//   1 abC = 10 C  (exact)
//   1 abC/cm\u00b2 = 10 C / 10\u207b\u2074 m\u00b2 = 10\u2075 C/m\u00b2
//
// Per-square-inch and per-square-foot (exact):
//   1 C/ft\u00b2  = 1 / (0.3048)\u00b2 m\u00b2 \u2248 10.7639 C/m\u00b2  (1 ft = 0.3048 m)
//   1 C/in\u00b2  = 1 / (0.0254)\u00b2 m\u00b2 \u2248 1 550.003 C/m\u00b2 (1 in = 0.0254 m)

const toCoulombsPerSquareMetre = {
  // -- Attocoulombs per square metre -----------------------------------------
  attocoulombs_per_square_metre:          1e-18,                       // exact: 10\u207b\u00b9\u2078 C/m\u00b2 (SI prefix atto)
  // -- Femtocoulombs per square metre ----------------------------------------
  femtocoulombs_per_square_metre:         1e-15,                       // exact: 10\u207b\u00b9\u2075 C/m\u00b2 (SI prefix femto)
  // -- Picocoulombs per square metre -----------------------------------------
  picocoulombs_per_square_metre:          1e-12,                       // exact: 10\u207b\u00b9\u00b2 C/m\u00b2 (SI prefix pico)
  // -- Nanocoulombs per square metre -----------------------------------------
  nanocoulombs_per_square_metre:          1e-9,                        // exact: 10\u207b\u2079 C/m\u00b2 (SI prefix nano)
  // -- Microcoulombs per square metre ----------------------------------------
  microcoulombs_per_square_metre:         1e-6,                        // exact: 10\u207b\u2076 C/m\u00b2 (SI prefix micro)
  // -- Statcoulombs per square centimetre (CGS-Gaussian) ---------------------
  statcoulombs_per_square_centimetre:     1e3 / 299792458,             // exact: 10\u00b3/c C/m\u00b2 \u2248 3.3356 \u00d7 10\u207b\u2076 C/m\u00b2
  // -- Millicoulombs per square metre ----------------------------------------
  millicoulombs_per_square_metre:         1e-3,                        // exact: 10\u207b\u00b3 C/m\u00b2 (SI prefix milli)
  // -- Microcoulombs per square centimetre -----------------------------------
  microcoulombs_per_square_centimetre:    1e-6 / (0.01 * 0.01),       // exact: 10\u207b\u00b2 C/m\u00b2 (1 \u00b5C / 1 cm\u00b2)
  // -- Coulombs per square metre (SI unit) -----------------------------------
  coulombs_per_square_metre:              1,                           // reference (base unit)
  // -- Millicoulombs per square centimetre -----------------------------------
  millicoulombs_per_square_centimetre:    1e-3 / (0.01 * 0.01),       // exact: 10 C/m\u00b2 (1 mC / 1 cm\u00b2)
  // -- Coulombs per square foot ----------------------------------------------
  coulombs_per_square_foot:               1 / (0.3048 * 0.3048),      // exact: 1/0.09290304 C/m\u00b2 \u2248 10.7639 C/m\u00b2 (1 ft = 0.3048 m)
  // -- Kilocoulombs per square metre -----------------------------------------
  kilocoulombs_per_square_metre:          1e3,                         // exact: 10\u00b3 C/m\u00b2 (SI prefix kilo)
  // -- Coulombs per square inch ----------------------------------------------
  coulombs_per_square_inch:               1 / (0.0254 * 0.0254),      // exact: 1/6.4516\u00d710\u207b\u2074 C/m\u00b2 \u2248 1 550.003 C/m\u00b2 (1 in = 0.0254 m)
  // -- Coulombs per square centimetre ----------------------------------------
  coulombs_per_square_centimetre:         1 / (0.01 * 0.01),          // exact: 10\u2074 C/m\u00b2 (1 cm = 0.01 m)
  // -- Abcoulombs per square centimetre (CGS-EMU) ----------------------------
  abcoulombs_per_square_centimetre:       10 / (0.01 * 0.01),         // exact: 10 C / 10\u207b\u2074 m\u00b2 = 10\u2075 C/m\u00b2
  // -- Megacoulombs per square metre -----------------------------------------
  megacoulombs_per_square_metre:          1e6,                         // exact: 10\u2076 C/m\u00b2 (SI prefix mega)
  // -- Gigacoulombs per square metre -----------------------------------------
  gigacoulombs_per_square_metre:          1e9,                         // exact: 10\u2079 C/m\u00b2 (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attocoulombs_per_square_metre: {
    name: "Attocoulombs per square metre",
    description: "The attocoulomb per square metre (aC/m\u00b2) equals 10\u207b\u00b9\u2078 C/m\u00b2, the scale for areal charge density on individual molecular monolayers measured by Kelvin probe force microscopy. A single elementary charge on a 1 \u00b5m\u00b2 area gives about 0.16 aC/m\u00b2; contact potential distributions in organic photovoltaic blends correspond to aC/m\u00b2-scale surface charge. 1 aC/m\u00b2 = 10\u207b\u00b9\u2078 C/m\u00b2 = 10\u207b\u00b3 fC/m\u00b2.",
    symbol: "aC/m\u00b2"
  },
  femtocoulombs_per_square_metre: {
    name: "Femtocoulombs per square metre",
    description: "The femtocoulomb per square metre (fC/m\u00b2) equals 10\u207b\u00b9\u2075 C/m\u00b2, arising in scanning Kelvin probe measurements of oxide fixed charge. MOS interface state densities of 10\u00b9 charges/cm\u00b2 correspond to about 0.16 fC/m\u00b2; fixed charge in high-k gate dielectrics and SiO\u2082/Si interfaces is typically 10-100 fC/m\u00b2. 1 fC/m\u00b2 = 10\u207b\u00b9\u2075 C/m\u00b2 = 10\u207b\u00b3 pC/m\u00b2.",
    symbol: "fC/m\u00b2"
  },
  picocoulombs_per_square_metre: {
    name: "Picocoulombs per square metre",
    description: "The picocoulomb per square metre (pC/m\u00b2) equals 10\u207b\u00b9\u00b2 C/m\u00b2, the scale for surface charge density on lightly charged polymer electret films and semiconductor surface states. Low-dose ion-implanted silicon has surface charge densities of 1-100 pC/m\u00b2; piezoelectric polymer films (PVDF) accumulate picocoulombs per square metre at low mechanical stress. 1 pC/m\u00b2 = 10\u207b\u00b9\u00b2 C/m\u00b2 = 10\u207b\u00b3 nC/m\u00b2.",
    symbol: "pC/m\u00b2"
  },
  nanocoulombs_per_square_metre: {
    name: "Nanocoulombs per square metre",
    description: "The nanocoulomb per square metre (nC/m\u00b2) equals 10\u207b\u2079 C/m\u00b2, the scale for charge density on moderately charged electret films and LCD alignment-layer surfaces. Commercial cellular polypropylene electret microphones carry surface charge densities of 0.1-10 nC/m\u00b2; charge on liquid-crystal alignment layers affects pixel response times. 1 nC/m\u00b2 = 10\u207b\u2079 C/m\u00b2 = 10\u207b\u00b3 \u00b5C/m\u00b2.",
    symbol: "nC/m\u00b2"
  },
  microcoulombs_per_square_metre: {
    name: "Microcoulombs per square metre",
    description: "The microcoulomb per square metre (\u00b5C/m\u00b2) equals 10\u207b\u2076 C/m\u00b2, the scale for charge density on highly charged electret films and insulator surfaces in high-voltage environments. PVDF piezoelectric sensors produce surface charge densities of 1-100 \u00b5C/m\u00b2 at typical mechanical loads; ozone-generator electrode surfaces accumulate \u00b5C/m\u00b2-scale charge during corona discharge. 1 \u00b5C/m\u00b2 = 10\u207b\u2076 C/m\u00b2 = 10\u207b\u00b3 mC/m\u00b2.",
    symbol: "\u00b5C/m\u00b2"
  },
  statcoulombs_per_square_centimetre: {
    name: "Statcoulombs per square centimetre",
    description: "The statcoulomb per square centimetre (statC/cm\u00b2) is the surface charge density unit of the CGS-Gaussian system, equal to 10\u00b3/c C/m\u00b2 where c = 299\u202f792\u202f458 m/s, giving \u2248 3.336 \u00d7 10\u207b\u2076 C/m\u00b2. In Gaussian units Gauss's law reads E = 4\u03c0\u03c3 (no \u03b5\u2080 factor); 1 statC/cm\u00b2 produces a surface field of 4\u03c0 statV/cm. 1 statC/cm\u00b2 \u2248 3.336 \u00b5C/m\u00b2.",
    symbol: "statC/cm\u00b2"
  },
  millicoulombs_per_square_metre: {
    name: "Millicoulombs per square metre",
    description: "The millicoulomb per square metre (mC/m\u00b2) equals 10\u207b\u00b3 C/m\u00b2, the scale for triboelectric charging of common plastics and electrostatic spray-coating processes. Rubbed polytetrafluoroethylene (PTFE) accumulates 1-10 mC/m\u00b2; electrostatic powder coating guns deposit 1-5 mC/m\u00b2 on grounded work pieces; thundercloud base charge density before lightning is 1-5 mC/m\u00b2. 1 mC/m\u00b2 = 10\u207b\u00b3 C/m\u00b2 = 10\u00b3 \u00b5C/m\u00b2.",
    symbol: "mC/m\u00b2"
  },
  microcoulombs_per_square_centimetre: {
    name: "Microcoulombs per square centimetre",
    description: "The microcoulomb per square centimetre (\u00b5C/cm\u00b2) equals exactly 10\u207b\u00b2 C/m\u00b2 = 0.01 C/m\u00b2, used in electrophotography and toner transfer engineering. Laser printer photoconductor drums are charged to 0.1-1 \u00b5C/cm\u00b2 before exposure; toner particle charge-to-mass ratios are calibrated against \u00b5C/cm\u00b2-scale drum charge; ion implantation dose uniformity is verified at \u00b5C/cm\u00b2 levels. 1 \u00b5C/cm\u00b2 = 0.01 C/m\u00b2.",
    symbol: "\u00b5C/cm\u00b2"
  },
  coulombs_per_square_metre: {
    name: "Coulombs per square metre",
    description: "The coulomb per square metre (C/m\u00b2) is the SI coherent unit of surface charge density, equal to 1 A\u00b7s\u00b7m\u207b\u00b2. A parallel-plate capacitor with 1 C/m\u00b2 on each plate produces a gap field of 1/\u03b5\u2080 \u2248 113 GV/m; realistic capacitor plate densities are 10-100 \u00b5C/m\u00b2; charge density on a sphere at electrical breakdown of air is about 27 \u00b5C/m\u00b2. 1 C/m\u00b2 = 10\u00b3 mC/m\u00b2 = 10\u2076 \u00b5C/m\u00b2.",
    symbol: "C/m\u00b2"
  },
  millicoulombs_per_square_centimetre: {
    name: "Millicoulombs per square centimetre",
    description: "The millicoulomb per square centimetre (mC/cm\u00b2) equals exactly 10 C/m\u00b2, used in electrochemical plating and electrophoretic deposition. Electrodeposition of copper at 10 C/m\u00b2 deposits a monolayer-scale film; faradaic charge density in electrochemical supercapacitors is 1-100 mC/cm\u00b2; silver electroplating baths run at 2-10 mC/cm\u00b2 for thin coatings. 1 mC/cm\u00b2 = 10 C/m\u00b2.",
    symbol: "mC/cm\u00b2"
  },
  coulombs_per_square_foot: {
    name: "Coulombs per square foot",
    description: "The coulomb per square foot (C/ft\u00b2) equals exactly 1/(0.3048)\u00b2 C/m\u00b2 \u2248 10.7639 C/m\u00b2, used in North American electrostatic specifications for insulating flooring, workbench surfaces, and static-dissipative materials. ANSI/ESD standards specify electrostatic charge decay and surface charge limits in C/ft\u00b2; antistatic mat and flooring performance is rated in C/ft\u00b2. 1 C/ft\u00b2 \u2248 10.764 C/m\u00b2.",
    symbol: "C/ft\u00b2"
  },
  kilocoulombs_per_square_metre: {
    name: "Kilocoulombs per square metre",
    description: "The kilocoulomb per square metre (kC/m\u00b2) equals 10\u00b3 C/m\u00b2, the scale for electrochemical processes involving heavy plating, electrolytic metal dissolution, and pulsed-power surface ablation. Thick copper electroforming runs accumulate kC/m\u00b2-scale charge; electrochemical machining (ECM) removes material at multi-kC/m\u00b2 charge densities; large electrolytic capacitor anode foils are etched at kC/m\u00b2. 1 kC/m\u00b2 = 10\u00b3 C/m\u00b2.",
    symbol: "kC/m\u00b2"
  },
  coulombs_per_square_inch: {
    name: "Coulombs per square inch",
    description: "The coulomb per square inch (C/in\u00b2) equals exactly 1/(0.0254)\u00b2 C/m\u00b2 \u2248 1\u202f550.003 C/m\u00b2, used in US insulation and dielectric material withstand specifications. Dielectric strength ratings for polymeric films in US datasheets are sometimes cross-referenced with C/in\u00b2 for high-voltage applications; electrostatic precipitator collector plate performance is quoted in C/in\u00b2 in some NEMA standards. 1 C/in\u00b2 \u2248 1\u202f550 C/m\u00b2.",
    symbol: "C/in\u00b2"
  },
  coulombs_per_square_centimetre: {
    name: "Coulombs per square centimetre",
    description: "The coulomb per square centimetre (C/cm\u00b2) equals exactly 10\u2074 C/m\u00b2, used in electrochemistry for Faradaic charge densities in electrolytic cells and battery electrode characterisation. The theoretical charge density for lithiation of a graphene anode monolayer is \u2248 0.38 C/cm\u00b2; proton exchange membrane fuel cell charge densities are 0.1-1 C/cm\u00b2; pulsed-laser ablation craters carry \u00b5C to mC per cm\u00b2. 1 C/cm\u00b2 = 10\u2074 C/m\u00b2.",
    symbol: "C/cm\u00b2"
  },
  abcoulombs_per_square_centimetre: {
    name: "Abcoulombs per square centimetre",
    description: "The abcoulomb per square centimetre (abC/cm\u00b2) is the surface charge density unit of the CGS-EMU system, equal to 1 abC / 1 cm\u00b2 = 10 C / 10\u207b\u2074 m\u00b2 = 10\u2075 C/m\u00b2. It appears in nineteenth-century electromagnetic engineering texts on telegraph cable and dynamo analysis; the abC/cm\u00b2 is the natural surface density unit when using abamperes and centimetres. 1 abC/cm\u00b2 = 10\u2075 C/m\u00b2 = 100 kC/m\u00b2.",
    symbol: "abC/cm\u00b2"
  },
  megacoulombs_per_square_metre: {
    name: "Megacoulombs per square metre",
    description: "The megacoulomb per square metre (MC/m\u00b2) equals 10\u2076 C/m\u00b2, encountered in pulsed-power Z-pinch target engineering and extreme plasma physics. Current-carrying surfaces in Z-pinch implosions experience charge densities approaching MC/m\u00b2 transiently; magnetohydrodynamic models of solar coronal loops and active region surfaces reference MC/m\u00b2 surface current sheets. 1 MC/m\u00b2 = 10\u2076 C/m\u00b2 = 10\u00b3 kC/m\u00b2.",
    symbol: "MC/m\u00b2"
  },
  gigacoulombs_per_square_metre: {
    name: "Gigacoulombs per square metre",
    description: "The gigacoulomb per square metre (GC/m\u00b2) equals 10\u2079 C/m\u00b2, a value with no engineering realisation, used only in astrophysical and theoretical plasma models. Magnetar magnetosphere charge sheet densities, pulsar polar cap surface charge, and theoretical cosmic string surface charge are described at GC/m\u00b2 scales in research literature. 1 GC/m\u00b2 = 10\u2079 C/m\u00b2 = 10\u00b3 MC/m\u00b2.",
    symbol: "GC/m\u00b2"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCoulombsPerSquareMetre);
}

function convertChargeDensitySurface() {
  convertFactorBased(toCoulombsPerSquareMetre);
}

initConverterPage();
