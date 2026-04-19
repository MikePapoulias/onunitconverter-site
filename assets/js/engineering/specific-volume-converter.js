// Base unit: cubic metre per kilogram (m³/kg) - the SI coherent derived unit of specific volume.
// Specific volume is the reciprocal of density: v = 1/ρ.
// All factors express how many m³/kg equal 1 unit of the given measure.
//
// Exact foundations:
//   1 cm³ = 1e-6 m³ (exact) → 1 cm³/g = 1e-6 m³ / 1e-3 kg = 1e-3 m³/kg
//   1 L   = 1e-3 m³ (exact, SI definition) → 1 L/kg = 1e-3 m³/kg
//   1 mL  = 1e-6 m³ (exact) → 1 mL/g = 1e-6/1e-3 = 1e-3 m³/kg (coincidentally equal to cm³/g)
//   Coincidences (all exact given definitions):
//     cm³/g = mL/g = L/kg = dm³/kg = 1e-3 m³/kg
//   1 ft = 0.3048 m (exact) → 1 ft³ = (0.3048)³ = 0.028316846592 m³ (exact as decimal)
//   1 in = 0.0254 m (exact) → 1 in³ = (0.0254)³ = 1.6387064e-5 m³ (exact as decimal)
//   1 lb = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 oz (avoirdupois) = 0.028349523125 kg (exact, 1959 International Yard and Pound Agreement)
//   1 US gal = 231 in³ = 3.785411784e-3 m³ (exact: 231 × 1.6387064e-5)
//   1 UK gal = 4.54609 L = 4.54609e-3 m³ (exact, UK Weights and Measures Act 1985)
//   g₀ = 9.80665 m/s² (exact, CGPM 1901) → 1 slug = g₀·lb/ft ≈ 14.593902937 kg
//   1 t = 1000 kg (exact, SI definition)

const toCubicMetresPerKilogram = {
  cubic_centimetres_per_gram:    1e-3,                                               // exact: 1 cm³ = 1e-6 m³, 1 g = 1e-3 kg
  millilitres_per_gram:          1e-3,                                               // exact: 1 mL = 1 cm³; coincidentally equal to cm³/g
  litres_per_kilogram:           1e-3,                                               // exact: 1 L = 1e-3 m³; coincidentally equal to cm³/g
  cubic_inches_per_pound:        1.6387064e-5 / 0.45359237,                          // exact given in, lb definitions
  cubic_feet_per_slug:           0.028316846592 / (0.45359237 * 9.80665 / 0.3048),  // 1 ft³ / 1 slug; 1 slug = g₀·lb/ft ≈ 14.593903 kg
  cubic_metres_per_kilogram:     1,                                                  // base unit (SI)
  cubic_feet_per_pound:          0.028316846592 / 0.45359237,                        // exact given ft, lb definitions
  uk_gallons_per_pound:          0.00454609 / 0.45359237,                            // exact given UK gal, lb definitions
  us_gallons_per_pound:          0.003785411784 / 0.45359237,                        // exact given US gal, lb definitions
  cubic_metres_per_gram:         1e3,                                                // exact: 1 g = 1e-3 kg → 1/1e-3 = 1000 m³/kg
  cubic_metres_per_tonne:        1e-3,                                               // exact: 1 t = 1000 kg → factor = 1/1000 = 1e-3 m³/kg
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  cubic_centimetres_per_gram: {
    name: "Cubic centimetres per gram",
    description: "The cubic centimetre per gram (cm\u00b3/g) equals 10\u207b\u00b3 m\u00b3/kg, numerically identical to mL/g and L/kg. In thermodynamics, steam tables traditionally list specific volume in cm\u00b3/g: saturated steam at 100\u00b0C = 1671 cm\u00b3/g; water at 20\u00b0C = 1.0018 cm\u00b3/g. Polymer melt flow and food-science density data sheets also use cm\u00b3/g. 1 cm\u00b3/g = 10\u207b\u00b3 m\u00b3/kg = 1 mL/g = 1 L/kg.",
    symbol: "cm\u00b3/g"
  },
  millilitres_per_gram: {
    name: "Millilitres per gram",
    description: "The millilitre per gram (mL/g) equals 10\u207b\u00b3 m\u00b3/kg, coincidentally equal to cm\u00b3/g and L/kg (1 mL = 1 cm\u00b3 exactly). Used in pharmaceutical and cosmetic formulations: specific volume of a cream or gel is measured in mL/g with a pycnometer. Intrinsic viscosity data and sedimentation analysis also report volume in mL/g. 1 mL/g = 10\u207b\u00b3 m\u00b3/kg = 1 cm\u00b3/g = 1 L/kg.",
    symbol: "mL/g"
  },
  litres_per_kilogram: {
    name: "Litres per kilogram",
    description: "The litre per kilogram (L/kg) equals 10\u207b\u00b3 m\u00b3/kg, coincidentally equal to cm\u00b3/g. Process engineers prefer L/kg when working with liquids: specific volume of liquid oxygen at \u2212183\u00b0C = 0.876 L/kg; liquid hydrogen = 14.1 L/kg. HVAC refrigerant datasheets and cryogenic transfer calculations typically give specific volume in L/kg. 1 L/kg = 10\u207b\u00b3 m\u00b3/kg = 1 cm\u00b3/g.",
    symbol: "L/kg"
  },
  cubic_inches_per_pound: {
    name: "Cubic inches per pound",
    description: "The cubic inch per pound (in\u00b3/lb) equals 1.6387064 \u00d7 10\u207b\u2075 / 0.45359237 \u2248 3.6127 \u00d7 10\u207b\u2075 m\u00b3/kg. US aerospace propellant tables and legacy NACA compressible-flow charts list gas specific volumes in in\u00b3/lb; pre-metric Mollier charts for steam plotted enthalpy vs. in\u00b3/lb. 1 in\u00b3/lb \u22483.6127 \u00d7 10\u207b\u2075 m\u00b3/kg \u22480.03613 cm\u00b3/g.",
    symbol: "in\u00b3/lb"
  },
  cubic_feet_per_slug: {
    name: "Cubic feet per slug",
    description: "The cubic foot per slug (ft\u00b3/slug) equals 0.028316846592 / (0.45359237 \u00d7 9.80665 / 0.3048) \u22481.940 \u00d7 10\u207b\u00b3 m\u00b3/kg, the natural specific-volume unit in US customary aerodynamics where mass is in slugs. The USAF Standard Atmosphere and pre-SI textbooks (Anderson, Shevell) give air specific volume in ft\u00b3/slug. 1 ft\u00b3/slug \u22481.940 \u00d7 10\u207b\u00b3 m\u00b3/kg.",
    symbol: "ft\u00b3/slug"
  },
  cubic_metres_per_kilogram: {
    name: "Cubic metres per kilogram",
    description: "The cubic metre per kilogram (m\u00b3/kg) is the SI coherent derived unit of specific volume - the reciprocal of density. In steam and refrigerant thermodynamics, m\u00b3/kg appears in state tables: water at 100\u00b0C, 0.1 MPa has specific volume 1.674 m\u00b3/kg (vapour) and 1.044 \u00d7 10\u207b\u00b3 m\u00b3/kg (liquid). The specific gas constant and molar volume calculations use m\u00b3/kg. 1 m\u00b3/kg = 1000 L/kg = 1000 cm\u00b3/g.",
    symbol: "m\u00b3/kg"
  },
  cubic_feet_per_pound: {
    name: "Cubic feet per pound",
    description: "The cubic foot per pound (ft\u00b3/lb) equals 0.028316846592 / 0.45359237 \u22480.062428 m\u00b3/kg, standard in US power-plant and HVAC engineering. ASHRAE psychrometric charts express humid-air specific volume in ft\u00b3/lb; Spirax Sarco steam tables in US customary units list specific volume in ft\u00b3/lb. Sea-level atmospheric air \u22481.205 kg/m\u00b3 corresponds to \u22480.835 ft\u00b3/lb. 1 ft\u00b3/lb \u22480.062428 m\u00b3/kg \u224862.43 L/kg.",
    symbol: "ft\u00b3/lb"
  },
  uk_gallons_per_pound: {
    name: "UK gallons per pound",
    description: "The UK gallon per pound (gal (UK)/lb) equals 0.00454609 / 0.45359237 \u22480.010022 m\u00b3/kg, historically used in British chemical and petroleum engineering. Specific volume of hydrocarbon solvents and lubricating oils appeared in gal (UK)/lb in pre-metric British Standards. 1 gal (UK)/lb = 8.327 L/kg \u22480.010022 m\u00b3/kg.",
    symbol: "gal (UK)/lb"
  },
  us_gallons_per_pound: {
    name: "US gallons per pound",
    description: "The US gallon per pound (gal (US)/lb) equals 0.003785411784 / 0.45359237 \u22480.0083454 m\u00b3/kg, used in American chemical process engineering. Specific volume of cooling water and process fluids is cited in gal (US)/lb in pre-metric Perry's Chemical Engineers' Handbook tables. 1 gal (US)/lb \u22480.0083454 m\u00b3/kg \u22488.345 L/kg.",
    symbol: "gal (US)/lb"
  },
  cubic_metres_per_gram: {
    name: "Cubic metres per gram",
    description: "The cubic metre per gram (m\u00b3/g) equals 1000 m\u00b3/kg, used for ultra-low-density media. Highly porous aerogels achieve apparent specific volumes of 0.5-10 m\u00b3/g; bulk activated-carbon specific volumes reach 1-3 m\u00b3/g per BET surface measurements. Atmospheric aerosol specific volume and trace-gas concentration calculations also employ m\u00b3/g. 1 m\u00b3/g = 1000 m\u00b3/kg = 10\u2076 cm\u00b3/g.",
    symbol: "m\u00b3/g"
  },
  cubic_metres_per_tonne: {
    name: "Cubic metres per tonne",
    description: "The cubic metre per tonne (m\u00b3/t) equals 10\u207b\u00b3 m\u00b3/kg, coincidentally equal to L/kg and cm\u00b3/g, preferred in bulk-material handling, geotechnical engineering, and quarrying. Swell factor tables for excavated rock list specific volume in m\u00b3/t: solid granite \u22480.37 m\u00b3/t, blasted rock \u22480.45 m\u00b3/t. International shipping designates cargo stowage factors in m\u00b3/t. 1 m\u00b3/t = 10\u207b\u00b3 m\u00b3/kg = 1 L/kg.",
    symbol: "m\u00b3/t"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toCubicMetresPerKilogram);
}

function convertSpecificVolume() {
  convertFactorBased(toCubicMetresPerKilogram);
}

initConverterPage();
