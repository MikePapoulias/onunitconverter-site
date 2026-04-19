// Base unit: ohm (\u03a9) - the SI derived unit of electrical resistance.
// Electrical resistance R [M L\u00b2 T\u207b\u00b3 A\u207b\u00b2] quantifies how strongly a conductor
// opposes the flow of electric current; V = I \u00d7 R (Ohm's law, 1827).
// All factors express how many ohms equal 1 unit of the given measure.
//
// Exact foundations (2019 SI revision):
//   c   = 299 792 458 m/s               (exact, speed of light definition)
//   h   = 6.626 070 15 \u00d7 10\u207b\u00b3\u2074 J\u00b7s     (exact, Planck constant definition)
//   e   = 1.602 176 634 \u00d7 10\u207b\u00b9\u2079 C      (exact, elementary charge definition)
//   1 \u03a9 = 1 V/A = 1 kg\u00b7m\u00b2\u00b7A\u207b\u00b2\u00b7s\u207b\u00b3
//
// SI prefix units (all exact by definition):
//   1 p\u03a9 = 10\u207b\u00b9\u00b2 \u03a9    1 \u00b5\u03a9 = 10\u207b\u2076 \u03a9    1 m\u03a9 = 10\u207b\u00b3 \u03a9
//   1 k\u03a9 = 10\u00b3 \u03a9     1 M\u03a9 = 10\u2076 \u03a9     1 G\u03a9 = 10\u2079 \u03a9    1 T\u03a9 = 10\u00b9\u00b2 \u03a9
//
// Abohm (CGS-EMU) - exact:
//   1 ab\u03a9 = 1 abV/abA = 10\u207b\u2078 V / 10 A = 10\u207b\u2079 \u03a9  (exactly equal to 1 n\u03a9)
//
// Statohm (CGS-Gaussian) - exact:
//   1 stat\u03a9 = 1 statV/statA
//            = (c \u00d7 10\u207b\u2076 V) / (1/(10c) A)
//            = 10c\u00b2 \u00d7 10\u207b\u2076 \u03a9
//            = c\u00b2 \u00d7 10\u207b\u2075 \u03a9
//            = 299 792 458\u00b2 \u00d7 10\u207b\u2075 \u03a9
//            \u2248 898 755 178 736.8 \u03a9   (exact, since c is exact)

const toOhms = {
  // -- Picoohm ----------------------------------------------------------------
  picoohms:   1e-12,                          // exact: 10\u207b\u00b9\u00b2 \u03a9 (SI prefix pico)
  // -- Nanoohm ---------------------------------------------------------------
  nanoohms:   1e-9,                           // exact: 10\u207b\u2079 \u03a9 (SI prefix nano) = 1 ab\u03a9
  // -- Abohm (CGS-EMU) --------------------------------------------------------
  abohms:     1e-9,                           // exact: 1 abV/abA = 10\u207b\u2078V/10A = 10\u207b\u2079 \u03a9 (= 1 n\u03a9)
  // -- Microohm ---------------------------------------------------------------
  microohms:  1e-6,                           // exact: 10\u207b\u2076 \u03a9 (SI prefix micro)
  // -- Milliohm ---------------------------------------------------------------
  milliohms:  1e-3,                           // exact: 10\u207b\u00b3 \u03a9 (SI prefix milli)
  // -- Ohm (SI derived unit) --------------------------------------------------
  ohms:       1,                              // reference (base unit)
  // -- Kilohm -----------------------------------------------------------------
  kilohms:    1e3,                            // exact: 10\u00b3 \u03a9 (SI prefix kilo)
  // -- Megaohm ----------------------------------------------------------------
  megaohms:   1e6,                            // exact: 10\u2076 \u03a9 (SI prefix mega)
  // -- Gigaohm ----------------------------------------------------------------
  gigaohms:   1e9,                            // exact: 10\u2079 \u03a9 (SI prefix giga)
  // -- Statohm (CGS-Gaussian) -------------------------------------------------
  statohms:   299792458 * 299792458 / 1e5,    // exact: c\u00b2 \u00d7 10\u207b\u2075 \u03a9 \u2248 898.755 G\u03a9
  // -- Teraohm ----------------------------------------------------------------
  teraohms:   1e12,                           // exact: 10\u00b9\u00b2 \u03a9 (SI prefix tera)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  picoohms: {
    name: "Picoohms",
    description: "The picoohm (p\u03a9) equals 10\u207b\u00b9\u00b2 \u03a9, used for ultra-low resistance measurements in superconductors and precision four-wire metrology. A superconducting wire transitioning through its critical temperature shows residual resistance at the picoohm level; high-precision Josephson-array resistance bridges operated at national metrology institutes resolve differences below 1 p\u03a9. 1 p\u03a9 = 10\u207b\u00b3 n\u03a9 = 10\u207b\u00b9\u00b2 \u03a9.",
    symbol: "p\u03a9"
  },
  nanoohms: {
    name: "Nanoohms",
    description: "The nanoohm (n\u03a9) equals 10\u207b\u2079 \u03a9, the same magnitude as the CGS-EMU abohm (1 ab\u03a9 = 10\u207b\u2079 \u03a9 exactly). This scale is used for the lowest measurable resistances in copper busbars at cryogenic temperatures and in precision four-wire measurements of welded or crimped joints; the residual resistance of a high-quality solder joint on 2.5 mm\u00b2 copper cable falls below 10 n\u03a9. 1 n\u03a9 = 10\u207b\u00b3 \u00b5\u03a9 = 10\u207b\u2079 \u03a9.",
    symbol: "n\u03a9"
  },
  abohms: {
    name: "Abohms",
    description: "The abohm (ab\u03a9) is the resistance unit of the CGS-EMU system, defined as 1 abvolt per abampere = 10\u207b\u2078 V / 10 A = 10\u207b\u2079 \u03a9, exactly equal to 1 n\u03a9. It appears in nineteenth- and early-twentieth-century electromagnetic engineering texts for low-resistance measurements of copper conductors, motor windings, and cable joints. 1 ab\u03a9 = 10\u207b\u2079 \u03a9 = 1 n\u03a9.",
    symbol: "ab\u03a9"
  },
  microohms: {
    name: "Microohms",
    description: "The microohm (\u00b5\u03a9) equals 10\u207b\u2076 \u03a9, the practical scale for contact resistance testing, bus-bar joints, and circuit-breaker contacts. A well-made bolted bus-bar connection has contact resistance below 50 \u00b5\u03a9; a 25 mm\u00b2 copper conductor has resistance of about 0.7 \u00b5\u03a9/mm; IEC 60947 specifies acceptance limits for switchgear contacts in microohms. 1 \u00b5\u03a9 = 10\u207b\u00b3 m\u03a9 = 10\u00b3 n\u03a9.",
    symbol: "\u00b5\u03a9"
  },
  milliohms: {
    name: "Milliohms",
    description: "The milliohm (m\u03a9) equals 10\u207b\u00b3 \u03a9, the scale of precision current-sensing shunts, relay contacts, and PCB trace resistance. Current-sensing shunts of 1-10 m\u03a9 allow high-current measurement by detecting the millivolt drop they produce; electrical continuity standards flag connections above a few milliohms; DC winding resistance of large motor coils is typically 0.1-10 m\u03a9. 1 m\u03a9 = 10\u207b\u00b3 \u03a9 = 10\u00b3 \u00b5\u03a9.",
    symbol: "m\u03a9"
  },
  ohms: {
    name: "Ohms",
    description: "The ohm (\u03a9) is the SI derived unit of electrical resistance, equal to 1 volt per ampere (1 V/A = 1 kg\u00b7m\u00b2\u00b7A\u207b\u00b2\u00b7s\u207b\u00b3), named after Georg Simon Ohm who published V = IR in 1827. Common benchmarks: a standard earphone is 32 \u03a9, a coaxial cable has 50 or 75 \u03a9 characteristic impedance, and a typical carbon-film resistor spans 1 \u03a9 to 10 M\u03a9. The ohm is realised internationally via the quantum Hall resistance standard R\u2096 = h/e\u00b2 \u2248 25\u202f812.807 \u03a9.",
    symbol: "\u03a9"
  },
  kilohms: {
    name: "Kilohms",
    description: "The kilohm (k\u03a9) equals 10\u00b3 \u03a9, covering the most common range of discrete resistors in electronics. Pull-up and pull-down resistors are typically 1-10 k\u03a9; potentiometer tracks run 1-100 k\u03a9; input-bias resistors in transistor amplifiers and voltage-divider networks are almost always in the kilohm range. 1 k\u03a9 = 10\u00b3 \u03a9 = 10\u207b\u00b3 M\u03a9.",
    symbol: "k\u03a9"
  },
  megaohms: {
    name: "Megaohms",
    description: "The megaohm (M\u03a9) equals 10\u2076 \u03a9, the scale of insulation testing and high-impedance analogue circuit design. Insulation testers (meggers) measure cable and motor winding insulation from 0.1-1000 M\u03a9; pH electrode output impedance is 10-500 M\u03a9; precision op-amp feedback networks use 1-10 M\u03a9 resistors to set very high signal-source impedance. 1 M\u03a9 = 10\u2076 \u03a9 = 10\u00b3 k\u03a9.",
    symbol: "M\u03a9"
  },
  gigaohms: {
    name: "Gigaohms",
    description: "The gigaohm (G\u03a9) equals 10\u2079 \u03a9, the regime of PTFE and glass insulation, MOSFET gate oxide, and specialised electrometer inputs. High-quality PCB insulation resistance between adjacent tracks exceeds 10 G\u03a9; the reverse-leakage resistance of a silicon junction at room temperature is in the gigaohm range; the guarded input of a Keithley 6517B electrometer is rated at 200 T\u03a9, but JFET-input op-amps commonly show input resistance of a few G\u03a9. 1 G\u03a9 = 10\u2079 \u03a9 = 10\u00b3 M\u03a9.",
    symbol: "G\u03a9"
  },
  statohms: {
    name: "Statohms",
    description: "The statohm (stat\u03a9) is the resistance unit of the CGS-Gaussian system, equal to 1 statvolt per statampere = c\u00b2 \u00d7 10\u207b\u2075 \u03a9 \u2248 898.755 G\u03a9 (exact, where c = 299\u202f792\u202f458 m/s). In Gaussian CGS Ohm's law takes the form R [stat\u03a9] = V [statV] / I [statA]; the statohm appears in classical electrodynamics and plasma physics texts alongside other Gaussian-CGS units. 1 stat\u03a9 \u2248 898.755 G\u03a9 \u2248 0.899 T\u03a9.",
    symbol: "stat\u03a9"
  },
  teraohms: {
    name: "Teraohms",
    description: "The teraohm (T\u03a9) equals 10\u00b9\u00b2 \u03a9, the upper practical range of insulation resistance in laboratory and industrial measurements. Dry PTFE and fused quartz have volume resistivities of 10\u00b9\u2078 \u03a9\u00b7m or more, giving teraohm resistance for centimetre-thick samples; silicon photodiode dark resistance at room temperature can reach several T\u03a9; electrometer-grade guarded coaxial cables specify insulation resistance above 1 T\u03a9. 1 T\u03a9 = 10\u00b9\u00b2 \u03a9 = 10\u00b3 G\u03a9.",
    symbol: "T\u03a9"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toOhms);
}

function convertResistance() {
  convertFactorBased(toOhms);
}

initConverterPage();
