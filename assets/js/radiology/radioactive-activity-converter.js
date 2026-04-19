// Base unit: becquerel (Bq) - the SI unit of radioactive activity.
// Activity A [T\u207b\u00b9] counts expected nuclear disintegrations per unit time: A = \u2212dN/dt.
// All factors express how many Bq equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Bq = 1 s\u207b\u00b9  (one nuclear disintegration per second - SI coherent unit)
//   1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq  (exact; curie defined at 1975 BIPM conference)
//   1 Rd = 10\u2076 Bq           (exact; rutherford, Montreal Conference 1946)
//   1 dpm = 1/60 Bq          (exact; one disintegration per minute)
//
// SI prefix becquerel units (all exact by SI prefix definitions):
//   1 fBq = 10\u207b\u00b9\u2075 Bq   1 pBq = 10\u207b\u00b9\u00b2 Bq   1 nBq = 10\u207b\u2079 Bq
//   1 \u00b5Bq = 10\u207b\u2076 Bq    1 mBq = 10\u207b\u00b3 Bq     1 kBq = 10\u00b3 Bq
//   1 MBq = 10\u2076 Bq     1 GBq = 10\u2079 Bq     1 TBq = 10\u00b9\u00b2 Bq
//   1 PBq = 10\u00b9\u2075 Bq    1 EBq = 10\u00b9\u2078 Bq
//
// Curie-based units (all exact: 1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq):
//   1 pCi = 3.7 \u00d7 10\u207b\u00b2 Bq    1 nCi = 37 Bq         1 \u00b5Ci = 3.7 \u00d7 10\u2074 Bq
//   1 mCi = 3.7 \u00d7 10\u2077 Bq     1 Ci  = 3.7 \u00d7 10\u00b9\u2070 Bq  1 kCi = 3.7 \u00d7 10\u00b9\u00b3 Bq
//   1 MCi = 3.7 \u00d7 10\u00b9\u2076 Bq    1 GCi = 3.7 \u00d7 10\u00b9\u2079 Bq

const toBecquerels = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtobecquerels:              1e-15,             // exact: 10\u207b\u00b9\u2075 Bq (SI prefix femto)
  picobecquerels:               1e-12,             // exact: 10\u207b\u00b9\u00b2 Bq (SI prefix pico)
  nanobecquerels:               1e-9,              // exact: 10\u207b\u2079 Bq (SI prefix nano)
  microbecquerels:              1e-6,              // exact: 10\u207b\u2076 Bq (SI prefix micro)
  millibecquerels:              1e-3,              // exact: 10\u207b\u00b3 Bq (SI prefix milli)
  // -- Other sub-becquerel units ---------------------------------------------
  disintegrations_per_minute:   1 / 60,            // exact: 1 dis / 60 s = 1/60 Bq
  picocuries:                   3.7e-2,            // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u00b9\u00b2 = 3.7 \u00d7 10\u207b\u00b2 Bq
  // -- Base unit (SI) --------------------------------------------------------
  becquerels:                   1,                 // reference (base unit)
  // -- Above-becquerel non-SI units ------------------------------------------
  nanocuries:                   37,                // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2079 = 37 Bq
  // -- SI prefix units (kilo and above) --------------------------------------
  kilobecquerels:               1e3,               // exact: 10\u00b3 Bq (SI prefix kilo)
  microcuries:                  3.7e4,             // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2076 = 3.7 \u00d7 10\u2074 Bq
  megabecquerels:               1e6,               // exact: 10\u2076 Bq (SI prefix mega)
  rutherfords:                  1e6,               // exact: 10\u2076 Bq (= 1 MBq; Montreal Conference 1946)
  millicuries:                  3.7e7,             // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u00b3 = 3.7 \u00d7 10\u2077 Bq
  gigabecquerels:               1e9,               // exact: 10\u2079 Bq (SI prefix giga)
  curies:                       3.7e10,            // exact: 3.7 \u00d7 10\u00b9\u2070 Bq (BIPM 1975 definition)
  terabecquerels:               1e12,              // exact: 10\u00b9\u00b2 Bq (SI prefix tera)
  kilocuries:                   3.7e13,            // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u00b3 = 3.7 \u00d7 10\u00b9\u00b3 Bq
  petabecquerels:               1e15,              // exact: 10\u00b9\u2075 Bq (SI prefix peta)
  megacuries:                   3.7e16,            // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u2076 = 3.7 \u00d7 10\u00b9\u2076 Bq
  exabecquerels:                1e18,              // exact: 10\u00b9\u2078 Bq (SI prefix exa)
  gigacuries:                   3.7e19,            // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u2079 = 3.7 \u00d7 10\u00b9\u2079 Bq
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtobecquerels: {
    name: "Femtobecquerels",
    description: "The femtobecquerel (fBq) equals 10\u207b\u00b9\u2075 Bq, used in accelerator mass spectrometry (AMS) to quantify cosmogenic radionuclides (\u00b9\u2070Be, \u00b3\u2076Cl) in ice cores and geological samples. Ultra-low-background counting in deep underground laboratories reaches the fBq/kg level for solar neutrino detector purity assessment. 1 fBq = 10\u207b\u00b9\u2075 Bq = 10\u207b\u00b3 pBq.",
    symbol: "fBq"
  },
  picobecquerels: {
    name: "Picobecquerels",
    description: "The picobecquerel (pBq) equals 10\u207b\u00b9\u00b2 Bq. Environmental monitoring of drinking water reports naturally occurring \u00b2\u00b2\u2076Ra and \u00b2\u00b2\u2078Ra at pBq/L; ultra-low background Geiger counters in underground laboratories detect pBq-level contamination on detector surfaces. 1 pBq = 10\u207b\u00b9\u00b2 Bq = 10\u207b\u00b3 nBq.",
    symbol: "pBq"
  },
  nanobecquerels: {
    name: "Nanobecquerels",
    description: "The nanobecquerel (nBq) equals 10\u207b\u2079 Bq. Atmospheric surveillance for tritium and \u00b9\u2074C near nuclear facilities reports discharge rates in nBq/m\u00b3; EU drinking water directives set indicator activity concentrations for some radionuclides at the nBq/L level. 1 nBq = 10\u207b\u2079 Bq = 10\u207b\u00b3 \u00b5Bq.",
    symbol: "nBq"
  },
  microbecquerels: {
    name: "Microbecquerels",
    description: "The microbecquerel (\u00b5Bq) equals 10\u207b\u2076 Bq. Nuclear power plant effluent monitoring reports \u00b9\u00b3\u2077Cs and \u2079\u2070Sr in air and water at \u00b5Bq/m\u00b3; dietary \u00b2\u00b9\u2070Po intake from seafood consumption is assessed at \u00b5Bq per daily serving in food safety surveys. 1 \u00b5Bq = 10\u207b\u2076 Bq = 10\u207b\u00b3 mBq.",
    symbol: "\u00b5Bq"
  },
  millibecquerels: {
    name: "Millibecquerels",
    description: "The millibecquerel (mBq) equals 10\u207b\u00b3 Bq. Radiological surface contamination surveys in nuclear facilities use mBq/cm\u00b2 alert levels for alpha and beta emitters; uranium and plutonium bioassay in urine from occupationally exposed workers is reported in mBq/sample. 1 mBq = 10\u207b\u00b3 Bq = 10\u207b\u00b3 s\u207b\u00b9.",
    symbol: "mBq"
  },
  disintegrations_per_minute: {
    name: "Disintegrations per minute",
    description: "The disintegration per minute (dpm) equals exactly 1/60 Bq \u2248 16.7 mBq. Standard output unit of liquid scintillation counters (LSC) in biochemical and biomedical research for \u00b3H and \u00b9\u2074C tracer assays; radioimmunoassay protocols report results in dpm/well. 1 dpm = 1/60 Bq = 60 dph.",
    symbol: "dpm"
  },
  picocuries: {
    name: "Picocuries",
    description: "The picocurie (pCi) equals 3.7 \u00d7 10\u207b\u00b2 Bq = 37 mBq. The US EPA uses pCi/L as the standard unit for indoor radon (action level: 4 pCi/L) and drinking water radon; NRC licence exemption thresholds and natural uranium activity in groundwater are expressed in pCi/L. 1 pCi = 3.7 \u00d7 10\u207b\u00b2 Bq.",
    symbol: "pCi"
  },
  becquerels: {
    name: "Becquerels",
    description: "The becquerel (Bq) is the SI coherent unit of radioactivity, defined as exactly one nuclear disintegration per second. Named after Henri Becquerel (discoverer of radioactivity, 1896), it replaced the curie in SI. Household smoke detector \u00b2\u2074\u00b9Am sources contain ~30 kBq; a banana contains ~15 Bq of \u2074\u2070K. 1 Bq = 1 s\u207b\u00b9.",
    symbol: "Bq"
  },
  nanocuries: {
    name: "Nanocuries",
    description: "The nanocurie (nCi) equals 37 Bq. Sealed radioactive sources in laboratory instruments (electron-capture detectors in GC, ionisation chambers) are licensed in nCi; nCi is the working unit on US NRC licence forms and instrument calibration certificates for low-level sources. 1 nCi = 37 Bq = 3.7 \u00d7 10\u207b\u2078 Ci.",
    symbol: "nCi"
  },
  kilobecquerels: {
    name: "Kilobecquerels",
    description: "The kilobecquerel (kBq) equals 10\u00b3 Bq. Food safety authorities report \u00b9\u00b3\u2077Cs contamination in kBq/kg (Codex Alimentarius and EC 733/2008 limits); \u00b9\u00b2\u2075I tracers in radioimmunoassay kits are typically 3.7-18.5 kBq per well. 1 kBq = 10\u00b3 Bq = 1000 Bq.",
    symbol: "kBq"
  },
  microcuries: {
    name: "Microcuries",
    description: "The microcurie (\u00b5Ci) equals 3.7 \u00d7 10\u2074 Bq = 37 kBq. Sealed sources for educational and bench-top laboratory use are licensed up to 1-10 \u00b5Ci under US NRC 10 CFR 30.18; small-animal PET imaging doses of \u00b9\u2078F in preclinical research are expressed in \u00b5Ci. 1 \u00b5Ci = 3.7 \u00d7 10\u2074 Bq.",
    symbol: "\u00b5Ci"
  },
  megabecquerels: {
    name: "Megabecquerels",
    description: "The megabecquerel (MBq) equals 10\u2076 Bq and is the standard clinical nuclear medicine unit outside the US. \u2079\u2079mTc bone scans use 740 MBq; \u00b9\u2078F-FDG PET scans use 370 MBq; \u00b9\u00b3\u00b9I diagnostic thyroid scans use 185-370 MBq. European and Australian protocols specify all doses in MBq. 1 MBq = 10\u2076 Bq.",
    symbol: "MBq"
  },
  rutherfords: {
    name: "Rutherfords",
    description: "The rutherford (Rd) equals exactly 10\u2076 Bq = 1 MBq. Proposed by Ernest Rutherford and adopted at the 1946 Montreal Conference on Radioactivity as a convenient unit for large sources. Superseded by the MBq in SI but still encountered in older nuclear physics and reactor engineering literature. 1 Rd = 10\u2076 Bq.",
    symbol: "Rd"
  },
  millicuries: {
    name: "Millicuries",
    description: "The millicurie (mCi) equals 3.7 \u00d7 10\u2077 Bq = 37 MBq. The primary clinical nuclear medicine unit in the US: \u00b9\u2078F-FDG PET doses are 8-15 mCi; \u2079\u2079mTc cardiac stress tests use 25-35 mCi; \u00b9\u00b3\u00b9I hyperthyroidism therapy uses 5-30 mCi. US pharmacopeia and NRC regulations specify doses in mCi. 1 mCi = 3.7 \u00d7 10\u2077 Bq.",
    symbol: "mCi"
  },
  gigabecquerels: {
    name: "Gigabecquerels",
    description: "The gigabecquerel (GBq) equals 10\u2079 Bq. Therapeutic radiopharmaceuticals are dosed in GBq: \u00b9\u2077\u2077Lu-PSMA prostate cancer therapy uses 7.4 GBq per cycle; \u00b9\u00b3\u00b9I thyroid cancer ablation uses 3.7-7.4 GBq; \u00b2\u00b2\u00b3Ra-dichloride (Xofigo) bone metastasis therapy ~3-5 GBq per injection. 1 GBq = 10\u2079 Bq.",
    symbol: "GBq"
  },
  curies: {
    name: "Curies",
    description: "The curie (Ci) equals exactly 3.7 \u00d7 10\u00b9\u2070 Bq = 37 GBq, originally defined as the activity of 1 g of \u00b2\u00b2\u2076Ra. Still widely used in the US: \u2076\u2070Co teletherapy sources are 5000-15000 Ci; \u00b9\u00b3\u2077Cs blood irradiators are 1000-40000 Ci; NRC source licences for industrial radiography cite Ci limits. 1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq.",
    symbol: "Ci"
  },
  terabecquerels: {
    name: "Terabecquerels",
    description: "The terabecquerel (TBq) equals 10\u00b9\u00b2 Bq. Medical cyclotron \u00b9\u2078F production batches yield 0.1-1 TBq; \u2079\u2079Mo/\u2079\u2079mTc generator lots for hospital nuclear medicine departments are shipped as multi-TBq consignments; \u00b9\u2079\u00b2Ir industrial radiography sources are rated up to 5 TBq. 1 TBq = 10\u00b9\u00b2 Bq.",
    symbol: "TBq"
  },
  kilocuries: {
    name: "Kilocuries",
    description: "The kilocurie (kCi) equals 3.7 \u00d7 10\u00b9\u00b3 Bq. \u2076\u2070Co and \u00b9\u00b3\u2077Cs blood irradiation and food sterilisation facilities use 20-200 kCi sources; research reactor fission product inventories are characterised in kCi; \u2079\u2070Sr/\u2079\u2070Y radioisotope thermoelectric generators (RTGs) contain 10-150 kCi. 1 kCi = 3.7 \u00d7 10\u00b9\u00b3 Bq.",
    symbol: "kCi"
  },
  petabecquerels: {
    name: "Petabecquerels",
    description: "The petabecquerel (PBq) equals 10\u00b9\u2075 Bq. The Chernobyl accident (1986) released ~5200 PBq of noble gases and ~1760 PBq of \u00b9\u00b3\u00b9I; Fukushima Daiichi (2011) released 400-900 PBq \u00b9\u00b3\u00b9I-equivalent; global \u2078\u2075Kr inventory from nuclear operations is ~1300 PBq. 1 PBq = 10\u00b9\u2075 Bq = 10\u00b3 TBq.",
    symbol: "PBq"
  },
  megacuries: {
    name: "Megacuries",
    description: "The megacurie (MCi) equals 3.7 \u00d7 10\u00b9\u2076 Bq. Total radioactive inventory of a large nuclear power reactor core at shutdown is ~2000-10000 MCi; US atmospheric nuclear weapons tests released ~12000 MCi of \u00b9\u00b3\u00b9I globally; high-level nuclear waste repositories are characterised in MCi. 1 MCi = 3.7 \u00d7 10\u00b9\u2076 Bq.",
    symbol: "MCi"
  },
  exabecquerels: {
    name: "Exabecquerels",
    description: "The exabecquerel (EBq) equals 10\u00b9\u2078 Bq. The global inventory of \u2074\u2070K in the Earth's oceans is ~17 EBq; atmospheric nuclear weapons testing (1945-1963) deposited ~2 EBq of \u00b9\u2074C globally; total natural radioactivity in the human body worldwide sums to ~10 EBq. 1 EBq = 10\u00b9\u2078 Bq = 10\u00b3 PBq.",
    symbol: "EBq"
  },
  gigacuries: {
    name: "Gigacuries",
    description: "The gigacurie (GCi) equals 3.7 \u00d7 10\u00b9\u2079 Bq. The total fission product inventory of a 1 GWe nuclear power reactor at equilibrium is ~0.5 GCi; global spent fuel inventories worldwide exceed 10 GCi; total reactor-produced tritium in the world's oceans is estimated at ~1 GCi. 1 GCi = 3.7 \u00d7 10\u00b9\u2079 Bq.",
    symbol: "GCi"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toBecquerels);
}

function convertRadioactiveActivity() {
  convertFactorBased(toBecquerels);
}

initConverterPage();
