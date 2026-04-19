// Base unit: becquerel per cubic metre (Bq/m\u00b3) - the SI derived unit of activity concentration.
// Activity concentration C [T\u207b\u00b9 L\u207b\u00b3] gives the radioactive activity per unit volume of a medium.
// All factors express how many Bq/m\u00b3 equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Bq/m\u00b3  = 1 s\u207b\u00b9 m\u207b\u00b3  (SI coherent derived unit; no special name)
//   1 Ci     = 3.7 \u00d7 10\u00b9\u2070 Bq   (exact; curie, BIPM 1975)
//   1 dpm    = 1/60 Bq           (exact; one disintegration per minute)
//   1 L      = 10\u207b\u00b3 m\u00b3           (exact; litre, SI accepted)
//   1 mL     = 10\u207b\u2076 m\u00b3           (exact; millilitre = cm\u00b3)
//
// SI prefix Bq/m\u00b3 units (all exact by SI prefix definitions):
//   1 fBq/m\u00b3 = 10\u207b\u00b9\u2075 Bq/m\u00b3   1 pBq/m\u00b3 = 10\u207b\u00b9\u00b2 Bq/m\u00b3   1 nBq/m\u00b3 = 10\u207b\u2079 Bq/m\u00b3
//   1 \u00b5Bq/m\u00b3 = 10\u207b\u2076 Bq/m\u00b3   1 mBq/m\u00b3 = 10\u207b\u00b3 Bq/m\u00b3    1 kBq/m\u00b3 = 10\u00b3 Bq/m\u00b3 (= 1 Bq/L)
//   1 MBq/m\u00b3 = 10\u2076 Bq/m\u00b3    1 GBq/m\u00b3 = 10\u2079 Bq/m\u00b3    1 TBq/m\u00b3 = 10\u00b9\u00b2 Bq/m\u00b3
//
// dpm-based per-volume units (1 dpm = 1/60 Bq - exact):
//   1 dpm/m\u00b3 = 1/60 Bq/m\u00b3         (1 dpm per cubic metre)
//   1 dpm/L  = 1000/60 Bq/m\u00b3      (1 dpm per litre; 1 L = 10\u207b\u00b3 m\u00b3)
//   1 dpm/mL = 10\u2076/60 Bq/m\u00b3       (1 dpm per millilitre; 1 mL = 10\u207b\u2076 m\u00b3)
//
// Curie-based per-cubic-metre units (1 Ci = 3.7 \u00d7 10\u00b9\u2070 Bq - exact):
//   1 pCi/m\u00b3 = 3.7 \u00d7 10\u207b\u00b2 Bq/m\u00b3    1 nCi/m\u00b3 = 37 Bq/m\u00b3 (= 1 pCi/L)
//   1 \u00b5Ci/m\u00b3 = 3.7 \u00d7 10\u2074 Bq/m\u00b3     1 mCi/m\u00b3 = 3.7 \u00d7 10\u2077 Bq/m\u00b3
//   1 Ci/m\u00b3  = 3.7 \u00d7 10\u00b9\u2070 Bq/m\u00b3

const toBecquerelsPerCubicMetre = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtobecquerels_per_cubic_metre:             1e-15,          // exact: 10\u207b\u00b9\u2075 Bq/m\u00b3 (SI prefix femto)
  picobecquerels_per_cubic_metre:              1e-12,          // exact: 10\u207b\u00b9\u00b2 Bq/m\u00b3 (SI prefix pico)
  nanobecquerels_per_cubic_metre:              1e-9,           // exact: 10\u207b\u2079 Bq/m\u00b3 (SI prefix nano)
  microbecquerels_per_cubic_metre:             1e-6,           // exact: 10\u207b\u2076 Bq/m\u00b3 (SI prefix micro)
  millibecquerels_per_cubic_metre:             1e-3,           // exact: 10\u207b\u00b3 Bq/m\u00b3 (SI prefix milli)
  // -- dpm/m\u00b3 (between mBq/m\u00b3 and pCi/m\u00b3) -------------------------------------
  disintegrations_per_minute_per_cubic_metre:  1 / 60,         // exact: 1/60 Bq/m\u00b3 (1 dpm/m\u00b3; 1 dpm = 1/60 Bq)
  // -- Curie-based (below base) ----------------------------------------------
  picocuries_per_cubic_metre:                  3.7e-2,         // exact: 3.7 \u00d7 10\u207b\u00b2 Bq/m\u00b3 (= 10\u207b\u00b9\u00b2 Ci/m\u00b3)
  // -- Base unit (SI) --------------------------------------------------------
  becquerels_per_cubic_metre:                  1,              // reference (base unit)
  // -- dpm/L (between Bq/m\u00b3 and nCi/m\u00b3) --------------------------------------
  disintegrations_per_minute_per_litre:        1000 / 60,      // exact: 1000/60 Bq/m\u00b3 (1 dpm/L; 1 L = 10\u207b\u00b3 m\u00b3)
  // -- Curie-based (continued) -----------------------------------------------
  nanocuries_per_cubic_metre:                  37,             // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2079 = 37 Bq/m\u00b3 (= 1 pCi/L)
  // -- SI prefix (kilo) ------------------------------------------------------
  kilobecquerels_per_cubic_metre:              1e3,            // exact: 10\u00b3 Bq/m\u00b3 (SI prefix kilo; = 1 Bq/L)
  // -- dpm/mL (between kBq/m\u00b3 and \u00b5Ci/m\u00b3) --------------------------------------
  disintegrations_per_minute_per_millilitre:   1e6 / 60,       // exact: 10\u2076/60 Bq/m\u00b3 (1 dpm/mL; 1 mL = 10\u207b\u2076 m\u00b3)
  // -- Curie-based (continued) -----------------------------------------------
  microcuries_per_cubic_metre:                 3.7e4,          // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u2076 = 3.7 \u00d7 10\u2074 Bq/m\u00b3
  // -- SI prefix (mega) ------------------------------------------------------
  megabecquerels_per_cubic_metre:              1e6,            // exact: 10\u2076 Bq/m\u00b3 (SI prefix mega)
  // -- Curie-based (continued) -----------------------------------------------
  millicuries_per_cubic_metre:                 3.7e7,          // exact: 3.7 \u00d7 10\u00b9\u2070 \u00d7 10\u207b\u00b3 = 3.7 \u00d7 10\u2077 Bq/m\u00b3
  // -- SI prefix (giga) ------------------------------------------------------
  gigabecquerels_per_cubic_metre:              1e9,            // exact: 10\u2079 Bq/m\u00b3 (SI prefix giga)
  // -- Curie-based (continued) -----------------------------------------------
  curies_per_cubic_metre:                      3.7e10,         // exact: 3.7 \u00d7 10\u00b9\u2070 Bq/m\u00b3
  // -- SI prefix (tera) ------------------------------------------------------
  terabecquerels_per_cubic_metre:              1e12,           // exact: 10\u00b9\u00b2 Bq/m\u00b3 (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtobecquerels_per_cubic_metre: {
    name: "Femtobecquerels per cubic metre",
    description: "The femtobecquerel per cubic metre (fBq/m\u00b3) equals 10\u207b\u00b9\u2075 Bq/m\u00b3. Used in ultra-sensitive environmental monitoring - noble gas activities of cosmogenic nuclides (\u00b3\u2076Cl, \u00b9\u2070Be) in deep Antarctic ice cores; air purity screening for underground rare-event physics experiments (dark matter searches, neutrinoless double-beta decay) reaches fBq/m\u00b3 sensitivities. 1 fBq/m\u00b3 = 10\u207b\u00b9\u2075 Bq/m\u00b3.",
    symbol: "fBq/m\u00b3"
  },
  picobecquerels_per_cubic_metre: {
    name: "Picobecquerels per cubic metre",
    description: "The picobecquerel per cubic metre (pBq/m\u00b3) equals 10\u207b\u00b9\u00b2 Bq/m\u00b3. CTBTO International Monitoring System noble gas stations detect \u00b9\u00b3\u00b3Xe and \u00b8\u2075Kr at pBq/m\u00b3 to identify covert nuclear tests; trace \u00b9\u00b3\u2077Cs in pristine ocean-top air over the Pacific and Southern Ocean is measured at pBq/m\u00b3. 1 pBq/m\u00b3 = 10\u207b\u00b9\u00b2 Bq/m\u00b3 = 10\u207b\u00b3 nBq/m\u00b3.",
    symbol: "pBq/m\u00b3"
  },
  nanobecquerels_per_cubic_metre: {
    name: "Nanobecquerels per cubic metre",
    description: "The nanobecquerel per cubic metre (nBq/m\u00b3) equals 10\u207b\u2079 Bq/m\u00b3. Background \u00b9\u00b3\u2077Cs in Northern Hemisphere air averages 10-100 nBq/m\u00b3 from post-Chernobyl and Fukushima residual deposition; \u2079\u2070Sr near nuclear power plants is routinely monitored at nBq/m\u00b3 levels in air samples. 1 nBq/m\u00b3 = 10\u207b\u2079 Bq/m\u00b3 = 10\u207b\u00b3 \u00b5Bq/m\u00b3.",
    symbol: "nBq/m\u00b3"
  },
  microbecquerels_per_cubic_metre: {
    name: "Microbecquerels per cubic metre",
    description: "The microbecquerel per cubic metre (\u00b5Bq/m\u00b3) equals 10\u207b\u2076 Bq/m\u00b3. Routine air sampling at nuclear plant site boundaries reports \u00b9\u00b3\u2077Cs, \u2075\u2078Co, and \u2076\u2070Co at \u00b5Bq/m\u00b3; \u00b2\u00b2\u00b2Rn progeny (\u00b2\u00b9\u2074Pb, \u00b2\u00b9\u2074Bi) in well-ventilated outdoor air are typically tens of \u00b5Bq/m\u00b3. 1 \u00b5Bq/m\u00b3 = 10\u207b\u2076 Bq/m\u00b3 = 10\u207b\u00b3 mBq/m\u00b3.",
    symbol: "\u00b5Bq/m\u00b3"
  },
  millibecquerels_per_cubic_metre: {
    name: "Millibecquerels per cubic metre",
    description: "The millibecquerel per cubic metre (mBq/m\u00b3) equals 10\u207b\u00b3 Bq/m\u00b3. European atmospheric \u00b3H, \u2078\u2075Kr, and \u00b9\u2074C concentrations near nuclear facilities are reported in mBq/m\u00b3; post-Fukushima \u00b9\u00b3\u2074Cs and \u00b9\u00b3\u2077Cs transport across the Pacific was measured at mBq/m\u00b3 at remote monitoring stations. 1 mBq/m\u00b3 = 10\u207b\u00b3 Bq/m\u00b3 = 1 \u00b5Bq/L.",
    symbol: "mBq/m\u00b3"
  },
  disintegrations_per_minute_per_cubic_metre: {
    name: "Disintegrations per minute per cubic metre",
    description: "The disintegration per minute per cubic metre (dpm/m\u00b3) equals exactly 1/60 Bq/m\u00b3 \u2248 16.7 mBq/m\u00b3. Used in legacy US nuclear industry and older radiochemistry literature for low-level airborne radioactivity; some historical derived air concentration (DAC) limit publications cite values in dpm/m\u00b3. 1 dpm/m\u00b3 = 1/60 Bq/m\u00b3 \u2248 16.7 mBq/m\u00b3.",
    symbol: "dpm/m\u00b3"
  },
  picocuries_per_cubic_metre: {
    name: "Picocuries per cubic metre",
    description: "The picocurie per cubic metre (pCi/m\u00b3) equals 3.7 \u00d7 10\u207b\u00b2 Bq/m\u00b3 = 37 mBq/m\u00b3. Used by the US EPA and NRC for outdoor air radioactivity; airborne \u2079\u2070Sr and \u00b9\u00b3\u2077Cs near nuclear facilities are reported in pCi/m\u00b3; NRC occupational derived air concentration (DAC) tables list values in pCi/m\u00b3. 1 pCi/m\u00b3 = 3.7 \u00d7 10\u207b\u00b2 Bq/m\u00b3.",
    symbol: "pCi/m\u00b3"
  },
  becquerels_per_cubic_metre: {
    name: "Becquerels per cubic metre",
    description: "The becquerel per cubic metre (Bq/m\u00b3) is the SI derived unit of activity concentration. The WHO indoor radon reference level is 100 Bq/m\u00b3; EU Directive 2013/59/Euratom sets 300 Bq/m\u00b3 for residential radon in dwellings; normal outdoor \u00b2\u00b2\u00b2Rn averages 5-15 Bq/m\u00b3 globally. 1 Bq/m\u00b3 = 1 s\u207b\u00b9 m\u207b\u00b3.",
    symbol: "Bq/m\u00b3"
  },
  disintegrations_per_minute_per_litre: {
    name: "Disintegrations per minute per litre",
    description: "The disintegration per minute per litre (dpm/L) equals exactly 1000/60 Bq/m\u00b3 \u2248 16.67 Bq/m\u00b3. Used in environmental water and air monitoring with liquid scintillation counting (LSC); \u00b3H activity in river water near nuclear power plant discharges and in groundwater compliance monitoring is commonly reported in dpm/L. 1 dpm/L = 1000/60 Bq/m\u00b3 \u2248 16.67 Bq/m\u00b3.",
    symbol: "dpm/L"
  },
  nanocuries_per_cubic_metre: {
    name: "Nanocuries per cubic metre",
    description: "The nanocurie per cubic metre (nCi/m\u00b3) equals 37 Bq/m\u00b3, identical to 1 picocurie per litre (pCi/L). The US EPA indoor radon action level is 4 pCi/L = 148 Bq/m\u00b3 \u2248 4 nCi/m\u00b3; NRC 10 CFR Part 20 DAC values for several radionuclides are expressed in the nCi/m\u00b3 range. 1 nCi/m\u00b3 = 37 Bq/m\u00b3 = 1 pCi/L.",
    symbol: "nCi/m\u00b3"
  },
  kilobecquerels_per_cubic_metre: {
    name: "Kilobecquerels per cubic metre",
    description: "The kilobecquerel per cubic metre (kBq/m\u00b3) equals 10\u00b3 Bq/m\u00b3 = 1 Bq/L. High indoor radon in poorly ventilated uranium mines and homes above uranium ore bodies routinely exceeds 1-10 kBq/m\u00b3; EU mine remediation targets aim to reduce air radon below 1 kBq/m\u00b3. 1 kBq/m\u00b3 = 10\u00b3 Bq/m\u00b3 = 1 Bq/L.",
    symbol: "kBq/m\u00b3"
  },
  disintegrations_per_minute_per_millilitre: {
    name: "Disintegrations per minute per millilitre",
    description: "The disintegration per minute per millilitre (dpm/mL) equals exactly 10\u2076/60 Bq/m\u00b3 \u2248 16 667 Bq/m\u00b3. Standard output unit of liquid scintillation counters (LSC) in biochemistry for \u00b3H and \u00b9\u2074C radiotracer assays; radioactivity in cell culture media, pharmacokinetic samples, and environmental water is routinely expressed in dpm/mL. 1 dpm/mL = 10\u2076/60 Bq/m\u00b3.",
    symbol: "dpm/mL"
  },
  microcuries_per_cubic_metre: {
    name: "Microcuries per cubic metre",
    description: "The microcurie per cubic metre (\u00b5Ci/m\u00b3) equals 3.7 \u00d7 10\u2074 Bq/m\u00b3 = 37 kBq/m\u00b3. Used in US occupational radiation protection; NRC 10 CFR Part 20 DAC values for moderately radiotoxic nuclides are in the \u00b5Ci/m\u00b3 range; air activity inside nuclear plant buildings after small sealed source incidents is assessed in \u00b5Ci/m\u00b3. 1 \u00b5Ci/m\u00b3 = 3.7 \u00d7 10\u2074 Bq/m\u00b3.",
    symbol: "\u00b5Ci/m\u00b3"
  },
  megabecquerels_per_cubic_metre: {
    name: "Megabecquerels per cubic metre",
    description: "The megabecquerel per cubic metre (MBq/m\u00b3) equals 10\u2076 Bq/m\u00b3 = 1 kBq/L. \u2074\u00b9Ar activity in the air of research reactor buildings during full-power operation commonly reaches MBq/m\u00b3; \u00b3H concentrations in PWR primary coolant water are characterised in MBq/m\u00b3 (= kBq/L). 1 MBq/m\u00b3 = 10\u2076 Bq/m\u00b3.",
    symbol: "MBq/m\u00b3"
  },
  millicuries_per_cubic_metre: {
    name: "Millicuries per cubic metre",
    description: "The millicurie per cubic metre (mCi/m\u00b3) equals 3.7 \u00d7 10\u2077 Bq/m\u00b3. Encountered in nuclear facility primary coolant air monitors during maintenance and in hot cell exhaust ventilation; NRC DAC values for highly radiotoxic alpha emitters (\u00b2\u00b3\u2079Pu, \u00b2\u2074\u00b9Am) use \u00b5Ci/mL = mCi/L units that translate to mCi/m\u00b3 at room scale. 1 mCi/m\u00b3 = 3.7 \u00d7 10\u2077 Bq/m\u00b3.",
    symbol: "mCi/m\u00b3"
  },
  gigabecquerels_per_cubic_metre: {
    name: "Gigabecquerels per cubic metre",
    description: "The gigabecquerel per cubic metre (GBq/m\u00b3) equals 10\u2079 Bq/m\u00b3 = 1 MBq/L. Activity concentrations in reactor primary coolant during power operation (\u00b9\u2076N, \u00b9\u2079O short-lived activation products) and in BWR condensate demineraliser effluents reach GBq/m\u00b3; concentrated liquid radioactive waste from fuel reprocessing streams is characterised in GBq/m\u00b3. 1 GBq/m\u00b3 = 10\u2079 Bq/m\u00b3.",
    symbol: "GBq/m\u00b3"
  },
  curies_per_cubic_metre: {
    name: "Curies per cubic metre",
    description: "The curie per cubic metre (Ci/m\u00b3) equals 3.7 \u00d7 10\u00b9\u2070 Bq/m\u00b3 = 37 GBq/L. Encountered in concentrated radioactive liquid waste from nuclear reprocessing; reactor spent fuel pool water activity after fuel cladding failure; high-level waste (HLW) concentrates in storage tanks at Hanford, Sellafield, and similar sites. 1 Ci/m\u00b3 = 3.7 \u00d7 10\u00b9\u2070 Bq/m\u00b3.",
    symbol: "Ci/m\u00b3"
  },
  terabecquerels_per_cubic_metre: {
    name: "Terabecquerels per cubic metre",
    description: "The terabecquerel per cubic metre (TBq/m\u00b3) equals 10\u00b9\u00b2 Bq/m\u00b3 = 1 GBq/L. Encountered only in the most concentrated radioactive liquids - freshly dissolved spent nuclear fuel in reprocessing dissolver vessels, primary coolant in design-basis loss-of-coolant accident (LOCA) scenarios, and high-level waste (HLW) evaporator concentrates. 1 TBq/m\u00b3 = 10\u00b9\u00b2 Bq/m\u00b3.",
    symbol: "TBq/m\u00b3"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toBecquerelsPerCubicMetre);
}

function convertActivityConcentration() {
  convertFactorBased(toBecquerelsPerCubicMetre);
}

initConverterPage();
