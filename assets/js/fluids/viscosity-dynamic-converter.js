// Base unit: pascal-second (Pa·s) - the SI coherent unit of dynamic viscosity.
// All factors express how many Pa·s equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Pa·s = 1 kg/(m·s) = 1 N·s/m² (exact, SI definition)
//   1 Poise (P) = 0.1 Pa·s (exact, CGS definition: 1 P = 1 g/(cm·s) = 0.1 kg/(m·s))
//   1 cP = 1e-2 P = 1e-3 Pa·s (exact)
//   SI prefixes: micro=1e-6, milli=1e-3, kilo=1e3 (all exact)
//   g0 = 9.80665 m/s² (exact, CGPM 1901 standard gravity)
//   1 lb (avoirdupois) = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 ft = 0.3048 m (exact); 1 in = 0.0254 m (exact)
//   1 lbf = g0 × 1 lb = 9.80665 × 0.45359237 N = 4.4482216152605 N (exact)
//   1 lbf·s/ft² = 4.4482216152605 / (0.3048²) Pa·s = 4.4482216152605 / 0.09290304 Pa·s
//              = 47.88025898033584 Pa·s  (exact in floating-point arithmetic)
//   1 lbf·s/in² = 144 × 1 lbf·s/ft² = 6894.757293168361 Pa·s (exact: 144 in²/ft²)
//   1 slug/(ft·s) = 1 lbf·s/ft² = 47.88025898033584 Pa·s (FPS coherent; same quantity)
//   1 lb/(ft·s)  = 0.45359237 / 0.3048 Pa·s = 1.4881639435695538 Pa·s (exact)
//   1 lb/(ft·h)  = 1.4881639435695538 / 3600 Pa·s = 4.133788732137649e-4 Pa·s (exact)
//   1 lb/(in·s)  = 0.45359237 / 0.0254 Pa·s = 17.857967322834645 Pa·s
//                  (= 12 × 1 lb/(ft·s), exact: 12 in/ft)

const toPascalSeconds = {
  // -- Micropascal-seconds --------------------------------------------------
  micropascal_seconds:          1e-6,                                           // exact
  // -- Millipascal-seconds --------------------------------------------------
  millipascal_seconds:          1e-3,                                           // exact (= 1 cP)
  // -- Centipoises ----------------------------------------------------------
  centipoises:                  1e-3,                                           // exact: 1 cP = 1e-2 P = 1e-3 Pa·s
  // -- Millipoises ----------------------------------------------------------
  millipoises:                  1e-4,                                           // exact: 1 mP = 1e-3 P = 1e-4 Pa·s
  // -- Pascal-seconds (SI) --------------------------------------------------
  pascal_seconds:               1,                                              // reference (base unit)
  // -- Poises ---------------------------------------------------------------
  poises:                       0.1,                                            // exact: 1 P = 0.1 Pa·s
  // -- Pound per foot per second --------------------------------------------
  pounds_per_foot_second:       0.45359237 / 0.3048,                           // = 1.4881639435695538 Pa·s (exact)
  // -- Pound per foot per hour ----------------------------------------------
  pounds_per_foot_hour:         0.45359237 / 0.3048 / 3600,                    // = 4.133788732137649e-4 Pa·s (exact)
  // -- Pound per inch per second --------------------------------------------
  pounds_per_inch_second:       0.45359237 / 0.0254,                           // = 17.857967322834645 Pa·s (exact)
  // -- Slug per foot per second (= lbf·s/ft²) -------------------------------
  slugs_per_foot_second:        9.80665 * 0.45359237 / 0.3048 / 0.3048,       // = 47.88025898033584 Pa·s (exact)
  // -- Pound-force second per square foot -----------------------------------
  lbf_seconds_per_square_foot:  9.80665 * 0.45359237 / (0.3048 * 0.3048),     // = 47.88025898033584 Pa·s (exact; same as slug/(ft·s))
  // -- Pound-force second per square inch -----------------------------------
  lbf_seconds_per_square_inch:  9.80665 * 0.45359237 / (0.3048 * 0.3048) * 144, // = 6894.757293168361 Pa·s (exact: 144 in²/ft²)
  // -- Kilopascal-seconds ---------------------------------------------------
  kilopascal_seconds:           1000,                                           // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  micropascal_seconds: {
    name: "Micropascal-seconds",
    description: "The micropascal-second (\u00b5Pa\u00b7s) equals 10\u207b\u2076 Pa\u00b7s, the viscosity range of dilute gases at ambient conditions. Air at 20 \u00b0C has a dynamic viscosity of \u224818.5 \u00b5Pa\u00b7s; helium \u224819.6 \u00b5Pa\u00b7s; hydrogen \u22489.0 \u00b5Pa\u00b7s. Gas turbine and aerodynamics calculations routinely work at this scale. 1 \u00b5Pa\u00b7s = 10\u207b\u2076 Pa\u00b7s = 10\u207b\u00b3 mPa\u00b7s = 10\u207b\u2075 cP.",
    symbol: "\u00b5Pa\u00b7s"
  },
  millipascal_seconds: {
    name: "Millipascal-seconds",
    description: "The millipascal-second (mPa\u00b7s) equals 10\u207b\u00b3 Pa\u00b7s and is numerically identical to the centipoise (cP). It is the standard unit in modern SI-based fluid-property tables. Water at 20 \u00b0C is \u22481.002 mPa\u00b7s; blood plasma \u22481.2 mPa\u00b7s; light mineral oil 20-60 mPa\u00b7s. 1 mPa\u00b7s = 10\u207b\u00b3 Pa\u00b7s = 1 cP.",
    symbol: "mPa\u00b7s"
  },
  centipoises: {
    name: "Centipoises",
    description: "The centipoise (cP) equals 10\u207b\u00b3 Pa\u00b7s, numerically equal to 1 mPa\u00b7s. It remains the most widely used practical unit in industry because water at 20 \u00b0C has a viscosity of almost exactly 1 cP. Process engineers, petroleum analysts, and food technologists all specify viscosity in cP. Motor oil SAE 10W has a cold-viscosity limit of \u22483 500 cP at -25 \u00b0C. 1 cP = 10\u207b\u00b3 Pa\u00b7s = 10\u207b\u00b2 P.",
    symbol: "cP"
  },
  millipoises: {
    name: "Millipoises",
    description: "The millipoise (mP) equals 10\u207b\u2074 Pa\u00b7s, an intermediate CGS unit between the micropascal-second gas range and the centipoise liquid range. It is occasionally used in older European scientific literature and in the textile industry for sizing-solution viscosity. Air at 20 \u00b0C is \u2248 0.185 mP; a 0.5% polymer solution might read 5-20 mP. 1 mP = 10\u207b\u2074 Pa\u00b7s = 0.1 cP.",
    symbol: "mP"
  },
  pascal_seconds: {
    name: "Pascal-seconds",
    description: "The pascal-second (Pa\u00b7s) is the SI coherent unit of dynamic viscosity, equal to 1 kg/(m\u00b7s) = 1 N\u00b7s/m\u00b2. Honey at 25 \u00b0C is \u22482-10 Pa\u00b7s; glycerol \u22481.4 Pa\u00b7s; bitumen 10\u2074-10\u2078 Pa\u00b7s. It replaced the poise in SI usage and is the standard unit in research and simulation software (CFD, process simulators). 1 Pa\u00b7s = 10 P = 1 000 cP.",
    symbol: "Pa\u00b7s"
  },
  poises: {
    name: "Poises",
    description: "The poise (P) equals 0.1 Pa\u00b7s (exact), defined in the CGS system as 1 g/(cm\u00b7s). Named after Jean Louis Marie Poiseuille, it was the dominant viscosity unit before SI adoption. Fluid-mechanics textbooks and older ASTM and API data tables still list viscosities in P. Motor oil at 100 \u00b0C is \u22480.02-0.05 P; water at 20 \u00b0C is \u22480.01 P (= 1 cP). 1 P = 0.1 Pa\u00b7s = 100 cP.",
    symbol: "P"
  },
  pounds_per_foot_second: {
    name: "Pounds per foot-second",
    description: "The pound per foot-second (lb/(ft\u00b7s)) equals 0.45359237/0.3048 \u2248 1.4882 Pa\u00b7s, the absolute viscosity unit in the foot-pound-second (FPS) system. It appears in legacy US chemical engineering textbooks and fluid mechanics problems stated in USC units. A heavy fuel oil at 50 \u00b0C with viscosity 0.050 Pa\u00b7s = 0.0336 lb/(ft\u00b7s). 1 lb/(ft\u00b7s) \u2248 1.4882 Pa\u00b7s = 14.882 P.",
    symbol: "lb/(ft\u00b7s)"
  },
  pounds_per_foot_hour: {
    name: "Pounds per foot-hour",
    description: "The pound per foot-hour (lb/(ft\u00b7h)) equals 0.45359237 / (0.3048 \u00d7 3600) \u2248 4.134\u00d710\u207b\u2074 Pa\u00b7s. It appears in US heat-transfer and mass-transfer textbooks (e.g., McCabe, Smith & Harriott) where viscosity enters the Reynolds number using consistent hour-based units alongside BTU, ft, and lb quantities. Water at 20 \u00b0C is \u22482.42 lb/(ft\u00b7h). 1 lb/(ft\u00b7h) \u2248 4.134\u00d710\u207b\u2074 Pa\u00b7s.",
    symbol: "lb/(ft\u00b7h)"
  },
  pounds_per_inch_second: {
    name: "Pounds per inch-second",
    description: "The pound per inch-second (lb/(in\u00b7s)) equals 0.45359237/0.0254 \u2248 17.858 Pa\u00b7s, used in plastics extrusion and rubber compounding industries where inch-based dimensions are combined with mass-based flow analysis. Polymer melt viscosities at processing temperatures are sometimes quoted in lb/(in\u00b7s) in older US extrusion equipment manuals. 1 lb/(in\u00b7s) \u2248 17.858 Pa\u00b7s = 12 lb/(ft\u00b7s).",
    symbol: "lb/(in\u00b7s)"
  },
  slugs_per_foot_second: {
    name: "Slugs per foot-second",
    description: "The slug per foot-second (slug/(ft\u00b7s)) equals 1 lbf\u00b7s/ft\u00b2 \u2248 47.880 Pa\u00b7s, the coherent FPS viscosity unit where force is in pound-force. It is used in US aerospace and hydraulic engineering when working with the slug as the unit of mass. Water at 20 \u00b0C has a viscosity of \u22482.09\u00d710\u207b\u2075 slug/(ft\u00b7s); hydraulic fluid MIL-PRF-5606 is \u22483\u00d710\u207b\u2074 slug/(ft\u00b7s) at 100 \u00b0F. 1 slug/(ft\u00b7s) \u2248 47.880 Pa\u00b7s.",
    symbol: "slug/(ft\u00b7s)"
  },
  lbf_seconds_per_square_foot: {
    name: "Pound-force seconds per square foot",
    description: "The pound-force second per square foot (lbf\u00b7s/ft\u00b2) equals (9.80665 \u00d7 0.45359237) / 0.3048\u00b2 \u2248 47.880 Pa\u00b7s, numerically identical to slug/(ft\u00b7s). It appears in US civil and structural engineering fluid mechanics, pump hydraulics texts, and older API pipeline standards. A key identity: 1 lbf\u00b7s/ft\u00b2 = 1 slug/(ft\u00b7s) \u2248 47.880 Pa\u00b7s = 478.8 P.",
    symbol: "lbf\u00b7s/ft\u00b2"
  },
  lbf_seconds_per_square_inch: {
    name: "Pound-force seconds per square inch",
    description: "The pound-force second per square inch (lbf\u00b7s/in\u00b2, reyn) equals 144 \u00d7 47.880 \u2248 6 894.8 Pa\u00b7s. Informally called the \"reyn\" (after Osborne Reynolds), it is used in US tribology and bearing-design engineering, where oil-film viscosity in heavily loaded contacts is stated in reyn. Turbine bearing oils at operating temperature range 0.5-3 \u00d7 10\u207b\u2076 reyn. 1 reyn \u2248 6 894.8 Pa\u00b7s.",
    symbol: "lbf\u00b7s/in\u00b2"
  },
  kilopascal_seconds: {
    name: "Kilopascal-seconds",
    description: "The kilopascal-second (kPa\u00b7s) equals 1 000 Pa\u00b7s, used for highly viscous materials such as bitumen binders, polymer melts, and pitch at processing temperatures. Bitumen (road asphalt) at 60 \u00b0C has a dynamic viscosity of 100-10 000 Pa\u00b7s = 0.1-10 kPa\u00b7s; hot-melt adhesives at application temperature are 10-100 kPa\u00b7s. 1 kPa\u00b7s = 1 000 Pa\u00b7s = 10 000 P.",
    symbol: "kPa\u00b7s"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toPascalSeconds);
}

function convertViscosityDynamic() {
  convertFactorBased(toPascalSeconds);
}

initConverterPage();
