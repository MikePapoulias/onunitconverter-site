// Base unit: coulomb per cubic metre (C/m\u00b3) - the SI coherent unit of volume charge density.
// Volume charge density \u03c1 [A T L\u207b\u00b3] is charge per unit volume: \u03c1 = Q/V.
// All factors express how many C/m\u00b3 equal 1 unit of the given measure.
//
// Exact foundations:
//   c      = 299 792 458 m/s              (exact, speed of light definition)
//   1 in   = 0.0254 m                     (exact, international inch definition)
//   1 ft   = 0.3048 m                     (exact, international foot definition)
//   1 yd   = 0.9144 m                     (exact, international yard definition)
//   1 US gal = 231 in\u00b3               (exact, US customary gallon)
//   1 C/m\u00b3 = 1 A\u00b7s\u00b7m\u207b\u00b3
//
// SI prefix units per cubic metre (all exact by definition):
//   1 aC/m\u00b3 = 10\u207b\u00b9\u2078 C/m\u00b3   1 fC/m\u00b3 = 10\u207b\u00b9\u2075 C/m\u00b3   1 pC/m\u00b3 = 10\u207b\u00b9\u00b2 C/m\u00b3
//   1 nC/m\u00b3 = 10\u207b\u2079 C/m\u00b3    1 \u00b5C/m\u00b3 = 10\u207b\u2076 C/m\u00b3     1 mC/m\u00b3 = 10\u207b\u00b3 C/m\u00b3
//   1 kC/m\u00b3 = 10\u00b3 C/m\u00b3      1 MC/m\u00b3 = 10\u2076 C/m\u00b3       1 GC/m\u00b3 = 10\u2079 C/m\u00b3
//
// Statcoulomb per cubic centimetre (CGS-Gaussian) - exact:
//   1 statC = 1/(c\u00b710) C  where c = 299 792 458 m/s  (exact; c\u00b710 = 2.99792458\u00d710\u2079)
//   1 statC/cm\u00b3 = [1/(c\u00b710) C] / 10\u207b\u2076 m\u00b3 = 10\u2075/c C/m\u00b3
//             \u2248 3.3356 \u00d7 10\u207b\u2074 C/m\u00b3   (between \u00b5C/m\u00b3 and mC/m\u00b3)
//
// Abcoulomb per cubic centimetre (CGS-EMU) - exact:
//   1 abC = 10 C  (exact)
//   1 abC/cm\u00b3 = 10 C / 10\u207b\u2076 m\u00b3 = 10\u2077 C/m\u00b3
//
// Imperial cubic volume units (1 in = 0.0254 m, 1 ft = 0.3048 m, 1 yd = 0.9144 m - all exact):
//   1 C/yd\u00b3  = 1/(0.9144)\u00b3 m\u00b3   \u2248  1.30795 C/m\u00b3
//   1 C/ft\u00b3  = 1/(0.3048)\u00b3 m\u00b3   \u2248 35.3147 C/m\u00b3
//   1 US gal = 231\u00d7(0.0254)\u00b3 m\u00b3  \u2248  0.003785411784 m\u00b3   \u2192   1 C/gal (US) \u2248 264.172 C/m\u00b3
//   1 C/in\u00b3  = 1/(0.0254)\u00b3 m\u00b3   \u2248 61 023.7 C/m\u00b3

const toCoulombsPerCubicMetre = {
  // -- Attocoulombs per cubic metre ------------------------------------------
  attocoulombs_per_cubic_metre:         1e-18,                              // exact: 10\u207b\u00b9\u2078 C/m\u00b3 (SI prefix atto)
  // -- Femtocoulombs per cubic metre -----------------------------------------
  femtocoulombs_per_cubic_metre:        1e-15,                              // exact: 10\u207b\u00b9\u2075 C/m\u00b3 (SI prefix femto)
  // -- Picocoulombs per cubic metre ------------------------------------------
  picocoulombs_per_cubic_metre:         1e-12,                              // exact: 10\u207b\u00b9\u00b2 C/m\u00b3 (SI prefix pico)
  // -- Nanocoulombs per cubic metre ------------------------------------------
  nanocoulombs_per_cubic_metre:         1e-9,                               // exact: 10\u207b\u2079 C/m\u00b3 (SI prefix nano)
  // -- Microcoulombs per cubic metre -----------------------------------------
  microcoulombs_per_cubic_metre:        1e-6,                               // exact: 10\u207b\u2076 C/m\u00b3 (SI prefix micro)
  // -- Statcoulombs per cubic centimetre (CGS-Gaussian) ----------------------
  statcoulombs_per_cubic_centimetre:    1e5 / 299792458,                    // exact: 10\u2075/c C/m\u00b3 \u2248 3.3356 \u00d7 10\u207b\u2074 C/m\u00b3 (between \u00b5C/m\u00b3 and mC/m\u00b3)
  // -- Millicoulombs per cubic metre -----------------------------------------
  millicoulombs_per_cubic_metre:        1e-3,                               // exact: 10\u207b\u00b3 C/m\u00b3 (SI prefix milli)
  // -- Coulombs per cubic metre (SI unit) ------------------------------------
  coulombs_per_cubic_metre:             1,                                  // reference (base unit)
  // -- Coulombs per cubic yard -----------------------------------------------
  coulombs_per_cubic_yard:              1 / (0.9144 * 0.9144 * 0.9144),    // exact: 1/0.764554857984 C/m\u00b3 \u2248 1.30795 C/m\u00b3 (1 yd = 0.9144 m)
  // -- Coulombs per cubic foot -----------------------------------------------
  coulombs_per_cubic_foot:              1 / (0.3048 * 0.3048 * 0.3048),    // exact: 1/0.028316846592 C/m\u00b3 \u2248 35.3147 C/m\u00b3 (1 ft = 0.3048 m)
  // -- Coulombs per US gallon ------------------------------------------------
  coulombs_per_us_gallon:               1 / (231 * 0.0254 * 0.0254 * 0.0254), // exact: 1/0.003785411784 C/m\u00b3 \u2248 264.172 C/m\u00b3 (1 US gal = 231 in\u00b3)
  // -- Kilocoulombs per cubic metre ------------------------------------------
  kilocoulombs_per_cubic_metre:         1e3,                                // exact: 10\u00b3 C/m\u00b3 (SI prefix kilo)
  // -- Coulombs per cubic inch -----------------------------------------------
  coulombs_per_cubic_inch:              1 / (0.0254 * 0.0254 * 0.0254),    // exact: 1/1.6387064\u00d710\u207b\u2075 C/m\u00b3 \u2248 61 023.7 C/m\u00b3 (1 in = 0.0254 m)
  // -- Megacoulombs per cubic metre ------------------------------------------
  megacoulombs_per_cubic_metre:         1e6,                                // exact: 10\u2076 C/m\u00b3 (SI prefix mega)
  // -- Abcoulombs per cubic centimetre (CGS-EMU) -----------------------------
  abcoulombs_per_cubic_centimetre:      10 / (0.01 * 0.01 * 0.01),         // exact: 10 C / 10\u207b\u2076 m\u00b3 = 10\u2077 C/m\u00b3
  // -- Gigacoulombs per cubic metre ------------------------------------------
  gigacoulombs_per_cubic_metre:         1e9,                                // exact: 10\u2079 C/m\u00b3 (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attocoulombs_per_cubic_metre: {
    name: "Attocoulombs per cubic metre",
    description: "The attocoulomb per cubic metre (aC/m\u00b3) equals 10\u207b\u00b9\u2078 C/m\u00b3, a scale with fewer than 10 elementary charges per cubic metre. Residual charge density in the intergalactic medium (~0.1 ion/m\u00b3) is around 0.016 aC/m\u00b3; theoretical models of charge density in near-vacuum regions and cosmological large-scale structure simulations use aC/m\u00b3. 1 aC/m\u00b3 = 10\u207b\u00b9\u2078 C/m\u00b3 = 10\u207b\u00b3 fC/m\u00b3.",
    symbol: "aC/m\u00b3"
  },
  femtocoulombs_per_cubic_metre: {
    name: "Femtocoulombs per cubic metre",
    description: "The femtocoulomb per cubic metre (fC/m\u00b3) equals 10\u207b\u00b9\u2075 C/m\u00b3, the scale for charge density in the interstellar medium. The diffuse interstellar medium has electron density ~3\u00d710\u2074 /m\u00b3, giving charge density \u22485 fC/m\u00b3; radiation belt proton charge density in the inner Van Allen belt is in the fC/m\u00b3 range. 1 fC/m\u00b3 = 10\u207b\u00b9\u2075 C/m\u00b3 = 10\u207b\u00b3 pC/m\u00b3.",
    symbol: "fC/m\u00b3"
  },
  picocoulombs_per_cubic_metre: {
    name: "Picocoulombs per cubic metre",
    description: "The picocoulomb per cubic metre (pC/m\u00b3) equals 10\u207b\u00b9\u00b2 C/m\u00b3, the scale for solar wind charge density and fair-weather atmospheric electricity. The solar wind near Earth has electron density ~5\u00d710\u2076 /m\u00b3, giving charge density \u22480.8 pC/m\u00b3; fair-weather atmospheric space charge near sea level is 1-10 pC/m\u00b3. 1 pC/m\u00b3 = 10\u207b\u00b9\u00b2 C/m\u00b3 = 10\u207b\u00b3 nC/m\u00b3.",
    symbol: "pC/m\u00b3"
  },
  nanocoulombs_per_cubic_metre: {
    name: "Nanocoulombs per cubic metre",
    description: "The nanocoulomb per cubic metre (nC/m\u00b3) equals 10\u207b\u2079 C/m\u00b3, the scale for thundercloud volume charge and laboratory low-pressure plasmas. The main negative charge region of a mature thunderstorm has volume charge density of 1-5 nC/m\u00b3; glow discharge plasma at ~1 Pa has space charge density in the nC/m\u00b3 to \u00b5C/m\u00b3 range. 1 nC/m\u00b3 = 10\u207b\u2079 C/m\u00b3 = 10\u207b\u00b3 \u00b5C/m\u00b3.",
    symbol: "nC/m\u00b3"
  },
  microcoulombs_per_cubic_metre: {
    name: "Microcoulombs per cubic metre",
    description: "The microcoulomb per cubic metre (\u00b5C/m\u00b3) equals 10\u207b\u2076 C/m\u00b3, arising in streamer discharge preionisation zones and very lightly doped semiconductor depletion regions. Silicon doped at ~6\u00d710\u00b9\u00b2 /m\u00b3 has depletion charge density \u22481 \u00b5C/m\u00b3; outer glow-discharge column space charge is in the \u00b5C/m\u00b3 range. 1 \u00b5C/m\u00b3 = 10\u207b\u2076 C/m\u00b3 = 10\u207b\u00b3 mC/m\u00b3.",
    symbol: "\u00b5C/m\u00b3"
  },
  statcoulombs_per_cubic_centimetre: {
    name: "Statcoulombs per cubic centimetre",
    description: "The statcoulomb per cubic centimetre (statC/cm\u00b3) is the volume charge density unit of the CGS-Gaussian system, equal to 10\u2075/c C/m\u00b3 where c = 299\u202f792\u202f458 m/s, giving \u22483.336 \u00d7 10\u207b\u2074 C/m\u00b3. Gaussian electrostatics expresses Gauss\u2019s law as \u2207\u00b7E = 4\u03c0\u03c1 (no \u03b5\u2080 factor); the statC/cm\u00b3 is the natural \u03c1 unit when fields are in statV/cm. 1 statC/cm\u00b3 \u2248 0.3336 mC/m\u00b3.",
    symbol: "statC/cm\u00b3"
  },
  millicoulombs_per_cubic_metre: {
    name: "Millicoulombs per cubic metre",
    description: "The millicoulomb per cubic metre (mC/m\u00b3) equals 10\u207b\u00b3 C/m\u00b3, the scale for space charge in streamer discharge channels and moderately doped semiconductor depletion regions. Silicon doped at ~6\u00d710\u00b9\u2075 /m\u00b3 carries depletion charge density \u22481 mC/m\u00b3; streamer plasma cores during lightning leader propagation have net charge densities of 0.1-10 mC/m\u00b3. 1 mC/m\u00b3 = 10\u207b\u00b3 C/m\u00b3 = 10\u00b3 \u00b5C/m\u00b3.",
    symbol: "mC/m\u00b3"
  },
  coulombs_per_cubic_metre: {
    name: "Coulombs per cubic metre",
    description: "The coulomb per cubic metre (C/m\u00b3) is the SI coherent unit of volume charge density, equal to 1 A\u00b7s\u00b7m\u207b\u00b3. The depletion region of a silicon pn junction doped at ~6\u00d710\u00b9\u2078 /m\u00b3 carries \u03c1 \u22481 C/m\u00b3; the lightning return-stroke channel has net charge density of several C/m\u00b3; electrolytic capacitor dielectric space charge is in the C/m\u00b3 range. 1 C/m\u00b3 = 10\u00b3 mC/m\u00b3.",
    symbol: "C/m\u00b3"
  },
  coulombs_per_cubic_yard: {
    name: "Coulombs per cubic yard",
    description: "The coulomb per cubic yard (C/yd\u00b3) equals exactly 1/(0.9144)\u00b3 C/m\u00b3 \u22481.30795 C/m\u00b3, used in North American electrokinetic remediation projects. Electrokinetic treatment of heavy-metal contaminated soil delivers 1-10 C/yd\u00b3 of charge per treatment cycle; electro-osmosis drainage studies in US geotechnical engineering use C/yd\u00b3 as the charge dosage unit. 1 C/yd\u00b3 \u22481.308 C/m\u00b3.",
    symbol: "C/yd\u00b3"
  },
  coulombs_per_cubic_foot: {
    name: "Coulombs per cubic foot",
    description: "The coulomb per cubic foot (C/ft\u00b3) equals exactly 1/(0.3048)\u00b3 C/m\u00b3 \u224835.3147 C/m\u00b3, used in North American materials testing and industrial electrostatics standards. Electrostatic charge density in polymer foam packaging is quoted in C/ft\u00b3 in ASTM standards; ESD-protective bag and tray charge retention is rated in C/ft\u00b3 in US industrial specifications. 1 C/ft\u00b3 \u224835.315 C/m\u00b3.",
    symbol: "C/ft\u00b3"
  },
  coulombs_per_us_gallon: {
    name: "Coulombs per US gallon",
    description: "The coulomb per US gallon (C/gal) equals exactly 1/(231\u00d7(0.0254)\u00b3) C/m\u00b3 \u2248264.172 C/m\u00b3, used in electrochemical water-treatment and flow-battery engineering in North America. Electrocoagulation systems are specified by charge dosage in C/gal (US) of treated water; flow battery electrolyte charge state is monitored in C/gal in North American plant documentation. 1 C/gal (US) \u2248264.172 C/m\u00b3.",
    symbol: "C/gal (US)"
  },
  kilocoulombs_per_cubic_metre: {
    name: "Kilocoulombs per cubic metre",
    description: "The kilocoulomb per cubic metre (kC/m\u00b3) equals 10\u00b3 C/m\u00b3, the scale for heavily doped semiconductor depletion layers and electrochemical supercapacitor electrodes. Silicon doped at ~6\u00d710\u00b2\u00b9 /m\u00b3 has depletion charge density \u22481 kC/m\u00b3; porous carbon electrodes in electric double-layer capacitors store 1-10 kC/m\u00b3 of volumetric charge. 1 kC/m\u00b3 = 10\u00b3 C/m\u00b3 = 10\u207b\u00b3 MC/m\u00b3.",
    symbol: "kC/m\u00b3"
  },
  coulombs_per_cubic_inch: {
    name: "Coulombs per cubic inch",
    description: "The coulomb per cubic inch (C/in\u00b3) equals exactly 1/(0.0254)\u00b3 C/m\u00b3 \u224861\u202f023.7 C/m\u00b3, used in US semiconductor and battery engineering. Volumetric charge capacity of lithium-ion battery electrodes is quoted in C/in\u00b3 in North American product datasheets; solid-state electrolyte charge density specifications in US engineering standards appear in C/in\u00b3. 1 C/in\u00b3 \u224861\u202f024 C/m\u00b3 = 61.024 kC/m\u00b3.",
    symbol: "C/in\u00b3"
  },
  megacoulombs_per_cubic_metre: {
    name: "Megacoulombs per cubic metre",
    description: "The megacoulomb per cubic metre (MC/m\u00b3) equals 10\u2076 C/m\u00b3, arising in degenerately doped semiconductor junctions and dense plasma physics. A degenerately doped silicon layer at 10\u00b2\u2075 /m\u00b3 carries \u03c1 \u22481.6 MC/m\u00b3; dense Z-pinch plasma cores at 10\u00b2\u2075 /m\u00b3 reach MC/m\u00b3 charge densities; metallic conductor free-electron densities are GC/m\u00b3 scale. 1 MC/m\u00b3 = 10\u2076 C/m\u00b3 = 10\u00b3 kC/m\u00b3.",
    symbol: "MC/m\u00b3"
  },
  abcoulombs_per_cubic_centimetre: {
    name: "Abcoulombs per cubic centimetre",
    description: "The abcoulomb per cubic centimetre (abC/cm\u00b3) is the volume charge density unit of the CGS-EMU system, equal to 1 abC / 1 cm\u00b3 = 10 C / 10\u207b\u2076 m\u00b3 = 10\u2077 C/m\u00b3. It appears in nineteenth-century electromagnetic texts and in CGS-EMU space-charge-limited current models; metallic free-electron charge densities are conveniently expressed at this scale in CGS analysis. 1 abC/cm\u00b3 = 10\u2077 C/m\u00b3 = 10 MC/m\u00b3.",
    symbol: "abC/cm\u00b3"
  },
  gigacoulombs_per_cubic_metre: {
    name: "Gigacoulombs per cubic metre",
    description: "The gigacoulomb per cubic metre (GC/m\u00b3) equals 10\u2079 C/m\u00b3, the natural scale for free-electron charge density in metals. Copper has ~8.5\u00d710\u00b2\u2078 free electrons/m\u00b3, giving total free-charge density \u224813.6 GC/m\u00b3; gold is \u22489.4 GC/m\u00b3; this scale is also used in extreme fusion plasma models at densities above 10\u00b2\u2078 /m\u00b3. 1 GC/m\u00b3 = 10\u2079 C/m\u00b3 = 10\u00b3 MC/m\u00b3.",
    symbol: "GC/m\u00b3"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCoulombsPerCubicMetre);
}

function convertChargeDensityVolume() {
  convertFactorBased(toCoulombsPerCubicMetre);
}

initConverterPage();
