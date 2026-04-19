// =============================================================================
// fuel-consumption-converter.js
// Reference unit: L/100km (liters per 100 kilometers)
//
// Two families of units exist for fuel consumption:
//   VPD (volume per distance): higher value = more fuel used = less efficient
//       L/100km = value * factor
//   DPV (distance per volume): higher value = more distance per fuel = more efficient
//       L/100km = ref / value
//
// Exact physical constants used:
//   1 mile     = 1.609344 km      (exact, international definition)
//   1 nmi      = 1.852 km         (exact, BIPM definition)
//   1 US gal   = 3.785411784 L    (exact, NIST)
//   1 Imp gal  = 4.54609 L        (exact, UK Weights and Measures Act 1985)
// =============================================================================

const fuelUnits = {
  // ── VPD (volume per distance) ─────────────────────────────────────────────
  // Ordered by factor ascending (smaller factor = unit represents less fuel)
  microlitersPerKm:            { type: 'vpd', factor: 1e-4                              },
  millilitersPerKm:            { type: 'vpd', factor: 0.1                               },
  litersPer100km:              { type: 'vpd', factor: 1                                 },
  usGallonsPer100miles:        { type: 'vpd', factor: 3.785411784 / 1.609344            },
  imperialGallonsPer100miles:  { type: 'vpd', factor: 4.54609     / 1.609344            },
  litersPerNauticalMile:       { type: 'vpd', factor: 100         / 1.852               },
  litersPerMile:               { type: 'vpd', factor: 100         / 1.609344            },
  litersPerKm:                 { type: 'vpd', factor: 100                               },
  usGallonsPerMile:            { type: 'vpd', factor: 100 * 3.785411784 / 1.609344      },
  imperialGallonsPerMile:      { type: 'vpd', factor: 100 * 4.54609     / 1.609344      },
  // ── DPV (distance per volume) ─────────────────────────────────────────────
  // Ordered by ref ascending (smaller ref = unit represents less distance per fuel)
  nauticalMilesPerLiter:       { type: 'dpv', ref: 100              / 1.852             },
  milesPerLiter:               { type: 'dpv', ref: 100              / 1.609344          },
  kmPerLiter:                  { type: 'dpv', ref: 100                                  },
  milesPerUsGallon:            { type: 'dpv', ref: 100 * 3.785411784 / 1.609344         },
  milesPerImperialGallon:      { type: 'dpv', ref: 100 * 4.54609     / 1.609344         },
  kmPerUsGallon:               { type: 'dpv', ref: 100 * 3.785411784                    },
  kmPerImperialGallon:         { type: 'dpv', ref: 100 * 4.54609                        },
};

// Unit descriptions (also parsed at build-time by build.js for SEO pages)
const unitDescriptions = {
  microlitersPerKm: {
    name: "Microliter per Kilometer",
    symbol: "µL/km",
    description: "A microliter per kilometer (µL/km) equals 10⁻⁴ L/100km - a unit reserved for laboratory engine testing and fuel cell research. A car consuming 7 L/100km corresponds to 70,000 µL/km, illustrating why µL/km is used only for scientific contexts: GDI injectors deliver 10-50 µL per injection event; engine oil blowby consumption is measured in 50-500 µL/km; hydrogen fuel cell prototype comparisons use µL-equivalent/km. Single-cylinder research engines log fuel use in µL/shot to map combustion efficiency across load sweeps. 1 µL/km = 0.0001 L/100km."
  },
  millilitersPerKm: {
    name: "Milliliter per Kilometer",
    symbol: "mL/km",
    description: "A milliliter per kilometer (mL/km) equals 0.1 L/100km. A compact car at 7 L/100km uses 70 mL/km; a 50cc scooter at 2.5 L/100km uses 25 mL/km; a loaded semi at 35 L/100km uses 350 mL/km. This scale makes proportionality across very different vehicle categories clear without fractional L/100km values. In motorsport, a Formula 3 car consuming ~55 mL/km over a 5.8 km circuit burns ~319 mL/lap, enabling sub-lap pit-stop window planning. CNG and LPG comparison reports also use mL/km of liquid-fuel equivalent. 1 mL/km = 0.1 L/100km."
  },
  litersPer100km: {
    name: "Liter per 100 Kilometers",
    symbol: "L/100km",
    description: "Liters per 100 kilometers (L/100km) is the standard fuel consumption unit of the EU, China, Australia, and most of the world. Lower values mean greater efficiency: 5 L/100km is exactly twice as efficient as 10 L/100km. EU WLTP certification requires reporting in L/100km; CO₂ in g/km ≈ L/100km × 23.9 (petrol) or × 26.5 (diesel). Benchmarks: European average new car (2024 WLTP) ~6.5 L/100km; compact SUV 8-11; articulated truck 28-35; M1 Abrams tank ~130. 1 L/100km = 235.215/mpg(US) = 282.481/mpg(Imp)."
  },
  usGallonsPer100miles: {
    name: "US Gallons per 100 Miles",
    symbol: "US gal/100mi",
    description: "US gallons per 100 miles is the volumetric consumption figure displayed alongside mpg on the EPA Monroney fuel-economy label on all new US vehicles since 2013. A smaller number means a more efficient car. At $4/gal, gal/100mi × 4 gives the dollar fuel cost per 100 miles. Ranges: 1.5-2 gal/100mi for efficient compacts (50-67 mpg); 2.5-3.5 for mainstream sedans (28-40 mpg); 4-6 for crossovers/light trucks (17-25 mpg). 1 US gal/100mi = 3.785411784/1.609344 = 2.3521 L/100km."
  },
  imperialGallonsPer100miles: {
    name: "Imperial Gallons per 100 Miles",
    symbol: "Imp gal/100mi",
    description: "Imperial gallons per 100 miles is the British volumetric consumption equivalent using the Imperial gallon (4.54609 L). Since the Imperial gallon is ~20.1% larger than the US gallon, a vehicle's Imp gal/100mi is correspondingly smaller than its US gal/100mi. A car at 7 L/100km needs 2.977 US gal/100mi but only 2.478 Imp gal/100mi. The unit appears in UK fleet management software and automotive engineering reports. A 50 mpg(Imp) car uses 2 Imp gal/100mi = 5.650 L/100km. 1 Imp gal/100mi = 4.54609/1.609344 = 2.8248 L/100km."
  },
  litersPerNauticalMile: {
    name: "Liter per Nautical Mile",
    symbol: "L/nmi",
    description: "Liters per nautical mile (L/nmi) is the maritime fuel consumption unit. One nautical mile = 1.852 km exactly (one arcminute of latitude). A large container ship (400 m, 200,000 DWT) at 18 knots consumes 50,000-100,000 L/nmi of heavy fuel oil; a RoPax ferry 800-3,000 L/nmi; a RIB patrol boat at 25 knots 30-80 L/nmi. Slow-steaming reduces L/nmi by 30-40% due to the cubic drag-speed relationship. Bunker cost per nmi = L/nmi × fuel price/litre. 1 L/nmi = 100/1.852 ≈ 53.996 L/100km."
  },
  litersPerMile: {
    name: "Liter per Mile",
    symbol: "L/mi",
    description: "Liters per mile (L/mi) combines the SI litre with the statute mile. 1 L/mi = 100/1.609344 = 62.137 L/100km - an extreme consumption scale. A vehicle consuming 1 L/mi burns as much as a car doing 62 L/100km (equivalent to large agricultural machinery or construction equipment). In endurance motorsport, race engineers convert telemetry fuel-flow (L/s) and lap distance (measured in miles) into L/mi for refuelling window calculations. An M1 Abrams tank consuming 3.3 L/km corresponds to 0.053 L/mi. 1 L/mi = 62.137 L/100km."
  },
  litersPerKm: {
    name: "Liter per Kilometer",
    symbol: "L/km",
    description: "Liters per kilometer (L/km) is 100× larger than L/100km, suited to heavy vehicles and industrial machinery. A European family car at 0.07 L/km; a Class 8 semi-truck 0.33-0.40 L/km; an M1 Abrams tank ~1.3 L/km on road, ~4 L/km off-road; a diesel mainline locomotive 5-8 L/km. Australian road trains (200+ t) log fuel in L/km to plan outback depot spacing. A Caterpillar 793F mining dump truck fully laden uses 4-6 L/km. 1 L/km = 100 L/100km."
  },
  usGallonsPerMile: {
    name: "US Gallons per Mile",
    symbol: "US gal/mi",
    description: "US gallons per mile is for extreme consumption: 1 US gal/mi = 235.215 L/100km. Only tanks, heavy mining equipment, or large ships fall into even the fractional gal/mi range. A Boeing 787 burns ~3.9 US gal/mi total (0.015 gal/mi per seat at 85% load factor, 257 seats). Commercial aircraft fleet-wide emission intensity is sometimes expressed in gal/mi per departure. Oceangoing vessels historically logged fuel in US gal/mi in American regulatory frameworks. 1 US gal/mi = 235.215 L/100km = 1 mpg(US) ÷ 100."
  },
  imperialGallonsPerMile: {
    name: "Imperial Gallons per Mile",
    symbol: "Imp gal/mi",
    description: "Imperial gallons per mile is the British counterpart, using the 4.54609 L Imperial gallon. 1 Imp gal/mi = 4.54609/1.609344 × 100 = 282.481 L/100km - among the largest fuel-consumption values in practical use, representing large vessels and heavy machinery. It appears in older Royal Navy vessel technical logs and historical British railway and steam-locomotive records. As mpg(Imp) and gal/mi are reciprocals, a 50 mpg(Imp) car uses exactly 0.02 Imp gal/mi = 5.650 L/100km. 1 Imp gal/mi = 282.481 L/100km."
  },
  nauticalMilesPerLiter: {
    name: "Nautical Miles per Liter",
    symbol: "nmi/L",
    description: "Nautical miles per liter (nmi/L) quantifies how far a vessel travels on one liter of fuel. 1 nmi/L = 1.852 km/L. Typical values: sailing yacht under auxiliary diesel ~0.2-0.5 nmi/L; fast 35-knot catamaran ferry ~0.003-0.008 nmi/L; outboard RIB at planning speed ~0.01-0.04 nmi/L. A sportsboat with a 200 L tank at 0.08 nmi/L has ~16 nmi theoretical range, reduced by 30-40% safety margin. Maritime energy efficiency programs under MARPOL Annex VI reference nmi/L before normalising for cargo capacity. 1 nmi/L = 1.852 km/L."
  },
  milesPerLiter: {
    name: "Miles per Liter",
    symbol: "mi/L",
    description: "Miles per liter (mi/L) appears in regions where fuel is dispensed in liters but road distances follow older imperial maps - parts of Sub-Saharan Africa, the Middle East, and South Asia. 1 mi/L = 1.609344 km/L. A car at 10 mi/L = 16.09 km/L = 37.85 mpg(US). India's auto press used mi/L before metrication; some Pakistani logistics companies still use it for long-haul route-efficiency reports. Converting: mpg(US) = mi/L × 3.785411784; mpg(Imp) = mi/L × 4.54609. 1 mi/L = 1.609344 km/L."
  },
  kmPerLiter: {
    name: "Kilometer per Liter",
    symbol: "km/L",
    description: "Kilometers per liter (km/L) is the standard fuel economy unit in Japan, South Korea, India, Indonesia, Brazil, and most of Latin America and Southeast Asia. Japan's WLTC test cycle certifies fuel economy in km/L under JIS D 1012. Representative WLTC values: Toyota Prius ~26-32 km/L; Honda Jazz hybrid ~28-36 km/L; Hyundai Tucson petrol ~11-14 km/L; Royal Enfield Bullet 350 (India) ~35-42 km/L; 50cc scooter ~40-55 km/L. Hypermiling records: a Prius exceeding 80 km/L. 1 km/L = 100/(km/L value) L/100km = 2.352 mpg(US)."
  },
  milesPerUsGallon: {
    name: "Miles per US Gallon",
    symbol: "mpg (US)",
    description: "Miles per US gallon (mpg(US)) is the US and Canadian standard, displayed on every EPA Monroney sticker and used in CAFE regulations. The US gallon = 3.785411784 L; 1 mile = 1.609344 km. 2026 CAFE passenger car standard: ~49 mpg. Toyota Prius Prime: 52 mpg; Tesla Model 3: 132 MPGe. Historical: Ford Model T 21-25 mpg; 1973 US full-size cars 10-15 mpg. NASCAR at race speed: 4-5 mpg; Class 8 semi: 5-8 mpg. L/100km = 235.21458/mpg(US): 30 mpg = 7.84 L/100km; 50 mpg = 4.71 L/100km."
  },
  milesPerImperialGallon: {
    name: "Miles per Imperial Gallon",
    symbol: "mpg (Imp)",
    description: "Miles per Imperial gallon (mpg(Imp)) is the UK and historically Commonwealth standard. The Imperial gallon (4.54609 L) is ~20.1% larger than the US gallon, so mpg(Imp) is always numerically higher: a 7 L/100km car achieves 33.6 mpg(US) but 40.4 mpg(Imp). All UK VCA-certified specs list mpg(Imp). Typical WLTP combined: supermini 45-60 mpg; full hybrid 55-75 mpg; diesel family car 48-68 mpg; large petrol SUV 28-38 mpg. 1 mpg(Imp) = 1.609344/4.54609 km/L = 0.354006 km/L; L/100km = 282.481/mpg(Imp)."
  },
  kmPerUsGallon: {
    name: "Kilometer per US Gallon",
    symbol: "km/US gal",
    description: "Kilometers per US gallon (km/US gal) appears in regions where metric road distances coexist with US gallon fuel pricing - the US-Mexico border zone, parts of Latin America, and the Caribbean. 1 km/US gal = 1/3.785411784 km/L = 0.264172 km/L. A typical car at 12.75 km/L = 48.3 km/US gal; a scooter at 35 km/L = 132 km/US gal. Mexican Federal District fleet databases and Central American logistics records use this unit when US gallon fuel costs are referenced in kilometre-based route planning. 1 km/US gal = 0.264172 km/L."
  },
  kmPerImperialGallon: {
    name: "Kilometer per Imperial Gallon",
    symbol: "km/Imp gal",
    description: "Kilometers per Imperial gallon (km/Imp gal) combines metric distances with the British Imperial gallon (4.54609 L). 1 km/Imp gal = 1/4.54609 km/L = 0.21997 km/L. A typical mid-size car at 12.75 km/L = 57.96 km/Imp gal. It appears in pre-1970s Australian road transport regulations, some South African vehicle import documentation, and pre-1979 Canadian fuel efficiency standards. Relationship to mpg(Imp): km/Imp gal = mpg(Imp) / 1.609344, so 50 mpg(Imp) = 31.07 km/Imp gal. 1 km/Imp gal = 0.21997 km/L."
  }
};

// ── Conversion helpers ────────────────────────────────────────────────────────

function toLitersPer100km(value, unitKey) {
  const u = fuelUnits[unitKey];
  return u.type === 'vpd' ? value * u.factor : u.ref / value;
}

function fromLitersPer100km(l100km, unitKey) {
  const u = fuelUnits[unitKey];
  return u.type === 'vpd' ? l100km / u.factor : u.ref / l100km;
}

// ── Formula panel ─────────────────────────────────────────────────────────────

function updateFormula(fromUnit, toUnit) {
  const formulaDescription = document.getElementById("formulaDescription");
  const formulaDisplay     = document.getElementById("formulaDisplay");

  if (fromUnit === toUnit) {
    formulaDescription.textContent = "No conversion needed - same unit selected.";
    formulaDisplay.textContent = "";
    return;
  }

  const from     = fuelUnits[fromUnit];
  const to       = fuelUnits[toUnit];
  const fromDesc = unitDescriptions[fromUnit];
  const toDesc   = unitDescriptions[toUnit];

  if (from.type === to.type) {
    // Same family - linear relationship
    const k = from.type === 'vpd'
      ? from.factor / to.factor
      : from.ref    / to.ref;
    formulaDescription.textContent =
      `To convert ${fromDesc.name.toLowerCase()} to ${toDesc.name.toLowerCase()}, multiply by ${formatNumber(k)}:`;
    formulaDisplay.innerHTML =
      `<strong>${toDesc.symbol} = ${fromDesc.symbol} \u00d7 ${formatNumber(k)}</strong>`;
  } else {
    // Mixed families - reciprocal relationship
    // VPD->DPV: result = to.ref / (value * from.factor)  = K / value  where K = to.ref / from.factor
    // DPV->VPD: result = from.ref / (value * to.factor)  = K / value  where K = from.ref / to.factor
    const K = from.type === 'vpd'
      ? to.ref   / from.factor
      : from.ref / to.factor;
    formulaDescription.textContent =
      `To convert ${fromDesc.name.toLowerCase()} to ${toDesc.name.toLowerCase()}, divide the constant by the input (reciprocal relationship):`;
    formulaDisplay.innerHTML =
      `<strong>${toDesc.symbol} = ${formatNumber(K)} \u00f7 ${fromDesc.symbol}</strong>`;
  }
}

// ── Main converter ────────────────────────────────────────────────────────────

function convertFuelConsumption() {
  const fromValue    = parseFloat(document.getElementById("fromValue").value);
  const fromUnit     = document.getElementById("fromUnit").value;
  const toUnit       = document.getElementById("toUnit").value;
  const toValueField = document.getElementById("toValue");
  const result       = document.getElementById("result");

  if (fromUnit === toUnit) {
    result.textContent = "Please select different units to convert.";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  if (isNaN(fromValue) || fromValue === "") {
    result.textContent = "";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  const l100km = toLitersPer100km(fromValue, fromUnit);

  if (!isFinite(l100km) || l100km < 0) {
    result.textContent = "";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  const convertedValue = fromLitersPer100km(l100km, toUnit);

  if (!isFinite(convertedValue) || convertedValue < 0) {
    result.textContent = "";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  toValueField.value = parseFloat(convertedValue.toPrecision(15));
  toValueField.style.color = "blue";
  result.innerHTML = `${fromValue} ${unitDescriptions[fromUnit].symbol} = <span style="color: blue;">${formatNumber(convertedValue)}</span> ${unitDescriptions[toUnit].symbol}`;

  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
}

initConverterPage();
