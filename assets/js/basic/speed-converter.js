const toMetresPerSecond = {
  nanometresPerSecond:    1e-9,
  micrometresPerSecond:   1e-6,
  furlongPerFortnight:    1.6630952380952381e-4,
  millimetresPerSecond:   1e-3,
  centimetresPerSecond:   1e-2,
  inchesPerMinute:        4.233333333333333e-4,
  inchesPerSecond:        0.0254,
  feetPerMinute:          5.08e-3,
  metresPerMinute:        0.016666666666666667,
  kilometresPerHour:      0.2777777777777778,
  milesPerHour:           0.44704,
  knots:                  0.5144444444444444,
  metresPerSecond:        1,
  feetPerSecond:          0.3048,
  yardsPerSecond:         0.9144,
  kilometresPerMinute:    16.666666666666667,
  milesPerMinute:         26.8224,
  nauticalMilesPerMinute: 30.866666666666667,
  mach1:                  340.29,
  mach5:                  1701.45,
  mach20:                 6805.8,
  kilometresPerSecond:    1000,
  milesPerSecond:         1609.344,
  nauticalMilesPerSecond: 1852,
  orbitalSpeedISS:        7660,
  escapeVelocityEarth:    11186,
  speedOfLight:           299792458,
};

// Unit descriptions
const unitDescriptions = {
  nanometresPerSecond: {
    name: "Nanometre per Second",
    description: "A nanometre per second (nm/s) is 10⁻⁹ m/s - the speed of atomic-scale processes. AFM tips scanning surfaces move at 1-100 nm/s to resolve atomic steps. Kinesin molecular motors walk along microtubules at ~1,000-8,000 nm/s, stepping 8 nm per ATP cycle. Piezoelectric nano-positioners in electron microscopes and gravitational-wave interferometers are driven at nm/s for sub-nanometre position control. Crystal growth in solution can proceed at 1-10 nm/s under controlled conditions. 1 nm/s = 10⁻⁹ m/s.",
    symbol: "nm/s"
  },
  micrometresPerSecond: {
    name: "Micrometre per Second",
    description: "A micrometre per second (µm/s) is 10⁻⁶ m/s - the speed of cell motility, bacteria, and precision machining feeds. E. coli swims at 20-30 µm/s; the fastest bacteria (Thiovulum majus) reach 600 µm/s. Neutrophils chasing a chemoattractant move at 10-20 µm/s. Microfluidic lab-on-chip analytical channels flow at 1-1,000 µm/s. Diamond-turning lathe in-feeds for optical surfaces are 1-100 µm/s. Fast glacier centrelines move ~1-10 µm/s (~100 m/year). 1 µm/s = 10⁻⁶ m/s.",
    symbol: "\u00b5m/s"
  },
  furlongPerFortnight: {
    name: "Furlong per Fortnight",
    description: "A furlong per fortnight (fur/fn) is a deliberately archaic unit equal to exactly 201.168 ÷ 1,209,600 m/s ≈ 1.663 × 10\u207b\u2074 m/s - just slightly faster than a garden snail at full creep. One furlong (one-eighth of a mile = 201.168 m) and one fortnight (14 days = 1,209,600 s) are both perfectly legitimate historical measures, but their combination is cherished in physics teaching as a cautionary example of needlessly exotic unit choices. Expressing kinetic energy in kg\u00b7fur\u00b2/fn\u00b2 or force in kg\u00b7fur/fn\u00b2 illustrates instantly why the SI was universally adopted. The unit appears in satirical physics papers, recreational mathematics columns, and Terry Pratchett's Discworld novels as the native velocity unit of magical phenomena. The speed of light expressed in furlongs per fortnight is approximately 1.803 × 10\u00b9\u00b2 fur/fn. Snails travel at roughly 0.5-1 fur/fn; strong tidal rip currents reach 100-200 fur/fn. 1 fur/fn \u2248 1.663 × 10\u207b\u2074 m/s \u2248 0.599 km/h \u2248 0.372 mph.",
    symbol: "fur/fn"
  },
  millimetresPerSecond: {
    name: "Millimetre per Second",
    description: "A millimetre per second (mm/s) is 10⁻³ m/s - the speed of slow industrial mechanisms and recognisable biological motion. FDM 3D printers move at 40-120 mm/s for perimeters and 150-300 mm/s for infill. Garden snails travel 0.5-1.5 mm/s; earthworms 3-5 mm/s. CNC finishing operations run 1-several hundred mm/s. Hydraulic precision slides work at mm/s for surface preparation. Ultrasound particle velocities in soft tissue are also in this range. 1 mm/s = 10⁻³ m/s.",
    symbol: "mm/s"
  },
  centimetresPerSecond: {
    name: "Centimetre per Second",
    description: "A centimetre per second (cm/s) is 10⁻² m/s - the speed of slow animals, gentle breezes, and lab syringe pumps. Tortoises travel 0.5-1.5 cm/s; the fastest garden snail record is ~1.3 cm/s. A gentle breeze that barely moves leaves is Beaufort 1 ≈ 50-100 cm/s. Drug-delivery syringe pumps run 0.01-10 cm/s. Coarse silt settles in still water at ~0.2 cm/s (Stokes' law). Capacitive touch sensors detect finger motion at 1-10 cm/s. 1 cm/s = 0.01 m/s.",
    symbol: "cm/s"
  },
  inchesPerMinute: {
    name: "Inch per Minute",
    description: "An inch per minute (in/min) ≈ 0.4233 mm/s - the standard North American machining feed unit for slow precision cuts. CNC milling in titanium or nickel superalloys: HSS roughing 2-8 in/min; carbide finishing 15-40 in/min. Thread-tapping feeds are calculated in in/min from pitch × RPM. Hydraulic press platen closure for rubber moulding and laminate pressing: 0.05-2 in/min. 1 in/min = 0.0254 m/min ≈ 4.233 × 10⁻⁴ m/s.",
    symbol: "in/min"
  },
  inchesPerSecond: {
    name: "Inch per Second",
    description: "An inch per second (in/s) = exactly 0.0254 m/s = 25.4 mm/s. Professional reel-to-reel audio tape runs at 15 or 30 IPS; consumer tape decks at 1⅞ IPS; VHS at ~1.3 IPS. High-speed CNC axes rapid at 800-1,200 in/min ≈ 13-20 in/s. Pneumatic cylinder speeds and robotic end-effector approach speeds in US assembly plants are programmed in in/s. 1 in/s = 0.0254 m/s = 5 ft/min.",
    symbol: "in/s"
  },
  feetPerMinute: {
    name: "Foot per Minute",
    description: "A foot per minute (ft/min) = 5.08 × 10⁻³ m/s - the US standard for elevator speed, HVAC duct velocity, and conveyor speed. Residential lifts: 100-200 ft/min; commercial 200-400 ft/min; skyscraper express lifts 1,000-3,000 ft/min (Burj Khalifa 2,953 ft/min). HVAC low-velocity ductwork: 500-1,000 ft/min; medium-velocity 1,000-2,200 ft/min. Paper machine Fourdrinier wires: 200-6,000 ft/min. 1 ft/min = 0.00508 m/s.",
    symbol: "ft/min"
  },
  metresPerMinute: {
    name: "Metre per Minute",
    description: "A metre per minute (m/min) equals exactly 1/60 m/s \u2248 0.016667 m/s and is widely used in manufacturing, printing, and industrial processes as a natural metric extension. CNC router cutting feeds in metric workshops are specified in m/min: wood at 3-10 m/min, aluminium at 1-4 m/min. High-speed printing press web speeds range from a few m/min on proof presses to 600-1,200 m/min on modern flexographic machines; inkjet web printers run at 50-200 m/min. Treadmill running speeds are resolved to m/min in training-intensity calculations: walking 80-100 m/min, jogging 150-180 m/min, running 240-300 m/min. Elite 100 m freestyle swimmers complete their length in about 47 seconds - approximately 127 m/min. Wind turbine blade hub speeds of large utility turbines reach 60-100 m/min at rotor hub radius, rising to 400+ m/min at the blade tip. Paper machine wire speeds in modern fourdrinier mills run at 60-1,200 m/min depending on grade. 1 m/min = 1/60 m/s \u2248 0.06 km/h = 3.281 ft/min.",
    symbol: "m/min"
  },
  kilometresPerHour: {
    name: "Kilometre per Hour",
    description: "A kilometre per hour (km/h) = 1/3.6 m/s - the universal road speed unit across most of the world. Walking pace ~5-6 km/h; jogging 9-12 km/h; elite marathon runners average 20-21 km/h. High-speed rail (TGV, Shinkansen, ICE) 250-350 km/h; TGV record 574.8 km/h. Category 5 hurricane ≥252 km/h; Thrust SSC land speed record 1,228 km/h (Mach 1.02). 1 km/h = 0.2778 m/s = 0.6214 mph = 0.5400 kn.",
    symbol: "km/h"
  },
  milesPerHour: {
    name: "Mile per Hour",
    description: "A mile per hour (mph) = exactly 0.44704 m/s - the primary road speed unit in the US, UK, and a few other countries. US interstate limits 65-85 mph; UK motorway 70 mph. Walking ~3-4 mph; club cycling 20-25 mph. MLB elite fastball 100 mph (44.7 m/s). Saffir-Simpson Category 5 hurricane ≥157 mph. Boeing 737 MAX cruises at ~521 mph (Mach 0.79). 1 mph = 0.44704 m/s = 1.60934 km/h = 0.86898 kn.",
    symbol: "mph"
  },
  knots: {
    name: "Knot",
    description: "A knot (kn) = 1 nautical mile per hour = 1,852/3,600 m/s ≈ 0.51444 m/s - the universal speed unit for aviation and maritime navigation (ICAO and IMO standard). GA aircraft cruise 100-140 kn; commercial airliners 450-480 kn; Concorde 1,176 kn (Mach 2). Container ships 18-22 kn; QM2 exceeds 30 kn. Beaufort Force 12 hurricane begins at 64 kn. Gulf Stream surface current 2-4 kn. 1 kn = 1.852 km/h = 1.15078 mph.",
    symbol: "kn"
  },
  metresPerSecond: {
    name: "Metre per Second",
    description: "The metre per second (m/s) is the SI unit of speed. Brisk walking ~1.4 m/s; Usain Bolt's peak sprint ~12.4 m/s; speed of sound in air at 20°C 343.2 m/s; in water 1,481 m/s. Rifle muzzle velocities 370-1,200 m/s. Speed of light = exactly 299,792,458 m/s (the defined constant from which the metre is derived since 1983). 1 m/s = 3.6 km/h = 2.23694 mph = 1.94384 kn.",
    symbol: "m/s"
  },
  feetPerSecond: {
    name: "Foot per Second",
    description: "A foot per second (ft/s) = exactly 0.3048 m/s - the primary speed unit in US ballistics, hydraulics, and gas dynamics. .308 Winchester muzzle velocity ~2,750 ft/s; 9mm pistol 1,200-1,400 ft/s; .50 BMG 2,910 ft/s. Speed of sound at sea level 1,116 ft/s. River channel mean velocities 0.5-6 ft/s; NFPA sprinkler pipe flows also in ft/s. 1 ft/s = 0.3048 m/s = 1.09728 km/h = 60 ft/min.",
    symbol: "ft/s"
  },
  yardsPerSecond: {
    name: "Yard per Second",
    description: "A yard per second (yd/s) = exactly 0.9144 m/s - brisk jog speed, natural for American and British sports. American football wide receivers at full sprint: 10-11 yd/s; defensive backs 9-10 yd/s. Ten-pin bowling ball rolls the 20 yd lane in 2-3 s ≈ 7-9 yd/s. A sprinting cricket fielder covers the 22 yd pitch in ~3 s ≈ 7 yd/s. Racing greyhound: ~20 yd/s. 1 yd/s = 0.9144 m/s = 2.04545 mph.",
    symbol: "yd/s"
  },
  kilometresPerMinute: {
    name: "Kilometre per Minute",
    description: "A kilometre per minute (km/min) = 50/3 m/s ≈ 16.667 m/s. F1 cars at Monza average ~4.33 km/min in qualifying. High-speed trains (TGV, ICE) cruise at 2.5-3.5 km/min. Subsonic military jet trainers fly at 3-7 km/min; combat aircraft cruise at 7-10 km/min. Dead-reckoning navigation: elapsed minutes × km/min = distance. 1 km/min = 60 km/h = 37.28 mph.",
    symbol: "km/min"
  },
  milesPerMinute: {
    name: "Mile per Minute",
    description: "A mile per minute (mi/min) = exactly 26.8224 m/s = 60 mph. The X-15 rocket plane flew at ~4.5 mi/min (Mach 6.7); the SR-71 Blackbird at ~2.1 mi/min (Mach 3.2). Speed of sound at sea level ≈ 0.77 mi/min. 'Mile-a-minute' (60 mph = 1 mi/min) was a historic railway milestone first achieved on the Great Western Railway in the 1840s. 1 mi/min = 96.5604 km/h.",
    symbol: "mi/min"
  },
  nauticalMilesPerMinute: {
    name: "Nautical Mile per Minute",
    description: "A nautical mile per minute (nmi/min) = 1,852/60 m/s ≈ 30.867 m/s = 60 knots. At 1 nmi/min, elapsed time in minutes equals distance in nautical miles - dead-reckoning made trivial. Mach 1 at sea level ≈ 1.1 nmi/min; Concorde at Mach 2.02 flew ~3 nmi/min. ATC radar separation standards use nmi and minutes as native units, making nmi/min the implicit reference. 1 nmi/min = 1,852 km/h = 60 kn.",
    symbol: "nmi/min"
  },
  kilometresPerSecond: {
    name: "Kilometre per Second",
    description: "A kilometre per second (km/s) = 1,000 m/s - the scale of orbital mechanics and hypervelocity. ISS orbital speed ≈ 7.66 km/s; Earth escape velocity 11.186 km/s. Voyager 1 travels ~17 km/s relative to the Sun. Meteoroids enter Earth's atmosphere at 11-72 km/s; solar wind 400-800 km/s. High-explosive detonation fronts propagate at 6.9-8.8 km/s. 1 km/s = 3,600 km/h = 2,236.9 mph.",
    symbol: "km/s"
  },
  milesPerSecond: {
    name: "Mile per Second",
    description: "A mile per second (mi/s) = exactly 1,609.344 m/s - above the fastest air-breathing aircraft. NASA X-43A scramjet: 2.9 km/s ≈ 1.8 mi/s (Mach 9.6). Earth's orbital speed around the Sun: ~18.5 mi/s (29.8 km/s). Light travels ~186,282 mi/s in vacuum - the classic imperial figure still used in popular astronomy. Tunguska impactor entered Earth's atmosphere at ~9-11 mi/s. 1 mi/s = 3,600 mph = 3,128.3 kn.",
    symbol: "mi/s"
  },
  nauticalMilesPerSecond: {
    name: "Nautical Mile per Second",
    description: "A nautical mile per second (nmi/s) equals exactly 1,852 m/s - squarely in the hypersonic domain at approximately Mach 5.44 (ISA sea level). At this speed, kinetic energy per kilogram is \u00bd \u00d7 1852\u00b2 \u2248 1.71 MJ/kg, comparable to a small shaped-charge detonation. Ballistic missile re-entry vehicles descend at roughly 3.8-7 nmi/s during the terminal phase; ICBM warheads at peak re-entry travel near 4-6 nmi/s. The US Navy's electromagnetic railgun programme aimed to accelerate 10 kg projectiles to approximately 1.7-2.5 nmi/s in test firings, giving them sufficient kinetic energy to destroy armoured targets without a warhead. Hypervelocity impact experiments at two-stage light-gas gun facilities reach similar speeds to simulate asteroid-impact cratering physics. The speed of sound in beryllium metal (the fastest known bulk acoustic medium) is approximately 12.9 nmi/s. 1 nmi/s = 1,852 m/s = 6,667.2 km/h = 3,600 kn \u2248 Mach 5.44.",
    symbol: "nmi/s"
  },
  mach1: {
    name: "Mach 1 (Speed of Sound)",
    description: "Mach 1 = the speed of sound in dry air at ISA sea-level (15°C, 101.325 kPa) = exactly 340.29 m/s (1,225 km/h; 761 mph). Chuck Yeager first exceeded it on 14 October 1947 in the Bell X-1. At 35,000 ft cruise altitude (−56.5°C), it falls to 295.1 m/s. Flight regimes: subsonic <Mach 0.8; transonic 0.8-1.2; supersonic 1.2-5; hypersonic >Mach 5. Concorde cruised at Mach 2.02; SR-71 at Mach 3.2. 1 Mach 1 = 340.29 m/s.",
    symbol: "Ma"
  },
  mach5: {
    name: "Mach 5 (Hypersonic Threshold)",
    description: "Mach 5 ≈ 1,701.45 m/s (6,125 km/h) at ISA sea level - the conventional supersonic/hypersonic boundary. Above Mach 5, stagnation temperatures exceed 1,500°C, air dissociates around the vehicle, and ablative thermal protection becomes mandatory. Space Shuttle re-entered at Mach 25; Soyuz capsules at Mach 27; ICBM warheads at Mach 15-25. NASA X-43A scramjet reached Mach 9.6 (air-breathing record, 2004). 1 Mach 5 = 1,701.45 m/s.",
    symbol: "Ma5"
  },
  mach20: {
    name: "Mach 20 (Re-entry Speed)",
    description: "Mach 20 ≈ 6,805.8 m/s (24,501 km/h) at ISA sea level - the peak heating regime of ballistic re-entry. Shock layer temperature exceeds 10,000 K; plasma sheath causes radio blackout. Space Shuttle decelerated through Mach 20 at ~75-80 km altitude; Apollo CM hit the atmosphere at ~Mach 36; ICBM warheads re-enter at Mach 18-24. DARPA HTV-2 reached Mach 20 in 2011. 1 Mach 20 = 6,805.8 m/s.",
    symbol: "Ma20"
  },
  orbitalSpeedISS: {
    name: "Orbital Speed (ISS)",
    description: "The ISS orbits at ~408 km altitude at ≈7,660 m/s (27,576 km/h) - the practical LEO benchmark. At this speed it completes one orbit in 92.68 min (15.5 orbits per day), giving astronauts 16 sunrises and sunsets every 24 hours. Delta-v to reach LEO from Earth's surface is ~9,400 m/s (with gravity and drag losses). GEO at 35,786 km requires only ~3,075 m/s per Kepler's third law. 1 ISS speed ≈ 7,660 m/s.",
    symbol: "v\u2092\u2b0c\u1d47"
  },
  escapeVelocityEarth: {
    name: "Earth Escape Velocity",
    description: "Earth's escape velocity = 11,186 m/s at the surface - v_esc = √(2GM/r). A spacecraft launched at this speed (any direction) escapes on a parabolic trajectory; less gives an elliptical orbit. Apollo's trans-lunar injection exceeded this to reach the Moon. Voyager, Pioneer, and New Horizons all exceeded 11.2 km/s at launch. Moon escape velocity 2.38 km/s; Mars 5.03 km/s; Jupiter 59.5 km/s. 1 Earth v_esc ≈ 11,186 m/s = 40,270 km/h.",
    symbol: "v\u2091\u209c\u1d9c"
  },
  speedOfLight: {
    name: "Speed of Light",
    description: "The speed of light in vacuum (c) = exactly 299,792,458 m/s - the defined SI constant from which the metre is derived (since 1983) and the universal speed limit of causality. Light from the Sun reaches Earth in 8 min 20 s; from the Moon in 1.28 s; from Proxima Centauri in 4.24 years. Mars communication delay 3-22 minutes. In optical fibre (n ≈ 1.467), c/n ≈ 200,000 km/s. GPS clocks must correct for both special and general relativistic effects. c = 299,792,458 m/s.",
    symbol: "c"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toMetresPerSecond);
}

function convertSpeed() {
  convertFactorBased(toMetresPerSecond);
}

initConverterPage();
