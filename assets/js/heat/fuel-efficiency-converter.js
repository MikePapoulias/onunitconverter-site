// Base unit: kilometre per kilogram (km/kg) - the practical metric reference unit for mass-based fuel efficiency.
// All factors express how many km/kg equal 1 unit of the given measure.
//
// Exact foundations:
//   1 ft = 0.3048 m (exact) → 1 ft = 3.048e-4 km
//   1 yd = 0.9144 m (exact) → 1 yd = 9.144e-4 km
//   1 mi = 1.609344 km (exact, international definition)
//   1 nmi = 1.852 km (exact, BIPM definition)
//   1 oz (avoirdupois) = 0.028349523125 kg (exact, 1959 International Yard and Pound Agreement)
//   1 lb = 0.45359237 kg (exact, 1959 International Yard and Pound Agreement)
//   1 g = 1e-3 kg (exact); 1 m = 1e-3 km (exact)
//   km/g = 1 km / (1e-3 kg) = 1e3 km/kg (exact)

const toKilometresPerKilogram = {
  feet_per_pound:               3.048e-4 / 0.45359237,              // exact: 1 ft = 3.048e-4 km; 1 lb = 0.45359237 kg
  metres_per_kilogram:          1e-3,                                // exact: 1 m = 1e-3 km; 1 kg = 1 kg (SI base m/kg)
  yards_per_pound:              9.144e-4 / 0.45359237,              // exact: 1 yd = 9.144e-4 km; 1 lb = 0.45359237 kg
  metres_per_pound:             1e-3 / 0.45359237,                  // exact: 1 m = 1e-3 km; 1 lb = 0.45359237 kg
  kilometres_per_kilogram:      1,                                   // reference unit (base)
  miles_per_kilogram:           1.609344,                            // exact: 1 mi = 1.609344 km
  nautical_miles_per_kilogram:  1.852,                               // exact: 1 nmi = 1.852 km
  kilometres_per_pound:         1 / 0.45359237,                     // exact: 1 km; 1 lb = 0.45359237 kg
  miles_per_pound:              1.609344 / 0.45359237,              // exact: 1 mi = 1.609344 km; 1 lb = 0.45359237 kg
  nautical_miles_per_pound:     1.852 / 0.45359237,                 // exact: 1 nmi = 1.852 km; 1 lb = 0.45359237 kg
  miles_per_ounce:              1.609344 / 0.028349523125,          // exact: 1 mi = 1.609344 km; 1 oz = 0.028349523125 kg
  nautical_miles_per_ounce:     1.852 / 0.028349523125,             // exact: 1 nmi = 1.852 km; 1 oz = 0.028349523125 kg
  kilometres_per_gram:          1e3,                                 // exact: 1 km / (1e-3 kg) = 1000 km/kg
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  feet_per_pound: {
    name: "Feet per pound",
    description: "The foot per pound (ft/lb) equals \u22486.720 \u00d7 10\u207b\u2074 km/kg, the smallest practical mass-efficiency unit. It appears in historical US Army ballistic tables and early solid-propellant rocket motor test sheets where range was in feet and propellant charge in pounds. 1 ft/lb \u22486.720 \u00d7 10\u207b\u2074 km/kg \u22481/3 the size of a metre per pound.",
    symbol: "ft/lb"
  },
  metres_per_kilogram: {
    name: "Metres per kilogram",
    description: "The metre per kilogram (m/kg) is the SI coherent derived unit of mass-based fuel efficiency. It is used in combustion research, rocket propellant comparative testing, and laboratory fuel-cell efficiency benchmarking. A car at 15 km/kg petrol = 15 000 m/kg; a hydrogen fuel cell bus at 120 km/kg H\u2082 = 120 000 m/kg. 1 m/kg = 1e\u207b\u00b3 km/kg = 1/1000 km/kg.",
    symbol: "m/kg"
  },
  yards_per_pound: {
    name: "Yards per pound",
    description: "The yard per pound (yd/lb) equals \u22482.016 \u00d7 10\u207b\u00b3 km/kg, found in old British and US military propellant efficiency tables and pre-metric naval gunnery manuals. Range achieved per pound of cordite or smokeless powder was stated in yards. 1 yd/lb \u22482.016 \u00d7 10\u207b\u00b3 km/kg \u2248 3 ft/lb.",
    symbol: "yd/lb"
  },
  metres_per_pound: {
    name: "Metres per pound",
    description: "The metre per pound (m/lb) equals \u22482.205 \u00d7 10\u207b\u00b3 km/kg, a transitional unit bridging SI metres with imperial pound mass. It appears in some international academic fuel cell papers and comparative combustion analysis where authors mix SI distance with US fuel weight measurements. 1 m/lb \u22482.205 \u00d7 10\u207b\u00b3 km/kg \u22481.094 yd/lb.",
    symbol: "m/lb"
  },
  kilometres_per_kilogram: {
    name: "Kilometres per kilogram",
    description: "The kilometre per kilogram (km/kg) is the standard metric mass-based fuel efficiency unit. Toyota Mirai FCEV: \u2248140 km/kg H\u2082; current-generation hydrogen buses: 8-12 km/kg; LPG cars: 12-17 km/kg; CNG cars: 14-18 km/kg. Aviation: Airbus A320neo \u22480.08 km/kg fuel per seat. 1 km/kg = 1000 m/kg \u22480.621 mi/kg.",
    symbol: "km/kg"
  },
  miles_per_kilogram: {
    name: "Miles per kilogram",
    description: "The mile per kilogram (mi/kg) equals 1.609344 km/kg, used in academic hydrogen vehicle studies and some US-metric hybrid engineering databases. A Toyota Mirai at 140 km/kg H\u2082 \u224887 mi/kg; a propane bus at 5 km/kg LPG \u22483.1 mi/kg. 1 mi/kg = 1.609344 km/kg \u22481.609 km/kg.",
    symbol: "mi/kg"
  },
  nautical_miles_per_kilogram: {
    name: "Nautical miles per kilogram",
    description: "The nautical mile per kilogram (nmi/kg) equals exactly 1.852 km/kg, used in aviation and maritime fuel performance analyses expressed in metric mass units. A large turbofan airliner achieves \u22480.15-0.25 nmi/kg of jet fuel per seat; a high-efficiency glider with a small auxiliary engine around 5-20 nmi/kg. 1 nmi/kg = 1.852 km/kg.",
    symbol: "nmi/kg"
  },
  kilometres_per_pound: {
    name: "Kilometres per pound",
    description: "The kilometre per pound (km/lb) equals \u22482.205 km/kg, common in US-to-metric cross-border transport analysis and fuel research papers where distances are in km but fuel invoices are weighed in pounds. A car burning 6 kg/100 km petrol gets \u224816.7 km/kg = 7.57 km/lb. 1 km/lb = 1/0.45359237 km/kg \u22482.205 km/kg.",
    symbol: "km/lb"
  },
  miles_per_pound: {
    name: "Miles per pound",
    description: "The mile per pound (mi/lb) equals \u22483.548 km/kg, the traditional US aviation mass-efficiency unit. Cessna 172 on avgas: \u22480.28-0.32 mi/lb; Piper Cherokee: \u22480.30-0.35 mi/lb; Boeing 737 MAX per seat: \u22480.10-0.15 mi/lb. US military aircraft fuel efficiency analyses and early NASA propellant studies used mi/lb. 1 mi/lb \u22483.548 km/kg = 1.609344/0.45359237 km/kg.",
    symbol: "mi/lb"
  },
  nautical_miles_per_pound: {
    name: "Nautical miles per pound",
    description: "The nautical mile per pound (nmi/lb) equals \u22484.083 km/kg, the standard fuel efficiency unit in US and NATO aviation engineering. Range planning for US Navy, USAF, and FAA-certified aircraft uses nmi/lb or gallons/nmi; ICAO fuel planning worksheets include nmi/lb columns. Typical values: commercial turbofan 0.10-0.25 nmi/lb; turboprop commuter 0.08-0.15 nmi/lb. 1 nmi/lb \u22484.083 km/kg.",
    symbol: "nmi/lb"
  },
  miles_per_ounce: {
    name: "Miles per ounce",
    description: "The mile per ounce (mi/oz) equals \u224856.78 km/kg, used for small general aviation aircraft and large model aircraft where fuel loads are a few ounces. A 100 cc glow-engine aircraft consuming 1 oz per mile of flight = 1 mi/oz; small RC turbine jets achieve 0.5-3 mi/oz. Also used in US drag-racing fuel consumption records. 1 mi/oz \u224856.78 km/kg = 16 mi/lb.",
    symbol: "mi/oz"
  },
  nautical_miles_per_ounce: {
    name: "Nautical miles per ounce",
    description: "The nautical mile per ounce (nmi/oz) equals \u224865.33 km/kg, the highest-resolution imperial mass-efficiency unit for light aircraft and UAVs. Micro-UAS with small fuel tanks (few ounces) use nmi/oz to compare range on different fuel blends. A hydrogen-powered small UAV at 140 km/kg \u22482.14 nmi/oz. 1 nmi/oz \u224865.33 km/kg = 16 nmi/lb.",
    symbol: "nmi/oz"
  },
  kilometres_per_gram: {
    name: "Kilometres per gram",
    description: "The kilometre per gram (km/g) equals 1000 km/kg, the unit for ultra-efficient propulsion systems and hydrogen fuel cell vehicles. A Toyota Mirai at 140 km/kg H\u2082 = 0.14 km/g; hypothetical rocket-propellant comparison studies use km/g to express chemical energy density. A solid-propellant gas generator releasing 1 km of equivalent travel per gram of propellant represents extreme efficiency. 1 km/g = 1000 km/kg.",
    symbol: "km/g"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toKilometresPerKilogram);
}

function convertFuelEfficiency() {
  convertFactorBased(toKilometresPerKilogram);
}

initConverterPage();
