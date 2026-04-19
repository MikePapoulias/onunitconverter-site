// Base unit: candela per square metre (cd/m\u00b2) - the SI coherent derived unit of luminance.
// Luminance L [cd/m\u00b2 = cd\u00b7m\u207b\u00b2] is the luminous flux emitted, transmitted, or reflected in a
// given direction per unit solid angle per unit projected area of the source:
//   L = d\u00b2\u03a6 / (d\u03a9 \u00b7 dA\u00b7cos\u03b8)   (\u03a6: luminous flux in lm, \u03a9: solid angle in sr, A\u00b7cos\u03b8: projected area in m\u00b2)
// All factors express how many cd/m\u00b2 equal 1 unit of the given measure.
//
// Exact / reference values:
//   1 cd/m\u00b2 = 1 nit  (informal SI-equivalent name used in display engineering)
//   1 asb  (apostilb)    = 1/\u03c0 cd/m\u00b2  (exact by definition; introduced CIE 1940)
//   1 sk   (skot)        = 10\u207b\u00b3/\u03c0 cd/m\u00b2 = 10\u207b\u00b3 asb  (exact)
//   1 mL   (millilambert) = 10/\u03c0 cd/m\u00b2  (exact: 10\u207b\u00b3 \u00d7 10\u2074/\u03c0)
//   1 L    (lambert)     = 10\u2074/\u03c0 cd/m\u00b2  (exact; CGS-photometric unit)
//   1 sb   (stilb)       = 10\u2074 cd/m\u00b2 = 1 cd/cm\u00b2  (exact; CGS)
//   1 fL   (foot-lambert) = 1/(\u03c0 \u00d7 0.09290304) cd/m\u00b2 (exact; 1 ft = 0.3048 m, 1 ft\u00b2 = 0.09290304 m\u00b2)
//   1 cd/ft\u00b2 = 1/0.09290304 cd/m\u00b2  (exact; 1 ft\u00b2 = 0.09290304 m\u00b2)
//   1 cd/in\u00b2 = 1/0.00064516 cd/m\u00b2  (exact; 1 in = 0.0254 m, 1 in\u00b2 = 0.00064516 m\u00b2)
//   SI prefix units (pcd/m\u00b2, ncd/m\u00b2, \u00b5cd/m\u00b2, mcd/m\u00b2, kcd/m\u00b2, Mcd/m\u00b2): exact by SI prefix definitions.
//
// Factor order (smallest to largest):
//   pcd/m\u00b2 (1e-12) < ncd/m\u00b2 (1e-9) < \u00b5cd/m\u00b2 (1e-6) < sk (\u22483.183e-4) < mcd/m\u00b2 (1e-3)
//   < asb (\u22480.3183) < cd/m\u00b2 (1) < mL (\u22483.183) < fL (\u22483.426) < cd/ft\u00b2 (\u224810.76)
//   < kcd/m\u00b2 (1e3) < cd/in\u00b2 (\u22481550) < L (\u22483183) < sb (1e4) < Mcd/m\u00b2 (1e6)

const toCandelasPerSquareMetre = {
  'picocandelas-per-square-metre':   1e-12,                          // exact: 10\u207b\u00b9\u00b2 cd/m\u00b2 (SI prefix pico)
  'nanocandelas-per-square-metre':   1e-9,                           // exact: 10\u207b\u2079 cd/m\u00b2 (SI prefix nano)
  'microcandelas-per-square-metre':  1e-6,                           // exact: 10\u207b\u2076 cd/m\u00b2 (SI prefix micro)
  'skots':                           1e-3 / Math.PI,                 // exact: 10\u207b\u00b3/\u03c0 cd/m\u00b2 \u2248 3.18310e-4 cd/m\u00b2 (CGS)
  'millicandelas-per-square-metre':  1e-3,                           // exact: 10\u207b\u00b3 cd/m\u00b2 (SI prefix milli)
  'apostilbs':                       1 / Math.PI,                    // exact: 1/\u03c0 cd/m\u00b2 \u2248 0.31831 cd/m\u00b2
  'candelas-per-square-metre':       1,                              // reference (base unit; also = 1 nit)
  'millilamberts':                   10 / Math.PI,                   // exact: 10/\u03c0 cd/m\u00b2 \u2248 3.18310 cd/m\u00b2
  'foot-lamberts':                   1 / (Math.PI * 0.09290304),     // exact: 1/(\u03c0\u00d70.09290304) cd/m\u00b2 \u2248 3.42626 cd/m\u00b2
  'candelas-per-square-foot':        1 / 0.09290304,                 // exact: 1/0.09290304 cd/m\u00b2 \u2248 10.7639 cd/m\u00b2
  'kilocandelas-per-square-metre':   1e3,                            // exact: 10\u00b3 cd/m\u00b2 (SI prefix kilo)
  'candelas-per-square-inch':        1 / 0.00064516,                 // exact: 1/0.00064516 cd/m\u00b2 \u2248 1550.003 cd/m\u00b2
  'lamberts':                        1e4 / Math.PI,                  // exact: 10\u2074/\u03c0 cd/m\u00b2 \u2248 3183.099 cd/m\u00b2 (CGS)
  'stilbs':                          1e4,                            // exact: 10\u2074 cd/m\u00b2 = 1 cd/cm\u00b2 (CGS)
  'meganits':                        1e6,                            // exact: 10\u2076 cd/m\u00b2 (SI prefix mega)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  'picocandelas-per-square-metre': {
    name: "Picocandelas per square metre",
    description: "The picocandela per square metre (pcd/m\u00b2) equals 10\u207b\u00b9\u00b2 cd/m\u00b2. A theoretical subunit for precision photometric standards and astrophysical brightness modelling. Even the darkest measurable surfaces in calibrated laboratories have luminance many orders of magnitude above this scale. Used only in radiometric standard traceability chains. 1 pcd/m\u00b2 = 10\u207b\u00b9\u00b2 cd/m\u00b2.",
    symbol: "pcd/m\u00b2"
  },
  'nanocandelas-per-square-metre': {
    name: "Nanocandelas per square metre",
    description: "The nanocandela per square metre (ncd/m\u00b2) equals 10\u207b\u2079 cd/m\u00b2. Represents luminance at the threshold of cooled photomultiplier tubes and avalanche photodiode detectors. The darkest OLED black levels (~10\u207b\u2074 cd/m\u00b2) are still five orders of magnitude brighter; this unit is used in single-photon counting photometry. 1 ncd/m\u00b2 = 10\u207b\u2079 cd/m\u00b2.",
    symbol: "ncd/m\u00b2"
  },
  'microcandelas-per-square-metre': {
    name: "Microcandelas per square metre",
    description: "The microcandela per square metre (\u00b5cd/m\u00b2) equals 10\u207b\u2076 cd/m\u00b2. Used in precision dark-sky photometry and in measuring the luminance of unlit passive surfaces. OLED deep-black levels are typically 0.0001-0.01 cd/m\u00b2, about 100-10 000 times larger than this scale. 1 \u00b5cd/m\u00b2 = 10\u207b\u2076 cd/m\u00b2.",
    symbol: "\u00b5cd/m\u00b2"
  },
  'skots': {
    name: "Skots",
    description: "The skot (sk) equals 10\u207b\u00b3/\u03c0 cd/m\u00b2 \u2248 3.183\u00d710\u207b\u2074 cd/m\u00b2, defined as one-thousandth of an apostilb. A legacy photometric unit from early German-language vision science. The dark-adapted human eye threshold is around 3\u00d710\u207b\u2074 cd/m\u00b2, close to 1 sk. Now obsolete; replaced by cd/m\u00b2 in SI photometry. 1 sk = 10\u207b\u00b3/\u03c0 cd/m\u00b2.",
    symbol: "sk"
  },
  'millicandelas-per-square-metre': {
    name: "Millicandelas per square metre",
    description: "The millicandela per square metre (mcd/m\u00b2) equals 10\u207b\u00b3 cd/m\u00b2. The luminance of a moonless night sky is ~10\u207b\u00b3 cd/m\u00b2; a quarter-moon sky ~10\u207b\u00b2 cd/m\u00b2. OLED screens in deep-black mode and unlit LCD panels measure a few mcd/m\u00b2. Also the range for very dim indicator lamps. 1 mcd/m\u00b2 = 10\u207b\u00b3 cd/m\u00b2.",
    symbol: "mcd/m\u00b2"
  },
  'apostilbs': {
    name: "Apostilbs",
    description: "The apostilb (asb) equals 1/\u03c0 cd/m\u00b2 \u2248 0.3183 cd/m\u00b2, defined as the luminance of a perfectly diffuse Lambertian surface with an exitance of 1 lm/m\u00b2. Introduced by the CIE in 1940 and used in European photometry standards and retinal illuminance calculations. 1 asb = 1/\u03c0 cd/m\u00b2 \u2248 0.3183 cd/m\u00b2.",
    symbol: "asb"
  },
  'candelas-per-square-metre': {
    name: "Candelas per square metre",
    description: "The candela per square metre (cd/m\u00b2), informally called the nit, is the SI coherent unit of luminance. A typical laptop screen is 250-500 cd/m\u00b2; an HDR TV reaches 1 000-4 000 cd/m\u00b2; a clear blue sky is ~3 000-8 000 cd/m\u00b2. Luminance is the photometric quantity directly perceived as brightness. 1 cd/m\u00b2 = 1 nit.",
    symbol: "cd/m\u00b2"
  },
  'millilamberts': {
    name: "Millilamberts",
    description: "The millilambert (mL) equals 10/\u03c0 cd/m\u00b2 \u2248 3.183 cd/m\u00b2. Historically used in the United States to specify projection screen luminance and oscilloscope phosphor brightness. A projection screen with luminance 1 mL \u2248 3.18 cd/m\u00b2. Largely superseded by cd/m\u00b2 and foot-lamberts in modern display standards. 1 mL = 10/\u03c0 cd/m\u00b2.",
    symbol: "mL"
  },
  'foot-lamberts': {
    name: "Foot-lamberts",
    description: "The foot-lambert (fL) equals 1/(\u03c0\u00d70.09290304) cd/m\u00b2 \u2248 3.426 cd/m\u00b2, the luminance of a perfect diffuse surface emitting 1 lumen per square foot. The SMPTE standard for cinema screen luminance is 14 fL (\u224848 cd/m\u00b2); home projectors are rated 10-35 fL. Still standard in US cinema and theatre engineering. 1 fL = 1/(\u03c0\u00d7ft\u00b2) cd/m\u00b2.",
    symbol: "fL"
  },
  'candelas-per-square-foot': {
    name: "Candelas per square foot",
    description: "The candela per square foot (cd/ft\u00b2) equals 1/0.09290304 cd/m\u00b2 \u2248 10.76 cd/m\u00b2. Used in US lighting engineering; an illuminated office ceiling panel has luminance ~4-8 cd/ft\u00b2. The ANSI ergonomic limit for computer workstation background sources is ~340 cd/ft\u00b2. 1 cd/ft\u00b2 = 1/0.09290304 cd/m\u00b2.",
    symbol: "cd/ft\u00b2"
  },
  'kilocandelas-per-square-metre': {
    name: "Kilocandelas per square metre",
    description: "The kilocandela per square metre (kcd/m\u00b2) equals 1 000 cd/m\u00b2. The scale for HDR displays and high-brightness monitors: VESA DisplayHDR 1000 requires 1 kcd/m\u00b2 peak; professional HDR mastering monitors reach 1-4 kcd/m\u00b2; an overcast sky measures ~3-8 kcd/m\u00b2; a fluorescent tube ~7 kcd/m\u00b2. 1 kcd/m\u00b2 = 10\u00b3 cd/m\u00b2.",
    symbol: "kcd/m\u00b2"
  },
  'candelas-per-square-inch': {
    name: "Candelas per square inch",
    description: "The candela per square inch (cd/in\u00b2) equals 1/0.00064516 cd/m\u00b2 \u2248 1 550 cd/m\u00b2. Used in US LED and CRT datasheets when citing luminance of small emitter areas. A high-brightness packaged LED chip in a focussed-beam configuration can reach 1-20 cd/in\u00b2. 1 cd/in\u00b2 = 1/(0.0254\u00b2) cd/m\u00b2.",
    symbol: "cd/in\u00b2"
  },
  'lamberts': {
    name: "Lamberts",
    description: "The lambert (L) equals 10\u2074/\u03c0 cd/m\u00b2 \u2248 3 183 cd/m\u00b2, the luminance of a perfect diffuse surface emitting 1 lumen per square centimetre. The CGS practical luminance unit. An incandescent lamp globe at 3 200 K has luminance ~1 L; a clear sky is ~0.94 L. Superseded by cd/m\u00b2 in SI photometry. 1 L = 10\u2074/\u03c0 cd/m\u00b2.",
    symbol: "L"
  },
  'stilbs': {
    name: "Stilbs",
    description: "The stilb (sb) equals 1 cd/cm\u00b2 = 10\u2074 cd/m\u00b2. The CGS luminance unit. A candle flame has luminance ~0.5-0.6 sb; a frosted incandescent bulb ~10 sb; a xenon short-arc lamp up to 170 000 sb. Named from the Greek \u03c3\u03c4\u03af\u03bb\u03b2\u03c9 (to glitter). Found in pre-1970 photometry texts. 1 sb = 10\u2074 cd/m\u00b2.",
    symbol: "sb"
  },
  'meganits': {
    name: "Meganits",
    description: "The meganit (Mcd/m\u00b2) equals 10\u2076 cd/m\u00b2. The scale for extreme light sources: outdoor LED video walls at peak brightness reach 3-10 Mcd/m\u00b2; laser exit apertures are typically 10-10 000 Mcd/m\u00b2; the solar disc at zenith has luminance \u22481 600 Mcd/m\u00b2 (1.6\u00d710\u2079 cd/m\u00b2). Used in laser safety and high-power illumination. 1 Mcd/m\u00b2 = 10\u2076 cd/m\u00b2.",
    symbol: "Mcd/m\u00b2"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toCandelasPerSquareMetre);
}

function convertLuminance() {
  convertFactorBased(toCandelasPerSquareMetre);
}

initConverterPage();
