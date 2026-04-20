// Base unit: weber (Wb) - the SI derived unit of magnetic flux.
// Magnetic flux \u03a6 = B \u00b7 A (flux density \u00d7 area, for uniform B perpendicular to A).
// Faraday's law: \u03a6 = \u222b\u222b B \u00b7 dA; induced EMF \u03b5 = -d\u03a6/dt.
// All factors express how many Wb equal 1 unit of the given measure.
//
// Exact foundations:
//   1 Wb = 1 V\u00b7s = 1 kg\u00b7m\u00b2\u00b7s\u207b\u00b2\u00b7A\u207b\u00b9  (SI coherent derived unit; weber)
//   1 Mx = 10\u207b\u2078 Wb                          (exact; maxwell, CGS-Gaussian; 1 G\u00b7cm\u00b2 = 10\u207b\u2078 Wb)
//   \u03a6\u2080 = h/(2e) \u2248 2.067833848\u00d710\u207b\u00b9\u2075 Wb     (magnetic flux quantum; exact in 2019 SI:
//            h = 6.62607015\u00d710\u207b\u00b3\u2074 J\u00b7s, e = 1.602176634\u00d710\u207b\u00b9\u2079 C)
//
// SI prefix Wb units (exact by SI prefix definitions):
//   1 fWb = 10\u207b\u00b9\u2075 Wb   1 pWb = 10\u207b\u00b9\u00b2 Wb   1 nWb = 10\u207b\u2079 Wb
//   1 \u00b5Wb = 10\u207b\u2076 Wb    1 mWb = 10\u207b\u00b3 Wb    1 kWb = 10\u00b3 Wb
//   1 MWb = 10\u2076 Wb      1 GWb = 10\u2079 Wb

const toWebers = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtowebers:    1e-15,                   // exact: 10\u207b\u00b9\u2075 Wb (SI prefix femto)
  flux_quanta:    2.067833848e-15,         // exact: h/(2e) Wb; 2019 SI definition
  picowebers:     1e-12,                   // exact: 10\u207b\u00b9\u00b2 Wb (SI prefix pico)
  nanowebers:     1e-9,                    // exact: 10\u207b\u2079 Wb (SI prefix nano)
  // -- Maxwell (CGS unit) ----------------------------------------------------
  maxwells:       1e-8,                    // exact: 10\u207b\u2078 Wb; 1 Mx = 1 G\u00b7cm\u00b2 (CGS-Gaussian)
  // -- SI prefix units (continued) -------------------------------------------
  microwebers:    1e-6,                    // exact: 10\u207b\u2076 Wb (SI prefix micro)
  milliwebers:    1e-3,                    // exact: 10\u207b\u00b3 Wb (SI prefix milli)
  // -- Base unit (SI) --------------------------------------------------------
  webers:         1,                       // reference (base unit)
  // -- Large SI prefix units -------------------------------------------------
  kilowebers:     1e3,                     // exact: 10\u00b3 Wb (SI prefix kilo)
  megawebers:     1e6,                     // exact: 10\u2076 Wb (SI prefix mega)
  gigawebers:     1e9,                     // exact: 10\u2079 Wb (SI prefix giga)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtowebers: {
    name: "Femtowebers",
    description: "The femtoweber (fWb) equals 10\u207b\u00b9\u2075 Wb. Used in SQUID magnetometer research to express flux noise spectral density; a typical high-T\u2082 SQUID has white flux noise of a few \u00b5\u03a6\u2080/\u221aHz, corresponding to sub-fWb/\u221aHz levels. 1 fWb = 10\u207b\u00b9\u2075 Wb.",
    symbol: "fWb"
  },
  flux_quanta: {
    name: "Flux quanta",
    description: "The magnetic flux quantum (\u03a6\u2080 = h/2e) equals exactly 2.067833848\u00d710\u207b\u00b9\u2075 Wb (2019 SI definition). The natural unit of flux in superconductors - flux enters a type-II superconductor in integer multiples of \u03a6\u2080 (Abrikosov vortices). Used in SQUID, Josephson junction and quantum computing metrology. 1 \u03a6\u2080 \u2248 2.068 fWb.",
    symbol: "\u03a6\u2080"
  },
  picowebers: {
    name: "Picowebers",
    description: "The picoweber (pWb) equals 10\u207b\u00b9\u00b2 Wb. Encountered in weak-signal inductive sensor calibration and magnetoencephalography (MEG) signal chain characterisation; the residual flux in a demagnetised thin-film read head is in the pWb range. 1 pWb = 10\u207b\u00b9\u00b2 Wb = 10\u00b3 fWb.",
    symbol: "pWb"
  },
  nanowebers: {
    name: "Nanowebers",
    description: "The nanoweber (nWb) equals 10\u207b\u2079 Wb. Relevant in search-coil magnetometer calibration, fluxgate sensor testing, and geomagnetic observatory instruments; a 100-turn coil of 10 cm\u00b2 area in Earth's field (\u223c50 \u00b5T) links \u223c50 nWb. 1 nWb = 10\u207b\u2079 Wb = 10 Mx.",
    symbol: "nWb"
  },
  maxwells: {
    name: "Maxwells",
    description: "The maxwell (Mx) equals exactly 10\u207b\u2078 Wb, the CGS unit of magnetic flux named after James Clerk Maxwell. Still widely used in permanent magnet and motor design datasheets; a typical 10 mm NdFeB disc magnet has a remanent flux of around 10 000-100 000 Mx. 1 Mx = 10\u207b\u2078 Wb.",
    symbol: "Mx"
  },
  microwebers: {
    name: "Microwebers",
    description: "The microweber (\u00b5Wb) equals 10\u207b\u2076 Wb = 100 Mx. Used in small inductor and reed switch characterisation; a ferrite bead on a PCB trace links a few \u00b5Wb at normal operating flux densities. 1 \u00b5Wb = 10\u207b\u2076 Wb = 100 Mx.",
    symbol: "\u00b5Wb"
  },
  milliwebers: {
    name: "Milliwebers",
    description: "The milliweber (mWb) equals 10\u207b\u00b3 Wb. Practical unit for small power inductors and relay cores - a typical E-core ferrite transformer with a 1 cm\u00b2 cross-section at 0.3 T saturates at 0.3 mWb; audio transformer cores operate in the mWb range. 1 mWb = 10\u207b\u00b3 Wb = 10\u2075 Mx.",
    symbol: "mWb"
  },
  webers: {
    name: "Webers",
    description: "The weber (Wb) is the SI coherent unit of magnetic flux, defined as 1 V\u00b7s. A change of 1 Wb per second through a single-turn coil induces an EMF of 1 V. Power transformer cores at 50/60 Hz operate at 0.5-1.5 Wb in large units; a generator stator coil links a few Wb per pole. 1 Wb = 1 V\u00b7s = 10\u2078 Mx.",
    symbol: "Wb"
  },
  kilowebers: {
    name: "Kilowebers",
    description: "The kiloweber (kWb) equals 10\u00b3 Wb. Relevant for large power generator and turbine alternator flux calculations; a large hydro generator rotor pole may link 1-5 kWb; high-field research electromagnets with large-area pole faces reach kWb total flux. 1 kWb = 10\u00b3 Wb = 10\u00b9\u00b9 Mx.",
    symbol: "kWb"
  },
  megawebers: {
    name: "Megawebers",
    description: "The megaweber (MWb) equals 10\u2076 Wb. Encountered in calculations for very large power plant generators and astrophysical applications; the total flux through a cross-section of a large sunspot group can reach MWb scale. 1 MWb = 10\u2076 Wb = 10\u00b9\u2074 Mx.",
    symbol: "MWb"
  },
  gigawebers: {
    name: "Gigawebers",
    description: "The gigaweber (GWb) equals 10\u2079 Wb. An extreme unit used in solar and astrophysical magnetic flux accounting - active solar regions and coronal mass ejections (CMEs) are characterised by flux values in the GWb range. 1 GWb = 10\u2079 Wb = 10\u00b9\u2077 Mx.",
    symbol: "GWb"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toWebers);
}

function convertMagneticFlux() {
  convertFactorBased(toWebers);
}

initConverterPage();
