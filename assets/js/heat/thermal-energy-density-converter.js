// Base unit: joule per cubic metre (J/m³) - the SI coherent unit for thermal energy density.
// All factors express how many J/m³ equal 1 unit of the given measure.
//
// Exact foundations:
//   1 kJ/m³        = 1000 J/m³  (exact: 1 kJ = 10³ J)
//   1 MJ/m³        = 10⁶ J/m³   (exact: 1 MJ = 10⁶ J)
//   1 GJ/m³        = 10⁹ J/m³   (exact: 1 GJ = 10⁹ J)
//   1 Wh/m³        = 3600 J/m³   (exact: 1 Wh = 3600 J)
//   1 kWh/m³       = 3.6 × 10⁶ J/m³  (exact)
//   1 MWh/m³       = 3.6 × 10⁹ J/m³  (exact)
//   1 cal(th)      = 4.184 J            (exact, NIST thermochemical calorie)
//   1 cal(IT)      = 4.1868 J           (exact, international table calorie)
//   1 kcal(th)     = 4184 J             (exact: 1000 × 4.184 J)
//   1 kcal(IT)     = 4186.8 J           (exact: 1000 × 4.1868 J)
//   1 BTU(IT)      = 1055.05585262 J    (exact, ASTM/ISO definition)
//   1 ft           = 0.3048 m           (exact, international foot 1959)
//   1 ft³          = 0.028316846592 m³  (exact: (0.3048)³)
//   1 US gal       = 3.785411784 × 10⁻³ m³  (exact: 231 in³, 1 in = 0.0254 m)
//   1 UK gal       = 4.54609 × 10⁻³ m³      (exact, UK Weights & Measures 1985)
//   1 cm³          = 10⁻⁶ m³            (exact)
//   1 L            = 10⁻³ m³            (exact)

const toJoulePerCubicMetre = {
  nanojoule_per_cubic_metre:          1e-9,                                               // exact: 1 nJ = 10⁻⁹ J
  microjoule_per_cubic_metre:         1e-6,                                               // exact: 1 µJ = 10⁻⁶ J
  millijoule_per_cubic_metre:         1e-3,                                               // exact: 1 mJ = 10⁻³ J
  joule_per_cubic_metre:              1,                                                  // reference unit (SI)
  kilojoule_per_cubic_metre:          1e3,                                                // exact: 1 kJ = 10³ J
  watt_hour_per_cubic_metre:          3600,                                               // exact: 1 Wh = 3600 J
  kilocalorie_th_per_cubic_metre:     4184,                                               // exact: 1 kcal(th) = 4184 J
  kilocalorie_it_per_cubic_metre:     4186.8,                                             // exact: 1 kcal(IT) = 4186.8 J
  btu_it_per_cubic_foot:              1055.05585262 / 0.028316846592,                     // exact: BTU(IT)/ft³; ft³ = (0.3048)³ m³
  btu_it_per_uk_gallon:               1055.05585262 / 4.54609e-3,                         // exact: BTU(IT)/gal(UK); 1 UK gal = 4.54609 L
  btu_it_per_us_gallon:               1055.05585262 / 3.785411784e-3,                     // exact: BTU(IT)/gal(US); 1 US gal = 231 in³
  megajoule_per_cubic_metre:          1e6,                                                // exact: 1 MJ = 10⁶ J
  kilojoule_per_litre:                1e6,                                                // exact: 1 kJ/L = 10³ J / 10⁻³ m³ = 10⁶ J/m³
  kilowatt_hour_per_cubic_metre:      3.6e6,                                              // exact: 1 kWh = 3.6 × 10⁶ J
  calorie_th_per_cubic_centimetre:    4.184 / 1e-6,                                       // exact: 1 cal(th) = 4.184 J; 1 cm³ = 10⁻⁶ m³ → 4.184 × 10⁶ J/m³
  calorie_it_per_cubic_centimetre:    4.1868 / 1e-6,                                      // exact: 1 cal(IT) = 4.1868 J; 1 cm³ = 10⁻⁶ m³ → 4.1868 × 10⁶ J/m³
  gigajoule_per_cubic_metre:          1e9,                                                // exact: 1 GJ = 10⁹ J
  megawatt_hour_per_cubic_metre:      3.6e9,                                              // exact: 1 MWh = 3.6 × 10⁹ J
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanojoule_per_cubic_metre: {
    name: "Nanojoule per cubic metre",
    description: "The nanojoule per cubic metre (nJ/m³) equals 10⁻⁹ J/m³. Used in plasma physics and low-energy radiation dosimetry where energy densities are extremely small - for example, residual electromagnetic energy in near-vacuum environments or ultra-dilute plasma fields. 1 nJ/m³ = 10⁻⁹ J/m³ = 10⁻⁶ µJ/m³.",
    symbol: "nJ/m³"
  },
  microjoule_per_cubic_metre: {
    name: "Microjoule per cubic metre",
    description: "The microjoule per cubic metre (µJ/m³) equals 10⁻⁶ J/m³. Encountered in precision measurements of very low energy-density fields such as weak electromagnetic radiation in shielded environments and in certain astrophysical energy density calculations. 1 µJ/m³ = 10⁻⁶ J/m³ = 10³ nJ/m³.",
    symbol: "µJ/m³"
  },
  millijoule_per_cubic_metre: {
    name: "Millijoule per cubic metre",
    description: "The millijoule per cubic metre (mJ/m³) equals 10⁻³ J/m³. Used in radiation physics for describing energy densities of laser pulses in large volumes and in some acoustic energy density contexts. 1 mJ/m³ = 10⁻³ J/m³ = 10³ µJ/m³.",
    symbol: "mJ/m³"
  },
  joule_per_cubic_metre: {
    name: "Joule per cubic metre",
    description: "The joule per cubic metre (J/m³) is the SI coherent unit for energy density (and equivalently, pressure). It covers a wide range from gas combustion (natural gas ~38 MJ/m³) down to small reaction energies. Numerically equal to the pascal (Pa = N/m² = J/m³). Referenced in ISO 31-4. 1 J/m³ = 10⁻³ kJ/m³ = 1 Pa.",
    symbol: "J/m³"
  },
  kilojoule_per_cubic_metre: {
    name: "Kilojoule per cubic metre",
    description: "The kilojoule per cubic metre (kJ/m³) equals exactly 1000 J/m³. Common in gas industry and HVAC for expressing the volumetric heating value of fuel gases: natural gas ~35-38 MJ/m³, biogas ~20-25 MJ/m³, hydrogen ~10.8 MJ/m³ (standard conditions). 1 kJ/m³ = 1000 J/m³ = 1 Wh/(277.8 m³).",
    symbol: "kJ/m³"
  },
  watt_hour_per_cubic_metre: {
    name: "Watt-hour per cubic metre",
    description: "The watt-hour per cubic metre (Wh/m³) equals exactly 3600 J/m³. Convenient for energy storage systems - battery packs, flywheels, and compressed-air storage - where energy is usually expressed in watt-hours per physical volume. 1 Wh/m³ = 3600 J/m³ = 3.6 kJ/m³.",
    symbol: "Wh/m³"
  },
  kilocalorie_th_per_cubic_metre: {
    name: "Thermochemical kilocalorie per cubic metre",
    description: "The thermochemical kilocalorie per cubic metre (kcal(th)/m³) equals exactly 4184 J/m³ (1 kcal(th) = 4184 J). Used in older continental European and Russian engineering references for volumetric heating values of gases and process heat. 1 kcal(th)/m³ = 4184 J/m³ ≈ 1.162 Wh/m³.",
    symbol: "kcal(th)/m³"
  },
  kilocalorie_it_per_cubic_metre: {
    name: "International table kilocalorie per cubic metre",
    description: "The international table kilocalorie per cubic metre (kcal(IT)/m³) equals exactly 4186.8 J/m³ (1 kcal(IT) = 4186.8 J). The slightly larger IT variant of the kilocalorie used in steam tables and international thermodynamics. 1 kcal(IT)/m³ = 4186.8 J/m³ ≈ 1.163 Wh/m³.",
    symbol: "kcal(IT)/m³"
  },
  btu_it_per_cubic_foot: {
    name: "International table BTU per cubic foot",
    description: "The international table BTU per cubic foot (BTU(IT)/ft³) equals 1055.05585262 J / (0.3048)³ m³ ≈ 37258.95 J/m³. Standard in US and Canadian gas industry for expressing the gross calorific value of natural gas as distributed (pipeline quality gas ≈ 1000 BTU/ft³). 1 BTU(IT)/ft³ ≈ 37.26 kJ/m³ ≈ 10.35 Wh/m³.",
    symbol: "BTU(IT)/ft³"
  },
  btu_it_per_uk_gallon: {
    name: "International table BTU per UK gallon",
    description: "The international table BTU per UK gallon (BTU(IT)/gal(UK)) equals 1055.05585262 J / 4.54609 × 10⁻³ m³ ≈ 232079.84 J/m³. Used in the UK petroleum industry for expressing fuel energy content, particularly for liquid fuels and heating oil before metrication. 1 BTU(IT)/gal(UK) ≈ 232.08 kJ/m³.",
    symbol: "BTU(IT)/gal(UK)"
  },
  btu_it_per_us_gallon: {
    name: "International table BTU per US gallon",
    description: "The international table BTU per US gallon (BTU(IT)/gal(US)) equals 1055.05585262 J / 3.785411784 × 10⁻³ m³ ≈ 278716.27 J/m³. The dominant unit in the US petroleum and fuel markets for expressing heating values - gasoline ≈ 115,000 BTU/gal, diesel ≈ 129,500 BTU/gal. 1 BTU(IT)/gal(US) ≈ 278.72 kJ/m³.",
    symbol: "BTU(IT)/gal(US)"
  },
  megajoule_per_cubic_metre: {
    name: "Megajoule per cubic metre",
    description: "The megajoule per cubic metre (MJ/m³) equals exactly 10⁶ J/m³. The practical SI unit for fuel energy density: natural gas ≈ 35-40 MJ/m³, hydrogen (liquid) ≈ 8490 MJ/m³, diesel ≈ 34,200 MJ/m³. Numerically equal to kJ/L and widely used in fuel standards and energy audits. 1 MJ/m³ = 10⁶ J/m³ = 1 kJ/L.",
    symbol: "MJ/m³"
  },
  kilojoule_per_litre: {
    name: "Kilojoule per litre",
    description: "The kilojoule per litre (kJ/L) equals exactly 10⁶ J/m³ = 1 MJ/m³ (since 1 L = 10⁻³ m³). The preferred notation in fuel chemistry and food science for volumetric energy content. Gasoline ≈ 34.2 MJ/L, diesel ≈ 35.8 MJ/L, ethanol ≈ 23.4 MJ/L, LPG ≈ 25.5 MJ/L. 1 kJ/L = 1 MJ/m³ = 10⁶ J/m³.",
    symbol: "kJ/L"
  },
  kilowatt_hour_per_cubic_metre: {
    name: "Kilowatt-hour per cubic metre",
    description: "The kilowatt-hour per cubic metre (kWh/m³) equals exactly 3.6 × 10⁶ J/m³. Widely used in battery technology and electrical energy storage: Li-ion cells ≈ 200-700 kWh/m³, pumped hydro ≈ 0.27-1.5 Wh/m³. Also used for volumetric electricity price comparisons. 1 kWh/m³ = 3.6 MJ/m³ = 3600 kJ/m³.",
    symbol: "kWh/m³"
  },
  calorie_th_per_cubic_centimetre: {
    name: "Thermochemical calorie per cubic centimetre",
    description: "The thermochemical calorie per cubic centimetre (cal(th)/cm³) equals exactly 4.184 × 10⁶ J/m³ (1 cal(th) = 4.184 J; 1 cm³ = 10⁻⁶ m³). The CGS energy density unit used extensively in older chemistry, explosives research, and combustion science for solid and liquid fuels. Numerically equal to kcal(th)/L. 1 cal(th)/cm³ = 4.184 MJ/m³.",
    symbol: "cal(th)/cm³"
  },
  calorie_it_per_cubic_centimetre: {
    name: "International table calorie per cubic centimetre",
    description: "The international table calorie per cubic centimetre (cal(IT)/cm³) equals exactly 4.1868 × 10⁶ J/m³ (1 cal(IT) = 4.1868 J; 1 cm³ = 10⁻⁶ m³). The IT variant of the cal/cm³ used in steam-table-based thermodynamics and older international standards. Numerically equal to kcal(IT)/L. 1 cal(IT)/cm³ = 4.1868 MJ/m³.",
    symbol: "cal(IT)/cm³"
  },
  gigajoule_per_cubic_metre: {
    name: "Gigajoule per cubic metre",
    description: "The gigajoule per cubic metre (GJ/m³) equals exactly 10⁹ J/m³. Used for the energy density of high-energy-density materials and liquefied fuels: LNG ≈ 22.2 GJ/m³, liquid hydrogen ≈ 8.49 GJ/m³, petrol ≈ 34.2 GJ/m³. Also useful for large-scale thermal energy storage reservoirs. 1 GJ/m³ = 10³ MJ/m³ = 10⁹ J/m³.",
    symbol: "GJ/m³"
  },
  megawatt_hour_per_cubic_metre: {
    name: "Megawatt-hour per cubic metre",
    description: "The megawatt-hour per cubic metre (MWh/m³) equals exactly 3.6 × 10⁹ J/m³. Used in large-scale energy storage infrastructure - pumped hydro, grid-scale battery installations, and thermal storage plants. Petrol ≈ 9.5 MWh/m³, LNG ≈ 6.2 MWh/m³, Li-ion pack ≈ 0.56 MWh/m³. 1 MWh/m³ = 3.6 GJ/m³ = 3600 MJ/m³.",
    symbol: "MWh/m³"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toJoulePerCubicMetre);
}

function convertThermalEnergyDensity() {
  convertFactorBased(toJoulePerCubicMetre);
}

initConverterPage();
