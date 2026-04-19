// Base unit: newton per metre (N/m) - the SI derived unit of surface tension.
// Dimensionally [N/m] = [J/m²] = [kg/s²]; surface tension and surface energy per area
// are numerically identical when expressed in SI units.
// All factors express how many N/m equal 1 unit of the given measure.
//
// Exact foundations:
//   1 dyn  = 1e-5 N       (exact: CGS force unit)
//   1 cm   = 1e-2 m       (exact)
//   1 cm²  = 1e-4 m²      (exact)
//   1 erg  = 1e-7 J       (exact: CGS energy unit)
//   g_n    = 9.80665 m/s² (exact, CGPM 1901)
//   1 gf   = 9.80665e-3 N (exact: g_n × 1e-3 kg)
//   1 lb   = 0.45359237 kg (exact, international pound)
//   1 ft   = 0.3048 m     (exact)
//   1 in   = 0.0254 m     (exact)
//   1 pdl  = 0.45359237 × 0.3048 N = 0.138254954376 N (exact)
//   SI prefixes: pico=1e-12, nano=1e-9, micro=1e-6, milli=1e-3, kilo=1e3 (all exact)
//
// Derived factors:
//   pN/m    = 1e-12 N/m           (exact)
//   nN/m    = 1e-9  N/m           (exact)
//   µN/m    = 1e-6  N/m           (exact; = µJ/m² numerically)
//   µJ/m²   = 1e-6  J/m² = 1e-6 N/m (exact; since 1 J/m² = 1 N/m)
//   mN/m    = 1e-3  N/m           (exact)
//   dyn/cm  = 1e-5 / 1e-2 = 1e-3 N/m (exact; = mN/m numerically)
//   erg/cm² = 1e-7 / 1e-4 = 1e-3 J/m² = 1e-3 N/m (exact; = mN/m numerically)
//   mJ/m²   = 1e-3  J/m² = 1e-3 N/m  (exact; = mN/m numerically)
//   gf/cm   = 9.80665e-3 / 1e-2 = 0.980665 N/m (exact)
//   N/m     = 1                   (reference / base unit)
//   J/m²    = 1     N/m           (exact; = N/m numerically)
//   pdl/in  = (0.45359237 × 0.3048) / 0.0254 = 0.45359237 × 12 = 5.44310844 N/m (exact)
//   lbf/ft  = (0.45359237 × 9.80665) / 0.3048 N/m (exact)
//   lbf/in  = (0.45359237 × 9.80665) / 0.0254  N/m (exact; = 12 × lbf/ft)
//   kN/m    = 1e3   N/m           (exact)

const toNewtonsPerMetre = {
  // -- Piconewtons per metre ------------------------------------------------
  piconewtons_per_metre:          1e-12,                          // exact
  // -- Nanonewtons per metre ------------------------------------------------
  nanonewtons_per_metre:          1e-9,                           // exact
  // -- Micronewtons per metre -----------------------------------------------
  micronewtons_per_metre:         1e-6,                           // exact (= µJ/m² numerically)
  // -- Microjoules per square metre -----------------------------------------
  microjoules_per_square_metre:   1e-6,                           // exact (= µN/m numerically)
  // -- Millinewtons per metre -----------------------------------------------
  millinewtons_per_metre:         1e-3,                           // exact
  // -- Dynes per centimetre -------------------------------------------------
  dynes_per_centimetre:           1e-3,                           // exact: 1e-5/1e-2 (= mN/m numerically)
  // -- Ergs per square centimetre -------------------------------------------
  ergs_per_square_centimetre:     1e-3,                           // exact: 1e-7/1e-4 (= mN/m numerically)
  // -- Millijoules per square metre -----------------------------------------
  millijoules_per_square_metre:   1e-3,                           // exact (= mN/m numerically)
  // -- Grams-force per centimetre -------------------------------------------
  grams_force_per_centimetre:     9.80665e-3 / 1e-2,             // = 0.980665 (exact)
  // -- Newtons per metre (SI base) ------------------------------------------
  newtons_per_metre:              1,                              // reference (base unit)
  // -- Joules per square metre ----------------------------------------------
  joules_per_square_metre:        1,                              // exact (= N/m numerically)
  // -- Poundals per inch ----------------------------------------------------
  poundals_per_inch:              0.45359237 * 12,                // = 5.44310844 (exact: 0.3048/0.0254 = 12)
  // -- Pounds-force per foot ------------------------------------------------
  pounds_force_per_foot:          0.45359237 * 9.80665 / 0.3048, // ≈ 14.5939029 (exact)
  // -- Pounds-force per inch ------------------------------------------------
  pounds_force_per_inch:          0.45359237 * 9.80665 / 0.0254, // ≈ 175.126836 (exact; = 12 × lbf/ft)
  // -- Kilonewtons per metre ------------------------------------------------
  kilonewtons_per_metre:          1e3,                            // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  piconewtons_per_metre: {
    name: "Piconewtons per metre",
    description: "The piconewton per metre (pN/m) equals 10\u207b\u00b9\u00b2 N/m, used in ultra-sensitive line-tension measurements of surfactant monolayers at the Langmuir trough and in atomic force microscopy (AFM) calibration. Lipid domain boundary line tensions in biological membranes are typically 1-10 pN. 1 pN/m = 10\u207b\u00b3 nN/m = 10\u207b\u2079 mN/m.",
    symbol: "pN/m"
  },
  nanonewtons_per_metre: {
    name: "Nanonewtons per metre",
    description: "The nanonewton per metre (nN/m) equals 10\u207b\u2079 N/m, encountered in AFM force spectroscopy for interfacial line-tension measurements and wetting studies on nanostructured surfaces. Colloidal particle contact lines at fluid interfaces can exert forces in the nN/m range. 1 nN/m = 10\u207b\u00b3 \u00b5N/m = 10\u207b\u2076 mN/m.",
    symbol: "nN/m"
  },
  micronewtons_per_metre: {
    name: "Micronewtons per metre",
    description: "The micronewton per metre (\u00b5N/m) equals 10\u207b\u2076 N/m, used in precision thin-film capillarity studies and cryogenic surface-tension measurements. Liquid helium-4 at 2 K has a surface tension of ~0.37 mN/m (370 \u00b5N/m); liquid \u00b3He near absolute zero is even lower. Numerically identical to \u00b5J/m\u00b2. 1 \u00b5N/m = 10\u207b\u00b3 mN/m.",
    symbol: "\u00b5N/m"
  },
  microjoules_per_square_metre: {
    name: "Microjoules per square metre",
    description: "The microjoule per square metre (\u00b5J/m\u00b2) equals 10\u207b\u2076 N/m - the surface-energy-per-area form, numerically identical to \u00b5N/m since [J/m\u00b2] = [N/m] exactly. Used in surface physics for low-energy interface characterisation and in thermodynamic modelling of cryogenic films. 1 \u00b5J/m\u00b2 = 1 \u00b5N/m = 10\u207b\u00b3 mJ/m\u00b2.",
    symbol: "\u00b5J/m\u00b2"
  },
  millinewtons_per_metre: {
    name: "Millinewtons per metre",
    description: "The millinewton per metre (mN/m) equals 10\u207b\u00b3 N/m, the most widely used practical unit for liquid surface tension worldwide. Water at 20 \u00b0C: 72.8 mN/m; ethanol: 22.1 mN/m; mercury: 485 mN/m; olive oil: ~32 mN/m. Numerically identical to dyn/cm, erg/cm\u00b2 and mJ/m\u00b2. 1 mN/m = 10\u207b\u00b3 N/m.",
    symbol: "mN/m"
  },
  dynes_per_centimetre: {
    name: "Dynes per centimetre",
    description: "The dyne per centimetre (dyn/cm) equals 10\u207b\u00b3 N/m - the CGS unit of surface tension, numerically identical to mN/m, mJ/m\u00b2 and erg/cm\u00b2. Still widely used in older scientific literature and industrial tensiometry: water = 72.8 dyn/cm; surfactant solutions typically 30-60 dyn/cm above the CMC. 1 dyn/cm = 1 mN/m = 1 erg/cm\u00b2.",
    symbol: "dyn/cm"
  },
  ergs_per_square_centimetre: {
    name: "Ergs per square centimetre",
    description: "The erg per square centimetre (erg/cm\u00b2) equals 10\u207b\u00b3 N/m - the CGS surface energy unit (1 erg/cm\u00b2 = 10\u207b\u2077 J / 10\u207b\u2074 m\u00b2 = 10\u207b\u00b3 J/m\u00b2 = 10\u207b\u00b3 N/m). Standard in solid surface-energy measurements: polyethylene ~31 erg/cm\u00b2; glass ~300-500 erg/cm\u00b2; metals 500-2 000 erg/cm\u00b2. 1 erg/cm\u00b2 = 1 mN/m = 1 dyn/cm.",
    symbol: "erg/cm\u00b2"
  },
  millijoules_per_square_metre: {
    name: "Millijoules per square metre",
    description: "The millijoule per square metre (mJ/m\u00b2) equals 10\u207b\u00b3 N/m - the SI surface-energy-per-area form, numerically identical to mN/m and dyn/cm. The preferred notation in materials science for solid surface energy and work of adhesion: polypropylene ~30 mJ/m\u00b2, epoxy ~45 mJ/m\u00b2, steel ~2 000 mJ/m\u00b2. 1 mJ/m\u00b2 = 1 mN/m = 1 dyn/cm.",
    symbol: "mJ/m\u00b2"
  },
  grams_force_per_centimetre: {
    name: "Grams-force per centimetre",
    description: "The gram-force per centimetre (gf/cm) equals g_n \u00d7 10\u207b\u00b3 / 10\u207b\u00b2 = 0.980665 N/m - a gravitational metric unit that appeared in early tensiometry where ring and plate instruments were calibrated in grams. 1 gf/cm \u2248 0.9807 N/m \u2248 980.7 mN/m, close to but slightly less than 1 N/m. Rarely used after SI adoption. 1 gf/cm = 0.980665 N/m.",
    symbol: "gf/cm"
  },
  newtons_per_metre: {
    name: "Newtons per metre",
    description: "The newton per metre (N/m) is the SI derived unit of surface tension, equal to one joule per square metre. Adopted in all modern scientific publications and engineering codes. Water at 20 \u00b0C: 0.0728 N/m; mercury: 0.485 N/m; liquid iron at 1 550 \u00b0C: ~1.8 N/m. 1 N/m = 1 J/m\u00b2 = 1 000 mN/m = 1 000 dyn/cm.",
    symbol: "N/m"
  },
  joules_per_square_metre: {
    name: "Joules per square metre",
    description: "The joule per square metre (J/m\u00b2) equals 1 N/m exactly - the surface-fracture-energy (G_c) form used in fracture mechanics and wetting thermodynamics. Values: silica glass ~0.8 J/m\u00b2; aluminium ~1.4 J/m\u00b2; silicon carbide ~10-25 J/m\u00b2; tough metals 50-100 J/m\u00b2. 1 J/m\u00b2 = 1 N/m = 1 000 mJ/m\u00b2.",
    symbol: "J/m\u00b2"
  },
  poundals_per_inch: {
    name: "Poundals per inch",
    description: "The poundal per inch (pdl/in) equals 0.45359237 \u00d7 12 N/m = 5.44310844 N/m exactly (since 0.3048/0.0254 = 12). A foot-pound-second (FPS) unit rarely encountered in modern practice but found in historical US engineering tables predating SI adoption. 1 pdl/in = 5.44310844 N/m \u2248 5 443 mN/m.",
    symbol: "pdl/in"
  },
  pounds_force_per_foot: {
    name: "Pounds-force per foot",
    description: "The pound-force per foot (lbf/ft) equals (0.45359237 \u00d7 9.80665) / 0.3048 \u2248 14.5939 N/m, used in US reservoir engineering and geotechnical drainage for capillary pressure and interfacial tension data. Drilling muds and reservoir simulation codes (Eclipse, CMG) sometimes report in lbf/ft. 1 lbf/ft \u2248 14.594 N/m \u2248 14 594 mN/m.",
    symbol: "lbf/ft"
  },
  pounds_force_per_inch: {
    name: "Pounds-force per inch",
    description: "The pound-force per inch (lbf/in) equals (0.45359237 \u00d7 9.80665) / 0.0254 \u2248 175.127 N/m, used in US industrial specifications for adhesive peel strength, hot-melt bond lines, and surface tension of molten metals. 1 lbf/in = 12 lbf/ft \u2248 175.127 N/m \u2248 175 127 mN/m.",
    symbol: "lbf/in"
  },
  kilonewtons_per_metre: {
    name: "Kilonewtons per metre",
    description: "The kilonewton per metre (kN/m) equals 1 000 N/m = 10\u2076 mN/m - applied in geotechnical engineering for electro-osmotic soil surface-tension effects and in materials science for metal-ceramic interfacial fracture energy. Alumina-aluminium interfaces: ~0.5-1 kN/m; diamond-metal bonds: several kN/m. 1 kN/m = 1 000 N/m = 10\u2076 mN/m.",
    symbol: "kN/m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toNewtonsPerMetre);
}

function convertSurfaceTension() {
  convertFactorBased(toNewtonsPerMetre);
}

initConverterPage();
