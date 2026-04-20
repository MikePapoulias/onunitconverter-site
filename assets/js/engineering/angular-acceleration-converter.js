// Base unit: radians per second squared (rad/s\u00b2) - the SI coherent derived unit of angular acceleration.
// All factors express how many rad/s\u00b2 equal 1 unit of the given measure.
//
// Exact foundations:
//   1 full circle = 2\u03c0 rad (exact, by definition of radian)
//   1 degree      = \u03c0/180 rad (exact)
//   1 gradian     = \u03c0/200 rad (exact; 1 gon = 1/400 of a full circle)
//   1 rpm/s       = 2\u03c0/60 rad/s\u00b2 = \u03c0/30 rad/s\u00b2 (exact)
//   1 rev/s\u00b2      = 2\u03c0 rad/s\u00b2 (exact)
//   1 min         = 60 s (exact); 1 h = 3600 s (exact)
//   Prefix multipliers: nano = 1e-9, micro = 1e-6, milli = 1e-3 (all exact)
//   Note: 1 \u00b0/h/s = 1 \u00b0/min\u00b2 = \u03c0/648000 rad/s\u00b2 (exact coincidence)

const toRadiansPerSecondSquared = {
  nanoradians_per_second_squared:          1e-9,             // exact
  microradians_per_second_squared:         1e-6,             // exact
  degrees_per_hour_per_second:             Math.PI / 648000, // \u03c0/(180\u00d73600), exact given \u03c0
  degrees_per_minute_squared:              Math.PI / 648000, // \u03c0/(180\u00d760\u00b2), exact given \u03c0; coincidentally equal to \u00b0/h/s
  radians_per_minute_squared:              1 / 3600,         // exact: (1/60)\u00b2
  degrees_per_minute_per_second:           Math.PI / 10800,  // \u03c0/(180\u00d760), exact given \u03c0
  milliradians_per_second_squared:         1e-3,             // exact
  revolutions_per_minute_squared:          Math.PI / 1800,   // 2\u03c0/(60\u00b2) = \u03c0/1800, exact given \u03c0
  gradians_per_second_squared:             Math.PI / 200,    // \u03c0/200, exact given \u03c0
  radians_per_minute_per_second:           1 / 60,           // exact
  degrees_per_second_squared:              Math.PI / 180,    // \u03c0/180, exact given \u03c0
  revolutions_per_minute_per_second:       Math.PI / 30,     // 2\u03c0/60 = \u03c0/30, exact given \u03c0
  radians_per_second_squared:              1,                // base unit
  revolutions_per_second_squared:          2 * Math.PI,      // 2\u03c0, exact given \u03c0
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanoradians_per_second_squared: {
    name: "Nanoradians per second squared",
    description: "The nanoradian per second squared (nrad/s\u00b2) equals 10\u207b\u2079 rad/s\u00b2, measuring imperceptibly gradual changes in rotation rate. Precision spacecraft attitude-control systems operate in this range during ultra-slow slew manoeuvres; GRACE-FO drag-free cold-gas thrusters produced angular accelerations at the nrad/s\u00b2 scale. Ring laser gyroscopes monitoring Earth's polar motion require resolving nrad/s\u00b2 variations. 1 nrad/s\u00b2 = 10\u207b\u2079 rad/s\u00b2 \u2248 1.02 \u00d7 10\u207b\u2079 rpm/s.",
    symbol: "nrad/s\u00b2"
  },
  microradians_per_second_squared: {
    name: "Microradians per second squared",
    description: "The microradian per second squared (\u00b5rad/s\u00b2) equals 10\u207b\u2076 rad/s\u00b2, characteristic of navigation-grade inertial systems. Gyroscopes on commercial aircraft detect angular accelerations of 0.1-10 \u00b5rad/s\u00b2 during steady cruise; aeroelastic wing flexing during gusts generates 5-50 \u00b5rad/s\u00b2. Geodetic VLBI antennas accelerate through this range during sky survey slewing. 1 \u00b5rad/s\u00b2 = 10\u207b\u2076 rad/s\u00b2 \u2248 5.73 \u00d7 10\u207b\u2075 \u00b0/s\u00b2.",
    symbol: "\u00b5rad/s\u00b2"
  },
  degrees_per_hour_per_second: {
    name: "Degrees per hour per second",
    description: "The degree per hour per second (\u00b0/h/s) equals \u03c0/648000 \u2248 4.848 \u00d7 10\u207b\u2076 rad/s\u00b2, numerically identical to 1 \u00b0/min\u00b2. Gyroscope bias ramp rate - the rate at which drift error accelerates - is specified in \u00b0/h/s per IEEE 952-1997; strategic-grade fibre-optic inertial navigation units achieve values below 0.001 \u00b0/h/s. 1 \u00b0/h/s = \u03c0/648000 rad/s\u00b2 \u2248 4.848 \u00d7 10\u207b\u2076 rad/s\u00b2.",
    symbol: "\u00b0/h/s"
  },
  degrees_per_minute_squared: {
    name: "Degrees per minute squared",
    description: "The degree per minute squared (\u00b0/min\u00b2) equals \u03c0/648000 \u2248 4.848 \u00d7 10\u207b\u2076 rad/s\u00b2, coincidentally equal to 1 \u00b0/h/s. It appears in slow rotational dynamics: spinning astronomical instrument platforms ramp up at fractions of a \u00b0/min\u00b2 to avoid disturbing cryogenic detectors. Large CNC rotary tables for turbine disc indexing programme controlled acceleration profiles in \u00b0/min\u00b2. 1 \u00b0/min\u00b2 = \u03c0/648000 rad/s\u00b2.",
    symbol: "\u00b0/min\u00b2"
  },
  radians_per_minute_squared: {
    name: "Radians per minute squared",
    description: "The radian per minute squared (rad/min\u00b2) equals 1/3600 \u2248 2.778 \u00d7 10\u207b\u2074 rad/s\u00b2, used where rotational speed is expressed in rad/min. Wind turbine pitch-control systems characterise blade angular acceleration in rad/min\u00b2. Pharmaceutical coating pans and rotary drum mixers with PLC ramp control use rad/min\u00b2 for smooth start-up profiles. 1 rad/min\u00b2 = 1/3600 rad/s\u00b2 \u2248 2.778 \u00d7 10\u207b\u2074 rad/s\u00b2.",
    symbol: "rad/min\u00b2"
  },
  degrees_per_minute_per_second: {
    name: "Degrees per minute per second",
    description: "The degree per minute per second (\u00b0/min/s) equals \u03c0/10800 \u2248 2.909 \u00d7 10\u207b\u2074 rad/s\u00b2, expressing the rate of change of angular speed in \u00b0/min per second. Telescope drive systems ramp slew speed in \u00b0/min/s to prevent mechanical shock; a 2 \u00b0/min/s ramp safely accelerates to 120 \u00b0/min tracking rates. Rotary kiln drive start-up angular acceleration is commonly recorded in \u00b0/min/s. 1 \u00b0/min/s = \u03c0/10800 rad/s\u00b2.",
    symbol: "\u00b0/min/s"
  },
  milliradians_per_second_squared: {
    name: "Milliradians per second squared",
    description: "The milliradian per second squared (mrad/s\u00b2) equals 10\u207b\u00b3 rad/s\u00b2, the natural unit for robotic joint angular acceleration. Industrial robot arms (KUKA KR 1000, ABB IRB 8700) run joint acceleration profiles of 50-500 mrad/s\u00b2; CNC machine spindle synchronisation algorithms generate 1-100 mrad/s\u00b2. Optical phased-array beam-steering systems also operate in this range. 1 mrad/s\u00b2 = 10\u207b\u00b3 rad/s\u00b2 \u2248 0.0573 \u00b0/s\u00b2 \u2248 9.549 \u00d7 10\u207b\u00b3 rpm/s.",
    symbol: "mrad/s\u00b2"
  },
  revolutions_per_minute_squared: {
    name: "Revolutions per minute squared",
    description: "The revolution per minute squared (rev/min\u00b2) equals \u03c0/1800 \u2248 1.745 \u00d7 10\u207b\u00b3 rad/s\u00b2. Also written rpm/min in drive engineering, it appears in variable-frequency drive (VFD) ramp settings; a 50 Hz induction motor reaching 1500 rpm in 10 s accelerates at 9000 rev/min\u00b2. IEC 60034-4 motor testing and elevator traction drive specifications use rev/min\u00b2. 1 rev/min\u00b2 = \u03c0/1800 rad/s\u00b2 \u2248 1.745 \u00d7 10\u207b\u00b3 rad/s\u00b2.",
    symbol: "rev/min\u00b2"
  },
  gradians_per_second_squared: {
    name: "Gradians per second squared",
    description: "The gradian per second squared (gon/s\u00b2) equals \u03c0/200 \u2248 0.015708 rad/s\u00b2. The gradian (1 gon = 0.9\u00b0) is the standard angular unit in continental European surveying; robotic total stations (Leica TS16, Trimble S-Series) that report angular speed in gon/s naturally characterise servo acceleration in gon/s\u00b2. DIN 18709 survey instrument calibration records angular acceleration in the gradian system. 1 gon/s\u00b2 = \u03c0/200 rad/s\u00b2 \u2248 0.9 \u00b0/s\u00b2.",
    symbol: "gon/s\u00b2"
  },
  radians_per_minute_per_second: {
    name: "Radians per minute per second",
    description: "The radian per minute per second (rad/min/s) equals 1/60 \u2248 0.016667 rad/s\u00b2, expressing how quickly the angular rate in rad/min changes per second. Wind turbine control systems working in rad/min express start-up acceleration in rad/min/s; a 14 MW direct-drive offshore turbine ramping from 0 to 6 rad/min in 60 s accelerates at 0.1 rad/min/s. CNC spindle run-up profiles and paper-machine roll drives use rad/min/s. 1 rad/min/s = 1/60 rad/s\u00b2.",
    symbol: "rad/min/s"
  },
  degrees_per_second_squared: {
    name: "Degrees per second squared",
    description: "The degree per second squared (\u00b0/s\u00b2) equals \u03c0/180 \u2248 0.017453 rad/s\u00b2, the most intuitive angular acceleration unit. Human vestibular perception threshold starts near 1 \u00b0/s\u00b2; aircraft pitch acceleration during manoeuvres is 5-30 \u00b0/s\u00b2; robot joint acceleration 100-500 \u00b0/s\u00b2. Automotive electronic stability control monitors yaw angular acceleration to detect spin onset. MEMS IMUs measure 0.1-1000 \u00b0/s\u00b2. 1 \u00b0/s\u00b2 = \u03c0/180 rad/s\u00b2 \u2248 1/6 rpm/s.",
    symbol: "\u00b0/s\u00b2"
  },
  revolutions_per_minute_per_second: {
    name: "Revolutions per minute per second",
    description: "The revolution per minute per second (rpm/s) equals \u03c0/30 \u2248 0.10472 rad/s\u00b2, the dominant unit in motor and drivetrain data sheets. A petrol engine from idle to 5000 rpm in 3 s accelerates at \u22481667 rpm/s; electric car motors achieve up to 15000 rpm/s in torque-vectoring mode; washing machine spin-up from 0 to 1200 rpm in 40 s = 30 rpm/s. IEC 61800-2 servo drive specifications quote peak angular acceleration in rpm/s. 1 rpm/s = \u03c0/30 rad/s\u00b2 = 6 \u00b0/s\u00b2.",
    symbol: "rpm/s"
  },
  radians_per_second_squared: {
    name: "Radians per second squared",
    description: "The radian per second squared (rad/s\u00b2) is the SI coherent derived unit of angular acceleration. It appears in Newton's second law for rotation: \u03c4 = I\u03b1, where torque \u03c4 is in N\u00b7m, moment of inertia I in kg\u00b7m\u00b2, and angular acceleration \u03b1 in rad/s\u00b2. All engineering simulation tools (MATLAB, Simulink, ROS, FEM solvers) use rad/s\u00b2 natively. A typical electric motor under full load accelerates at 10-100 rad/s\u00b2. 1 rad/s\u00b2 \u2248 57.296 \u00b0/s\u00b2 \u2248 9.549 rpm/s.",
    symbol: "rad/s\u00b2"
  },
  revolutions_per_second_squared: {
    name: "Revolutions per second squared",
    description: "The revolution per second squared (rev/s\u00b2) equals 2\u03c0 \u2248 6.2832 rad/s\u00b2, used for high-speed machines. Ultracentrifuge rotors (Beckman-Coulter Optima MAX-XP) reach 1333 rps operating speed, achieving angular acceleration of 2-5 rev/s\u00b2 during run-up. Dental air turbines spinning at 400 rps accelerate at 50-200 rev/s\u00b2 during the power stroke. 1 rev/s\u00b2 = 2\u03c0 rad/s\u00b2 = 60 rpm/s = 360 \u00b0/s\u00b2.",
    symbol: "rev/s\u00b2"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toRadiansPerSecondSquared);
}

function convertAngularAcceleration() {
  convertFactorBased(toRadiansPerSecondSquared);
}

initConverterPage();
