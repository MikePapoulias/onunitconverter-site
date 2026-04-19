// Base unit: sievert (Sv) - the SI unit of equivalent and effective dose.
// Equivalent dose H [L\u00b2 T\u207b\u00b2] weights absorbed dose by radiation type: H = D \u00d7 w_R.
// Effective dose E [L\u00b2 T\u207b\u00b2] further weights by tissue sensitivity: E = \u03a3 w_T \u00d7 H_T.
// All factors express how many Sv equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Sv  = 1 J/kg  (dimensionally same as Gy, but radiation-weighted; ICRU Report 33, 1980)
//   1 rem = 0.01 Sv (exact; 1 rem = 1 rad \u00d7 Q, historically Q = 1 for \u03b3/X-ray/\u03b2)
//
// SI prefix sievert units (all exact by SI prefix definitions):
//   1 fSv = 10\u207b\u00b9\u2075 Sv   1 pSv = 10\u207b\u00b9\u00b2 Sv   1 nSv = 10\u207b\u2079 Sv
//   1 \u00b5Sv = 10\u207b\u2076 Sv    1 mSv = 10\u207b\u00b3 Sv    1 kSv = 10\u00b3 Sv
//   1 MSv = 10\u2076 Sv
//
// Rem-based units (1 rem = 0.01 Sv - exact):
//   1 \u00b5rem = 10\u207b\u2076 \u00d7 0.01 Sv = 10\u207b\u2078 Sv
//   1 mrem = 10\u207b\u00b3 \u00d7 0.01 Sv = 10\u207b\u2075 Sv
//   1 krem = 10\u00b3  \u00d7 0.01 Sv = 10  Sv
//   1 Mrem = 10\u2076  \u00d7 0.01 Sv = 10\u2074 Sv

const toSieverts = {
  // -- SI prefix sievert units (smallest to largest) --------------------------
  femtosieverts:           1e-15,             // exact: 10\u207b\u00b9\u2075 Sv (SI prefix femto)
  picosieverts:            1e-12,             // exact: 10\u207b\u00b9\u00b2 Sv (SI prefix pico)
  nanosieverts:            1e-9,              // exact: 10\u207b\u2079 Sv (SI prefix nano)
  // -- Rem-based sub-microsievert ---------------------------------------------
  microrems:               1e-8,              // exact: 10\u207b\u2076 \u00d7 0.01 = 10\u207b\u2078 Sv
  // -- SI prefix (continued) -------------------------------------------------
  microsieverts:           1e-6,              // exact: 10\u207b\u2076 Sv (SI prefix micro)
  // -- Rem-based sub-millisievert --------------------------------------------
  millirems:               1e-5,              // exact: 10\u207b\u00b3 \u00d7 0.01 = 10\u207b\u2075 Sv
  // -- SI prefix (continued) -------------------------------------------------
  millisieverts:           1e-3,              // exact: 10\u207b\u00b3 Sv (SI prefix milli)
  // -- Non-SI (rem) ----------------------------------------------------------
  rems:                    0.01,              // exact: 1 rem = 0.01 Sv (by definition)
  // -- SI base unit ----------------------------------------------------------
  sieverts:                1,                 // reference (base unit)
  // -- Rem-based kilo --------------------------------------------------------
  kilorems:                10,                // exact: 10\u00b3 \u00d7 0.01 = 10 Sv
  // -- SI prefix (continued) -------------------------------------------------
  kilosieverts:            1e3,               // exact: 10\u00b3 Sv (SI prefix kilo)
  // -- Rem-based mega --------------------------------------------------------
  megarems:                1e4,               // exact: 10\u2076 \u00d7 0.01 = 10\u2074 Sv
  // -- SI prefix (continued) -------------------------------------------------
  megasieverts:            1e6,               // exact: 10\u2076 Sv (SI prefix mega)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtosieverts: {
    name: "Femtosieverts",
    description: "The femtosievert (fSv) equals 10\u207b\u00b9\u2075 Sv. Used in computational nanodosimetry and Monte Carlo particle-transport simulations to characterise the equivalent dose from a single ion traversal through a DNA segment or cell organelle. Ultra-sensitive detector calibration in deep underground laboratories approaches the fSv level. 1 fSv = 10\u207b\u00b9\u2075 Sv = 10\u207b\u00b3 pSv.",
    symbol: "fSv"
  },
  picosieverts: {
    name: "Picosieverts",
    description: "The picosievert (pSv) equals 10\u207b\u00b9\u00b2 Sv. Microdosimetry models of single \u03b1-particle traversals through cell nuclei report mean specific energies in the pSv range; ultra-low-background radiation detectors in deep underground laboratories for dark matter searches are characterised at pSv sensitivity levels. 1 pSv = 10\u207b\u00b9\u00b2 Sv = 10\u207b\u00b3 nSv.",
    symbol: "pSv"
  },
  nanosieverts: {
    name: "Nanosieverts",
    description: "The nanosievert (nSv) equals 10\u207b\u2079 Sv. Ambient environmental gamma dose rates at sea level are ~30-50 nSv/h; portable radiation survey meters and environmental monitoring networks report ambient dose equivalent rates in nSv/h; airborne gamma spectrometry surveys record deposition rates in nSv/h. 1 nSv = 10\u207b\u2079 Sv = 10\u207b\u00b3 \u00b5Sv.",
    symbol: "nSv"
  },
  microrems: {
    name: "Microrems",
    description: "The microrem (\u00b5rem) equals 10\u207b\u2076 rem = 10\u207b\u2078 Sv. Used in legacy US health physics instrumentation and NRC licence documentation for extremely low ambient dose-rate measurements; older EPA environmental surveillance reports quote dose rates in \u00b5rem/h where modern instruments report nSv/h. 1 \u00b5rem = 10\u207b\u2078 Sv = 10\u207b\u00b2 \u00b5Sv.",
    symbol: "\u00b5rem"
  },
  microsieverts: {
    name: "Microsieverts",
    description: "The microsievert (\u00b5Sv) equals 10\u207b\u2076 Sv. Standard unit for individual low-dose exposures: chest X-ray ~20 \u00b5Sv effective dose; transatlantic flight ~80 \u00b5Sv; dental panoramic X-ray ~10-25 \u00b5Sv. Personal electronic dosimeters in medical and industrial workplaces accumulate and display dose in \u00b5Sv. 1 \u00b5Sv = 10\u207b\u2076 Sv.",
    symbol: "\u00b5Sv"
  },
  millirems: {
    name: "Millirems",
    description: "The millirem (mrem) equals 10\u207b\u00b3 rem = 10\u207b\u2075 Sv. Standard unit in US radiation protection: NRC occupational whole-body limit 5000 mrem/year; US average annual background ~300 mrem; EPA drinking-water dose limit 4 mrem/year; dose rates near US nuclear plant boundaries are reported in mrem/year. 1 mrem = 10\u207b\u2075 Sv = 10 \u00b5Sv.",
    symbol: "mrem"
  },
  millisieverts: {
    name: "Millisieverts",
    description: "The millisievert (mSv) equals 10\u207b\u00b3 Sv and is the primary international radiation protection unit. ICRP 103 occupational limit 20 mSv/year averaged over 5 years; worldwide average background ~2.4 mSv/year; abdominal CT ~10 mSv; EU medical exposure directive and IAEA dose limits are quoted in mSv. 1 mSv = 10\u207b\u00b3 Sv = 100 mrem.",
    symbol: "mSv"
  },
  rems: {
    name: "Rems",
    description: "The rem (roentgen equivalent man) equals exactly 0.01 Sv = 1 cSv. The pre-SI unit of equivalent dose, still dominant in US regulation: NRC occupational whole-body limit 5 rem/year; 10 CFR Part 20 exposure limits cited in rem; US military personnel dose records maintained in rem. 1 rem = 0.01 Sv = 1 cSv.",
    symbol: "rem"
  },
  sieverts: {
    name: "Sieverts",
    description: "The sievert (Sv) is the SI coherent unit of equivalent and effective dose, equal to 1 J/kg of absorbed dose weighted by radiation type. Named after Rolf Sievert (Swedish radiophysicist, 1896-1966). Whole-body LD50 for acute exposure ~3-5 Sv; ICRP emergency responder limit 0.25 Sv; acute radiation syndrome threshold ~1 Sv. 1 Sv = 100 rem = 1 J/kg.",
    symbol: "Sv"
  },
  kilorems: {
    name: "Kilorems",
    description: "The kilorem (krem) equals 10\u00b3 rem = 10 Sv. Used in radiation hardness testing of electronics for space and military: total ionising dose (TID) specifications cite krem(Si) levels; prompt nuclear radiation effects on personnel in nuclear weapons effects literature are quoted in krem. 1 krem = 10 Sv = 10\u00b3 rem.",
    symbol: "krem"
  },
  kilosieverts: {
    name: "Kilosieverts",
    description: "The kilosievert (kSv) equals 10\u00b3 Sv. Doses above ~10 Sv are rapidly lethal; the kSv scale is encountered only in extreme irradiator calibration measurements, high-energy accelerator beam-loss scenarios, and nuclear detonation effects calculations at the closest survival radii. 1 kSv = 10\u00b3 Sv = 10\u2075 rem.",
    symbol: "kSv"
  },
  megarems: {
    name: "Megarems",
    description: "The megarem (Mrem) equals 10\u2076 rem = 10\u2074 Sv. Found in legacy radiation hardness assurance (RHA) documentation for space and military electronics: some total ionising dose (TID) test reports specify doses in Mrem(Si); at Mrem-level equivalent doses all organic structures suffer irreparable radiation damage. 1 Mrem = 10\u2074 Sv = 10 kSv.",
    symbol: "Mrem"
  },
  megasieverts: {
    name: "Megasieverts",
    description: "The megasievert (MSv) equals 10\u2076 Sv. Entirely theoretical for biological contexts - severe radiation damage occurs well below 1 MSv. Appears in materials science modelling of extreme radiation environments, theoretical nuclear detonation effects at point of burst, and advanced reactor pressure vessel damage accumulation calculations. 1 MSv = 10\u2076 Sv = 10\u2078 rem.",
    symbol: "MSv"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toSieverts);
}

function convertEquivalentDose() {
  convertFactorBased(toSieverts);
}

initConverterPage();
