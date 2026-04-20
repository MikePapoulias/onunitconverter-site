// Base unit: farad per metre (F/m) - the SI coherent unit of electric permittivity.
// Permittivity \u03b5 [M\u207b\u00b9 L\u207b\u00b3 T\u2074 A\u00b2] relates electric displacement D to field E: D = \u03b5E.
// All factors express how many F/m equal 1 unit of the given measure.
//
// Exact foundations:
//   c    = 299 792 458 m/s          (exact, speed of light definition)
//   1 cm = 0.01 m                   (exact)
//   1 F/m = 1 C\u00b2\u00b7s\u00b2/(kg\u00b7m\u00b3) = 1 A\u00b2\u00b7s\u00b4/(kg\u00b7m\u00b3)
//   \u03b5\u2080 = 8.8541878128 \u00d7 10\u207b\u00b9\u00b2 F/m  (vacuum permittivity, exact to given digits)
//
// SI prefix units per metre (all exact by definition):
//   1 fF/m = 10\u207b\u00b9\u2075 F/m    1 pF/m = 10\u207b\u00b9\u00b2 F/m    1 nF/m = 10\u207b\u2079 F/m
//   1 \u00b5F/m = 10\u207b\u2076 F/m     1 mF/m = 10\u207b\u00b3 F/m      1 kF/m = 10\u00b3 F/m
//   1 MF/m = 10\u2076 F/m      1 GF/m = 10\u2079 F/m
//
// Per-centimetre metric variants (1 cm = 0.01 m - exact):
//   1 pF/cm = 10\u207b\u00b9\u00b2 F / 0.01 m = 10\u207b\u00b9\u2070 F/m
//   1 nF/cm = 10\u207b\u2079  F / 0.01 m = 10\u207b\u2077  F/m
//
// Statfarad per centimetre (CGS-Gaussian) - exact:
//   In CGS-Gaussian: 4\u03c0\u03b5\u2080 = 10\u2077/c\u00b2 F/m (exact, c in m/s)
//   1 statF = 10\u2075/c\u00b2 F  (exact)
//   1 statF/cm = 10\u2075/c\u00b2 F / 0.01 m = 10\u2077/c\u00b2 F/m = 4\u03c0\u03b5\u2080
//             \u2248 1.11265 \u00d7 10\u207b\u00b9\u2070 F/m
//
// Abfarad per centimetre (CGS-EMU) - exact:
//   1 abF = 10\u2079 F  (exact)
//   1 abF/cm = 10\u2079 F / 0.01 m = 10\u00b9\u00b9 F/m

const toFaradsPerMetre = {
  // -- Femtofarads per metre --------------------------------------------------
  femtofarads_per_metre:           1e-15,                               // exact: 10\u207b\u00b9\u2075 F/m (SI prefix femto)
  // -- Picofarads per metre --------------------------------------------------
  picofarads_per_metre:            1e-12,                               // exact: 10\u207b\u00b9\u00b2 F/m (SI prefix pico); \u03b5\u2080 \u2248 8.854 pF/m
  // -- Picofarads per centimetre ---------------------------------------------
  picofarads_per_centimetre:       1e-12 / 0.01,                        // exact: 10\u207b\u00b9\u00b2 F / 0.01 m = 10\u207b\u00b9\u2070 F/m
  // -- Statfarads per centimetre (CGS-Gaussian) ------------------------------
  statfarads_per_centimetre:       1e7 / (299792458 * 299792458),       // exact: 10\u2077/c\u00b2 F/m = 4\u03c0\u03b5\u2080 \u2248 1.11265 \u00d7 10\u207b\u00b9\u2070 F/m
  // -- Nanofarads per metre --------------------------------------------------
  nanofarads_per_metre:            1e-9,                                 // exact: 10\u207b\u2079 F/m (SI prefix nano)
  // -- Nanofarads per centimetre ---------------------------------------------
  nanofarads_per_centimetre:       1e-9 / 0.01,                         // exact: 10\u207b\u2079 F / 0.01 m = 10\u207b\u2077 F/m
  // -- Microfarads per metre -------------------------------------------------
  microfarads_per_metre:           1e-6,                                 // exact: 10\u207b\u2076 F/m (SI prefix micro)
  // -- Millifarads per metre -------------------------------------------------
  millifarads_per_metre:           1e-3,                                 // exact: 10\u207b\u00b3 F/m (SI prefix milli)
  // -- Farads per metre (SI unit) --------------------------------------------
  farads_per_metre:                1,                                    // reference (base unit)
  // -- Kilofarads per metre --------------------------------------------------
  kilofarads_per_metre:            1e3,                                  // exact: 10\u00b3 F/m (SI prefix kilo)
  // -- Megafarads per metre --------------------------------------------------
  megafarads_per_metre:            1e6,                                  // exact: 10\u2076 F/m (SI prefix mega)
  // -- Gigafarads per metre --------------------------------------------------
  gigafarads_per_metre:            1e9,                                  // exact: 10\u2079 F/m (SI prefix giga)
  // -- Abfarads per centimetre (CGS-EMU) -------------------------------------
  abfarads_per_centimetre:         1e9 / 0.01,                           // exact: 10\u2079 F / 0.01 m = 10\u00b9\u00b9 F/m
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtofarads_per_metre: {
    name: "Femtofarads per metre",
    description: "The femtofarad per metre (fF/m) equals 10\u207b\u00b9\u2075 F/m, the smallest practical permittivity scale. Permittivity of near-perfect vacuum regions at sub-pF/m levels, noise-floor permittivity in cryogenic microwave resonators, and modelled permittivity of hypothetical near-zero-index metamaterial layers all span the fF/m range. 1 fF/m = 10\u207b\u00b9\u2075 F/m = 10\u207b\u00b3 pF/m.",
    symbol: "fF/m"
  },
  picofarads_per_metre: {
    name: "Picofarads per metre",
    description: "The picofarad per metre (pF/m) equals 10\u207b\u00b9\u00b2 F/m, the most widely used permittivity scale. The vacuum permittivity \u03b5\u2080 \u2248 8.854 pF/m; air at STP is \u22488.859 pF/m; PTFE PCB substrate is \u224819 pF/m; FR-4 laminate is \u224837 pF/m. Dielectric specifications in IPC-4101 and IEC 60250 list pF/m values. 1 pF/m = 10\u207b\u00b9\u00b2 F/m.",
    symbol: "pF/m"
  },
  picofarads_per_centimetre: {
    name: "Picofarads per centimetre",
    description: "The picofarad per centimetre (pF/cm) equals 10\u207b\u00b9\u2070 F/m = 100 pF/m, used for transmission-line capacitance per unit length in RF engineering. A standard 50 \u03a9 air-dielectric coaxial line has capacitance per unit length \u224867 pF/m \u22480.67 pF/cm; PTFE coax gives \u22480.9 pF/cm. RF substrate characterisation often quotes pF/cm. 1 pF/cm = 10\u207b\u00b9\u2070 F/m.",
    symbol: "pF/cm"
  },
  statfarads_per_centimetre: {
    name: "Statfarads per centimetre",
    description: "The statfarad per centimetre (statF/cm) is the permittivity unit of the CGS-Gaussian system, exactly equal to 4\u03c0\u03b5\u2080 = 10\u2077/c\u00b2 F/m \u2248 1.11265 \u00d7 10\u207b\u00b9\u2070 F/m. In Gaussian units Gauss's law is \u2207\u00b7E = 4\u03c0\u03c1 so the permittivity of free space is 1/(4\u03c0) statF/cm; the statF/cm is used in older plasma physics and quantum electrodynamics texts. 1 statF/cm \u2248 1.11265 \u00d7 10\u207b\u00b9\u2070 F/m.",
    symbol: "statF/cm"
  },
  nanofarads_per_metre: {
    name: "Nanofarads per metre",
    description: "The nanofarad per metre (nF/m) equals 10\u207b\u2079 F/m, the scale for high-permittivity dielectrics. Barium titanate (BaTiO\u2083) has peak relative permittivity \u03b5\u1d63 ~ 10\u202f000 at the Curie temperature, giving \u03b5 \u2248 88.5 nF/m; aluminium oxide (Al\u2082O\u2083) anodic films at \u03b5\u1d63 ~ 10 give \u224888.5 nF/m for thick-film applications. 1 nF/m = 10\u207b\u2079 F/m = 10\u00b3 pF/m.",
    symbol: "nF/m"
  },
  nanofarads_per_centimetre: {
    name: "Nanofarads per centimetre",
    description: "The nanofarad per centimetre (nF/cm) equals 10\u207b\u2077 F/m, used in power cable and high-voltage capacitor characterisation. High-voltage XLPE power cables (230 kV) have capacitance per unit length of 0.1-0.2 nF/cm; oil-impregnated paper capacitors used in power factor correction banks are characterised in nF/cm. 1 nF/cm = 10\u207b\u2077 F/m = 10\u00b3 pF/cm.",
    symbol: "nF/cm"
  },
  microfarads_per_metre: {
    name: "Microfarads per metre",
    description: "The microfarad per metre (\u00b5F/m) equals 10\u207b\u2076 F/m, the scale for very high-permittivity ferroelectric ceramics and conducting electrodes. Relaxor ferroelectrics near their diffuse phase transition (e.g. PMN-PT) reach \u03b5\u1d63 ~ 10\u2076 at low frequencies, giving \u03b5 \u2248 8.85 \u00b5F/m; effective medium permittivity of heavily loaded carbon-black polymer composites near percolation threshold approaches \u00b5F/m. 1 \u00b5F/m = 10\u207b\u2076 F/m.",
    symbol: "\u00b5F/m"
  },
  millifarads_per_metre: {
    name: "Millifarads per metre",
    description: "The millifarad per metre (mF/m) equals 10\u207b\u00b3 F/m. Composite dielectrics near percolation threshold (carbon nanotubes in epoxy) can exhibit effective permittivities in the mF/m range at low frequencies; electrochemical double-layer models treated as a distributed permittivity in thin-film supercapacitor electrodes reach mF/m. 1 mF/m = 10\u207b\u00b3 F/m = 10\u00b3 \u00b5F/m.",
    symbol: "mF/m"
  },
  farads_per_metre: {
    name: "Farads per metre",
    description: "The farad per metre (F/m) is the SI coherent unit of permittivity. It is an extremely large unit in practice - the vacuum permittivity \u03b5\u2080 is only 8.854 \u00d7 10\u207b\u00b9\u00b2 F/m. Permittivities in F/m arise in models of quasi-metallic electrolytes and ultralow-frequency behaviour of plasma where ionic screening raises the effective dielectric constant enormously. 1 F/m = 10\u00b3 mF/m.",
    symbol: "F/m"
  },
  kilofarads_per_metre: {
    name: "Kilofarads per metre",
    description: "The kilofarad per metre (kF/m) equals 10\u00b3 F/m, appearing in theoretical models of heavily screened plasmas and ionic liquids at very low frequencies. The London penetration depth model for superconductors treated as a dielectric gives effective permittivities of 10\u00b3-10\u2076 F/m in the microwave range; ionic double-layer capacitance per unit length of nanowire electrodes scales to kF/m. 1 kF/m = 10\u00b3 F/m.",
    symbol: "kF/m"
  },
  megafarads_per_metre: {
    name: "Megafarads per metre",
    description: "The megafarad per metre (MF/m) equals 10\u2076 F/m, a theoretical permittivity scale for extreme-screening media. Drude model of a free-electron metal below the plasma frequency gives effective permittivity in the MF/m range at audio frequencies; superconducting London kinetic inductance modelled as a dielectric permittivity yields MF/m values in the GHz band. 1 MF/m = 10\u2076 F/m = 10\u00b3 kF/m.",
    symbol: "MF/m"
  },
  gigafarads_per_metre: {
    name: "Gigafarads per metre",
    description: "The gigafarad per metre (GF/m) equals 10\u2079 F/m. Effective permittivity of a dense metallic plasma (electron density ~10\u00b2\u2076 m\u207b\u00b3) at frequencies well below the plasma frequency can reach GF/m; abfarad-scale geometric capacitances in nanoelectronics expressed per unit electrode length approach GF/m. 1 GF/m = 10\u2079 F/m = 10\u00b3 MF/m.",
    symbol: "GF/m"
  },
  abfarads_per_centimetre: {
    name: "Abfarads per centimetre",
    description: "The abfarad per centimetre (abF/cm) is the permittivity unit of the CGS-EMU system, equal to 10\u2079 F / 0.01 m = 10\u00b9\u00b9 F/m. The abfarad (= 10\u2079 F exactly) was the CGS-EMU base capacitance unit; in EMU notation electromagnetic wave propagation uses abF/cm. 1 abF/cm = 10\u00b9\u00b9 F/m = 10\u2079 GF/m.",
    symbol: "abF/cm"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toFaradsPerMetre);
}

function convertPermittivity() {
  convertFactorBased(toFaradsPerMetre);
}

initConverterPage();
