// Base unit: coulomb per kilogram (C/kg) - the SI derived unit of radiation exposure.
// Exposure X [T A kg\u207b\u00b9] measures ionisation charge produced in air per unit mass: X = dQ/dm.
// All factors express how many C/kg equal 1 unit of the given measure.
//
// Exact foundations:
//   1 C/kg  (SI derived; no special name; ICRU Report 33, 1980)
//   1 R = 2.58 \u00d7 10\u207b\u2074 C/kg  (exact; roentgen defined by ICRU 1962, adopted into SI)
//
// SI prefix C/kg units (all exact by SI prefix definitions):
//   1 fC/kg = 10\u207b\u00b9\u2075 C/kg   1 pC/kg = 10\u207b\u00b9\u00b2 C/kg   1 nC/kg = 10\u207b\u2079 C/kg
//   1 \u00b5C/kg = 10\u207b\u2076 C/kg   1 mC/kg = 10\u207b\u00b3 C/kg    1 kC/kg = 10\u00b3 C/kg
//
// Roentgen-based units (1 R = 2.58 \u00d7 10\u207b\u2074 C/kg - exact):
//   1 \u00b5R = 2.58 \u00d7 10\u207b\u00b9\u2070 C/kg    1 mR = 2.58 \u00d7 10\u207b\u2077 C/kg
//   1 R  = 2.58 \u00d7 10\u207b\u2074 C/kg     1 kR = 2.58 \u00d7 10\u207b\u00b9 C/kg
//   1 MR = 2.58 \u00d7 10\u00b2 C/kg

const toCoulombsPerKilogram = {
  // -- SI prefix C/kg units (smallest to largest) ----------------------------
  femtocoulombs_per_kilogram:    1e-15,           // exact: 10\u207b\u00b9\u2075 C/kg (SI prefix femto)
  picocoulombs_per_kilogram:     1e-12,           // exact: 10\u207b\u00b9\u00b2 C/kg (SI prefix pico)
  // -- Roentgen sub-nanocoulomb ----------------------------------------------
  microroentgens:                2.58e-10,        // exact: 2.58 \u00d7 10\u207b\u00b9\u2070 C/kg (= 10\u207b\u2076 R)
  // -- SI prefix (continued) -------------------------------------------------
  nanocoulombs_per_kilogram:     1e-9,            // exact: 10\u207b\u2079 C/kg (SI prefix nano)
  // -- Roentgen sub-microcoulomb ---------------------------------------------
  milliroentgens:                2.58e-7,         // exact: 2.58 \u00d7 10\u207b\u2077 C/kg (= 10\u207b\u00b3 R)
  // -- SI prefix (continued) -------------------------------------------------
  microcoulombs_per_kilogram:    1e-6,            // exact: 10\u207b\u2076 C/kg (SI prefix micro)
  // -- Roentgen (historical SI-adjacent unit) --------------------------------
  roentgens:                     2.58e-4,         // exact: 2.58 \u00d7 10\u207b\u2074 C/kg (ICRU 1962 definition)
  // -- SI prefix (continued) -------------------------------------------------
  millicoulombs_per_kilogram:    1e-3,            // exact: 10\u207b\u00b3 C/kg (SI prefix milli)
  // -- Roentgen-based kilo ---------------------------------------------------
  kiloroentgens:                 0.258,           // exact: 2.58 \u00d7 10\u207b\u00b9 C/kg (= 10\u00b3 R)
  // -- SI base unit ----------------------------------------------------------
  coulombs_per_kilogram:         1,               // reference (base unit)
  // -- Roentgen-based mega ---------------------------------------------------
  megaroentgens:                 258,             // exact: 2.58 \u00d7 10\u00b2 C/kg (= 10\u2076 R)
  // -- SI prefix (continued) -------------------------------------------------
  kilocoulombs_per_kilogram:     1e3,             // exact: 10\u00b3 C/kg (SI prefix kilo)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtocoulombs_per_kilogram: {
    name: "Femtocoulombs per kilogram",
    description: "The femtocoulomb per kilogram (fC/kg) equals 10\u207b\u00b9\u2075 C/kg. Used in computational dosimetry to characterise the ionisation yield from single low-energy photon interactions in nanogram air volumes; ultra-sensitive free-air ionisation chamber simulations in microdosimetry research report air-ionisation at the fC/kg level. 1 fC/kg = 10\u207b\u00b9\u2075 C/kg = 10\u207b\u00b3 pC/kg.",
    symbol: "fC/kg"
  },
  picocoulombs_per_kilogram: {
    name: "Picocoulombs per kilogram",
    description: "The picocoulomb per kilogram (pC/kg) equals 10\u207b\u00b9\u00b2 C/kg. Environmental gamma exposure rates in very low background areas approach pC/kg/h; precision ionisation chamber calibration laboratories measure leakage and secondary ionisation currents in terms of pC/kg. 1 pC/kg = 10\u207b\u00b9\u00b2 C/kg = 10\u207b\u00b3 nC/kg.",
    symbol: "pC/kg"
  },
  microroentgens: {
    name: "Microroentgens",
    description: "The microroentgen (\u00b5R) equals 2.58 \u00d7 10\u207b\u00b9\u2070 C/kg. Standard unit for very low environmental gamma dose rates in legacy US instrumentation: airborne radiological surveys over background areas report \u00b5R/h; EPA environmental monitoring network stations historically logged \u00b5R/h for outdoor gamma levels. 1 \u00b5R = 2.58 \u00d7 10\u207b\u00b9\u2070 C/kg.",
    symbol: "\u00b5R"
  },
  nanocoulombs_per_kilogram: {
    name: "Nanocoulombs per kilogram",
    description: "The nanocoulomb per kilogram (nC/kg) equals 10\u207b\u2079 C/kg. Used in modern SI-based environmental radiation monitoring; equivalent to ~3.88 \u00b5R. National metrology institutes calibrate secondary standard ionisation chambers with responses expressed in nC/kg. 1 nC/kg = 10\u207b\u2079 C/kg = 10\u207b\u00b3 \u00b5C/kg.",
    symbol: "nC/kg"
  },
  milliroentgens: {
    name: "Milliroentgens",
    description: "The milliroentgen (mR) equals 2.58 \u00d7 10\u207b\u2077 C/kg. Standard unit in US health physics for area gamma surveys: personal dosimeters and Geiger counters in medical and industrial radiography settings display mR/h; NRC licence conditions often specify dose-rate limits in mR/h at facility boundaries. 1 mR = 2.58 \u00d7 10\u207b\u2077 C/kg.",
    symbol: "mR"
  },
  microcoulombs_per_kilogram: {
    name: "Microcoulombs per kilogram",
    description: "The microcoulomb per kilogram (\u00b5C/kg) equals 10\u207b\u2076 C/kg \u2248 3.88 mR. Used in precision ionisation chamber measurements for X-ray beam quality characterisation; national standards laboratories express free-air chamber calibration factors in \u00b5C/kg. 1 \u00b5C/kg = 10\u207b\u2076 C/kg = 10\u207b\u00b3 mC/kg.",
    symbol: "\u00b5C/kg"
  },
  roentgens: {
    name: "Roentgens",
    description: "The roentgen (R) equals exactly 2.58 \u00d7 10\u207b\u2074 C/kg, the historical unit of X-ray and gamma-ray exposure defined in 1928 (ICRU) and redefined exactly in 1962. Still widely used in the US: field survey instruments read in R/h; NRC and EPA regulations cite R and mR; the Chernobyl accounts famously reported readings in R/h. 1 R = 2.58 \u00d7 10\u207b\u2074 C/kg.",
    symbol: "R"
  },
  millicoulombs_per_kilogram: {
    name: "Millicoulombs per kilogram",
    description: "The millicoulomb per kilogram (mC/kg) equals 10\u207b\u00b3 C/kg \u2248 3.88 R. Used in high-dose-rate X-ray beam calibration protocols (IAEA TRS-398, AAPM TG-51) where free-air chambers accumulate mC/kg of charge per irradiation; high-energy medical linac beams deliver calibration exposures measured in mC/kg. 1 mC/kg = 10\u207b\u00b3 C/kg \u2248 3.88 R.",
    symbol: "mC/kg"
  },
  kiloroentgens: {
    name: "Kiloroentgens",
    description: "The kiloroentgen (kR) equals 0.258 C/kg. Used in radiation hardness testing of electronics and legacy nuclear weapons effects literature; total ionising exposure inside nuclear facilities during design-basis accident scenarios is cited in kR; some older radiation therapy machine output specifications use kR/min. 1 kR = 0.258 C/kg = 10\u00b3 R.",
    symbol: "kR"
  },
  coulombs_per_kilogram: {
    name: "Coulombs per kilogram",
    description: "The coulomb per kilogram (C/kg) is the SI derived unit of radiation exposure, equal to 1 coulomb of ion charge liberated per kilogram of dry air. It replaced the roentgen in SI. Calibration of clinical X-ray beams with free-air ionisation chambers and parallel-plate chambers yields results in C/kg. 1 C/kg \u2248 3876 R.",
    symbol: "C/kg"
  },
  megaroentgens: {
    name: "Megaroentgens",
    description: "The megaroentgen (MR) equals 258 C/kg. Used only in extreme radiation environments - nuclear detonation effects calculations, prompt gamma pulse environments, and legacy radiation hardness assurance for military electronics specify total ionising exposure in MR(air); calibrated flash X-ray simulators output pulse exposures in MR. 1 MR = 258 C/kg = 10\u2076 R.",
    symbol: "MR"
  },
  kilocoulombs_per_kilogram: {
    name: "Kilocoulombs per kilogram",
    description: "The kilocoulomb per kilogram (kC/kg) equals 10\u00b3 C/kg \u2248 3.88 \u00d7 10\u2076 R. Encountered only in extreme prompt-radiation environments such as nuclear weapon burst regions and high-power flash X-ray facility calibration; at this exposure level all air volumes are multiply ionised and conventional dosimetry models break down. 1 kC/kg = 10\u00b3 C/kg.",
    symbol: "kC/kg"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCoulombsPerKilogram);
}

function convertExposure() {
  convertFactorBased(toCoulombsPerKilogram);
}

initConverterPage();
