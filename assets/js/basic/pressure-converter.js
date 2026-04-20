const toPascals = {
  nanopascals:             1e-9,
  micropascals:            1e-6,
  millipascals:            1e-3,
  barye:                   0.1,
  pascals:                 1,
  millimetersOfWater:      9.80665,
  poundsPerSquareFoot:     47.88025898033333,
  centimetersOfWater:      98.0665,
  millibars:               100,
  hectopascals:            100,
  millimetersOfMercury:    133.322387415,
  torr:                    133.3223684210526,
  inchesOfWater:           249.08891,
  kilopascals:             1000,
  centimetersOfMercury:    1333.22387415,
  feetOfWater:             2989.06692,
  inchesOfMercury:         3386.388640341,
  poundsPerSquareInch:     6894.757293168361,
  technicalAtmospheres:    98066.5,
  bars:                    100000,
  standardAtmospheres:     101325,
  megapascals:             1e6,
  kilopoundsPerSquareInch: 6894757.293168361,
  kilobars:                1e8,
  gigapascals:             1e9,
  terapascals:             1e12,
  petapascals:             1e15,
};

// Unit descriptions
const unitDescriptions = {
  nanopascals: {
    name: "Nanopascal",
    description: "A nanopascal (nPa) is 10⁻⁹ Pa - the pressure scale of deep interplanetary space. LIGO and Virgo gravitational wave detectors must isolate mirror displacement signals against noise floors in the nanopascal regime. Low Earth orbit residual atmosphere is ~100 µPa; deep interplanetary space is ~1-10 nPa depending on solar wind activity. Thermospheric gas layers above 200 km altitude fall into the nPa-µPa range. Casimir force calculations and quantum vacuum fluctuation modelling also operate at nanopascal scales. 1 nPa = 10⁻⁹ Pa.",
    symbol: "nPa"
  },
  micropascals: {
    name: "Micropascal",
    description: "A micropascal (µPa) is 10⁻⁶ Pa - the standard reference unit for sound pressure levels in acoustics. The threshold of human hearing in air is 20 µPa, which defines 0 dB SPL; underwater acoustics uses 1 µPa as its reference (0 dB re 1 µPa). Blue whale calls reach ~189 dB re 1 µPa at source. Industrial noise regulations, architectural acoustics, and loudspeaker sensitivity specifications all trace back to µPa reference levels. Solar wind pressure near Earth averages ~1-6 nPa, rising to hundreds of µPa during major solar storms. 1 µPa = 10⁻⁶ Pa.",
    symbol: "µPa"
  },
  millipascals: {
    name: "Millipascal",
    description: "A millipascal (mPa) is 10⁻³ Pa. It appears primarily in rheology as the millipascal-second (mPa·s = centipoise) for dynamic viscosity: water at 20°C is 1.002 mPa·s; olive oil ~80 mPa·s; honey 2,000-10,000 mPa·s. Food technology, polymer processing, pharmaceutical formulation, and inkjet printing all specify flow behaviour in mPa·s. Partial pressures of trace atmospheric gases and ultra-high-vacuum leak rates measured by residual gas analysers are also expressed in millipascals. 1 mPa = 10⁻³ Pa.",
    symbol: "mPa"
  },
  barye: {
    name: "Barye",
    description: "The barye (Ba) is the CGS unit of pressure - 1 dyne/cm² = exactly 0.1 Pa = 1 µbar. Standard atmosphere = 1,013,250 Ba. It dominated physics and laboratory science from the mid-19th century until SI adoption. Legacy acoustic CGS literature used 1 barye (0.1 Pa) as the underwater reference pressure, creating a 100 dB offset versus the modern 1 µPa reference - a critical correction when comparing historical and modern underwater acoustics databases. Still encountered in classical fluid mechanics derivations and early 20th-century meteorological literature. 1 Ba = 0.1 Pa.",
    symbol: "Ba"
  },
  pascals: {
    name: "Pascal",
    description: "The pascal (Pa) is the SI unit of pressure - 1 N/m², named after Blaise Pascal (1623-1662). Standard sea-level atmosphere ≈ 101,325 Pa. One pascal is very small: roughly the pressure of a single banknote lying flat. Pascal is simultaneously the SI unit for mechanical stress and elastic modulus: structural steel Young's modulus ~200 GPa; rubber shear modulus ~0.5 MPa. Used universally in fluid mechanics, acoustics, atmospheric science, and materials engineering. 1 Pa = 1 N/m².",
    symbol: "Pa"
  },
  millimetersOfWater: {
    name: "Millimeter of Water",
    description: "One millimetre of water column (mmH₂O) = pressure from 1 mm of fresh water at standard gravity = exactly 9.80665 Pa. Preferred for very low differential pressures in HVAC: ductwork static pressures, fan curves, filter resistance, and building pressurisation are in mm WC. Gas valve operating pressures are typically 0.5-3 mm WC; clean-room cascade differentials 12-25 mm WC. A domestic gas hob manifold operates at ~20 mm WC on natural gas. Also used in spirometer calibration and hospital oxygen delivery systems. 1 mmH₂O = 9.80665 Pa.",
    symbol: "mmH₂O"
  },
  poundsPerSquareFoot: {
    name: "Pound per Square Foot",
    description: "One pound per square foot (psf) ≈ 47.88 Pa - the standard structural engineering load unit in US practice. Building codes specify design loads in psf: residential floors 40 psf; office buildings 50-80 psf; assembly areas 100+ psf; snow loads can exceed 100 psf. Wind pressure on building facades, soil bearing capacity for shallow foundations, and lateral earth pressure in retaining walls are all in psf. The related unit ksf (1,000 psf = 47.88 kPa) covers higher-capacity soils and deep foundations. 1 psf = 47.88 Pa.",
    symbol: "lbf/ft²"
  },
  centimetersOfWater: {
    name: "Centimeter of Water",
    description: "One centimetre of water column (cmH₂O) ≈ 98.07 Pa - the clinical pressure unit for respiratory and intravascular measurements. Mechanical ventilator settings are in cmH₂O: peak inspiratory pressure (PIP) 15-30 cmH₂O; PEEP 5-15 cmH₂O; plateau pressure should stay below 30 cmH₂O to avoid lung injury. Lumbar puncture CSF opening pressure is normally 8-20 cmH₂O. CPAP/BiPAP therapy for sleep apnea: 4-20 cmH₂O. Central venous pressure is also reported in cmH₂O. 1 cmH₂O = 98.0665 Pa.",
    symbol: "cmH₂O"
  },
  millibars: {
    name: "Millibar",
    description: "A millibar (mbar) = 100 Pa = 1 hPa - the historically dominant meteorological pressure unit. Standard sea-level pressure is 1013.25 mbar. Hurricane intensity is characterised by central pressure: Category 5 storms typically below 920 mbar (US record: 892 mbar, 1935). Upper-air analysis levels - 850, 700, 500, 300, 200 mbar - appear throughout decades of archived meteorological data. Aircraft cabins are pressurised to ~750-800 mbar at cruise altitude. 'Weather bombs' see pressure fall 24+ mbar in 24 hours. 1 mbar = 100 Pa.",
    symbol: "mbar"
  },
  hectopascals: {
    name: "Hectopascal",
    description: "A hectopascal (hPa) = 100 Pa = 1 mbar - the WMO-official SI-compatible meteorological pressure unit since 1986, replacing millibar with no numerical change. All modern surface observations (METAR, SYNOP), digital barometers, aviation weather, and weather apps report in hPa. QNH altimeter settings outside North America are in hPa. ICAO standard sea-level pressure is 1013.25 hPa. Continental high-pressure record exceeds 1084 hPa; Typhoon Tip (1979) holds the low record at ~870 hPa. 1 hPa = 100 Pa.",
    symbol: "hPa"
  },
  millimetersOfMercury: {
    name: "Millimeter of Mercury",
    description: "One millimetre of mercury (mmHg) = pressure from 1 mm of mercury at 0°C and standard gravity = 133.322 Pa. Clinical medicine worldwide uses mmHg for blood pressure (normal ~120/80 mmHg) and for gas partial pressures in physiology: arterial O₂ ~95-100 mmHg; CO₂ ~40 mmHg; alveolar O₂ ~104 mmHg. Ophthalmologists measure intraocular pressure in mmHg (normal 10-21; glaucoma risk above 21). Vacuum equipment ratings are also given in mmHg. 760 mmHg = 1 atm. 1 mmHg = 133.322 Pa.",
    symbol: "mmHg"
  },
  torr: {
    name: "Torr",
    description: "The torr is defined as exactly 1/760 of a standard atmosphere ≈ 133.322 Pa - effectively replacing mmHg with an exact definition. Named after Evangelista Torricelli (1608-1647), inventor of the barometer. Vacuum science universally uses torr: rough vacuum 760-1 torr; medium vacuum 1-10⁻³ torr; high vacuum 10⁻³-10⁻⁷ torr; ultra-high vacuum below 10⁻⁹ torr. UHV systems for surface science, particle accelerator beam tubes, and space simulation chambers reach 10⁻¹¹-10⁻¹² torr. 1 torr = 133.322 Pa.",
    symbol: "Torr"
  },
  inchesOfWater: {
    name: "Inch of Water",
    description: "One inch of water column (inH₂O or in WC) = pressure from 1 inch of fresh water at standard gravity ≈ 249.09 Pa. The standard unit for low-pressure measurement in US HVAC and plumbing: ductwork static pressure, fan performance, filter ratings, and gas appliance manifold pressures are all specified in inches WC. Household natural gas supply pressure is typically 7 in WC (0.25 psi). Blower door tests for building air-tightness use 50 Pa ≈ 0.2 in WC test pressure. 1 inH₂O = 249.089 Pa.",
    symbol: "inH₂O"
  },
  kilopascals: {
    name: "Kilopascal",
    description: "A kilopascal (kPa) = 1,000 Pa - the practical everyday SI pressure unit for moderate pressures. Car tyre inflation: 200-250 kPa (29-36 psi); truck tyres 550-830 kPa. Blood pressure in SI countries: 16/10.7 kPa (= 120/80 mmHg). Systolic blood pressure 16 kPa. Carbonated beverages are packaged at 200-500 kPa CO₂. Medical oxygen cylinders at 15,000 kPa; scuba cylinders 200-300 bar = 20,000-30,000 kPa. 1 kPa = 1,000 Pa = 0.01 bar = 0.145 psi.",
    symbol: "kPa"
  },
  centimetersOfMercury: {
    name: "Centimeter of Mercury",
    description: "One centimetre of mercury (cmHg) = 10 mmHg ≈ 1,333.22 Pa. Historical medical and physiological literature used cmHg for intracardiac and intravascular pressures before mmHg became universal. Left ventricular systolic pressure ~12 cmHg; pulmonary artery systolic 2-3 cmHg. Some older European cardiological textbooks and pre-1970s surgical literature report pressures in cmHg. Central venous pressure, cerebral perfusion pressure, and intra-abdominal pressure are occasionally cited in cmHg in legacy datasets. 1 cmHg = 1,333.22 Pa.",
    symbol: "cmHg"
  },
  feetOfWater: {
    name: "Foot of Water",
    description: "One foot of water column (ftH₂O) ≈ 2,989 Pa - the US customary equivalent of cmH₂O used in civil and hydraulic engineering. Municipal water supply systems are designed for 40-80 psi head ≈ 92-184 ft; fire suppression sprinkler systems require minimum 7 psi ≈ 16 ft. Well pump specifications, sump pump head ratings, irrigation mainline pressure, and drainage calculations all use feet of head. 1 ft of water = 12 in WC = 0.4335 psi ≈ 2,989 Pa.",
    symbol: "ftH₂O"
  },
  inchesOfMercury: {
    name: "Inch of Mercury",
    description: "One inch of mercury (inHg) ≈ 3,386 Pa - the primary barometric pressure unit in US aviation and meteorology. ASOS weather stations, METARs, and altimeter settings in the US report in inHg. Standard sea-level pressure is 29.92 inHg. Altimeters are set to local QNH in inHg to maintain altitude reference. US barometers for home weather stations display inHg. Typical pressure range: 28.5-31.0 inHg in continental weather systems. Record low: ~25.70 inHg (Typhoon Tip, 1979). 1 inHg = 3,386.39 Pa.",
    symbol: "inHg"
  },
  poundsPerSquareInch: {
    name: "Pound per Square Inch",
    description: "One pound per square inch (psi) ≈ 6,894.76 Pa - the dominant pressure unit in US industry and consumer products. Car tyres: 32-36 psi; truck tyres 80-120 psi; bicycle road tyres 80-130 psi. Home water supply: 40-80 psi; residential maximum 80 psi per plumbing code. Compressed air tools: 90-150 psi. Steam autoclave sterilisation: 15-30 psi. The distinction between gauge (psig) and absolute (psia) pressure is critical: gauge pressure is relative to ambient; absolute = gauge + ~14.696 psi. 1 psi = 6,894.76 Pa.",
    symbol: "psi"
  },
  technicalAtmospheres: {
    name: "Technical Atmosphere",
    description: "One technical atmosphere (at) = exactly 1 kgf/cm² = 98,066.5 Pa ≈ 0.968 standard atmospheres. The metric technical pressure unit used in pre-SI European and Japanese engineering for boilers, hydraulic cylinders, and compressed gas systems. A steam boiler at 10 at operates at 0.981 MPa; hydraulic presses are rated at 200-600 at. Still used parenthetically in old German and Japanese machinery manuals and standards (DIN 1301-3 legacy). Converts simply from kgf/cm²: 1 at ≡ 1 kgf/cm². 1 at = 98,066.5 Pa.",
    symbol: "at"
  },
  bars: {
    name: "Bar",
    description: "A bar = exactly 100,000 Pa ≈ 0.987 atm - the world standard for industrial pressure outside North America. Hydraulic systems, pneumatic equipment, gas cylinders, dive computers, and tyre gauges in Europe and Asia use bar. Scuba diving: +1 bar per 10 m depth; at 40 m recreational limit = 5 bar absolute. European tyre pressure labels show bar alongside kPa. Industrial processes: steam at 10-50 bar; high-pressure reactors 100-300 bar; water-jet cutting 1,000-4,000 bar. 1 bar = 100,000 Pa = 14.504 psi.",
    symbol: "bar"
  },
  standardAtmospheres: {
    name: "Standard Atmosphere",
    description: "The standard atmosphere (atm) = exactly 101,325 Pa - defined by the 10th CGPM (1954) as the reference air pressure at sea level. Used to define STP (0°C and 1 atm) for gas law and thermochemistry. Chemical equilibrium constants (Kp), Henry's law solubility, and thermodynamic tables are tabulated at 1 atm. ISA aviation standard: sea-level 1 atm / 15°C, pressure halving every ~5.5 km. Diving physics: +1 atm per 10 m depth (fresh water) so 30 m = 4 atm absolute. Diamond formation in Earth's mantle: ~50,000 atm. 1 atm = 101,325 Pa.",
    symbol: "atm"
  },
  megapascals: {
    name: "Megapascal",
    description: "A megapascal (MPa) = 10⁶ Pa = 10 bar - standard unit for mechanical stress, material strength, and high-pressure engineering. Structural material yield strengths: mild steel 250-550 MPa; high-strength steel to 2,000 MPa; carbon fibre composites 1,500-7,000 MPa tensile. Hydraulic press pressures 50-200 MPa. Mariana Trench floor ~110 MPa. Concrete compressive strength: 25-40 MPa (normal); up to 150 MPa (high-performance). Water-jet cutting: 200-600 MPa. Elastic moduli in FEM analysis are in MPa or GPa. 1 MPa = 10⁶ Pa = 145.0 psi.",
    symbol: "MPa"
  },
  kilopoundsPerSquareInch: {
    name: "Kilopound per Square Inch (KSI)",
    description: "One ksi (kilopound per square inch) = 1,000 psi ≈ 6.895 MPa - the standard engineering stress unit in the US. ASTM A36 structural steel: 36 ksi yield, 58-80 ksi tensile. ASTM A325 high-strength bolts: 92 ksi proof load. AISC steel construction tables, FAA/MIL-SPEC aerospace allowables, and ASME Section VIII pressure vessel design all use ksi. Fracture toughness (K_IC) for steels: 50-200 ksi·√in. Convenient because it keeps large structural stresses as manageable 3-digit numbers. 1 ksi = 6.895 MPa.",
    symbol: "ksi"
  },
  kilobars: {
    name: "Kilobar",
    description: "A kilobar (kbar) = 1,000 bar = 100 MPa = 10⁸ Pa - standard in high-pressure geophysics and experimental petrology. Earth mantle phase transitions: olivine → wadsleyite at ~130-140 kbar (410 km depth); post-spinel transition at ~230 kbar (660 km). Diamond anvil cells routinely reach 100-400 kbar for materials synthesis and equation-of-state measurement. High-pressure synthesis of cubic boron nitride (~50 kbar) and superhard materials uses large-volume presses. Explosive shock pressures for mining and demolition: 100-1,000 kbar. 1 kbar = 100 MPa.",
    symbol: "kbar"
  },
  gigapascals: {
    name: "Gigapascal",
    description: "A gigapascal (GPa) = 10⁹ Pa = 10 kbar - the extreme-pressure unit for materials science and planetary physics. Bulk moduli: fused silica 72 GPa; iron 170 GPa; diamond 442 GPa (highest known). Earth's inner core: 330-360 GPa. Jupiter's core: ~40,000-70,000 GPa. NIF laser-shocked experiments create 100-100,000 GPa to reproduce planetary interior conditions. Metallic hydrogen is predicted to form above ~500 GPa and has been tentatively observed at 400-500 GPa in diamond anvil cells. 1 GPa = 10⁹ Pa = 10 kbar.",
    symbol: "GPa"
  },
  terapascals: {
    name: "Terapascal",
    description: "A terapascal (TPa) = 10¹² Pa = 10 Mbar - pressures in giant planet cores and at the frontier of high-energy-density physics. Jupiter's centre: ~40-70 TPa; Saturn's: ~10 TPa. Earth's inner core: ~0.35 TPa; core-mantle boundary: ~0.14 TPa. Laser-driven ramp and shock compression at NIF approaches TPa regimes for fusion implosion capsule research. Hydrogen is predicted to become a superconducting metal at ~0.5-5 TPa. Understanding TPa equations of state is critical for modelling exoplanet interiors. 1 TPa = 10¹² Pa.",
    symbol: "TPa"
  },
  petapascals: {
    name: "Petapascal",
    description: "A petapascal (PPa) = 10¹⁵ Pa - pressures found in stellar interiors. The Sun's centre is ~25 PPa, sustained by radiation pressure from nuclear fusion balanced against gravity. White dwarf stars: ~10⁴ PPa (electron degeneracy). Neutron stars: ~10⁹-10¹⁰ PPa, where nuclear structure fails and neutrons drip from nuclei at ~4 × 10⁸ PPa (the neutron drip line). The hadron-quark phase transition in the densest neutron star cores is estimated at 10¹⁰-10¹² PPa. No laboratory experiment can approach petapascal pressures. 1 PPa = 10¹⁵ Pa.",
    symbol: "PPa"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toPascals);
}

function convertPressure() {
  convertFactorBased(toPascals);
}

initConverterPage();
