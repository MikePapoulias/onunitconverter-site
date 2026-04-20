// Base unit: ampere per square metre (A/m\u00b2) - the SI coherent unit of electric current density.
// Current density J [I L\u207b\u00b2] is electric current per unit cross-sectional area: J = I / A.
// All factors express how many A/m\u00b2 equal 1 unit of the given measure.
//
// Exact foundations:
//   c    = 299 792 458 m/s          (exact, speed of light definition)
//   1 in = 0.0254 m                 (exact, international inch definition)
//   1 ft = 0.3048 m                 (exact, international foot definition)
//   1 cm = 0.01 m                   (exact)
//   1 A/m\u00b2 = 1 A\u00b7m\u207b\u00b2 = 1 kg\u00b7A\u207b\u00b2\u00b7m\u207b\u00b2\u00b7s\u207b\u00b3 (dimensionally)
//
// SI prefix units per square metre (all exact by definition):
//   1 fA/m\u00b2 = 10\u207b\u00b9\u2075 A/m\u00b2    1 pA/m\u00b2 = 10\u207b\u00b9\u00b2 A/m\u00b2    1 nA/m\u00b2 = 10\u207b\u2079 A/m\u00b2
//   1 \u00b5A/m\u00b2 = 10\u207b\u2076 A/m\u00b2     1 mA/m\u00b2 = 10\u207b\u00b3 A/m\u00b2      1 kA/m\u00b2 = 10\u00b3 A/m\u00b2
//   1 MA/m\u00b2 = 10\u2076 A/m\u00b2      1 GA/m\u00b2 = 10\u2079 A/m\u00b2
//
// Per-centimetre\u00b2 metric variants (1 cm = 0.01 m - exact):
//   1 \u00b5A/cm\u00b2 = 10\u207b\u2076 A / 10\u207b\u2074 m\u00b2 = 10\u207b\u00b2 A/m\u00b2
//   1 mA/cm\u00b2  = 10\u207b\u00b3 A / 10\u207b\u2074 m\u00b2 = 10    A/m\u00b2
//   1 A/cm\u00b2   = 1 A   / 10\u207b\u2074 m\u00b2 = 10\u2074   A/m\u00b2
//
// Abampere per square centimetre (CGS-EMU) - exact:
//   1 abA = 10 A  (exact)
//   1 abA/cm\u00b2 = 10 A / 10\u207b\u2074 m\u00b2 = 10\u2075 A/m\u00b2
//
// Statampere per square centimetre (CGS-Gaussian) - exact:
//   1 A = (1/10) \u00d7 c_cgs statA  where c_cgs = 2.99792458 \u00d7 10\u00b9\u2070 cm/s = 10 \u00d7 c (c in m/s)
//   1 statA = 1 / (10 \u00d7 c) A  where c = 299 792 458 m/s
//   1 statA/cm\u00b2 = [1/(10c) A] / 10\u207b\u2074 m\u00b2 = 1000/c A/m\u00b2
//              \u2248 3.3356 \u00d7 10\u207b\u2076 A/m\u00b2   (between \u00b5A/m\u00b2 and mA/m\u00b2)
//
// US customary area units:
//   1 A/ft\u00b2 = 1 A / (0.3048)\u00b2 m\u00b2 \u2248 10.7639 A/m\u00b2  (1 ft = 0.3048 m - exact)
//   1 A/in\u00b2 = 1 A / (0.0254)\u00b2 m\u00b2 \u2248 1550.00 A/m\u00b2  (1 in = 0.0254 m - exact)

const toAmperesPerSquareMetre = {
  // -- Femtoamperes per square metre -----------------------------------------
  femtoamperes_per_square_metre:              1e-15,                             // exact: 10\u207b\u00b9\u2075 A/m\u00b2 (SI prefix femto)
  // -- Picoamperes per square metre ------------------------------------------
  picoamperes_per_square_metre:               1e-12,                             // exact: 10\u207b\u00b9\u00b2 A/m\u00b2 (SI prefix pico)
  // -- Nanoamperes per square metre ------------------------------------------
  nanoamperes_per_square_metre:               1e-9,                              // exact: 10\u207b\u2079 A/m\u00b2 (SI prefix nano)
  // -- Microamperes per square metre -----------------------------------------
  microamperes_per_square_metre:              1e-6,                              // exact: 10\u207b\u2076 A/m\u00b2 (SI prefix micro)
  // -- Statamperes per square centimetre (CGS-Gaussian) ----------------------
  statamperes_per_square_centimetre:          1000 / 299792458,                  // exact: 1000/c A/m\u00b2 \u2248 3.3356 \u00d7 10\u207b\u2076 A/m\u00b2 (between \u00b5A/m\u00b2 and mA/m\u00b2)
  // -- Milliamperes per square metre -----------------------------------------
  milliamperes_per_square_metre:              1e-3,                              // exact: 10\u207b\u00b3 A/m\u00b2 (SI prefix milli)
  // -- Microamperes per square centimetre ------------------------------------
  microamperes_per_square_centimetre:         1e-6 / (0.01 * 0.01),             // exact: 10\u207b\u2076 A / 10\u207b\u2074 m\u00b2 = 10\u207b\u00b2 A/m\u00b2
  // -- Amperes per square metre (SI unit) ------------------------------------
  amperes_per_square_metre:                   1,                                 // reference (base unit)
  // -- Milliamperes per square centimetre ------------------------------------
  milliamperes_per_square_centimetre:         1e-3 / (0.01 * 0.01),             // exact: 10\u207b\u00b3 A / 10\u207b\u2074 m\u00b2 = 10 A/m\u00b2
  // -- Amperes per square foot -----------------------------------------------
  amperes_per_square_foot:                    1 / (0.3048 * 0.3048),            // exact: 1/(0.3048)\u00b2 A/m\u00b2 \u2248 10.7639 A/m\u00b2 (1 ft = 0.3048 m)
  // -- Kiloamperes per square metre ------------------------------------------
  kiloamperes_per_square_metre:               1e3,                               // exact: 10\u00b3 A/m\u00b2 (SI prefix kilo)
  // -- Amperes per square inch -----------------------------------------------
  amperes_per_square_inch:                    1 / (0.0254 * 0.0254),            // exact: 1/(0.0254)\u00b2 A/m\u00b2 \u2248 1550.00 A/m\u00b2 (1 in = 0.0254 m)
  // -- Amperes per square centimetre -----------------------------------------
  amperes_per_square_centimetre:              1 / (0.01 * 0.01),                // exact: 1 A / 10\u207b\u2074 m\u00b2 = 10\u2074 A/m\u00b2
  // -- Abamperes per square centimetre (CGS-EMU) -----------------------------
  abamperes_per_square_centimetre:            10 / (0.01 * 0.01),               // exact: 10 A / 10\u207b\u2074 m\u00b2 = 10\u2075 A/m\u00b2
  // -- Megaamperes per square metre ------------------------------------------
  megaamperes_per_square_metre:               1e6,                               // exact: 10\u2076 A/m\u00b2 (SI prefix mega)
  // -- Gigaamperes per square metre ------------------------------------------
  gigaamperes_per_square_metre:               1e9,                               // exact: 10\u2079 A/m\u00b2 (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtoamperes_per_square_metre: {
    name: "Femtoamperes per square metre",
    description: "The femtoampere per square metre (fA/m\u00b2) equals 10\u207b\u00b9\u2075 A/m\u00b2. Leakage current density through the dielectric of a high-quality capacitor at rated voltage is in the fA/m\u00b2 range; dark current density in cooled CCD image sensors at -30 \u00b0C is around 1-10 fA/m\u00b2; radiation-induced leakage in neutron-irradiated MOS gate oxides is measured in fA/m\u00b2. 1 fA/m\u00b2 = 10\u207b\u00b9\u2075 A/m\u00b2 = 10\u207b\u00b3 pA/m\u00b2.",
    symbol: "fA/m\u00b2"
  },
  picoamperes_per_square_metre: {
    name: "Picoamperes per square metre",
    description: "The picoampere per square metre (pA/m\u00b2) equals 10\u207b\u00b9\u00b2 A/m\u00b2. Reverse-bias dark current density in silicon p-n junctions at room temperature is 1-100 pA/m\u00b2; gate leakage current density in sub-22 nm CMOS transistors spans pA/m\u00b2 to nA/m\u00b2; dark current density of cooled InGaAs photodiodes is in the pA/m\u00b2 range. 1 pA/m\u00b2 = 10\u207b\u00b9\u00b2 A/m\u00b2 = 10\u207b\u00b3 nA/m\u00b2.",
    symbol: "pA/m\u00b2"
  },
  nanoamperes_per_square_metre: {
    name: "Nanoamperes per square metre",
    description: "The nanoampere per square metre (nA/m\u00b2) equals 10\u207b\u2079 A/m\u00b2. Corrosion current density of passive stainless steel in neutral chloride-free solutions is 0.1-10 nA/m\u00b2; exchange current density of the hydrogen evolution reaction on platinum in acid is around 1 nA/m\u00b2; photocurrent density in very weakly illuminated organic solar cells scales to nA/m\u00b2. 1 nA/m\u00b2 = 10\u207b\u2079 A/m\u00b2 = 10\u207b\u00b3 \u00b5A/m\u00b2.",
    symbol: "nA/m\u00b2"
  },
  microamperes_per_square_metre: {
    name: "Microamperes per square metre",
    description: "The microampere per square metre (\u00b5A/m\u00b2) equals 10\u207b\u2076 A/m\u00b2. Corrosion current density of carbon steel in neutral deaerated water is 0.1-100 \u00b5A/m\u00b2; exchange current density of the Zn/Zn2+ electrode is \u224820 \u00b5A/m\u00b2; cathodic protection criterion current density for buried steel pipelines in low-resistivity soil is 2-20 \u00b5A/m\u00b2. 1 \u00b5A/m\u00b2 = 10\u207b\u2076 A/m\u00b2 = 10\u207b\u00b3 mA/m\u00b2.",
    symbol: "\u00b5A/m\u00b2"
  },
  statamperes_per_square_centimetre: {
    name: "Statamperes per square centimetre",
    description: "The statampere per square centimetre (statA/cm\u00b2) is the current density unit of the CGS-Gaussian system, equal to 1000/c A/m\u00b2 where c = 299\u202f792\u202f458 m/s, giving \u22483.336 \u00d7 10\u207b\u2076 A/m\u00b2. In Gaussian electrodynamics the statA/cm\u00b2 is the natural current density when fields are in statV/cm; it appears in plasma physics texts using Gaussian units. 1 statA/cm\u00b2 \u2248 3.336 \u00b5A/m\u00b2.",
    symbol: "statA/cm\u00b2"
  },
  milliamperes_per_square_metre: {
    name: "Milliamperes per square metre",
    description: "The milliampere per square metre (mA/m\u00b2) equals 10\u207b\u00b3 A/m\u00b2. Cathodic protection current density applied to reinforced concrete structures is 2-20 mA/m\u00b2; faradaic current density during slow anodic dissolution of iron in dilute H2SO4 is 1-100 mA/m\u00b2; exchange current density of the oxygen reduction reaction on platinum is \u22482 mA/m\u00b2. 1 mA/m\u00b2 = 10\u207b\u00b3 A/m\u00b2 = 0.1 \u00b5A/cm\u00b2.",
    symbol: "mA/m\u00b2"
  },
  microamperes_per_square_centimetre: {
    name: "Microamperes per square centimetre",
    description: "The microampere per square centimetre (\u00b5A/cm\u00b2) equals 10\u207b\u2076 A / 10\u207b\u2074 m\u00b2 = 0.01 A/m\u00b2. Active corrosion current density of mild steel in aerated salt water is 10-100 \u00b5A/cm\u00b2; exchange current density of Cd/Cd2+ is \u224815 \u00b5A/cm\u00b2; leakage current density of forward-biased silicon diodes at very low bias is in the \u00b5A/cm\u00b2 range. 1 \u00b5A/cm\u00b2 = 0.01 A/m\u00b2 = 10 mA/m\u00b2.",
    symbol: "\u00b5A/cm\u00b2"
  },
  amperes_per_square_metre: {
    name: "Amperes per square metre",
    description: "The ampere per square metre (A/m\u00b2) is the SI coherent unit of current density, defined as 1 A flowing through 1 m\u00b2 cross-section. Electrolytic copper plating baths operate at 200-500 A/m\u00b2; photovoltaic short-circuit current density of silicon solar cells at AM 1.5G is 35-42 A/m\u00b2; cathodic protection of bare steel in soil applies 10-50 A/m\u00b2. 1 A/m\u00b2 = 0.1 mA/cm\u00b2.",
    symbol: "A/m\u00b2"
  },
  milliamperes_per_square_centimetre: {
    name: "Milliamperes per square centimetre",
    description: "The milliampere per square centimetre (mA/cm\u00b2) equals 10 A/m\u00b2, the dominant current density unit in electrochemistry and fuel-cell engineering. Proton-exchange membrane fuel cells produce peak power at 1000-2000 mA/cm\u00b2; hydrogen electrolysers run at 200-2000 mA/cm\u00b2; industrial chlor-alkali cells operate at 200-400 mA/cm\u00b2. 1 mA/cm\u00b2 = 10 A/m\u00b2 = 10\u207b\u00b3 A/cm\u00b2.",
    symbol: "mA/cm\u00b2"
  },
  amperes_per_square_foot: {
    name: "Amperes per square foot",
    description: "The ampere per square foot (A/ft\u00b2) equals 1 / (0.3048)\u00b2 A/m\u00b2 \u2248 10.764 A/m\u00b2, used in US electroplating and grounding standards. ASTM B734 copper plating specifications cite current density in A/ft\u00b2; IEEE Std 80 specifies grounding grid design current density in A/ft\u00b2 when ground fault current is distributed across the soil surface. 1 A/ft\u00b2 \u2248 10.764 A/m\u00b2.",
    symbol: "A/ft\u00b2"
  },
  kiloamperes_per_square_metre: {
    name: "Kiloamperes per square metre",
    description: "The kiloampere per square metre (kA/m\u00b2) equals 10\u00b3 A/m\u00b2, the scale for aluminium smelting, high-rate electroplating, and bus bar design. Hall-Heroult aluminium reduction cells operate at 3-10 kA/m\u00b2; electric arc furnace graphite electrodes carry 50-150 kA/m\u00b2; allowable current density in copper bus bars for switchgear is 1-3 kA/m\u00b2. 1 kA/m\u00b2 = 10\u00b3 A/m\u00b2 = 100 mA/cm\u00b2.",
    symbol: "kA/m\u00b2"
  },
  amperes_per_square_inch: {
    name: "Amperes per square inch",
    description: "The ampere per square inch (A/in\u00b2) equals 1 / (0.0254)\u00b2 A/m\u00b2 \u2248 1550 A/m\u00b2, used in US power semiconductor datasheets and electroforming specifications. JEDEC JESD22 and IPC standards specify maximum allowable current density in bond wires and copper interconnects in A/in\u00b2; electroforming of micro-components targets 0.5-5 A/in\u00b2. 1 A/in\u00b2 \u2248 1550 A/m\u00b2 = 0.155 A/cm\u00b2.",
    symbol: "A/in\u00b2"
  },
  amperes_per_square_centimetre: {
    name: "Amperes per square centimetre",
    description: "The ampere per square centimetre (A/cm\u00b2) equals 10\u2074 A/m\u00b2, the standard current density unit for power electronics, arc physics, and high-performance batteries. Bipolar junction transistor saturation current density is 0.5-5 A/cm\u00b2; vacuum arc contact spots on copper carry 100-1000 A/cm\u00b2; fast-charge lithium-ion cathodes support up to 0.05 A/cm\u00b2. 1 A/cm\u00b2 = 10\u2074 A/m\u00b2 = 10 kA/m\u00b2.",
    symbol: "A/cm\u00b2"
  },
  abamperes_per_square_centimetre: {
    name: "Abamperes per square centimetre",
    description: "The abampere per square centimetre (abA/cm\u00b2) is the current density unit of the CGS-EMU system, equal to 10 A / 10\u207b\u2074 m\u00b2 = 10\u2075 A/m\u00b2. The abampere (= 10 A exactly) was the CGS-EMU base current unit before SI adoption; in EMU notation Amp\u00e8re\u2019s law uses J in abA/cm\u00b2 and magnetic field in gauss without additional conversion factors. 1 abA/cm\u00b2 = 10\u2075 A/m\u00b2 = 10 A/cm\u00b2.",
    symbol: "abA/cm\u00b2"
  },
  megaamperes_per_square_metre: {
    name: "Megaamperes per square metre",
    description: "The megaampere per square metre (MA/m\u00b2) equals 10\u2076 A/m\u00b2, encountered in lightning channel physics and pulsed-power fusion devices. Peak current density in a lightning return-stroke channel is 10-100 MA/m\u00b2; plasma current sheets in z-pinch implosions reach 1-100 MA/m\u00b2; liquid-metal MHD pumps in fast reactors operate at 0.5-5 MA/m\u00b2. 1 MA/m\u00b2 = 10\u2076 A/m\u00b2 = 10\u00b3 kA/m\u00b2.",
    symbol: "MA/m\u00b2"
  },
  gigaamperes_per_square_metre: {
    name: "Gigaamperes per square metre",
    description: "The gigaampere per square metre (GA/m\u00b2) equals 10\u2079 A/m\u00b2, the extreme scale for thermonuclear plasmas and ultra-fast pulsed discharges. Current density in the compressed plasma of a z-pinch at peak compression is 1-100 GA/m\u00b2; field-emission current density from a sharp metallic tip at the Fowler-Nordheim threshold is \u22481-10 GA/m\u00b2. 1 GA/m\u00b2 = 10\u2079 A/m\u00b2 = 10\u00b3 MA/m\u00b2.",
    symbol: "GA/m\u00b2"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toAmperesPerSquareMetre);
}

function convertCurrentDensity() {
  convertFactorBased(toAmperesPerSquareMetre);
}

initConverterPage();
