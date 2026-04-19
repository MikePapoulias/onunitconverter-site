// Base unit: volt per metre (V/m) - the SI coherent unit of electric field strength.
// Electric field strength E [M L T\u207b\u00b3 A\u207b\u00b9] is force per unit charge: E = F/q = -dV/dx.
// All factors express how many V/m equal 1 unit of the given measure.
//
// Exact foundations:
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   1 in  = 0.0254 m                    (exact, international inch definition)
//   1 V/m = 1 N/C = 1 kg\u00b7m\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3
//
// SI prefix units per metre (all exact by definition):
//   1 \u00b5V/m = 10\u207b\u2076 V/m    1 mV/m = 10\u207b\u00b3 V/m
//   1 kV/m  = 10\u00b3 V/m     1 MV/m = 10\u2076 V/m     1 GV/m = 10\u2079 V/m
//
// Per-centimetre variants (1 cm = 0.01 m, exact):
//   1 mV/cm = 10\u207b\u00b3 / 0.01 = 10\u207b\u00b9 V/m = 0.1 V/m
//   1 V/cm  = 1     / 0.01 = 100  V/m
//   1 kV/cm = 10\u00b3  / 0.01 = 10\u2075 V/m
//
// Per-inch variant (1 in = 0.0254 m, exact):
//   1 V/in  = 1 / 0.0254 \u2248 39.370 V/m
//
// Statvolts per centimetre (CGS-Gaussian) - exact:
//   1 statV/cm = (c / 10\u2076 V) / 0.01 m = c / 10\u2074 V/m
//             = 299 792 458 / 10 000 V/m \u2248 29 979.2458 V/m   (exact, since c is exact)
//
// Abvolts per centimetre (CGS-EMU) - exact:
//   1 abV/cm = (10\u207b\u2078 V) / 0.01 m = 10\u207b\u2076 V/m  (exactly equal to 1 \u00b5V/m)

const toVoltsPerMetre = {
  // -- Abvolts per centimetre (CGS-EMU) --------------------------------------
  abvolts_per_centimetre:         1e-8 / 0.01,                   // exact: 10\u207b\u2078 V / 0.01 m = 10\u207b\u2076 V/m (= 1 \u00b5V/m)
  // -- Microvolts per metre --------------------------------------------------
  microvolts_per_metre:           1e-6,                          // exact: 10\u207b\u2076 V/m (SI prefix micro)
  // -- Millivolts per metre --------------------------------------------------
  millivolts_per_metre:           1e-3,                          // exact: 10\u207b\u00b3 V/m (SI prefix milli)
  // -- Millivolts per centimetre ---------------------------------------------
  millivolts_per_centimetre:      1e-3 / 0.01,                   // exact: 0.1 V/m (1 mV / 1 cm)
  // -- Volts per metre (SI unit) --------------------------------------------
  volts_per_metre:                1,                             // reference (base unit)
  // -- Newtons per coulomb --------------------------------------------------
  newtons_per_coulomb:            1,                             // exact: 1 N/C = 1 V/m (dimensionally identical)
  // -- Volts per inch -------------------------------------------------------
  volts_per_inch:                 1 / 0.0254,                   // exact: 1 / 0.0254 m \u2248 39.370 V/m (1 in = 0.0254 m)
  // -- Volts per centimetre -------------------------------------------------
  volts_per_centimetre:           1 / 0.01,                     // exact: 100 V/m (1 cm = 0.01 m)
  // -- Kilovolts per metre --------------------------------------------------
  kilovolts_per_metre:            1e3,                           // exact: 10\u00b3 V/m (SI prefix kilo)
  // -- Statvolts per centimetre (CGS-Gaussian) ------------------------------
  statvolts_per_centimetre:       299792458 / 1e4,               // exact: c / 10\u2074 V/m \u2248 29 979.2458 V/m
  // -- Kilovolts per centimetre ---------------------------------------------
  kilovolts_per_centimetre:       1e3 / 0.01,                   // exact: 10\u2075 V/m (1 kV / 1 cm)
  // -- Megavolts per metre --------------------------------------------------
  megavolts_per_metre:            1e6,                           // exact: 10\u2076 V/m (SI prefix mega)
  // -- Gigavolts per metre --------------------------------------------------
  gigavolts_per_metre:            1e9,                           // exact: 10\u2079 V/m (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  abvolts_per_centimetre: {
    name: "Abvolts per centimetre",
    description: "The abvolt per centimetre (abV/cm) is the electric field unit of the CGS-EMU system, equal to 1 abV / 1 cm = 10\u207b\u2078 V / 0.01 m = 10\u207b\u2076 V/m, exactly equal to 1 \u00b5V/m. It appears in nineteenth-century electromagnetic texts alongside the abampere and abohm when deriving field solutions from the CGS-EMU form of Coulomb's law. 1 abV/cm = 10\u207b\u2076 V/m = 1 \u00b5V/m.",
    symbol: "abV/cm"
  },
  microvolts_per_metre: {
    name: "Microvolts per metre",
    description: "The microvolt per metre (\u00b5V/m) equals 10\u207b\u2076 V/m, the standard unit for the electric component of weak radio-frequency fields measured far from transmitters. GPS L1 signals arrive at Earth's surface at about 4 \u00b5V/m; FM broadcast receivers require a minimum of 10-50 \u00b5V/m for acceptable reception; regulatory RF exposure limits for base stations are typically set in the range 1-100 \u00b5V/m. 1 \u00b5V/m = 10\u207b\u2076 V/m.",
    symbol: "\u00b5V/m"
  },
  millivolts_per_metre: {
    name: "Millivolts per metre",
    description: "The millivolt per metre (mV/m) equals 10\u207b\u00b3 V/m, used for medium-wave broadcast field-strength measurements and near-field EMC compliance testing. An AM broadcast tower at 1 km produces a field of roughly 100 mV/m; international AM service-area limits specify minimum field strengths of 3-10 mV/m; power-frequency (50/60 Hz) fields near overhead HV lines are a few mV/m. 1 mV/m = 10\u207b\u00b3 V/m.",
    symbol: "mV/m"
  },
  millivolts_per_centimetre: {
    name: "Millivolts per centimetre",
    description: "The millivolt per centimetre (mV/cm) equals exactly 0.1 V/m, used in electrophoresis, biosensor calibration, and bioelectric stimulation research. Standard DNA gel electrophoresis runs at 5-15 V/cm = 5\u202f000-15\u202f000 mV/cm; transcranial direct-current stimulation (tDCS) produces cortical fields of 0.1-0.5 mV/cm; field-effect biosensors detect analyte-binding events as mV/cm-scale potential gradients. 1 mV/cm = 0.1 V/m.",
    symbol: "mV/cm"
  },
  volts_per_metre: {
    name: "Volts per metre",
    description: "The volt per metre (V/m) is the SI coherent unit of electric field strength, equal to 1 N/C = 1 kg\u00b7m\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3. The fair-weather atmospheric surface electric field averages 100-200 V/m; a 1 W isotropic antenna produces about 5.5 V/m at 1 m; thunderstorm clouds build surface fields of 10\u202f000-100\u202f000 V/m before lightning discharge. 1 V/m = 1 N/C.",
    symbol: "V/m"
  },
  newtons_per_coulomb: {
    name: "Newtons per coulomb",
    description: "The newton per coulomb (N/C) is dimensionally identical to V/m (1 N/C = 1 V/m = 1 kg\u00b7m\u00b7A\u207b\u00b9\u00b7s\u207b\u00b3) and is preferred in force-based electrostatics, where the field is defined directly as E = F/q. Coulomb's law gives the field near a point charge as E = kq/r\u00b2 naturally in N/C; the unit is standard in introductory physics alongside field-line diagrams. 1 N/C = 1 V/m.",
    symbol: "N/C"
  },
  volts_per_inch: {
    name: "Volts per inch",
    description: "The volt per inch (V/in) equals exactly 1 / 0.0254 V/m \u2248 39.370 V/m, used in North American high-voltage insulation specifications, PCB design rules, and cable withstand-voltage testing. ANSI/IEEE standards quote insulation withstand voltages per inch of creepage distance; PCB high-voltage layout rules specify minimum clearances rated in V/in; US power-supply withstand tests may state a 1\u202f000 V/in dielectric rating. 1 V/in \u2248 39.370 V/m.",
    symbol: "V/in"
  },
  volts_per_centimetre: {
    name: "Volts per centimetre",
    description: "The volt per centimetre (V/cm) equals exactly 100 V/m, the practical unit for electrophoresis fields, thin-film electrical measurements, and solid dielectric breakdown specifications. Standard agarose gel electrophoresis runs at 5-15 V/cm; SiO\u2082 gate-oxide breakdown field is about 10 MV/cm = 10\u2079 V/m; electro-osmotic flow in microfluidics is driven at 10-100 V/cm. 1 V/cm = 100 V/m.",
    symbol: "V/cm"
  },
  kilovolts_per_metre: {
    name: "Kilovolts per metre",
    description: "The kilovolt per metre (kV/m) equals 10\u00b3 V/m, the standard unit for power-frequency electric field safety limits and environmental surveys near high-voltage infrastructure. ICNIRP occupational exposure limit for 50 Hz electric fields is 10 kV/m; directly under a 400 kV transmission line the surface field reaches 10-15 kV/m; the Earth's fair-weather atmospheric field averages 0.1-0.2 kV/m. 1 kV/m = 10\u00b3 V/m.",
    symbol: "kV/m"
  },
  statvolts_per_centimetre: {
    name: "Statvolts per centimetre",
    description: "The statvolt per centimetre (statV/cm) is the electric field unit of the CGS-Gaussian system, equal to c / 10\u2074 V/m where c = 299\u202f792\u202f458 m/s, giving exactly 29\u202f979.2458 V/m. It is the natural field unit for Gaussian-CGS electrostatics; the field at 1 cm from a 1-statcoulomb point charge in vacuum is exactly 1 statV/cm; Gaussian-system formulas for Coulomb's law and dielectric polarisation use statV/cm without a 4\u03c0\u03b5\u2080 factor. 1 statV/cm \u2248 29.979 kV/m.",
    symbol: "statV/cm"
  },
  kilovolts_per_centimetre: {
    name: "Kilovolts per centimetre",
    description: "The kilovolt per centimetre (kV/cm) equals exactly 10\u2075 V/m = 100 kV/m, the practical unit for high-voltage insulation breakdown tests, gas discharge thresholds, and electrostatic process engineering. Air breakdown at standard conditions is about 30 kV/cm; transformer mineral oil withstands 10-20 kV/cm; XLPE power cable insulation is rated 20-40 kV/cm; electrostatic paint spraying operates at 5-15 kV/cm. 1 kV/cm = 10\u2075 V/m.",
    symbol: "kV/cm"
  },
  megavolts_per_metre: {
    name: "Megavolts per metre",
    description: "The megavolt per metre (MV/m) equals 10\u2076 V/m, the scale for accelerating gradients in particle accelerators, internal fields in semiconductor devices, and piezoelectric actuator operation. RF linear accelerator cavities achieve 20-100 MV/m; CMOS gate-oxide fields at 1.8 V across 2 nm SiO\u2082 are about 900 MV/m; piezoelectric stack actuators operate at 1-3 MV/m. 1 MV/m = 10\u2076 V/m.",
    symbol: "MV/m"
  },
  gigavolts_per_metre: {
    name: "Gigavolts per metre",
    description: "The gigavolt per metre (GV/m) equals 10\u2079 V/m, the scale for avalanche breakdown in semiconductor junctions, electron field emission from metal tips, and intense laser-pulse focal fields. Silicon p-n junction avalanche fields are 0.3-0.5 GV/m; electron field emission from tungsten tips begins near 1-5 GV/m; intense femtosecond laser pulses produce peak fields exceeding 1 GV/m in the focal volume. 1 GV/m = 10\u2079 V/m.",
    symbol: "GV/m"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toVoltsPerMetre);
}

function convertElectricField() {
  convertFactorBased(toVoltsPerMetre);
}

initConverterPage();
