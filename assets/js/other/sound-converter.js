// Base unit: decibels (dB)
// Exact relation (IEC 80000-3): 1 Np = 20 / ln(10) dB
const _NP = 20 / Math.LN10; // exact: 20 / 2.302585092994046 = 8.685889638065037 dB per neper

const toDecibels = {
  micronepers: _NP * 1e-6,  // ~8.685889638065037e-6 dB
  millinepers: _NP * 1e-3,  // ~0.008685889638065037 dB
  millibels:   0.01,         // exactly 0.01 dB
  centinepers: _NP * 1e-2,  // ~0.08685889638065037 dB
  centibels:   0.1,          // exactly 0.1 dB
  decinepers:  _NP * 0.1,   // ~0.8685889638065037 dB
  decibels:    1,            // base unit
  nepers:      _NP,          // ~8.685889638065037 dB
  bels:        10,           // exactly 10 dB
  kilonepers:  _NP * 1e3,   // ~8685.889638065037 dB
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  micronepers: {
    name: "Microneper",
    description: "The microneper (\u00b5Np) is exactly one-millionth of a neper (1 \u00b5Np = 10\u207b\u2076 Np), corresponding to a level change of (20/ln(10)) \u00d7 10\u207b\u2076 \u2248 8.686 \u00d7 10\u207b\u2076 dB. Named after John Napier (1550\u20131617), inventor of logarithms, the neper is the IEC 80000-3 coherent unit for logarithmic field quantity levels. Level changes in the microneper range lie below the noise floor of even the finest measurement instruments (e.g., Rohde & Schwarz FSVR with DANL \u2248 \u2212170 dBm). In underwater hydroacoustic calibration (IEC/TS 62600-100), standing-wave interference patterns produce spatial amplitude variations of several micronepers per millimetre. Psychoacoustically, 1 \u00b5Np \u2248 8.686 \u00b5dB is five orders of magnitude below the human just-noticeable difference for loudness (\u2248 0.2\u20131 dB). 1 \u00b5Np = 10\u207b\u2076 Np \u2248 8.686 \u00d7 10\u207b\u2076 dB = 8.686 \u00d7 10\u207b\u2077 B.",
    symbol: "\u00b5Np"
  },
  millinepers: {
    name: "Millineper",
    description: "The millineper (mNp) equals one-thousandth of a neper (1 mNp = 10\u207b\u00b3 Np), representing a level change of (20/ln(10)) \u00d7 10\u207b\u00b3 \u2248 0.008686 dB. In transmission-line theory, the attenuation constant \u03b1 (Np/m) is expressed in millinepers per metre (mNp/m) for modern low-loss coaxial and twisted-pair cables. Standard single-mode optical fibre (ITU-T G.652.D) has an attenuation coefficient of \u2248 0.2 dB/km \u2248 23.04 mNp/km at 1550 nm. A standard ITU-T hypothetical reference circuit (HRC) of 27,500 km was allocated 13.0 Np total attenuation, averaging about 0.47 mNp/km. The gap between normal hearing (0 dB HL) and mild impairment (25 dB HL) spans \u2248 2,876 mNp, while the JND of \u2248 0.25 dB \u2248 28.8 mNp is resolvable by trained listeners. 1 mNp = 10\u207b\u00b3 Np \u2248 0.008686 dB = 8.686 \u00d7 10\u207b\u2074 B.",
    symbol: "mNp"
  },
  millibels: {
    name: "Millibel",
    description: "The millibel (mB) is one-thousandth of a bel (1 mB = 10\u207b\u00b3 B = 0.01 dB), the finest routine subdivision of the bel family in widespread practical use. The AES17-2015 standard for digital audio converter measurement requires frequency response flatness within \u00b10.01 dB (\u00b11 mB) across 10 Hz\u201320 kHz for a reference-quality interface. Audiometer calibration (IEC 60645-1, ANSI S3.6) specifies attenuator step accuracy to \u00b10.1 dB (10 mB) for research-grade psychoacoustic instruments. Modern audio codec chips (ESS Sabre ES9038PRO) specify passband ripple to 0.01 dB = 1 mB. In broadcast loudness metering (EBU R128, ITU-R BS.1770), integrated loudness is calculated at 0.1 LU = 10 mB resolution. IEC 61672-1 Class 1 sound level meters achieve frequency response flatness within \u00b10.7 dB (70 mB) from 31.5 Hz to 8 kHz. 1 mB = 0.001 B = 0.01 dB \u2248 1.151 \u00d7 10\u207b\u00b3 Np.",
    symbol: "mB"
  },
  centinepers: {
    name: "Centineper",
    description: "The centineper (cNp) is one-hundredth of a neper (1 cNp = 0.01 Np \u2248 0.08686 dB). In fibre-optic engineering, next-generation ultra-low-loss G.654.E optical fibre achieves below 0.15 dB/km \u2248 1.73 cNp/km at 1550 nm. Transmission-line textbooks (Pozar, Collin) use nepers per metre for the attenuation constant \u03b1; the centineper resolves sub-1-dB precision commonly needed in filter and amplifier characterisation. In underwater acoustics, seawater absorption at 100 kHz (relevant for high-frequency sonar) is \u2248 0.04 dB/m \u2248 4.6 \u00d7 10\u207b\u00b3 cNp/m (ISO 18405). In hearing science, adaptive psychophysical procedures probe detection thresholds at 0.1 dB step sizes \u2248 1.15 cNp, precision necessary to map fine structure in the auditory threshold contour. 1 cNp = 0.01 Np \u2248 0.08686 dB \u2248 8.686 \u00d7 10\u207b\u00b3 B.",
    symbol: "cNp"
  },
  centibels: {
    name: "Centibel",
    description: "The centibel (cB) is one-hundredth of a bel (1 cB = 0.01 B = 0.1 dB), equal to exactly one-tenth of a decibel. This resolution is the standard for clinical audiometry and professional audio equipment. The pure-tone audiogram (ISO 8253-1, ANSI S3.21) records hearing thresholds at 5 dB (50 cB) steps for screening, but research audiometers adjust in 0.25 dB (2.5 cB) steps for precise threshold measurement. The human just-noticeable difference (JND) for loudness of a 1 kHz tone at 70 dB SPL is \u2248 1\u20133 cB (Moore, 2012), rising to 5\u201310 cB near the absolute hearing threshold. IEC 60268-5 specifications for loudspeakers require frequency response plots with centibel (0.1 dB) resolution. In studio monitor calibration (SMPTE RP 200, ITU-R BS.1116), loudspeaker level matching is verified to within 0.1 dB (1 cB). 1 cB = 0.01 B = 0.1 dB \u2248 0.011513 Np.",
    symbol: "cB"
  },
  decinepers: {
    name: "Decineper",
    description: "The decineper (dNp) is one-tenth of a neper (1 dNp = 0.1 Np \u2248 0.8686 dB). This range directly overlaps the human auditory just-noticeable difference (JND): the typical JND for loudness at a moderate steady tone is \u2248 0.2\u20131 dB = 0.23\u20131.15 dNp for trained listeners (ISO 532B; Moore, 2012). In wave propagation, attenuation constants of 1\u201310 dNp/m (0.87\u20138.69 dB/m) are typical of semi-anechoic room wedge absorption and microwave absorber material characterisation. In electromagnetic propagation through seawater at 10 kHz, the skin depth is \u2248 2.7 m giving \u03b1 \u2248 3.7 dNp/m; at 1 MHz, \u03b4 \u2248 0.27 m giving \u03b1 \u2248 37 dNp/m. In control systems, the real part \u03c3 (Np/s) of the complex frequency s = \u03c3 + j\u03c9 governs exponential decay of transients; the decineper range of \u03c3 corresponds to mildly underdamped oscillators. 1 dNp = 0.1 Np \u2248 0.8686 dB \u2248 0.08686 B.",
    symbol: "dNp"
  },
  decibels: {
    name: "Decibel",
    description: "The decibel (dB) is the universal unit of sound level and signal level in acoustics, audio engineering, and telecommunications. Named in honour of Alexander Graham Bell (1847\u20131922), it was adopted by Bell Telephone Laboratories and CCITT in the 1920s\u20131930s. Sound pressure level: L_p = 20 \u00d7 log\u2081\u2080(p/p\u2080), where p\u2080 = 20 \u00b5Pa in air (ISO 1683). Key SPL reference points: 0 dB SPL = threshold of human hearing; 60 dB SPL = normal conversation at 1 m; 85 dB SPL = NIOSH 8-hour occupational limit; 120 dB SPL = pain threshold; 194 dB SPL = theoretical maximum undistorted plane wave in air at 1 atm. In digital audio (AES17, IEC 61606), 0 dBFS = maximum digital full-scale level. In RF engineering, 0 dBm = 1 mW; Wi-Fi signal strength ranges from \u221230 dBm (excellent) to \u221290 dBm (unusable). 1 dB = 0.1 B = ln(10)/20 Np \u2248 0.11513 Np.",
    symbol: "dB"
  },
  nepers: {
    name: "Neper",
    description: "The neper (Np) is the SI-coherent logarithmic unit for levels of field quantities, defined in IEC 80000-3 as L = ln(A\u2081/A\u2082) nepers for a field ratio and L = (1/2) \u00d7 ln(P\u2081/P\u2082) nepers for a power ratio. The BIPM 9th edition SI Brochure (2019) lists the neper among non-SI units accepted for use with the SI. Named after John Napier (1550\u20131617), the unit was formalised for telecommunications by the ITU in the 1930s\u20131940s. The exact conversion: 1 Np = 20/ln(10) dB \u2248 8.685890 dB; 1 dB = ln(10)/20 Np \u2248 0.115129 Np. In wave physics, the propagation constant \u03b3 = \u03b1 + j\u03b2 has the attenuation constant \u03b1 in Np/m: 1 Np/m means amplitude decays by 1/e per metre. In digital signal processing, a z-plane pole at radius r decays as r^n = e^{n\u00d7ln(r)}, with ln(r) in nepers per sample. 1 Np = 20/ln(10) dB \u2248 8.685890 dB \u2248 0.868589 B.",
    symbol: "Np"
  },
  bels: {
    name: "Bel",
    description: "The bel (B) is the original logarithmic unit of sound and signal level, defined as a tenfold power ratio: L = log\u2081\u2080(P\u2081/P\u2082) bels, or for field quantities L = 2 \u00d7 log\u2081\u2080(A\u2081/A\u2082) bels. Introduced at Bell Telephone Laboratories in the 1920s and named in honour of Alexander Graham Bell (1847\u20131922), the bel was used to quantify telephone transmission line attenuation: 1 bel of loss meant output power was 1/10 of input. Because 1 bel represents a tenfold change - far too coarse for grading (even untrained listeners can detect a 1 dB = 0.1 B change) - the decibel replaced it in virtually all practical use. Key reference points: 0 B = equal-level reference; 3 B = 30 dB (1000:1 power ratio); 6 B = 60 dB (normal speech at 1 m); 12 B = 120 dB (pain threshold). A 1 B (10 dB) increase in SPL roughly doubles perceived loudness (Stevens\u2019s power law at moderate intensities). 1 B = 10 dB = ln(10)/2 Np \u2248 1.151293 Np.",
    symbol: "B"
  },
  kilonepers: {
    name: "Kiloneper",
    description: "The kiloneper (kNp) equals exactly 1,000 nepers (1 kNp = 1,000 Np \u2248 8,685.89 dB), representing an amplitude ratio of e^1000 \u2248 5.075 \u00d7 10^434. No macroscopic physical or acoustic phenomenon approaches this scale: the entire dynamic range of human hearing spans \u2248 120 dB \u2248 13.8 Np, and the maximum practical acoustic measurement range is \u2248 250 dB \u2248 28.8 Np - a fraction of a single neper on the kiloneper scale. In theoretical physics, kiloneper-scale logarithmic values appear in WKB quantum tunnelling exponents for sub-atomic processes and in the Bekenstein-Hawking entropy of black holes: S = A/(4l_P\u00b2) \u2248 4\u03c0(M/M_P)\u00b2 nepers, which reaches the kiloneper regime for black holes of order 10\u00b3 Planck masses (\u2248 21.7 \u00b5g). The kiloneper is included as the SI kilo-prefix multiple of the neper, completing the SI-prefix family. 1 kNp = 1,000 Np \u2248 8,685.89 dB \u2248 868.589 B.",
    symbol: "kNp"
  },
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toDecibels);
}

function convertSound() {
  convertFactorBased(toDecibels);
}

initConverterPage();
