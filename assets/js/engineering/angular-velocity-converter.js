// Base unit: radians per second (rad/s) - the SI coherent derived unit of angular velocity.
// All factors express how many rad/s equal 1 unit of the given measure.
//
// Exact foundations:
//   1 full circle = 2\u03c0 rad (exact, by definition of radian)
//   1 degree      = \u03c0/180 rad (exact)
//   1 gradian     = \u03c0/200 rad (exact; 1 gon = 1/400 of a full circle)
//   1 rpm         = 2\u03c0/60 rad/s = \u03c0/30 rad/s (exact)
//   1 rps         = 2\u03c0 rad/s (exact)
//   Prefix multipliers: nano = 1e-9, micro = 1e-6, milli = 1e-3 (all exact)

const toRadiansPerSecond = {
  nanoradians_per_second:    1e-9,              // exact
  microradians_per_second:   1e-6,              // exact
  degrees_per_hour:          Math.PI / 648000,  // PI/(180*3600), exact given PI
  revolutions_per_day:       Math.PI / 43200,   // 2*PI/86400 = PI/43200, exact given PI
  radians_per_hour:          1 / 3600,          // exact
  degrees_per_minute:        Math.PI / 10800,   // PI/(180*60), exact given PI
  milliradians_per_second:   1e-3,              // exact
  revolutions_per_hour:      Math.PI / 1800,    // 2*PI/3600 = PI/1800, exact given PI
  radians_per_minute:        1 / 60,            // exact
  gradians_per_second:       Math.PI / 200,     // PI/200, exact given PI
  degrees_per_second:        Math.PI / 180,     // PI/180, exact given PI
  revolutions_per_minute:    Math.PI / 30,      // 2*PI/60 = PI/30, exact given PI
  radians_per_second:        1,                 // base unit
  revolutions_per_second:    2 * Math.PI,       // 2*PI, exact given PI
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanoradians_per_second: {
    name: "Nanoradians per second",
    description: "The nanoradian per second (nrad/s) is 10\u207b\u2079 rad/s, accessible only to the most sensitive geodetic rotation sensors. The Wettzell G-ring laser gyroscope (4 m \u00d7 4 m Sagnac interferometer, Bavaria) measures Earth's rotation of ~72.92 \u00b5rad/s to a few nrad/s, resolving the Chandler wobble and polar motion. The proposed GINGER experiment targets the Lense-Thirring gravitomagnetic frame-dragging effect, predicted at ~39 nrad/s. State-of-the-art tactical-grade MEMS gyroscopes reach ~100 nrad/s/\u221aHz noise floors. 1 nrad/s = 10\u207b\u2079 rad/s \u2248 7.46 \u00d7 10\u207b\u2077 rpm.",
    symbol: "nrad/s"
  },
  microradians_per_second: {
    name: "Microradians per second",
    description: "The microradian per second (\u00b5rad/s) is 10\u207b\u2076 rad/s. Earth's mean sidereal rotation rate is \u224872.921 \u00b5rad/s, the single most important reference at this scale. Navigation-grade ring laser gyroscopes (Honeywell GG1320) reach bias stability below 0.15 \u00b5rad/s; fibre-optic gyros for satellite attitude control (iXBlue ASTRIX-120) achieve 0.048 \u00b5rad/s. Postglacial isostatic rebound produces crustal block rotations detectable at 0.1-1 \u00b5rad/s in GPS survey networks. 1 \u00b5rad/s = 10\u207b\u2076 rad/s \u2248 5.73 \u00d7 10\u207b\u2075 \u00b0/s.",
    symbol: "\u00b5rad/s"
  },
  degrees_per_hour: {
    name: "Degrees per hour",
    description: "The degree per hour (\u00b0/h) equals \u03c0/648000 rad/s \u2248 4.848 \u00d7 10\u207b\u2076 rad/s, the universal benchmark for gyroscope drift rate. Performance tiers: consumer MEMS (smartphone) 30-2000 \u00b0/h; tactical grade (guided munitions) 0.1-30 \u00b0/h; navigation grade (commercial aircraft) 0.001-0.1 \u00b0/h; strategic grade (submarines, ICBMs) below 0.001 \u00b0/h. Earth's rotation rate of 15.041 \u00b0/h is the calibration reference for every gyrocompass. A 0.01 \u00b0/h drift yields about 1.1 km position error after 1 hour of unaided inertial navigation at the equator. 1 \u00b0/h \u2248 4.848 \u00d7 10\u207b\u2076 rad/s.",
    symbol: "\u00b0/h"
  },
  revolutions_per_day: {
    name: "Revolutions per day",
    description: "The revolution per day (rev/d) equals \u03c0/43200 rad/s \u2248 7.272 \u00d7 10\u207b\u2075 rad/s, the scale of planetary rotation and orbital mechanics. Earth spins at 1.00274 rev/day (sidereal); Mars at 1.027 rev/day (sol = 24 h 37 min); Jupiter at 2.417 rev/day. Geostationary satellites orbit at exactly 1 rev/solar day; Molniya HEO satellites at 2 rev/day. The Moon is tidally locked at 1/27.322 rev/day. IERS Bulletin A tracks Earth's deviation from 1 rev/solar day to 0.1 ms precision. 1 rev/d \u2248 7.272 \u00d7 10\u207b\u2075 rad/s \u2248 6.944 \u00d7 10\u207b\u00b3 rpm.",
    symbol: "rev/d"
  },
  radians_per_hour: {
    name: "Radians per hour",
    description: "The radian per hour (rad/h) equals 1/3600 rad/s \u2248 2.778 \u00d7 10\u207b\u2074 rad/s. In tidal harmonic analysis, constituents are characterised by their angular speed in rad/h: the principal lunar M\u2082 tide has \u03c3 \u2248 0.5059 rad/h; the solar S\u2082 exactly \u03c0/6 \u2248 0.5236 rad/h. A geostationary satellite tracks at 2\u03c0/24 \u2248 0.2618 rad/h - the same as Earth's sidereal rate, which equatorial telescope drives must match to follow stars. Rotary cement kilns (up to 230 m long) rotate at 0.1-0.5 rad/h. 1 rad/h = 1/3600 rad/s \u2248 0.1592 rpm.",
    symbol: "rad/h"
  },
  degrees_per_minute: {
    name: "Degrees per minute",
    description: "The degree per minute (\u00b0/min) equals \u03c0/10800 rad/s \u2248 2.909 \u00d7 10\u207b\u2074 rad/s. The sidereal tracking rate for astronomical telescopes is 0.25 \u00b0/min (15 \u00b0/h); modern robotic observatories slew at 100-400 \u00b0/min between targets. A clock's hour hand turns at 0.5 \u00b0/min; the minute hand at 6 \u00b0/min. Industrial drum conveyors for cement kilns rotate at 0.5-5 \u00b0/min; automotive power-steering columns during parking manoeuvres rotate at 30-180 \u00b0/min. 1 \u00b0/min \u2248 2.909 \u00d7 10\u207b\u2074 rad/s = 1/60 rpm.",
    symbol: "\u00b0/min"
  },
  milliradians_per_second: {
    name: "Milliradians per second",
    description: "The milliradian per second (mrad/s) is 10\u207b\u00b3 rad/s, used in precision guidance and antenna pointing. Phased-array radar beam steering rates for track-while-scan modes are typically 10-1000 mrad/s. LEO Earth-observation satellites (Sentinel-2, WorldView-3) manoeuvre between imaging targets at 5-20 mrad/s and slew at 50-200 mrad/s. Industrial robot wrist joints (KUKA, Fanuc) operate at 17-175 mrad/s. Optical encoders (Heidenhain RON 905) can measure angular velocity to 0.1 mrad/s accuracy. 1 mrad/s = 10\u207b\u00b3 rad/s \u2248 0.0573 \u00b0/s \u2248 9.549 \u00d7 10\u207b\u00b3 rpm.",
    symbol: "mrad/s"
  },
  revolutions_per_hour: {
    name: "Revolutions per hour",
    description: "The revolution per hour (rev/h) equals \u03c0/1800 rad/s \u2248 1.745 \u00d7 10\u207b\u00b3 rad/s, used for very slow rotating machinery. Cement rotary kilns - the world's longest continuously rotating machines (up to 230 m, 4000 t) - rotate at 1-5 rev/h; ball mills for ore grinding at 10-20 rev/h; concrete mixer trucks at 1-4 rev/h during transport. Large astronomical antenna drives and slow-scan telescope azimuth movements are also conveniently expressed in rev/h. 1 rev/h = \u03c0/1800 rad/s \u2248 0.02778 rpm.",
    symbol: "rev/h"
  },
  radians_per_minute: {
    name: "Radians per minute",
    description: "The radian per minute (rad/min) equals 1/60 rad/s \u2248 0.01667 rad/s, convenient for wind turbine rotors and slow industrial drives. Large direct-drive offshore wind turbines (14-15 MW, e.g. Siemens Gamesa SG 14-222, Vestas V236) rotate at 4-15 rad/min (0.064-0.24 rpm). Pharmaceutical coating pans rotate at 0.5-10 rad/min; large CNC rotary tables for turbine disc machining run at 0.2-8 rad/min. VLT 8.2 m telescope tracks stars at the sidereal rate \u03c0/720 \u2248 0.00436 rad/min. 1 rad/min = 1/60 rad/s \u2248 0.1592 rpm.",
    symbol: "rad/min"
  },
  gradians_per_second: {
    name: "Gradians per second",
    description: "The gradian per second (gon/s) equals \u03c0/200 rad/s \u2248 0.01571 rad/s, where the gradian (1 gon = 0.9\u00b0) divides the right angle into 100 equal parts. Introduced during the French Revolution as part of decimal reform, the gradian remains the standard angular unit in European continental surveying: total stations (Leica TS16, Trimble S9) sold in Germany, France, and Scandinavia default to gon; Austrian and Swiss cadastral land registers record all bearings in gon. DIN 18709 specifies survey work in gon; ISO 80000-3 acknowledges the unit. 1 gon/s = \u03c0/200 rad/s \u2248 0.9 \u00b0/s \u2248 0.15 rpm.",
    symbol: "gon/s"
  },
  degrees_per_second: {
    name: "Degrees per second",
    description: "The degree per second (\u00b0/s) equals \u03c0/180 rad/s \u2248 0.01745 rad/s, the most widely used angular velocity unit in consumer electronics, robotics, and aviation. MEMS gyroscopes in smartphones range from \u00b116 \u00b0/s (precision mode) to \u00b12000 \u00b0/s (sports mode). Normal human head rotation is 30-80 \u00b0/s; car crash events exceed 2000 \u00b0/s. Weather radar antennas (WSR-88D NEXRAD) rotate at 3-6 \u00b0/s; FAA flight data recorders log roll rate to \u00b1100 \u00b0/s. Robot joints (Universal Robots UR5e) operate at 10-180 \u00b0/s. 1 \u00b0/s = \u03c0/180 rad/s \u2248 1/6 rpm.",
    symbol: "\u00b0/s"
  },
  revolutions_per_minute: {
    name: "Revolutions per minute",
    description: "The revolution per minute (rpm) equals \u03c0/30 rad/s \u2248 0.1047 rad/s, the most universally recognised rotational speed unit in mechanical engineering. Common references: car petrol engines idle at 600-900 rpm, redline at 5500-8500 rpm; large marine diesel engines run at 75-120 rpm; electric induction motor synchronous speed = 60f/p rpm (3000 rpm at 50 Hz, 2-pole); hard drives at 5400-15000 rpm; dental turbines up to 400000 rpm; washing machine spin 400-1600 rpm. ISO 6336 and ANSI/AGMA gear standards use rpm throughout. 1 rpm = \u03c0/30 rad/s = 6 \u00b0/s = 1/60 rps.",
    symbol: "rpm"
  },
  radians_per_second: {
    name: "Radians per second",
    description: "The radian per second (rad/s) is the SI coherent derived unit of angular velocity. It appears naturally in all analytical mechanics: angular frequency \u03c9 = 2\u03c0f; torque-power relation P = \u03c4\u03c9; pendulum natural frequency \u03c9\u2099 = \u221a(g/L); Bode plot frequency axis. All SI engineering software (FEM solvers, robotics middleware ROS, control system toolboxes) uses rad/s natively. Earth's rotation rate \u03a9\u2295 = 7.292 \u00d7 10\u207b\u2075 rad/s. Power electronics PWM carriers at 2-20 kHz correspond to 12566-125664 rad/s. 1 rad/s \u2248 9.5493 rpm = 57.296 \u00b0/s.",
    symbol: "rad/s"
  },
  revolutions_per_second: {
    name: "Revolutions per second",
    description: "The revolution per second (rps) equals 2\u03c0 rad/s \u2248 6.283 rad/s = 60 rpm, used for high-speed machines where rpm values become unwieldy. Numerically equal to hertz (Hz): a 100 rps rotor produces 100 Hz unbalance vibration, directly readable on an FFT spectrum. Gas turbine HP spools (GE GEnx) operate at 100-200 rps at cruise. Ultracentrifuges (Beckman Optima MAX-XP) reach 1333 rps (80000 rpm, 600000 \u00d7 g). NMR magic-angle spinning probes rotate solid samples at 5-170 rps. Dental air turbines peak at 400-800 rps. 1 rps = 2\u03c0 rad/s = 60 rpm = 360 \u00b0/s.",
    symbol: "rps"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toRadiansPerSecond);
}

function convertAngularVelocity() {
  convertFactorBased(toRadiansPerSecond);
}

initConverterPage();
