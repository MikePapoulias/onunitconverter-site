// Base unit: kilogram square metre (kg·m²) - the SI coherent derived unit of moment of inertia.
// All factors express how many kg·m² equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefix multipliers: milli = 1e-3, centi = 1e-2, deci = 1e-1 (all exact)
//   1 mm = 1e-3 m (exact) → 1 mm² = 1e-6 m²; 1 g·mm² = 1e-3 kg × 1e-6 m² = 1e-9 kg·m²
//   1 cm = 1e-2 m (exact) → 1 cm² = 1e-4 m²; 1 g·cm² = 1e-3 kg × 1e-4 m² = 1e-7 kg·m²
//   1 dm = 0.1 m (exact)  → 1 dm² = 0.01 m²; 1 kg·dm² = 1 kg × 0.01 m² = 1e-2 kg·m²
//   1 in = 0.0254 m (exact) → 1 in² = (0.0254)² = 6.4516e-4 m² (exact as decimal)
//   1 ft = 0.3048 m (exact) → 1 ft² = (0.3048)² = 0.09290304 m² (exact as decimal)
//   1 oz (avoirdupois) = 0.028349523125 kg (exact, 1959 International Yard and Pound Agreement)
//   1 lb = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   g₀ = 9.80665 m/s² (exact, CGPM 1901) → 1 slug = g₀·lb/ft = 0.45359237·9.80665/0.3048 kg
//   Simplification: 1 slug·ft² = g₀·lb·ft = 0.45359237·9.80665·0.3048 kg·m² (exact given g₀, lb, ft)
//   1 t = 1000 kg (exact, SI definition)

const toKilogramsSquareMetres = {
  grams_square_millimetres:      1e-9,                                                 // exact: 1e-3 kg × 1e-6 m²
  grams_square_centimetres:      1e-7,                                                 // exact: 1e-3 kg × 1e-4 m²
  kilograms_square_millimetres:  1e-6,                                                 // exact: 1 kg × 1e-6 m²
  ounces_square_inches:          0.028349523125 * 6.4516e-4,                           // exact given oz, in definitions
  kilograms_square_centimetres:  1e-4,                                                 // exact: 1 kg × 1e-4 m²
  pounds_square_inches:          0.45359237 * 6.4516e-4,                               // exact given lb, in definitions
  grams_square_metres:           1e-3,                                                 // exact: 1e-3 kg × 1 m²
  slugs_square_inches:           (0.45359237 * 9.80665 / 0.3048) * 6.4516e-4,         // exact: 1 slug × 1 in²
  kilograms_square_decimetres:   1e-2,                                                 // exact: 1 kg × 0.01 m²
  pounds_square_feet:            0.45359237 * 0.09290304,                              // exact given lb, ft definitions
  kilograms_square_metres:       1,                                                    // base unit (SI)
  slugs_square_feet:             0.45359237 * 9.80665 * 0.3048,                       // exact: g₀·lb·ft = 1 slug·ft²
  tonnes_square_metres:          1000,                                                 // exact: 1 t = 1000 kg
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  grams_square_millimetres: {
    name: "Gram square millimetres",
    description: "The gram square millimetre (g\u00b7mm\u00b2) equals 10\u207b\u2079 kg\u00b7m\u00b2, the natural unit for MEMS gyroscope resonators and micro-fabricated spinning structures. CubeSat reaction wheel rotors range 1-50 g\u00b7mm\u00b2; chip-scale IMU proof masses sit below 1 g\u00b7mm\u00b2. Watchmaking balance wheels and miniature turbine blades also fall in this range. 1 g\u00b7mm\u00b2 = 10\u207b\u2079 kg\u00b7m\u00b2 = 0.01 g\u00b7cm\u00b2.",
    symbol: "g\u00b7mm\u00b2"
  },
  grams_square_centimetres: {
    name: "Gram square centimetres",
    description: "The gram square centimetre (g\u00b7cm\u00b2) equals 10\u207b\u2077 kg\u00b7m\u00b2, the dominant unit in small electric motor and servo motor catalogues. Maxon RE-series micromotors list rotor inertia from 0.1-10 g\u00b7cm\u00b2; stepper motors for 3D printers range 50-500 g\u00b7cm\u00b2. Clockmaking and watch-movement analysis use g\u00b7cm\u00b2 for balance-wheel inertia calculations. 1 g\u00b7cm\u00b2 = 10\u207b\u2077 kg\u00b7m\u00b2 = 0.01 kg\u00b7mm\u00b2.",
    symbol: "g\u00b7cm\u00b2"
  },
  kilograms_square_millimetres: {
    name: "Kilogram square millimetres",
    description: "The kilogram square millimetre (kg\u00b7mm\u00b2) equals 10\u207b\u2076 kg\u00b7m\u00b2, widely used in CAD software and precision mechanical engineering. SolidWorks, CATIA, and Siemens NX report mass moment of inertia in kg\u00b7mm\u00b2 for gear blanks, pulley hubs, and precision spindle assemblies. Industrial small servo motor rotors: 100-10 000 kg\u00b7mm\u00b2. 1 kg\u00b7mm\u00b2 = 10\u207b\u2076 kg\u00b7m\u00b2 = 10 g\u00b7cm\u00b2 = 0.01 kg\u00b7cm\u00b2.",
    symbol: "kg\u00b7mm\u00b2"
  },
  ounces_square_inches: {
    name: "Ounce square inches",
    description: "The ounce square inch (oz\u00b7in\u00b2) equals \u22481.829 \u00d7 10\u207b\u2075 kg\u00b7m\u00b2, used in US precision instrument engineering for light rotating components. Pre-metric American gyroscope gimbal assemblies and US MIL-SPEC instrument servo actuators cited inertia in oz\u00b7in\u00b2; NACA gyroscope test reports use oz\u00b7in\u00b2 for small rotating elements. 1 oz\u00b7in\u00b2 \u22481.829 \u00d7 10\u207b\u2075 kg\u00b7m\u00b2 = 16 oz\u00b7in\u00b2 per lb\u00b7in\u00b2.",
    symbol: "oz\u00b7in\u00b2"
  },
  kilograms_square_centimetres: {
    name: "Kilogram square centimetres",
    description: "The kilogram square centimetre (kg\u00b7cm\u00b2) equals 10\u207b\u2074 kg\u00b7m\u00b2, the dominant unit in European servo and industrial drive engineering. ABB, Siemens, and Bosch Rexroth servo drive datasheets specify rotor and reflected load inertia in kg\u00b7cm\u00b2; IEC 61800 drive sizing balances motor-to-load inertia ratio in kg\u00b7cm\u00b2. Industrial servomotors: 0.05-200 kg\u00b7cm\u00b2. 1 kg\u00b7cm\u00b2 = 10\u207b\u2074 kg\u00b7m\u00b2 = 100 kg\u00b7mm\u00b2.",
    symbol: "kg\u00b7cm\u00b2"
  },
  pounds_square_inches: {
    name: "Pound square inches",
    description: "The pound square inch (lb\u00b7in\u00b2) equals \u22482.926 \u00d7 10\u207b\u2074 kg\u00b7m\u00b2, the standard US customary unit for motor and machinery rotors. Rockwell Automation, Parker Hannifin, and Allied Motion servo sizing catalogs express rotor inertia in lb\u00b7in\u00b2; US machine-tool spindle and conveyor drive specifications use lb\u00b7in\u00b2. High-speed spindle rotors: 5-50 lb\u00b7in\u00b2. 1 lb\u00b7in\u00b2 \u22482.926 \u00d7 10\u207b\u2074 kg\u00b7m\u00b2 = 1/144 lb\u00b7ft\u00b2.",
    symbol: "lb\u00b7in\u00b2"
  },
  grams_square_metres: {
    name: "Gram square metres",
    description: "The gram square metre (g\u00b7m\u00b2) equals 10\u207b\u00b3 kg\u00b7m\u00b2, used for very light rotors with large radii. Lightweight UAV propeller blades, model aircraft propellers, and thin foam circular discs are characterised in g\u00b7m\u00b2; it bridges g\u00b7cm\u00b2 and kg\u00b7m\u00b2 in laboratory-scale spinning experiments. 1 g\u00b7m\u00b2 = 10\u207b\u00b3 kg\u00b7m\u00b2 = 10 kg\u00b7cm\u00b2 = 10 000 g\u00b7cm\u00b2.",
    symbol: "g\u00b7m\u00b2"
  },
  slugs_square_inches: {
    name: "Slug square inches",
    description: "The slug square inch (slug\u00b7in\u00b2) equals \u22489.415 \u00d7 10\u207b\u00b3 kg\u00b7m\u00b2, used in US aerospace guidance and flight mechanics. Pre-metric inertial navigation unit (INU) test reports and NACA stability-derivative tables listed gyroscope platform inertia in slug\u00b7in\u00b2; US autopilot servo actuator sizing also uses slug\u00b7in\u00b2. 1 slug\u00b7in\u00b2 \u22489.415 \u00d7 10\u207b\u00b3 kg\u00b7m\u00b2 \u224832.17 lb\u00b7in\u00b2.",
    symbol: "slug\u00b7in\u00b2"
  },
  kilograms_square_decimetres: {
    name: "Kilogram square decimetres",
    description: "The kilogram square decimetre (kg\u00b7dm\u00b2) equals 10\u207b\u00b2 kg\u00b7m\u00b2, occasionally used in SI-metric flywheel and rotor analysis when the decimetre is a convenient length scale. Lathe chuck jaws, grinding wheel flanges, and small centrifuges fall in the 0.1-10 kg\u00b7dm\u00b2 range. 1 kg\u00b7dm\u00b2 = 10\u207b\u00b2 kg\u00b7m\u00b2 = 100 kg\u00b7cm\u00b2 = 10 g\u00b7m\u00b2.",
    symbol: "kg\u00b7dm\u00b2"
  },
  pounds_square_feet: {
    name: "Pound square feet",
    description: "The pound square foot (lb\u00b7ft\u00b2) equals \u22480.04214 kg\u00b7m\u00b2, the dominant imperial unit for machine and vehicle rotational inertias. Aircraft control-surface counterbalancing, propeller blade inertia, and turbocharger rotor dynamics are specified in lb\u00b7ft\u00b2; steam turbine discs and helicopter tail-rotor assemblies: 1-10 000 lb\u00b7ft\u00b2. 1 lb\u00b7ft\u00b2 \u22480.04214 kg\u00b7m\u00b2 = 144 lb\u00b7in\u00b2 \u22480.03108 slug\u00b7ft\u00b2.",
    symbol: "lb\u00b7ft\u00b2"
  },
  kilograms_square_metres: {
    name: "Kilogram square metres",
    description: "The kilogram square metre (kg\u00b7m\u00b2) is the SI coherent derived unit of moment of inertia. It defines the rotational analogue of mass in Newton's second law: \u03c4 = I\u03b1 (torque in N\u00b7m, angular acceleration in rad/s\u00b2). A solid disc of 10 kg and 0.5 m radius has I = 1.25 kg\u00b7m\u00b2. Electric motor rotors: 0.001-10 kg\u00b7m\u00b2. Wind turbine rotors: 10\u2076-10\u2078 kg\u00b7m\u00b2. 1 kg\u00b7m\u00b2 = 10 000 kg\u00b7cm\u00b2 \u22480.7376 slug\u00b7ft\u00b2.",
    symbol: "kg\u00b7m\u00b2"
  },
  slugs_square_feet: {
    name: "Slug square feet",
    description: "The slug square foot (slug\u00b7ft\u00b2) equals \u22481.3558 kg\u00b7m\u00b2, the fundamental moment of inertia unit in US customary aerodynamics and spacecraft attitude dynamics. Pre-SI spacecraft inertia tensors are tabulated in slug\u00b7ft\u00b2 - NASA Apollo CSM principal moments ranged 12 000-90 000 slug\u00b7ft\u00b2. USAF flight manuals and NACA stability reports use slug\u00b7ft\u00b2. 1 slug\u00b7ft\u00b2 \u22481.3558 kg\u00b7m\u00b2 = 32.174 lb\u00b7ft\u00b2.",
    symbol: "slug\u00b7ft\u00b2"
  },
  tonnes_square_metres: {
    name: "Tonne square metres",
    description: "The tonne square metre (t\u00b7m\u00b2) equals 1000 kg\u00b7m\u00b2, used for large industrial rotors and heavy rotating machinery. A 60-tonne paper-machine calendar roll of 0.5 m radius has I \u22487.5 t\u00b7m\u00b2; synchronous hydro-generator rotors: 50-2000 t\u00b7m\u00b2; large marine propulsion shafts: 5-50 t\u00b7m\u00b2. 1 t\u00b7m\u00b2 = 1000 kg\u00b7m\u00b2 \u2248737.6 slug\u00b7ft\u00b2 \u224823 730 lb\u00b7ft\u00b2.",
    symbol: "t\u00b7m\u00b2"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toKilogramsSquareMetres);
}

function convertMomentOfInertia() {
  convertFactorBased(toKilogramsSquareMetres);
}

initConverterPage();
