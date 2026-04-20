const toSeconds = {
  planckTime:     5.391247e-44,
  yoctoseconds:   1e-24,
  zeptoseconds:   1e-21,
  attoseconds:    1e-18,
  femtoseconds:   1e-15,
  picoseconds:    1e-12,
  nanoseconds:    1e-9,
  shakes:         1e-8,
  microseconds:   1e-6,
  milliseconds:   1e-3,
  seconds:        1,
  minutes:        60,
  microcenturies: 3155.76,
  hours:          3600,
  siderealDays:   86164.0905,
  days:           86400,
  weeks:          604800,
  fortnights:       1209600,
  draconicMonths:   2351135.808,
  siderealMonths:   2360591.57,
  anomalisticMonths: 2380713.21,
  synodicMonths:    2551442.8768992,
  months:         2629746,
  tropicalYears:  31556925.216,
  years:          31556952,
  julianYears:    31557600,
  siderealYears:  31558149.7632,
  olympiads:      126227808,
  decades:        315569520,
  centuries:      3155695200,
  millennia:      31556952000,
  megayears:      3.1556952e13,
  gigayears:      3.1556952e16,
};

// Unit descriptions
const unitDescriptions = {
  planckTime: {
    name: "Planck Time",
    description: "The Planck time (t_P) = \u221a(\u210fG/c\u2075) \u2248 5.391 \u00d7 10\u207b\u2074\u2074 s \u2014 the time for light to travel one Planck length (~1.616 \u00d7 10\u207b\u00b3\u2075 m). Below this scale, general relativity and quantum mechanics both break down; a theory of quantum gravity is needed. No physical process or instrument approaches this timescale \u2014 it is a theoretical lower bound. Introduced by Max Planck in 1899. 1 t_P \u2248 5.391 \u00d7 10\u207b\u2074\u2074 s.",
    symbol: "t_P"
  },
  yoctoseconds: {
    name: "Yoctosecond",
    description: "A yoctosecond (ys) = 10⁻²⁴ s - the smallest named SI prefix time unit. Light travels ~0.3 fm in 1 ys, about one-tenth the proton charge radius. Strong-force quark binding operates on ~1 ys timescales; W and Z boson lifetimes are ~260-290 ys. Lead-lead collisions at the LHC produce quark-gluon plasma that thermalises within a few ys. These timescales are inferred from decay widths via ΔE × Δt ≥ ℏ. 1 ys = 10⁻²⁴ s.",
    symbol: "ys"
  },
  zeptoseconds: {
    name: "Zeptosecond",
    description: "A zeptosecond (zs) = 10⁻²¹ s. In 2020, physicists at Goethe University Frankfurt measured the H₂ photoionisation time at ~247 zs - the first direct event measurement at this timescale. W-boson lifetime ~300 zs; strong-force quark confinement dynamics ~1-3 zs. These timescales are resolved via the energy-time uncertainty relation and lattice-QCD simulations. 1 zs = 10⁻²¹ s = 1,000 ys.",
    symbol: "zs"
  },
  attoseconds: {
    name: "Attosecond",
    description: "An attosecond (as) = 10⁻¹⁸ s - the timescale of electron dynamics in atoms. The Bohr-model orbital period in hydrogen is ~152 as. Electron tunnelling through atomic potential barriers takes a few hundred as. The 2023 Nobel Prize in Physics (Agostini, Krausz, L'Huillier) honoured methods for generating sub-100 as pulses via high-harmonic generation in Ti:sapphire lasers. 1 as = 10⁻¹⁸ s = 1,000 zs.",
    symbol: "as"
  },
  femtoseconds: {
    name: "Femtosecond",
    description: "A femtosecond (fs) = 10⁻¹⁵ s - the timescale of molecular vibrations and chemical reactions. Bond stretching: 10-200 fs; bending: 50-500 fs. Ahmed Zewail won the 1999 Nobel Prize in Chemistry for femtochemistry, capturing transition states in real time. Ti:sapphire lasers produce 10-100 fs pulses; LASIK uses 10-100 fs for precise corneal cuts. At 800 nm, one optical cycle = 2.67 fs. Light travels 300 nm in 1 fs. 1 fs = 10⁻¹⁵ s.",
    symbol: "fs"
  },
  picoseconds: {
    name: "Picosecond",
    description: "A picosecond (ps) = 10⁻¹² s; light travels 0.3 mm. Water molecules reorient via H-bond dynamics in ~1-3 ps, explaining microwave absorption. THz spectroscopy probes ps-scale dynamics in molecular systems. Sub-5 nm CMOS gate delays are a few ps; GaAs HEMTs reach ~0.1 ps. Muon mean lifetime = 2,197 ps. OTDR uses ps pulses for millimetre-resolution fibre-fault location. 1 ps = 10⁻¹² s.",
    symbol: "ps"
  },
  nanoseconds: {
    name: "Nanosecond",
    description: "A nanosecond (ns) = 10⁻⁹ s; light travels ~30 cm - Grace Hopper distributed 30 cm wire segments as physical 'nanoseconds' to illustrate latency. CPU clock cycles at 3-5 GHz: 0.2-0.33 ns. DDR5 CAS latency ~10 ns. GPS requires <3 ns timing accuracy for sub-metre positioning. Lightning return strokes rise in 100-200 ns. Data-centre 400GbE switch latency 300-500 ns. 1 ns = 10⁻⁹ s.",
    symbol: "ns"
  },
  shakes: {
    name: "Shake",
    description: "A shake = exactly 10 ns (10⁻⁸ s) - the informal unit for fission prompt-neutron generation time, coined at Los Alamos during the Manhattan Project (1943-1945). A prompt-neutron generation in a supercritical core takes ~1-10 shakes; a full explosive chain reaction unfolds over ~50-100 shakes. The name alludes to 'two shakes of a lamb's tail'. Still used in reactor physics and weapons-design calculations. 1 shake = 10 ns.",
    symbol: "sh"
  },
  microseconds: {
    name: "Microsecond",
    description: "A microsecond (µs) = 10⁻⁶ s; light travels ~300 m. Professional DSLR shutters reach 125 µs (1/8,000 s); electronic flash freezes motion in 1-50 µs. Radar pulse repetition intervals: 100-2,000 µs (15-300 km range). Ultrasound echo round-trips from 1-15 cm tissue depth: 13-200 µs. Muscle twitch contraction starts within 1-5 µs of the action potential. 1 µs = 10⁻⁶ s.",
    symbol: "\u00b5s"
  },
  milliseconds: {
    name: "Millisecond",
    description: "A millisecond (ms) = 10⁻³ s. Human visual reaction time 150-300 ms; auditory reaction 140-160 ms. Echo delays below ~30 ms cause Haas reinforcement; 100-500 ms are perceived as distinct echoes. One cinema frame at 24 fps = 41.7 ms; 60 fps gaming requires 16.7 ms/frame. Millisecond pulsars rotate in 1.4-30 ms. MIDI keyboard on-latency 1-3 ms. 1 ms = 10⁻³ s.",
    symbol: "ms"
  },
  seconds: {
    name: "Second",
    description: "The second (s) is the SI base unit of time, defined since 1967 as exactly 9,192,631,770 periods of the caesium-133 ground-state hyperfine transition at 0 K. Caesium fountain clocks realise this to ~10⁻¹⁶ (1 s lost per ~300 million years); optical lattice clocks (Sr, Yb) reach ~10⁻¹⁸. The second links to the metre via the defined speed of light c = 299,792,458 m/s exactly. 1 s = 1,000 ms = 1/60 min.",
    symbol: "s"
  },
  minutes: {
    name: "Minute",
    description: "A minute (min) = exactly 60 s, inherited from Babylonian sexagesimal astronomy. Medieval astronomers named the sixtieth part of a degree 'pars minuta prima' (hence minute); its sixtieth 'pars minuta secunda' (hence second). Running performance is expressed in min/km or min/mile; music tempo in BPM (beats per minute, ~40-220); angles in degrees-minutes-seconds (DMS). 1 min = 60 s = 1/60 h.",
    symbol: "min"
  },
  microcenturies: {
    name: "Microcentury",
    description: "A microcentury (µcy) = 10⁻⁶ of a Julian century = 3,155.76 s ≈ 52 min 35.76 s. Popularised by Richard Feynman, who told audiences a one-hour lecture was 'approximately one microcentury'. An 87-minute film ≈ 1.65 microcenturies. No formal SI recognition, but a favourite pedagogical example of SI prefixes applied to large bases. 1 µcy = 3,155.76 s = 52.596 min.",
    symbol: "µcy"
  },
  hours: {
    name: "Hour",
    description: "An hour (h) = exactly 3,600 s. The 24-hour day traces to ancient Egypt (10 daylight hours + 2 twilight + 12 night star-rise periods). Time zones are integer or half-hour UTC offsets (exceptions: India +5:30, Nepal +5:45). The kilowatt-hour = 3,600,000 J; Tc-99m half-life = 6.0067 h. Drug dosing and pharmacokinetics are expressed in hours. 1 h = 3,600 s = 60 min = 1/24 day.",
    symbol: "h"
  },
  siderealDays: {
    name: "Sidereal Day",
    description: "A sidereal day = Earth's rotation period relative to the stars = 23 h 56 min 4.0905 s = 86,164.0905 s - ~3 min 56 s shorter than the 24 h solar day because Earth advances ~1° in its orbit each day. Equatorial telescope mounts rotate at one turn per sidereal day to track stars. VLBI, GPS orbit determination, and polar-motion monitoring use sidereal rotation as their reference. 1 sid. day = 86,164.0905 s.",
    symbol: "sid.d"
  },
  days: {
    name: "Day",
    description: "A day (d) = exactly 86,400 s. Earth's actual solar day varies ±16 s due to orbital eccentricity and axial tilt (equation of time). Leap seconds (abandoned in UTC after 2035) corrected the TAI-UT1 divergence. Mars's sol = 24 h 39 min 35 s ≈ 88,775 s; a Martian year = 668.6 sols. The day structures circadian biology, tides, and planetary science. 1 day = 86,400 s = 24 h.",
    symbol: "d"
  },
  weeks: {
    name: "Week",
    description: "A week (wk) = exactly 7 days = 604,800 s. The 7-day week derives from Babylonian astronomy assigning one of the seven classical celestial bodies to each day - preserved in English (Sun-day, Mon-day, Satur-day) and Romance language day names. It spread globally via Jewish, Christian, and Islamic calendars. ISO 8601 numbers weeks 1-52(53) with Monday as day 1. 365-day years contain 52 weeks + 1 day. 1 wk = 7 d = 604,800 s.",
    symbol: "wk"
  },
  fortnights: {
    name: "Fortnight",
    description: "A fortnight = exactly 14 days = 2 weeks = 1,209,600 s. From Old English 'feowertiene niht' (fourteen nights), reflecting the Germanic custom of counting nights. Common in British, Irish, Australian, and NZ English for pay periods, rental cycles, and parliamentary recesses. The Moon's phase advances ~half a synodic month (≤14.77 days) per fortnight; spring and neap tides also cycle fortnightly. 1 fortnight = 14 d = 1,209,600 s.",
    symbol: "fn"
  },
  draconicMonths: {
    name: "Draconic Month",
    description: "The draconic (nodical) month = 27.2122 days = 2,351,135.8 s - the interval between successive Moon passages through the same orbital node. Named from the Latin 'draco' (dragon): eclipses only occur near the nodes, where the Moon can align with the Sun or Earth's shadow. The Saros cycle (18 yr 11 d) equals ~242 draconic months, enabling eclipse sequence forecasting. 1 drac.mo = 27.2122 d.",
    symbol: "drac.mo"
  },
  siderealMonths: {
    name: "Sidereal Month",
    description: "The sidereal month = Moon's orbital period relative to the fixed stars = 27.3217 days = 2,360,591.6 s - the shortest lunar month. It is ~2.21 days shorter than the synodic month (29.53 d) because Earth advances ~27° along its orbit in the same period; the Moon must travel further to re-align with the Sun. Used in GPS orbit design, tidal modelling, and lunar laser ranging. 1 sid.mo = 27.3217 d.",
    symbol: "sid.mo"
  },
  anomalisticMonths: {
    name: "Anomalistic Month",
    description: "The anomalistic month = interval between successive Moon perigees = 27.5546 days = 2,380,713.2 s. Slightly longer than the sidereal month because the Moon's perigee precesses, completing one revolution in ~8.85 years. Governs 'supermoons': a full moon at perigee appears ~14% wider and 30% brighter. Tidal forces at perigee are ~30% stronger than at apogee. 1 anom.mo = 27.5546 d.",
    symbol: "anom.mo"
  },
  synodicMonths: {
    name: "Synodic Month",
    description: "A synodic (lunar) month = new moon to new moon = 29.5306 days = 2,551,442.9 s. Longer than the sidereal month (27.32 d) because Earth advances ~27° in its orbit during that time; the Moon must travel further to realign with the Sun. Islamic Hijri, Hebrew lunisolar, and Chinese calendars are built on synodic months. Eclipses repeat via the Saros cycle (18 yr 11 d = 223 synodic months). 1 syn.mo ≈ 29.5306 d.",
    symbol: "syn.mo"
  },
  months: {
    name: "Month",
    description: "A mean Gregorian calendar month = 365.2425 ÷ 12 = 30.436875 days = 2,629,746 s exactly (averaged over the 400-year cycle with exactly 97 leap years). Individual months have 28-31 days. Loan schedules, subscriptions, and mobile billing reference 'per month', requiring explicit agreement on meaning. ISO 8601 uses 'P1M'. 1 mo = 30.436875 d = 2,629,746 s.",
    symbol: "mo"
  },
  tropicalYears: {
    name: "Tropical Year",
    description: "The tropical year = time from March equinox to the next = 365.24219 days = 31,556,925.2 s - the year that governs the seasons. The Gregorian 97/400 leap rule approximates it as 365.2425 days, leaving a residual drift of only ~26.8 s/year. The tropical year shortens ~0.53 s per century due to tidal deceleration. Persian Solar Hijri and Mayan Haab' calendars also approximate it. 1 a_trop ≈ 365.24219 d.",
    symbol: "a_trop"
  },
  years: {
    name: "Year (Gregorian)",
    description: "The Gregorian year = exactly 365.2425 days = 31,556,952 s (mean over the 400-year cycle with 97 leap years). The Julian calendar (45 BCE) used 365.25 days; Gregorian reform (1582) dropped 10 days and amended the centennial rule. Britain adopted it in 1752; Greece in 1923. Carbon-14 dates are reported in 'years BP' (before 1950 CE). 1 yr = 365.2425 d = 8,765.82 h = 31,556,952 s.",
    symbol: "yr"
  },
  julianYears: {
    name: "Julian Year",
    description: "The Julian year (a_J) = exactly 365.25 days = 31,557,600 s - the IAU standard year for astronomical distances. The light-year is formally 1 ly = c × 1 a_J = 9.461 × 10¹⁵ m (IAU 2012 B2). Julian years differ from Gregorian years by only 648 s (~10.8 min/year); important for high-precision astrometry or calculations spanning centuries. 1 a_J = 365.25 d = 31,557,600 s.",
    symbol: "a_J"
  },
  siderealYears: {
    name: "Sidereal Year",
    description: "The sidereal year = Earth's orbital period relative to the stars = 365.25636 days = 31,558,149.8 s - about 20 min 24 s longer than the tropical year. The gap arises from precession of the equinoxes (~50 arcsec/year westward drift), which causes the tropical year to end slightly before the sidereal orbit completes. JPL DE440 ephemerides and J2000.0 epoch are anchored to the sidereal frame. 1 a_sid = 365.25636 d.",
    symbol: "a_sid"
  },
  olympiads: {
    name: "Olympiad",
    description: "An Olympiad = exactly 4 Gregorian years = 1,461 days = 126,227,808 s. In ancient Greece it was the standard historical dating system counting from the first Olympic Games at Olympia in 776 BCE; adopted by Hellenistic historians (Polybius, Timaeus). Modern Olympiads are numbered from Athens 1896. The 4-year cycle is mirrored in US presidential elections and EU Parliamentary terms. 1 Ol = 4 yr = 126,227,808 s.",
    symbol: "Ol"
  },
  decades: {
    name: "Decade",
    description: "A decade = exactly 10 Gregorian years = 315,569,520 s. Climate scientists compute 10-year running means to remove interannual variability; IPCC reports compare decadal temperature anomalies. Moore's Law predicted ~10× transistor density increase per decade. US Census counts are constitutionally mandated each decade. Cultural periods are colloquially labelled by decade (the 1960s, the 1980s). 1 decade = 10 yr.",
    symbol: "dec"
  },
  centuries: {
    name: "Century",
    description: "A century = exactly 100 Gregorian years ≈ 3.156 × 10⁹ s. Standard unit of historical periodisation (the 20th century, the 18th-century Enlightenment). IPCC projects warming and sea-level rise on century timescales. Precession of the equinoxes advances ~1.39°/century, so zodiac constellations no longer match their named seasons. Ice-core and radiocarbon records are commonly displayed at century resolution. 1 century = 100 yr.",
    symbol: "cent"
  },
  millennia: {
    name: "Millennium",
    description: "A millennium (1 ka) = 1,000 Gregorian years ≈ 3.156 × 10¹⁰ s. Standard unit in archaeology and Quaternary geology: Neolithic transition ~10-12 ka BP; Last Glacial Maximum ~21 ka BP; Homo sapiens leaving Africa ~60-70 ka BP. Milankovitch cycles include the 41 ka obliquity and ~100 ka eccentricity cycle. EPICA Antarctic ice core spans ~800 ka. Precession completes ~26 ka. 1 ka = 1,000 yr.",
    symbol: "ka"
  },
  megayears: {
    name: "Megayear",
    description: "A megayear (1 Ma) = 10⁶ yr ≈ 3.156 × 10¹³ s - the timescale of geology and tectonic evolution. The K-Pg mass extinction at 66.0 Ma; Cambrian explosion ~538.8 Ma; Great Oxygenation Event ~2,400 Ma. Plate motion at 2-10 cm/yr = 200-1,000 km per Ma (Atlantic ~3,000 km wider since Pangaea rifting ~200 Ma ago). Background extinction rate measured in extinctions per million species-years. 1 Ma = 10⁶ yr.",
    symbol: "Ma"
  },
  gigayears: {
    name: "Gigayear",
    description: "A gigayear (1 Ga) = 10⁹ yr ≈ 3.156 × 10¹⁶ s - the timescale of stellar evolution and cosmology. Universe age: 13.787 ± 0.020 Ga (Planck CMB). Sun: 4.603 Ga old; red giant in ~5 Ga. A 0.1 M☉ red dwarf lives ~10,000 Ga. Uranium-238 half-life = 4.468 Ga (used in radiometric dating). Proton decay (GUT prediction): ~10³⁴ yr = ~10²⁵ Ga. 1 Ga = 10⁹ yr.",
    symbol: "Ga"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toSeconds);
}

function convertTime() {
  convertFactorBased(toSeconds);
}

initConverterPage();
