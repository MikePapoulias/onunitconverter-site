// Base unit: mole per second (mol/s) - the SI coherent derived unit of molar flow rate.
// All factors express how many mol/s equal 1 unit of the given measure.
//
// Exact foundations:
//   SI prefix multipliers: femto = 1e-15, pico = 1e-12, nano = 1e-9, micro = 1e-6,
//                          milli = 1e-3, kilo = 1e3, mega = 1e6 (all exact, SI definition)
//   1 lb (avoirdupois) = 0.45359237 kg = 453.59237 g (exact, 1959 International Yard and Pound Agreement)
//   1 lb-mol = 453.59237 mol (exact: the lb-mol is defined so that 1 lb-mol of a substance
//              has a mass in pounds equal to its molecular weight in g/mol; ratio = 453.59237 g/lb)
//   1 min = 60 s; 1 h = 3600 s; 1 d = 86400 s (all exact)

const toMolesPerSecond = {
  // -- Femtomoles per time ---------------------------------------------------
  femtomoles_per_second:          1e-15,                                        // exact
  femtomoles_per_minute:          1e-15 / 60,                                   // exact
  femtomoles_per_hour:            1e-15 / 3600,                                 // exact
  // -- Picomoles per time ---------------------------------------------------
  picomoles_per_second:           1e-12,                                        // exact
  picomoles_per_minute:           1e-12 / 60,                                   // exact
  picomoles_per_hour:             1e-12 / 3600,                                 // exact
  picomoles_per_day:              1e-12 / 86400,                                // exact
  // -- Nanomoles per time ---------------------------------------------------
  nanomoles_per_second:           1e-9,                                         // exact
  nanomoles_per_minute:           1e-9 / 60,                                    // exact
  nanomoles_per_hour:             1e-9 / 3600,                                  // exact
  nanomoles_per_day:              1e-9 / 86400,                                 // exact
  // -- Micromoles per time --------------------------------------------------
  micromoles_per_second:          1e-6,                                         // exact
  micromoles_per_minute:          1e-6 / 60,                                    // exact
  micromoles_per_hour:            1e-6 / 3600,                                  // exact
  micromoles_per_day:             1e-6 / 86400,                                 // exact
  // -- Millimoles per time --------------------------------------------------
  millimoles_per_second:          1e-3,                                         // exact
  millimoles_per_minute:          1e-3 / 60,                                    // exact
  millimoles_per_hour:            1e-3 / 3600,                                  // exact
  millimoles_per_day:             1e-3 / 86400,                                 // exact
  // -- Moles per time (SI base) ---------------------------------------------
  moles_per_second:               1,                                            // reference (base unit)
  moles_per_minute:               1 / 60,                                       // exact
  moles_per_hour:                 1 / 3600,                                     // exact
  moles_per_day:                  1 / 86400,                                    // exact
  // -- Pound-moles per time (US process engineering) ------------------------
  pound_moles_per_hour:           453.59237 / 3600,                             // exact: 1 lb-mol = 453.59237 mol; 1 h = 3600 s
  pound_moles_per_day:            453.59237 / 86400,                            // exact
  // -- Kilomoles per time ---------------------------------------------------
  kilomoles_per_second:           1000,                                         // exact
  kilomoles_per_minute:           1000 / 60,                                    // exact
  kilomoles_per_hour:             1000 / 3600,                                  // exact
  kilomoles_per_day:              1000 / 86400,                                 // exact
  // -- Megamoles per time (atmospheric / geochemical scale) -----------------
  megamoles_per_hour:             1e6 / 3600,                                   // exact
  megamoles_per_day:              1e6 / 86400,                                  // exact
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtomoles_per_second: {
    name: "Femtomoles per second",
    description: "The femtomole per second (fmol/s) equals 10\u207b\u00b9\u2075 mol/s, the detection threshold of ultra-sensitive bioanalytical instruments. Modern nano-HPLC-MS systems and chip-based microfluidic biosensors detect enzyme reaction rates and protein-ligand binding kinetics at fmol/s throughput. Single-molecule fluorescence assays and electrochemical biosensors for early cancer biomarkers routinely operate at 0.1-10 fmol/s. 1 fmol/s = 10\u207b\u00b9\u2075 mol/s = 60 fmol/min.",
    symbol: "fmol/s"
  },
  femtomoles_per_minute: {
    name: "Femtomoles per minute",
    description: "The femtomole per minute (fmol/min) equals 10\u207b\u00b9\u2075/60 \u2248 1.667\u00d710\u207b\u00b9\u2077 mol/s, used in microplate enzyme-kinetics assays where the reaction progress over minutes is tracked at sub-picomolar concentrations. High-sensitivity ELISA assays for cytokines and high-affinity receptor-binding studies report rates at fmol/min. 1 fmol/min = 1/60 fmol/s \u2248 1.667\u00d710\u207b\u00b9\u2077 mol/s.",
    symbol: "fmol/min"
  },
  femtomoles_per_hour: {
    name: "Femtomoles per hour",
    description: "The femtomole per hour (fmol/h) equals 10\u207b\u00b9\u2075/3600 \u2248 2.778\u00d710\u207b\u00b9\u2079 mol/s, used in slow biological transport studies such as steroid diffusion across lipid bilayers or mineralisation reactions in nanotribology experiments. Passive permeation tests for drug molecules across synthetic membranes reach detection at fmol/h. 1 fmol/h \u2248 2.778\u00d710\u207b\u00b9\u2079 mol/s.",
    symbol: "fmol/h"
  },
  picomoles_per_second: {
    name: "Picomoles per second",
    description: "The picomole per second (pmol/s) equals 10\u207b\u00b9\u00b2 mol/s, the scale of neurotransmitter release at individual synapses and elution peaks in capillary electrophoresis. Cardiac troponin release from ischaemic myocytes is estimated at 1-10 pmol/s per cell; sub-microlitre continuous-flow microreactors in drug-discovery automation operate at this throughput. 1 pmol/s = 10\u207b\u00b9\u00b2 mol/s = 1000 fmol/s.",
    symbol: "pmol/s"
  },
  picomoles_per_minute: {
    name: "Picomoles per minute",
    description: "The picomole per minute (pmol/min) equals 10\u207b\u00b9\u00b2/60 \u2248 1.667\u00d710\u207b\u00b9\u2074 mol/s, the working unit for radioligand binding assays and surface plasmon resonance (SPR) biosensor chip experiments in pharmacology. Receptor-saturation kinetics studies and piezoelectric microbalance flow-cell experiments are analysed in pmol/min. 1 pmol/min \u2248 1.667\u00d710\u207b\u00b9\u2074 mol/s.",
    symbol: "pmol/min"
  },
  picomoles_per_hour: {
    name: "Picomoles per hour",
    description: "The picomole per hour (pmol/h) equals 10\u207b\u00b9\u00b2/3600 \u2248 2.778\u00d710\u207b\u00b9\u2076 mol/s, used in dermal permeability studies and slow-release pharmaceutical patch bioavailability tests. Passive diffusion of steroid hormones through biological membranes is quantified at pmol/h per cm\u00b2 of membrane area. 1 pmol/h \u2248 2.778\u00d710\u207b\u00b9\u2076 mol/s.",
    symbol: "pmol/h"
  },
  picomoles_per_day: {
    name: "Picomoles per day",
    description: "The picomole per day (pmol/d) equals 10\u207b\u00b9\u00b2/86400 \u2248 1.157\u00d710\u207b\u00b9\u2077 mol/s, applied in clinical biomarker assays for trace hormones and in isotope-dilution pharmacokinetics. Testosterone circulating at very low concentrations (< 5 pmol/L) with a plasma clearance of 5 L/d yields urinary excretion on the pmol/d scale. 1 pmol/d \u2248 1.157\u00d710\u207b\u00b9\u2077 mol/s.",
    symbol: "pmol/d"
  },
  nanomoles_per_second: {
    name: "Nanomoles per second",
    description: "The nanomole per second (nmol/s) equals 10\u207b\u2079 mol/s, the scale of moderate laboratory flow reactions and microreactors in pharmaceutical synthesis. A micro-HPLC column handling a 1 \u03bcM analyte at 1 mL/min delivers \u224816.7 nmol/s; continuous-flow photochemistry reactors in API synthesis routinely reach 10-100 nmol/s throughput. 1 nmol/s = 10\u207b\u2079 mol/s = 60 nmol/min.",
    symbol: "nmol/s"
  },
  nanomoles_per_minute: {
    name: "Nanomoles per minute",
    description: "The nanomole per minute (nmol/min) equals 10\u207b\u2079/60 \u2248 1.667\u00d710\u207b\u00b9\u00b9 mol/s, used for low-activity enzyme assays and transporter-kinetics studies. In vitro drug metabolism studies with human liver microsomes express CYP450 enzyme activity in nmol/min/mg protein; glucuronidation and sulfation rates for xenobiotics are reported in the same units. 1 nmol/min \u2248 1.667\u00d710\u207b\u00b9\u00b9 mol/s.",
    symbol: "nmol/min"
  },
  nanomoles_per_hour: {
    name: "Nanomoles per hour",
    description: "The nanomole per hour (nmol/h) equals 10\u207b\u2079/3600 \u2248 2.778\u00d710\u207b\u00b9\u00b3 mol/s, used in membrane transport kinetics, stable-isotope tracer pharmacokinetics, and slow enzymatic reactions in isolated cells. Urea cycle flux in isolated hepatocytes and copper transport across intestinal epithelia are typically measured in nmol/h per mg protein. 1 nmol/h \u2248 2.778\u00d710\u207b\u00b9\u00b3 mol/s.",
    symbol: "nmol/h"
  },
  nanomoles_per_day: {
    name: "Nanomoles per day",
    description: "The nanomole per day (nmol/d) equals 10\u207b\u2079/86400 \u2248 1.157\u00d710\u207b\u00b9\u2074 mol/s, applied in clinical pharmacokinetics for very-low-dose drug clearance and in environmental geochemistry for slow pore-water diffusive fluxes. Renal excretion of certain steroid metabolites and trace-element urinary clearance in clinical endocrinology are reported in nmol/d. 1 nmol/d \u2248 1.157\u00d710\u207b\u00b9\u2074 mol/s.",
    symbol: "nmol/d"
  },
  micromoles_per_second: {
    name: "Micromoles per second",
    description: "The micromole per second (\u00b5mol/s) equals 10\u207b\u2076 mol/s and is numerically equal to the katal (kat) - the SI unit of catalytic activity. One katal of enzyme converts exactly 1 \u00b5mol of substrate per second; preparative HPLC columns and benchtop continuous-flow synthesis reactors commonly operate at \u00b5mol/s throughput. 1 \u00b5mol/s = 1 \u00b5kat = 10\u207b\u2076 mol/s = 60 \u00b5mol/min.",
    symbol: "\u00b5mol/s"
  },
  micromoles_per_minute: {
    name: "Micromoles per minute",
    description: "The micromole per minute (\u00b5mol/min) equals 10\u207b\u2076/60 \u2248 1.667\u00d710\u207b\u2078 mol/s, the dominant enzyme-activity unit in biochemistry (1 \u00b5mol/min = 1 International Unit of enzyme activity). Spectrophotometric Vmax determinations, blood glucose consumption by the resting brain (\u224812 \u00b5mol/min), and HPLC fraction collector outputs are expressed in \u00b5mol/min. 1 \u00b5mol/min = 1/60 \u00b5kat \u2248 1.667\u00d710\u207b\u2078 mol/s.",
    symbol: "\u00b5mol/min"
  },
  micromoles_per_hour: {
    name: "Micromoles per hour",
    description: "The micromole per hour (\u00b5mol/h) equals 10\u207b\u2076/3600 \u2248 2.778\u00d710\u207b\u00b9\u2070 mol/s, used for photosynthesis gas-exchange measurements, soil respiration CO\u2082 efflux, and slow metabolic pathway fluxes. Leaf gas analysers (LI-COR, WALZ) report CO\u2082 assimilation in \u00b5mol/h; plant root nutrient uptake studies use \u00b5mol/h/g fresh weight. 1 \u00b5mol/h \u2248 2.778\u00d710\u207b\u00b9\u2070 mol/s.",
    symbol: "\u00b5mol/h"
  },
  micromoles_per_day: {
    name: "Micromoles per day",
    description: "The micromole per day (\u00b5mol/d) equals 10\u207b\u2076/86400 \u2248 1.157\u00d710\u207b\u00b9\u00b9 mol/s, applied in clinical nutrition for micronutrient metabolism and in environmental geochemistry for slow pore-water diffusive fluxes. Iron absorption in the human gut is typically 50-200 \u00b5mol/d; zinc urinary excretion is 60-80 \u00b5mol/d under normal dietary conditions. 1 \u00b5mol/d \u2248 1.157\u00d710\u207b\u00b9\u00b9 mol/s.",
    symbol: "\u00b5mol/d"
  },
  millimoles_per_second: {
    name: "Millimoles per second",
    description: "The millimole per second (mmol/s) equals 10\u207b\u00b3 mol/s, used in mid-scale continuous-flow chemistry and laboratory reactor design. A syringe pump delivering 10 mL/min of a 6 mmol/L reagent solution delivers 1 mmol/s to the reactor; 1 mmol/s is also the millicatalytic unit (mkat) used as an aggregate activity measure in industrial bioprocess monitoring. 1 mmol/s = 10\u207b\u00b3 mol/s = 3.6 mol/h.",
    symbol: "mmol/s"
  },
  millimoles_per_minute: {
    name: "Millimoles per minute",
    description: "The millimole per minute (mmol/min) equals 10\u207b\u00b3/60 \u2248 1.667\u00d710\u207b\u2075 mol/s, the practical unit for metabolic flux in perfused organ systems and for HPLC column loading on preparative scale. A resting human heart consumes \u22483 mmol O\u2082/min via aerobic metabolism; continuous-flow reaction calorimeters for process safety studies operate at mmol/min feed rates. 1 mmol/min \u2248 1.667\u00d710\u207b\u2075 mol/s.",
    symbol: "mmol/min"
  },
  millimoles_per_hour: {
    name: "Millimoles per hour",
    description: "The millimole per hour (mmol/h) equals 10\u207b\u00b3/3600 \u2248 2.778\u00d710\u207b\u2077 mol/s, standard in clinical chemistry for urine excretion reporting and parenteral nutrition inputs. Creatinine clearance in healthy kidneys averages 8-12 mmol/h; intravenous potassium infusion is clinically limited to \u226410 mmol/h to avoid cardiac arrhythmia. 1 mmol/h \u2248 2.778\u00d710\u207b\u2077 mol/s.",
    symbol: "mmol/h"
  },
  millimoles_per_day: {
    name: "Millimoles per day",
    description: "The millimole per day (mmol/d) equals 10\u207b\u00b3/86400 \u2248 1.157\u00d710\u207b\u2078 mol/s, the dominant unit in clinical nutrition and electrolyte balance assessment. Daily recommended intakes: sodium 60-100 mmol/d, potassium 50-70 mmol/d, calcium 20-25 mmol/d. Serum osmolality budgets and 24-hour urine ion excretion panels are routinely reported in mmol/d. 1 mmol/d \u2248 1.157\u00d710\u207b\u2078 mol/s.",
    symbol: "mmol/d"
  },
  moles_per_second: {
    name: "Moles per second",
    description: "The mole per second (mol/s) is the SI coherent derived unit of molar flow rate, numerically equal to the katal (kat) for catalytic activity contexts. Industrial ammonia synthesis (Haber-Bosch) produces \u224850 mol/s of NH\u2083 per tonne/h output; a large turbine combustion chamber burns natural gas at \u2248500 mol/s of CH\u2084. It is the reference unit in process simulation mass balances. 1 mol/s = 3 600 mol/h = 60 mol/min.",
    symbol: "mol/s"
  },
  moles_per_minute: {
    name: "Moles per minute",
    description: "The mole per minute (mol/min) equals 1/60 mol/s \u2248 0.01667 mol/s, used in process development when studying batch-to-continuous reaction scale-up. A semi-batch neutralisation reactor discharging at 60 mmol/s corresponds to 3.6 mol/min of acid added; microwave-assisted flow reactors for fine-chemical synthesis operate at similar rates. 1 mol/min = 1/60 mol/s = 60 mol/h.",
    symbol: "mol/min"
  },
  moles_per_hour: {
    name: "Moles per hour",
    description: "The mole per hour (mol/h) equals 1/3600 mol/s \u2248 2.778\u00d710\u207b\u2074 mol/s, practical for pilot-plant flow chemistry, laboratory gas manifold flow, and hydrogen production by small electrolysers. A 1 kW alkaline electrolyser at 100% Faradaic efficiency produces \u224818 mol H\u2082/h; bench-scale packed-bed reactors handle feed rates in mol/h. 1 mol/h \u2248 2.778\u00d710\u207b\u2074 mol/s \u2248 0.002205 lb-mol/h.",
    symbol: "mol/h"
  },
  moles_per_day: {
    name: "Moles per day",
    description: "The mole per day (mol/d) equals 1/86400 \u2248 1.157\u00d710\u207b\u2075 mol/s, used in environmental biogeochemistry, pharmaceutical pharmacokinetics, and slow-rate industrial processes. A deciduous tree assimilates 100-400 mol CO\u2082/d on a sunny summer day; a resting adult produces \u22481 200 mol CO\u2082/d through cellular respiration. 1 mol/d \u2248 1.157\u00d710\u207b\u2075 mol/s \u2248 0.04167 mol/h.",
    symbol: "mol/d"
  },
  pound_moles_per_hour: {
    name: "Pound-moles per hour",
    description: "The pound-mole per hour (lb-mol/h) equals 453.59237/3600 \u2248 0.12600 mol/s, the standard molar flow unit in US chemical process engineering simulation (Aspen Plus, HYSYS, Pro/II). Distillation column feed rates, reactor effluent streams, and compressor suction flows are universally expressed in lb-mol/h in US petrochemical and refinery design. 1 lb-mol/h = 453.59237/3600 mol/s \u2248 0.12600 mol/s \u2248 0.4536 kmol/h.",
    symbol: "lb-mol/h"
  },
  pound_moles_per_day: {
    name: "Pound-moles per day",
    description: "The pound-mole per day (lb-mol/d) equals 453.59237/86400 \u2248 5.249\u00d710\u207b\u00b3 mol/s, used for daily material-balance reconciliation in US petroleum refineries and chemical plants. Process computer logs accumulate flow integrals as lb-mol/d; pipeline natural-gas custody-transfer accounting also uses lb-mol/d figures in US contracts. 1 lb-mol/d \u2248 5.249\u00d710\u207b\u00b3 mol/s = 453.59 mol/d.",
    symbol: "lb-mol/d"
  },
  kilomoles_per_second: {
    name: "Kilomoles per second",
    description: "The kilomole per second (kmol/s) equals 1 000 mol/s, characterising the very largest industrial chemical processes. A world-scale ammonia synthesis plant produces \u22483 kmol/s of NH\u2083; a large steam methane reformer converts natural gas at \u224810 kmol/s. It is the preferred unit in European process simulation when outputs are in the thousands of tonnes per day. 1 kmol/s = 1 000 mol/s = 3 600 kmol/h.",
    symbol: "kmol/s"
  },
  kilomoles_per_minute: {
    name: "Kilomoles per minute",
    description: "The kilomole per minute (kmol/min) equals 1000/60 \u2248 16.667 mol/s, an intermediate unit used when converting kmol/h datasheets to per-second rates in dynamic process simulations. Control engineers working with fast-responding reactors and pipeline compressor station models use kmol/min for transient mass-balance calculations. 1 kmol/min \u2248 16.667 mol/s = 60 kmol/h.",
    symbol: "kmol/min"
  },
  kilomoles_per_hour: {
    name: "Kilomoles per hour",
    description: "The kilomole per hour (kmol/h) equals 1000/3600 \u2248 0.27778 mol/s, the dominant molar flow unit in European and international process engineering. Equipment datasheets for distillation columns, heat exchangers, compressors, and chemical reactors all specify flows in kmol/h. A 500 MW gas turbine power plant burns natural gas at \u224850-80 kmol/h. 1 kmol/h \u2248 0.27778 mol/s \u2248 2.205 lb-mol/h.",
    symbol: "kmol/h"
  },
  kilomoles_per_day: {
    name: "Kilomoles per day",
    description: "The kilomole per day (kmol/d) equals 1000/86400 \u2248 0.011574 mol/s, used for daily material balance and inventory tracking in chemical manufacturing and environmental reporting. A medium-scale industrial electrolysis plant can produce 500-2 000 kmol Cl\u2082/d; industrial CO\u2082 capture units track absorption throughput in kmol/d. 1 kmol/d \u2248 0.011574 mol/s \u2248 0.4167 kmol/h.",
    symbol: "kmol/d"
  },
  megamoles_per_hour: {
    name: "Megamoles per hour",
    description: "The megamole per hour (Mmol/h) equals 10\u2076/3600 \u2248 277.78 mol/s, used for atmospheric chemistry flux estimates and mega-scale industrial chemical throughput. Global annual CO\u2082 emissions of \u224837 Gt/year correspond to \u224824 Mmol/h; the global ammonia industry produces \u2248190 million tonnes/year of NH\u2083, equivalent to \u224862 Mmol/h. 1 Mmol/h = 10\u2076/3600 mol/s \u2248 277.78 mol/s.",
    symbol: "Mmol/h"
  },
  megamoles_per_day: {
    name: "Megamoles per day",
    description: "The megamole per day (Mmol/d) equals 10\u2076/86400 \u2248 11.574 mol/s, encountered in global biogeochemical cycle research and the largest industrial chemical operations. Ocean-atmosphere CO\u2082 exchange is estimated at 600-900 Mmol/d; terrestrial gross primary production consumes approximately 700 Mmol/d of CO\u2082; continental-scale methane budgets use the same unit. 1 Mmol/d \u2248 11.574 mol/s \u2248 41.67 kmol/h.",
    symbol: "Mmol/d"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toMolesPerSecond);
}

function convertFlowMolar() {
  convertFactorBased(toMolesPerSecond);
}

initConverterPage();
