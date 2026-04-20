// Base unit: square metre (m²) - the SI coherent unit of permeability.
// Permeability k [L²] describes how easily a fluid flows through a porous medium
// via Darcy's law: Q = k·A·ΔP / (µ·L).
// All factors express how many m² equal 1 unit of the given measure.
//
// Exact foundations:
//   1 atm    = 101 325 Pa       (exact, CIPM 2002)
//   1 cP     = 1e-3 Pa·s       (exact: 1 CP = 1e-3 mPa·s... actually 1 cP = 1 mPa·s = 1e-3 Pa·s)
//   1 cm³/s  = 1e-6 m³/s       (exact)
//   1 cm     = 1e-2 m          (exact)
//   1 cm²    = 1e-4 m²         (exact)
//   1 in     = 0.0254 m        (exact, international inch)
//   1 ft     = 0.3048 m        (exact, international foot)
//   SI prefixes: pico=1e-12, nano=1e-9, micro=1e-6, milli=1e-3, kilo=1e3 (all exact)
//
// Darcy definition (Darcy's law at 1 cm³/s, 1 cP, 1 cm², 1 cm, 1 atm):
//   1 D = (1 cP × 1 cm³/s × 1 cm) / (1 cm² × 1 atm)
//       = (1e-3 Pa·s × 1e-6 m³/s × 1e-2 m) / (1e-4 m² × 101 325 Pa)
//       = 1e-11 / (101 325 × 1e-4) m²
//       = 1e-7 / 101 325 m²
//       ≈ 9.869 232 667 × 10⁻¹³ m²   (exact fraction 1e-7/101325)
//
// Derived Darcy multiples (all exact fractions of 1e-7/101325):
//   nD  = 1e-9  D = 1e-16 / 101325 m²   (≈ 9.869e-22)
//   µD  = 1e-6  D = 1e-13 / 101325 m²   (≈ 9.869e-19)
//   mD  = 1e-3  D = 1e-10 / 101325 m²   (≈ 9.869e-16)
//   D   =       D = 1e-7  / 101325 m²   (≈ 9.869e-13)
//   kD  = 1e3   D = 1e-4  / 101325 m²   (≈ 9.869e-10)
//
// SI area multiples (all exact):
//   pm² = (1e-12)² = 1e-24 m²
//   nm² = (1e-9)²  = 1e-18 m²
//   µm² = (1e-6)²  = 1e-12 m²
//   mm² = (1e-3)²  = 1e-6  m²
//   cm² = (1e-2)²  = 1e-4  m²
//   m²  = 1         m²
//
// Imperial:
//   in² = (0.0254)²  = 6.4516e-4 m²    (exact)
//   ft² = (0.3048)²  = 9.290304e-2 m²  (exact)

const toSquareMetres = {
  // -- Picometre squared ----------------------------------------------------
  picometre_squared:     1e-24,             // exact: (1e-12 m)²
  // -- Nanodarcy ------------------------------------------------------------
  nanodarcy:             1e-16 / 101325,    // = 1e-9 × (1e-7/101325) ≈ 9.869e-22 m²
  // -- Microdarcy -----------------------------------------------------------
  microdarcy:            1e-13 / 101325,    // = 1e-6 × (1e-7/101325) ≈ 9.869e-19 m²
  // -- Nanometre squared ----------------------------------------------------
  nanometre_squared:     1e-18,             // exact: (1e-9 m)²
  // -- Millidarcy -----------------------------------------------------------
  millidarcy:            1e-10 / 101325,    // = 1e-3 × (1e-7/101325) ≈ 9.869e-16 m²
  // -- Darcy ----------------------------------------------------------------
  darcy:                 1e-7  / 101325,    // exact fraction ≈ 9.869 232 667 × 10⁻¹³ m²
  // -- Micrometre squared ---------------------------------------------------
  micrometre_squared:    1e-12,             // exact: (1e-6 m)²
  // -- Kilodarcy ------------------------------------------------------------
  kilodarcy:             1e-4  / 101325,    // = 1e3 × (1e-7/101325) ≈ 9.869e-10 m²
  // -- Millimetre squared ---------------------------------------------------
  millimetre_squared:    1e-6,              // exact: (1e-3 m)²
  // -- Centimetre squared ---------------------------------------------------
  centimetre_squared:    1e-4,              // exact: (1e-2 m)²
  // -- Inch squared ---------------------------------------------------------
  inch_squared:          0.0254 * 0.0254,   // = 6.4516e-4 m² (exact: 1 in = 0.0254 m)
  // -- Foot squared ---------------------------------------------------------
  foot_squared:          0.3048 * 0.3048,   // = 9.290304e-2 m² (exact: 1 ft = 0.3048 m)
  // -- Metre squared (SI base) ----------------------------------------------
  metre_squared:         1,                 // reference (base unit)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  picometre_squared: {
    name: "Picometre squared",
    description: "The picometre squared (pm\u00b2) equals 10\u207b\u00b2\u2074 m\u00b2, used in molecular simulation and crystallography for the intrinsic permeability of dense crystalline solids. Halite and anhydrite crystal lattices have calculated matrix permeabilities below 1 pm\u00b2; theoretical studies of gas diffusion through graphene oxide membranes work at this scale. 1 pm\u00b2 = 10\u207b\u2076 nm\u00b2 = 10\u207b\u00b2\u2074 m\u00b2.",
    symbol: "pm\u00b2"
  },
  nanodarcy: {
    name: "Nanodarcy",
    description: "The nanodarcy (nD) equals 10\u207b\u2079 D \u2248 9.869 \u00d7 10\u207b\u00b2\u00b2 m\u00b2, the standard permeability unit for ultra-tight unconventional reservoirs. Barnett, Marcellus, and Eagle Ford shale matrix: 1-1\u202f000 nD; crystalline basement rocks and caprocks: below 1 nD. Measured by pulse-decay or GRI crushed-rock methods. 1 nD = 10\u207b\u00b3 \u00b5D = 10\u207b\u2076 mD.",
    symbol: "nD"
  },
  microdarcy: {
    name: "Microdarcy",
    description: "The microdarcy (\u00b5D) equals 10\u207b\u2076 D \u2248 9.869 \u00d7 10\u207b\u00b9\u2079 m\u00b2, used for tight gas sands, coalbed methane matrix, and low-permeability carbonates. North Sea tight sandstones: 0.01-1 \u00b5D; coalbed methane matrix: 1-100 \u00b5D; mudrock caprocks: 0.001-1 \u00b5D. 1 \u00b5D = 10\u207b\u00b3 mD = 10\u00b3 nD.",
    symbol: "\u00b5D"
  },
  nanometre_squared: {
    name: "Nanometre squared",
    description: "The nanometre squared (nm\u00b2) equals 10\u207b\u00b9\u2078 m\u00b2, used in membrane science and nanotechnology for nanoporous media. ZSM-5 zeolite pore cross-section \u2248 0.25 nm\u00b2; ceramic ultrafiltration membranes: 0.01-1 nm\u00b2. Numerically, 1 nm\u00b2 \u2248 1.013 \u00b5D. 1 nm\u00b2 = 10\u207b\u2076 \u00b5m\u00b2 = 10\u207b\u00b9\u2078 m\u00b2.",
    symbol: "nm\u00b2"
  },
  millidarcy: {
    name: "Millidarcy",
    description: "The millidarcy (mD) equals 10\u207b\u00b3 D \u2248 9.869 \u00d7 10\u207b\u00b9\u2076 m\u00b2, the everyday unit in petroleum reservoir engineering worldwide. Conventional sandstone reservoirs: 1-1\u202f000 mD; carbonate reservoirs: 0.1-100 mD; economic gas recovery typically requires k \u2265 0.1 mD. Permeameter and well-test reports give results in mD. 1 mD = 10\u207b\u00b3 D = 10\u00b3 \u00b5D.",
    symbol: "mD"
  },
  darcy: {
    name: "Darcy",
    description: "The darcy (D) \u2248 9.869 \u00d7 10\u207b\u00b9\u00b3 m\u00b2, the oilfield-standard permeability unit defined by Darcy's law: 1 D passes 1 cm\u00b3/s of 1 cP fluid through 1 cm\u00b2 cross-section under a 1 atm/cm gradient. Highly permeable consolidated sandstone: 1-5 D; unconsolidated sand: 5-20 D. 1 D = 1\u202f000 mD \u2248 0.9869 \u00b5m\u00b2.",
    symbol: "D"
  },
  micrometre_squared: {
    name: "Micrometre squared",
    description: "The micrometre squared (\u00b5m\u00b2) equals 10\u207b\u00b9\u00b2 m\u00b2, the SI-consistent permeability unit used in European reservoir standards and ISO documents. 1 \u00b5m\u00b2 \u2248 1.0133 D - numerically close to but distinct from the darcy. Clean gravel: 1-10 \u00b5m\u00b2; clean sandstone: 10\u207b\u00b3-0.1 \u00b5m\u00b2. 1 \u00b5m\u00b2 = 10\u2076 nm\u00b2 = 10\u207b\u2076 mm\u00b2.",
    symbol: "\u00b5m\u00b2"
  },
  kilodarcy: {
    name: "Kilodarcy",
    description: "The kilodarcy (kD) equals 10\u00b3 D \u2248 9.869 \u00d7 10\u207b\u00b9\u2070 m\u00b2, used for very high-permeability porous structures. Gravel packs in oil wells: 1-100 kD; vuggy dissolved carbonates: 1-10 kD; loose sand-gravel mixtures: 10-1\u202f000 kD. 1 kD = 10\u00b3 D = 10\u2076 mD.",
    symbol: "kD"
  },
  millimetre_squared: {
    name: "Millimetre squared",
    description: "The millimetre squared (mm\u00b2) equals 10\u207b\u2076 m\u00b2 \u2248 1.013 \u00d7 10\u2079 D, representing extremely high permeabilities beyond the range of most geological materials. It appears in geotechnical research for open rock fractures, coarse gravel channel beds, and large-cell open-foam engineered materials. 1 mm\u00b2 = 10\u2076 \u00b5m\u00b2 = 10\u207b\u2076 m\u00b2.",
    symbol: "mm\u00b2"
  },
  centimetre_squared: {
    name: "Centimetre squared",
    description: "The centimetre squared (cm\u00b2) equals 10\u207b\u2074 m\u00b2 \u2248 1.013 \u00d7 10\u00b9\u00b9 D, present in unit-conversion tables as a logical extension of the SI area series. It is effectively beyond the range of any natural porous medium and arises only in theoretical packed-bed studies or large-aperture industrial filter specifications. 1 cm\u00b2 = 10\u2074 mm\u00b2 = 10\u207b\u2074 m\u00b2.",
    symbol: "cm\u00b2"
  },
  inch_squared: {
    name: "Inch squared",
    description: "The square inch (in\u00b2) equals (0.0254 m)\u00b2 = 6.4516 \u00d7 10\u207b\u2074 m\u00b2 \u2248 6.54 \u00d7 10\u00b9\u00b9 D. An imperial area unit included for unit-conversion completeness; it appears in some US oil-country tubular goods and industrial filter-media specifications where flow cross-sections are stated in square inches. 1 in\u00b2 \u2248 6.452 cm\u00b2 = 6.4516 \u00d7 10\u207b\u2074 m\u00b2.",
    symbol: "in\u00b2"
  },
  foot_squared: {
    name: "Foot squared",
    description: "The square foot (ft\u00b2) equals (0.3048 m)\u00b2 = 9.290\u202f304 \u00d7 10\u207b\u00b2 m\u00b2 \u2248 9.41 \u00d7 10\u00b9\u00b3 D. An imperial area unit included for unit-conversion completeness; it occasionally appears in US geotechnical reports where flow cross-sections are expressed in square feet. 1 ft\u00b2 = 144 in\u00b2 = 9.290\u202f304 \u00d7 10\u207b\u00b2 m\u00b2.",
    symbol: "ft\u00b2"
  },
  metre_squared: {
    name: "Metre squared",
    description: "The square metre (m\u00b2) is the SI coherent unit of permeability (dimension [L\u00b2]) and the reference for all other permeability units. Most geological materials have k far below 1 m\u00b2; clean coarse gravel: \u224810\u207b\u2078 m\u00b2; shale: 10\u207b\u00b2\u00b2-10\u207b\u00b9\u2075 m\u00b2. 1 m\u00b2 = 10\u00b9\u00b2 \u00b5m\u00b2 \u2248 1.013 \u00d7 10\u00b9\u00b2 D.",
    symbol: "m\u00b2"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toSquareMetres);
}

function convertPermeability() {
  convertFactorBased(toSquareMetres);
}

initConverterPage();
