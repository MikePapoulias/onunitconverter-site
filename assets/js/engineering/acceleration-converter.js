// Base unit: metres per second squared (m/s\u00b2) - the SI coherent derived unit of acceleration.
// All factors express how many m/s\u00b2 equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Gal         = 1 cm/s\u00b2 = 0.01 m/s\u00b2 (exact, by CGS unit definition)
//   1 in          = 0.0254 m (exact, 1959 International Yard and Pound Agreement)
//   1 ft          = 0.3048 m (exact)
//   1 mph         = 0.44704 m/s (exact: 1 mi = 1609.344 m, 1 h = 3600 s)
//   1 kn          = 1852/3600 m/s = 463/900 m/s (exact: 1 nmi = 1852 m)
//   1 km/h/s      = 1/3.6 m/s\u00b2 = 5/18 m/s\u00b2 (exact)
//   g\u2080             = 9.80665 m/s\u00b2 (exact, CGPM 1901 Third General Conference resolution)
//   Prefix multipliers: milli = 1e-3, micro = 1e-6 (both exact)

const toMetresPerSecondSquared = {
  microgal:                        1e-8,          // exact: 1 \u00b5Gal = 10\u207b\u2076 cm/s\u00b2 = 10\u207b\u2078 m/s\u00b2
  milligal:                        1e-5,          // exact: 1 mGal = 10\u207b\u00b3 cm/s\u00b2 = 10\u207b\u2075 m/s\u00b2
  millimetres_per_second_squared:  1e-3,          // exact
  gal:                             0.01,          // exact: 1 Gal = 1 cm/s\u00b2 = 0.01 m/s\u00b2
  centimetres_per_second_squared:  0.01,          // exact
  inches_per_second_squared:       0.0254,        // exact: 1 in = 0.0254 m
  kilometres_per_hour_per_second:  1 / 3.6,       // exact: 5/18 m/s\u00b2
  feet_per_second_squared:         0.3048,        // exact: 1 ft = 0.3048 m
  miles_per_hour_per_second:       0.44704,       // exact: 1 mph = 0.44704 m/s
  knots_per_second:                1852 / 3600,   // exact: 1 kn = 1852/3600 m/s = 463/900 m/s\u00b2
  metres_per_second_squared:       1,             // base unit
  standard_gravity:                9.80665,       // exact: CGPM 1901 Third General Conference
  kilometres_per_second_squared:   1000,          // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  microgal: {
    name: "Microgal",
    description: "The microgal (\u00b5Gal) equals 10\u207b\u2078 m/s\u00b2, the resolution benchmark of the world's most sensitive gravimeters. Earth's gravity varies by about 5.19 \u00d7 10\u2076 \u00b5Gal from equator to pole; geodetically meaningful signals - glacial rebound (1-2 \u00b5Gal/year), groundwater recharge (5-150 \u00b5Gal), and volcanic inflation (10-200 \u00b5Gal) - require sub-\u00b5Gal precision. Superconducting gravimeters achieve noise floors below 0.1 \u00b5Gal/\u221aHz; the GRACE-FO satellite pair detected seasonal mass changes of 10-200 \u00b5Gal over major river basins. 1 \u00b5Gal = 10\u207b\u2078 m/s\u00b2 \u2248 1.02 \u00d7 10\u207b\u2079 g\u2080.",
    symbol: "\u00b5Gal"
  },
  milligal: {
    name: "Milligal",
    description: "The milligal (mGal) equals 10\u207b\u2075 m/s\u00b2, the standard unit for geophysical gravity surveys. Bouguer gravity anomalies - reported in mGal after latitude and terrain corrections - reveal subsurface density contrasts: salt domes give +5 to +50 mGal, oceanic spreading ridges -200 to -300 mGal. Standard gravity is \u2248 980 765 mGal at sea level. The International Gravity Reference Frame 2016 is tied to absolute stations accurate to 0.01 mGal. 1 mGal = 10\u207b\u2075 m/s\u00b2 \u2248 1.02 \u00d7 10\u207b\u2076 g\u2080.",
    symbol: "mGal"
  },
  millimetres_per_second_squared: {
    name: "Millimetres per second squared",
    description: "The millimetre per second squared (mm/s\u00b2) equals 10\u207b\u00b3 m/s\u00b2, the standard unit for vibration acceleration in machine condition monitoring. ISO 10816 and ISO 20816 define machinery vibration limits in mm/s and mm/s\u00b2; ISO 10816-3 Zone A boundary for industrial machinery is \u224832 mm/s\u00b2 at 2.2 Hz. Seismically, MMI VI ground shaking (masonry damage threshold) corresponds to 620-1250 mm/s\u00b2 peak ground acceleration. 1 mm/s\u00b2 = 10\u207b\u00b3 m/s\u00b2 \u2248 1.02 \u00d7 10\u207b\u2074 g\u2080.",
    symbol: "mm/s\u00b2"
  },
  gal: {
    name: "Gal",
    description: "The gal (Gal) equals 1 cm/s\u00b2 = 0.01 m/s\u00b2, named after Galileo Galilei in recognition of his free-fall experiments. Earth's surface gravity is approximately 980 Gal; the GRS80 normal gravity formula gives 978.03 Gal at the equator and 983.22 Gal at the poles. The BIPM SI Brochure recognises the Gal as a non-SI unit accepted in geophysics. 1 Gal = 0.01 m/s\u00b2 = 1 cm/s\u00b2 = 1000 mGal \u2248 1.02 \u00d7 10\u207b\u00b3 g\u2080.",
    symbol: "Gal"
  },
  centimetres_per_second_squared: {
    name: "Centimetres per second squared",
    description: "The centimetre per second squared (cm/s\u00b2) is the CGS coherent unit of acceleration, numerically identical to the Gal (1 cm/s\u00b2 = 1 Gal = 0.01 m/s\u00b2). In the CGS system, Newton's second law reads F [dyn] = m [g] \u00d7 a [cm/s\u00b2]. Strong-motion seismology records earthquake accelerograms in cm/s\u00b2: the 1940 El Centro earthquake reached a peak ground acceleration of 341 cm/s\u00b2 \u2248 0.35 g\u2080. Japan's JMA shindo 7 (structural collapse) threshold is above 400 cm/s\u00b2. 1 cm/s\u00b2 = 0.01 m/s\u00b2 = 1 Gal \u2248 1.02 \u00d7 10\u207b\u00b3 g\u2080.",
    symbol: "cm/s\u00b2"
  },
  inches_per_second_squared: {
    name: "Inches per second squared",
    description: "The inch per second squared (in/s\u00b2) equals exactly 0.0254 m/s\u00b2, used in US customary engineering for machine tool acceleration, CNC linear stages, and vibration testing. Standard gravity is g\u2080 = 386.089 in/s\u00b2, a constant embedded in US dynamics software (ANSYS, Nastran) configured with US customary units. High-performance linear motor stages reach 500-2000 in/s\u00b2. 1 in/s\u00b2 = 0.0254 m/s\u00b2 \u2248 2.59 \u00d7 10\u207b\u00b3 g\u2080.",
    symbol: "in/s\u00b2"
  },
  kilometres_per_hour_per_second: {
    name: "Kilometres per hour per second",
    description: "The kilometre per hour per second (km/h/s) equals 1/3.6 m/s\u00b2 \u2248 0.2778 m/s\u00b2, the most intuitive acceleration unit for vehicle performance in countries using km/h. A 0-100 km/h time of 6.3 s (VW Golf GTI) gives a mean acceleration of 15.9 km/h/s \u2248 4.4 m/s\u00b2; a 2.6 s EV sprint corresponds to 38.5 km/h/s \u2248 10.7 m/s\u00b2. Railway standards (EU TSI, JIS) use km/h/s: high-speed trains launch at 2.5-4 km/h/s; emergency braking must reach at least 9.0 km/h/s. 1 km/h/s = 1/3.6 m/s\u00b2 \u2248 2.83 \u00d7 10\u207b\u00b2 g\u2080.",
    symbol: "km/h/s"
  },
  feet_per_second_squared: {
    name: "Feet per second squared",
    description: "The foot per second squared (ft/s\u00b2) equals exactly 0.3048 m/s\u00b2, the coherent acceleration unit in the imperial engineering system where F [lbf] = m [slug] \u00d7 a [ft/s\u00b2]. Standard gravity is g\u2080 = 32.174 ft/s\u00b2, a constant used throughout US aerospace and structural engineering - from legacy NACA reports to modern software (SAP2000, ETABS with US units). A car braking at 0.8 g decelerates at about 25.7 ft/s\u00b2. 1 ft/s\u00b2 = 0.3048 m/s\u00b2 \u2248 3.108 \u00d7 10\u207b\u00b2 g\u2080.",
    symbol: "ft/s\u00b2"
  },
  miles_per_hour_per_second: {
    name: "Miles per hour per second",
    description: "The mile per hour per second (mph/s) equals exactly 0.44704 m/s\u00b2, the natural acceleration unit for road vehicles in the US and UK where speed is measured in mph. A 0-60 mph time of 2.0 s (Tesla Model S Plaid) gives 30 mph/s \u2248 13.4 m/s\u00b2; a typical family car at 8.5 s gives 7.1 mph/s \u2248 3.2 m/s\u00b2. Emergency braking for Amtrak trains requires at least 26 mph/s \u2248 11.6 m/s\u00b2. 1 mph/s = 0.44704 m/s\u00b2 (exact) \u2248 4.56 \u00d7 10\u207b\u00b2 g\u2080.",
    symbol: "mph/s"
  },
  knots_per_second: {
    name: "Knots per second",
    description: "The knot per second (kn/s) equals 1852/3600 m/s\u00b2 \u2248 0.5144 m/s\u00b2, used in aviation and maritime operations where speed is measured in knots. Aircraft carrier catapult launches accelerate an F/A-18 from 0 to ~150 kn in 2-2.5 s, giving 60-75 kn/s \u2248 31-39 m/s\u00b2. A commercial jet rejected takeoff from V1 (~145 kn) to rest in \u224825 s decelerates at 5-6 kn/s \u2248 2.6-3.1 m/s\u00b2. 1 kn/s = 463/900 m/s\u00b2 \u2248 5.25 \u00d7 10\u207b\u00b2 g\u2080.",
    symbol: "kn/s"
  },
  metres_per_second_squared: {
    name: "Metres per second squared",
    description: "The metre per second squared (m/s\u00b2) is the SI coherent derived unit of acceleration, defined as \u0394v/\u0394t (m/s per s). It makes Newton's second law F = ma dimensionally consistent with the newton (1 N = 1 kg\u00b7m/s\u00b2). Key reference values: standard gravity g\u2080 = 9.80665 m/s\u00b2 (exact); ISS centripetal acceleration \u2248 8.68 m/s\u00b2; Falcon 9 max axial load \u2248 49 m/s\u00b2 (5 g\u2080); human tolerance limit for sustained acceleration \u2248 30 m/s\u00b2. All SI engineering and simulation software uses m/s\u00b2 as the native acceleration unit. 1 m/s\u00b2 = 100 Gal \u2248 0.102 g\u2080 \u2248 3.281 ft/s\u00b2.",
    symbol: "m/s\u00b2"
  },
  standard_gravity: {
    name: "Standard gravity",
    description: "Standard gravity (g\u2080) is defined as exactly 9.80665 m/s\u00b2 by the 3rd CGPM (1901), chosen to approximate surface gravity at ~45.5\u00b0 latitude. It is the universal reference for human g-tolerance: fighter pilots sustain up to +9 g\u2080 with G-suit; sustained +3 g\u2080 causes greyout unprotected; F1 drivers experience +5 g\u2080 lateral and -4 g\u2080 braking. Pound-force is defined as 0.45359237 kg \u00d7 g\u2080 = 4.44822 N (exact). Rocket specific impulse in seconds = thrust / (mass flow \u00d7 g\u2080). 1 g\u2080 = 9.80665 m/s\u00b2 = 980.665 Gal \u2248 32.174 ft/s\u00b2 \u2248 35.304 km/h/s.",
    symbol: "g\u2080"
  },
  kilometres_per_second_squared: {
    name: "Kilometres per second squared",
    description: "The kilometre per second squared (km/s\u00b2) equals 1000 m/s\u00b2, useful in astrodynamics where velocities are naturally in km/s. Solar system surface gravities: Earth \u2248 9.807 \u00d7 10\u207b\u00b3 km/s\u00b2, Moon \u2248 1.62 \u00d7 10\u207b\u00b3 km/s\u00b2, Jupiter \u2248 0.0248 km/s\u00b2, Sun \u2248 0.274 km/s\u00b2. Spacecraft trajectory simulators (GMAT, STK) express perturbation accelerations in km/s\u00b2 through the equation of motion \u0101 = -\u03bcr/r\u00b3 + \u03b4a_perturb. Ion engine thrust on a 600 kg probe (8 mN) gives \u2248 1.3 \u00d7 10\u207b\u2078 km/s\u00b2. 1 km/s\u00b2 = 1000 m/s\u00b2 \u2248 101.97 g\u2080.",
    symbol: "km/s\u00b2"
  },
};

function convertAcceleration() {
  convertFactorBased(toMetresPerSecondSquared);
}

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toMetresPerSecondSquared);
}

initConverterPage();
