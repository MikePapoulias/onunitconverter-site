const toNewtons = {
  attonewtons:     1e-18,
  femtonewtons:    1e-15,
  piconewtons:     1e-12,
  nanonewtons:     1e-9,
  micronewtons:    1e-6,
  milligramForce:  9.80665e-6,
  dynes:           1e-5,
  millinewtons:    1e-3,
  pond:            9.80665e-3,
  centinewtons:    1e-2,
  poundal:         0.138254954376,
  ounceForce:      0.27801385095378125,
  newtons:         1,
  poundForce:      4.4482216152605,
  kilogramForce:   9.80665,
  decanewtons:     10,
  kilonewtons:     1000,
  kip:             4448.2216152605,
  shortTonForce:   8896.443230521,
  metricTonForce:  9806.65,
  longTonForce:    9964.01641818352,
  meganewtons:     1e6,
  giganewtons:     1e9,
  teranewtons:     1e12,
};

// Unit descriptions
const unitDescriptions = {
  attonewtons: {
    name: "Attonewton",
    description: "An attonewton (aN) is 10⁻¹⁸ N - the force scale of individual photon recoil and quantum vacuum effects. The thermal noise floor of an AFM cantilever at room temperature is ~1-10 aN/√Hz. A 532 nm photon absorbed by a trapped ion imparts ~0.3 aN of recoil. Casimir forces between conducting surfaces 10-100 nm apart are 1-100 aN. NEMS resonators have demonstrated force sensitivity below 1 aN/√Hz, enabling single-molecule adsorption detection. Optomechanical cavities probe radiation pressure at the attonewton scale to test quantum measurement limits. 1 aN = 10⁻¹⁸ N.",
    symbol: "aN"
  },
  femtonewtons: {
    name: "Femtonewton",
    description: "A femtonewton (fN) is 10⁻¹⁵ N - the force scale of single-molecule biology. RNA polymerase exerts a stall force of ~14-25 fN while transiting DNA at 10-50 bp/s. Myosin V motor proteins step 37 nm with ~1-3 fN per head. The viscous drag on a 100 nm nanoparticle moving at 1 µm/s through cytoplasm is ~0.2-0.5 fN. Optical tweezers with back-focal-plane detection resolve sub-femtonewton forces, enabling measurement of single-enzyme output. AFM receptor-ligand unbinding (e.g., biotin-streptavidin) gives adhesion forces of 100-300 fN. 1 fN = 10⁻¹⁵ N.",
    symbol: "fN"
  },
  piconewtons: {
    name: "Piconewton",
    description: "A piconewton (pN) is 10⁻¹² N - the force scale of molecular biology and nanotechnology. Optical and magnetic tweezers apply 0.1-100 pN forces to single DNA strands and protein complexes. Unzipping one DNA base pair requires ~10-15 pN; a kinesin motor protein stalls at ~7 pN. AFM cantilevers resolve piconewton van der Waals forces between single atoms and surfaces. The covalent C-C bond ruptures under ~4,000 pN in controlled AFM pulling experiments. These forces underpin mechanobiology, drug-target mechanics, and nanofabrication. 1 pN = 10⁻¹² N.",
    symbol: "pN"
  },
  nanonewtons: {
    name: "Nanonewton",
    description: "A nanonewton (nN) is 10⁻⁹ N - the force scale of AFM, MEMS, and nanoscale adhesion. AFM contact-mode tip-sample forces are held to 1-100 nN to image surfaces without damage. A single gecko seta generates ~200 nN of adhesion via van der Waals forces; one million setae per foot give ~10 N total grip. Smartphone MEMS accelerometers sense nanonewton inertial forces from proof-mass displacements. Carbon nanotubes fracture at forces in the nanonanonewton range per tube. CubeSat cold-gas microthrusters produce single-digit nN thrust for attitude control. 1 nN = 10⁻⁹ N.",
    symbol: "nN"
  },
  micronewtons: {
    name: "Micronewton",
    description: "A micronewton (µN) is 10⁻⁶ N - the force scale of satellite microthrusters and MEMS actuators. Ion FEEP microthrusters on CubeSats produce 1-1,000 µN to compensate atmospheric drag at sub-500 km altitudes. Newton's law gives F = Gm₁m₂/r² ≈ 6.674 µN between two 1 kg masses 10 cm apart. Comb-drive electrostatic actuators in lab-on-a-chip devices operate at micronewton forces for cell sorting. AFM cantilevers mapping cell stiffness apply 10-100 µN. Red blood cells deform measurably at ~10-20 µN - an optical tweezers assay used to detect malaria. 1 µN = 10⁻⁶ N.",
    symbol: "µN"
  },
  milligramForce: {
    name: "Milligram-Force",
    description: "One milligram-force (mgf) is the gravitational force on 1 mg under standard gravity - exactly 9.80665 × 10⁻⁶ N. It is the natural unit for ultra-precise analytical balances: a 0.001 mg readability balance resolves ~9.8 nN = 0.001 mgf. MEMS force sensors in precision weighing cells are specified in mgf. Watchmaking uses mgf gauges to measure hairspring and detent actuation forces. Entomology and microbiology measure insect and microorganism attachment forces in mgf. Aerospace composite strain sensors are calibrated with mgf reference weights. 1 mgf = 9.80665 µN = 0.980665 dyn.",
    symbol: "mgf"
  },
  dynes: {
    name: "Dyne",
    description: "The dyne (dyn) is the CGS unit of force - the force to accelerate 1 g at 1 cm/s² - exactly 10⁻⁵ N. Surface tension is universally expressed in dyn/cm (= mN/m): water 72.8 dyn/cm; mercury 487 dyn/cm; ethanol 22.1 dyn/cm. Astrophysics and plasma physics papers use dyn/cm² for pressure; solar photon radiation pressure at Earth's orbit is ~4.56 × 10⁻⁵ dyn/cm². The dyne pairs naturally with other CGS units (poise, erg, gauss), which is why it persists in stellar modelling and X-ray binary spectra literature. 1 dyn = 10⁻⁵ N = 10 µN.",
    symbol: "dyn"
  },
  millinewtons: {
    name: "Millinewton",
    description: "A millinewton (mN) is 10⁻³ N - the force scale of lightweight structures and precision connectors. A mosquito weighs ~1-3 mN; a grain of rice ~29 mN; a paper clip ~40 mN. USB connector insertion forces are specified at 40-80 mN; keyboard switch actuation (ISO 9241) 40-80 mN. Piezoelectric hard drive head positioning actuators deliver 10-100 mN. Spider dragline silk (4 µm diameter) breaks at 40-60 mN - among the highest specific strengths in nature. Flexible electronics peel-force and thin-film adhesion tests also operate in the mN range. 1 mN = 10⁻³ N.",
    symbol: "mN"
  },
  pond: {
    name: "Pond",
    description: "The pond (p), also called gram-force (gf), is the gravitational force on 1 g under standard gravity - exactly 9.80665 × 10⁻³ N. It belongs to the metric gravitational technical system that dominated continental European engineering before SI. One thousand ponds = one kilopond (kp) = kilogram-force (kgf). Laboratory balances reading in grams technically measure pond, not mass. Older Mettler and Sartorius balance specs quote spring forces in pond. Pre-SI textile tensile strength was expressed in pond/tex. 1 p = 1 gf = 9.80665 mN = 0.001 kgf.",
    symbol: "p"
  },
  centinewtons: {
    name: "Centinewton",
    description: "A centinewton (cN) is exactly 0.01 N - the standard force unit of the textile industry. ISO and ASTM specs give fibre tenacity in cN/tex (centinewtons per tex, where 1 tex = 1 g/km): high-tenacity polyester 70-80 cN/tex; Kevlar/Twaron para-aramid 200-250 cN/tex; Dyneema/Spectra UHMWPE >350 cN/tex. Sewing thread breaking strength is 200-800 cN. Packaging tensile testers, adhesive peel-force instruments, and fine spring calibrators all report in cN. 1 cN ≈ 1 pond (0.980665 cN). 100 cN = 1 N.",
    symbol: "cN"
  },
  poundal: {
    name: "Poundal",
    description: "The poundal (pdl) is the force unit of the foot-pound-second absolute system - the force to accelerate 1 pound at 1 ft/s² - approximately 0.1383 N. Introduced in 1877 by Thomson and Tait as the FPS analogue of the CGS dyne (1 dyn = 1 g·cm/s²; 1 pdl = 1 lb·ft/s²). The poundal is distinct from pound-force: since standard gravity = 32.174 ft/s², 1 lbf = 32.174 pdl. It survives in older British engineering texts and early 20th-century thermodynamics literature, but is otherwise obsolete. 1 pdl = 0.138254954376 N = 1/32.174 lbf.",
    symbol: "pdl"
  },
  ounceForce: {
    name: "Ounce-Force",
    description: "One ounce-force (ozf) is 1/16 of a pound-force - approximately 0.2780 N. It is used for small-scale US customary force measurements: postal scales, miniature connector insertion forces, and small latch springs. Hobby servo motor torque is rated in oz·in (ounce-inches); dividing by arm length gives force in ozf. Snap, zipper, and hook-and-loop closure test gauges specify pull-off forces in ozf. Cosmetic packaging component actuation forces (lipstick, compact closures) also use ozf. 1 ozf = 1/16 lbf = 28.3495 gf = 0.27801 N.",
    symbol: "ozf"
  },
  newtons: {
    name: "Newton",
    description: "The newton (N) is the SI unit of force - the force to accelerate 1 kg at 1 m/s², defined as 1 N = 1 kg·m/s². Named after Sir Isaac Newton and adopted in 1960. One newton is the weight of a ~102 g apple. Everyday forces: gentle finger press ~1 N; handshake 150-200 N; human bite 500-700 N; car emergency braking 5,000-15,000 N; turbofan engine thrust ~300 kN; Boeing 747 lift at cruise ~2,800 kN. The newton is universally used in science and engineering worldwide. 1 N = 1 kg·m/s² = 0.22481 lbf.",
    symbol: "N"
  },
  poundForce: {
    name: "Pound-Force",
    description: "The pound-force (lbf) is the gravitational force on 1 lb-mass under standard gravity - exactly 4.4482216152605 N. It dominates US structural, mechanical, and aerospace engineering: AISC and ACI structural codes use lbf and kips (1 kip = 1,000 lbf); tire pressure 'psi' means lbf/in²; engine torque in lb·ft. Aircraft thrust is quoted in lbf: the GE90-115B (Boeing 777) produces 115,300 lbf = 513 kN. Spring rates, fastener torques, and load cell calibrations across North America are in lbf. 1 lbf = 4.44822 N = 16 ozf = 32.174 pdl.",
    symbol: "lbf"
  },
  kilogramForce: {
    name: "Kilogram-Force",
    description: "The kilogram-force (kgf), also called the kilopond (kp), is the gravitational force on 1 kg under standard gravity - exactly 9.80665 N. It was the primary force unit in continental European engineering before SI. ISO 1000 (1973) and EU Directive 80/181/EEC deprecated it in favour of the newton. Spring and bathroom scales reading in 'kg' technically measure kgf. Older DIN and JIS materials standards give tensile strength in kgf/mm² (× 9.80665 = MPa). Hydraulic cylinder ratings in legacy European machinery use kgf or tonne-force. 1 kgf = 9.80665 N = 2.20462 lbf.",
    symbol: "kgf"
  },
  decanewtons: {
    name: "Decanewton",
    description: "One decanewton (daN) is exactly 10 N. It is industrially significant in Europe because 1 daN ≈ 1 kgf (9.80665 N, a 2% difference), allowing gauges calibrated in daN to give readings that approximate kilogram-weight while remaining SI-compliant. ISO 376 and EN 13791 load-cell calibration standards use daN. ECE Regulation 16 (vehicle seat belts) and EN ISO 13857 (machinery safety distances) specify forces in daN. Continental European spring gauges and tensile testers routinely carry daN scales. 1 daN = 10 N = 1.01972 kgf = 2.24809 lbf.",
    symbol: "daN"
  },
  kilonewtons: {
    name: "Kilonewton",
    description: "A kilonewton (kN) is 1,000 N - the standard force unit for structural engineering outside North America. A 70 kg person exerts ~0.687 kN; a heavy goods vehicle axle 100-130 kN; a loaded Boeing 747 on its landing gear ~2,800 kN. Eurocode and BS EN structural codes express beam loads and foundation reactions in kN and bending moments in kN·m. Universal testing machines for materials testing are rated 10-10,000 kN. Prestressed concrete tendons are stressed to 100-250 kN each. 1 kN = 1,000 N = 224.81 lbf = 101.97 kgf.",
    symbol: "kN"
  },
  kip: {
    name: "Kip",
    description: "One kip (kilo-pound) is exactly 1,000 lbf - approximately 4,448 N. It is the primary force unit in US structural engineering: AISC and ACI 318 specify column loads, beam reactions, and connection capacities in kips and kip·ft or kip·in. 'ksi' (kips per square inch) gives steel yield strength - ASTM A36 yields at 36 ksi; A992/A572 at 50 ksi. Crane capacities, prestressed concrete jacking forces, and soil bearing limits in US geotechnical practice are all in kips. 1 kip = 1,000 lbf = 4,448.22 N = 453.59 kgf.",
    symbol: "kip"
  },
  shortTonForce: {
    name: "Short Ton-Force",
    description: "One short ton-force is the gravitational force on a US short ton (2,000 lb) - exactly 2,000 lbf ≈ 8,896 N. It is used in heavy US industry for hydraulic press force ratings, forging press capacities, crane lift ratings, and bulldozer drawbar pull. US rigging and lifting equipment is rated in short tons. Caution: short ton-force (8,896 N) vs metric tonne-force (9,807 N) vs long ton-force (9,964 N) introduces up to 12% ambiguity when 'ton capacity' is unqualified - a critical safety distinction. 1 short tf = 2,000 lbf = 2 kip = 8,896.44 N.",
    symbol: "tf (US)"
  },
  metricTonForce: {
    name: "Metric Ton-Force",
    description: "One metric tonne-force (tf) is the gravitational force on 1,000 kg under standard gravity - exactly 9,806.65 N = 9.80665 kN. It dominates international heavy engineering: crane hook capacities are rated in tf (a '50-tonne crane' lifts 50 tf = 490.3 kN); ship mooring lines, anchor holding power, and cargo lashing per IMO standards are in tf; hydraulic presses for metal extrusion and stamping in Europe and Asia are rated in tf. ISO 7531 lifting-gear working load limits (WLL) use tf. 1 tf = 1,000 kgf = 9,806.65 N = 2,204.6 lbf.",
    symbol: "tf"
  },
  longTonForce: {
    name: "Long Ton-Force",
    description: "One long ton-force is the gravitational force on an imperial long ton (2,240 lb = 20 × 112 lb hundredweight) - approximately 9,964 N. The long ton was the traditional British ton; long ton-force appears in Royal Navy vessel displacement records, British Admiralty anchor chain standards, pre-metrication UK bridge live load codes, and Australian/South African mining bolt pull-out specifications. It sits between short ton-force (8,896 N) and metric tonne-force (9,807 N) - about 12% heavier than a short ton-force. 1 long tf = 2,240 lbf = 9,964.02 N.",
    symbol: "tf (UK)"
  },
  meganewtons: {
    name: "Meganewton",
    description: "One meganewton (MN) is 10⁶ N ≈ 224,800 lbf - the force scale of rockets, major bridges, and large presses. NASA's SLS Block 1 produces ~35.6 MN combined sea-level thrust. Each suspension cable of the Golden Gate Bridge carries ~350 MN under design load. Aluminium extrusion presses operate at 50-200 MN; the world's largest forging press reaches 750 MN. Offshore jacket platform piles resist wave and mudslide forces in the tens of MN. Seismic base shear on large buildings reaches several MN. Boeing 747 aerodynamic drag at cruise ≈ 0.25 MN. 1 MN = 1,000 kN = 224,809 lbf.",
    symbol: "MN"
  },
  giganewtons: {
    name: "Giganewton",
    description: "One giganewton (GN) is 10⁹ N ≈ 100,000 metric tonnes-force - the scale of geophysically significant forces. Earth-Moon gravitational attraction is ~198 GN, driving tidal forces. The Himalayan collision zone transmits hundreds of GN per km of plate boundary. The Hoover Dam's structural dead load is ~67 GN. For comparison, the entire Saturn V launch thrust was only 33.4 MN = 0.033 GN, illustrating that giganewtons are truly planetary in scale. 1 GN = 1,000 MN = 10⁹ N = 224,800 kips.",
    symbol: "GN"
  },
  teranewtons: {
    name: "Teranewton",
    description: "One teranewton (TN) is 10¹² N - the force scale of plate tectonics and planetary dynamics. Mantle convection drags tectonic plates with 10¹³-10¹⁵ N per plate, putting the plate-driving slab-pull force (~10¹³ N) firmly in the TN range. Mid-ocean ridge lithosphere sustains several TN per km of spreading length in tension. The tidal force differential across Earth's diameter from the Sun is ~4 × 10¹⁷ N = 4 × 10⁵ TN. Proposed megastructures (space elevators, orbital rings) would also require teranewton-scale structural capacity. 1 TN = 1,000 GN = 10¹² N ≈ 10¹¹ kgf.",
    symbol: "TN"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toNewtons);
}

function convertForce() {
  convertFactorBased(toNewtons);
}

initConverterPage();
