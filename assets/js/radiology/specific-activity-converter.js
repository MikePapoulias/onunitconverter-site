// Base unit: becquerel per kilogram (Bq/kg) - the SI derived unit of specific activity.
// Specific activity a [T\u207b\u00b9 M\u207b\u00b9] gives the radioactive activity per unit mass of a material.
// All factors express how many Bq/kg equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Bq/kg  = 1 s\u207b\u00b9 kg\u207b\u00b9  (SI coherent derived unit; no special name)
//   1 Ci     = 3.7 \u00d7 10\u00b9\u2070 Bq   (exact; curie, BIPM 1975)
//   1 Ci/g   = 3.7 \u00d7 10\u00b9\u00b3 Bq/kg  (exact; 1 Ci/g = 1 Ci per gram = 1000 Ci/kg)
//   1 dpm/g  = 1000/60 Bq/kg   (exact; 1 disintegration per minute per gram)
//
// SI prefix Bq/kg units (all exact by SI prefix definitions):
//   1 fBq/kg = 10\u207b\u00b9\u2075 Bq/kg   1 pBq/kg = 10\u207b\u00b9\u00b2 Bq/kg   1 nBq/kg = 10\u207b\u2079 Bq/kg
//   1 \u00b5Bq/kg = 10\u207b\u2076 Bq/kg   1 mBq/kg = 10\u207b\u00b3 Bq/kg    1 kBq/kg = 10\u00b3 Bq/kg
//   1 MBq/kg = 10\u2076 Bq/kg    1 GBq/kg = 10\u2079 Bq/kg    1 TBq/kg = 10\u00b9\u00b2 Bq/kg
//   1 PBq/kg = 10\u00b9\u2075 Bq/kg
//
// Curie-based per-kilogram units (1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq - exact):
//   1 pCi/kg = 3.7 \u00d7 10\u207b\u00b2 Bq/kg    1 nCi/kg = 37 Bq/kg
//   1 \u00b5Ci/kg = 3.7 \u00d7 10\u2074 Bq/kg     1 mCi/kg = 3.7 \u00d7 10\u2077 Bq/kg
//   1 Ci/kg  = 3.7 \u00d7 10\u00b9\u2070 Bq/kg     1 kCi/kg = 3.7 \u00d7 10\u00b9\u00b3 Bq/kg (= 1 Ci/g)
//   1 MCi/kg = 3.7 \u00d7 10\u00b9\u2076 Bq/kg

const toBecquerelsPerKilogram = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtobecquerels_per_kilogram:    1e-15,          // exact: 10\u207b\u00b9\u2075 Bq/kg (SI prefix femto)
  picobecquerels_per_kilogram:     1e-12,          // exact: 10\u207b\u00b9\u00b2 Bq/kg (SI prefix pico)
  nanobecquerels_per_kilogram:     1e-9,           // exact: 10\u207b\u2079 Bq/kg (SI prefix nano)
  microbecquerels_per_kilogram:    1e-6,           // exact: 10\u207b\u2076 Bq/kg (SI prefix micro)
  millibecquerels_per_kilogram:    1e-3,           // exact: 10\u207b\u00b3 Bq/kg (SI prefix milli)
  // -- Curie-sub-becquerel ---------------------------------------------------
  picocuries_per_kilogram:         3.7e-2,         // exact: 3.7 \u00d7 10\u207b\u00b2 Bq/kg (= 10\u207b\u00b9\u00b2 Ci/kg)
  // -- Base unit (SI) --------------------------------------------------------
  becquerels_per_kilogram:         1,              // reference (base unit)
  // -- dpm/g (practical nuclear medicine / soil unit) ------------------------
  disintegrations_per_minute_per_gram: 1000 / 60, // exact: 1000/60 Bq/kg (1 dpm/g = 1 dpm per gram; 1 dpm = 1/60 Bq; 1 g = 10\u207b\u00b3 kg)
  // -- Curie-based (above base) ----------------------------------------------
  nanocuries_per_kilogram:         37,             // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2079 = 37 Bq/kg
  // -- SI prefix (kilo and above) --------------------------------------------
  kilobecquerels_per_kilogram:     1e3,            // exact: 10\u00b3 Bq/kg (SI prefix kilo; = 1 Bq/g)
  microcuries_per_kilogram:        3.7e4,          // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2076 = 3.7 \u00d7 10\u2074 Bq/kg
  megabecquerels_per_kilogram:     1e6,            // exact: 10\u2076 Bq/kg (SI prefix mega)
  millicuries_per_kilogram:        3.7e7,          // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u00b3 = 3.7 \u00d7 10\u2077 Bq/kg
  gigabecquerels_per_kilogram:     1e9,            // exact: 10\u2079 Bq/kg (SI prefix giga)
  curies_per_kilogram:             3.7e10,         // exact: 3.7 \u00d7 10\u00b9\u2070 Bq/kg
  terabecquerels_per_kilogram:     1e12,           // exact: 10\u00b9\u00b2 Bq/kg (SI prefix tera)
  kilocuries_per_kilogram:         3.7e13,         // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u00b3 = 3.7 \u00d7 10\u00b9\u00b3 Bq/kg (= 1 Ci/g)
  petabecquerels_per_kilogram:     1e15,           // exact: 10\u00b9\u2075 Bq/kg (SI prefix peta)
  megacuries_per_kilogram:         3.7e16,         // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u2076 = 3.7 \u00d7 10\u00b9\u2076 Bq/kg
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtobecquerels_per_kilogram: {
    name: "Femtobecquerels per kilogram",
    description: "The femtobecquerel per kilogram (fBq/kg) equals 10\u207b\u00b9\u2075 Bq/kg. Used in accelerator mass spectrometry (AMS) to quantify cosmogenic radionuclide concentrations (\u00b9\u2070Be, \u00b3\u2076Cl) in ice cores, sediments, and geological minerals where activities per unit mass are at the femto-level. Ultra-clean radiochemistry purity assessments for solar neutrino detectors also reach fBq/kg sensitivities. 1 fBq/kg = 10\u207b\u00b9\u2075 Bq/kg.",
    symbol: "fBq/kg"
  },
  picobecquerels_per_kilogram: {
    name: "Picobecquerels per kilogram",
    description: "The picobecquerel per kilogram (pBq/kg) equals 10\u207b\u00b9\u00b2 Bq/kg. Environmental monitoring of very pure water samples and ultra-low-background detector materials reports natural radioactivity (\u00b2\u00b2\u2076Ra, \u00b2\u00b2\u2078Ra) at pBq/kg; material purity screening for low-background physics experiments (neutrinoless double-beta decay searches) uses pBq/kg sensitivity thresholds. 1 pBq/kg = 10\u207b\u00b9\u00b2 Bq/kg.",
    symbol: "pBq/kg"
  },
  nanobecquerels_per_kilogram: {
    name: "Nanobecquerels per kilogram",
    description: "The nanobecquerel per kilogram (nBq/kg) equals 10\u207b\u2079 Bq/kg. Marine radioactivity surveys measure transuranics (\u00b2\u00b3\u2079Pu, \u00b2\u2074\u00b0Am) in deep-sea sediments at nBq/kg; CTBTO monitoring stations track fallout \u00b9\u00b3\u2077Cs in aerosol filter samples approaching the nBq/kg level. 1 nBq/kg = 10\u207b\u2079 Bq/kg = 10\u207b\u00b3 \u00b5Bq/kg.",
    symbol: "nBq/kg"
  },
  microbecquerels_per_kilogram: {
    name: "Microbecquerels per kilogram",
    description: "The microbecquerel per kilogram (\u00b5Bq/kg) equals 10\u207b\u2076 Bq/kg. Very low-level anthropogenic contamination in drinking water (tritium, \u2079\u2070Sr) and dietary exposures from global nuclear weapons test fallout in the 1950s-1960s are characterised at \u00b5Bq/kg in body burden assessments. 1 \u00b5Bq/kg = 10\u207b\u2076 Bq/kg = 10\u207b\u00b3 mBq/kg.",
    symbol: "\u00b5Bq/kg"
  },
  millibecquerels_per_kilogram: {
    name: "Millibecquerels per kilogram",
    description: "The millibecquerel per kilogram (mBq/kg) equals 10\u207b\u00b3 Bq/kg. Used for very low-level radioactivity in food and environmental samples; trace \u00b9\u00b3\u2077Cs in ocean water and \u00b2\u00b2\u2076Ra in mineral waters are reported in mBq/kg; occupational bioassay detection limits for actinides in urine and feces are expressed in mBq/kg. 1 mBq/kg = 10\u207b\u00b3 Bq/kg.",
    symbol: "mBq/kg"
  },
  picocuries_per_kilogram: {
    name: "Picocuries per kilogram",
    description: "The picocurie per kilogram (pCi/kg) equals 3.7 \u00d7 10\u207b\u00b2 Bq/kg. Standard US unit for soil and sediment radioactivity screening: EPA soil screening levels for \u00b2\u00b2\u2076Ra and \u00b2\u00b3\u2038U are cited in pCi/g (= nCi/kg); fish tissue \u00b9\u00b3\u2077Cs limits in some US regulations use pCi/kg. 1 pCi/kg = 3.7 \u00d7 10\u207b\u00b2 Bq/kg.",
    symbol: "pCi/kg"
  },
  becquerels_per_kilogram: {
    name: "Becquerels per kilogram",
    description: "The becquerel per kilogram (Bq/kg) is the SI derived unit of specific activity. It is the primary unit in food safety regulations worldwide: the EU, Japan, and Codex Alimentarius set \u00b9\u00b3\u2077Cs limits in Bq/kg for foodstuffs; soil \u00b9\u00b3\u2077Cs contamination from Chernobyl and Fukushima fallout is mapped in Bq/kg. 1 Bq/kg = 1 s\u207b\u00b9 kg\u207b\u00b9 = 1 mBq/g.",
    symbol: "Bq/kg"
  },
  disintegrations_per_minute_per_gram: {
    name: "Disintegrations per minute per gram",
    description: "The disintegration per minute per gram (dpm/g) equals exactly 1000/60 Bq/kg \u2248 16.67 Bq/kg. Widely used in liquid scintillation counting (LSC) of \u00b3H and \u00b9\u2074C-labelled compounds and in nuclear forensics for soil and sediment analysis; geochemists report natural radionuclide concentrations in volcanic rocks and marine sediments in dpm/g. 1 dpm/g = 1000/60 Bq/kg.",
    symbol: "dpm/g"
  },
  nanocuries_per_kilogram: {
    name: "Nanocuries per kilogram",
    description: "The nanocurie per kilogram (nCi/kg) equals 37 Bq/kg. US EPA soil screening levels for \u00b2\u00b2\u2076Ra and \u00b2\u00b2\u2078Ra are given in pCi/g which equals nCi/kg; NRC derived concentration guides (DCGs) for radionuclides in soil for unrestricted-use release are expressed in nCi/kg in 10 CFR Part 20. 1 nCi/kg = 37 Bq/kg = 3.7 \u00d7 10\u207b\u2078 Ci/kg.",
    symbol: "nCi/kg"
  },
  kilobecquerels_per_kilogram: {
    name: "Kilobecquerels per kilogram",
    description: "The kilobecquerel per kilogram (kBq/kg) equals 10\u00b3 Bq/kg = 1 Bq/g. Standard unit for moderately contaminated environmental samples: post-Fukushima Japanese food monitoring reports kBq/kg for agricultural products; WHO and IAEA guidelines for radioactively contaminated soil use kBq/kg thresholds for agricultural intervention. 1 kBq/kg = 10\u00b3 Bq/kg = 1 Bq/g.",
    symbol: "kBq/kg"
  },
  microcuries_per_kilogram: {
    name: "Microcuries per kilogram",
    description: "The microcurie per kilogram (\u00b5Ci/kg) equals 3.7 \u00d7 10\u2074 Bq/kg = 37 kBq/kg. Used in US nuclear facility waste characterisation and NRC licence conditions for effluent releases; \u00b9\u00b3\u2077Cs body burden in heavily exposed Chernobyl liquidators reached the \u00b5Ci/kg level in the immediate aftermath. 1 \u00b5Ci/kg = 3.7 \u00d7 10\u2074 Bq/kg.",
    symbol: "\u00b5Ci/kg"
  },
  megabecquerels_per_kilogram: {
    name: "Megabecquerels per kilogram",
    description: "The megabecquerel per kilogram (MBq/kg) equals 10\u2076 Bq/kg. Typical for enriched or irradiated materials: moderately irradiated nuclear fuel after cooling has fission-product specific activities in the MBq/kg to GBq/kg range for individual nuclides; \u2089\u2090Sr in high-dose-rate brachytherapy sources is characterised in MBq/kg. 1 MBq/kg = 10\u2076 Bq/kg.",
    symbol: "MBq/kg"
  },
  millicuries_per_kilogram: {
    name: "Millicuries per kilogram",
    description: "The millicurie per kilogram (mCi/kg) equals 3.7 \u00d7 10\u2077 Bq/kg = 37 MBq/kg. Radiopharmaceutical preparations are sometimes characterised in mCi/kg when assessing organ uptake per body mass; \u2079\u2079mTc-labelled compounds have specific activities in the mCi/\u00b5mol range that translate to high mCi/kg values. 1 mCi/kg = 3.7 \u00d7 10\u2077 Bq/kg.",
    symbol: "mCi/kg"
  },
  gigabecquerels_per_kilogram: {
    name: "Gigabecquerels per kilogram",
    description: "The gigabecquerel per kilogram (GBq/kg) equals 10\u2079 Bq/kg. Characterises specific activity of cyclotron-produced short-lived nuclides: \u00b9\u2078F batches from a medical cyclotron have specific activities of 10\u2074-10\u2075 GBq/\u00b5mol; \u2079\u2079mTc eluates from a Mo/Tc generator are in the GBq/kg concentration range for clinical use. 1 GBq/kg = 10\u2079 Bq/kg.",
    symbol: "GBq/kg"
  },
  curies_per_kilogram: {
    name: "Curies per kilogram",
    description: "The curie per kilogram (Ci/kg) equals 3.7 \u00d7 10\u00b9\u2070 Bq/kg = 37 GBq/kg. High specific activity sealed sources: \u00b9\u00b9\u00b9In and \u00b9\u00b3\u00b3Xe produced in accelerators are characterised in Ci/kg; \u2074\u00b2K formed by neutron activation in high-potassium food samples in research irradiators reaches Ci/kg values. 1 Ci/kg = 3.7 \u00d7 10\u00b9\u2070 Bq/kg.",
    symbol: "Ci/kg"
  },
  terabecquerels_per_kilogram: {
    name: "Terabecquerels per kilogram",
    description: "The terabecquerel per kilogram (TBq/kg) equals 10\u00b9\u00b2 Bq/kg. Applies to short-lived nuclides of high specific activity: freshly separated \u00b9\u00b3\u00b9I from reactor fission exceeds 1 TBq/kg; \u2076\u2070Co sealed brachytherapy sources and \u00b9\u2079\u00b2Ir radiography sources exhibit specific activities of several TBq/g, i.e. thousands of TBq/kg. 1 TBq/kg = 10\u00b9\u00b2 Bq/kg.",
    symbol: "TBq/kg"
  },
  kilocuries_per_kilogram: {
    name: "Kilocuries per kilogram",
    description: "The kilocurie per kilogram (kCi/kg) equals 3.7 \u00d7 10\u00b9\u00b3 Bq/kg = 1 Ci/g. The specific activity of carrier-free \u2076\u2070Co is ~1124 Ci/g (= 1.124 kCi/kg or 4.16 \u00d7 10\u00b9\u00b3 Bq/kg); many radionuclides produced without stable carrier have specific activities in the kCi/kg range. 1 kCi/kg = 3.7 \u00d7 10\u00b9\u00b3 Bq/kg = 1 Ci/g.",
    symbol: "kCi/kg"
  },
  petabecquerels_per_kilogram: {
    name: "Petabecquerels per kilogram",
    description: "The petabecquerel per kilogram (PBq/kg) equals 10\u00b9\u2075 Bq/kg. Carrier-free short-lived nuclides reach PBq/kg: freshly produced \u2079\u2079mTc eluate at high specific activity approaches 10\u2074-10\u2075 GBq/mg = PBq/kg; freshly separated \u00b3H gas from lithium targets in accelerators achieves PBq/kg specific activity values. 1 PBq/kg = 10\u00b9\u2075 Bq/kg = 10\u00b3 TBq/kg.",
    symbol: "PBq/kg"
  },
  megacuries_per_kilogram: {
    name: "Megacuries per kilogram",
    description: "The megacurie per kilogram (MCi/kg) equals 3.7 \u00d7 10\u00b9\u2076 Bq/kg. Encountered for extremely high-specific-activity nuclides: carrier-free \u00b2\u00b2\u00b3Ra (\u03b1-emitter, t\u00bd = 11.43 d) reaches ~50 MCi/kg; polonium-210 freshly separated from bismuth targets in research reactors has a specific activity near 4.5 MCi/g = 4.5 \u00d7 10\u00b3 MCi/kg. 1 MCi/kg = 3.7 \u00d7 10\u00b9\u2076 Bq/kg.",
    symbol: "MCi/kg"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toBecquerelsPerKilogram);
}

function convertSpecificActivity() {
  convertFactorBased(toBecquerelsPerKilogram);
}

initConverterPage();
