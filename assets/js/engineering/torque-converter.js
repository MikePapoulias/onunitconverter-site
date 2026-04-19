// Base unit: newton metre (N·m) - the SI coherent derived unit of torque (moment of force).
// All factors express how many N·m equal 1 unit of the given measure.
//
// Exact foundations:
//   1 dyn = 1e-5 N (exact, CGS definition); 1 cm = 1e-2 m (exact)
//   g0 = 9.80665 m/s² (exact, CGPM 1901 standard gravity)
//   1 mm = 1e-3 m (exact); 1 cm = 1e-2 m (exact)
//   1 oz (avoirdupois) = 0.028349523125 kg (exact, 1959 International Yard and Pound Agreement)
//   1 lb = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 in = 0.0254 m (exact); 1 ft = 0.3048 m (exact)
//   1 poundal = 1 lb·ft/s² = 0.45359237 × 0.3048 N (exact); pdl·ft = 0.45359237 × 0.3048 × 0.3048 N·m
//   1 kip = 1000 lbf (exact); 1 kip·ft = 1000 × 0.45359237 × 9.80665 × 0.3048 N·m
//   1 kN = 1e3 N (exact); 1 MN = 1e6 N (exact)

const toNewtonMetres = {
  dyne_centimetres:              1e-7,                                                 // exact: 1e-5 N × 1e-2 m
  gram_force_millimetres:        9.80665e-6,                                           // exact: g0/1000 N × 1e-3 m
  gram_force_centimetres:        9.80665e-5,                                           // exact: g0/1000 N × 1e-2 m
  newton_millimetres:            1e-3,                                                 // exact: 1 N × 1e-3 m
  ounce_force_inches:            0.028349523125 * 9.80665 * 0.0254,                   // exact given oz, g0, in
  gram_force_metres:             9.80665e-3,                                           // exact: g0/1000 N × 1 m
  newton_centimetres:            1e-2,                                                 // exact: 1 N × 1e-2 m
  poundal_feet:                  0.45359237 * 0.3048 * 0.3048,                        // exact: (lb·ft/s²) × ft = 0.45359237 × 0.3048²
  kilogram_force_centimetres:    9.80665e-2,                                           // exact: g0 N × 1e-2 m
  pound_force_inches:            0.45359237 * 9.80665 * 0.0254,                       // exact given lb, g0, in
  newton_metres:                 1,                                                    // base unit (SI)
  pound_force_feet:              0.45359237 * 9.80665 * 0.3048,                       // exact given lb, g0, ft
  kilogram_force_metres:         9.80665,                                              // exact: g0 N × 1 m
  kilonewton_metres:             1e3,                                                  // exact: 1e3 N × 1 m
  kilopound_force_feet:          0.45359237 * 9.80665 * 0.3048 * 1e3,                 // exact: 1000 lbf·ft
  meganewton_metres:             1e6,                                                  // exact: 1e6 N × 1 m
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  dyne_centimetres: {
    name: "Dyne centimetres",
    description: "The dyne centimetre (dyn\u00b7cm) is the CGS unit of torque, equal to 10\u207b\u2077 N\u00b7m. It represents 1 dyne of force applied at 1 cm from the axis. MEMS micro-actuator friction, watch escapement detent torques, and laboratory torsion-pendulum experiments are measured in dyn\u00b7cm. Pre-SI physics literature and precision galvanometer calibration reports used this unit. 1 dyn\u00b7cm = 10\u207b\u2077 N\u00b7m = 0.01 gf\u00b7mm = 0.001 gf\u00b7cm.",
    symbol: "dyn\u00b7cm"
  },
  gram_force_millimetres: {
    name: "Gram-force millimetres",
    description: "The gram-force millimetre (gf\u00b7mm) equals 9.80665 \u00d7 10\u207b\u2076 N\u00b7m, the natural unit for precision micro-mechanisms. Swiss watchmaking datasheets list hairspring and balance-wheel detent torques in gf\u00b7mm; micro-servo holding torques, precision force gauge spring calibration, and miniature dental handpiece torque limits also fall in this range. A typical watch hairspring torque is 0.1-5 gf\u00b7mm. 1 gf\u00b7mm = 9.80665 \u00d7 10\u207b\u2076 N\u00b7m = 100 dyn\u00b7cm = 0.1 gf\u00b7cm.",
    symbol: "gf\u00b7mm"
  },
  gram_force_centimetres: {
    name: "Gram-force centimetres",
    description: "The gram-force centimetre (gf\u00b7cm) equals 9.80665 \u00d7 10\u207b\u2075 N\u00b7m, the standard unit for small servo and hobby motor specifications. RC servo motor stall torques are quoted in gf\u00b7cm - a typical 9 g mini-servo delivers 1500-2000 gf\u00b7cm. Small stepper motors for 3D printers range 400-600 gf\u00b7cm; model train gearboxes around 200-800 gf\u00b7cm. 1 gf\u00b7cm = 9.80665 \u00d7 10\u207b\u2075 N\u00b7m = 10 gf\u00b7mm = 0.01 kgf\u00b7cm.",
    symbol: "gf\u00b7cm"
  },
  newton_millimetres: {
    name: "Newton millimetres",
    description: "The newton millimetre (N\u00b7mm) equals 10\u207b\u00b3 N\u00b7m, widely used in mechanical engineering and FEA software. ANSYS, Abaqus, and Siemens NX models built in millimetres report torques in N\u00b7mm for dimensional consistency. Fastener torque for M3-M6 screws (typically 0.3-5 N\u00b7m range), micro-pump impeller loads, and precision gearbox calibration values are expressed in N\u00b7mm. 1 N\u00b7mm = 10\u207b\u00b3 N\u00b7m = 0.1 N\u00b7cm \u2248 8.851 \u00d7 10\u207b\u00b3 lbf\u00b7in.",
    symbol: "N\u00b7mm"
  },
  ounce_force_inches: {
    name: "Ounce-force inches",
    description: "The ounce-force inch (ozf\u00b7in) equals \u2248 7.062 \u00d7 10\u207b\u00b3 N\u00b7m, the traditional US unit for small instrument and servo motors. Brushless DC motors for drones, precision positioning stages, and US industrial servo catalogs (Maxon, Pittman) specify stall torque in ozf\u00b7in. A typical NEMA 17 stepper motor delivers 80-220 ozf\u00b7in. 16 ozf\u00b7in = 1 lbf\u00b7in. 1 ozf\u00b7in \u2248 7.062 \u00d7 10\u207b\u00b3 N\u00b7m \u2248 72.0 gf\u00b7cm.",
    symbol: "ozf\u00b7in"
  },
  gram_force_metres: {
    name: "Gram-force metres",
    description: "The gram-force metre (gf\u00b7m) equals 9.80665 \u00d7 10\u207b\u00b3 N\u00b7m, used in scientific torsion and balance instrument calibration. Analytical balance torsion spring constants, laser-gyroscope gimbal friction torques, and lightweight UAV propeller starting torques are expressed in gf\u00b7m. It bridges gf\u00b7cm and N\u00b7m in laboratory-scale rotating experiments. 1 gf\u00b7m = 9.80665 \u00d7 10\u207b\u00b3 N\u00b7m = 100 gf\u00b7cm = 0.001 kgf\u00b7m.",
    symbol: "gf\u00b7m"
  },
  newton_centimetres: {
    name: "Newton centimetres",
    description: "The newton centimetre (N\u00b7cm) equals 0.01 N\u00b7m, a convenient unit for small-to-medium motors and robotics. Hobbyist robot joint actuators, prosthetic hand finger joints, and compact CubeSat reaction wheels are rated in N\u00b7cm. RC drone racing motors and small AC induction motors up to 100 W produce 5-200 N\u00b7cm. 1 N\u00b7cm = 0.01 N\u00b7m = 10 N\u00b7mm \u2248 1.416 ozf\u00b7in \u2248 0.0885 lbf\u00b7in.",
    symbol: "N\u00b7cm"
  },
  poundal_feet: {
    name: "Poundal feet",
    description: "The poundal foot (pdl\u00b7ft) equals \u2248 0.04214 N\u00b7m, the torque unit of the absolute foot-pound-second system, where force is in poundals (1 pdl = 1 lb\u00b7ft/s\u00b2) rather than pound-force. It appeared in pre-SI British and American engineering texts and NACA aerodynamic stability reports alongside slug inertia values. 1 pdl\u00b7ft = 0.45359237 \u00d7 0.3048\u00b2 N\u00b7m \u2248 0.04214 N\u00b7m \u2248 0.3730 lbf\u00b7in.",
    symbol: "pdl\u00b7ft"
  },
  kilogram_force_centimetres: {
    name: "Kilogram-force centimetres",
    description: "The kilogram-force centimetre (kgf\u00b7cm) equals exactly 9.80665 \u00d7 10\u207b\u00b2 N\u00b7m, common in Continental European and Asian servo drive engineering. ABB, Siemens, and Yaskawa servo catalogs specify rotor and reflected-load torques in kgf\u00b7cm; IEC 61800 drive inertia-ratio sizing uses kgf\u00b7cm. Typical industrial servomotor stall torques: 0.1-50 kgf\u00b7cm. 1 kgf\u00b7cm = 0.0980665 N\u00b7m = 100 gf\u00b7cm \u2248 13.89 ozf\u00b7in.",
    symbol: "kgf\u00b7cm"
  },
  pound_force_inches: {
    name: "Pound-force inches",
    description: "The pound-force inch (lbf\u00b7in) equals \u2248 0.11299 N\u00b7m, the dominant US customary unit for motor and machinery documentation. Rockwell Automation, Parker Hannifin, and Allied Motion servo catalogs express stall and rated torques in lbf\u00b7in; US machine-tool spindles and conveyor drive gearboxes are also specified in lbf\u00b7in. Typical fractional-horsepower motor torques: 5-200 lbf\u00b7in. 1 lbf\u00b7in \u2248 0.11299 N\u00b7m = 16 ozf\u00b7in = 1/12 lbf\u00b7ft.",
    symbol: "lbf\u00b7in"
  },
  newton_metres: {
    name: "Newton metres",
    description: "The newton metre (N\u00b7m) is the SI coherent derived unit of torque and bending moment. Car engine torque is commonly quoted in N\u00b7m - a family hatchback delivers 150-250 N\u00b7m; a performance saloon 400-600 N\u00b7m. Fastener pre-load torques, EV traction-motor ratings, and structural connection bolt specifications are all given in N\u00b7m. 1 N\u00b7m = 100 N\u00b7cm = 1000 N\u00b7mm \u2248 0.7376 lbf\u00b7ft \u2248 8.851 lbf\u00b7in.",
    symbol: "N\u00b7m"
  },
  pound_force_feet: {
    name: "Pound-force feet",
    description: "The pound-force foot (lbf\u00b7ft) equals \u2248 1.35582 N\u00b7m, the dominant torque unit in North American automotive and mechanical engineering. SAE engine performance tests, US vehicle lug-nut torque specs (80-100 lbf\u00b7ft), and American industrial gearbox catalogs all use lbf\u00b7ft. V8 truck engines produce 400-600 lbf\u00b7ft; diesel pickups exceed 900 lbf\u00b7ft. 1 lbf\u00b7ft \u2248 1.35582 N\u00b7m = 12 lbf\u00b7in \u2248 192 ozf\u00b7in.",
    symbol: "lbf\u00b7ft"
  },
  kilogram_force_metres: {
    name: "Kilogram-force metres",
    description: "The kilogram-force metre (kgf\u00b7m) equals exactly 9.80665 N\u00b7m, used in pre-SI European and legacy Asian engineering. Soviet/Russian GOST standards, early JIS turbine and compressor specifications, and older DIN automotive standards listed torque in kgf\u00b7m. A car wheel bolt at 10 kgf\u00b7m \u2248 98.1 N\u00b7m. 1 kgf\u00b7m = 9.80665 N\u00b7m = 100 kgf\u00b7cm \u2248 7.233 lbf\u00b7ft \u2248 86.80 lbf\u00b7in.",
    symbol: "kgf\u00b7m"
  },
  kilonewton_metres: {
    name: "Kilonewton metres",
    description: "The kilonewton metre (kN\u00b7m) equals 1000 N\u00b7m, the standard unit for structural and civil engineering bending moments and large-machine torques. Steel beam connection bolts, industrial gearbox output shafts, ship propeller shaft flanges, and large AC induction motor ratings are specified in kN\u00b7m. Wind turbine mainshaft torques reach 1-10 MN\u00b7m. 1 kN\u00b7m = 1000 N\u00b7m \u2248 737.6 lbf\u00b7ft \u2248 0.7376 kip\u00b7ft \u2248 102.0 kgf\u00b7m.",
    symbol: "kN\u00b7m"
  },
  kilopound_force_feet: {
    name: "Kilopound-force feet",
    description: "The kilopound-force foot (kip\u00b7ft) equals \u2248 1355.82 N\u00b7m (1 kip = 1000 lbf), the standard bending-moment and torque unit in US structural and civil engineering. AISC steel connection design, ACI reinforced-concrete beam moment capacity, and US bridge analysis all state values in kip\u00b7ft. Seismic moment-frame connections in mid-rise buildings resist 500-50 000 kip\u00b7ft. 1 kip\u00b7ft = 1000 lbf\u00b7ft \u2248 1355.82 N\u00b7m \u2248 1.35582 kN\u00b7m.",
    symbol: "kip\u00b7ft"
  },
  meganewton_metres: {
    name: "Meganewton metres",
    description: "The meganewton metre (MN\u00b7m) equals 10\u2076 N\u00b7m, the unit for the largest rotating machines and extreme structural loads. Offshore wind turbine tower-base bending moments reach 300-800 MN\u00b7m in storm conditions; large hydro-generator shaft torques range 100-500 MN\u00b7m; ocean-going vessel propulsion crankshaft peak torques 10-100 MN\u00b7m. 1 MN\u00b7m = 1000 kN\u00b7m \u2248 737 562 lbf\u00b7ft \u2248 737.6 kip\u00b7ft.",
    symbol: "MN\u00b7m"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toNewtonMetres);
}

function convertTorque() {
  convertFactorBased(toNewtonMetres);
}

initConverterPage();
