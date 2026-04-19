// Base unit: mole per cubic metre (mol/m³) - the SI coherent unit of amount-of-substance concentration.
// Also called molar concentration or molarity.
// All factors express how many mol/m³ equal 1 unit of the given measure.
//
// Exact foundations:
//   1 L  = 1e-3 m³ (exact, SI definition since 1964)
//   1 dL = 1e-4 m³ (exact: 1 dL = 0.1 L)
//   1 mL = 1e-6 m³ (exact: 1 mL = 0.001 L)
//   1 dm³ = (0.1 m)³ = 1e-3 m³ = 1 L (exact)
//   1 cm³ = (0.01 m)³ = 1e-6 m³ = 1 mL (exact)
//   SI prefixes: femto=1e-15, pico=1e-12, nano=1e-9, micro=1e-6, milli=1e-3, kilo=1e3 (all exact)
//
//   All derived factors are exact powers of ten:
//   fmol/L    = 1e-15 mol / 1e-3 m³  = 1e-12 mol/m³
//   pmol/L    = 1e-12 mol / 1e-3 m³  = 1e-9  mol/m³   (= nmol/m³)
//   nmol/m³   = 1e-9  mol / m³       = 1e-9  mol/m³
//   nmol/L    = 1e-9  mol / 1e-3 m³  = 1e-6  mol/m³   (= µmol/m³)
//   µmol/m³   = 1e-6  mol / m³       = 1e-6  mol/m³
//   µmol/L    = 1e-6  mol / 1e-3 m³  = 1e-3  mol/m³
//   mmol/L    = 1e-3  mol / 1e-3 m³  = 1     mol/m³   (= mol/m³ !)
//   mol/m³    = 1                    = 1     mol/m³   (reference/base unit)
//   mmol/dL   = 1e-3  mol / 1e-4 m³  = 10    mol/m³
//   mol/L     = 1     mol / 1e-3 m³  = 1e3   mol/m³   (= mol/dm³ = kmol/m³)
//   mol/dm³   = 1     mol / 1e-3 m³  = 1e3   mol/m³
//   kmol/m³   = 1e3   mol / m³       = 1e3   mol/m³
//   mol/dL    = 1     mol / 1e-4 m³  = 1e4   mol/m³
//   mol/mL    = 1     mol / 1e-6 m³  = 1e6   mol/m³   (= mol/cm³)
//   mol/cm³   = 1     mol / 1e-6 m³  = 1e6   mol/m³

const toMolesPerCubicMetre = {
  // -- Femtomoles per litre -------------------------------------------------
  femtomoles_per_litre:           1e-12,   // exact: 1e-15 / 1e-3
  // -- Picomoles per litre --------------------------------------------------
  picomoles_per_litre:            1e-9,    // exact: 1e-12 / 1e-3
  // -- Nanomoles per cubic metre --------------------------------------------
  nanomoles_per_cubic_metre:      1e-9,    // exact (= pmol/L numerically)
  // -- Nanomoles per litre --------------------------------------------------
  nanomoles_per_litre:            1e-6,    // exact: 1e-9 / 1e-3
  // -- Micromoles per cubic metre -------------------------------------------
  micromoles_per_cubic_metre:     1e-6,    // exact (= nmol/L numerically)
  // -- Micromoles per litre -------------------------------------------------
  micromoles_per_litre:           1e-3,    // exact: 1e-6 / 1e-3
  // -- Millimoles per litre -------------------------------------------------
  millimoles_per_litre:           1,       // exact: 1e-3 / 1e-3 (= mol/m³ numerically)
  // -- Moles per cubic metre (SI base) --------------------------------------
  moles_per_cubic_metre:          1,       // reference (base unit)
  // -- Millimoles per decilitre ---------------------------------------------
  millimoles_per_decilitre:       10,      // exact: 1e-3 / 1e-4
  // -- Moles per litre ------------------------------------------------------
  moles_per_litre:                1e3,     // exact: 1 / 1e-3
  // -- Moles per cubic decimetre --------------------------------------------
  moles_per_cubic_decimetre:      1e3,     // exact: 1 / (0.1)³ = 1 / 1e-3 (= mol/L numerically)
  // -- Kilomoles per cubic metre --------------------------------------------
  kilomoles_per_cubic_metre:      1e3,     // exact: 1e3 / 1 (= mol/L numerically)
  // -- Moles per decilitre --------------------------------------------------
  moles_per_decilitre:            1e4,     // exact: 1 / 1e-4
  // -- Moles per millilitre -------------------------------------------------
  moles_per_millilitre:           1e6,     // exact: 1 / 1e-6
  // -- Moles per cubic centimetre -------------------------------------------
  moles_per_cubic_centimetre:     1e6,     // exact: 1 / (0.01)³ = 1 / 1e-6 (= mol/mL numerically)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtomoles_per_litre: {
    name: "Femtomoles per litre",
    description: "The femtomole per litre (fmol/L, fM) equals 10\u207b\u00b9\u00b2 mol/m\u00b3, the standard unit in ultra-sensitive immunoassay, digital ELISA, and LC-MS/MS quantification. Cytokines such as IL-6 occur at 1-100 fmol/L in healthy serum; high-sensitivity cardiac troponin assays report results at this level. 1 fmol/L = 10\u207b\u00b3 pmol/L = 10\u207b\u00b9\u00b2 mol/m\u00b3.",
    symbol: "fmol/L"
  },
  picomoles_per_litre: {
    name: "Picomoles per litre",
    description: "The picomole per litre (pmol/L, pM) equals 10\u207b\u2079 mol/m\u00b3, the standard unit for most endocrine hormone measurements in clinical chemistry worldwide. Serum free T4: 12-22 pmol/L; oestradiol: 37-530 pmol/L; insulin (fasting): 20-100 pmol/L. Numerically identical to nmol/m\u00b3. 1 pmol/L = 10\u207b\u00b3 nmol/L.",
    symbol: "pmol/L"
  },
  nanomoles_per_cubic_metre: {
    name: "Nanomoles per cubic metre",
    description: "The nanomole per cubic metre (nmol/m\u00b3) equals 10\u207b\u2079 mol/m\u00b3, used in atmospheric chemistry to express trace gas concentrations in air. At NTP, 1 ppb (v/v) of a gas \u2248 40 nmol/m\u00b3; indoor benzene at 1 ppb \u2248 40 nmol/m\u00b3. Numerically identical to pmol/L. 1 nmol/m\u00b3 = 10\u207b\u00b3 \u00b5mol/m\u00b3.",
    symbol: "nmol/m\u00b3"
  },
  nanomoles_per_litre: {
    name: "Nanomoles per litre",
    description: "The nanomole per litre (nmol/L, nM) equals 10\u207b\u2076 mol/m\u00b3, routinely used in pharmacology and clinical chemistry. Serum 25-hydroxyvitamin D: 50-125 nmol/L (optimal range); testosterone (adult men): 9-35 nmol/L; morning cortisol: 140-690 nmol/L. Numerically identical to \u00b5mol/m\u00b3. 1 nmol/L = 10\u207b\u00b3 \u00b5mol/L.",
    symbol: "nmol/L"
  },
  micromoles_per_cubic_metre: {
    name: "Micromoles per cubic metre",
    description: "The micromole per cubic metre (\u00b5mol/m\u00b3) equals 10\u207b\u2076 mol/m\u00b3, used in atmospheric science for trace reactive gases. At NTP, 1 ppm (v/v) of a gas \u2248 40 \u00b5mol/m\u00b3; ambient O\u2083 at 100 ppb \u2248 4 \u00b5mol/m\u00b3. Numerically identical to nmol/L. 1 \u00b5mol/m\u00b3 = 10\u207b\u00b3 mmol/m\u00b3.",
    symbol: "\u00b5mol/m\u00b3"
  },
  micromoles_per_litre: {
    name: "Micromoles per litre",
    description: "The micromole per litre (\u00b5mol/L, \u00b5M) equals 10\u207b\u00b3 mol/m\u00b3, widely used in pharmacology, clinical toxicology, and biochemistry for metabolite and drug concentrations. Serum creatinine: 62-115 \u00b5mol/L; uric acid: 200-430 \u00b5mol/L; therapeutic phenytoin: 40-80 \u00b5mol/L. 1 \u00b5mol/L = 10\u207b\u00b3 mmol/L.",
    symbol: "\u00b5mol/L"
  },
  millimoles_per_litre: {
    name: "Millimoles per litre",
    description: "The millimole per litre (mmol/L, mM) equals 1 mol/m\u00b3, the dominant unit in clinical chemistry worldwide (SI system). Blood glucose: 3.9-6.1 mmol/L; serum sodium: 135-145 mmol/L; total cholesterol: 3.9-5.2 mmol/L. Numerically identical to mol/m\u00b3. 1 mmol/L = 10\u207b\u00b3 mol/L = 1 mol/m\u00b3.",
    symbol: "mmol/L"
  },
  moles_per_cubic_metre: {
    name: "Moles per cubic metre",
    description: "The mole per cubic metre (mol/m\u00b3) is the SI coherent unit of molar concentration. It is numerically equal to mmol/L (millimolar), the dominant clinical chemistry unit. Air at STP contains \u224844.6 mol/m\u00b3 total; ocean seawater NaCl \u2248 470 mol/m\u00b3. 1 mol/m\u00b3 = 1 mmol/L = 10\u207b\u00b3 mol/L.",
    symbol: "mol/m\u00b3"
  },
  millimoles_per_decilitre: {
    name: "Millimoles per decilitre",
    description: "The millimole per decilitre (mmol/dL) equals 10 mol/m\u00b3, a transitional unit in US clinical chemistry when reporting analytes that were historically stated in mg/dL but are converting to SI. Blood glucose in SI: 5.0 mmol/L = 0.5 mmol/dL; this unit is rarely used in practice but appears in some conversion tables. 1 mmol/dL = 10 mmol/L.",
    symbol: "mmol/dL"
  },
  moles_per_litre: {
    name: "Moles per litre",
    description: "The mole per litre (mol/L, M - molar) equals 1 000 mol/m\u00b3, the most widely used concentration unit in chemistry and biochemistry. Stock solutions, enzyme substrates, and reagent preparation all use mol/L. Concentrated HCl \u224812 mol/L; saturated NaCl \u22486.1 mol/L; sea water NaCl \u22480.47 mol/L. 1 mol/L = mol/dm\u00b3 = kmol/m\u00b3.",
    symbol: "mol/L"
  },
  moles_per_cubic_decimetre: {
    name: "Moles per cubic decimetre",
    description: "The mole per cubic decimetre (mol/dm\u00b3) equals 1 000 mol/m\u00b3, numerically identical to mol/L. It is the preferred notation in UK A-level and university chemistry curricula and in IUPAC recommendations, where dm\u00b3 emphasises the SI volume unit. 1 mol/dm\u00b3 = 1 mol/L = 1 M = kmol/m\u00b3.",
    symbol: "mol/dm\u00b3"
  },
  kilomoles_per_cubic_metre: {
    name: "Kilomoles per cubic metre",
    description: "The kilomole per cubic metre (kmol/m\u00b3) equals 1 000 mol/m\u00b3, numerically identical to mol/L. It is used in chemical and process engineering where molar flow rates are in kmol/h and reactor volumes in m\u00b3, making kmol/m\u00b3 the natural concentration unit for material balance calculations. 1 kmol/m\u00b3 = 1 mol/L = 1 mol/dm\u00b3.",
    symbol: "kmol/m\u00b3"
  },
  moles_per_decilitre: {
    name: "Moles per decilitre",
    description: "The mole per decilitre (mol/dL) equals 10 000 mol/m\u00b3 = 10 mol/L, a rarely encountered unit occasionally found in older US clinical-chemistry references for highly concentrated analytes or conversion tables alongside mg/dL values. 1 mol/dL = 10 mol/L = 10 000 mmol/L.",
    symbol: "mol/dL"
  },
  moles_per_millilitre: {
    name: "Moles per millilitre",
    description: "The mole per millilitre (mol/mL) equals 10\u2076 mol/m\u00b3 = 1 000 mol/L, used for extremely concentrated solutions and in nuclear medicine for radioligand and radiopharmaceutical stock solutions. Numerically identical to mol/cm\u00b3. 1 mol/mL = 1 000 mol/L = 10\u2076 mol/m\u00b3.",
    symbol: "mol/mL"
  },
  moles_per_cubic_centimetre: {
    name: "Moles per cubic centimetre",
    description: "The mole per cubic centimetre (mol/cm\u00b3) equals 10\u2076 mol/m\u00b3 = 1 000 mol/L, the CGS coherent unit of molar concentration. Numerically identical to mol/mL. It appears in older physical chemistry literature and materials science when CGS units are used for molar volume or lattice-site density. 1 mol/cm\u00b3 = 1 mol/mL = 10\u2076 mol/m\u00b3.",
    symbol: "mol/cm\u00b3"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toMolesPerCubicMetre);
}

function convertConcentrationMolar() {
  convertFactorBased(toMolesPerCubicMetre);
}

initConverterPage();
