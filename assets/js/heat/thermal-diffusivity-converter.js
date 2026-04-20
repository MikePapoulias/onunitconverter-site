// Base unit: square metre per second (m\u00b2/s) - SI derived unit for thermal diffusivity.
// All factors express how many m\u00b2/s equal 1 unit of the given measure.
//
// Exact foundations:
//   1 mm = 1e-3 m (exact)  \u2192 1 mm\u00b2 = 1e-6 m\u00b2 (exact)
//   1 cm = 1e-2 m (exact)  \u2192 1 cm\u00b2 = 1e-4 m\u00b2 (exact)
//   1 dm = 1e-1 m (exact)  \u2192 1 dm\u00b2 = 1e-2 m\u00b2 (exact)
//   1 in = 0.0254 m (exact) \u2192 1 in\u00b2 = 0.00064516 m\u00b2 (exact)
//   1 ft = 0.3048 m (exact) \u2192 1 ft\u00b2 = 0.09290304 m\u00b2 (exact)
//   1 min = 60 s (exact)
//   1 h   = 3600 s (exact)

const toSquareMetresPerSecond = {
  square_millimetres_per_hour:    1e-6 / 3600,              // exact: 1 mm\u00b2 = 1e-6 m\u00b2; 1 h = 3600 s
  square_millimetres_per_minute:  1e-6 / 60,                // exact: 1 mm\u00b2 = 1e-6 m\u00b2; 1 min = 60 s
  square_centimetres_per_hour:    1e-4 / 3600,              // exact: 1 cm\u00b2 = 1e-4 m\u00b2; 1 h = 3600 s
  square_inches_per_hour:         0.00064516 / 3600,        // exact: 1 in\u00b2 = 0.00064516 m\u00b2; 1 h = 3600 s
  square_millimetres_per_second:  1e-6,                     // exact: 1 mm\u00b2 = 1e-6 m\u00b2
  square_centimetres_per_minute:  1e-4 / 60,                // exact: 1 cm\u00b2 = 1e-4 m\u00b2; 1 min = 60 s
  square_inches_per_minute:       0.00064516 / 60,          // exact: 1 in\u00b2 = 0.00064516 m\u00b2; 1 min = 60 s
  square_feet_per_hour:           0.09290304 / 3600,        // exact: 1 ft\u00b2 = 0.09290304 m\u00b2; 1 h = 3600 s
  square_centimetres_per_second:  1e-4,                     // exact: 1 cm\u00b2 = 1e-4 m\u00b2
  square_metres_per_hour:         1 / 3600,                 // exact: 1 m\u00b2; 1 h = 3600 s
  square_inches_per_second:       0.00064516,               // exact: 1 in\u00b2 = 0.00064516 m\u00b2
  square_feet_per_minute:         0.09290304 / 60,          // exact: 1 ft\u00b2 = 0.09290304 m\u00b2; 1 min = 60 s
  square_decimetres_per_second:   1e-2,                     // exact: 1 dm\u00b2 = 1e-2 m\u00b2
  square_metres_per_minute:       1 / 60,                   // exact: 1 m\u00b2; 1 min = 60 s
  square_feet_per_second:         0.09290304,               // exact: 1 ft\u00b2 = 0.09290304 m\u00b2
  square_metres_per_second:       1,                        // reference unit (SI base)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  square_millimetres_per_hour: {
    name: "Square millimetres per hour",
    description: "The square millimetre per hour (mm\u00b2/h) equals 1/3 600 000 000 m\u00b2/s, the smallest practical thermal diffusivity unit. It is used in very slow heat-transfer processes such as diffusion through frozen soils or phase-change materials studied over many hours. Heavy clay soils can show diffusivity values of 1-2 mm\u00b2/h. 1 mm\u00b2/h = 1e-6/3600 m\u00b2/s.",
    symbol: "mm\u00b2/h"
  },
  square_millimetres_per_minute: {
    name: "Square millimetres per minute",
    description: "The square millimetre per minute (mm\u00b2/min) equals 1/60 000 000 m\u00b2/s. It appears in material testing standards where thermal diffusivity of polymers and composites is measured over minute-scale heating pulses. ASTM and ISO laser-flash methods sometimes report in mm\u00b2/min as an intermediate step. 1 mm\u00b2/min = 1e-6/60 m\u00b2/s \u2248 1.667 \u00d7 10\u207b\u00b8 m\u00b2/s.",
    symbol: "mm\u00b2/min"
  },
  square_centimetres_per_hour: {
    name: "Square centimetres per hour",
    description: "The square centimetre per hour (cm\u00b2/h) equals 1/36 000 000 m\u00b2/s. Environmental geophysicists use cm\u00b2/h when measuring heat flow in sedimentary rock columns or permafrost layers. Granite has a diffusivity of \u224836 cm\u00b2/h; dry sand \u22489 cm\u00b2/h. 1 cm\u00b2/h = 1e-4/3600 m\u00b2/s \u2248 2.778 \u00d7 10\u207b\u2078 m\u00b2/s.",
    symbol: "cm\u00b2/h"
  },
  square_inches_per_hour: {
    name: "Square inches per hour",
    description: "The square inch per hour (in\u00b2/h) equals \u22481.792 \u00d7 10\u207b\u2077 m\u00b2/s, used in US heat-transfer handbooks and HVAC insulation specifications. Pre-SI tables for building insulation board and refractory brick often list thermal diffusivity in in\u00b2/h. Firebrick: \u22483.5 in\u00b2/h; rigid foam: \u22480.8-1.2 in\u00b2/h. 1 in\u00b2/h = 0.00064516/3600 m\u00b2/s.",
    symbol: "in\u00b2/h"
  },
  square_millimetres_per_second: {
    name: "Square millimetres per second",
    description: "The square millimetre per second (mm\u00b2/s) equals 1 \u00d7 10\u207b\u2076 m\u00b2/s and is the standard unit in materials engineering and the laser-flash diffusivity method (ASTM E1461, ISO 22007-4). Metals span roughly 2-180 mm\u00b2/s; polymers 0.07-0.2 mm\u00b2/s; ceramics 0.3-10 mm\u00b2/s. Numerically identical to the kinematic viscosity unit (cSt) in SI context. 1 mm\u00b2/s = 1 \u00d7 10\u207b\u2076 m\u00b2/s.",
    symbol: "mm\u00b2/s"
  },
  square_centimetres_per_minute: {
    name: "Square centimetres per minute",
    description: "The square centimetre per minute (cm\u00b2/min) equals \u22481.667 \u00d7 10\u207b\u2076 m\u00b2/s, a transitional unit seen in older French and Soviet thermal engineering literature. Some food-science papers on heat penetration into frozen products express diffusivity in cm\u00b2/min to keep values close to unity. 1 cm\u00b2/min = 1e-4/60 m\u00b2/s \u2248 1.667 \u00d7 10\u207b\u2076 m\u00b2/s.",
    symbol: "cm\u00b2/min"
  },
  square_inches_per_minute: {
    name: "Square inches per minute",
    description: "The square inch per minute (in\u00b2/min) equals \u22481.075 \u00d7 10\u207b\u2075 m\u00b2/s, found in US military and aerospace specifications for thermal protection materials and ablative heat shields. Some NASA technical reports on reentry vehicle TPS (Thermal Protection System) materials quote diffusivity in in\u00b2/min. 1 in\u00b2/min = 0.00064516/60 m\u00b2/s.",
    symbol: "in\u00b2/min"
  },
  square_feet_per_hour: {
    name: "Square feet per hour",
    description: "The square foot per hour (ft\u00b2/h) equals \u22482.581 \u00d7 10\u207b\u2075 m\u00b2/s and is the dominant unit in US engineering practice for thermal diffusivity of building materials and industrial insulation. ASHRAE handbooks, Perry's Chemical Engineers' Handbook, and NFPA fire-resistance tables all list diffusivity in ft\u00b2/h. Steel: \u22480.4-0.5 ft\u00b2/h; concrete: \u22480.023 ft\u00b2/h; mineral wool: \u22480.005 ft\u00b2/h. 1 ft\u00b2/h = 0.09290304/3600 m\u00b2/s.",
    symbol: "ft\u00b2/h"
  },
  square_centimetres_per_second: {
    name: "Square centimetres per second",
    description: "The square centimetre per second (cm\u00b2/s) equals 1 \u00d7 10\u207b\u2074 m\u00b2/s and is the CGS unit for thermal diffusivity, sometimes called the stokes by analogy with kinematic viscosity. Pre-SI thermophysics literature and many older reference databases list values in cm\u00b2/s: iron \u22480.18 cm\u00b2/s; aluminium \u22480.84 cm\u00b2/s; water \u22481.4 \u00d7 10\u207b\u00b3 cm\u00b2/s. 1 cm\u00b2/s = 1 \u00d7 10\u207b\u2074 m\u00b2/s.",
    symbol: "cm\u00b2/s"
  },
  square_metres_per_hour: {
    name: "Square metres per hour",
    description: "The square metre per hour (m\u00b2/h) equals 1/3600 m\u00b2/s \u22482.778 \u00d7 10\u207b\u2074 m\u00b2/s, used in large-scale geotechnical and civil engineering analyses. Soil consolidation models and groundwater thermal plume simulations often use m\u00b2/h because the full diffusion process unfolds over hours to days. 1 m\u00b2/h = 10 000 cm\u00b2/h \u2248 2.778 \u00d7 10\u207b\u2074 m\u00b2/s.",
    symbol: "m\u00b2/h"
  },
  square_inches_per_second: {
    name: "Square inches per second",
    description: "The square inch per second (in\u00b2/s) equals 6.4516 \u00d7 10\u207b\u2074 m\u00b2/s, used in high-speed thermal analyses such as ballistic impact heating, explosive detonation studies, and rapid induction heating of steel billets. Values for high-conductivity copper alloys reach \u22481-2 in\u00b2/s; for mild steel \u22480.3 in\u00b2/s. 1 in\u00b2/s = 0.00064516 m\u00b2/s = 3600 in\u00b2/h.",
    symbol: "in\u00b2/s"
  },
  square_feet_per_minute: {
    name: "Square feet per minute",
    description: "The square foot per minute (ft\u00b2/min) equals \u22481.548 \u00d7 10\u207b\u00b3 m\u00b2/s, an uncommon transitional unit appearing in some older US industrial furnace design charts and heat-treatment process sheets where holding times are expressed in minutes. 1 ft\u00b2/min = 60 ft\u00b2/h = 0.09290304/60 m\u00b2/s \u22481.548 \u00d7 10\u207b\u00b3 m\u00b2/s.",
    symbol: "ft\u00b2/min"
  },
  square_decimetres_per_second: {
    name: "Square decimetres per second",
    description: "The square decimetre per second (dm\u00b2/s) equals exactly 0.01 m\u00b2/s, a rarely used but exact-ratio metric unit. It is occasionally encountered in European academic papers on molten metals and liquid semiconductors, where diffusivity values in m\u00b2/s are small fractions and dm\u00b2/s gives more convenient numeric magnitudes. 1 dm\u00b2/s = 1e-2 m\u00b2/s = 100 cm\u00b2/s.",
    symbol: "dm\u00b2/s"
  },
  square_metres_per_minute: {
    name: "Square metres per minute",
    description: "The square metre per minute (m\u00b2/min) equals 1/60 m\u00b2/s \u22480.01667 m\u00b2/s, a non-standard unit seen in some process-engineering contexts where heat soak times are measured in minutes rather than seconds. Nuclear fuel rod thermal analysis and large refractory furnace lining design occasionally cite diffusivity in m\u00b2/min. 1 m\u00b2/min = 1/60 m\u00b2/s \u2248 6000 cm\u00b2/s.",
    symbol: "m\u00b2/min"
  },
  square_feet_per_second: {
    name: "Square feet per second",
    description: "The square foot per second (ft\u00b2/s) equals 0.09290304 m\u00b2/s, the imperial base unit for thermal diffusivity analogous to m\u00b2/s. It is used in US aerospace engineering and combustion research for highly conductive materials and high-temperature plasmas. Diamond, the most thermally diffusive solid at \u22487 cm\u00b2/s, converts to \u22480.0075 ft\u00b2/s; silver to \u22480.00167 ft\u00b2/s. 1 ft\u00b2/s = 3600 ft\u00b2/h = 0.09290304 m\u00b2/s.",
    symbol: "ft\u00b2/s"
  },
  square_metres_per_second: {
    name: "Square metres per second",
    description: "The square metre per second (m\u00b2/s) is the SI unit for thermal diffusivity (\u03b1 = k / \u03c1c_p). It defines how fast a temperature disturbance propagates through a material. Diamond: \u22485 \u00d7 10\u207b\u2074 m\u00b2/s; silver: \u22481.65 \u00d7 10\u207b\u2074 m\u00b2/s; aluminium: \u22488.4 \u00d7 10\u207b\u2075 m\u00b2/s; iron: \u22481.8 \u00d7 10\u207b\u2075 m\u00b2/s; concrete: \u22486 \u00d7 10\u207b\u2077 m\u00b2/s; water: \u22481.4 \u00d7 10\u207b\u2077 m\u00b2/s. 1 m\u00b2/s = 10\u2076 mm\u00b2/s = 10\u2074 cm\u00b2/s.",
    symbol: "m\u00b2/s"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toSquareMetresPerSecond);
}

function convertThermalDiffusivity() {
  convertFactorBased(toSquareMetresPerSecond);
}

initConverterPage();
