const toWatts = {
  picowatts:            1e-12,
  nanowatts:            1e-9,
  ergsPerSecond:        1e-7,
  microwatts:           1e-6,
  milliwatts:           1e-3,
  caloriesPerHour:      0.001163,
  footPoundsPerMinute:  0.02259696580552334,
  btuPerHour:           0.2930710701722222,
  watts:                1,
  kilocaloriesPerHour:  1.163,
  footPoundsPerSecond:  1.355817948331401,
  caloriesPerSecond:    4.1868,
  btuPerMinute:         17.58426421033333,
  metricHorsepower:     735.49875,
  mechanicalHorsepower: 745.6998715822704,
  electricalHorsepower: 746,
  poncelet:             980.665,
  kilowatts:            1000,
  btuPerSecond:         1055.05585262,
  tonOfRefrigeration:   3516.852842066667,
  boilerHorsepower:     9810.554074015139,
  megawatts:            1e6,
  gigawatts:            1e9,
  terawatts:            1e12,
  petawatts:            1e15,
  exawatts:             1e18,
};

// Unit descriptions
const unitDescriptions = {
  picowatts: {
    name: "Picowatt",
    description: "A picowatt (pW) is 10⁻¹² W - the power scale of the most sensitive radio receivers. GPS satellites transmit 20-50 W; by the time that signal spans 20,000 km, the received power is ~0.1 pW (−130 dBm). Radio telescopes routinely detect cosmic signals in the picowatt range. Qubit control electronics in quantum computers must resolve energy differences at picowatt scales. Photodetectors in single-photon counting mode, hard drive head read-back signals at idle, and deep-shadow solar cells also operate at picowatt levels. 1 pW = 10⁻¹² W.",
    symbol: "pW"
  },
  nanowatts: {
    name: "Nanowatt",
    description: "A nanowatt (nW) is 10⁻⁹ W - the power scale of ultra-low-power embedded systems. Cardiac pacemakers deliver sensing pulses at nanowatt levels to preserve 7-10 year battery life. RFID tags harvest ~10-200 nW from reader fields. Solar cells in wristwatches and calculators operate on ambient indoor light yielding tens of nanowatts. A standard AA cell (13,500 J) discharged at 1 nW would last over 400 years. Neuromorphic chips target 10-100 nW per neuron-equivalent circuit. 1 nW = 10⁻⁹ W.",
    symbol: "nW"
  },
  ergsPerSecond: {
    name: "Erg per Second",
    description: "An erg per second (erg/s) is the CGS unit of power - exactly 10⁻⁷ W. Despite SI adoption, erg/s persists in astrophysics: the Sun's total luminosity is 3.828 × 10³³ erg/s; a peak supernova radiates ~10⁴³ erg/s - more power than the Sun emits over its 10-billion-year lifetime. X-ray binaries, active galactic nuclei, and neutron star accretion rates are catalogued in erg/s across decades of archival literature. 1 erg/s = 10⁻⁷ W.",
    symbol: "erg/s"
  },
  microwatts: {
    name: "Microwatt",
    description: "A microwatt (µW) is 10⁻⁶ W - the operational power band for autonomous IoT sensors and energy-harvesting wearables. Quartz oscillators in microcontrollers consume 1-10 µW; thermoelectric wearables harvesting body heat produce 10-100 µW. NFC tags derive ~10-200 µW from the reader field. Cochlear implants and implantable glucose sensors operate at microwatt levels to minimise tissue heating. 1 µW = 10⁻⁶ W.",
    symbol: "µW"
  },
  milliwatts: {
    name: "Milliwatt",
    description: "A milliwatt (mW) is 10⁻³ W - the power scale of consumer wireless communications. Wi-Fi access points transmit at 100 mW (20 dBm); mobile phones peak at up to 1,000 mW. A laser pointer emits 1-5 mW; an LED indicator 10 mW; Bluetooth Classic peaks at 100 mW. Standby power implications: 1 mW × 10⁹ devices × 1 year = 8,760 MWh - enough to power a small town, underscoring why milliwatt standby matters at scale. 1 mW = 10⁻³ W.",
    symbol: "mW"
  },
  caloriesPerHour: {
    name: "Calorie per Hour",
    description: "One calorie per hour (cal/h) equals exactly 0.001163 W - the rate of transferring one thermochemical calorie (4.1868 J) per hour. A resting adult generates ~70-80 W ≈ 60,000-70,000 cal/h of heat. The unit appears in European and Asian HVAC standards for small-appliance heat loads and in laboratory calorimetry reporting metabolic activity of small organisms. Calorimetric enzyme assays also express catalytic heat in cal/h per unit enzyme. 1 cal/h = 0.001163 W.",
    symbol: "cal/h"
  },
  footPoundsPerMinute: {
    name: "Foot-Pound per Minute",
    description: "One foot-pound per minute (ft·lbf/min) ≈ 0.02260 W. Its historical importance is large: James Watt rated mill horses at ~33,000 ft·lbf/min sustained output and defined 1 mechanical horsepower as exactly 33,000 ft·lbf/min (= 550 ft·lbf/s). The unit is still used for machine-tool power, hydraulic pump output, and low-speed actuator performance in US customary calculations: torque (ft·lbf) × RPM = power in ft·lbf/min. 1 hp = 33,000 ft·lbf/min.",
    symbol: "ft·lbf/min"
  },
  btuPerHour: {
    name: "BTU per Hour",
    description: "One BTU per hour (BTU/h) ≈ 0.2931 W - the dominant HVAC capacity unit in the US and Canada. Room air conditioners are universally rated in BTU/h: 12,000 BTU/h = 1 ton of refrigeration = 3,517 W. Home furnaces range from 40,000-150,000 BTU/h. Office building cooling demand is calculated in BTU/h per ft². Engineers convert: BTU/h × 0.2931 = W; or W × 3.412 = BTU/h. 1 BTU/h = 0.29307 W.",
    symbol: "BTU/h"
  },
  watts: {
    name: "Watt",
    description: "The watt (W) is the SI unit of power - 1 J/s - named after James Watt (1736-1819). Familiar power levels: smartphone charging 5-65 W; laptop 15-100 W; microwave 700-1,200 W; electric kettle 2,000-3,000 W; human resting metabolism ~80 W; peak sprint ~2,000 W. The now-obsolete 100 W incandescent bulb is replaced by a 10-15 W LED producing the same light. In AC circuits, reactive power uses the var and apparent power the VA, both derived from watts. 1 W = 1 J/s = 1 kg·m²/s³.",
    symbol: "W"
  },
  kilocaloriesPerHour: {
    name: "Kilocalorie per Hour",
    description: "One kilocalorie per hour (kcal/h) equals exactly 1.163 W. It is the natural unit for human metabolic rate: sedentary adult ~60-70 kcal/h; walking 250-350 kcal/h; vigorous cycling 500-700 kcal/h; competitive rowing ~1,200 kcal/h. Treadmills and exercise bikes display kcal/h directly. Industrial drying and evaporation calcs in older metric systems (especially Asia) used kcal/h for heat duty; 1 Mcal/h = 1.163 kW. 1 kcal/h = 1.163 W.",
    symbol: "kcal/h"
  },
  footPoundsPerSecond: {
    name: "Foot-Pound per Second",
    description: "One foot-pound per second (ft·lbf/s) ≈ 1.3558 W - the natural power unit in the foot-pound-second (FPS) system. Since 1 mechanical horsepower = exactly 550 ft·lbf/s, the conversion 1 ft·lbf/s = 1/550 hp is exact. Used in FPS structural and fluid dynamics: beam deflection power, pump and turbine output, and ballistic energy-transfer calculations. 19th-century American industry rated waterwheel output in ft·lbf/s before horsepower standardisation. 1 ft·lbf/s = 1.35582 W.",
    symbol: "ft·lbf/s"
  },
  caloriesPerSecond: {
    name: "Calorie per Second",
    description: "One calorie per second (cal/s) = exactly 4.1868 W. It bridges thermochemistry and power: bomb calorimeters and reaction calorimeters characterise exothermic events by cal/s during the reaction interval. Food science uses cal/s to model heat transfer into food during frying or roasting. Since 1 kcal/s = 4,186.8 W, kilocalories per second appear in high-intensity industrial dryers and continuous-flow reactor heat duties. 1 cal/s = 4.1868 W.",
    symbol: "cal/s"
  },
  btuPerMinute: {
    name: "BTU per Minute",
    description: "One BTU per minute (BTU/min) ≈ 17.58 W. Fire engineering uses BTU/min for heat release rate (HRR): a burning sofa releases 500-5,000 BTU/min; a flashover room fire 50,000-500,000 BTU/min. US commercial gas burners are rated 500-2,000 BTU/min. NFPA fire suppression standards use BTU/min to match sprinkler flow to HRR. Industrial furnace heating cycles also use this unit. 1 BTU/min = 17.584 W.",
    symbol: "BTU/min"
  },
  metricHorsepower: {
    name: "Metric Horsepower",
    description: "The metric horsepower (PS/CV/pk) equals exactly 75 kgf·m/s = 735.49875 W - the European equivalent of mechanical horsepower, defined as lifting 75 kg by 1 m/s. It was the DIN 66036 standard for European automotive ratings until the EU mandated kW. A 100 PS car produces 73.55 kW; 200 PS = 147.1 kW. The ~1.4% difference from mechanical hp (745.7 W) means a 100 PS car rates as 98.6 mechanical hp. German car advertising still shows PS parenthetically alongside kW. 1 PS = 735.49875 W.",
    symbol: "PS"
  },
  mechanicalHorsepower: {
    name: "Mechanical Horsepower",
    description: "The mechanical horsepower (hp) is exactly 550 ft·lbf/s ≈ 745.7 W - defined by James Watt by timing mine horses to set a comparable steam engine rating. A typical compact car produces 100-150 hp (75-112 kW); a sports car 300-600 hp; an F1 car ~1,000 hp (745 kW). SAE net horsepower is measured at the flywheel with all accessories fitted. Marine diesel engines, aircraft piston engines, and lawn equipment are still rated in hp. 1 hp = 550 ft·lbf/s = 745.6998715822704 W.",
    symbol: "hp"
  },
  electricalHorsepower: {
    name: "Electrical Horsepower",
    description: "The electrical horsepower (hp(E)) is defined as exactly 746 W - the US NEMA rounding used on electric motor nameplates. It differs from mechanical hp (745.7 W) by only 0.04%. Every NEMA-rated motor in the US carries a horsepower nameplate: a '5 hp motor' delivers 5 × 746 = 3,730 W. NEC motor branch-circuit sizing tables, overload relay selection, and starter ratings are all based on hp(E). Despite global kW adoption, US industrial motor infrastructure remains standardised in electrical horsepower. 1 hp(E) = 746 W.",
    symbol: "hp(E)"
  },
  poncelet: {
    name: "Poncelet",
    description: "The poncelet is a rare historical unit equal to 100 kgf·m/s = exactly 980.665 W. Proposed by French engineer Jean-Victor Poncelet (1788-1867) as a metric alternative to the horsepower for French engineering practice - the power to lift 100 kg at 1 m/s against gravity. Used in 19th-century French industrial and military engineering (waterwheels, steam engines, horse-operated machinery) before the watt replaced it. At 980.665 W, it sits between the metric horsepower (735.5 W) and the kilowatt (1,000 W). 1 poncelet = 980.665 W.",
    symbol: "p"
  },
  kilowatts: {
    name: "Kilowatt",
    description: "A kilowatt (kW) is 1,000 W - the everyday unit for home, vehicle, and industrial power. Average US home consumption is ~1.2 kW continuous (~10,500 kWh/year). EV motors range from 30 kW (city cars) to 600+ kW (performance models); a Tesla Model S Performance produces 560 kW (751 hp). Industrial gas turbines on commercial aircraft generate 20,000-100,000 kW. Solar installations are sized in kW-peak. Industrial electric motors span from fractional kW to thousands of kW. 1 kW = 1,000 W = 1.341 hp = 3,412.1 BTU/h.",
    symbol: "kW"
  },
  btuPerSecond: {
    name: "BTU per Second",
    description: "One BTU per second (BTU/s) ≈ 1,055 W - close to 1 kW but slightly larger. Used when heat rates are so high that per-hour or per-minute numbers become unwieldy. In fire protection engineering, large house fires peak at 500-2,000 BTU/s; industrial fires at millions of BTU/s. Blast characterisation for petrochemical safety and large industrial heat exchangers with duties of millions of BTU/h are conveniently expressed in BTU/s. Since 1 BTU/s ≈ 1.055 kW, conversion to SI is straightforward. 1 BTU/s = 1,055.056 W.",
    symbol: "BTU/s"
  },
  tonOfRefrigeration: {
    name: "Ton of Refrigeration",
    description: "One ton of refrigeration (RT) = 12,000 BTU/h ≈ 3,517 W - the cooling rate to freeze 1 short ton (2,000 lb) of water in 24 hours. This follows from water's latent heat: 144 BTU/lb × 2,000 lb ÷ 24 h = 12,000 BTU/h. US residential AC is 1.5-5 tons; a large commercial building 500-2,000 tons; a hyperscale data centre 50,000-100,000 tons. The RT is deeply embedded in North American HVAC catalogs, load calculation software, and contractor pricing. 1 RT = 3,516.85 W.",
    symbol: "RT"
  },
  boilerHorsepower: {
    name: "Boiler Horsepower",
    description: "One boiler horsepower (BHP) ≈ 9,810 W = 33,475 BTU/h - the power to evaporate 34.5 lb of water per hour at 212°F, standardised by ASME for rating steam boilers. A small office building needs 10-50 BHP; a hospital or large plant 200-2,000 BHP. Critically, 1 BHP is ~13.1× larger than 1 mechanical horsepower (746 W) - a dangerous confusion when specifying heating equipment. 1 BHP ≈ 9,810.6 W.",
    symbol: "BHP"
  },
  megawatts: {
    name: "Megawatt",
    description: "A megawatt (MW) is 10⁶ W - the standard unit for utility power plant output. A coal unit produces 300-900 MW; a large nuclear reactor 1,000-1,600 MW. Offshore wind turbines reach 15 MW each (Vestas V236-15.0). The Three Gorges Dam totals 22,500 MW. Aluminium smelters consume 500-600 MW; electric arc furnaces 100-300 MW. Solar farms are rated in MWp; pharmaceutical clean-room HVAC systems in MW. 1 MW = 10⁶ W = 1,341 mechanical hp.",
    symbol: "MW"
  },
  gigawatts: {
    name: "Gigawatt",
    description: "A gigawatt (GW) is 10⁹ W - the scale of national grid capacity. UK peak demand is 40-70 GW; France 80-100 GW. Japan's Kashiwazaki-Kariwa nuclear complex totals 8.2 GW. World installed solar PV surpassed 1,000 GW in 2022. The North Sea Link Norway-UK undersea cable carries 1.4 GW. Global data centre consumption exceeds 200 GW. A lightning bolt peaks at ~1 GW for ~30 µs, yielding only ~250 kJ total energy - power is extreme, energy modest. 1 GW = 10⁹ W.",
    symbol: "GW"
  },
  terawatts: {
    name: "Terawatt",
    description: "A terawatt (TW) is 10¹² W. All of human civilisation consumes ~17-18 TW (electricity + heat + transport combined); global electricity generation alone is ~9 TW. Solar irradiance intercepted by Earth is ~174,000 TW; photosynthesis captures ~130 TW. The National Ignition Facility (NIF) fusion laser produces pulses of ~500 TW lasting nanoseconds. High-power laser facilities for nuclear physics and ICF research routinely exceed 1 TW in ultrashort pulse regimes. 1 TW = 10¹² W.",
    symbol: "TW"
  },
  petawatts: {
    name: "Petawatt",
    description: "A petawatt (PW) is 10¹⁵ W. Total solar power intercepted by Earth is ~174 PW. The world's most powerful laser pulses operate at petawatt peak power via chirped pulse amplification (CPA, 2018 Nobel Prize in Physics): China's SULF demonstrated 10 PW in 2019; ELI-NP targets 10 PW. These PW pulses last femtoseconds and create plasma temperatures of billions of kelvin in laboratory targets. Gamma-ray bursts radiate 10²⁴-10²⁷ W at peak - thousands to billions of times the petawatt scale. 1 PW = 10¹⁵ W.",
    symbol: "PW"
  },
  exawatts: {
    name: "Exawatt",
    description: "An exawatt (EW) is 10¹⁸ W. The Sun's total luminosity is 3.828 × 10²⁶ W = 3.828 × 10⁸ EW. Earth intercepts ~0.174 EW of solar power. Gamma-ray burst peak luminosities reach 10⁶-10¹ EW, making them the most powerful transients in the universe. Soft gamma-repeater (magnetar) giant flares briefly reach ~10⁵ EW. Proposed multi-exawatt laser projects (IZEST initiative) aim to compress kilojoules into attosecond pulses for QED vacuum physics. Global human civilisation consumes ~1.8 × 10⁻² EW (18 TW). 1 EW = 10¹⁸ W.",
    symbol: "EW"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toWatts);
}

function convertPower() {
  convertFactorBased(toWatts);
}

initConverterPage();
