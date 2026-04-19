// Base unit: ohm-metre (\u03a9\u00b7m) - the SI coherent unit of electrical resistivity.
// Electrical resistivity \u03c1 [M L\u00b3 T\u207b\u00b3 A\u207b\u00b2] links geometry to resistance: R = \u03c1 L / A.
// All factors express how many \u03a9\u00b7m equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 in  = 0.0254 m                    (exact, international inch definition)
//   1 ft  = 0.3048 m                    (exact, international foot definition)
//   1 mil = 0.001 in = 0.0000254 m      (exact, thousandth of an inch)
//   1 circular mil = (\u03c0/4) \u00d7 (1 mil)\u00b2  (exact by definition)
//   1 \u03a9\u00b7m = 1 V\u00b7m/A = 1 kg\u00b7m\u00b3\u00b7A\u207b\u00b2\u00b7s\u207b\u00b3
//
// SI prefix units (all exact by definition):
//   1 n\u03a9\u00b7m = 10\u207b\u2079 \u03a9\u00b7m    1 \u00b5\u03a9\u00b7m = 10\u207b\u2076 \u03a9\u00b7m    1 m\u03a9\u00b7m = 10\u207b\u00b3 \u03a9\u00b7m
//   1 k\u03a9\u00b7m = 10\u00b3 \u03a9\u00b7m     1 M\u03a9\u00b7m = 10\u2076 \u03a9\u00b7m     1 G\u03a9\u00b7m = 10\u2079 \u03a9\u00b7m
//
// Per-centimetre variants (1 cm = 0.01 m - exact):
//   1 \u00b5\u03a9\u00b7cm = 10\u207b\u2076 \u03a9 \u00d7 0.01 m = 10\u207b\u2078 \u03a9\u00b7m
//   1 m\u03a9\u00b7cm  = 10\u207b\u00b3 \u03a9 \u00d7 0.01 m = 10\u207b\u2075 \u03a9\u00b7m
//   1 \u03a9\u00b7cm    = 1   \u03a9 \u00d7 0.01 m = 10\u207b\u00b2 \u03a9\u00b7m
//
// Ohm-square millimetre per metre (cable industry) - exact (1 mm\u00b2 = 10\u207b\u2076 m\u00b2):
//   1 \u03a9\u00b7mm\u00b2/m  = 1 \u03a9 \u00d7 10\u207b\u2076 m\u00b2 / 1 m = 10\u207b\u2076 \u03a9\u00b7m  (= 1 \u00b5\u03a9\u00b7m)
//
// Ohm circular mil per foot - exact:
//   1 circular mil = (\u03c0/4) \u00d7 (0.0000254)\u00b2 m\u00b2 = \u03c0/4 \u00d7 6.4516 \u00d7 10\u207b\u00b9\u2070 m\u00b2
//   1 \u03a9\u00b7circ.mil/ft = 1 \u03a9 \u00d7 (\u03c0/4 \u00d7 6.4516 \u00d7 10\u207b\u00b9\u2070) m\u00b2 / 0.3048 m
//                = \u03c0 \u00d7 6.4516 \u00d7 10\u207b\u00b9\u2070 / (4 \u00d7 0.3048) \u03a9\u00b7m
//                \u2248 1.662 426 \u00d7 10\u207b\u2079 \u03a9\u00b7m
//
// Abohm-centimetre (CGS-EMU) - exact:
//   1 ab\u03a9 = 10\u207b\u2079 \u03a9  (exact)
//   1 ab\u03a9\u00b7cm = 10\u207b\u2079 \u03a9 \u00d7 0.01 m = 10\u207b\u00b9\u00b9 \u03a9\u00b7m
//
// Statohm-centimetre (CGS-Gaussian) - exact:
//   1 stat\u03a9 = c\u00b2 \u00d7 10\u207b\u2075 \u03a9  (exact, c = 299 792 458 m/s)
//   1 stat\u03a9\u00b7cm = c\u00b2 \u00d7 10\u207b\u2075 \u03a9 \u00d7 0.01 m = c\u00b2 \u00d7 10\u207b\u2077 \u03a9\u00b7m
//             \u2248 898.755 178 736... \u03a9\u00b7m   (between \u03a9\u00b7m and k\u03a9\u00b7m)

const toOhmMetres = {
  // -- Abohm-centimetre (CGS-EMU) --------------------------------------------
  abohm_centimetres:                 1e-9 * 0.01,                            // exact: 10\u207b\u2079 \u03a9 \u00d7 0.01 m = 10\u207b\u00b9\u00b9 \u03a9\u00b7m
  // -- Nanoohm-metre ---------------------------------------------------------
  nanoohm_metres:                    1e-9,                                    // exact: 10\u207b\u2079 \u03a9\u00b7m (SI prefix nano)
  // -- Ohm circular mil per foot ---------------------------------------------
  ohm_circular_mil_per_foot:         Math.PI * 6.4516e-10 / (4 * 0.3048),    // exact: \u03c0\u00d76.4516\u00d710\u207b\u00b9\u2070/(4\u00d70.3048) \u03a9\u00b7m \u2248 1.66243\u00d710\u207b\u2079 \u03a9\u00b7m
  // -- Microohm-centimetre ---------------------------------------------------
  microohm_centimetres:              1e-6 * 0.01,                             // exact: 10\u207b\u2076 \u03a9 \u00d7 0.01 m = 10\u207b\u2078 \u03a9\u00b7m
  // -- Microohm-metre --------------------------------------------------------
  microohm_metres:                   1e-6,                                    // exact: 10\u207b\u2076 \u03a9\u00b7m (SI prefix micro) = 1 \u03a9\u00b7mm\u00b2/m
  // -- Milliohm-centimetre ---------------------------------------------------
  milliohm_centimetres:              1e-3 * 0.01,                             // exact: 10\u207b\u00b3 \u03a9 \u00d7 0.01 m = 10\u207b\u2075 \u03a9\u00b7m
  // -- Milliohm-metre --------------------------------------------------------
  milliohm_metres:                   1e-3,                                    // exact: 10\u207b\u00b3 \u03a9\u00b7m (SI prefix milli)
  // -- Ohm-centimetre --------------------------------------------------------
  ohm_centimetres:                   0.01,                                    // exact: 1 \u03a9 \u00d7 0.01 m = 10\u207b\u00b2 \u03a9\u00b7m
  // -- Ohm-metre (SI unit) ---------------------------------------------------
  ohm_metres:                        1,                                       // reference (base unit)
  // -- Statohm-centimetre (CGS-Gaussian) -------------------------------------
  statohm_centimetres:               299792458 * 299792458 * 1e-7,            // exact: c\u00b2 \u00d7 10\u207b\u2077 \u03a9\u00b7m \u2248 898.755 \u03a9\u00b7m
  // -- Kilohm-metre ----------------------------------------------------------
  kilohm_metres:                     1e3,                                     // exact: 10\u00b3 \u03a9\u00b7m (SI prefix kilo)
  // -- Megaohm-metre ---------------------------------------------------------
  megaohm_metres:                    1e6,                                     // exact: 10\u2076 \u03a9\u00b7m (SI prefix mega)
  // -- Gigaohm-metre ---------------------------------------------------------
  gigaohm_metres:                    1e9,                                     // exact: 10\u2079 \u03a9\u00b7m (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  abohm_centimetres: {
    name: "Abohm-centimetres",
    description: "The abohm-centimetre (ab\u03a9\u00b7cm) is the resistivity unit of the CGS-EMU system, equal to 10\u207b\u2079 \u03a9 \u00d7 0.01 m = 10\u207b\u00b9\u00b9 \u03a9\u00b7m. It appears in nineteenth-century electromagnetic analysis of telegraph cables and dynamo windings; silver, the best metallic conductor, has resistivity \u22481.59 n\u03a9\u00b7m = 159 ab\u03a9\u00b7cm. 1 ab\u03a9\u00b7cm = 10\u207b\u00b9\u00b9 \u03a9\u00b7m.",
    symbol: "ab\u03a9\u00b7cm"
  },
  nanoohm_metres: {
    name: "Nanoohm-metres",
    description: "The nanoohm-metre (n\u03a9\u00b7m) equals 10\u207b\u2079 \u03a9\u00b7m, the most convenient scale for the resistivity of metals. Silver (1.59), copper (1.68), gold (2.44), and aluminium (2.82) all have bulk room-temperature resistivities expressible as low single-digit n\u03a9\u00b7m values; thin-film interconnect resistance targets in advanced IC nodes are set in n\u03a9\u00b7m. 1 n\u03a9\u00b7m = 10\u207b\u2079 \u03a9\u00b7m = 0.1 \u00b5\u03a9\u00b7cm.",
    symbol: "n\u03a9\u00b7m"
  },
  ohm_circular_mil_per_foot: {
    name: "Ohm circular mil per foot",
    description: "The ohm circular mil per foot (\u03a9\u00b7cmil/ft) is the US customary resistivity unit for wires and cables, equal to \u03c0\u00d76.4516\u00d710\u207b\u00b9\u2070/(4\u00d70.3048) \u03a9\u00b7m \u2248 1.66243\u00d710\u207b\u2079 \u03a9\u00b7m. Copper has resistivity \u22481.012 \u03a9\u00b7cmil/ft; wire tables in NFPA 70 (NEC) and ASTM B3 list conductor resistivity in this unit. 1 \u03a9\u00b7cmil/ft \u2248 1.66243 n\u03a9\u00b7m.",
    symbol: "\u03a9\u00b7cmil/ft"
  },
  microohm_centimetres: {
    name: "Microohm-centimetres",
    description: "The microohm-centimetre (\u00b5\u03a9\u00b7cm) equals 10\u207b\u2078 \u03a9\u00b7m = 10 n\u03a9\u00b7m, the traditional unit for bulk metal resistivity in materials science. Copper is 1.68 \u00b5\u03a9\u00b7cm; tungsten 5.6 \u00b5\u03a9\u00b7cm; platinum 10.6 \u00b5\u03a9\u00b7cm; CRC Handbook tables still list metal resistivities in \u00b5\u03a9\u00b7cm. 1 \u00b5\u03a9\u00b7cm = 10\u207b\u2078 \u03a9\u00b7m = 10 n\u03a9\u00b7m.",
    symbol: "\u00b5\u03a9\u00b7cm"
  },
  microohm_metres: {
    name: "Microohm-metres",
    description: "The microohm-metre (\u00b5\u03a9\u00b7m) equals 10\u207b\u2076 \u03a9\u00b7m and is numerically identical to 1 \u03a9\u00b7mm\u00b2/m used in the cable industry. Nichrome resistance wire has resistivity \u22481.0-1.1 \u00b5\u03a9\u00b7m; stainless steel is 0.69-0.72 \u00b5\u03a9\u00b7m; manganin alloy (for precision shunts) is about 0.48 \u00b5\u03a9\u00b7m. 1 \u00b5\u03a9\u00b7m = 10\u207b\u2076 \u03a9\u00b7m = 1 \u03a9\u00b7mm\u00b2/m.",
    symbol: "\u00b5\u03a9\u00b7m"
  },
  milliohm_centimetres: {
    name: "Milliohm-centimetres",
    description: "The milliohm-centimetre (m\u03a9\u00b7cm) equals 10\u207b\u2075 \u03a9\u00b7m, a scale used for poorly conducting alloys and heavily doped semiconductors at low temperature. Graphite perpendicular to the basal plane has resistivity around 3-10 m\u03a9\u00b7cm; hot-pressed sintered tungsten carbide compacts are 0.2-0.5 m\u03a9\u00b7cm; heavily B-doped silicon at degeneracy is \u223c0.1 m\u03a9\u00b7cm. 1 m\u03a9\u00b7cm = 10\u207b\u2075 \u03a9\u00b7m.",
    symbol: "m\u03a9\u00b7cm"
  },
  milliohm_metres: {
    name: "Milliohm-metres",
    description: "The milliohm-metre (m\u03a9\u00b7m) equals 10\u207b\u00b3 \u03a9\u00b7m, the scale for highly resistive alloys, graphite, and transition-metal oxides. Carbon-graphite brushes used in DC motors have resistivity of 20-100 m\u03a9\u00b7m; ferrites used in power magnetics are 0.1-10 m\u03a9\u00b7m; polyaniline conducting polymer films are in the m\u03a9\u00b7m range when fully protonated. 1 m\u03a9\u00b7m = 10\u207b\u00b3 \u03a9\u00b7m = 10 \u03a9\u00b7cm.",
    symbol: "m\u03a9\u00b7m"
  },
  ohm_centimetres: {
    name: "Ohm-centimetres",
    description: "The ohm-centimetre (\u03a9\u00b7cm) equals 0.01 \u03a9\u00b7m, the most widely used unit for semiconductor resistivity in device characterisation. Silicon wafers are specified in \u03a9\u00b7cm: lightly doped n-type Si is 100-10\u202f000 \u03a9\u00b7cm; device-grade p-type Si is 1-50 \u03a9\u00b7cm; germanium is \u22480.46 \u03a9\u00b7cm. ASTM F84 and SEMI standards define silicon resistivity measurements in \u03a9\u00b7cm. 1 \u03a9\u00b7cm = 0.01 \u03a9\u00b7m.",
    symbol: "\u03a9\u00b7cm"
  },
  ohm_metres: {
    name: "Ohm-metres",
    description: "The ohm-metre (\u03a9\u00b7m) is the SI coherent unit of electrical resistivity, equal to 1 V\u00b7m/A = 1 kg\u00b7m\u00b3\u00b7A\u207b\u00b2\u00b7s\u207b\u00b3. Seawater is \u22480.2 \u03a9\u00b7m; deionised water is ~18 M\u03a9\u00b7cm = 180 k\u03a9\u00b7m; silicon carbide \u22480.1-10 \u03a9\u00b7m; IEC 60287 specifies cable insulation resistivity in \u03a9\u00b7m. 1 \u03a9\u00b7m = 10\u00b2 \u03a9\u00b7cm = 10\u2076 \u00b5\u03a9\u00b7m.",
    symbol: "\u03a9\u00b7m"
  },
  statohm_centimetres: {
    name: "Statohm-centimetres",
    description: "The statohm-centimetre (stat\u03a9\u00b7cm) is the resistivity unit of the CGS-Gaussian system, equal to c\u00b2\u00d710\u207b\u2077 \u03a9\u00b7m \u2248 898.755 \u03a9\u00b7m where c = 299\u202f792\u202f458 m/s. In Gaussian units Ohm\u2019s law is J = \u03c3E (no 4\u03c0 factors for conduction); the stat\u03a9\u00b7cm is the natural resistivity unit when fields are in statV/cm and currents in statA/cm\u00b2. 1 stat\u03a9\u00b7cm \u2248 898.755 \u03a9\u00b7m.",
    symbol: "stat\u03a9\u00b7cm"
  },
  kilohm_metres: {
    name: "Kilohm-metres",
    description: "The kilohm-metre (k\u03a9\u00b7m) equals 10\u00b3 \u03a9\u00b7m, the scale for moderately insulating ceramics and some geological materials. Granite has bulk resistivity of 1-100 k\u03a9\u00b7m; fired porcelain is 10\u00b3-10\u2075 k\u03a9\u00b7m; monocrystalline silicon at intrinsic doping (~1.5\u00d710\u00b9\u2076 m\u207b\u00b3) has resistivity \u2248 2.3 k\u03a9\u00b7m at room temperature. 1 k\u03a9\u00b7m = 10\u00b3 \u03a9\u00b7m = 10\u2075 \u03a9\u00b7cm.",
    symbol: "k\u03a9\u00b7m"
  },
  megaohm_metres: {
    name: "Megaohm-metres",
    description: "The megaohm-metre (M\u03a9\u00b7m) equals 10\u2076 \u03a9\u00b7m, the scale for polymer insulators and high-purity dielectric ceramics. PTFE (Teflon) has resistivity ~10\u2077 M\u03a9\u00b7m; polypropylene cable insulation is 10\u2074-10\u2076 M\u03a9\u00b7m; IEC 60093 surface and volume resistivity measurements on solid insulating materials are quoted in M\u03a9\u00b7m. 1 M\u03a9\u00b7m = 10\u2076 \u03a9\u00b7m = 10\u00b3 k\u03a9\u00b7m.",
    symbol: "M\u03a9\u00b7m"
  },
  gigaohm_metres: {
    name: "Gigaohm-metres",
    description: "The gigaohm-metre (G\u03a9\u00b7m) equals 10\u2079 \u03a9\u00b7m, the scale for excellent insulating materials and ultra-pure liquids. Fused silica (quartz glass) has resistivity \u2248 10\u2074-10\u2075 G\u03a9\u00b7m at room temperature; ultra-pure deionised water is \u224818 M\u03a9\u00b7cm = 180 k\u03a9\u00b7m; synthetic sapphire is \u22481-10\u2074 G\u03a9\u00b7m depending on temperature. 1 G\u03a9\u00b7m = 10\u2079 \u03a9\u00b7m = 10\u00b3 M\u03a9\u00b7m.",
    symbol: "G\u03a9\u00b7m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toOhmMetres);
}

function convertResistivity() {
  convertFactorBased(toOhmMetres);
}

initConverterPage();
