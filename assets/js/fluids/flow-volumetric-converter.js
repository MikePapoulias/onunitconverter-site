// Base unit: cubic metre per second (m³/s) - the SI coherent derived unit of volumetric flow rate.
// All factors express how many m³/s equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefix multipliers: nano=1e-9, micro=1e-6, milli=1e-3, centi=1e-2, deci=1e-1,
//                          kilo=1e3, mega=1e6 (all exact, SI definition)
//   Volume: 1 mL = 1 cm³ = 1e-6 m³ (exact); 1 L = 1 dm³ = 1e-3 m³ (exact)
//   Linear: 1 in = 0.0254 m (exact); 1 ft = 0.3048 m (exact); 1 yd = 0.9144 m (exact)
//   1 in³ = 0.0254³ m³ = 1.6387064e-5 m³ (exact)
//   1 ft³ = 0.3048³ m³ = 0.028316846592 m³ (exact)
//   1 yd³ = 0.9144³ m³ = 0.764554857984 m³ (exact)
//   1 US gallon = 231 in³ = 231 × 1.6387064e-5 m³ = 3.785411784e-3 m³ (exact)
//   1 US fluid ounce = 1/128 US gal = 3.785411784e-3 / 128 m³ = 2.95735295625e-5 m³ (exact)
//   1 US pint = 1/8 US gal = 3.785411784e-3 / 8 m³ = 4.73176473e-4 m³ (exact)
//   1 US quart = 1/4 US gal = 3.785411784e-3 / 4 m³ = 9.46352946e-4 m³ (exact)
//   1 US barrel (oil) = 42 US gal = 42 × 3.785411784e-3 m³ = 0.158987294928 m³ (exact)
//   1 UK (imperial) gallon = 4.54609e-3 m³ (exact, UK Weights and Measures Act 1985)
//   1 UK fluid ounce = 1/160 UK gal = 4.54609e-3 / 160 m³ = 2.84130625e-5 m³ (exact)
//   1 UK pint = 1/8 UK gal = 4.54609e-3 / 8 m³ = 5.6826125e-4 m³ (exact)
//   1 acre-foot = 43560 ft³ × 0.028316846592 m³/ft³ = 1233.48183754752 m³ (exact)
//   1 min = 60 s; 1 h = 3600 s; 1 d = 86400 s (all exact)

const toCubicMetersPerSecond = {
  // -- Microlitres per time --------------------------------------------------
  microlitres_per_second:           1e-9,                                       // exact: 1 µL = 1e-9 m³
  microlitres_per_minute:           1e-9 / 60,                                  // exact
  microlitres_per_hour:             1e-9 / 3600,                                // exact
  // -- Millilitres per time --------------------------------------------------
  millilitres_per_second:           1e-6,                                       // exact: 1 mL = 1 cm³ = 1e-6 m³
  millilitres_per_minute:           1e-6 / 60,                                  // exact
  millilitres_per_hour:             1e-6 / 3600,                                // exact
  // -- US fluid ounces per time ----------------------------------------------
  us_fluid_ounces_per_second:       3.785411784e-3 / 128,                       // exact: 1 US fl oz = US gal / 128
  us_fluid_ounces_per_minute:       3.785411784e-3 / 128 / 60,                  // exact
  us_fluid_ounces_per_hour:         3.785411784e-3 / 128 / 3600,                // exact
  // -- UK (imperial) fluid ounces per time -----------------------------------
  uk_fluid_ounces_per_second:       4.54609e-3 / 160,                           // exact: 1 UK fl oz = UK gal / 160
  uk_fluid_ounces_per_minute:       4.54609e-3 / 160 / 60,                      // exact
  uk_fluid_ounces_per_hour:         4.54609e-3 / 160 / 3600,                    // exact
  // -- Cubic inches per time -------------------------------------------------
  cubic_inches_per_second:          1.6387064e-5,                               // exact: 1 in³ = 0.0254³ m³
  cubic_inches_per_minute:          1.6387064e-5 / 60,                          // exact
  cubic_inches_per_hour:            1.6387064e-5 / 3600,                        // exact
  // -- US pints per time -----------------------------------------------------
  us_pints_per_second:              3.785411784e-3 / 8,                         // exact: 1 US pt = US gal / 8
  us_pints_per_minute:              3.785411784e-3 / 8 / 60,                    // exact
  us_pints_per_hour:                3.785411784e-3 / 8 / 3600,                  // exact
  // -- UK (imperial) pints per time ------------------------------------------
  uk_pints_per_second:              4.54609e-3 / 8,                             // exact: 1 UK pt = UK gal / 8
  uk_pints_per_minute:              4.54609e-3 / 8 / 60,                        // exact
  uk_pints_per_hour:                4.54609e-3 / 8 / 3600,                      // exact
  // -- US quarts per time ----------------------------------------------------
  us_quarts_per_second:             3.785411784e-3 / 4,                         // exact: 1 US qt = US gal / 4
  us_quarts_per_minute:             3.785411784e-3 / 4 / 60,                    // exact
  us_quarts_per_hour:               3.785411784e-3 / 4 / 3600,                  // exact
  // -- Litres per time -------------------------------------------------------
  litres_per_second:                1e-3,                                       // exact: 1 L = 1e-3 m³
  litres_per_minute:                1e-3 / 60,                                  // exact
  litres_per_hour:                  1e-3 / 3600,                                // exact
  litres_per_day:                   1e-3 / 86400,                               // exact
  // -- US gallons per time ---------------------------------------------------
  us_gallons_per_second:            3.785411784e-3,                             // exact: 1 US gal = 231 in³
  us_gallons_per_minute:            3.785411784e-3 / 60,                        // exact
  us_gallons_per_hour:              3.785411784e-3 / 3600,                      // exact
  us_gallons_per_day:               3.785411784e-3 / 86400,                     // exact
  // -- UK (imperial) gallons per time ----------------------------------------
  uk_gallons_per_second:            4.54609e-3,                                 // exact: 1 UK gal = 4.54609 L
  uk_gallons_per_minute:            4.54609e-3 / 60,                            // exact
  uk_gallons_per_hour:              4.54609e-3 / 3600,                          // exact
  uk_gallons_per_day:               4.54609e-3 / 86400,                         // exact
  // -- Cubic feet per time ---------------------------------------------------
  cubic_feet_per_second:            0.028316846592,                             // exact: 1 ft³ = 0.3048³ m³
  cubic_feet_per_minute:            0.028316846592 / 60,                        // exact
  cubic_feet_per_hour:              0.028316846592 / 3600,                      // exact
  cubic_feet_per_day:               0.028316846592 / 86400,                     // exact
  // -- US barrels (oil, 42 US gal) per time ----------------------------------
  us_barrels_per_second:            0.158987294928,                             // exact: 42 × 3.785411784e-3 m³
  us_barrels_per_minute:            0.158987294928 / 60,                        // exact
  us_barrels_per_hour:              0.158987294928 / 3600,                      // exact
  us_barrels_per_day:               0.158987294928 / 86400,                     // exact
  // -- Cubic metres per time (SI) --------------------------------------------
  cubic_metres_per_second:          1,                                          // reference (base unit)
  cubic_metres_per_minute:          1 / 60,                                     // exact
  cubic_metres_per_hour:            1 / 3600,                                   // exact
  cubic_metres_per_day:             1 / 86400,                                  // exact
  // -- Cubic yards per time --------------------------------------------------
  cubic_yards_per_second:           0.764554857984,                             // exact: 0.9144³ m³
  cubic_yards_per_minute:           0.764554857984 / 60,                        // exact
  cubic_yards_per_hour:             0.764554857984 / 3600,                      // exact
  // -- Kilolitres per time ---------------------------------------------------
  kilolitres_per_second:            1,                                          // exact: 1 kL = 1 m³
  kilolitres_per_minute:            1 / 60,                                     // exact
  kilolitres_per_hour:              1 / 3600,                                   // exact
  kilolitres_per_day:               1 / 86400,                                  // exact
  // -- Acre-feet per time ----------------------------------------------------
  acre_feet_per_second:             1233.48183754752,                           // exact: 43560 ft³ × 0.028316846592
  acre_feet_per_minute:             1233.48183754752 / 60,                      // exact
  acre_feet_per_hour:               1233.48183754752 / 3600,                    // exact
  acre_feet_per_day:                1233.48183754752 / 86400,                   // exact
  // -- Million litres per time -----------------------------------------------
  million_litres_per_day:           1000 / 86400,                               // exact: 1 ML = 1000 m³
  // -- Megalitres per time ---------------------------------------------------
  megalitres_per_day:               1000 / 86400,                               // exact: 1 ML = 1000 m³ (same as million litres)
  // -- Cubic kilometres per time (hydrology/geophysics) ----------------------
  cubic_kilometres_per_year:        1e9 / (365.25 * 86400),                     // Julian year: 365.25 d = 31 557 600 s
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  microlitres_per_second: {
    name: "Microlitres per second",
    description: "The microlitre per second (\u00b5L/s) equals 10\u207b\u2079 m\u00b3/s, the working range of microfluidic lab-on-a-chip devices and nano-HPLC pumps. Organ-on-a-chip perfusion bioreactors, droplet microfluidic systems, and capillary electrophoresis instruments operate at 0.1-100 \u00b5L/s. A syringe pump delivering 0.36 mL/h produces exactly 0.1 \u00b5L/s. 1 \u00b5L/s = 10\u207b\u2079 m\u00b3/s = 60 \u00b5L/min.",
    symbol: "\u00b5L/s"
  },
  microlitres_per_minute: {
    name: "Microlitres per minute",
    description: "The microlitre per minute (\u00b5L/min) equals 10\u207b\u2079/60 \u2248 1.667\u00d710\u207b\u00b9\u00b9 m\u00b3/s, standard in nano-HPLC chromatography and microfluidic chip pumping. A typical nano-LC column runs at 200-400 \u00b5L/min; piezoelectric micro-dosing systems for pharmaceutical assays dispense at 1-50 \u00b5L/min. 1 \u00b5L/min = 1/60 \u00b5L/s \u2248 1.667\u00d710\u207b\u00b9\u00b9 m\u00b3/s.",
    symbol: "\u00b5L/min"
  },
  microlitres_per_hour: {
    name: "Microlitres per hour",
    description: "The microlitre per hour (\u00b5L/h) equals 10\u207b\u2079/3600 \u2248 2.778\u00d710\u207b\u00b9\u00b3 m\u00b3/s, used in implantable drug-delivery pumps and osmotic mini-pumps for controlled-release pharmacokinetic studies. An Alzet osmotic pump for rodent experiments delivers 0.25-10 \u00b5L/h of dissolved drug directly into tissue. 1 \u00b5L/h \u2248 2.778\u00d710\u207b\u00b9\u00b3 m\u00b3/s.",
    symbol: "\u00b5L/h"
  },
  millilitres_per_second: {
    name: "Millilitres per second",
    description: "The millilitre per second (mL/s) equals 10\u207b\u2076 m\u00b3/s, common in laboratory syringe pumps, HPLC systems, and medical infusion devices. A standard IV drip running at 1 mL/s would deliver 3.6 L/h - a rapid infusion rate used in resuscitation; analytical HPLC columns run 0.5-5 mL/s. 1 mL/s = 10\u207b\u2076 m\u00b3/s = 60 mL/min = 3.6 L/h.",
    symbol: "mL/s"
  },
  millilitres_per_minute: {
    name: "Millilitres per minute",
    description: "The millilitre per minute (mL/min) equals 10\u207b\u2076/60 \u2248 1.667\u00d710\u207b\u2078 m\u00b3/s, the standard flow rate unit for HPLC and preparative chromatography. A reverse-phase HPLC column (4.6 mm i.d.) operates at 1-2 mL/min; a cardiac output catheter measures 4 000-8 000 mL/min (= L/min). 1 mL/min \u2248 1.667\u00d710\u207b\u2078 m\u00b3/s = 60 mL/h.",
    symbol: "mL/min"
  },
  millilitres_per_hour: {
    name: "Millilitres per hour",
    description: "The millilitre per hour (mL/h) equals 10\u207b\u2076/3600 \u2248 2.778\u00d710\u207b\u00b9\u2070 m\u00b3/s, standard for intravenous infusion pumps in clinical medicine and for slow-release laboratory syringe pumps. A 1 L IV bag running over 8 hours is set to 125 mL/h; subcutaneous insulin pumps deliver 1-100 mL/h of dilute insulin. 1 mL/h \u2248 2.778\u00d710\u207b\u00b9\u2070 m\u00b3/s.",
    symbol: "mL/h"
  },
  us_fluid_ounces_per_second: {
    name: "US fluid ounces per second",
    description: "The US fluid ounce per second (fl oz/s) equals 3.785411784\u00d710\u207b\u00b3/128 \u2248 2.957\u00d710\u207b\u2075 m\u00b3/s. It appears in US food-processing and beverage-filling machine specifications, where high-speed bottling lines may fill containers at dozens of fluid ounces per second per nozzle. A standard 16 fl oz bottle filled in 0.5 s corresponds to 32 fl oz/s per lane. 1 fl oz/s \u2248 2.957\u00d710\u207b\u2075 m\u00b3/s.",
    symbol: "fl oz/s"
  },
  us_fluid_ounces_per_minute: {
    name: "US fluid ounces per minute",
    description: "The US fluid ounce per minute (fl oz/min) equals 3.785411784\u00d710\u207b\u00b3/128/60 \u2248 4.929\u00d710\u207b\u2077 m\u00b3/s. It is found in US consumer-product flow specifications such as showerhead flow ratings, beverage dispenser settings, and fuel-injector bench tests in US automotive workshops. A showerhead rated at 48 fl oz/min delivers exactly 1.5 US gal/min. 1 fl oz/min \u2248 4.929\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "fl oz/min"
  },
  us_fluid_ounces_per_hour: {
    name: "US fluid ounces per hour",
    description: "The US fluid ounce per hour (fl oz/h) equals 3.785411784\u00d710\u207b\u00b3/128/3600 \u2248 8.215\u00d710\u207b\u2079 m\u00b3/s, used in low-flow medical devices and slow-infusion clinical equipment. A nasal cannula oxygen humidifier delivers humidity at 10-50 fl oz/h of water vapour equivalent; micro-dosing chemical feed pumps for water treatment are calibrated in fl oz/h in US systems. 1 fl oz/h \u2248 8.215\u00d710\u207b\u2079 m\u00b3/s.",
    symbol: "fl oz/h"
  },
  uk_fluid_ounces_per_second: {
    name: "UK fluid ounces per second",
    description: "The UK (imperial) fluid ounce per second (fl oz/s) equals 4.54609\u00d710\u207b\u00b3/160 \u2248 2.841\u00d710\u207b\u2075 m\u00b3/s, slightly larger than its US counterpart. It appears in pre-metric British food-manufacturing and brewing standards. A traditional UK draught-beer tap dispenses 1 pint (20 fl oz) in about 2 seconds, equating to \u224810 UK fl oz/s. 1 UK fl oz/s \u2248 2.841\u00d710\u207b\u2075 m\u00b3/s \u2248 0.9608 US fl oz/s.",
    symbol: "fl oz/s"
  },
  uk_fluid_ounces_per_minute: {
    name: "UK fluid ounces per minute",
    description: "The UK fluid ounce per minute (fl oz/min) equals 4.54609\u00d710\u207b\u00b3/160/60 \u2248 4.735\u00d710\u207b\u2077 m\u00b3/s. It is found in pre-metric British plumbing and brewing specifications, where tap-flow and pump-delivery rates were stated in imperial fluid ounces per minute. A UK laboratory peristaltic pump calibrated to 30 fl oz/min delivers \u224814.2 mL/s. 1 UK fl oz/min \u2248 4.735\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "fl oz/min"
  },
  uk_fluid_ounces_per_hour: {
    name: "UK fluid ounces per hour",
    description: "The UK fluid ounce per hour (fl oz/h) equals 4.54609\u00d710\u207b\u00b3/160/3600 \u2248 7.892\u00d710\u207b\u2079 m\u00b3/s, used in low-flow British clinical settings and historical laboratory records. IV fluid delivery rates in old UK nursing charts and slow-drip infusion protocols were documented in fl oz/h before metrication. 1 UK fl oz/h \u2248 7.892\u00d710\u207b\u2079 m\u00b3/s.",
    symbol: "fl oz/h"
  },
  cubic_inches_per_second: {
    name: "Cubic inches per second",
    description: "The cubic inch per second (in\u00b3/s) equals 1.6387064\u00d710\u207b\u2075 m\u00b3/s, used in US automotive engineering for engine displacement sweep rate, fuel-injector calibration, and hydraulic actuator speed specifications. An engine injector delivering 15 in\u00b3/s of fuel corresponds to roughly 15.5 mL/s; hydraulic jacks in US equipment are rated in in\u00b3/s at operating pressure. 1 in\u00b3/s \u2248 1.639\u00d710\u207b\u2075 m\u00b3/s = 0.016387 L/s.",
    symbol: "in\u00b3/s"
  },
  cubic_inches_per_minute: {
    name: "Cubic inches per minute",
    description: "The cubic inch per minute (in\u00b3/min) equals 1.6387064\u00d710\u207b\u2075/60 \u2248 2.731\u00d710\u207b\u2077 m\u00b3/s, common in US pneumatic and hydraulic circuit design. Air-tool consumption is rated in SCIM (standard cubic inches per minute); small hydraulic cylinders advancing at 10 in/min with 1 in\u00b2 bore consume 10 in\u00b3/min: exactly 0.163 mL/s. 1 in\u00b3/min \u2248 2.731\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "in\u00b3/min"
  },
  cubic_inches_per_hour: {
    name: "Cubic inches per hour",
    description: "The cubic inch per hour (in\u00b3/h) equals 1.6387064\u00d710\u207b\u2075/3600 \u2248 4.552\u00d710\u207b\u2079 m\u00b3/s, appearing in US oilfield plunger-pump capacity datasheets and slow hydraulic-actuator specifications. It is also used in US ASTM leak-test standards where maximum allowable leakage past a valve seal is expressed in in\u00b3/h at rated pressure. 1 in\u00b3/h \u2248 4.552\u00d710\u207b\u2079 m\u00b3/s.",
    symbol: "in\u00b3/h"
  },
  us_pints_per_second: {
    name: "US pints per second",
    description: "The US pint per second (pt/s) equals 3.785411784\u00d710\u207b\u00b3/8 \u2248 4.732\u00d710\u207b\u2074 m\u00b3/s, used in US food-filling equipment rated in pints-per-second throughput. High-speed dairy-packaging lines filling 16 oz (1 pt) cartons can achieve 10-20 pt/s per lane. 1 US pt/s \u2248 4.732\u00d710\u207b\u2074 m\u00b3/s = 0.4732 L/s = 7.5 US gal/min.",
    symbol: "pt/s"
  },
  us_pints_per_minute: {
    name: "US pints per minute",
    description: "The US pint per minute (pt/min) equals 3.785411784\u00d710\u207b\u00b3/8/60 \u2248 7.886\u00d710\u207b\u2076 m\u00b3/s, a unit encountered in US home-brewing, small-batch winery transfers, and consumer-grade pump ratings. A standard kitchen faucet running at 2 US gal/min produces 16 pt/min; a small submersible pond pump rated 50 gal/h delivers \u224827 pt/min. 1 US pt/min \u2248 7.886\u00d710\u207b\u2076 m\u00b3/s.",
    symbol: "pt/min"
  },
  us_pints_per_hour: {
    name: "US pints per hour",
    description: "The US pint per hour (pt/h) equals 3.785411784\u00d710\u207b\u00b3/8/3600 \u2248 1.314\u00d710\u207b\u2077 m\u00b3/s, used in US medical-device standards for slow-drip infusion and in American homebrew calculations for sparge water addition rates. A slow gravity sparge at 24 pt/h = 3 US gal/h is typical for small-batch homebrewing. 1 US pt/h \u2248 1.314\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "pt/h"
  },
  uk_pints_per_second: {
    name: "UK pints per second",
    description: "The UK (imperial) pint per second (pt/s) equals 4.54609\u00d710\u207b\u00b3/8 \u2248 5.683\u00d710\u207b\u2074 m\u00b3/s. The UK pint (20 fl oz) is 20% larger than the US pint. It is used in British brewery and beverage-filling lines - a canning line filling 0.568 L (1 pt) cans at 10 cans/s processes exactly 10 UK pt/s. 1 UK pt/s \u2248 5.683\u00d710\u207b\u2074 m\u00b3/s \u2248 1.201 US pt/s.",
    symbol: "pt/s"
  },
  uk_pints_per_minute: {
    name: "UK pints per minute",
    description: "The UK pint per minute (pt/min) equals 4.54609\u00d710\u207b\u00b3/8/60 \u2248 9.471\u00d710\u207b\u2076 m\u00b3/s, common in British beer-dispense engineering and pump datasheets pre-metrication. A cellar gas dispense system pressurising beer lines at 2 UK pt/min per tap maintains balanced flow for a 6-tap bar. 1 UK pt/min \u2248 9.471\u00d710\u207b\u2076 m\u00b3/s \u2248 0.5683 L/min.",
    symbol: "pt/min"
  },
  uk_pints_per_hour: {
    name: "UK pints per hour",
    description: "The UK pint per hour (pt/h) equals 4.54609\u00d710\u207b\u00b3/8/3600 \u2248 1.578\u00d710\u207b\u2077 m\u00b3/s, used in British slow-infusion clinical records and historical dairy milk-flow measurements before metrication. An IV drip set at 100 mL/h equals \u2248176 UK fl oz/h \u2248 8.8 UK pt/h. 1 UK pt/h \u2248 1.578\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "pt/h"
  },
  us_quarts_per_second: {
    name: "US quarts per second",
    description: "The US quart per second (qt/s) equals 3.785411784\u00d710\u207b\u00b3/4 \u2248 9.464\u00d710\u207b\u2074 m\u00b3/s, used in US industrial filling lines handling quart-size containers (motor oil, paint, sauce). A high-speed filling machine loading 1 qt bottles at 4 per second processes 4 qt/s per nozzle. 1 US qt/s \u2248 9.464\u00d710\u207b\u2074 m\u00b3/s = 0.9464 L/s.",
    symbol: "qt/s"
  },
  us_quarts_per_minute: {
    name: "US quarts per minute",
    description: "The US quart per minute (qt/min) equals 3.785411784\u00d710\u207b\u00b3/4/60 \u2248 1.577\u00d710\u207b\u2075 m\u00b3/s, encountered in US small-engine fuel system testing and food-processing pump calibration. Engine dynamometer fuel-flow instrumentation sometimes uses qt/min when testing small gasoline engines consuming 1-6 qt/min at full load. 1 US qt/min \u2248 1.577\u00d710\u207b\u2075 m\u00b3/s.",
    symbol: "qt/min"
  },
  us_quarts_per_hour: {
    name: "US quarts per hour",
    description: "The US quart per hour (qt/h) equals 3.785411784\u00d710\u207b\u00b3/4/3600 \u2248 2.629\u00d710\u207b\u2077 m\u00b3/s, used in US agricultural irrigation drippers (emitters rated in qt/h) and hobby aquaculture systems. A drip emitter rated 1 qt/h \u2248 0.946 L/h is a common size for garden irrigation in the US market. 1 US qt/h \u2248 2.629\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "qt/h"
  },
  litres_per_second: {
    name: "Litres per second",
    description: "The litre per second (L/s) equals 10\u207b\u00b3 m\u00b3/s, the standard unit for municipal water-supply engineering, fire-fighting flows, and HVAC system air handling. A fire hydrant delivers 15-30 L/s; a household mains water connection is typically 0.1-0.5 L/s; a large building HVAC chilled-water loop circulates 50-200 L/s. 1 L/s = 10\u207b\u00b3 m\u00b3/s = 3.6 m\u00b3/h \u2248 15.85 US gal/min.",
    symbol: "L/s"
  },
  litres_per_minute: {
    name: "Litres per minute",
    description: "The litre per minute (L/min) equals 10\u207b\u00b3/60 \u2248 1.667\u00d710\u207b\u2075 m\u00b3/s, one of the most common flow units in consumer and light-industrial applications. Household washing machines use 10-15 L/min; oxygen concentrators deliver 1-10 L/min to patients; a standard garden sprinkler head discharges 15-30 L/min. 1 L/min \u2248 1.667\u00d710\u207b\u2075 m\u00b3/s \u2248 0.2642 US gal/min.",
    symbol: "L/min"
  },
  litres_per_hour: {
    name: "Litres per hour",
    description: "The litre per hour (L/h) equals 10\u207b\u00b3/3600 \u2248 2.778\u00d710\u207b\u2077 m\u00b3/s, widely used in automotive fuel consumption (L/h), irrigation drip systems, and small pump specifications. A fuel cell vehicle running on hydrogen consumes \u00b12 L/h of liquid equivalent; a domestic water softener regeneration cycle uses 40-100 L/h of brine. 1 L/h \u2248 2.778\u00d710\u207b\u2077 m\u00b3/s \u2248 0.2642 US gal/h.",
    symbol: "L/h"
  },
  litres_per_day: {
    name: "Litres per day",
    description: "The litre per day (L/d) equals 10\u207b\u00b3/86400 \u2248 1.157\u00d710\u207b\u2078 m\u00b3/s, standard in water-resource management, reverse-osmosis membrane rating, and daily per-capita water-use statistics. A residential reverse-osmosis unit produces 100-300 L/d of purified water; the WHO minimum for basic household use is 50 L/d per person. 1 L/d \u2248 1.157\u00d710\u207b\u2078 m\u00b3/s.",
    symbol: "L/d"
  },
  us_gallons_per_second: {
    name: "US gallons per second",
    description: "The US gallon per second (gal/s) equals 3.785411784\u00d710\u207b\u00b3 m\u00b3/s, used for very large pump discharge rates and fire-suppression deluge systems. A large centrifugal fire pump rated 1 500 US gal/min delivers exactly 25 US gal/s; industrial cooling-tower makeup lines are sized in gal/s at peak demand. 1 US gal/s = 3.785411784\u00d710\u207b\u00b3 m\u00b3/s = 60 US gal/min \u2248 227.1 L/min.",
    symbol: "gal/s"
  },
  us_gallons_per_minute: {
    name: "US gallons per minute",
    description: "The US gallon per minute (gpm) equals 3.785411784\u00d710\u207b\u00b3/60 \u2248 6.309\u00d710\u207b\u2075 m\u00b3/s, the dominant volumetric flow unit in US plumbing, HVAC, and water-treatment industries. EPA showerhead standards are set at 2.5 gpm; residential water meters size at 3/4\"-1\" for 5-20 gpm; municipal water-distribution design uses hundreds to thousands of gpm. 1 gpm \u2248 6.309\u00d710\u207b\u2075 m\u00b3/s = 3.785 L/min.",
    symbol: "gpm"
  },
  us_gallons_per_hour: {
    name: "US gallons per hour",
    description: "The US gallon per hour (gph) equals 3.785411784\u00d710\u207b\u00b3/3600 \u2248 1.051\u00d710\u207b\u2076 m\u00b3/s, common in oil-burner nozzle ratings, water-softener regeneration, and RV/marine-plumbing specifications. Residential oil-burner nozzles are rated in gph (e.g., 0.75 gph, 1.00 gph); a small boat bilge pump might handle 200-500 gph. 1 US gph \u2248 1.052\u00d710\u207b\u2076 m\u00b3/s \u2248 3.785 L/h.",
    symbol: "gph"
  },
  us_gallons_per_day: {
    name: "US gallons per day",
    description: "The US gallon per day (gpd) equals 3.785411784\u00d710\u207b\u00b3/86400 \u2248 4.381\u00d710\u207b\u2078 m\u00b3/s, the standard unit in US water-utility regulation and residential water-well pump sizing. The US national average residential water use is about 80-100 gpd per person; a reverse-osmosis membrane module is rated in gpd (50-100 gpd for domestic units). 1 US gpd \u2248 4.381\u00d710\u207b\u2078 m\u00b3/s.",
    symbol: "gpd"
  },
  uk_gallons_per_second: {
    name: "UK gallons per second",
    description: "The UK (imperial) gallon per second (gal/s) equals 4.54609\u00d710\u207b\u00b3 m\u00b3/s, about 20% larger than the US gallon per second. It appears in pre-metric British fire-fighting standards, large pump test certificates, and naval engineering calculations. A UK fire engine pump rated 1 000 UK gal/min delivers \u224816.67 UK gal/s. 1 UK gal/s = 4.54609\u00d710\u207b\u00b3 m\u00b3/s \u2248 1.201 US gal/s.",
    symbol: "gal/s"
  },
  uk_gallons_per_minute: {
    name: "UK gallons per minute",
    description: "The UK (imperial) gallon per minute (gpm) equals 4.54609\u00d710\u207b\u00b3/60 \u2248 7.577\u00d710\u207b\u2075 m\u00b3/s, historically used in British plumbing design, pump curves, and water-treatment plant sizing. Pre-metric UK water-industry capacity tables and pump manufacturers quoted flows in UK gal/min; legacy British Standard BS EN pump curves often show both units. 1 UK gpm \u2248 7.577\u00d710\u207b\u2075 m\u00b3/s \u2248 4.546 L/min.",
    symbol: "gpm"
  },
  uk_gallons_per_hour: {
    name: "UK gallons per hour",
    description: "The UK gallon per hour (gph) equals 4.54609\u00d710\u207b\u00b3/3600 \u2248 1.263\u00d710\u207b\u2076 m\u00b3/s, found in pre-metric British burner-nozzle ratings, oil-consumption logs for diesel generators, and ship fuel-economy records. British aviation fuel consumption was once published in UK gal/h; legacy Lloyd's Register tanker descriptions used UK gal/h for cargo pump capacities. 1 UK gph \u2248 1.263\u00d710\u207b\u2076 m\u00b3/s.",
    symbol: "gph"
  },
  uk_gallons_per_day: {
    name: "UK gallons per day",
    description: "The UK gallon per day (gpd) equals 4.54609\u00d710\u207b\u00b3/86400 \u2248 5.261\u00d710\u207b\u2078 m\u00b3/s, used in British per-capita water-consumption statistics and pre-metric water-authority regulation. Historic UK Water Acts set minimum supply standards in UK gal/d per household; older UK borehole pump test reports quote sustained yield in UK gal/d. 1 UK gpd \u2248 5.261\u00d710\u207b\u2078 m\u00b3/s.",
    symbol: "gpd"
  },
  cubic_feet_per_second: {
    name: "Cubic feet per second",
    description: "The cubic foot per second (ft\u00b3/s or cfs) equals 0.028316846592 m\u00b3/s, the primary unit for measuring river discharge and open-channel flow in the United States. The US Geological Survey publishes all streamflow data in cfs; irrigation water rights, flood-control gates, and dam spillway capacities are specified in cfs. The Colorado River at full natural flow is \u224822 000 cfs. 1 cfs = 0.028316846592 m\u00b3/s \u2248 28.317 L/s \u2248 448.8 US gpm.",
    symbol: "ft\u00b3/s"
  },
  cubic_feet_per_minute: {
    name: "Cubic feet per minute",
    description: "The cubic foot per minute (cfm or ft\u00b3/min) equals 0.028316846592/60 \u2248 4.719\u00d710\u207b\u2074 m\u00b3/s, the dominant unit for ventilation, HVAC airflow, and compressed-air system design in the US. ASHRAE ventilation standards, building-code fresh-air requirements, and dust-collector capacity are all stated in cfm. A residential HVAC system moves 800-1 200 cfm; an industrial dust collector handles 2 000-20 000 cfm. 1 cfm \u2248 0.4719 L/s.",
    symbol: "ft\u00b3/min"
  },
  cubic_feet_per_hour: {
    name: "Cubic feet per hour",
    description: "The cubic foot per hour (ft\u00b3/h) equals 0.028316846592/3600 \u2248 7.866\u00d710\u207b\u2076 m\u00b3/s, used in US natural-gas metering (residential gas meters read in cubic feet; billing converts to CCF = 100 ft\u00b3) and historical furnace-fuel-consumption tables. A US residential gas furnace consumes 80-200 ft\u00b3/h of natural gas at full fire. 1 ft\u00b3/h \u2248 7.866\u00d710\u207b\u2076 m\u00b3/s.",
    symbol: "ft\u00b3/h"
  },
  cubic_feet_per_day: {
    name: "Cubic feet per day",
    description: "The cubic foot per day (ft\u00b3/d) equals 0.028316846592/86400 \u2248 3.277\u00d710\u207b\u2077 m\u00b3/s, found in US oil-and-gas production reports for low-rate gas wells and groundwater monitoring wells. A marginal coalbed-methane well producing 50 Mcf/d (50 000 ft\u00b3/d) of gas represents a modest but economic flow; residential water-well yield tests report in ft\u00b3/d. 1 ft\u00b3/d \u2248 3.277\u00d710\u207b\u2077 m\u00b3/s.",
    symbol: "ft\u00b3/d"
  },
  us_barrels_per_second: {
    name: "US barrels per second",
    description: "The US barrel per second (bbl/s) equals 0.158987294928 m\u00b3/s, an extremely large flow rate used only for catastrophic spill-rate estimates and very large pipeline surge calculations. The 2010 Deepwater Horizon spill peaked at \u224860 000 bbl/d \u2248 0.000694 bbl/s; major subsea pipeline ruptures may briefly exceed 1 bbl/s during decompression. 1 US bbl/s = 0.158987 m\u00b3/s \u2248 158.987 L/s.",
    symbol: "bbl/s"
  },
  us_barrels_per_minute: {
    name: "US barrels per minute",
    description: "The US barrel per minute (bbl/min) equals 0.158987294928/60 \u2248 2.650\u00d710\u207b\u00b3 m\u00b3/s, used in oil-pipeline pigging operations and tanker loading/unloading rates. A large crude-oil loading arm at a terminal can transfer 20 000 bbl/h = \u2248333 bbl/min = \u224852 000 US gal/min. Pipeline operators monitor block-valve isolation in bbl/min to detect ruptures. 1 bbl/min \u2248 2.650\u00d710\u207b\u00b3 m\u00b3/s.",
    symbol: "bbl/min"
  },
  us_barrels_per_hour: {
    name: "US barrels per hour",
    description: "The US barrel per hour (bbl/h) equals 0.158987294928/3600 \u2248 4.416\u00d710\u207b\u2075 m\u00b3/s, standard in petroleum-refinery process engineering for crude-oil unit feed rates and product run-downs. Crude-distillation unit (CDU) feed is sized in bbl/h; a 100 000 bbl/d refinery processes \u22484 167 bbl/h. Process simulation software (Aspen HYSYS) uses bbl/h by default for petroleum streams. 1 bbl/h \u2248 4.416\u00d710\u207b\u2075 m\u00b3/s.",
    symbol: "bbl/h"
  },
  us_barrels_per_day: {
    name: "US barrels per day",
    description: "The US barrel per day (bbl/d or bpd) equals 0.158987294928/86400 \u2248 1.840\u00d710\u207b\u2076 m\u00b3/s, the universal unit for crude-oil production, refinery capacity, and petroleum-product supply/demand reporting. Saudi Arabia produces \u22489-10 million bbl/d; global demand is \u224899-102 million bbl/d. All oil-market pricing, OPEC quotas, and EIA reports use bbl/d. 1 bbl/d \u2248 1.840\u00d710\u207b\u2076 m\u00b3/s \u2248 0.15899 m\u00b3/d.",
    symbol: "bbl/d"
  },
  cubic_metres_per_second: {
    name: "Cubic metres per second",
    description: "The cubic metre per second (m\u00b3/s) is the SI coherent unit of volumetric flow rate. It is used for large river discharges, turbine inlet flows, and major pipeline capacities. The Amazon River at its mouth averages \u2248200 000 m\u00b3/s; a large hydroelectric turbine passes 400-800 m\u00b3/s; a major municipal water-main carries 5-20 m\u00b3/s. 1 m\u00b3/s = 1 000 L/s \u2248 15 850 US gal/min = 35.315 ft\u00b3/s.",
    symbol: "m\u00b3/s"
  },
  cubic_metres_per_minute: {
    name: "Cubic metres per minute",
    description: "The cubic metre per minute (m\u00b3/min) equals 1/60 m\u00b3/s \u2248 1.667\u00d710\u207b\u00b2 m\u00b3/s, used in large compressor and blower specifications, tunnel ventilation design, and industrial air-handling. A mine-ventilation fan may move 1 000-5 000 m\u00b3/min; an industrial rotary-screw compressor delivers 5-50 m\u00b3/min of free air. 1 m\u00b3/min = 1 000 L/min \u2248 35.31 ft\u00b3/min \u2248 264.2 US gal/min.",
    symbol: "m\u00b3/min"
  },
  cubic_metres_per_hour: {
    name: "Cubic metres per hour",
    description: "The cubic metre per hour (m\u00b3/h) equals 1/3600 m\u00b3/s \u2248 2.778\u00d710\u207b\u2074 m\u00b3/s, the dominant volumetric flow unit in European process engineering, HVAC, and water treatment. Pump datasheet curves, heat-exchanger sizing software, and wastewater-treatment design all use m\u00b3/h as the standard. A domestic water pump runs at 3-8 m\u00b3/h; a municipal WWTP inlet pump handles 500-5 000 m\u00b3/h. 1 m\u00b3/h \u2248 2.778\u00d710\u207b\u2074 m\u00b3/s = 1 000 L/h.",
    symbol: "m\u00b3/h"
  },
  cubic_metres_per_day: {
    name: "Cubic metres per day",
    description: "The cubic metre per day (m\u00b3/d) equals 1/86400 \u2248 1.157\u00d710\u207b\u2075 m\u00b3/s, standard in water-resource management, desalination-plant capacity, and per-capita water-consumption accounting. A municipal desalination plant may produce 100 000-1 000 000 m\u00b3/d; the WHO minimum water supply requirement is 0.05 m\u00b3/d per person. 1 m\u00b3/d \u2248 1.157\u00d710\u207b\u2075 m\u00b3/s = 264.2 US gal/d.",
    symbol: "m\u00b3/d"
  },
  cubic_yards_per_second: {
    name: "Cubic yards per second",
    description: "The cubic yard per second (yd\u00b3/s) equals 0.764554857984 m\u00b3/s, a large unit used in US civil engineering for river flood-stage measurements and reservoir emergency-spillway capacity. A major dam spillway releasing water at 1 000 yd\u00b3/s could drain an Olympic pool in about 3 seconds. 1 yd\u00b3/s = 0.764554857984 m\u00b3/s \u2248 764.555 L/s \u2248 27 ft\u00b3/s.",
    symbol: "yd\u00b3/s"
  },
  cubic_yards_per_minute: {
    name: "Cubic yards per minute",
    description: "The cubic yard per minute (yd\u00b3/min) equals 0.764554857984/60 \u2248 0.012743 m\u00b3/s, used in ready-mix concrete delivery rates (a concrete truck discharges 8-10 yd\u00b3 in about 10 min = 0.8-1 yd\u00b3/min) and dredge pump throughput in US harbour projects. 1 yd\u00b3/min \u2248 0.012743 m\u00b3/s = 12.74 L/s \u2248 200.0 US gal/min.",
    symbol: "yd\u00b3/min"
  },
  cubic_yards_per_hour: {
    name: "Cubic yards per hour",
    description: "The cubic yard per hour (yd\u00b3/h) equals 0.764554857984/3600 \u2248 2.124\u00d710\u207b\u2074 m\u00b3/s, the standard unit for concrete pump output, earthwork compaction flow, and US dredging production rate reporting. A concrete pump truck delivers 30-80 yd\u00b3/h on a high-rise pour; a cutter-suction dredger handles 100-500 yd\u00b3/h in harbour maintenance. 1 yd\u00b3/h \u2248 2.124\u00d710\u207b\u2074 m\u00b3/s.",
    symbol: "yd\u00b3/h"
  },
  kilolitres_per_second: {
    name: "Kilolitres per second",
    description: "The kilolitre per second (kL/s) equals 1 m\u00b3/s, so 1 kL/s is identical to 1 m\u00b3/s. The term kilolitre is favoured in Australian and South African engineering over the equivalent cubic metre per second. Municipal water-main flow and stormwater-channel capacity are sometimes expressed in kL/s in these countries. 1 kL/s = 1 m\u00b3/s = 1 000 L/s \u2248 15 850 US gal/min.",
    symbol: "kL/s"
  },
  kilolitres_per_minute: {
    name: "Kilolitres per minute",
    description: "The kilolitre per minute (kL/min) equals 1/60 m\u00b3/s \u2248 0.016667 m\u00b3/s, used in Australian water-utility engineering for pump and pipeline sizing. Irrigation district delivery schedules and water-authority trunk-main flow records in Australia and New Zealand frequently use kL/min as an intermediate unit between L/s and ML/d. 1 kL/min = 1 000 L/min \u2248 264.2 US gal/min.",
    symbol: "kL/min"
  },
  kilolitres_per_hour: {
    name: "Kilolitres per hour",
    description: "The kilolitre per hour (kL/h) equals 1/3600 m\u00b3/s \u2248 2.778\u00d710\u207b\u2074 m\u00b3/s, identical to m\u00b3/h. It is used interchangeably with m\u00b3/h in Australian, New Zealand, and South African process-engineering practice. Pump datasheets from these markets quote capacity in kL/h; water-meter billing in rural areas uses kL/h for irrigation allocation. 1 kL/h = 1 m\u00b3/h = 1 000 L/h.",
    symbol: "kL/h"
  },
  kilolitres_per_day: {
    name: "Kilolitres per day",
    description: "The kilolitre per day (kL/d) equals 1/86400 \u2248 1.157\u00d710\u207b\u2075 m\u00b3/s, the standard unit for per-household and per-property water-consumption billing in Australia. Sydney Water and other Australian utilities charge tariffs per kL/d consumed; a typical Australian household uses 0.6-1.0 kL/d. 1 kL/d = 1 m\u00b3/d \u2248 264.2 US gal/d.",
    symbol: "kL/d"
  },
  acre_feet_per_second: {
    name: "Acre-feet per second",
    description: "The acre-foot per second (ac-ft/s) equals 1233.48183754752 m\u00b3/s, an enormous unit representing the flow that would fill a football-field-sized area to 1 ft depth every second. It appears in descriptions of exceptionally large dam-break flood waves and major river-system extreme events. The 1976 Teton Dam collapse peak outflow was estimated at \u224865 000 ft\u00b3/s \u2248 1.49 ac-ft/s. 1 ac-ft/s = 1 233.48 m\u00b3/s.",
    symbol: "ac-ft/s"
  },
  acre_feet_per_minute: {
    name: "Acre-feet per minute",
    description: "The acre-foot per minute (ac-ft/min) equals 1233.48183754752/60 \u2248 20.558 m\u00b3/s, encountered in large irrigation canal capacity descriptions and reservoir emergency spillway sizing in the US West. A major canal gate releasing 1 ac-ft/min drains a 1-acre field 1 foot deep every minute - a substantial agricultural flow. 1 ac-ft/min \u2248 20.558 m\u00b3/s \u2248 726.0 ft\u00b3/s.",
    symbol: "ac-ft/min"
  },
  acre_feet_per_hour: {
    name: "Acre-feet per hour",
    description: "The acre-foot per hour (ac-ft/h) equals 1233.48183754752/3600 \u2248 0.34263 m\u00b3/s, standard for sizing irrigation district delivery canals, reservoir outflow scheduling, and aquifer recharge basin calculations in the western US. The US Bureau of Reclamation uses ac-ft/h for canal operational planning; a 1 000-acre farm irrigating with 0.5 in/h rain-equivalent receives \u224841 ac-ft/h. 1 ac-ft/h \u2248 0.34263 m\u00b3/s.",
    symbol: "ac-ft/h"
  },
  acre_feet_per_day: {
    name: "Acre-feet per day",
    description: "The acre-foot per day (ac-ft/d) equals 1233.48183754752/86400 \u2248 0.014278 m\u00b3/s, the practical unit for daily water-delivery scheduling in western US irrigation districts and river-compact administration. Water rights in the Colorado River system are specified in acre-feet per year; daily delivery schedules convert to ac-ft/d. A moderate-size irrigation lateral delivers 5-50 ac-ft/d. 1 ac-ft/d \u2248 0.014278 m\u00b3/s \u2248 504.2 US gal/min.",
    symbol: "ac-ft/d"
  },
  million_litres_per_day: {
    name: "Million litres per day",
    description: "The million litres per day (ML/d or MLD) equals 1000/86400 \u2248 0.011574 m\u00b3/s, the standard capacity unit for water-treatment plants, sewage-treatment works, and desalination facilities in the UK, India, and much of the Commonwealth. A small town water-treatment works processes 5-20 ML/d; the Beckton Sewage Treatment Works in London treats \u2248700 ML/d. 1 ML/d \u2248 0.011574 m\u00b3/s = 1 000 m\u00b3/d.",
    symbol: "ML/d"
  },
  megalitres_per_day: {
    name: "Megalitres per day",
    description: "The megalitre per day (ML/d) equals 1000/86400 \u2248 0.011574 m\u00b3/s, numerically identical to million litres per day. It is the preferred notation in Australian water-authority reporting, environmental flow assessments, and reservoir storage accounting. Murray-Darling Basin environmental flows are specified in ML/d; urban water utilities publish reservoir capacity and daily draw in ML/d. 1 ML/d \u2248 0.011574 m\u00b3/s = 1 000 m\u00b3/d.",
    symbol: "ML/d"
  },
  cubic_kilometres_per_year: {
    name: "Cubic kilometres per year",
    description: "The cubic kilometre per year (km\u00b3/yr) equals 10\u2079/(365.25\u00d786400) \u2248 31.688 m\u00b3/s, the unit used in global hydrology, glaciology, and climate science for river basin runoff, ice-sheet mass balance, and groundwater storage change. Total global freshwater river runoff is \u224837 000 km\u00b3/yr; the Amazon alone contributes \u22486 600 km\u00b3/yr; the Greenland ice sheet loses \u2248280 km\u00b3/yr to melt and calving. 1 km\u00b3/yr \u2248 31.69 m\u00b3/s.",
    symbol: "km\u00b3/yr"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCubicMetersPerSecond);
}

function convertFlowVolumetric() {
  convertFactorBased(toCubicMetersPerSecond);
}

initConverterPage();
