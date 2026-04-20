// Base unit: watt per square metre (W/m²) - the SI coherent unit for heat flux density.
// All factors express how many W/m² equal 1 unit of the given measure.
//
// Exact foundations:
//   1 nW/m²       = 10⁻⁹ W/m²   (exact: 1 nW = 10⁻⁹ W)
//   1 µW/m²       = 10⁻⁶ W/m²   (exact: 1 µW = 10⁻⁶ W)
//   1 mW/m²       = 10⁻³ W/m²   (exact: 1 mW = 10⁻³ W)
//   1 erg          = 10⁻⁷ J        (exact, CGS energy unit)
//   1 cm²          = 10⁻⁴ m²       (exact: 1 cm = 0.01 m)
//   1 mm²          = 10⁻⁶ m²       (exact: 1 mm = 10⁻³ m)
//   1 cal(th)      = 4.184 J        (exact, NIST thermochemical calorie)
//   1 cal(IT)      = 4.1868 J       (exact, international table calorie)
//   1 kcal(th)     = 4184 J         (exact: 1000 × 4.184 J)
//   1 kcal(IT)     = 4186.8 J       (exact: 1000 × 4.1868 J)
//   1 BTU(IT)      = 1055.05585262 J  (exact, ASTM/ISO definition)
//   1 CHU          = 9/5 × BTU(IT)   (exact: heat to raise 1 lb by 1 °C)
//   1 h            = 3600 s           (exact)
//   1 ft           = 0.3048 m         (exact, international foot 1959)
//   1 ft²          = 0.09290304 m²    (exact: (0.3048)²)
//   1 in           = 0.0254 m         (exact, international inch 1959)
//   1 in²          = 6.4516×10⁻⁴ m²  (exact: (0.0254)²)
//
// Note: erg/(s·cm²) = 10⁻³ W/m² = 1 mW/m²  (exact, CGS irradiance unit)
//       mW/cm²      = 10 W/m²              (exact)
//       W/cm²       = 10⁴ W/m²             (exact)
//       W/mm²       = MW/m² = 10⁶ W/m²    (exact)
//       kcal(IT)/(h·cm²) = 11630 W/m²      (exact: 4186.8/0.36)
//       cal(th)/(s·cm²)  = 41840 W/m²      (exact: 4.184/10⁻⁴)
//       cal(IT)/(s·cm²)  = 41868 W/m²      (exact: 4.1868/10⁻⁴)

const toWattPerSquareMetre = {
  nanowatt_per_square_metre:                    1e-9,                                                        // exact: 1 nW = 10⁻⁹ W
  microwatt_per_square_metre:                   1e-6,                                                        // exact: 1 µW = 10⁻⁶ W
  milliwatt_per_square_metre:                   1e-3,                                                        // exact: 1 mW = 10⁻³ W
  erg_per_second_square_centimetre:             1e-7 / 1e-4,                                                 // exact: 1 erg = 10⁻⁷ J; 1 cm² = 10⁻⁴ m² → 10⁻³ W/m²
  watt_per_square_metre:                        1,                                                           // reference unit (SI)
  kilocalorie_th_per_hour_square_metre:         4184 / 3600,                                                 // exact: 1 kcal(th) = 4184 J; 1 h = 3600 s
  kilocalorie_it_per_hour_square_metre:         4186.8 / 3600,                                               // exact: 1 kcal(IT) = 4186.8 J; 1 h = 3600 s
  btu_it_per_hour_square_foot:                  1055.05585262 / (3600 * 0.09290304),                         // exact: 1 BTU(IT) = 1055.05585262 J; 1 h = 3600 s; 1 ft² = (0.3048)² m²
  chu_per_hour_square_foot:                     (9 / 5) * 1055.05585262 / (3600 * 0.09290304),               // exact: 1 CHU = 9/5 × BTU(IT); 1 h = 3600 s; 1 ft² = (0.3048)² m²
  milliwatt_per_square_centimetre:              10,                                                          // exact: 1 mW/cm² = 10⁻³ W / 10⁻⁴ m² = 10 W/m²
  btu_it_per_hour_square_inch:                  1055.05585262 / (3600 * 6.4516e-4),                          // exact: 1 in² = (0.0254)² m² = 6.4516×10⁻⁴ m²
  kilowatt_per_square_metre:                    1e3,                                                         // exact: 1 kW = 10³ W
  watt_per_square_inch:                         1 / 6.4516e-4,                                               // exact: 1 in² = (0.0254)² m² = 6.4516×10⁻⁴ m²
  watt_per_square_centimetre:                   1e4,                                                         // exact: 1 W/cm² = 1 W / 10⁻⁴ m²
  btu_it_per_second_square_foot:                1055.05585262 / 0.09290304,                                  // exact: 1 BTU(IT) = 1055.05585262 J; 1 ft² = (0.3048)² m²
  kilocalorie_th_per_hour_square_centimetre:    4184 / (3600 * 1e-4),                                        // exact: 1 kcal(th) = 4184 J; 1 h = 3600 s; 1 cm² = 10⁻⁴ m²
  kilocalorie_it_per_hour_square_centimetre:    4186.8 / (3600 * 1e-4),                                      // exact: 4186.8/0.36 = 11630 W/m² exactly
  calorie_th_per_second_square_centimetre:      4.184 / 1e-4,                                                // exact: 1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m² → 41840 W/m²
  calorie_it_per_second_square_centimetre:      4.1868 / 1e-4,                                               // exact: 1 cal(IT) = 4.1868 J; 1 cm² = 10⁻⁴ m² → 41868 W/m²
  watt_per_square_millimetre:                   1e6,                                                         // exact: 1 W/mm² = 1 W / 10⁻⁶ m²
  megawatt_per_square_metre:                    1e6,                                                         // exact: 1 MW = 10⁶ W
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  nanowatt_per_square_metre: {
    name: "Nanowatt per square metre",
    description: "The nanowatt per square metre (nW/m²) equals 10⁻⁹ W/m². Used in astrophysics and cosmology for quantifying extremely weak radiation fields, such as cosmic microwave background intensity and residual thermal emission from near-absolute-zero objects. Relevant in precision cryogenic sensor calibration. 1 nW/m² = 10⁻⁹ W/m² = 10³ pW/m².",
    symbol: "nW/m²"
  },
  microwatt_per_square_metre: {
    name: "Microwatt per square metre",
    description: "The microwatt per square metre (µW/m²) equals 10⁻⁶ W/m². Encountered in geothermal science - deep crustal heat flux measurements in stable shield regions can reach a few µW/m² - and in bio-electromagnetic research for very low intensity radiation fields. 1 µW/m² = 10⁻⁶ W/m² = 10³ nW/m².",
    symbol: "µW/m²"
  },
  milliwatt_per_square_metre: {
    name: "Milliwatt per square metre",
    description: "The milliwatt per square metre (mW/m²) equals 10⁻³ W/m². Relevant in geothermal surveys: global average continental heat flux ≈ 65 mW/m², oceanic ≈ 101 mW/m². Used in building physics for quantifying very small heat leakage through ultra-high-performance insulation. 1 mW/m² = 10⁻³ W/m² = 1 erg/(s·cm²).",
    symbol: "mW/m²"
  },
  erg_per_second_square_centimetre: {
    name: "Erg per second per square centimetre",
    description: "The erg per second per square centimetre (erg/(s·cm²)) equals exactly 10⁻³ W/m² in SI (1 erg = 10⁻⁷ J; 1 cm² = 10⁻⁴ m²). The CGS irradiance unit used in classical electromagnetic theory, astrophysics, and older radiation physics literature. Numerically equal to the milliwatt per square metre. 1 erg/(s·cm²) = 10⁻³ W/m² = 1 mW/m².",
    symbol: "erg/(s·cm²)"
  },
  watt_per_square_metre: {
    name: "Watt per square metre",
    description: "The watt per square metre (W/m²) is the SI coherent unit for heat flux density and irradiance. Solar irradiance at Earth's surface ≈ 1000 W/m²; solar constant ≈ 1361 W/m²; human skin radiative emission ≈ 100 W/m²; global average geothermal flux ≈ 0.087 W/m². Referenced in ISO 80000-4. 1 W/m² = 1 J/(s·m²) = 10⁻³ kW/m².",
    symbol: "W/m²"
  },
  kilocalorie_th_per_hour_square_metre: {
    name: "Thermochemical kilocalorie per hour per square metre",
    description: "The thermochemical kilocalorie per hour per square metre (kcal(th)/(h·m²)) equals 4184/3600 ≈ 1.1622 W/m² (1 kcal(th) = 4184 J; 1 h = 3600 s). Used in older continental European and Soviet-era building physics standards for wall and roof heat loss calculations. 1 kcal(th)/(h·m²) ≈ 1.1622 W/m².",
    symbol: "kcal(th)/(h·m²)"
  },
  kilocalorie_it_per_hour_square_metre: {
    name: "International table kilocalorie per hour per square metre",
    description: "The international table kilocalorie per hour per square metre (kcal(IT)/(h·m²)) equals 4186.8/3600 ≈ 1.1633 W/m² (1 kcal(IT) = 4186.8 J; 1 h = 3600 s). The IT variant used in steam engineering, solar thermal collector standards, and process heat calculations. 1 kcal(IT)/(h·m²) ≈ 1.1633 W/m².",
    symbol: "kcal(IT)/(h·m²)"
  },
  btu_it_per_hour_square_foot: {
    name: "International table BTU per hour per square foot",
    description: "The international table BTU per hour per square foot (BTU(IT)/(h·ft²)) equals 1055.05585262/(3600×0.09290304) ≈ 3.15459 W/m². The standard US heat flux unit in ASHRAE, ASTM, and building codes for thermal resistance (R-value), boiler ratings, and heat exchanger design. 1 BTU(IT)/(h·ft²) ≈ 3.15459 W/m².",
    symbol: "BTU(IT)/(h·ft²)"
  },
  chu_per_hour_square_foot: {
    name: "Celsius Heat Unit per hour per square foot",
    description: "The Celsius heat unit per hour per square foot (CHU/(h·ft²)) equals (9/5)×1055.05585262/(3600×0.09290304) ≈ 5.6783 W/m². The CHU (= 9/5 BTU(IT)) uses a 1 °C temperature interval instead of 1 °F; historically used in UK and Canadian heating engineering. 1 CHU/(h·ft²) ≈ 5.6783 W/m² = (9/5) × BTU(IT)/(h·ft²).",
    symbol: "CHU/(h·ft²)"
  },
  milliwatt_per_square_centimetre: {
    name: "Milliwatt per square centimetre",
    description: "The milliwatt per square centimetre (mW/cm²) equals exactly 10 W/m² (1 mW = 10⁻³ W; 1 cm² = 10⁻⁴ m²). Widely used in photonics, laser safety standards (IEC 60825), and UV dosimetry. Solar irradiance at Earth's surface ≈ 100 mW/cm². 1 mW/cm² = 10 W/m² = 0.001 W/cm².",
    symbol: "mW/cm²"
  },
  btu_it_per_hour_square_inch: {
    name: "International table BTU per hour per square inch",
    description: "The international table BTU per hour per square inch (BTU(IT)/(h·in²)) equals 1055.05585262/(3600×6.4516×10⁻⁴) ≈ 454.26 W/m². Used for high heat flux applications such as electronic component cooling, jet engine combustor walls, and nuclear fuel assembly design in US customary units. 1 BTU(IT)/(h·in²) ≈ 454.26 W/m².",
    symbol: "BTU(IT)/(h·in²)"
  },
  kilowatt_per_square_metre: {
    name: "Kilowatt per square metre",
    description: "The kilowatt per square metre (kW/m²) equals exactly 1000 W/m². Standard for concentrated solar collectors (parabolic trough ≈ 20-80 kW/m² at focus), industrial infrared heaters, and induction heating surfaces. 1 kW/m² = 1000 W/m² = 0.1 W/cm² = 100 mW/cm².",
    symbol: "kW/m²"
  },
  watt_per_square_inch: {
    name: "Watt per square inch",
    description: "The watt per square inch (W/in²) equals 1/(6.4516×10⁻⁴) ≈ 1550.003 W/m² (1 in = 0.0254 m). Used in US electronics thermal management for PCB power density, semiconductor die heat flux, and power module ratings. 1 W/in² ≈ 1550 W/m² ≈ 0.155 W/cm².",
    symbol: "W/in²"
  },
  watt_per_square_centimetre: {
    name: "Watt per square centimetre",
    description: "The watt per square centimetre (W/cm²) equals exactly 10⁴ W/m². A practical unit in laser physics, plasma engineering, and nuclear thermal hydraulics. Nuclear fuel cladding heat flux ≈ 1-5 W/cm²; laser diodes ≈ 10-100 W/cm²; focused CO₂ laser cutting ≈ 10⁴ W/cm². 1 W/cm² = 10⁴ W/m² = 10 kW/m².",
    symbol: "W/cm²"
  },
  btu_it_per_second_square_foot: {
    name: "International table BTU per second per square foot",
    description: "The international table BTU per second per square foot (BTU(IT)/(s·ft²)) equals 1055.05585262/0.09290304 ≈ 11357 W/m² (= 3600 × BTU(IT)/(h·ft²)). Used for extreme heat flux: atmospheric re-entry aerodynamic heating, solid rocket nozzle throat, and nuclear reactor thermal hydraulics design. 1 BTU(IT)/(s·ft²) ≈ 11357 W/m².",
    symbol: "BTU(IT)/(s·ft²)"
  },
  kilocalorie_th_per_hour_square_centimetre: {
    name: "Thermochemical kilocalorie per hour per square centimetre",
    description: "The thermochemical kilocalorie per hour per square centimetre (kcal(th)/(h·cm²)) equals 4184/(3600×10⁻⁴) ≈ 11622 W/m² (= 10⁴ × kcal(th)/(h·m²)). A high-flux variant of the metric heat flux unit found in older combustion engineering and furnace design references. 1 kcal(th)/(h·cm²) ≈ 11622 W/m².",
    symbol: "kcal(th)/(h·cm²)"
  },
  kilocalorie_it_per_hour_square_centimetre: {
    name: "International table kilocalorie per hour per square centimetre",
    description: "The international table kilocalorie per hour per square centimetre (kcal(IT)/(h·cm²)) equals 4186.8/(3600×10⁻⁴) = 11630 W/m² exactly (1 kcal(IT) = 4186.8 J; 1 h = 3600 s; 1 cm² = 10⁻⁴ m²). Used in IT-based thermodynamics for high heat flux surfaces such as boiler tubes. 1 kcal(IT)/(h·cm²) = 11630 W/m².",
    symbol: "kcal(IT)/(h·cm²)"
  },
  calorie_th_per_second_square_centimetre: {
    name: "Thermochemical calorie per second per square centimetre",
    description: "The thermochemical calorie per second per square centimetre (cal(th)/(s·cm²)) equals exactly 41840 W/m² (1 cal(th) = 4.184 J; 1 cm² = 10⁻⁴ m²). The CGS unit for very high heat flux: ablation heat flux during atmospheric re-entry ≈ 1-100 cal/(s·cm²). Used in plasma physics and aerospace thermal protection. 1 cal(th)/(s·cm²) = 41840 W/m².",
    symbol: "cal(th)/(s·cm²)"
  },
  calorie_it_per_second_square_centimetre: {
    name: "International table calorie per second per square centimetre",
    description: "The international table calorie per second per square centimetre (cal(IT)/(s·cm²)) equals exactly 41868 W/m² (1 cal(IT) = 4.1868 J; 1 cm² = 10⁻⁴ m²). The IT variant of the high-flux CGS unit, slightly larger than the thermochemical counterpart due to the IT calorie definition. 1 cal(IT)/(s·cm²) = 41868 W/m².",
    symbol: "cal(IT)/(s·cm²)"
  },
  watt_per_square_millimetre: {
    name: "Watt per square millimetre",
    description: "The watt per square millimetre (W/mm²) equals exactly 10⁶ W/m². Used in high-power laser material processing - cutting, welding, and additive manufacturing - and electron beam applications. A 1 kW laser focused to 1 mm² achieves 1 W/mm². Numerically equal to MW/m². 1 W/mm² = 10⁶ W/m² = 100 W/cm².",
    symbol: "W/mm²"
  },
  megawatt_per_square_metre: {
    name: "Megawatt per square metre",
    description: "The megawatt per square metre (MW/m²) equals exactly 10⁶ W/m². Used in fusion reactor engineering (plasma-facing components: 10-20 MW/m²), concentrated solar power tower receivers (≈1-3 MW/m²), and hypervelocity shock studies. Numerically equal to W/mm². 1 MW/m² = 10⁶ W/m² = 1 W/mm².",
    symbol: "MW/m²"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toWattPerSquareMetre);
}

function convertHeatFluxDensity() {
  convertFactorBased(toWattPerSquareMetre);
}

initConverterPage();
