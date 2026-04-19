// Base unit: gray (Gy) - the SI coherent unit of absorbed radiation dose.
// Absorbed dose D [L\u00b2 T\u207b\u00b2] measures energy deposited per unit mass of matter: D = dE/dm.
// All factors express how many Gy equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Gy  = 1 J/kg = 1 m\u00b2/s\u00b2                     (SI coherent, ICRU Report 33, 1980)
//   1 rad = 100 erg/g = 0.01 J/kg = 0.01 Gy      (exact; defined 1953 ICRU)
//   1 erg/g = 10\u207b\u2077 J / 10\u207b\u00b3 kg = 10\u207b\u2074 Gy             (exact; CGS unit)
//
// SI prefix gray units (all exact by SI prefix definitions):
//   1 fGy = 10\u207b\u00b9\u2075 Gy    1 pGy = 10\u207b\u00b9\u00b2 Gy    1 nGy = 10\u207b\u2079 Gy
//   1 \u00b5Gy = 10\u207b\u2076 Gy     1 mGy = 10\u207b\u00b3 Gy     1 kGy = 10\u00b3 Gy
//   1 MGy = 10\u2076 Gy
//
// Rad-based units (1 rad = 0.01 Gy - exact):
//   1 \u00b5rad = 10\u207b\u2076 \u00d7 0.01 Gy = 10\u207b\u2078 Gy
//   1 mrad = 10\u207b\u00b3 \u00d7 0.01 Gy = 10\u207b\u2075 Gy
//   1 krad = 10\u00b3  \u00d7 0.01 Gy = 10  Gy
//   1 Mrad = 10\u2076  \u00d7 0.01 Gy = 10\u2074 Gy

const toGrays = {
  // -- SI prefix gray units (smallest to largest) ----------------------------
  femtograys:          1e-15,             // exact: 10\u207b\u00b9\u2075 Gy (SI prefix femto)
  picograys:           1e-12,             // exact: 10\u207b\u00b9\u00b2 Gy (SI prefix pico)
  nanograys:           1e-9,              // exact: 10\u207b\u2079 Gy (SI prefix nano)
  // -- Rad-based sub-microgray -----------------------------------------------
  microrads:           1e-8,              // exact: 10\u207b\u2076 \u00d7 0.01 = 10\u207b\u2078 Gy
  // -- SI prefix (continued) -------------------------------------------------
  micrograys:          1e-6,              // exact: 10\u207b\u2076 Gy (SI prefix micro)
  // -- Rad-based sub-milligray -----------------------------------------------
  millirads:           1e-5,              // exact: 10\u207b\u00b3 \u00d7 0.01 = 10\u207b\u2075 Gy
  // -- CGS unit --------------------------------------------------------------
  ergs_per_gram:       1e-4,              // exact: 10\u207b\u2077 J / 10\u207b\u00b3 kg = 10\u207b\u2074 Gy
  // -- SI prefix (continued) -------------------------------------------------
  milligrays:          1e-3,              // exact: 10\u207b\u00b3 Gy (SI prefix milli)
  // -- Non-SI (rad) ----------------------------------------------------------
  rads:                0.01,              // exact: 100 erg/g = 0.01 J/kg = 0.01 Gy (ICRU 1953)
  // -- SI base unit ----------------------------------------------------------
  grays:               1,                 // reference (base unit)
  // -- Rad-based kilo --------------------------------------------------------
  kilorads:            10,                // exact: 10\u00b3 \u00d7 0.01 = 10 Gy
  // -- SI prefix (continued) -------------------------------------------------
  kilograys:           1e3,               // exact: 10\u00b3 Gy (SI prefix kilo)
  // -- Rad-based mega --------------------------------------------------------
  megarads:            1e4,               // exact: 10\u2076 \u00d7 0.01 = 10\u2074 Gy
  // -- SI prefix (continued) -------------------------------------------------
  megagrays:           1e6,               // exact: 10\u2076 Gy (SI prefix mega)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtograys: {
    name: "Femtograys",
    description: "The femtogray (fGy) equals 10\u207b\u00b9\u2075 Gy, used in radiation biology to characterise the dose deposited by a single low-energy Auger electron cascade or a single traversal of a low-LET particle through a cell nucleus. Monte Carlo microdosimetry simulations of targeted radionuclide therapy report subcellular doses at the fGy level. 1 fGy = 10\u207b\u00b9\u2075 Gy = 10\u207b\u00b3 pGy.",
    symbol: "fGy"
  },
  picograys: {
    name: "Picograys",
    description: "The picogray (pGy) equals 10\u207b\u00b9\u00b2 Gy. Microdosimetry simulations of \u03b1-particle traversals through single cells report mean specific energies in the pGy range; computed dose kernels for \u00b2\u00b9\u2070At and \u002121\u00b3Bi targeted alpha therapy on individual cell clusters are expressed in pGy. 1 pGy = 10\u207b\u00b9\u00b2 Gy = 10\u207b\u00b3 nGy.",
    symbol: "pGy"
  },
  nanograys: {
    name: "Nanograys",
    description: "The nanogray (nGy) equals 10\u207b\u2079 Gy. Background cosmic-ray dose rate at sea level is ~0.03-0.05 nGy/s; environmental low-dose-rate studies of DNA damage in cultured cells use nGy doses delivered over days; regulatory derived investigation levels for some radionuclides in food correspond to organ doses in nGy. 1 nGy = 10\u207b\u2079 Gy = 10\u207b\u00b3 \u00b5Gy.",
    symbol: "nGy"
  },
  microrads: {
    name: "Microrads",
    description: "The microrad (\u00b5rad) equals 10\u207b\u2076 rad = 10\u207b\u2078 Gy. Used in legacy US radiological instrumentation calibration documentation for very low-level survey instrument thresholds; some older NRC and EPA radiation protection records quote environmental dose rates in \u00b5rad/h when modern instruments report nGy/h. 1 \u00b5rad = 10\u207b\u2078 Gy = 10\u207b\u00b2 \u00b5Gy.",
    symbol: "\u00b5rad"
  },
  micrograys: {
    name: "Micrograys",
    description: "The microgray (\u00b5Gy) equals 10\u207b\u2076 Gy. Typical organ doses from diagnostic X-ray procedures: chest X-ray ~0.01-0.1 \u00b5Gy; mammography mean glandular dose ~1-3 mGy (i.e. 1000-3000 \u00b5Gy); dental bitewing ~1-5 \u00b5Gy. IAEA Safety Reports quote entrance surface doses in \u00b5Gy for patient dose surveys. 1 \u00b5Gy = 10\u207b\u2076 Gy.",
    symbol: "\u00b5Gy"
  },
  millirads: {
    name: "Millirads",
    description: "The millirad (mrad) equals 10\u207b\u00b3 rad = 10\u207b\u2075 Gy = 10 \u00b5Gy. Older US health physics reports and NRC licence conditions quote occupational extremity doses in mrad; some film badge dosimetry reports still use mrad for historical continuity. 1 mrad = 10\u207b\u00b3 rad = 10\u207b\u2075 Gy = 10 \u00b5Gy.",
    symbol: "mrad"
  },
  ergs_per_gram: {
    name: "Ergs per gram",
    description: "The erg per gram (erg/g) equals exactly 10\u207b\u2074 Gy and is the CGS-Gaussian unit of absorbed dose. Because 1 rad was originally defined as 100 erg/g, this unit is directly linked to the historical radiation system. Still found in older nuclear physics and health physics texts predating SI adoption. 1 erg/g = 10\u207b\u2074 Gy = 0.1 mGy.",
    symbol: "erg/g"
  },
  milligrays: {
    name: "Milligrays",
    description: "The milligray (mGy) equals 10\u207b\u00b3 Gy and is the standard unit for diagnostic radiology patient doses. CT head scan ~20-60 mGy; abdominal CT ~10-30 mGy; mammography mean glandular dose ~1-3 mGy. IAEA and EU medical exposure directives set diagnostic reference levels in mGy. 1 mGy = 10\u207b\u00b3 Gy = 0.1 rad.",
    symbol: "mGy"
  },
  rads: {
    name: "Rads",
    description: "The rad (rad) equals exactly 0.01 Gy = 100 erg/g. The pre-SI unit of absorbed dose, defined by the ICRU in 1953, still widely used in the US in radiation therapy (cGy = rad numerically), radiation biology, and NRC regulations. Whole-body 50% lethal dose (LD50) for humans ~350-450 rad. 1 rad = 0.01 Gy = 1 cGy.",
    symbol: "rad"
  },
  grays: {
    name: "Grays",
    description: "The gray (Gy) is the SI coherent unit of absorbed radiation dose, defined as 1 joule of energy deposited per kilogram of matter. Named after Harold Gray (British radiobiologist, 1905-1965). Used globally in radiotherapy: curative tumour doses 40-80 Gy fractionated; total body irradiation before bone marrow transplant 12-14 Gy. 1 Gy = 1 J/kg = 100 rad.",
    symbol: "Gy"
  },
  kilorads: {
    name: "Kilorads",
    description: "The kilorad (krad) equals 10 Gy. Used in radiation hardness testing of electronics for space and military applications: commercial components typically withstand 0.1-10 krad(Si); military-grade components are specified to 100-1000 krad(Si). Semiconductor device qualification standards (MIL-STD-883, ESCC 22900) quote total ionising dose in krad. 1 krad = 10 Gy.",
    symbol: "krad"
  },
  kilograys: {
    name: "Kilograys",
    description: "The kilogray (kGy) equals 10\u00b3 Gy and is the standard unit for radiation processing. Food irradiation: 1-10 kGy for insect disinfestation and sprout inhibition; medical device sterilisation standard dose is 25 kGy (ISO 11137); polymer crosslinking and cable insulation curing use 50-200 kGy. 1 kGy = 10\u00b3 Gy = 10\u2075 rad.",
    symbol: "kGy"
  },
  megarads: {
    name: "Megarads",
    description: "The megarad (Mrad) equals 10\u2076 rad = 10\u2074 Gy. Used in radiation hardening of electronics and wire/cable insulation: cross-linked polyethylene (XLPE) cable insulation is cured at 5-20 Mrad; some legacy radiation hardness assurance (RHA) test reports for space electronics quote doses in Mrad(Si). 1 Mrad = 10\u2074 Gy = 10 kGy.",
    symbol: "Mrad"
  },
  megagrays: {
    name: "Megagrays",
    description: "The megagray (MGy) equals 10\u2076 Gy. Doses in the MGy range destroy virtually all molecular structures. Radiation chemistry of water reaches radical recombination equilibrium above 1 MGy; neutron-irradiated reactor pressure vessel steels accumulate fast-neutron damage equivalent to 0.01-1 MGy over a 40-year lifetime. 1 MGy = 10\u2076 Gy = 10\u2078 rad.",
    symbol: "MGy"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toGrays);
}

function convertAbsorbedDose() {
  convertFactorBased(toGrays);
}

initConverterPage();
