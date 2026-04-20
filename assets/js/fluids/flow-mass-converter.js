// Base unit: kilogram per second (kg/s) - the SI coherent derived unit of mass flow rate.
// All factors express how many kg/s equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefix multipliers: micro = 1e-6, milli = 1e-3 (all exact)
//   1 µg = 1e-9 kg (exact); 1 mg = 1e-6 kg (exact); 1 g = 1e-3 kg (exact)
//   1 grain = 1 lb / 7000 = 0.45359237 / 7000 kg (exact given lb definition)
//   1 oz (avoirdupois) = 1 lb / 16 = 0.45359237 / 16 = 0.028349523125 kg (exact)
//   1 lb (avoirdupois) = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 slug = g0 * lb / ft = 9.80665 * 0.45359237 / 0.3048 = 14.593902937... kg
//     where g0 = 9.80665 m/s2 (exact, CGPM 1901), 1 ft = 0.3048 m (exact)
//   1 short hundredweight (US) = 100 lb = 45.359237 kg (exact)
//   1 long  hundredweight (UK) = 112 lb = 50.80234544 kg (exact: 112 * 0.45359237)
//   1 short ton (US) = 2000 lb = 907.18474 kg (exact: 2000 * 0.45359237)
//   1 metric ton = 1000 kg (exact, SI definition)
//   1 long  ton  (UK) = 2240 lb = 1016.0469088 kg (exact: 2240 * 0.45359237)
//   1 min = 60 s; 1 h = 3600 s; 1 d = 86400 s (all exact)

const toKilogramsPerSecond = {
  // -- Micrograms per time ---------------------------------------------------
  micrograms_per_second:          1e-9,                                        // exact: 1 µg = 1e-9 kg
  micrograms_per_minute:          1e-9 / 60,                                   // exact
  micrograms_per_hour:            1e-9 / 3600,                                 // exact
  // -- Milligrams per time ---------------------------------------------------
  milligrams_per_second:          1e-6,                                        // exact: 1 mg = 1e-6 kg
  milligrams_per_minute:          1e-6 / 60,                                   // exact
  milligrams_per_hour:            1e-6 / 3600,                                 // exact
  milligrams_per_day:             1e-6 / 86400,                                // exact
  // -- Grains per time -------------------------------------------------------
  grains_per_second:              0.45359237 / 7000,                           // exact: 1 grain = lb/7000 = 6.479891e-5 kg
  grains_per_minute:              0.45359237 / 7000 / 60,                      // exact
  grains_per_hour:                0.45359237 / 7000 / 3600,                    // exact
  // -- Grams per time --------------------------------------------------------
  grams_per_second:               1e-3,                                        // exact: 1 g = 1e-3 kg
  grams_per_minute:               1e-3 / 60,                                   // exact
  grams_per_hour:                 1e-3 / 3600,                                 // exact
  grams_per_day:                  1e-3 / 86400,                                // exact
  // -- Ounces (avoirdupois) per time -----------------------------------------
  ounces_per_second:              0.45359237 / 16,                             // exact: 0.028349523125 kg
  ounces_per_minute:              0.45359237 / 16 / 60,                        // exact
  ounces_per_hour:                0.45359237 / 16 / 3600,                      // exact
  ounces_per_day:                 0.45359237 / 16 / 86400,                     // exact
  // -- Pounds (avoirdupois) per time -----------------------------------------
  pounds_per_second:              0.45359237,                                  // exact
  pounds_per_minute:              0.45359237 / 60,                             // exact
  pounds_per_hour:                0.45359237 / 3600,                           // exact
  pounds_per_day:                 0.45359237 / 86400,                          // exact
  // -- Kilograms per time ----------------------------------------------------
  kilograms_per_second:           1,                                           // reference (base unit)
  kilograms_per_minute:           1 / 60,                                      // exact
  kilograms_per_hour:             1 / 3600,                                    // exact
  kilograms_per_day:              1 / 86400,                                   // exact
  // -- Slugs per time --------------------------------------------------------
  slugs_per_second:               9.80665 * 0.45359237 / 0.3048,              // = 14.5939029372... kg; exact: g0 * lb / ft
  slugs_per_hour:                 9.80665 * 0.45359237 / 0.3048 / 3600,       // exact
  // -- Short hundredweights (US, 100 lb) per time ---------------------------
  short_hundredweights_per_hour:  45.359237 / 3600,                           // exact: 100 * 0.45359237 / 3600
  short_hundredweights_per_day:   45.359237 / 86400,                          // exact
  // -- Long hundredweights (UK, 112 lb) per time ----------------------------
  long_hundredweights_per_hour:   50.80234544 / 3600,                         // exact: 112 * 0.45359237 / 3600
  long_hundredweights_per_day:    50.80234544 / 86400,                        // exact
  // -- Short tons (US, 2000 lb) per time ------------------------------------
  short_tons_per_second:          907.18474,                                   // exact: 2000 * 0.45359237
  short_tons_per_minute:          907.18474 / 60,                              // exact
  short_tons_per_hour:            907.18474 / 3600,                            // exact
  short_tons_per_day:             907.18474 / 86400,                           // exact
  // -- Metric tons / Tonnes (1000 kg) per time ------------------------------
  tonnes_per_second:              1000,                                        // exact
  tonnes_per_minute:              1000 / 60,                                   // exact
  tonnes_per_hour:                1000 / 3600,                                 // exact
  tonnes_per_day:                 1000 / 86400,                                // exact
  // -- Long tons (UK, 2240 lb) per time -------------------------------------
  long_tons_per_second:           1016.0469088,                                // exact: 2240 * 0.45359237
  long_tons_per_minute:           1016.0469088 / 60,                           // exact
  long_tons_per_hour:             1016.0469088 / 3600,                         // exact
  long_tons_per_day:              1016.0469088 / 86400,                        // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  micrograms_per_second: {
    name: "Micrograms per second",
    description: "The microgram per second (\u00b5g/s) equals 10\u207b\u2079 kg/s, the working unit for ultra-trace flow measurements. HPLC pumps delivering isotopic tracers, or nanoliter dispense systems in drug-discovery robotics, operate at \u00b5g/s throughput. A 1 \u00b5l/min water stream at 1 g/cm\u00b3 corresponds to \u224816.7 \u00b5g/s. 1 \u00b5g/s = 10\u207b\u2079 kg/s = 60 \u00b5g/min.",
    symbol: "\u00b5g/s"
  },
  micrograms_per_minute: {
    name: "Micrograms per minute",
    description: "The microgram per minute (\u00b5g/min) equals 10\u207b\u2079/60 \u2248 1.667\u00d710\u207b\u00b9\u00b9 kg/s, used in capillary electrophoresis and gas chromatography mass flow calibration. A typical cold-trap atmospheric sampler collecting particulate matter draws air at a rate characterized in \u00b5g/min of PM2.5. 1 \u00b5g/min = 1/60 \u00b5g/s \u2248 1.667\u00d710\u207b\u00b9\u00b9 kg/s.",
    symbol: "\u00b5g/min"
  },
  micrograms_per_hour: {
    name: "Micrograms per hour",
    description: "The microgram per hour (\u00b5g/h) equals 10\u207b\u2079/3600 \u2248 2.778\u00d710\u207b\u00b9\u00b3 kg/s, used in corrosion science to quantify mass loss rates of thin films or passive oxide layers. A stainless steel specimen losing 1 \u00b5g/h represents an extremely low corrosion rate typical of passive surfaces in neutral aqueous environments. 1 \u00b5g/h = 1/3600 \u00b5g/s \u2248 2.778\u00d710\u207b\u00b9\u00b3 kg/s.",
    symbol: "\u00b5g/h"
  },
  milligrams_per_second: {
    name: "Milligrams per second",
    description: "The milligram per second (mg/s) equals 10\u207b\u2076 kg/s, common in pharmaceutical tablet coating lines and laboratory syringe pump calibrations. A modern inkjet printhead deposits ink at roughly 1-10 mg/s per nozzle row during high-speed printing; medical infusion pumps are calibrated to this scale for drug-delivery accuracy. 1 mg/s = 10\u207b\u2076 kg/s = 60 mg/min.",
    symbol: "mg/s"
  },
  milligrams_per_minute: {
    name: "Milligrams per minute",
    description: "The milligram per minute (mg/min) equals 10\u207b\u2076/60 \u2248 1.667\u00d710\u207b\u2078 kg/s, the preferred unit for laboratory peristaltic pump output and aerosol generator calibration. Metered-dose inhalers deliver 100-500 \u00b5g of active compound per actuation; at 1 actuation per minute that is 0.1-0.5 mg/min. 1 mg/min = 1/60 mg/s \u2248 1.667\u00d710\u207b\u2078 kg/s.",
    symbol: "mg/min"
  },
  milligrams_per_hour: {
    name: "Milligrams per hour",
    description: "The milligram per hour (mg/h) equals 10\u207b\u2076/3600 \u2248 2.778\u00d710\u207b\u00b9\u2070 kg/s, adopted in transdermal drug-patch pharmacokinetics to express dermal absorption rate. A nicotine patch typically releases 14-21 mg over 24 h, corresponding to \u22480.58-0.88 mg/h. Environmental emission tests for laboratory fume hoods also express contaminant escape in mg/h. 1 mg/h = 1/3600 mg/s.",
    symbol: "mg/h"
  },
  milligrams_per_day: {
    name: "Milligrams per day",
    description: "The milligram per day (mg/d) equals 10\u207b\u2076/86400 \u2248 1.157\u00d710\u207b\u00b9\u00b9 kg/s, used in toxicology (daily intake limits) and in slow-release pharmaceutical implants. WHO acceptable daily intake for food additives is expressed in mg/kg body mass per day; a 70 kg adult at 1 mg/kg/d represents a 70 mg/d dose. 1 mg/d \u2248 1.157\u00d710\u207b\u00b9\u00b9 kg/s.",
    symbol: "mg/d"
  },
  grains_per_second: {
    name: "Grains per second",
    description: "The grain per second (gr/s) equals 64.79891 mg/s or 6.479891\u00d710\u207b\u2075 kg/s. The grain (= 1/7000 lb exactly) is the smallest avoirdupois mass unit, still used in ballistics for bullet and propellant-charge weights. A .308 Winchester rifle bullet of 168 gr fired in 1 s represents 168 gr/s; powder charge is typically 40-46 gr. 1 gr/s = 6.479891\u00d710\u207b\u2075 kg/s = 64.79891 mg/s.",
    symbol: "gr/s"
  },
  grains_per_minute: {
    name: "Grains per minute",
    description: "The grain per minute (gr/min) equals 6.479891\u00d710\u207b\u2075/60 \u2248 1.080\u00d710\u207b\u2076 kg/s. This unit appears in HVAC humidity engineering: moisture added or removed from conditioned air is traditionally expressed in grains of water per pound of dry air per minute in US practice. A whole-house humidifier may evaporate 300-600 gr/min at design load. 1 gr/min \u2248 1.080\u00d710\u207b\u2076 kg/s.",
    symbol: "gr/min"
  },
  grains_per_hour: {
    name: "Grains per hour",
    description: "The grain per hour (gr/h) equals 6.479891\u00d710\u207b\u2075/3600 \u2248 1.800\u00d710\u207b\u2078 kg/s, used in HVAC psychrometric calculations for dehumidifier capacity and moisture-removal rates. ASHRAE load calculation spreadsheets report latent loads in grains of water per hour; a typical residential dehumidifier removes 5\u00d710\u2075-2\u00d710\u2076 gr/h. 1 gr/h \u2248 1.800\u00d710\u207b\u2078 kg/s.",
    symbol: "gr/h"
  },
  grams_per_second: {
    name: "Grams per second",
    description: "The gram per second (g/s) equals 10\u207b\u00b3 kg/s, a practical laboratory and light-industrial unit. Water flowing from a standard kitchen tap runs at roughly 60-80 g/s; a 3D printer extruder deposits filament at 0.5-2 g/s; an automated pill-dispensing machine doses powders at 1-10 g/s. It is also the preferred unit for small engine fuel-consumption test benches. 1 g/s = 10\u207b\u00b3 kg/s = 3.6 kg/h.",
    symbol: "g/s"
  },
  grams_per_minute: {
    name: "Grams per minute",
    description: "The gram per minute (g/min) equals 10\u207b\u00b3/60 \u2248 1.667\u00d710\u207b\u2075 kg/s, common in food processing (condiment dispensing, coffee brewing), and laboratory flow chemistry. A standard espresso machine draws water at \u224830 g/min through the portafilter; a micro-reactor feed pump for organic synthesis is calibrated in g/min. 1 g/min = 1/60 g/s \u2248 1.667\u00d710\u207b\u2075 kg/s.",
    symbol: "g/min"
  },
  grams_per_hour: {
    name: "Grams per hour",
    description: "The gram per hour (g/h) equals 10\u207b\u00b3/3600 \u2248 2.778\u00d710\u207b\u2077 kg/s, used in fuel-cell hydrogen consumption tests, precision agricultural sprayers, and humidity calibration. A 1 kW PEM fuel cell consumes roughly 750 g/h of hydrogen at rated power. Automotive air-conditioning refrigerant leak standards are set in g/h. 1 g/h \u2248 2.778\u00d710\u207b\u2077 kg/s = 1/3600 g/s.",
    symbol: "g/h"
  },
  grams_per_day: {
    name: "Grams per day",
    description: "The gram per day (g/d) equals 10\u207b\u00b3/86400 \u2248 1.157\u00d710\u207b\u2078 kg/s, applied in nutritional biochemistry, pharmacology, and low-rate environmental monitoring. Human daily protein synthesis rates are in the range of 250-300 g/d; WHO recommended dietary iron intake is 8-18 mg/d; refrigerant leakage regulations cap systems at a few g/d. 1 g/d \u2248 1.157\u00d710\u207b\u2078 kg/s.",
    symbol: "g/d"
  },
  ounces_per_second: {
    name: "Ounces per second",
    description: "The ounce per second (oz/s) equals 0.028349523125 kg/s, a practical US unit for moderate liquid or solid flow measurements. A garden hose delivering 1.5 US gal/min discharges water at roughly 2.1 oz/s; a small popcorn machine pops roughly 0.5-1 oz/s of popped corn at full rate. 1 oz/s = 0.028349523125 kg/s \u2248 0.0625 lb/s.",
    symbol: "oz/s"
  },
  ounces_per_minute: {
    name: "Ounces per minute",
    description: "The ounce per minute (oz/min) equals 0.028349523125/60 \u2248 4.725\u00d710\u207b\u2074 kg/s, used in US beverage dispensing (draft beer taps, fountain-drink machines) and food-service portion control. A properly set draft beer faucet pours at \u224816-20 oz/min; a commercial coffee brewer delivers \u224812-16 oz/min of brew. 1 oz/min \u2248 4.725\u00d710\u207b\u2074 kg/s = 1/16 lb/min.",
    symbol: "oz/min"
  },
  ounces_per_hour: {
    name: "Ounces per hour",
    description: "The ounce per hour (oz/h) equals 0.028349523125/3600 \u2248 7.875\u00d710\u207b\u2076 kg/s, seen in refrigerant-charge leak-rate specifications and slow-drip irrigation design. US EPA Section 608 refrigerant regulations set leak-rate thresholds partly in oz/year; appliance industry test methods use oz/h equivalents for comparison. 1 oz/h \u2248 7.875\u00d710\u207b\u2076 kg/s.",
    symbol: "oz/h"
  },
  ounces_per_day: {
    name: "Ounces per day",
    description: "The ounce per day (oz/d) equals 0.028349523125/86400 \u2248 3.281\u00d710\u207b\u2077 kg/s, used in US clinical nutrition (tube-feeding rates, oral-supplement intake) and very-low flow industrial metering. A patient receiving 6 oz of enteral formula per hour (via a drip-tube) receives \u2248144 oz/d. 1 oz/d \u2248 3.281\u00d710\u207b\u2077 kg/s.",
    symbol: "oz/d"
  },
  pounds_per_second: {
    name: "Pounds per second",
    description: "The pound per second (lb/s) equals 0.45359237 kg/s, widely used in aerospace and large industrial equipment. A Saturn V first-stage engine consumed \u224813 short tons of propellant per second, equal to \u224826 000 lb/s; a typical large centrifugal pump handling water moves \u2248500-2000 lb/s at operating flow. 1 lb/s = 0.45359237 kg/s \u2248 3 600 lb/h.",
    symbol: "lb/s"
  },
  pounds_per_minute: {
    name: "Pounds per minute",
    description: "The pound per minute (lb/min) equals 0.45359237/60 \u2248 7.560\u00d710\u207b\u00b3 kg/s, the standard unit for US fire-suppression system design (sprinkler flow demand) and HVAC hydronic loop balancing. A fire-sprinkler head at 15 psi discharges roughly 30-40 lb/min of water; industrial humidifiers are rated in lb/min of steam. 1 lb/min \u2248 7.560\u00d710\u207b\u00b3 kg/s = 60 lb/h.",
    symbol: "lb/min"
  },
  pounds_per_hour: {
    name: "Pounds per hour",
    description: "The pound per hour (lb/h) equals 0.45359237/3600 \u2248 1.260\u00d710\u207b\u2074 kg/s, the dominant unit in US process engineering and steam-boiler rating. Packaged steam boilers are rated in lb/h of steam output (typical range 100-2 000 lb/h); HVAC cooling-coil latent loads are calculated in lb/h of moisture; flue-gas emission inventories are reported in lb/h per stack. 1 lb/h \u2248 1.260\u00d710\u207b\u2074 kg/s.",
    symbol: "lb/h"
  },
  pounds_per_day: {
    name: "Pounds per day",
    description: "The pound per day (lb/d) equals 0.45359237/86400 \u2248 5.249\u00d710\u207b\u2076 kg/s, used in wastewater engineering for reporting biochemical oxygen demand (BOD) loads, nutrient loadings, and sludge production. US NPDES permits set effluent mass-load limits in lb/d; a municipal WWTP serving 10 000 people generates roughly 1 500-3 000 lb/d of dry sludge solids. 1 lb/d \u2248 5.249\u00d710\u207b\u2076 kg/s.",
    symbol: "lb/d"
  },
  kilograms_per_second: {
    name: "Kilograms per second",
    description: "The kilogram per second (kg/s) is the SI coherent derived unit of mass flow rate relevant across all branches of engineering. Jet turbofan engines pass 100-800 kg/s of air through the core and bypass duct combined; drinking-water intake pipelines for a city of one million people sustain flow rates of 1 000-4 000 kg/s. It is the reference unit in the continuity equation and mass-conservation calculations. 1 kg/s = 3 600 kg/h \u2248 2.205 lb/s.",
    symbol: "kg/s"
  },
  kilograms_per_minute: {
    name: "Kilograms per minute",
    description: "The kilogram per minute (kg/min) equals 1/60 kg/s \u2248 0.01667 kg/s, convenient for medium-scale industrial processes and chemical reactors. A cement transit-mixer discharges ready-mix at \u2248200-400 kg/min; a grain auger on a combine harvester typically moves 300-600 kg/min; an industrial coffee roaster cycles 120-180 kg/min of beans through the drum. 1 kg/min = 1/60 kg/s = 60 kg/h.",
    symbol: "kg/min"
  },
  kilograms_per_hour: {
    name: "Kilograms per hour",
    description: "The kilogram per hour (kg/h) equals 1/3600 kg/s \u2248 2.778\u00d710\u207b\u2074 kg/s, the dominant metric unit in the chemical and petrochemical industry for equipment sizing. Distillation column feed rates, reactor throughputs, heat-exchanger duty calculations, and pump datasheets routinely use kg/h. A 500 MW coal-fired power station burns \u2248180 000 kg/h of coal. 1 kg/h \u2248 2.778\u00d710\u207b\u2074 kg/s = 2.205 lb/h.",
    symbol: "kg/h"
  },
  kilograms_per_day: {
    name: "Kilograms per day",
    description: "The kilogram per day (kg/d) equals 1/86400 \u2248 1.157\u00d710\u207b\u2075 kg/s, standard in environmental engineering for pollutant load calculations and water-treatment material dosing. Activated-carbon dosing for a water-treatment plant, sludge dewatering output, and river sediment transport surveys all use kg/d. A medium river in flood may move 10 000-100 000 kg/d of suspended solids. 1 kg/d \u2248 1.157\u00d710\u207b\u2075 kg/s.",
    symbol: "kg/d"
  },
  slugs_per_second: {
    name: "Slugs per second",
    description: "The slug per second (slug/s) equals 14.5939029372 kg/s, derived from the Imperial system where 1 slug = 1 lb\u00b7s\u00b2/ft \u2248 14.594 kg. The slug is the coherent mass unit in the foot-pound-second system; rocket propulsion engineers using US customary units express mass flow in slug/s. A standard American rocket engine consuming 75 000 lb/s of propellant corresponds to \u224875 000/32.174 \u2248 1 830 slug/s. 1 slug/s = 14.5939029372... kg/s.",
    symbol: "slug/s"
  },
  slugs_per_hour: {
    name: "Slugs per hour",
    description: "The slug per hour (slug/h) equals 14.5939029372/3600 \u2248 4.054\u00d710\u207b\u00b3 kg/s, used in aviation aerodynamics problems expressed in foot-pound-second units. Engine mass-flow data from legacy US military specifications and NASA test reports use slug/h as an intermediate unit between the tiny slug/s and large slug/day. 1 slug/h \u2248 4.054\u00d710\u207b\u00b3 kg/s \u2248 32.174 lb/h.",
    symbol: "slug/h"
  },
  short_hundredweights_per_hour: {
    name: "Short hundredweights per hour",
    description: "The short hundredweight per hour (cwt/h, US) equals 45.359237/3600 \u2248 0.012600 kg/s. The US short hundredweight (100 lb exactly) is used in grain elevator and feed-mill billing sheets, cotton-gin output metering, and livestock-feed blending operations. A small feed mill might process 100-500 short cwt/h of mixed grain. 1 short cwt/h \u2248 0.012600 kg/s = 100 lb/h.",
    symbol: "cwt/h"
  },
  short_hundredweights_per_day: {
    name: "Short hundredweights per day",
    description: "The short hundredweight per day (cwt/d, US) equals 45.359237/86400 \u2248 5.249\u00d710\u207b\u2074 kg/s. It appears in US agricultural reports where daily throughput of commodity crops (corn, soybeans, hay) or daily milk yield per herd is stated in short cwt/d. A modern dairy farm averaging 80 lb/cow/d at 1 000 cows produces 800 cwt/d. 1 short cwt/d \u2248 5.249\u00d710\u207b\u2074 kg/s.",
    symbol: "cwt/d"
  },
  long_hundredweights_per_hour: {
    name: "Long hundredweights per hour",
    description: "The long hundredweight per hour (cwt/h, UK) equals 50.80234544/3600 \u2248 0.014112 kg/s. The long hundredweight (112 lb = 8 stone) was the standard commercial weight in British wholesale trade. It survives in historic UK cement and bulk-aggregate pricing sheets and in some British agricultural markets. 1 long cwt/h \u2248 0.014112 kg/s = 112 lb/h.",
    symbol: "cwt/h"
  },
  long_hundredweights_per_day: {
    name: "Long hundredweights per day",
    description: "The long hundredweight per day (cwt/d, UK) equals 50.80234544/86400 \u2248 5.880\u00d710\u207b\u2074 kg/s, encountered in legacy British industrial reports for colliery output, port-handling capacity, and sugar-refinery throughput. Historical British coal-mine productivity was routinely expressed in long cwt per miner per day. 1 long cwt/d \u2248 5.880\u00d710\u207b\u2074 kg/s = 112 lb/d.",
    symbol: "cwt/d"
  },
  short_tons_per_second: {
    name: "Short tons per second",
    description: "The short ton per second (ton/s, US) equals 907.18474 kg/s, used for the very highest industrial and military throughput rates. The Space Shuttle Main Engine consumed propellant at \u2248480 kg/s LOX + 160 kg/s LH2 \u2248 640 kg/s \u2248 0.71 ton/s; a large blast-furnace tap discharges molten iron at 1-3 ton/s. 1 short ton/s = 907.18474 kg/s = 2 000 lb/s.",
    symbol: "ton/s"
  },
  short_tons_per_minute: {
    name: "Short tons per minute",
    description: "The short ton per minute (ton/min, US) equals 907.18474/60 \u2248 15.120 kg/s, typical for high-capacity conveyor belts and bucket-wheel excavators in open-cast mining. A large surface coal mine loads unit trains with overland conveyors rated at 5 000-15 000 short ton/h = 83-250 ton/min. 1 short ton/min \u2248 15.120 kg/s = 2 000 lb/min.",
    symbol: "ton/min"
  },
  short_tons_per_hour: {
    name: "Short tons per hour",
    description: "The short ton per hour (ton/h, US) equals 907.18474/3600 \u2248 0.25199 kg/s, the standard capacity unit for US aggregate crushers, coal-fired power plants, and pellet mills. ASHRAE steam-boiler size references, cement plant kiln output, and mine-hoist capacity are all quoted in short ton/h. A large gyratory crusher processes 1 000-3 000 short ton/h. 1 short ton/h \u2248 0.25199 kg/s \u2248 0.9072 t/h.",
    symbol: "ton/h"
  },
  short_tons_per_day: {
    name: "Short tons per day",
    description: "The short ton per day (ton/d, US) equals 907.18474/86400 \u2248 0.010499 kg/s, the capacity unit for mid-size mining operations, smelters, and US water-treatment chemical dosing. A small gold mine may process 500-1 000 short ton/d of ore; activated-sludge wastewater plants dose chemicals in short ton/d. 1 short ton/d \u2248 0.010499 kg/s \u2248 2 000 lb/d.",
    symbol: "ton/d"
  },
  tonnes_per_second: {
    name: "Tonnes per second",
    description: "The metric tonne per second (t/s) equals 1 000 kg/s, the largest commonly cited mass-flow unit for catastrophic events and mega-scale engineering. The Chicxulub impactor released energy equivalent to removing \u22487\u00d710\u00b9\u00b9 t of TNT over milliseconds; large submarine volcanic eruptions expel lava at 10\u00b3-10\u2074 t/s. Industrial context: the Three Gorges Dam passes \u224845 000 m\u00b3/s of water = \u224845 000 t/s at peak flood. 1 t/s = 1 000 kg/s \u2248 1.102 short ton/s.",
    symbol: "t/s"
  },
  tonnes_per_minute: {
    name: "Tonnes per minute",
    description: "The metric tonne per minute (t/min) equals 1 000/60 \u2248 16.667 kg/s, used for large-scale mining conveyor capacity, bulk-carrier loading terminals, and industrial furnace melt rates. A Cape-size bulk carrier loads iron ore at 3 000-5 000 t/h = 50-83 t/min; a large electric arc furnace taps \u2248100-200 t of steel per heat over roughly 60-90 min. 1 t/min = 1 000/60 kg/s \u2248 1.102 short ton/min.",
    symbol: "t/min"
  },
  tonnes_per_hour: {
    name: "Tonnes per hour",
    description: "The metric tonne per hour (t/h) equals 1 000/3600 \u2248 0.27778 kg/s, the dominant capacity unit in European and international process engineering. Equipment datasheets for conveyor belts, crushers, mills, dryers, compactors, and cyclone separators specify throughput in t/h. A 500 MW coal plant consumes \u224870-90 t/h of pulverised coal; a large rotary cement kiln produces \u2248200-300 t/h of clinker. 1 t/h = 1 000/3600 kg/s \u2248 1.102 short ton/h.",
    symbol: "t/h"
  },
  tonnes_per_day: {
    name: "Tonnes per day",
    description: "The metric tonne per day (t/d) equals 1 000/86400 \u2248 0.011574 kg/s, standard in hydrometallurgy, wastewater treatment, and environmental mass-balance reporting. A large copper smelter processes 2 000-3 000 t/d of ore; a modern desalination plant produces 100 000-500 000 t/d of potable water; IPCS industrial emission guidelines use t/d for stack mass rates. 1 t/d \u2248 0.011574 kg/s \u2248 1.102 short ton/d.",
    symbol: "t/d"
  },
  long_tons_per_second: {
    name: "Long tons per second",
    description: "The long ton per second (long ton/s) equals 1 016.0469088 kg/s, based on the UK long ton of 2 240 lb used historically in British heavy industry and naval engineering. It quantifies extremely high discharge rates such as large dam break surges or catastrophic industrial spillages. 1 long ton/s = 1 016.0469088 kg/s \u2248 1.016 t/s \u2248 1.120 short ton/s.",
    symbol: "long ton/s"
  },
  long_tons_per_minute: {
    name: "Long tons per minute",
    description: "The long ton per minute (long ton/min) equals 1 016.0469088/60 \u2248 16.934 kg/s, historically used in British blast-furnace output measurements, port handling-rate calculations, and Royal Navy fuel-consumption specifications. A large grain terminal loading a Panamax vessel may achieve 4 000 long ton/h = \u224867 long ton/min. 1 long ton/min \u2248 16.934 kg/s.",
    symbol: "long ton/min"
  },
  long_tons_per_hour: {
    name: "Long tons per hour",
    description: "The long ton per hour (long ton/h) equals 1 016.0469088/3600 \u2248 0.28224 kg/s, the traditional British equivalent of t/h still seen in pre-metric UK engineering datasheets and Lloyd's Register vessel capacity tables. An older British colliery might report winding-tower output in long ton/h; historic cement-kiln logs used long ton/h. 1 long ton/h \u2248 0.28224 kg/s \u2248 1.016 t/h.",
    symbol: "long ton/h"
  },
  long_tons_per_day: {
    name: "Long tons per day",
    description: "The long ton per day (long ton/d) equals 1 016.0469088/86400 \u2248 0.011760 kg/s, used in legacy British mining reports for daily colliery output and in Naval fuel-consumption logs. Historic British Admiralty fuel expenditure tables for Royal Navy warships used long ton/d for bunker coal or oil consumption at various speeds. 1 long ton/d \u2248 0.011760 kg/s \u2248 1.016 t/d.",
    symbol: "long ton/d"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toKilogramsPerSecond);
}

function convertFlowMass() {
  convertFactorBased(toKilogramsPerSecond);
}

initConverterPage();
