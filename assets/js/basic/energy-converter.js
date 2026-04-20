const toJoules = {
  electronVolts:        1.602176634e-19,
  attojoules:           1e-18,
  femtojoules:          1e-15,
  picojoules:           1e-12,
  nanojoules:           1e-9,
  ergs:                 1e-7,
  microjoules:          1e-6,
  millijoules:          1e-3,
  inchPoundForce:       0.11298482902761670,
  joules:               1,
  footPoundForce:       1.3558179483314004,
  calories:             4.184,
  kilojoules:           1000,
  britishThermalUnits:  1055.05585262,
  wattHours:            3600,
  kilocalories:         4184,
  megajoules:           1e6,
  horsepowerHours:      2684519.537696172,
  kilowattHours:        3.6e6,
  therms:               105505585.262,
  gigajoules:           1e9,
  megawattHours:        3.6e9,
  tonsOfTNT:            4.184e9,
  toeOil:               4.1868e10,
  terajoules:           1e12,
  gigawattHours:        3.6e12,
  kilotonsTNT:          4.184e12,
  petajoules:           1e15,
  megatonsTNT:          4.184e15,
  exajoules:            1e18,
};

// Unit descriptions
const unitDescriptions = {
  electronVolts: {
    name: "Electronvolt",
    symbol: "eV",
    description: "An electronvolt (eV) is the kinetic energy gained by one electron accelerated through 1 volt - exactly 1.602176634 × 10⁻¹⁹ J (fixed by the 2019 SI revision). It is the natural energy unit of atomic and particle physics: visible light photons carry 1.7-3.1 eV; hydrogen ionisation requires 13.6 eV; X-ray photons span 100 eV-100 keV; protons at the LHC reach 6.5 TeV. Rest masses use eV/c²: electron 0.511 MeV, proton 938.3 MeV, Higgs boson 125 GeV. Nuclear binding energy peaks at ~8 MeV/nucleon for iron-56. 1 eV = 1.602176634 × 10⁻¹⁹ J."
  },
  attojoules: {
    name: "Attojoule",
    symbol: "aJ",
    description: "An attojoule (aJ) is 10⁻¹⁸ J - the scale of individual X-ray photons and superconducting qubit circuits. A 1 keV X-ray photon carries 160 aJ; a visible green photon (~550 nm) carries ~0.36 aJ. Josephson junction energies in superconducting qubits are set in tens to hundreds of aJ to achieve quantum coherence at millikelvin temperatures. XRISM's cryogenic TES X-ray spectrometer resolves individual photon energies at the hundreds-of-aJ level with ~7 eV FWHM resolution. 1 aJ = 10⁻¹⁸ J = 6.242 eV."
  },
  femtojoules: {
    name: "Femtojoule",
    symbol: "fJ",
    description: "A femtojoule (fJ) is 10⁻¹⁵ J - the scale of gamma-ray photons, molecular motor work, and state-of-the-art digital logic. The electron rest-mass energy is 81.87 fJ; a 100 keV X-ray photon carries 16.02 fJ. A single myosin II motor protein power stroke dissipates ~5-40 fJ. ATP hydrolysis under cellular conditions yields ~80-100 fJ of free energy. Advanced 3 nm CMOS gates switch at ~0.1-1 fJ per operation. Ultrafast fiber laser oscillators produce pulses of 0.1-10 fJ before amplification. 1 fJ = 10⁻¹⁵ J = 6.242 keV."
  },
  picojoules: {
    name: "Picojoule",
    symbol: "pJ",
    description: "A picojoule (pJ) is 10⁻¹² J - the scale of laser pulses in scientific instruments and chip-level capacitor storage. A 1 pF capacitor charged to 1 V stores exactly 0.5 pJ. Laser pulse energies in OCT and ultrafast spectroscopy are typically 1-1,000 pJ. Single-photon SNSPD detector dead-time dissipates 1-100 pJ per event. Phase-change memory cells (PCM, ReRAM) switch at 10-100 pJ per state transition, setting a lower bound on non-volatile memory energy efficiency. 1 pJ = 10⁻¹² J = 6.242 MeV."
  },
  nanojoules: {
    name: "Nanojoule",
    symbol: "nJ",
    description: "A nanojoule (nJ) is 10⁻⁹ J - the scale of ultrashort laser pulses, flash memory write operations, and cellular ATP reserves. A Ti:sapphire laser oscillator produces pulses of 1-20 nJ at 80 MHz. Flash NAND programming costs ~1-10 nJ/bit written; a read is ~0.1 nJ/bit. The total ATP energy stored in a single red blood cell is ~1-5 nJ. The kinetic energy of a 1 µg particle at 1.4 m/s is ~1 nJ, illustrating that nanojoules describe real nanoscale mechanical events. 1 nJ = 10⁻⁹ J."
  },
  ergs: {
    name: "Erg",
    symbol: "erg",
    description: "An erg is the CGS unit of energy - the work done by one dyne through one centimetre - exactly 10⁻⁷ J. Despite SI adoption, the erg persists in astrophysics: the Sun's luminosity is 3.828 × 10³³ erg/s; gamma-ray burst isotropic energies are quoted in units of 10⁵¹ erg ('one foe'). Surface tension of water is 72.8 dyn/cm; the work to create 1 cm² of new water-air interface is 72.8 erg. Earthquake seismic moment M₀ is in dyn·cm = erg; the 2004 Boxing Day earthquake had M₀ ≈ 10²³ J = 10³⁰ erg. 1 erg = 10⁻⁷ J = 624.15 eV."
  },
  microjoules: {
    name: "Microjoule",
    symbol: "µJ",
    description: "A microjoule (µJ) is 10⁻⁶ J - the scale of precision laser ablation, ESD damage events, and individual LIDAR pulses. LASIK eye surgery delivers 0.5-2 µJ per pulse at 193 nm, ablating ~0.25 µm of corneal tissue per pulse. ESD events that destroy IC gates correspond to 1-1,000 µJ; the Human Body Model test discharges ~500 µJ at 2 kV. Q-switched microchip laser pulses for rangefinding are 1-100 µJ. The kinetic energy of a 1 mg grain of sand falling 10 cm is mgh ≈ 0.98 µJ. 1 µJ = 10⁻⁶ J."
  },
  millijoules: {
    name: "Millijoule",
    symbol: "mJ",
    description: "A millijoule (mJ) is 10⁻³ J - the scale of surgical lasers, spark ignition, and the kinetic energy of small everyday objects. Nd:YAG lasers for ophthalmology and tattoo removal deliver 10-200 mJ per pulse. The minimum spark energy to ignite methane-air is ~0.29 mJ; an automotive spark plug discharges 30-60 mJ per cycle. A 2 g mosquito flying at 1 m/s has kinetic energy ½ × 0.002 × 1² = 1 mJ. Electrocautery monopolar pulses deliver 50-500 mJ to coagulate blood vessels. 1 mJ = 10⁻³ J = 0.2390 cal."
  },
  inchPoundForce: {
    name: "Inch-Pound-Force",
    symbol: "in·lbf",
    description: "An inch-pound-force (in·lbf) is the work done by one pound-force through one inch - exactly 0.11298482902761670 J (= 1/12 ft·lbf). It is the dominant torque unit for small fasteners and precision instruments in the US: a #6-32 screw in aluminium is torqued to 4-6 in·lbf; a dental implant abutment screw to ~25-30 Ncm (2.2-2.7 in·lbf). Hobby servo motor torque is quoted in oz·in (1 in·lbf = 16 oz·in). Bicycle stem bolts are typically 4-6 Nm (35-53 in·lbf). 1 in·lbf = 0.11298 J = 1/12 ft·lbf = 11.298 Ncm."
  },
  joules: {
    name: "Joule",
    symbol: "J",
    description: "The joule (J) is the SI unit of energy, defined as one newton acting through one metre (1 J = 1 N·m = 1 kg·m²/s²). Named after James Prescott Joule, whose 1840s paddle-wheel experiments established the mechanical equivalent of heat (~4.15 J = 1 calorie). One joule is modest: it lifts a 100 g apple by 1 m, heats 0.239 mL of water by 1°C, or powers a 1 W LED for 1 second. Daily adult resting metabolism is ~6-9 MJ. 1 J = 1 W·s = 0.23901 cal = 9.4782 × 10⁻⁴ BTU = 2.7778 × 10⁻⁷ kWh."
  },
  footPoundForce: {
    name: "Foot-Pound-Force",
    symbol: "ft·lbf",
    description: "A foot-pound-force (ft·lbf) is the work done by one pound-force through one foot - exactly 1.3558179483314004 J. It is the standard torque and energy unit in US engineering. Automotive engine torque: Honda Civic ~125 lb-ft; Ford F-150 EcoBoost ~500 lb-ft. Muzzle energies: .22 LR ~140 ft·lbf; .308 Winchester ~2,600 ft·lbf; .50 BMG ~14,000 ft·lbf. Diesel pile hammers deliver 15,000-600,000 ft·lbf/blow. SAE Grade 8 bolts are specified at 7-950 ft·lbf. 1 ft·lbf = 12 in·lbf = 1.35582 J = 0.32405 cal."
  },
  calories: {
    name: "Calorie",
    symbol: "cal",
    description: "A calorie (cal) - the thermochemical calorie - is exactly 4.184 J, defined as the heat to raise 1 g of water by 1°C. Standard since 1954. The calorie is the fundamental unit of heat measurement in thermochemistry: glucose combustion releases 669.9 kcal/mol; water vaporisation requires 539.7 cal/g. Bond dissociation energies in quantum chemistry are often quoted in kcal/mol. Note: the dietary Calorie (capital C) on food labels is 1 kcal = 4,184 J - a factor-of-1,000 difference that causes persistent confusion. 1 cal = 4.184 J = 1.163 × 10⁻³ Wh."
  },
  kilojoules: {
    name: "Kilojoule",
    symbol: "kJ",
    description: "A kilojoule (kJ) is exactly 1,000 J and is the standard energy unit for food and physical chemistry. EU, Australian, and NZ food labels are mandatory in kJ: recommended adult intake is ~8,400 kJ/day. Bond dissociation energies: C-H bond 413 kJ/mol; C=C double bond 614 kJ/mol; N≡N triple bond 945 kJ/mol. Specific heat of water: 4.184 kJ/(kg·K). A cyclist riding at 150 W for one hour expends 540 kJ. Charpy and Izod impact toughness tests record results in J and kJ. 1 kJ = 1,000 J = 239.0 cal = 0.94782 BTU = 0.27778 Wh."
  },
  britishThermalUnits: {
    name: "British Thermal Unit",
    symbol: "BTU",
    description: "A British Thermal Unit (BTU) - the heat to raise 1 lb of water by 1°F - equals exactly 1,055.05585262 J. It dominates US HVAC: room air conditioners are rated in BTU/h (5,000-24,000 BTU/h = 1.5-7.0 kW); one ton of refrigeration is exactly 12,000 BTU/h. Natural gas is billed in therms (100,000 BTU) in the US. Higher heating values: natural gas ~1,020-1,050 BTU/ft³; No. 2 fuel oil ~138,700 BTU/US gal; propane ~91,500 BTU/US gal. 1 BTU = 1,055.06 J = 252.164 cal = 0.29307 Wh."
  },
  wattHours: {
    name: "Watt-Hour",
    symbol: "Wh",
    description: "A watt-hour (Wh) is the energy delivered by 1 watt for one hour - exactly 3,600 J. It is the practical unit for small-scale electrical energy: a 10,000 mAh 5 V power bank stores 50 Wh; a laptop battery holds 50-90 Wh; a smartphone battery holds 10-15 Wh; an AA alkaline cell stores ~3 Wh. LED lamps labelled 9 W save 51 Wh/h over a 60 W incandescent. IATA dangerous-goods rules use Wh as the threshold for lithium batteries in aircraft: cells >20 Wh and batteries >100 Wh need special approval. 1 Wh = 3,600 J = 3.412 BTU."
  },
  kilocalories: {
    name: "Kilocalorie",
    symbol: "kcal",
    description: "A kilocalorie (kcal) - the food Calorie (capital C) on US and Canadian nutrition labels - is exactly 4,184 J. WHO recommends ~2,000-2,500 kcal/day for adults. Energy density of nutrients: fat 9 kcal/g, carbohydrate 4 kcal/g, protein 4 kcal/g, ethanol 7 kcal/g. Running at 10 km/h burns ~600-800 kcal/h. Standard free energy of ATP hydrolysis is approximately −7.3 kcal/mol (−30.5 kJ/mol). Pre-SI thermodynamic tables in the US and Japan use kcal/mol for reaction enthalpies. 1 kcal = 4,184 J = 4.184 kJ = 3.968 BTU = 1.163 Wh."
  },
  megajoules: {
    name: "Megajoule",
    symbol: "MJ",
    description: "A megajoule (MJ) is 10⁶ J - the scale of fuel combustion in vehicles and kinetic energy of road traffic. Energy content: 1 L diesel ~34.9 MJ; 1 L petrol ~32.2 MJ. A 1,500 kg car at 100 km/h has KE = ½ × 1,500 × 27.78² ≈ 0.579 MJ; at 200 km/h it carries 2.31 MJ - explaining crash severity's quadratic speed dependence. A 60 kWh EV battery stores 60 × 3.6 = 216 MJ. Detonation of 1 kg TNT releases 4.184 MJ. Adults at rest metabolise ~6-9 MJ/day. 1 MJ = 10⁶ J = 239.0 kcal = 0.27778 kWh = 947.8 BTU."
  },
  horsepowerHours: {
    name: "Horsepower-Hour",
    symbol: "hp·h",
    description: "A horsepower-hour (hp·h) is the energy from one mechanical horsepower (745.6999 W) for one hour - exactly 2,684,519.54 J ≈ 2.685 MJ. James Watt coined the horsepower to compare his steam engines with mine horses; billing in hp·h preceded the kilowatt-hour tariff. The metric horsepower (PS = 75 kgf·m/s = 735.499 W) gives a slightly smaller metric-hp·h = 2,647,795 J, used in European and Japanese engine datasheets. Today the hp·h appears in marine engineering logs, mining energy accounting, and vintage industrial equipment. 1 hp·h = 2.6845 MJ = 0.74570 kWh = 641.19 kcal."
  },
  kilowattHours: {
    name: "Kilowatt-Hour",
    symbol: "kWh",
    description: "A kilowatt-hour (kWh) is the energy consumed by 1 kW for one hour - exactly 3,600,000 J = 3.6 MJ. All domestic electricity meters bill in kWh. Appliance benchmarks: fridge 180-250 kWh/year; washing machine 0.5-2.0 kWh/cycle; air conditioner 1-3 kWh/h. EVs consume 13-25 kWh/100 km; the Lucid Air achieves ~15.9 kWh/100 km (WLTP). Producing 1 tonne of primary aluminium requires ~13,000-15,000 kWh. Global electricity generation is ~29,165 TWh ≈ 2.9 × 10¹³ kWh/year. 1 kWh = 3.6 MJ = 3,412.1 BTU = 859.85 kcal."
  },
  therms: {
    name: "Therm",
    symbol: "thm",
    description: "A therm is the US natural gas billing unit equal to exactly 100,000 BTU = 105,505,585.262 J ≈ 105.5 MJ. One CCF of average US pipeline gas contains ~1.02 therms. The EIA publishes residential gas prices in $/therm; spot prices at Henry Hub are in $/MMBTU (1 MMBTU = 10 therms). US households average 500-700 therms/year for space heating, water heating, and cooking. A 15 kW domestic boiler running 2 hours delivers ~1 therm of useful heat. 1 therm = 100,000 BTU = 105.506 MJ = 29.307 kWh = 25,200 kcal."
  },
  gigajoules: {
    name: "Gigajoule",
    symbol: "GJ",
    description: "A gigajoule (GJ) is 10⁹ J - the scale of fossil-fuel commodity volumes. One barrel of crude oil contains ~5.80 GJ; one metric tonne of hard coal ~29.3 GJ. Canadian energy bills express household consumption in GJ: average Canadian households use ~100-130 GJ/year. A 1 GW power plant at 33% efficiency burns ~10.9 GJ/h of fuel to generate 1 GWh = 3.6 GJ of electricity. Detonation of 1 tonne of TNT releases 4.184 GJ. 1 GJ = 10⁹ J = 277.78 kWh = 947,817 BTU = 9.4782 therms."
  },
  megawattHours: {
    name: "Megawatt-Hour",
    symbol: "MWh",
    description: "A megawatt-hour (MWh) is the energy from 1 MW for one hour - exactly 3.6 GJ. It is the standard unit for wholesale electricity trading. Power purchase agreements (PPAs) specify capacity and price in $/MWh or €/MWh. A 5 MW wind turbine at full capacity generates 5 MWh/h. Primary aluminium smelting consumes 13-15 MWh per tonne. The Moss Landing battery (California) stores 3,287 MWh. The daily output of a 1 GW nuclear plant at 90% capacity factor is ~21,600 MWh. 1 MWh = 3.6 GJ = 3,412,141 BTU = 1,000 kWh."
  },
  tonsOfTNT: {
    name: "Ton of TNT",
    symbol: "t(TNT)",
    description: "A ton of TNT is an energy unit defined as exactly 10⁹ thermochemical calories = 4.184 GJ. The Trinity test (first nuclear weapon, 1945) yielded ~21 kilotons TNT = 87.9 TJ. The Tsar Bomba yielded ~50 megatons TNT = 209 PJ - the largest human-made explosion in history. Hiroshima's Little Boy yielded ~15 kilotons = 62.8 TJ. The Tunguska 1908 airburst released ~10-15 megatons TNT. Earthquake magnitude 6.0 releases ~63 kilotons TNT equivalent in seismic energy. 1 t(TNT) = 4.184 GJ = 4,184 MJ = 1,162.8 kWh."
  },
  toeOil: {
    name: "Ton of Oil Equivalent",
    symbol: "toe",
    description: "A ton of oil equivalent (toe) is the IEA standard for comparing primary energy sources - defined as exactly 41.868 GJ (= 10⁷ International Table kcal). IEA World Energy Balances report in Mtoe: global primary energy supply is ~580 EJ ≈ 13,860 Mtoe/year. One tonne of coal equivalent (tce) = 29.307 GJ = 0.7 toe. Natural gas: ~0.9 toe per 1,000 m³; one barrel of crude oil ≈ 0.136 toe. Average EU citizen uses ~3.0-3.5 toe/year for all energy needs. 1 toe = 41.868 GJ = 11.63 MWh = 39.683 MBTU."
  },
  terajoules: {
    name: "Terajoule",
    symbol: "TJ",
    description: "A terajoule (TJ) is 10¹² J - the scale of nuclear yields in the kiloton range and large industrial accidents. One kiloton of TNT = 4.184 TJ; the Hiroshima bomb (15 kt) released ~62.8 TJ. The Halifax Explosion (1917) released ~3 TJ. A 500 MW coal plant consumes ~51.4 TJ/h of thermal input. Daily primary energy of Denmark is ~250-300 TJ; the UK ~3,800 TJ/day. A 1 GW nuclear reactor at 90% capacity factor generates ~77.7 TJ/day. 1 TJ = 10¹² J = 277,778 kWh = 277.78 MWh = 23.88 ktoe."
  },
  gigawattHours: {
    name: "Gigawatt-Hour",
    symbol: "GWh",
    description: "A gigawatt-hour (GWh) is the energy from 1 GW for one hour - exactly 3.6 TJ. National electricity generation is reported in annual GWh: Ireland ~32,000 GWh/year; France ~496,000 GWh/year. The Hornsea One offshore wind farm (1.12 GW) generates ~4,000 GWh/year. The Bath County Pumped Storage (3 GW, USA) stores ~24 GWh. World total battery storage capacity reached ~1,600 GWh by end-2022. Energy of 1 megaton TNT ≈ 1.162 GWh. 1 GWh = 3.6 TJ = 1,000 MWh = 3.412 × 10⁹ BTU."
  },
  kilotonsTNT: {
    name: "Kiloton of TNT",
    symbol: "kt(TNT)",
    description: "A kiloton of TNT (kt(TNT)) = 10³ tons of TNT = exactly 4.184 TJ. It is the standard unit for sub-megaton nuclear weapon yields. Hiroshima's Little Boy: ~12-18 kt; Nagasaki's Fat Man: ~19-23 kt. The W88 warhead (Trident II) is ~475 kt; the W76 is ~100 kt. The Beirut port explosion (2020): estimated 0.5-1.1 kt. A magnitude 5.0 earthquake releases ~0.5-2 kt of seismic energy. A kiloton blast creates a fireball ~90-100 m radius and a lethal thermal radius of ~1-2 km. 1 kt(TNT) = 4.184 TJ = 1,162.8 MWh."
  },
  petajoules: {
    name: "Petajoule",
    symbol: "PJ",
    description: "A petajoule (PJ) is 10¹⁵ J - the national energy policy scale. IEA reports primary energy in PJ/year: Sweden ~600 PJ; Germany ~12,500 PJ; the United States ~93,000 PJ. World total primary energy supply is ~605,000 PJ = 605 EJ. The 1883 Krakatoa eruption released ~200 PJ ≈ 48 megatons TNT. A 1-megaton nuclear weapon releases 4.184 PJ. Global annual steel production embeds ~38,000-47,000 PJ of energy. 1 PJ = 10¹⁵ J = 277.78 GWh = 238.85 ktoe = 23.88 ktoe."
  },
  megatonsTNT: {
    name: "Megaton of TNT",
    symbol: "Mt(TNT)",
    description: "A megaton of TNT (Mt(TNT)) = 10⁶ tons of TNT = exactly 4.184 PJ. The Soviet Tsar Bomba (1961) yielded ~50 Mt - the largest human-made explosion ever, with a fireball 8 km in diameter. Castle Bravo (1954) yielded ~15 Mt, 2.5× its 6 Mt design yield. Modern thermonuclear warheads typically range from 0.1-1.2 Mt. The 2011 Tōhoku earthquake released ~500 Mt in seismic energy. The Krakatoa 1883 eruption released ~200 Mt; Tambora 1815 ~33,000 Mt. 1 Mt(TNT) = 4.184 PJ = 1,162,800 MWh."
  },
  exajoules: {
    name: "Exajoule",
    symbol: "EJ",
    description: "An exajoule (EJ) is 10¹⁸ J - the scale of global energy consumption. World primary energy supply in 2022 was ~580-610 EJ: coal ~160 EJ; oil ~190 EJ; gas ~145 EJ; nuclear ~26 EJ; wind ~8 EJ; solar PV ~8 EJ. Global electricity generation of ~29,000 TWh = 104 EJ. Solar energy incident on Earth's atmosphere is ~5.5 × 10⁶ EJ/year - approximately 9,000× total human demand. Annual fossil fuel combustion releases ~490 EJ/year, producing ~36.8 Gt CO₂. 1 EJ = 10¹⁸ J = 277.78 TWh = 238.85 Mtoe."
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toJoules);
}

function convertEnergy() {
  convertFactorBased(toJoules);
}

initConverterPage();
