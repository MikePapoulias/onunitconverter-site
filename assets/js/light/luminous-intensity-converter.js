// Base unit: candela (cd) - one of the seven SI base units.
// Luminous intensity I [cd] is the luminous flux emitted per unit solid angle in a given direction:
//   I = d\u03a6 / d\u03a9  (\u03a6: luminous flux in lm, \u03a9: solid angle in sr)
//   1 cd = 1 lm/sr  (exact by SI definition)
// The candela is defined since 2019 SI by fixing the luminous efficacy of 540 THz radiation:
//   K_cd = 683 lm/W (exact) at \u03bd = 540 \u00d7 10\u00b9\u00b2 Hz.
// All factors express how many cd equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 cd  (candela)       = 1 lm/sr  (SI base unit)
//   1 cp  (candlepower)   = 1 cd  (international candle replaced by cd in 1948; exact)
//   1 HK  (Hefnerkerze)   = 0.920 cd (German standard; value adopted by PTB; not exact in modern sense)
//   1 VK  (Viollekerze)   = 20.17 cd (Carcel lamp unit; \u224820.17 cd, rounded from 20.17)
//   1 bcp (British candle power) = 1.0 cd  (defined equal to cd in 1948)
//   SI prefix units (pcd, ncd, \u00b5cd, mcd, kcd, Mcd, Gcd): exact by SI prefix definitions.
//
// Factor order (smallest to largest):
//   pcd (1e-12) < ncd (1e-9) < \u00b5cd (1e-6) < mcd (1e-3) < cd (1)
//   < HK (0.920) < kcd (1e3) < VK (20.17) - NOTE: HK < 1 cd, so insert before cd
//   Correct factor order:
//   pcd (1e-12) < ncd (1e-9) < \u00b5cd (1e-6) < mcd (1e-3) < HK (0.920)
//   < cd (1) < VK (20.17) < kcd (1e3) < Mcd (1e6) < Gcd (1e9)

const toCandelas = {
  'picocandelas':    1e-12,   // exact: 10\u207b\u00b9\u00b2 cd (SI prefix pico)
  'nanocandelas':    1e-9,    // exact: 10\u207b\u2079 cd (SI prefix nano)
  'microcandelas':   1e-6,    // exact: 10\u207b\u2076 cd (SI prefix micro)
  'millicandelas':   1e-3,    // exact: 10\u207b\u00b3 cd (SI prefix milli)
  'hefnerkerzen':    0.920,   // 1 HK = 0.920 cd (PTB conventional value; 0.903 cd by some sources; 0.920 used in DIN 5031)
  'candelas':        1,       // reference (base unit)
  'violle':          20.17,   // 1 Vl (Violle) \u2248 20.17 cd (defined as luminous intensity of 1 cm\u00b2 of platinum at solidification point; value from BIPM historical records)
  'kilocandelas':    1e3,     // exact: 10\u00b3 cd (SI prefix kilo)
  'megacandelas':    1e6,     // exact: 10\u2076 cd (SI prefix mega)
  'gigacandelas':    1e9,     // exact: 10\u2079 cd (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'picocandelas': {
    name: "Picocandelas",
    description: "The picocandela (pcd) equals 10\u207b\u00b9\u00b2 cd. A theoretical subunit used only in precision photometric standard traceability and single-photon detector characterisation. The faintest LED indicator in standby mode (~10 \u00b5cd) is one million times brighter. Appears in calibration chain documentation. 1 pcd = 10\u207b\u00b9\u00b2 cd.",
    symbol: "pcd"
  },
  'nanocandelas': {
    name: "Nanocandelas",
    description: "The nanocandela (ncd) equals 10\u207b\u2079 cd. The scale of extremely faint bioluminescence: a single luciferin-luciferase reaction emits around 1-10 ncd; dark-adapted firefly flashes peak at a few hundred ncd. Also the range for cooled avalanche-photodiode sensitivity characterisation. 1 ncd = 10\u207b\u2079 cd.",
    symbol: "ncd"
  },
  'microcandelas': {
    name: "Microcandelas",
    description: "The microcandela (\u00b5cd) equals 10\u207b\u2076 cd. LED indicators in standby or low-power mode: many SMD status LEDs operate at 1-100 \u00b5cd when current-limited to 10-100 \u00b5A. Also the typical sensitivity threshold of modern photomultiplier tube assemblies. 1 \u00b5cd = 10\u207b\u2076 cd.",
    symbol: "\u00b5cd"
  },
  'millicandelas': {
    name: "Millicandelas",
    description: "The millicandela (mcd) equals 10\u207b\u00b3 cd. The most common unit in LED datasheets: a standard 3 mm through-hole LED has 5-500 mcd at 20 mA; a high-efficiency indicator LED 500-2 000 mcd; signal LEDs for visible-range indicators typically 10-200 mcd. The IEC standard range for low-current indicators. 1 mcd = 10\u207b\u00b3 cd.",
    symbol: "mcd"
  },
  'hefnerkerzen': {
    name: "Hefnerkerzen",
    description: "The Hefnerkerze (HK) equals 0.920 cd (DIN 5031 conventional value). The German photometric standard unit from 1884 to 1942, defined by the luminous intensity of a Hefner lamp burning amyl acetate. Used as the official German standard before the adoption of the international candela. 1 HK = 0.920 cd.",
    symbol: "HK"
  },
  'candelas': {
    name: "Candelas",
    description: "The candela (cd) is the SI base unit of luminous intensity. A standard wax candle emits ~1 cd; a 60 W incandescent bulb ~60 cd (assuming Lambertian emission); a 1 W white power LED ~100 cd peak in a 5\u00b0 beam. Defined since 2019 by fixing K_cd = 683 lm/W at 540 THz. 1 cd = 1 lm/sr.",
    symbol: "cd"
  },
  'violle': {
    name: "Violle",
    description: "The violle (Vl) \u2248 20.17 cd is the first photometric unit not based on a flame source, proposed by Jules Violle in 1881 and adopted by the CGS system. Defined as the luminous intensity of 1 cm\u00b2 of platinum at its solidification point (1 768 \u00b0C). Used historically in French and international photometry before 1948. 1 Vl \u2248 20.17 cd.",
    symbol: "Vl"
  },
  'kilocandelas': {
    name: "Kilocandelas",
    description: "The kilocandela (kcd) equals 1 000 cd. The range for high-intensity light sources: a 150 W PAR38 halogen floodlamp has a peak intensity ~1-2 kcd; automotive low-beam headlights ~2-3 kcd in the main beam axis; LED searchlights 5-50 kcd; xenon aircraft landing lights ~100 kcd. 1 kcd = 10\u00b3 cd.",
    symbol: "kcd"
  },
  'megacandelas': {
    name: "Megacandelas",
    description: "The megacandela (Mcd) equals 10\u2076 cd. The range for powerful searchlights and lighthouse optics: a large maritime lighthouse lens emits 1-10 Mcd; military anti-aircraft searchlights of WWII reached 1-2 Mcd; modern LED lighthouse arrays 2-5 Mcd. 1 Mcd = 10\u2076 cd.",
    symbol: "Mcd"
  },
  'gigacandelas': {
    name: "Gigacandelas",
    description: "The gigacandela (Gcd) equals 10\u2079 cd. The scale for extremely powerful directed beams and for astrophysical luminous intensity comparisons. A nuclear fireball at peak emission approaches this range; high-power pulsed laser outputs in the visible spectrum can reach Gcd-level peak intensity in the beam axis. 1 Gcd = 10\u2079 cd.",
    symbol: "Gcd"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCandelas);
}

function convertLuminousIntensity() {
  convertFactorBased(toCandelas);
}

initConverterPage();
