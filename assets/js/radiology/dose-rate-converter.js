// Base unit: gray per second (Gy/s) - the SI coherent unit of absorbed dose rate.
// Dose rate D\u0307 [L\u00b2 T\u207b\u00b3] is the rate of absorbed dose delivery: D\u0307 = dD/dt = W/kg.
// All factors express how many Gy/s equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Gy/s = 1 W/kg = 1 m\u00b2/s\u00b3  (SI coherent; no special name)
//   1 rad/s = 0.01 Gy/s           (exact; 1 rad = 0.01 Gy)
//   1 Sv/h = 1 Gy/h for photon radiation (wR = 1; ICRP Publication 103, 2007)
//   1 Gy/h = 1/3600 Gy/s          (exact)
//   1 Gy/min = 1/60 Gy/s          (exact)
//
// Per-hour units (1 h = 3600 s - exact):
//   1 nGy/h  = 1e-9/3600 Gy/s    1 \u00b5Sv/h = 1e-6/3600 Gy/s    1 mrad/h = 1e-5/3600 Gy/s
//   1 mSv/h  = 1e-3/3600 Gy/s    1 rad/h  = 0.01/3600 Gy/s    1 Gy/h   = 1/3600 Gy/s
//   1 krad/h = 10/3600 Gy/s      1 kGy/h  = 1e3/3600 Gy/s
//
// Per-minute units (1 min = 60 s - exact):
//   1 mGy/min = 1e-3/60 Gy/s     1 rad/min = 0.01/60 Gy/s     1 Gy/min = 1/60 Gy/s
//
// Per-second units (exact):
//   1 mGy/s = 1e-3 Gy/s     1 rad/s = 0.01 Gy/s
//   1 krad/s = 10 Gy/s      1 kGy/s = 1e3 Gy/s

const toGraysPerSecond = {
  // -- Per-hour units (smallest to largest) ----------------------------------
  nanograys_per_hour:       1e-9/3600,          // exact: 1e-9 Gy / 3600 s (SI prefix nano, per hour)
  microsieverts_per_hour:   1e-6/3600,          // exact: 1e-6 Sv/h = 1e-6 Gy/h (photons, wR=1)
  millirads_per_hour:       1e-5/3600,          // exact: 1e-5 Gy / 3600 s (1 mrad = 1e-5 Gy)
  millisieverts_per_hour:   1e-3/3600,          // exact: 1e-3 Sv/h = 1e-3 Gy/h (photons, wR=1)
  rads_per_hour:            0.01/3600,          // exact: 0.01 Gy / 3600 s (1 rad = 0.01 Gy)
  grays_per_hour:           1/3600,             // exact: 1 Gy / 3600 s
  kilorads_per_hour:        10/3600,            // exact: 10 Gy / 3600 s (1 krad = 10 Gy)
  kilograys_per_hour:       1e3/3600,           // exact: 1e3 Gy / 3600 s (SI prefix kilo, per hour)
  // -- Per-minute units ------------------------------------------------------
  milligrays_per_minute:    1e-3/60,            // exact: 1e-3 Gy / 60 s (SI prefix milli, per minute)
  rads_per_minute:          0.01/60,            // exact: 0.01 Gy / 60 s (1 rad = 0.01 Gy)
  grays_per_minute:         1/60,               // exact: 1 Gy / 60 s
  // -- Per-second units ------------------------------------------------------
  milligrays_per_second:    1e-3,               // exact: 1e-3 Gy/s (SI prefix milli)
  rads_per_second:          0.01,               // exact: 0.01 Gy/s (1 rad = 0.01 Gy)
  // -- SI base unit ----------------------------------------------------------
  grays_per_second:         1,                  // reference (base unit)
  // -- Large per-second units ------------------------------------------------
  kilorads_per_second:      10,                 // exact: 10 Gy/s (1 krad = 10 Gy)
  kilograys_per_second:     1e3,                // exact: 1e3 Gy/s (SI prefix kilo)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanograys_per_hour: {
    name: "Nanograys per hour",
    description: "The nanogray per hour (nGy/h) equals 1e-9 Gy/h \u2248 2.78\u00d710\u207b\u00b9\u00b3 Gy/s. Natural background cosmic-ray dose rates at sea level are 30-50 nGy/h; at aviation cruising altitude they rise to 3000-6000 nGy/h. IAEA environmental surveillance networks and national monitoring stations report ambient gamma dose rates in nGy/h. 1 nGy/h = 1e-9 Gy/h.",
    symbol: "nGy/h"
  },
  microsieverts_per_hour: {
    name: "Microsieverts per hour",
    description: "The microsievert per hour (\u00b5Sv/h) equals 1e-6 Sv/h = 1e-6 Gy/h for photon radiation (wR = 1). The universal display unit of personal electronic dosimeters and ambient dose-equivalent rate monitors: typical outdoor background 0.08-0.3 \u00b5Sv/h; IAEA precautionary action level is 100 \u00b5Sv/h; occupational continuous limit \u22482.3 \u00b5Sv/h. 1 \u00b5Sv/h = 1 \u00b5Gy/h for photons.",
    symbol: "\u00b5Sv/h"
  },
  millirads_per_hour: {
    name: "Millirads per hour",
    description: "The millirad per hour (mrad/h) equals 1e-5 Gy/h = 10 \u00b5Gy/h. Legacy US radiation protection unit used by area monitors and Geiger counters calibrated before SI adoption; EPA environmental surveillance stations report in mrad/h alongside \u00b5Gy/h; NRC licence boundary dose-rate surveys often cite mrad/h. 1 mrad/h = 1e-5 Gy/h = 10 \u00b5Gy/h.",
    symbol: "mrad/h"
  },
  millisieverts_per_hour: {
    name: "Millisieverts per hour",
    description: "The millisievert per hour (mSv/h) equals 1e-3 Sv/h = 1e-3 Gy/h for photon radiation. Standard field survey unit in radiation protection: nuclear power plant boundary limits are stated in mSv/h; NRC and IAEA emergency alert levels for the public begin at 1 mSv/h; portable radiation survey instruments have a dedicated mSv/h range. 1 mSv/h = 1 mGy/h for photons.",
    symbol: "mSv/h"
  },
  rads_per_hour: {
    name: "Rads per hour",
    description: "The rad per hour (rad/h) equals 0.01 Gy/h \u2248 2.78\u00d710\u207b\u2076 Gy/s. Standard unit on US emergency dosimetry instruments and civil defense survey meters; Chernobyl sarcophagus contact dose rates were hundreds of rad/h; criticality accident dosimetry and NRC incident reports continue to evaluate dose rates in rad/h. 1 rad/h = 0.01 Gy/h = 10 mGy/h.",
    symbol: "rad/h"
  },
  grays_per_hour: {
    name: "Grays per hour",
    description: "The gray per hour (Gy/h) equals 1/3600 Gy/s \u2248 2.78\u00d710\u207b\u2074 Gy/s. Used in radiation processing and source strength reporting: \u00b9\u00b3\u2077Cs irradiator calibrations are expressed in Gy/h at a reference distance; IAEA food irradiation standards cite Gy/h for conveyor output; radiobiological experiments for cancer cell survival curves use Gy/h. 1 Gy/h = 100 rad/h = 1000 mGy/h.",
    symbol: "Gy/h"
  },
  kilorads_per_hour: {
    name: "Kilorads per hour",
    description: "The kilorad per hour (krad/h) equals 10 Gy/h \u2248 2.78\u00d710\u207b\u00b3 Gy/s. Used in total ionising dose (TID) testing of electronics for space and military: satellite components are irradiated at krad(Si)/h to simulate accumulated space radiation; MIL-STD-883 and ESCC 22900 specify test dose rates in krad/h. 1 krad/h = 10 Gy/h.",
    symbol: "krad/h"
  },
  kilograys_per_hour: {
    name: "Kilograys per hour",
    description: "The kilogray per hour (kGy/h) equals 1e3 Gy/h \u2248 0.278 Gy/s. Industrial radiation processing standard: food irradiation conveyors using \u2076\u2070Co or electron beam deliver 1-20 kGy/h; medical device sterilisation tunnels are calibrated in kGy/h; IAEA guidelines for industrial irradiation facilities specify throughput in kGy/h. 1 kGy/h = 1e3 Gy/h.",
    symbol: "kGy/h"
  },
  milligrays_per_minute: {
    name: "Milligrays per minute",
    description: "The milligray per minute (mGy/min) equals 1e-3 Gy/min \u2248 1.67\u00d710\u207b\u2075 Gy/s. Standard output unit for diagnostic X-ray tube characterisation: fluoroscopy entrance dose rates are 10-100 mGy/min; mammography units are measured in mGy/min for quality assurance; IEC and IAEA diagnostic equipment standards quote X-ray tube output in mGy/min. 1 mGy/min = 1e-3 Gy/min.",
    symbol: "mGy/min"
  },
  rads_per_minute: {
    name: "Rads per minute",
    description: "The rad per minute (rad/min) equals 0.01 Gy/min \u2248 1.67\u00d710\u207b\u2074 Gy/s. Historically the primary US radiation therapy output unit: cobalt-60 and early linac machines from the 1960s-1980s are documented in rad/min at isocentre; radiation processing conveyor throughput calculations and legacy NIST linac calibrations use rad/min. 1 rad/min = 0.01 Gy/min = 1 cGy/min.",
    symbol: "rad/min"
  },
  grays_per_minute: {
    name: "Grays per minute",
    description: "The gray per minute (Gy/min) is the primary clinical radiotherapy machine output unit. Standard linac dose rates are 1-6 Gy/min at isocentre; stereotactic body radiotherapy (SBRT) uses up to 10 Gy/min; \u00b9\u2079\u00b2Ir HDR brachytherapy sources are characterised in Gy/min at 1 cm reference distance. 1 Gy/min = 100 rad/min \u2248 1.67\u00d710\u207b\u00b2 Gy/s.",
    symbol: "Gy/min"
  },
  milligrays_per_second: {
    name: "Milligrays per second",
    description: "The milligray per second (mGy/s) equals 1e-3 Gy/s. Used in high-dose-rate applications: medical linac output in IMRT mode is 1-5 mGy/s at isocentre; electron beam processing conveyors deliver 1-10 mGy/s; real-time diode dosimeters in linac vaults measure instantaneous dose rate in mGy/s during beam-on periods. 1 mGy/s = 0.1 rad/s = 3.6 Gy/h.",
    symbol: "mGy/s"
  },
  rads_per_second: {
    name: "Rads per second",
    description: "The rad per second (rad/s) equals 0.01 Gy/s. Used in US radiation therapy physics and pulsed accelerator dosimetry: FLASH radiotherapy (FLASH-RT) research defines ultra-high dose rate as >40 Gy/s = 4000 rad/s; linac prompt radiation dose rates during pulsed operation are characterised in rad/s; nuclear detonation prompt gamma fields are described in rad/s. 1 rad/s = 0.01 Gy/s = 1 cGy/s.",
    symbol: "rad/s"
  },
  grays_per_second: {
    name: "Grays per second",
    description: "The gray per second (Gy/s) is the SI coherent unit of absorbed dose rate, equal to 1 joule per kilogram per second, dimensionally equivalent to W/kg or m\u00b2/s\u00b3. Used in HDR brachytherapy source strength, FLASH radiotherapy research (>40 Gy/s for normal tissue sparing), and particle accelerator beam-loss dosimetry. 1 Gy/s = 60 Gy/min = 3600 Gy/h = 100 rad/s.",
    symbol: "Gy/s"
  },
  kilorads_per_second: {
    name: "Kilorads per second",
    description: "The kilorad per second (krad/s) equals 10 Gy/s. Used in pulsed nuclear radiation effects testing: flash X-ray simulators and nuclear weapon effects test facilities produce prompt dose rates in krad(Si)/s; US defence standard MIL-STD-461 and prompt-dose-rate hardness assurance test procedures specify dose rates in krad/s. 1 krad/s = 10 Gy/s = 1000 rad/s.",
    symbol: "krad/s"
  },
  kilograys_per_second: {
    name: "Kilograys per second",
    description: "The kilogray per second (kGy/s) equals 1e3 Gy/s. Encountered in FLASH radiotherapy research at ultra-high dose rates and in high-power industrial electron accelerators for polymer crosslinking and cable curing at pulse-peak intensities; free-electron laser (FEL) and wakefield accelerator beam-loss dosimetry reports cite kGy/s. 1 kGy/s = 1e3 Gy/s = 3.6 MGy/h.",
    symbol: "kGy/s"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toGraysPerSecond);
}

function convertDoseRate() {
  convertFactorBased(toGraysPerSecond);
}

initConverterPage();
