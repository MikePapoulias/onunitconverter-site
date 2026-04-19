// Base unit: watt per square metre kelvin (W/(m²·K)) - the SI coherent unit for heat transfer coefficient.
// All factors express how many W/(m²·K) equal 1 unit of the given measure.
//
// Exact foundations:
//   1 mW/(m²·K)    = 10⁻³ W/(m²·K)    (exact: 1 mW = 10⁻³ W)
//   1 kcal(th)      = 4184 J              (exact, NIST thermochemical kilocalorie)
//   1 kcal(IT)      = 4186.8 J            (exact, international table kilocalorie)
//   1 cal(th)       = 4.184 J             (exact, thermochemical calorie)
//   1 cal(IT)       = 4.1868 J            (exact, international table calorie)
//   1 BTU(IT)       = 1055.05585262 J     (exact, ASTM/ISO definition)
//   1 CHU           = 9/5 × BTU(IT)       (exact: heat to raise 1 lb by 1 °C)
//   1 h             = 3600 s               (exact)
//   1 ft            = 0.3048 m             (exact, international foot 1959)
//   1 ft²           = 0.09290304 m²        (exact: (0.3048)²)
//   1 in            = 0.0254 m             (exact, international inch 1959)
//   1 in²           = 6.4516×10⁻⁴ m²     (exact: (0.0254)²)
//   1 cm²           = 10⁻⁴ m²             (exact: 1 cm = 0.01 m)
//   1 °C interval   = 1 K                 (exact: Celsius and Kelvin have identical interval size)
//   1 °F interval   = 5/9 K               (exact: for temperature differences)
//
// Note: BTU(IT)/(h·ft²·°F) and CHU/(h·ft²·°C) are numerically identical - the °F-to-°C
//       ratio (9/5) is exactly compensated by the BTU-to-CHU energy ratio (9/5). Both ≈ 5.6783 W/(m²·K).
//       kcal(IT)/(h·cm²·°C) = 4186.8/0.36 = 11630 W/(m²·K) exactly.

const toWattPerSquareMetreKelvin = {
  milliwatt_per_square_metre_kelvin:                    1e-3,                                                         // exact: 1 mW = 10⁻³ W
  watt_per_square_metre_kelvin:                         1,                                                            // reference unit (SI)
  kilocalorie_th_per_hour_square_metre_celsius:         4184 / 3600,                                                  // exact: 1 kcal(th) = 4184 J; 1 h = 3600 s; 1 °C = 1 K
  kilocalorie_it_per_hour_square_metre_celsius:         4186.8 / 3600,                                                // exact: 1 kcal(IT) = 4186.8 J; 1 h = 3600 s; 1 °C = 1 K
  btu_it_per_hour_square_foot_fahrenheit:               1055.05585262 / (3600 * 0.09290304 * (5 / 9)),               // exact: BTU(IT)=1055.05585262 J; ft²=0.09290304 m²; °F=5/9 K
  chu_per_hour_square_foot_celsius:                     (9 / 5) * 1055.05585262 / (3600 * 0.09290304),               // exact: 1 CHU=9/5 BTU(IT); ft²=0.09290304 m²; °C=1 K (= BTU(IT)/(h·ft²·°F))
  calorie_th_per_hour_square_centimetre_celsius:        4.184 / (3600 * 1e-4),                                        // exact: 1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m²; °C = 1 K
  calorie_it_per_hour_square_centimetre_celsius:        4.1868 / (3600 * 1e-4),                                       // exact: 1 cal(IT) = 4.1868 J; 1 cm² = 10⁻⁴ m²; °C = 1 K
  btu_it_per_hour_square_inch_fahrenheit:               1055.05585262 / (3600 * 6.4516e-4 * (5 / 9)),                // exact: in²=(0.0254)²=6.4516×10⁻⁴ m²; °F=5/9 K
  kilowatt_per_square_metre_kelvin:                     1e3,                                                           // exact: 1 kW = 10³ W
  watt_per_square_centimetre_kelvin:                    1e4,                                                           // exact: 1 W/cm² = 1 W / 10⁻⁴ m²
  kilocalorie_th_per_hour_square_centimetre_celsius:    4184 / (3600 * 1e-4),                                         // exact: 1 kcal(th) = 4184 J; 1 cm² = 10⁻⁴ m²
  kilocalorie_it_per_hour_square_centimetre_celsius:    4186.8 / (3600 * 1e-4),                                       // exact: 4186.8/0.36 = 11630 W/(m²·K) exactly
  btu_it_per_second_square_foot_fahrenheit:             1055.05585262 / (0.09290304 * (5 / 9)),                       // exact: BTU(IT)=1055.05585262 J; ft²=0.09290304 m²; °F=5/9 K
  calorie_th_per_second_square_centimetre_celsius:      4.184 / 1e-4,                                                  // exact: 1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m² → 41840 W/(m²·K)
  calorie_it_per_second_square_centimetre_celsius:      4.1868 / 1e-4,                                                 // exact: 1 cal(IT) = 4.1868 J; 1 cm² = 10⁻⁴ m² → 41868 W/(m²·K)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  milliwatt_per_square_metre_kelvin: {
    name: "Milliwatt per square metre kelvin",
    description: "The milliwatt per square metre kelvin (mW/(m²·K)) equals 10⁻³ W/(m²·K). Used in thermal characterization of advanced superinsulation panels and cryogenic multilayer insulation (MLI) in space applications, where effective heat transfer coefficients as low as 0.5-5 mW/(m²·K) are achieved in high-vacuum multilayer systems. 1 mW/(m²·K) = 10⁻³ W/(m²·K).",
    symbol: "mW/(m²·K)"
  },
  watt_per_square_metre_kelvin: {
    name: "Watt per square metre kelvin",
    description: "The watt per square metre kelvin (W/(m²·K)) is the SI coherent unit for heat transfer coefficient (ISO 80000-5). Typical values: free convection in still air 2-25 W/(m²·K), forced-air cooling 25-250 W/(m²·K), natural water convection 200-1000 W/(m²·K), forced water up to 10 000 W/(m²·K), nucleate boiling up to 100 000 W/(m²·K). 1 W/(m²·K) = 1 J/(s·m²·K).",
    symbol: "W/(m²·K)"
  },
  kilocalorie_th_per_hour_square_metre_celsius: {
    name: "Thermochemical kilocalorie per hour per square metre per degree Celsius",
    description: "The thermochemical kilocalorie per hour per square metre per degree Celsius (kcal(th)/(h·m²·°C)) equals 4184/3600 ≈ 1.1622 W/(m²·K) (1 kcal(th) = 4184 J; 1 °C = 1 K). Widely used in continental European and Soviet-era building physics, HVAC standards, and heat exchanger design manuals where wall U-values were tabulated in this unit. 1 kcal(th)/(h·m²·°C) ≈ 1.1622 W/(m²·K).",
    symbol: "kcal(th)/(h·m²·°C)"
  },
  kilocalorie_it_per_hour_square_metre_celsius: {
    name: "International table kilocalorie per hour per square metre per degree Celsius",
    description: "The international table kilocalorie per hour per square metre per degree Celsius (kcal(IT)/(h·m²·°C)) equals 4186.8/3600 ≈ 1.1633 W/(m²·K) (1 kcal(IT) = 4186.8 J). The IT variant used in steam turbine, power plant, and process industry engineering. Numerically slightly larger than the thermochemical counterpart. 1 kcal(IT)/(h·m²·°C) ≈ 1.1633 W/(m²·K).",
    symbol: "kcal(IT)/(h·m²·°C)"
  },
  btu_it_per_hour_square_foot_fahrenheit: {
    name: "International table BTU per hour per square foot per degree Fahrenheit",
    description: "The international table BTU per hour per square foot per degree Fahrenheit (BTU(IT)/(h·ft²·°F)) equals 1055.05585262/(3600×0.09290304×5/9) ≈ 5.6783 W/(m²·K). The dominant heat transfer coefficient unit in US engineering: ASHRAE handbooks, ASTM standards, boiler and heat exchanger design, and building envelope U-values are all commonly tabulated in this unit. 1 BTU(IT)/(h·ft²·°F) ≈ 5.6783 W/(m²·K).",
    symbol: "BTU(IT)/(h·ft²·°F)"
  },
  chu_per_hour_square_foot_celsius: {
    name: "Celsius Heat Unit per hour per square foot per degree Celsius",
    description: "The Celsius heat unit per hour per square foot per degree Celsius (CHU/(h·ft²·°C)) equals ≈ 5.6783 W/(m²·K) - numerically identical to BTU(IT)/(h·ft²·°F). Used in UK and Canadian steam and process engineering; the temperature-interval ratio °F/°C = 5/9 is exactly compensated by the energy ratio CHU/BTU(IT) = 9/5, making both units numerically equal. 1 CHU/(h·ft²·°C) = 1 BTU(IT)/(h·ft²·°F) ≈ 5.6783 W/(m²·K).",
    symbol: "CHU/(h·ft²·°C)"
  },
  calorie_th_per_hour_square_centimetre_celsius: {
    name: "Thermochemical calorie per hour per square centimetre per degree Celsius",
    description: "The thermochemical calorie per hour per square centimetre per degree Celsius (cal(th)/(h·cm²·°C)) equals 4.184/0.36 ≈ 11.622 W/(m²·K) (1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m²). A CGS-derived unit found in older heat transfer textbooks and chemical engineering publications, especially in Eastern European and Japanese technical literature. 1 cal(th)/(h·cm²·°C) ≈ 11.622 W/(m²·K).",
    symbol: "cal(th)/(h·cm²·°C)"
  },
  calorie_it_per_hour_square_centimetre_celsius: {
    name: "International table calorie per hour per square centimetre per degree Celsius",
    description: "The international table calorie per hour per square centimetre per degree Celsius (cal(IT)/(h·cm²·°C)) equals 4.1868/0.36 = 11.63 W/(m²·K) (1 cal(IT) = 4.1868 J). The IT variant of the CGS heat transfer unit, encountered in steam engineering references and international process industry tables alongside kcal(IT)-based figures. 1 cal(IT)/(h·cm²·°C) = 11.63 W/(m²·K).",
    symbol: "cal(IT)/(h·cm²·°C)"
  },
  btu_it_per_hour_square_inch_fahrenheit: {
    name: "International table BTU per hour per square inch per degree Fahrenheit",
    description: "The international table BTU per hour per square inch per degree Fahrenheit (BTU(IT)/(h·in²·°F)) equals ≈ 817.67 W/(m²·K) (1 in² = 6.4516×10⁻⁴ m²; 1 °F = 5/9 K). Encountered in US electronics thermal management, semiconductor package datasheets, and heat sink characterisation where contact areas are measured in square inches. 1 BTU(IT)/(h·in²·°F) ≈ 817.67 W/(m²·K).",
    symbol: "BTU(IT)/(h·in²·°F)"
  },
  kilowatt_per_square_metre_kelvin: {
    name: "Kilowatt per square metre kelvin",
    description: "The kilowatt per square metre kelvin (kW/(m²·K)) equals exactly 1000 W/(m²·K). Characteristic of high-performance industrial applications: nucleate pool boiling of water reaches 5-50 kW/(m²·K), compact plate heat exchangers with liquid-liquid flow achieve 3-8 kW/(m²·K), and jet impingement cooling on metal surfaces can exceed 10 kW/(m²·K). 1 kW/(m²·K) = 10³ W/(m²·K).",
    symbol: "kW/(m²·K)"
  },
  watt_per_square_centimetre_kelvin: {
    name: "Watt per square centimetre kelvin",
    description: "The watt per square centimetre kelvin (W/(cm²·K)) equals exactly 10⁴ W/(m²·K). Relevant for extreme cooling: nuclear reactor fuel rod cladding surfaces reach up to 5 W/(cm²·K), spray cooling and microjet impingement in power electronics reach 1-10 W/(cm²·K), and condensation of refrigerants can approach 1 W/(cm²·K). 1 W/(cm²·K) = 10⁴ W/(m²·K) = 10 kW/(m²·K).",
    symbol: "W/(cm²·K)"
  },
  kilocalorie_th_per_hour_square_centimetre_celsius: {
    name: "Thermochemical kilocalorie per hour per square centimetre per degree Celsius",
    description: "The thermochemical kilocalorie per hour per square centimetre per degree Celsius (kcal(th)/(h·cm²·°C)) equals ≈ 11622 W/(m²·K) (= 10⁴ × kcal(th)/(h·m²·°C)). A high-flux CGS metric unit found in older combustion engineering, industrial furnace design, and metallurgical heat treating references. 1 kcal(th)/(h·cm²·°C) ≈ 11622 W/(m²·K).",
    symbol: "kcal(th)/(h·cm²·°C)"
  },
  kilocalorie_it_per_hour_square_centimetre_celsius: {
    name: "International table kilocalorie per hour per square centimetre per degree Celsius",
    description: "The international table kilocalorie per hour per square centimetre per degree Celsius (kcal(IT)/(h·cm²·°C)) equals 4186.8/0.36 = 11630 W/(m²·K) exactly (1 kcal(IT) = 4186.8 J; 1 h = 3600 s; 1 cm² = 10⁻⁴ m²; 1 °C = 1 K). Used in IT-based thermodynamic tables for boiler tube surfaces and high-temperature process heat exchangers. 1 kcal(IT)/(h·cm²·°C) = 11630 W/(m²·K).",
    symbol: "kcal(IT)/(h·cm²·°C)"
  },
  btu_it_per_second_square_foot_fahrenheit: {
    name: "International table BTU per second per square foot per degree Fahrenheit",
    description: "The international table BTU per second per square foot per degree Fahrenheit (BTU(IT)/(s·ft²·°F)) equals ≈ 20442 W/(m²·K) (= 3600 × BTU(IT)/(h·ft²·°F)). Encountered in atmospheric re-entry aerodynamic heating analysis, solid rocket motor nozzle throat design, and nuclear reactor thermal-hydraulics with peak surface heat transfer rates. 1 BTU(IT)/(s·ft²·°F) ≈ 20442 W/(m²·K).",
    symbol: "BTU(IT)/(s·ft²·°F)"
  },
  calorie_th_per_second_square_centimetre_celsius: {
    name: "Thermochemical calorie per second per square centimetre per degree Celsius",
    description: "The thermochemical calorie per second per square centimetre per degree Celsius (cal(th)/(s·cm²·°C)) equals exactly 41840 W/(m²·K) (1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m²; 1 °C = 1 K). The CGS unit for very high heat transfer coefficients in plasma-facing components, ablative heat shield characterisation, and shock tube experiments in aerospace research. 1 cal(th)/(s·cm²·°C) = 41840 W/(m²·K).",
    symbol: "cal(th)/(s·cm²·°C)"
  },
  calorie_it_per_second_square_centimetre_celsius: {
    name: "International table calorie per second per square centimetre per degree Celsius",
    description: "The international table calorie per second per square centimetre per degree Celsius (cal(IT)/(s·cm²·°C)) equals exactly 41868 W/(m²·K) (1 cal(IT) = 4.1868 J; 1 cm² = 10⁻⁴ m²; 1 °C = 1 K). Slightly larger than the thermochemical variant; used in IT-based thermophysical property tables for extreme thermal environments such as nuclear and fusion reactor surfaces. 1 cal(IT)/(s·cm²·°C) = 41868 W/(m²·K).",
    symbol: "cal(IT)/(s·cm²·°C)"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toWattPerSquareMetreKelvin);
}

function convertHeatTransferCoefficient() {
  convertFactorBased(toWattPerSquareMetreKelvin);
}

initConverterPage();
