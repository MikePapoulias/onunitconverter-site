// Base unit: joule per kilogram kelvin (J/(kg·K)) - the SI unit for specific heat capacity.
// All factors express how many J/(kg·K) equal 1 unit of the given measure.
//
// Exact foundations:
//   1 J/(kg·K) = 1 J/(kg·°C)  (exact: temperature interval 1 K = 1 °C)
//   1 cal(th)  = 4.184 J  (exact, thermochemical calorie, NIST)
//   1 cal(IT)  = 4.1868 J  (exact, international table calorie)
//   1 kcal(th) = 4184 J  (exact: 1000 × 4.184 J)
//   1 kcal(IT) = 4186.8 J  (exact: 1000 × 4.1868 J)
//   1 BTU(th)  = 1054.350264488889 J  (exact: 453.59237 g × 5/9 K × 4.184 J/(g·K))
//   1 BTU(IT)  = 1055.05585262 J  (exact, ASTM/ISO definition)
//   1 lb       = 0.45359237 kg  (exact, international pound 1959)
//   1 °F       = 5/9 K  (exact, temperature interval)
//   1 Wh       = 3600 J  (exact)
//
// Note: BTU(th)/(lb·°F) = cal(th)/(g·°C) = 4184 J/(kg·K) exactly
//       BTU(IT)/(lb·°F) = kcal(IT)/(kg·°C) = cal(IT)/(g·°C) = 4186.8 J/(kg·K) exactly
//       CHU/(lb·°C) = BTU(IT)/(lb·°F) = 4186.8 J/(kg·K) exactly

const toJoulePerKilogramKelvin = {
  millijoule_per_kilogram_kelvin:          1e-3,                                        // exact: 1 mJ = 10\u207b\u00b3 J
  joule_per_kilogram_kelvin:               1,                                            // reference unit (SI)
  joule_per_kilogram_celsius:              1,                                            // exact: 1 \u00b0C = 1 K (temperature interval)
  kilojoule_per_kilogram_kelvin:           1e3,                                          // exact: 1 kJ = 10\u00b3 J
  kilojoule_per_kilogram_celsius:          1e3,                                          // exact: 1 kJ = 10\u00b3 J; 1 \u00b0C = 1 K
  watt_hour_per_kilogram_kelvin:           3600,                                         // exact: 1 Wh = 3600 J
  cal_th_per_gram_celsius:                 4.184 / 1e-3,                                 // exact: 1 cal(th) = 4.184 J; 1 g = 10\u207b\u00b3 kg  \u2192 4184 J/(kg\u00b7K)
  kcal_th_per_kilogram_celsius:            4184,                                          // exact: 1 kcal(th) = 4184 J; same numeric value as cal(th)/(g\u00b7\u00b0C)
  btu_th_per_pound_fahrenheit:             4184,                                          // exact: 1 BTU(th) = 453.59237 g \u00d7 5/9 K \u00d7 4.184 J/(g\u00b7K) = 1054.350264... J; /lb/\u00b0F = 4184 J/(kg\u00b7K)
  cal_it_per_gram_celsius:                 4.1868 / 1e-3,                                // exact: 1 cal(IT) = 4.1868 J; 1 g = 10\u207b\u00b3 kg  \u2192 4186.8 J/(kg\u00b7K)
  kcal_it_per_kilogram_celsius:            4186.8,                                        // exact: 1 kcal(IT) = 4186.8 J; same numeric value as cal(IT)/(g\u00b7\u00b0C)
  btu_it_per_pound_fahrenheit:             1055.05585262 * 9 / (0.45359237 * 5),         // exact: 1 BTU(IT) = 1055.05585262 J; 1 lb = 0.45359237 kg; 1 \u00b0F = 5/9 K  \u2192 ~4186.8 J/(kg\u00b7K)
  chu_per_pound_celsius:                   1055.05585262 * 9 / (0.45359237 * 5),         // exact: 1 CHU = 9/5 \u00d7 1 BTU(IT); 1 lb; 1 \u00b0C = 1 K  \u2192 same factor as BTU(IT)/(lb\u00b7\u00b0F)
  kilowatt_hour_per_kilogram_kelvin:       3.6e6,                                         // exact: 1 kWh = 3.6 \u00d7 10\u2076 J
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  millijoule_per_kilogram_kelvin: {
    name: "Millijoule per kilogram kelvin",
    description: "The millijoule per kilogram kelvin (mJ/(kg\u00b7K)) equals exactly 10\u207b\u00b3 J/(kg\u00b7K). Used for very light gases at extreme conditions and in precision calorimetry where tiny heat capacities must be measured. Rarely encountered in standard engineering but useful when expressing specific heat of dilute aerosols or highly rarefied media. 1 mJ/(kg\u00b7K) = 10\u207b\u00b3 J/(kg\u00b7K).",
    symbol: "mJ/(kg\u00b7K)"
  },
  joule_per_kilogram_kelvin: {
    name: "Joule per kilogram kelvin",
    description: "The joule per kilogram kelvin (J/(kg\u00b7K)) is the SI coherent unit for specific heat capacity, defined by the relation Q = mc\u0394T. Water \u22484182, iron \u2248449, aluminium \u2248897, copper \u2248385, glass \u2248840 J/(kg\u00b7K). Referenced in ISO 31-4 and all major international standards. 1 J/(kg\u00b7K) = 1 J/(kg\u00b7\u00b0C) = 10\u207b\u00b3 kJ/(kg\u00b7K).",
    symbol: "J/(kg\u00b7K)"
  },
  joule_per_kilogram_celsius: {
    name: "Joule per kilogram degree Celsius",
    description: "The joule per kilogram degree Celsius (J/(kg\u00b7\u00b0C)) equals exactly 1 J/(kg\u00b7K) since temperature intervals 1 \u00b0C = 1 K. Widely used in building physics, HVAC, and thermodynamics textbooks where Celsius is the standard temperature scale. Material property tables in ISO and EN standards frequently list specific heat in J/(kg\u00b7\u00b0C). 1 J/(kg\u00b7\u00b0C) = 1 J/(kg\u00b7K).",
    symbol: "J/(kg\u00b7\u00b0C)"
  },
  kilojoule_per_kilogram_kelvin: {
    name: "Kilojoule per kilogram kelvin",
    description: "The kilojoule per kilogram kelvin (kJ/(kg\u00b7K)) equals exactly 1000 J/(kg\u00b7K). The most common unit in engineering thermodynamics textbooks and technical data sheets: water \u22484.182, steam \u22482.08, dry air \u22481.005 kJ/(kg\u00b7K). Found throughout ASHRAE, ISO, and EN standards for heat exchanger and HVAC design. 1 kJ/(kg\u00b7K) = 1000 J/(kg\u00b7K) = 1 kJ/(kg\u00b7\u00b0C).",
    symbol: "kJ/(kg\u00b7K)"
  },
  kilojoule_per_kilogram_celsius: {
    name: "Kilojoule per kilogram degree Celsius",
    description: "The kilojoule per kilogram degree Celsius (kJ/(kg\u00b7\u00b0C)) equals exactly 1 kJ/(kg\u00b7K) = 1000 J/(kg\u00b7K) since 1 \u00b0C = 1 K. The preferred notation in European process and chemical engineering where Celsius dominates. Often used interchangeably with kJ/(kg\u00b7K) in material datasheets. Water: 4.182 kJ/(kg\u00b7\u00b0C). 1 kJ/(kg\u00b7\u00b0C) = 1 kJ/(kg\u00b7K) = 1000 J/(kg\u00b7K).",
    symbol: "kJ/(kg\u00b7\u00b0C)"
  },
  watt_hour_per_kilogram_kelvin: {
    name: "Watt-hour per kilogram kelvin",
    description: "The watt-hour per kilogram kelvin (Wh/(kg\u00b7K)) equals exactly 3600 J/(kg\u00b7K). Used in battery and thermal energy storage engineering to express the heat capacity of phase-change materials (PCM), molten salts, and battery cells where energy is quantified in watt-hours. Paraffin wax \u22480.055 Wh/(kg\u00b7K). 1 Wh/(kg\u00b7K) = 3600 J/(kg\u00b7K) = 3.6 kJ/(kg\u00b7K).",
    symbol: "Wh/(kg\u00b7K)"
  },
  cal_th_per_gram_celsius: {
    name: "Thermochemical calorie per gram per degree Celsius",
    description: "The thermochemical calorie per gram per degree Celsius (cal(th)/(g\u00b7\u00b0C)) equals exactly 4184 J/(kg\u00b7K) (1 cal(th) = 4.184 J). The CGS unit of specific heat dominant in older US chemistry and biochemistry. Liquid water has a specific heat of almost exactly 1 cal(th)/(g\u00b7\u00b0C). Slightly smaller than the IT counterpart. 1 cal(th)/(g\u00b7\u00b0C) = 4184 J/(kg\u00b7K) = 1 kcal(th)/(kg\u00b7\u00b0C).",
    symbol: "cal(th)/(g\u00b7\u00b0C)"
  },
  kcal_th_per_kilogram_celsius: {
    name: "Thermochemical kilocalorie per kilogram per degree Celsius",
    description: "The thermochemical kilocalorie per kilogram per degree Celsius (kcal(th)/(kg\u00b7\u00b0C)) equals exactly 4184 J/(kg\u00b7K) (1 kcal(th) = 4184 J = 1000 cal(th)). Used in older continental European and Soviet-era engineering tables as the practical metric unit. Water \u22481 kcal(th)/(kg\u00b7\u00b0C); iron \u22480.107 kcal(th)/(kg\u00b7\u00b0C). 1 kcal(th)/(kg\u00b7\u00b0C) = 4184 J/(kg\u00b7K) = 1 cal(th)/(g\u00b7\u00b0C).",
    symbol: "kcal(th)/(kg\u00b7\u00b0C)"
  },
  btu_th_per_pound_fahrenheit: {
    name: "Thermochemical BTU per pound per degree Fahrenheit",
    description: "The thermochemical BTU per pound per degree Fahrenheit (BTU(th)/(lb\u00b7\u00b0F)) equals exactly 4184 J/(kg\u00b7K) (derived: 1 BTU(th) = 1054.350264 J; /lb/\u00b0F). Numerically identical to cal(th)/(g\u00b7\u00b0C) because both are defined via the thermochemical calorie. Used in older American thermodynamic tables. Water \u22481 BTU(th)/(lb\u00b7\u00b0F). 1 BTU(th)/(lb\u00b7\u00b0F) = 4184 J/(kg\u00b7K).",
    symbol: "BTU(th)/(lb\u00b7\u00b0F)"
  },
  cal_it_per_gram_celsius: {
    name: "International table calorie per gram per degree Celsius",
    description: "The international table calorie per gram per degree Celsius (cal(IT)/(g\u00b7\u00b0C)) equals exactly 4186.8 J/(kg\u00b7K) (1 cal(IT) = 4.1868 J). Standard in steam tables, international thermodynamic references, and pre-SI calorimetry. Slightly larger than the thermochemical variant. Water: 1 cal(IT)/(g\u00b7\u00b0C) at \u224815 \u00b0C. 1 cal(IT)/(g\u00b7\u00b0C) = 4186.8 J/(kg\u00b7K) = 1 kcal(IT)/(kg\u00b7\u00b0C).",
    symbol: "cal(IT)/(g\u00b7\u00b0C)"
  },
  kcal_it_per_kilogram_celsius: {
    name: "International table kilocalorie per kilogram per degree Celsius",
    description: "The international table kilocalorie per kilogram per degree Celsius (kcal(IT)/(kg\u00b7\u00b0C)) equals exactly 4186.8 J/(kg\u00b7K) (1 kcal(IT) = 4186.8 J). The common practical unit in European industry and the 'large calorie' of nutrition science. Water: 1 kcal(IT)/(kg\u00b7\u00b0C); ethanol: 0.588 kcal(IT)/(kg\u00b7\u00b0C). 1 kcal(IT)/(kg\u00b7\u00b0C) = 4186.8 J/(kg\u00b7K) = 1 cal(IT)/(g\u00b7\u00b0C).",
    symbol: "kcal(IT)/(kg\u00b7\u00b0C)"
  },
  btu_it_per_pound_fahrenheit: {
    name: "International table BTU per pound per degree Fahrenheit",
    description: "The international table BTU per pound per degree Fahrenheit (BTU(IT)/(lb\u00b7\u00b0F)) equals (1055.05585262 \u00d7 9)/(0.45359237 \u00d7 5) J/(kg\u00b7K) = 4186.8 J/(kg\u00b7K). The standard US unit for specific heat capacity in ASHRAE, ASTM, and mechanical engineering references. Water: 1.000 BTU(IT)/(lb\u00b7\u00b0F); steel: \u22480.108; air: \u22480.240. 1 BTU(IT)/(lb\u00b7\u00b0F) = 4186.8 J/(kg\u00b7K).",
    symbol: "BTU(IT)/(lb\u00b7\u00b0F)"
  },
  chu_per_pound_celsius: {
    name: "Celsius Heat Unit per pound per degree Celsius",
    description: "The Celsius heat unit per pound per degree Celsius (CHU/(lb\u00b7\u00b0C)) equals exactly (1055.05585262 \u00d7 9)/(0.45359237 \u00d7 5) J/(kg\u00b7K) = 4186.8 J/(kg\u00b7K). The CHU is 9/5 BTU(IT); combined with a 1 \u00b0C instead of 1 \u00b0F interval the factor is the same as BTU(IT)/(lb\u00b7\u00b0F). Used in older UK and Canadian engineering practice. Water: 1 CHU/(lb\u00b7\u00b0C). 1 CHU/(lb\u00b7\u00b0C) = 4186.8 J/(kg\u00b7K).",
    symbol: "CHU/(lb\u00b7\u00b0C)"
  },
  kilowatt_hour_per_kilogram_kelvin: {
    name: "Kilowatt-hour per kilogram kelvin",
    description: "The kilowatt-hour per kilogram kelvin (kWh/(kg\u00b7K)) equals exactly 3.6 \u00d7 10\u2076 J/(kg\u00b7K). Used in large-scale thermal energy storage design - molten salt storage, geothermal reservoirs, and industrial heat banks - where energy is measured in megawatt-hours. 1 kWh/(kg\u00b7K) = 3.6 MJ/(kg\u00b7K) = 1000 Wh/(kg\u00b7K) = 3.6 \u00d7 10\u2076 J/(kg\u00b7K).",
    symbol: "kWh/(kg\u00b7K)"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toJoulePerKilogramKelvin);
}

function convertSpecificHeatCapacity() {
  convertFactorBased(toJoulePerKilogramKelvin);
}

initConverterPage();
