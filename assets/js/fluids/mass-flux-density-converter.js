// Base unit: kilogram per square metre per second (kg/(m²·s)) - the SI coherent unit of mass flux density.
// Also written as kg·m⁻²·s⁻¹. All factors express how many kg/(m²·s) equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefixes: milli=1e-3, micro=1e-6 (exact)
//   1 g/(m²·s)  = 1e-3 kg/(m²·s)               (exact)
//   1 g/(m²·min)= 1e-3 / 60 kg/(m²·s)           (exact)
//   1 g/(m²·h)  = 1e-3 / 3600 kg/(m²·s)         (exact)
//   1 kg/(m²·h) = 1 / 3600 kg/(m²·s)            (exact)
//   1 kg/(m²·min)= 1 / 60 kg/(m²·s)             (exact)
//   1 g/(cm²·s) = 1e-3 / (0.01 × 0.01) = 10 kg/(m²·s)   (exact: 1 cm² = 1e-4 m²)
//   1 kg/(cm²·s)= 1 / 1e-4 = 1e4 kg/(m²·s)     (exact)
//   1 lb (avoirdupois) = 0.45359237 kg           (exact, 1959 International Yard and Pound Agreement)
//   1 ft = 0.3048 m (exact); 1 ft² = 0.09290304 m² (exact)
//   1 in = 0.0254 m (exact); 1 in² = 6.4516e-4 m² (exact: 0.0254² = 6.4516e-4)
//   1 lb/(ft²·h)   = 0.45359237 / 0.09290304 / 3600 kg/(m²·s)   ≈ 1.3562293434769... e-3 kg/(m²·s) (exact)
//   1 lb/(ft²·min) = 0.45359237 / 0.09290304 / 60 kg/(m²·s)     ≈ 8.1373760608616... e-2 kg/(m²·s) (exact)
//   1 lb/(ft²·s)   = 0.45359237 / 0.09290304 kg/(m²·s)          ≈ 4.882425636... kg/(m²·s)
//     NOTE: 0.45359237 / 0.09290304 = 0.45359237 / (0.3048 * 0.3048)
//         = 4.88242763651715... kg/(m²·s) (exact in floating-point)
//   1 lb/(in²·s)   = 0.45359237 / (0.0254 * 0.0254) kg/(m²·s)
//                  = 0.45359237 / 6.4516e-4 ≈ 703.0696... kg/(m²·s)

const toKilogramsPerSquareMetreSecond = {
  // -- Milligrams per square metre per hour ---------------------------------
  milligrams_per_square_metre_hour:   1e-6 / 3600,                             // exact
  // -- Milligrams per square metre per minute --------------------------------
  milligrams_per_square_metre_minute: 1e-6 / 60,                              // exact
  // -- Milligrams per square metre per second --------------------------------
  milligrams_per_square_metre_second: 1e-6,                                   // exact
  // -- Grams per square metre per hour ---------------------------------------
  grams_per_square_metre_hour:        1e-3 / 3600,                            // exact
  // -- Grams per square metre per minute -------------------------------------
  grams_per_square_metre_minute:      1e-3 / 60,                              // exact
  // -- Grams per square metre per second -------------------------------------
  grams_per_square_metre_second:      1e-3,                                   // exact
  // -- Pound per square foot per hour ----------------------------------------
  pounds_per_square_foot_hour:        0.45359237 / (0.3048 * 0.3048) / 3600, // exact
  // -- Pound per square foot per minute --------------------------------------
  pounds_per_square_foot_minute:      0.45359237 / (0.3048 * 0.3048) / 60,   // exact
  // -- Kilogram per square metre per hour ------------------------------------
  kilograms_per_square_metre_hour:    1 / 3600,                               // exact
  // -- Kilogram per square metre per minute ----------------------------------
  kilograms_per_square_metre_minute:  1 / 60,                                 // exact
  // -- Kilogram per square metre per second ----------------------------------
  kilograms_per_square_metre_second:  1,                                      // reference (base unit)
  // -- Pound per square foot per second --------------------------------------
  pounds_per_square_foot_second:      0.45359237 / (0.3048 * 0.3048),        // exact
  // -- Gram per square centimetre per second ---------------------------------
  grams_per_square_centimetre_second: 1e-3 / (0.01 * 0.01),                  // = 10 kg/(m²·s) (exact)
  // -- Kilogram per square centimetre per second -----------------------------
  kilograms_per_square_centimetre_second: 1 / (0.01 * 0.01),                 // = 1e4 kg/(m²·s) (exact)
  // -- Pound per square inch per second --------------------------------------
  pounds_per_square_inch_second:      0.45359237 / (0.0254 * 0.0254),        // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  milligrams_per_square_metre_hour: {
    name: "Milligrams per square metre per hour",
    description: "The milligram per square metre per hour (mg/(m\u00b2\u00b7h)) equals 10\u207b\u2076/3600 \u2248 2.778 \u00d7 10\u207b\u00b9\u2070 kg/(m\u00b2\u00b7s). It is the standard unit in corrosion science and protective-coating industry for measuring corrosion rate or moisture vapour transmission rate (MVTR) of membranes and packaging films. Rates of 1-100 mg/(m\u00b2\u00b7h) are typical for polymer films. 1 mg/(m\u00b2\u00b7h) = 10\u207b\u00b3 g/(m\u00b2\u00b7h).",
    symbol: "mg/(m\u00b2\u00b7h)"
  },
  milligrams_per_square_metre_minute: {
    name: "Milligrams per square metre per minute",
    description: "The milligram per square metre per minute (mg/(m\u00b2\u00b7min)) equals 10\u207b\u2076/60 \u2248 1.667 \u00d7 10\u207b\u2078 kg/(m\u00b2\u00b7s). It appears in pharmaceutical dissolution testing and transdermal drug-delivery patch characterisation, where drug release rates measured minute-by-minute are compared to in-vivo absorption data. 1 mg/(m\u00b2\u00b7min) = 60 mg/(m\u00b2\u00b7h).",
    symbol: "mg/(m\u00b2\u00b7min)"
  },
  milligrams_per_square_metre_second: {
    name: "Milligrams per square metre per second",
    description: "The milligram per square metre per second (mg/(m\u00b2\u00b7s)) equals 10\u207b\u2076 kg/(m\u00b2\u00b7s). It is used in aerosol science and atmospheric deposition studies for measuring dry deposition fluxes of particulate matter. Typical urban PM2.5 dry deposition velocities produce fluxes of 0.01-1 mg/(m\u00b2\u00b7s). 1 mg/(m\u00b2\u00b7s) = 3 600 mg/(m\u00b2\u00b7h).",
    symbol: "mg/(m\u00b2\u00b7s)"
  },
  grams_per_square_metre_hour: {
    name: "Grams per square metre per hour",
    description: "The gram per square metre per hour (g/(m\u00b2\u00b7h)) equals 10\u207b\u00b3/3600 \u2248 2.778 \u00d7 10\u207b\u2077 kg/(m\u00b2\u00b7s). It is widely used in textile and paper engineering for moisture management, evaporation studies, and water-vapour transmission rate (WVTR) testing of barrier materials per ISO 2528 and ASTM E96. Breathable fabrics range 500-10 000 g/(m\u00b2\u00b7h) (=500-10 000 gsm/h). 1 g/(m\u00b2\u00b7h) = 10\u207b\u00b3 kg/(m\u00b2\u00b7h).",
    symbol: "g/(m\u00b2\u00b7h)"
  },
  grams_per_square_metre_minute: {
    name: "Grams per square metre per minute",
    description: "The gram per square metre per minute (g/(m\u00b2\u00b7min)) equals 10\u207b\u00b3/60 \u2248 1.667 \u00d7 10\u207b\u2075 kg/(m\u00b2\u00b7s). It is used in spray-coating and inkjet-printing research where deposition rates are measured per pass per unit area. 1 g/(m\u00b2\u00b7min) = 60 g/(m\u00b2\u00b7h).",
    symbol: "g/(m\u00b2\u00b7min)"
  },
  grams_per_square_metre_second: {
    name: "Grams per square metre per second",
    description: "The gram per square metre per second (g/(m\u00b2\u00b7s)) equals 10\u207b\u00b3 kg/(m\u00b2\u00b7s). It is used in combustion engineering for solid-propellant burn rate and ablation rate data, and in food-process engineering for spray drying and freeze-drying mass-transfer calculations. 1 g/(m\u00b2\u00b7s) = 3 600 g/(m\u00b2\u00b7h).",
    symbol: "g/(m\u00b2\u00b7s)"
  },
  pounds_per_square_foot_hour: {
    name: "Pounds per square foot per hour",
    description: "The pound per square foot per hour (lb/(ft\u00b2\u00b7h)) equals 0.45359237/(0.09290304 \u00d7 3600) \u2248 1.356 \u00d7 10\u207b\u00b3 kg/(m\u00b2\u00b7s). It is used in US heat and mass transfer texts (e.g., Perry's Chemical Engineers' Handbook) for mass flux through surfaces in drying, absorption, and distillation operations using consistent BTU-lb-h units. 1 lb/(ft\u00b2\u00b7h) \u2248 1.356 g/(m\u00b2\u00b7s).",
    symbol: "lb/(ft\u00b2\u00b7h)"
  },
  pounds_per_square_foot_minute: {
    name: "Pounds per square foot per minute",
    description: "The pound per square foot per minute (lb/(ft\u00b2\u00b7min)) equals 0.45359237/(0.09290304 \u00d7 60) \u2248 0.08137 kg/(m\u00b2\u00b7s). It appears in US filtration and membrane technology standards, where filter-press and belt-press dewatering rates are stated per square foot per minute. 1 lb/(ft\u00b2\u00b7min) \u2248 81.37 g/(m\u00b2\u00b7s).",
    symbol: "lb/(ft\u00b2\u00b7min)"
  },
  kilograms_per_square_metre_hour: {
    name: "Kilograms per square metre per hour",
    description: "The kilogram per square metre per hour (kg/(m\u00b2\u00b7h)) equals 1/3600 \u2248 2.778 \u00d7 10\u207b\u2074 kg/(m\u00b2\u00b7s). It is the most common practical SI-based unit in process engineering for mass transfer coefficients, boiler evaporation rates, and precipitation flux in meteorology. Rain of 10 mm/h \u2248 10 kg/(m\u00b2\u00b7h). 1 kg/(m\u00b2\u00b7h) = 1 000 g/(m\u00b2\u00b7h).",
    symbol: "kg/(m\u00b2\u00b7h)"
  },
  kilograms_per_square_metre_minute: {
    name: "Kilograms per square metre per minute",
    description: "The kilogram per square metre per minute (kg/(m\u00b2\u00b7min)) equals 1/60 \u2248 0.016\u0305 kg/(m\u00b2\u00b7s). It is used in spray technology and fire-suppression engineering where deluge-system application rates are specified per minute per unit floor/surface area. 1 kg/(m\u00b2\u00b7min) = 60 kg/(m\u00b2\u00b7h).",
    symbol: "kg/(m\u00b2\u00b7min)"
  },
  kilograms_per_square_metre_second: {
    name: "Kilograms per square metre per second",
    description: "The kilogram per square metre per second (kg/(m\u00b2\u00b7s)) is the SI coherent unit of mass flux density, equal to 1 kg\u00b7m\u207b\u00b2\u00b7s\u207b\u00b9. It appears directly in the continuity equation (\u1e41 = \u03c1v) and in Stefan's law for evaporation. Rocket nozzle throat mass flux can reach 500-2000 kg/(m\u00b2\u00b7s); convective heat exchangers: 100-500 kg/(m\u00b2\u00b7s). 1 kg/(m\u00b2\u00b7s) = 1 000 g/(m\u00b2\u00b7s).",
    symbol: "kg/(m\u00b2\u00b7s)"
  },
  pounds_per_square_foot_second: {
    name: "Pounds per square foot per second",
    description: "The pound per square foot per second (lb/(ft\u00b2\u00b7s)) equals 0.45359237/0.09290304 \u2248 4.882 kg/(m\u00b2\u00b7s). It is the coherent FPS mass flux unit, used in US aerospace for rocket motor mass flux, ballistic studies, and hypervelocity heat-shield ablation rate specifications. 1 lb/(ft\u00b2\u00b7s) \u2248 4.882 kg/(m\u00b2\u00b7s).",
    symbol: "lb/(ft\u00b2\u00b7s)"
  },
  grams_per_square_centimetre_second: {
    name: "Grams per square centimetre per second",
    description: "The gram per square centimetre per second (g/(cm\u00b2\u00b7s)) equals 10 kg/(m\u00b2\u00b7s) (exact: 1 g = 10\u207b\u00b3 kg; 1 cm\u00b2 = 10\u207b\u2074 m\u00b2). It is the CGS coherent mass flux unit and appears in older combustion engineering, rocket propulsion, and nuclear reactor thermal-hydraulic literature. Solid-rocket burn rates: 0.01-0.2 g/(cm\u00b2\u00b7s). 1 g/(cm\u00b2\u00b7s) = 10 kg/(m\u00b2\u00b7s).",
    symbol: "g/(cm\u00b2\u00b7s)"
  },
  kilograms_per_square_centimetre_second: {
    name: "Kilograms per square centimetre per second",
    description: "The kilogram per square centimetre per second (kg/(cm\u00b2\u00b7s)) equals 10\u2074 kg/(m\u00b2\u00b7s) (exact: 1 cm\u00b2 = 10\u207b\u2074 m\u00b2). It is used for extreme high-pressure mass-flux situations such as detonation physics, shaped-charge jet penetration, and hypervelocity impact analysis. 1 kg/(cm\u00b2\u00b7s) = 10\u2074 kg/(m\u00b2\u00b7s) = 1 000 g/(cm\u00b2\u00b7s).",
    symbol: "kg/(cm\u00b2\u00b7s)"
  },
  pounds_per_square_inch_second: {
    name: "Pounds per square inch per second",
    description: "The pound per square inch per second (lb/(in\u00b2\u00b7s)) equals 0.45359237/(0.0254 \u00d7 0.0254) \u2248 703.07 kg/(m\u00b2\u00b7s). It is used in US firearms ballistics, shaped-charge and explosives engineering, and hydraulic press analysis where forces per square inch dominate the unit system. 1 lb/(in\u00b2\u00b7s) \u2248 703.07 kg/(m\u00b2\u00b7s) = 144 lb/(ft\u00b2\u00b7s).",
    symbol: "lb/(in\u00b2\u00b7s)"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toKilogramsPerSquareMetreSecond);
}

function convertMassFluxDensity() {
  convertFactorBased(toKilogramsPerSquareMetreSecond);
}

initConverterPage();
