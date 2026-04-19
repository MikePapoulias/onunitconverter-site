// Base unit: coulomb (C) - the SI derived unit of electric charge.
// Electric charge Q is the fundamental property of matter responsible for
// electromagnetic interactions. All factors express how many coulombs equal
// 1 unit of the given measure.
//
// Exact foundations (2019 SI revision):
//   e   = 1.602 176 634 × 10⁻¹⁹ C      (exact, elementary charge definition)
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   N_A = 6.022 140 76 × 10²³ mol⁻¹    (exact, Avogadro constant definition)
//
// SI prefix units (all exact by definition):
//   1 aC = 10⁻¹⁸ C    1 fC = 10⁻¹⁵ C    1 pC = 10⁻¹² C
//   1 nC = 10⁻⁹ C     1 µC = 10⁻⁶ C     1 mC = 10⁻³ C
//   1 kC = 10³ C       1 MC = 10⁶ C      1 GC = 10⁹ C
//
// Statcoulomb (CGS-Gaussian) - exact:
//   Gaussian Coulomb law: F [dyn] = q₁q₂/r² (q in statC, r in cm)
//   1 statC = 10⁻¹ / c [m/s] C = 1 / (2.99792458 × 10⁹) C  (exact)
//
// Abcoulomb (CGS-EMU) - exact:
//   1 abC = 10 C  (from 1 abampere = 10 A, exact)
//
// Ampere-hour family (1 hour = 3600 s, exact):
//   1 µAh = 1×10⁻⁶ A × 3600 s = 3.6×10⁻³ C   (exact)
//   1 mAh = 1×10⁻³ A × 3600 s = 3.6       C   (exact)
//   1 Ah  = 1      A × 3600 s = 3600       C   (exact)
//   1 kAh = 1×10³  A × 3600 s = 3.6×10⁶   C   (exact)
//
// Faraday (electrochemistry) - exact in 2019 SI:
//   1 F = N_A × e = 6.02214076×10²³ × 1.602176634×10⁻¹⁹ C
//       ≈ 96 485.332 12 C/mol

const toCoulombs = {
  // -- Elementary charge -------------------------------------------------------
  elementary_charge:  1.602176634e-19,        // exact: 2019 SI definition of e
  // -- Attocoulomb -------------------------------------------------------------
  attocoulombs:       1e-18,                  // exact: 10⁻¹⁸ C (SI prefix atto)
  // -- Femtocoulomb ------------------------------------------------------------
  femtocoulombs:      1e-15,                  // exact: 10⁻¹⁵ C (SI prefix femto)
  // -- Picocoulomb -------------------------------------------------------------
  picocoulombs:       1e-12,                  // exact: 10⁻¹² C (SI prefix pico)
  // -- Statcoulomb -------------------------------------------------------------
  statcoulombs:       1 / (2.99792458e9),     // exact: 1 statC = 10⁻¹/c C ≈ 3.336×10⁻¹⁰ C
  // -- Nanocoulomb -------------------------------------------------------------
  nanocoulombs:       1e-9,                   // exact: 10⁻⁹ C (SI prefix nano)
  // -- Microcoulomb ------------------------------------------------------------
  microcoulombs:      1e-6,                   // exact: 10⁻⁶ C (SI prefix micro)
  // -- Millicoulomb ------------------------------------------------------------
  millicoulombs:      1e-3,                   // exact: 10⁻³ C (SI prefix milli)
  // -- Microampere-hour --------------------------------------------------------
  microampere_hours:  3.6e-3,                 // exact: 10⁻⁶ A × 3600 s
  // -- Coulomb (SI base unit) --------------------------------------------------
  coulombs:           1,                      // reference (base unit)
  // -- Milliampere-hour --------------------------------------------------------
  milliampere_hours:  3.6,                    // exact: 10⁻³ A × 3600 s
  // -- Abcoulomb ---------------------------------------------------------------
  abcoulombs:         10,                     // exact: 1 abC = 10 A × 1 s (CGS-EMU)
  // -- Kilocoulomb -------------------------------------------------------------
  kilocoulombs:       1e3,                    // exact: 10³ C (SI prefix kilo)
  // -- Ampere-hour -------------------------------------------------------------
  ampere_hours:       3600,                   // exact: 1 A × 3600 s
  // -- Faraday -----------------------------------------------------------------
  faradays:           6.02214076e23 * 1.602176634e-19, // = N_A × e ≈ 96 485.332 12 C (exact)
  // -- Megacoulomb -------------------------------------------------------------
  megacoulombs:       1e6,                    // exact: 10⁶ C (SI prefix mega)
  // -- Kiloampere-hour ---------------------------------------------------------
  kiloampere_hours:   3.6e6,                  // exact: 10³ A × 3600 s
  // -- Gigacoulomb -------------------------------------------------------------
  gigacoulombs:       1e9,                    // exact: 10⁹ C (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  elementary_charge: {
    name: "Elementary charge",
    description: "The elementary charge (e) is the magnitude of charge on a single proton or electron, defined exactly as 1.602\u202f176\u202f634 \u00d7 10\u207b\u00b9\u2079 C in the 2019 SI revision. It is the quantum of electric charge - the smallest freely occurring charge in nature - and underpins all atomic and subatomic physics. A current of 1 A corresponds to 6.241\u202f509 \u00d7 10\u00b9\u2078 elementary charges flowing per second.",
    symbol: "e"
  },
  attocoulombs: {
    name: "Attocoulombs",
    description: "The attocoulomb (aC) equals 10\u207b\u00b9\u2078 C, sitting between the elementary charge and the femtocoulomb. It arises in ultra-sensitive charge measurements: single-electron transistors, quantum capacitance probing of graphene and 2D materials, and scanning tunnelling microscopy where tip-sample charge exchange is tracked at this scale. 1 aC = 10\u207b\u00b3 fC \u2248 6.24 e.",
    symbol: "aC"
  },
  femtocoulombs: {
    name: "Femtocoulombs",
    description: "The femtocoulomb (fC) equals 10\u207b\u00b9\u2075 C, used in radiation detection, MEMS sensors, and microelectronics charge characterisation. A single ionising particle traversing a thin silicon strip detector typically deposits 1-80 fC; noise floors of charge-sensitive amplifiers in nuclear instrumentation are specified in femtocoulombs. 1 fC = 10\u207b\u00b3 pC = 10\u00b3 aC.",
    symbol: "fC"
  },
  picocoulombs: {
    name: "Picocoulombs",
    description: "The picocoulomb (pC) equals 10\u207b\u00b9\u00b2 C, the standard charge unit for radiation detector pulse heights and precision electrometers. Charge signals from Geiger-Muller tubes, scintillator detectors, and proportional counters are routinely expressed in picocoulombs; a 1 pF capacitor at 1 V holds exactly 1 pC. 1 pC = 10\u207b\u00b3 nC = 10\u00b3 fC.",
    symbol: "pC"
  },
  statcoulombs: {
    name: "Statcoulombs",
    description: "The statcoulomb (statC), also called the franklin (Fr) or ESU of charge, is the charge unit in the CGS-Gaussian system. Two point charges of 1 statC separated by 1 cm exert a force of exactly 1 dyne; 1 statC = 1 / (2.99\u202f792\u202f458 \u00d7 10\u2079) C \u2248 3.336 \u00d7 10\u207b\u00b9\u2070 C (exact, since c is a defined constant). It remains in use in electrostatics textbooks and atomic physics where working without the \u03b5\u2080 factor simplifies Coulomb-law expressions.",
    symbol: "statC"
  },
  nanocoulombs: {
    name: "Nanocoulombs",
    description: "The nanocoulomb (nC) equals 10\u207b\u2079 C, the typical charge scale for capacitive sensors, electrostatic discharge events, and biological ion transport measurements. A 100 pF capacitor charged to 10 V stores 1 nC; ESD sparks from contact charging can transfer 10-500 nC. 1 nC = 10\u207b\u00b3 \u00b5C = 10\u00b3 pC.",
    symbol: "nC"
  },
  microcoulombs: {
    name: "Microcoulombs",
    description: "The microcoulomb (\u00b5C) equals 10\u207b\u2076 C, used for moderate capacitors, piezoelectric charge outputs, and laboratory electrostatics. A 1 \u00b5F capacitor at 1 V holds exactly 1 \u00b5C; piezoelectric accelerometers generate charge signals in the microcoulomb range under mechanical loading. 1 \u00b5C = 10\u207b\u00b3 mC = 10\u00b3 nC.",
    symbol: "\u00b5C"
  },
  millicoulombs: {
    name: "Millicoulombs",
    description: "The millicoulomb (mC) equals 10\u207b\u00b3 C, encountered in electroplating thin films, faradaic charge integration in voltammetry, and capacitor discharge testing. Cyclic voltammetry integration of an electrode adsorption peak typically yields 1-100 mC; a 1 mF supercapacitor at 1 V stores exactly 1 mC. 1 mC = 10\u207b\u00b3 C = 10\u00b3 \u00b5C.",
    symbol: "mC"
  },
  microampere_hours: {
    name: "Microampere-hours",
    description: "The microampere-hour (\u00b5Ah) equals exactly 3.6 mC (= 10\u207b\u2076 A \u00d7 3\u202f600 s), a practical capacity unit for ultra-low-power wireless sensors and IoT devices. Bluetooth Low Energy (BLE) beacons typically consume 1-10 \u00b5Ah per advertising event; coin-cell RTC circuits track self-discharge in \u00b5Ah per month. 1 \u00b5Ah = 10\u207b\u00b3 mAh = 3.6 mC.",
    symbol: "\u00b5Ah"
  },
  coulombs: {
    name: "Coulombs",
    description: "The coulomb (C) is the SI derived unit of electric charge, equal to the charge transported by a current of 1 A in 1 s. In the 2019 SI revision it is fixed exactly via the elementary charge: 1 C = 1 / (1.602\u202f176\u202f634 \u00d7 10\u207b\u00b9\u2079) e \u2248 6.241 \u00d7 10\u00b9\u2078 e. Practical benchmarks: a 1 Ah battery stores 3\u202f600 C; a lightning bolt transfers 1-20 C.",
    symbol: "C"
  },
  milliampere_hours: {
    name: "Milliampere-hours",
    description: "The milliampere-hour (mAh) equals exactly 3.6 C and is the universal capacity unit for portable-electronics batteries. Smartphone batteries range from 3\u202f000-5\u202f000 mAh; AA alkaline cells deliver \u22482\u202f500 mAh; small lithium coin cells for RTC modules are rated 35-225 mAh. 1 mAh = 3.6 C = 10\u207b\u00b3 Ah.",
    symbol: "mAh"
  },
  abcoulombs: {
    name: "Abcoulombs",
    description: "The abcoulomb (abC) equals exactly 10 C - the charge unit of the CGS-EMU (electromagnetic) system, defined as the charge transported by 1 abampere (= 10 A) in 1 s. Two parallel wires each carrying 1 abampere and spaced 1 cm apart experience a force of 2 dyn per centimetre length. The abcoulomb appears in older electromagnetic engineering literature from the early twentieth century. 1 abC = 10 C.",
    symbol: "abC"
  },
  kilocoulombs: {
    name: "Kilocoulombs",
    description: "The kilocoulomb (kC) equals 10\u00b3 C \u2248 0.278 Ah, used in industrial electrochemistry, large capacitor bank energy calculations, and fault current analysis. Electroplating a 100 cm\u00b2 nickel layer 25 \u00b5m thick requires roughly 2-4 kC; power-factor-correction capacitor banks in substations may store several kilocoulombs. 1 kC = 10\u207b\u00b3 MC = 10\u00b3 C.",
    symbol: "kC"
  },
  ampere_hours: {
    name: "Ampere-hours",
    description: "The ampere-hour (Ah) equals exactly 3\u202f600 C and is the universal capacity unit for rechargeable batteries. Lead-acid car batteries are rated 40-100 Ah; EV traction packs use 50-300 Ah cells; industrial forklift batteries exceed 1\u202f000 Ah. Multiplying Ah by nominal voltage gives watt-hours of stored energy. 1 Ah = 3\u202f600 C = 1\u202f000 mAh.",
    symbol: "Ah"
  },
  faradays: {
    name: "Faradays",
    description: "The faraday (F) equals the Avogadro constant times the elementary charge - N_A \u00d7 e \u2248 96\u202f485.33 C per mole - and is the fundamental unit of electrochemical charge (Faraday's law: 1 F deposits one gram-equivalent of any substance). Depositing 1 g of silver (Ag\u207a, M = 107.87 g/mol) requires 96\u202f485 / 107.87 \u2248 894 C \u2248 0.00927 F; plating copper (Cu\u00b2\u207a) requires 2 F per mole. 1 F \u2248 26.801 Ah \u2248 96.485 kC.",
    symbol: "F"
  },
  megacoulombs: {
    name: "Megacoulombs",
    description: "The megacoulomb (MC) equals 10\u2076 C \u2248 277.8 Ah, relevant to large-scale energy storage and high-current industrial electrochemical processes. A 1 MW\u00b7h lithium-ion storage system holds roughly 1-1.5 GC total charge depending on cell voltage; aluminium electrolysis cells process tens of megacoulombs per day per cell. 1 MC = 10\u207b\u00b3 GC = 10\u00b3 kC.",
    symbol: "MC"
  },
  kiloampere_hours: {
    name: "Kiloampere-hours",
    description: "The kiloampere-hour (kAh) equals 3.6 \u00d7 10\u2076 C = 3.6 MC, the practical unit for grid-scale battery storage and large industrial electrolysis. A 100 MW\u00b7h utility-scale lithium-ion installation delivers roughly 27 kAh at typical operating voltages; aluminium Hall-Heroult cells consume approximately 13\u202f500 kAh per tonne of aluminium. 1 kAh = 10\u00b3 Ah = 3.6 MC.",
    symbol: "kAh"
  },
  gigacoulombs: {
    name: "Gigacoulombs",
    description: "The gigacoulomb (GC) equals 10\u2079 C \u2248 277\u202f778 Ah, representing charge at the scale of global atmospheric electricity or very large-scale industrial electrolysis installations. Earth's global electric circuit maintains an atmospheric charge of the order of a few GC; a 1 GW\u00b7h grid-scale energy storage facility holds of order 1-10 GC depending on voltage. 1 GC = 10\u207b\u00b3 TC = 10\u00b3 MC.",
    symbol: "GC"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCoulombs);
}

function convertCharge() {
  convertFactorBased(toCoulombs);
}

initConverterPage();
