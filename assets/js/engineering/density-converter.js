// Base unit: kilogram per cubic metre (kg/m³) - the SI coherent derived unit of density.
// All factors express how many kg/m³ equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefix multipliers: nano = 1e-9, micro = 1e-6, milli = 1e-3 (all exact)
//   1 L = 1 dm³ = 1e-3 m³ (exact, by SI definition)
//   1 cm³ = 1e-6 m³ (exact) → g/cm³ = 1e-3 kg / 1e-6 m³ = 1000 kg/m³
//   1 t = 1000 kg (exact, SI definition) → t/m³ = 1000 kg/m³
//   Coincidences (all exact given definitions):
//     µg/L  = mg/m³ = 1e-6 kg/m³
//     mg/L  = g/m³  = 1e-3 kg/m³
//     g/L   = kg/m³ = 1 kg/m³
//     g/cm³ = kg/L  = t/m³ = 1000 kg/m³
//   1 oz (avoirdupois) = 0.028349523125 kg (exact, 1959 International Yard and Pound Agreement)
//   1 lb = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 in = 0.0254 m (exact) → 1 in³ = (0.0254)³ = 1.6387064e-5 m³ (exact as decimal)
//   1 ft = 0.3048 m (exact) → 1 ft³ = (0.3048)³ = 0.028316846592 m³ (exact as decimal)
//   1 US gal = 231 in³ = 3.785411784e-3 m³ (exact: 231 × 1.6387064e-5)
//   1 UK gal = 4.54609 L = 4.54609e-3 m³ (exact, UK Weights and Measures Act 1985)
//   g₀ = 9.80665 m/s² (exact, CGPM 1901) → 1 slug = g₀·lb/ft = 0.45359237·9.80665/0.3048 kg

const toKilogramsPerCubicMetre = {
  nanograms_per_cubic_metre:    1e-12,                                              // exact
  micrograms_per_cubic_metre:   1e-9,                                               // exact
  milligrams_per_cubic_metre:   1e-6,                                               // exact
  micrograms_per_litre:         1e-6,                                               // exact: 1 µg = 1e-9 kg, 1 L = 1e-3 m³; coincidentally equal to mg/m³
  grams_per_cubic_metre:        1e-3,                                               // exact
  milligrams_per_litre:         1e-3,                                               // exact: 1 mg = 1e-6 kg, 1 L = 1e-3 m³; coincidentally equal to g/m³
  kilograms_per_cubic_metre:    1,                                                  // base unit
  grams_per_litre:              1,                                                  // exact: 1 g = 1e-3 kg, 1 L = 1e-3 m³; coincidentally equal to kg/m³
  ounces_per_uk_gallon:         0.028349523125 / 0.00454609,                        // exact given oz and UK gal definitions
  ounces_per_us_gallon:         0.028349523125 / 0.003785411784,                    // exact given oz and US gal definitions
  pounds_per_cubic_foot:        0.45359237 / 0.028316846592,                        // exact given lb and ft definitions
  pounds_per_uk_gallon:         0.45359237 / 0.00454609,                            // exact given lb and UK gal definitions
  pounds_per_us_gallon:         0.45359237 / 0.003785411784,                        // exact given lb and US gal definitions
  slugs_per_cubic_foot:         (0.45359237 * 9.80665 / 0.3048) / 0.028316846592,   // 1 slug = g₀·lb/ft ≈ 14.594 kg; 1 ft³ = 0.028317 m³
  grams_per_cubic_centimetre:   1000,                                               // exact: 1 g = 1e-3 kg, 1 cm³ = 1e-6 m³
  kilograms_per_litre:          1000,                                               // exact: 1 L = 1e-3 m³; coincidentally equal to g/cm³
  tonnes_per_cubic_metre:       1000,                                               // exact: 1 t = 1000 kg; coincidentally equal to g/cm³
  ounces_per_cubic_inch:        0.028349523125 / 1.6387064e-5,                      // 1 in³ = (0.0254)³ m³ (exact given 0.0254 m/in)
  pounds_per_cubic_inch:        0.45359237 / 1.6387064e-5,                          // 1 in³ = (0.0254)³ m³ (exact given 0.0254 m/in)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanograms_per_cubic_metre: {
    name: "Nanograms per cubic metre",
    description: "The nanogram per cubic metre (ng/m\u00b3) equals 10\u207b\u00b9\u00b2 kg/m\u00b3, the resolution floor of atmospheric radionuclide and trace-contaminant monitoring. Sr-90 fallout from nuclear testing is measured in ng/m\u00b3; EPA Method TO-14A quantifies volatile organic compounds at this level. HEPA-filtered clean-room air achieves particulate densities of 1-100 ng/m\u00b3. 1 ng/m\u00b3 = 10\u207b\u00b9\u00b2 kg/m\u00b3 = 10\u207b\u00b3 \u00b5g/m\u00b3.",
    symbol: "ng/m\u00b3"
  },
  micrograms_per_cubic_metre: {
    name: "Micrograms per cubic metre",
    description: "The microgram per cubic metre (\u00b5g/m\u00b3) equals 10\u207b\u2079 kg/m\u00b3, the standard unit for ambient air quality reporting. WHO 2021 guidelines set annual mean limits for PM2.5 at 5 \u00b5g/m\u00b3 and PM10 at 15 \u00b5g/m\u00b3; NIOSH REL for nuisance dust is 10 000 \u00b5g/m\u00b3. Urban background air typically contains 10-50 \u00b5g/m\u00b3 of total suspended particles. 1 \u00b5g/m\u00b3 = 10\u207b\u2079 kg/m\u00b3 = 10\u207b\u2076 g/m\u00b3.",
    symbol: "\u00b5g/m\u00b3"
  },
  milligrams_per_cubic_metre: {
    name: "Milligrams per cubic metre",
    description: "The milligram per cubic metre (mg/m\u00b3) equals 10\u207b\u2076 kg/m\u00b3, the reference unit for industrial occupational exposure limits (OELs). NIOSH REL for respirable crystalline silica is 0.05 mg/m\u00b3; OSHA PEL for Portland cement 15 mg/m\u00b3; ACGIH TLV for calcium carbonate dust 10 mg/m\u00b3. Numerically equal to \u00b5g/L, bridging airborne and aqueous analysis. 1 mg/m\u00b3 = 10\u207b\u2076 kg/m\u00b3 = 1 \u00b5g/L.",
    symbol: "mg/m\u00b3"
  },
  micrograms_per_litre: {
    name: "Micrograms per litre",
    description: "The microgram per litre (\u00b5g/L) equals 10\u207b\u2076 kg/m\u00b3, numerically equal to mg/m\u00b3, and the standard unit for trace-level water quality. EPA maximum contaminant level for arsenic is 10 \u00b5g/L; WHO guideline for lead in drinking water is 10 \u00b5g/L; pharmaceutical water-for-injection requires total organic carbon below 500 \u00b5g/L. 1 \u00b5g/L = 10\u207b\u2076 kg/m\u00b3 = 1 mg/m\u00b3 = 1 ppb (mass) in dilute aqueous solutions.",
    symbol: "\u00b5g/L"
  },
  grams_per_cubic_metre: {
    name: "Grams per cubic metre",
    description: "The gram per cubic metre (g/m\u00b3) equals 10\u207b\u00b3 kg/m\u00b3, used for atmospheric moisture content and trace-gas emissions. Absolute humidity at 20\u00b0C is 8-15 g/m\u00b3 depending on relative humidity; ISO 13443 limits pipeline natural gas moisture to 65 mg/m\u00b3 (0.065 g/m\u00b3). Numerically equal to mg/L, simplifying conversion between air and water standards. 1 g/m\u00b3 = 10\u207b\u00b3 kg/m\u00b3 = 1 mg/L.",
    symbol: "g/m\u00b3"
  },
  milligrams_per_litre: {
    name: "Milligrams per litre",
    description: "The milligram per litre (mg/L) equals 10\u207b\u00b3 kg/m\u00b3 and is the dominant unit in water chemistry and environmental analysis. Numerically equivalent to ppm (mass) for dilute aqueous solutions; WHO drinking-water guideline for nitrate is 50 mg/L, for fluoride 1.5 mg/L. Biological oxygen demand (BOD), chemical oxygen demand (COD), and total suspended solids (TSS) are all reported in mg/L. 1 mg/L = 10\u207b\u00b3 kg/m\u00b3 = 1 g/m\u00b3.",
    symbol: "mg/L"
  },
  kilograms_per_cubic_metre: {
    name: "Kilograms per cubic metre",
    description: "The kilogram per cubic metre (kg/m\u00b3) is the SI coherent derived unit of density. Air at standard sea level is \u22481.225 kg/m\u00b3; fresh water at 4\u00b0C is \u2248999.97 kg/m\u00b3; liquid mercury is 13 534 kg/m\u00b3; osmium (densest stable element) is 22 590 kg/m\u00b3. Used in the continuity equation, Bernoulli's principle, and all SI-based fluid dynamics calculations. 1 kg/m\u00b3 = 1 g/L \u22480.06243 lb/ft\u00b3.",
    symbol: "kg/m\u00b3"
  },
  grams_per_litre: {
    name: "Grams per litre",
    description: "The gram per litre (g/L) equals 1 kg/m\u00b3, numerically identical to kg/m\u00b3 but preferred in life sciences and food technology. Blood glucose is reported in g/L in European clinical practice (normal fasting: 0.7-1.0 g/L); intravenous glucose solutions are 50 g/L (5%) or 100 g/L (10%). Fermentation engineers track biomass and substrate concentration in g/L. 1 g/L = 1 kg/m\u00b3 \u22488.345 \u00d7 10\u207b\u00b3 lb/gal (US).",
    symbol: "g/L"
  },
  ounces_per_uk_gallon: {
    name: "Ounces per UK gallon",
    description: "The ounce per UK gallon (oz/gal UK) equals \u22486.236 kg/m\u00b3, based on the avoirdupois ounce (28.349 g) and the UK gallon (4.54609 L). Used historically in British brewing, food manufacturing, and naval fuel specifications before metric adoption. Legacy recipes and Admiralty tables still express density in oz/gal UK. 1 oz/gal (UK) \u22486.236 kg/m\u00b3 = (1/16) lb/gal (UK).",
    symbol: "oz/gal (UK)"
  },
  ounces_per_us_gallon: {
    name: "Ounces per US gallon",
    description: "The ounce per US gallon (oz/gal US) equals \u22487.489 kg/m\u00b3, combining the avoirdupois ounce (28.349 g) and the US liquid gallon (3.785 L). Used in US brewing and beverage production for measuring dissolved solids in wort and syrup; homebrewing grain-to-water ratios are often cited in oz/gal. 1 oz/gal (US) \u22487.489 kg/m\u00b3 = (1/16) lb/gal (US).",
    symbol: "oz/gal (US)"
  },
  pounds_per_cubic_foot: {
    name: "Pounds per cubic foot",
    description: "The pound per cubic foot (lb/ft\u00b3) equals \u224816.018 kg/m\u00b3, widely used in US construction, soil mechanics, and insulation specifications. Softwood framing lumber averages 25-35 lb/ft\u00b3; compacted soil 90-130 lb/ft\u00b3; fresh water \u224862.43 lb/ft\u00b3; concrete 145-150 lb/ft\u00b3. ASTM standards for concrete, soil, and geotextiles routinely cite lb/ft\u00b3. 1 lb/ft\u00b3 = 0.45359237/0.028316846592 kg/m\u00b3 \u224816.018 kg/m\u00b3.",
    symbol: "lb/ft\u00b3"
  },
  pounds_per_uk_gallon: {
    name: "Pounds per UK gallon",
    description: "The pound per UK gallon (lb/gal UK) equals \u224899.776 kg/m\u00b3, based on the avoirdupois pound and the UK gallon (4.54609 L). Used historically in British petroleum refining and Admiralty fuel specifications; the original UK specific-gravity tables reference lb/gal UK. Still encountered in some Commonwealth marine and aviation standards. 1 lb/gal (UK) \u224899.776 kg/m\u00b3 \u22486.228 lb/ft\u00b3.",
    symbol: "lb/gal (UK)"
  },
  pounds_per_us_gallon: {
    name: "Pounds per US gallon",
    description: "The pound per US gallon (lb/gal US) equals \u2248119.826 kg/m\u00b3, the standard density unit in US petroleum refining, drilling, and petrochemical industries. Water at 60\u00b0F is 8.337 lb/gal; diesel 6.8-7.3 lb/gal; medium crude oil 7.1-8.0 lb/gal. Drilling mud weight per API RP 13B is specified in lb/gal (US) to control wellbore pressure. 1 lb/gal (US) \u2248119.826 kg/m\u00b3 \u22487.481 lb/ft\u00b3.",
    symbol: "lb/gal (US)"
  },
  slugs_per_cubic_foot: {
    name: "Slugs per cubic foot",
    description: "The slug per cubic foot (slug/ft\u00b3) equals \u2248515.379 kg/m\u00b3, used in US customary dynamics where forces are in pound-force. The US Standard Atmosphere gives sea-level air density as 2.377 \u00d7 10\u207b\u00b3 slug/ft\u00b3; it appears in pre-SI aerospace textbooks (NACA technical notes) and compressible flow equations. 1 slug \u224814.594 kg. 1 slug/ft\u00b3 \u2248515.379 kg/m\u00b3 \u224832.174 lb/ft\u00b3.",
    symbol: "slug/ft\u00b3"
  },
  grams_per_cubic_centimetre: {
    name: "Grams per cubic centimetre",
    description: "The gram per cubic centimetre (g/cm\u00b3) equals 1000 kg/m\u00b3, the most intuitive density unit in material science and chemistry. It equals 1 kg/L and 1 t/m\u00b3. Pure water at 4\u00b0C is 0.9998 g/cm\u00b3; aluminium 2.70 g/cm\u00b3; iron 7.87 g/cm\u00b3; gold 19.30 g/cm\u00b3; osmium 22.59 g/cm\u00b3. Polymer datasheets, mineralogy, and gemological tables routinely use g/cm\u00b3. 1 g/cm\u00b3 = 1000 kg/m\u00b3 \u224862.428 lb/ft\u00b3.",
    symbol: "g/cm\u00b3"
  },
  kilograms_per_litre: {
    name: "Kilograms per litre",
    description: "The kilogram per litre (kg/L) equals 1000 kg/m\u00b3, numerically identical to g/cm\u00b3 and t/m\u00b3, and preferred in industrial process engineering and chemical logistics. Dense liquids appear on safety data sheets in kg/L: sulfuric acid 1.84 kg/L, mercury 13.53 kg/L, bromine 3.10 kg/L. International bulk-liquid container certification requires density in kg/L. 1 kg/L = 1000 kg/m\u00b3 = 1 g/cm\u00b3 \u22488.345 lb/gal (US).",
    symbol: "kg/L"
  },
  tonnes_per_cubic_metre: {
    name: "Tonnes per cubic metre",
    description: "The tonne per cubic metre (t/m\u00b3) equals 1000 kg/m\u00b3, coincident with g/cm\u00b3 and kg/L. Geotechnical engineering specifies bulk unit weights in t/m\u00b3: saturated clay 1.8-2.2 t/m\u00b3, dry sand 1.4-1.7 t/m\u00b3, reinforced concrete 2.4-2.5 t/m\u00b3. Bulk-material handling uses t/m\u00b3 for conveyor and silo capacity calculations, yielding mass in tonnes directly from volume in m\u00b3. 1 t/m\u00b3 = 1000 kg/m\u00b3 = 1 g/cm\u00b3.",
    symbol: "t/m\u00b3"
  },
  ounces_per_cubic_inch: {
    name: "Ounces per cubic inch",
    description: "The ounce per cubic inch (oz/in\u00b3) equals \u22481729.994 kg/m\u00b3, a US customary unit for dense compact materials. Precision ballistic-projectile and machined-component datasheets give density in oz/in\u00b3: structural steel \u22484.51 oz/in\u00b3, lead \u22486.55 oz/in\u00b3, gold \u224811.16 oz/in\u00b3. Also found in explosive loading-density specifications. 1 oz/in\u00b3 = (1/16) lb/in\u00b3 \u2248108.12 lb/ft\u00b3 \u22481729.994 kg/m\u00b3.",
    symbol: "oz/in\u00b3"
  },
  pounds_per_cubic_inch: {
    name: "Pounds per cubic inch",
    description: "The pound per cubic inch (lb/in\u00b3) equals \u224827 679.9 kg/m\u00b3, the standard US customary unit for engineering material density. Mechanical engineering handbooks list metals in lb/in\u00b3: steel 0.284, aluminium 0.098, copper 0.324, tungsten 0.697, lead 0.410. FEA software (ANSYS, Nastran) configured with US unit sets reads material density as lb/in\u00b3. 1 lb/in\u00b3 = 1728 lb/ft\u00b3 = 16 oz/in\u00b3 \u224827 679.9 kg/m\u00b3.",
    symbol: "lb/in\u00b3"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toKilogramsPerCubicMetre);
}

function convertDensity() {
  convertFactorBased(toKilogramsPerCubicMetre);
}

initConverterPage();
