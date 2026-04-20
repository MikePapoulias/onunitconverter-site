// Base unit: henry (H) - the SI derived unit of electrical inductance.
// Electrical inductance L [M L\u00b2 T\u207b\u00b2 A\u207b\u00b2] relates induced EMF to rate of current change: V = L \u00d7 dI/dt.
// All factors express how many henries equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 H = 1 V\u00b7s/A = 1 \u03a9\u00b7s = 1 kg\u00b7m\u00b2\u00b7A\u207b\u00b2\u00b7s\u207b\u00b2
//
// SI prefix units (all exact by definition):
//   1 aH = 10\u207b\u00b9\u2078 H    1 fH = 10\u207b\u00b9\u2075 H    1 pH = 10\u207b\u00b9\u00b2 H
//   1 nH = 10\u207b\u2079 H    1 \u00b5H = 10\u207b\u2076 H    1 mH = 10\u207b\u00b3 H
//   1 kH = 10\u00b3 H    1 MH = 10\u2076 H    1 GH = 10\u2079 H    1 TH = 10\u00b9\u00b2 H
//
// Abhenry (CGS-EMU) - exact:
//   1 abH = 1 ab\u03a9 \u00d7 1 s = 10\u207b\u2079 \u03a9 \u00d7 1 s = 10\u207b\u2079 H  (exactly equal to 1 nH)
//
// Stathenry (CGS-Gaussian) - exact:
//   1 statH = 1 stat\u03a9 \u00d7 1 s = (c\u00b2 \u00d7 10\u207b\u2075 \u03a9) \u00d7 1 s = c\u00b2 \u00d7 10\u207b\u2075 H
//           = (299 792 458)\u00b2 / 10\u2075 H
//           \u2248 8.987 551 787 \u00d7 10\u00b9\u00b9 H   (exact, since c is exact)

const toHenries = {
  // -- Attohenries ----------------------------------------------------------
  attohenries:   1e-18,                          // exact: 10\u207b\u00b9\u2078 H (SI prefix atto)
  // -- Femtohenries ---------------------------------------------------------
  femtohenries:  1e-15,                          // exact: 10\u207b\u00b9\u2075 H (SI prefix femto)
  // -- Picohenries ----------------------------------------------------------
  picohenries:   1e-12,                          // exact: 10\u207b\u00b9\u00b2 H (SI prefix pico)
  // -- Abhenries (CGS-EMU) --------------------------------------------------
  abhenries:     1e-9,                           // exact: 1 ab\u03a9 \u00d7 1 s = 10\u207b\u2079 H (= 1 nH)
  // -- Nanohenries ----------------------------------------------------------
  nanohenries:   1e-9,                           // exact: 10\u207b\u2079 H (SI prefix nano)
  // -- Microhenries ---------------------------------------------------------
  microhenries:  1e-6,                           // exact: 10\u207b\u2076 H (SI prefix micro)
  // -- Millihenries ---------------------------------------------------------
  millihenries:  1e-3,                           // exact: 10\u207b\u00b3 H (SI prefix milli)
  // -- Henries (SI derived unit) --------------------------------------------
  henries:       1,                              // reference (base unit)
  // -- Kilohenries ----------------------------------------------------------
  kilohenries:   1e3,                            // exact: 10\u00b3 H (SI prefix kilo)
  // -- Megahenries ----------------------------------------------------------
  megahenries:   1e6,                            // exact: 10\u2076 H (SI prefix mega)
  // -- Gigahenries ----------------------------------------------------------
  gigahenries:   1e9,                            // exact: 10\u2079 H (SI prefix giga)
  // -- Stathenries (CGS-Gaussian) -------------------------------------------
  stathenries:   299792458 * 299792458 / 1e5,    // exact: c\u00b2 \u00d7 10\u207b\u2075 H \u2248 8.9876 \u00d7 10\u00b9\u00b9 H
  // -- Terahenries ----------------------------------------------------------
  terahenries:   1e12,                           // exact: 10\u00b9\u00b2 H (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  attohenries: {
    name: "Attohenries",
    description: "The attohenry (aH) equals 10\u207b\u00b9\u2078 H, the scale for parasitic inductances in on-chip metal interconnects and quantum-device bondwires. Metal traces in sub-10 nm CMOS processes have via-to-via inductances in the attohenry range; superconducting qubit junctions are modelled with loop inductances of tens to hundreds of attohenries; microwave integrated circuit (MMIC) vias at 100 GHz are characterised in aH. 1 aH = 10\u207b\u00b3 fH = 10\u207b\u00b9\u2078 H.",
    symbol: "aH"
  },
  femtohenries: {
    name: "Femtohenries",
    description: "The femtohenry (fH) equals 10\u207b\u00b9\u2075 H, the scale for PCB via inductances, short bondwires, and on-chip spiral inductor parasitics in millimetre-wave design. A 0.5 mm gold bondwire has about 0.5-1 fH inductance at mm-wave frequencies; differential pair stubs in 100 GHz SerDes are modelled in femtohenries; Josephson junction loop inductances in superconducting circuits are a few hundred fH. 1 fH = 10\u207b\u00b3 pH = 10\u207b\u00b9\u2075 H.",
    symbol: "fH"
  },
  picohenries: {
    name: "Picohenries",
    description: "The picohenry (pH) equals 10\u207b\u00b9\u00b2 H, the practical unit for short PCB traces, decoupling capacitor equivalent series inductance (ESL), and bond-wire inductance in RF packages. A 1 mm PCB trace (50 \u03a9 microstrip) has about 1 nH/mm; SMD bypass capacitors have ESL of 0.1-2 nH; gold bondwires are 1-5 pH/mm. IC package lead inductances are typically 1-10 nH = 1 000-10 000 pH. 1 pH = 10\u207b\u00b3 nH = 10\u207b\u00b9\u00b2 H.",
    symbol: "pH"
  },
  abhenries: {
    name: "Abhenries",
    description: "The abhenry (abH) is the inductance unit of the CGS-EMU system, equal to 1 ab\u03a9 \u00d7 1 s = 10\u207b\u2079 \u03a9 \u00d7 1 s = 10\u207b\u2079 H, exactly equal to 1 nH in SI. It appears in nineteenth- and early-twentieth-century electromagnetic engineering texts alongside abohms and abamperes; the abhenry was the standard inductance unit in EMU telegraphy and early radio literature. 1 abH = 10\u207b\u2079 H = 1 nH.",
    symbol: "abH"
  },
  nanohenries: {
    name: "Nanohenries",
    description: "The nanohenry (nH) equals 10\u207b\u2079 H, the everyday unit for RF inductors, PCB trace inductance, and package parasitics. A 10 mm PCB microstrip trace is about 10 nH; surface-mount RF chokes range from 1 to 1\u202f000 nH; bond-wire lead inductances are 1-20 nH; resonant LC tank circuits for Bluetooth and Wi-Fi use inductors of 1-100 nH. 1 nH = 10\u207b\u00b3 \u00b5H = 10\u207b\u2079 H.",
    symbol: "nH"
  },
  microhenries: {
    name: "Microhenries",
    description: "The microhenry (\u00b5H) equals 10\u207b\u2076 H, the standard unit for power-electronics inductors, EMI filter chokes, and AM radio coils. DC-DC converter inductors in smartphones are 1-100 \u00b5H; ferrite-core EMI common-mode chokes are 10-10\u202f000 \u00b5H; AM broadcast loop antennas are 200-500 \u00b5H; automotive ignition coil secondary inductances are a few \u00b5H. 1 \u00b5H = 10\u207b\u00b3 mH = 10\u207b\u2076 H.",
    symbol: "\u00b5H"
  },
  millihenries: {
    name: "Millihenries",
    description: "The millihenry (mH) equals 10\u207b\u00b3 H, the scale for audio-frequency transformers, relay coils, and resonant filter inductors. Telephone voice-frequency transformers use 10-200 mH; relays and solenoids have coil inductances of 1-100 mH; tunable AM IF transformers operate at 200-500 mH; loudspeaker crossover inductors (2-8 kHz) are typically 0.5-5 mH. 1 mH = 10\u207b\u00b3 H = 10\u00b3 \u00b5H.",
    symbol: "mH"
  },
  henries: {
    name: "Henries",
    description: "The henry (H) is the SI derived unit of electrical inductance, equal to 1 volt-second per ampere (1 V\u00b7s/A = 1 \u03a9\u00b7s = 1 kg\u00b7m\u00b2\u00b7A\u207b\u00b2\u00b7s\u207b\u00b2), named after Joseph Henry (1797-1878). Mains-frequency (50/60 Hz) power transformers have primary inductances of 1-100 H; loudspeaker crossover woofer inductors are 1-5 mH; large power-line reactors are 0.1-10 H. 1 H = 10\u00b3 mH = 10\u2076 \u00b5H.",
    symbol: "H"
  },
  kilohenries: {
    name: "Kilohenries",
    description: "The kilohenry (kH) equals 10\u00b3 H, encountered in the inductance of very-low-frequency (VLF) antenna loading coils and large power-system shunt reactors. Submarine communication transmitters at 10-30 kHz use loading coils of 100-2\u202f000 H = 0.1-2 kH; high-voltage shunt reactors in 400 kV grid substations have inductances of around 100-1\u202f000 H = 0.1-1 kH. 1 kH = 10\u00b3 H = 10\u207b\u00b3 MH.",
    symbol: "kH"
  },
  megahenries: {
    name: "Megahenries",
    description: "The megahenry (MH) equals 10\u2076 H, well beyond any practical wound inductor but arising in theoretical analysis of very large electromagnetic structures. Extremely long overhead transmission line sections have distributed inductance totalling megahenries; electromagnetic pulse (EMP) source models and magnetosphere inductance estimates use MH in theoretical contexts. 1 MH = 10\u00b3 kH = 10\u2076 H.",
    symbol: "MH"
  },
  gigahenries: {
    name: "Gigahenries",
    description: "The gigahenry (GH) equals 10\u2079 H. No engineered discrete inductor approaches this value; gigahenry figures arise in geophysical induction modelling of the Earth's crust and mantle, magnetohydrodynamic models of stellar interiors, and theoretical scaling studies of superconducting magnetic energy storage (SMES) systems at utility scale. 1 GH = 10\u00b3 MH = 10\u2079 H.",
    symbol: "GH"
  },
  stathenries: {
    name: "Stathenries",
    description: "The stathenry (statH) is the inductance unit of the CGS-Gaussian system, equal to 1 stat\u03a9 \u00d7 1 s = c\u00b2 \u00d7 10\u207b\u2075 H where c = 299\u202f792\u202f458 m/s, giving exactly (299\u202f792\u202f458)\u00b2 / 10\u2075 H \u2248 8.988 \u00d7 10\u00b9\u00b9 H. It is the reciprocal of the statfarad in terms of LC time constants and appears in Gaussian-system circuit analysis; the enormous SI value reflects the Gaussian unit's origin in electrostatics rather than practical circuits. 1 statH \u2248 899 GH.",
    symbol: "statH"
  },
  terahenries: {
    name: "Terahenries",
    description: "The terahenry (TH) equals 10\u00b9\u00b2 H. No physical inductor or coil approaches 1 TH; the value is used in dimensional scaling of cosmic electromagnetic phenomena (e.g., inductance of galactic current sheets) and in theoretical discussions of extreme-value electromagnetic parameters. The stathenry is \u2248 0.899 TH, placing stathenries and terahenries in the same order of magnitude. 1 TH = 10\u00b3 GH = 10\u00b9\u00b2 H.",
    symbol: "TH"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toHenries);
}

function convertInductance() {
  convertFactorBased(toHenries);
}

initConverterPage();
