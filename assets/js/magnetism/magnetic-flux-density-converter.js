// Base unit: tesla (T) - the SI derived unit of magnetic flux density (magnetic induction).
// Magnetic flux density B [T = Wb/m\u00b2 = kg\u00b7s\u207b\u00b2\u00b7A\u207b\u00b9] relates to flux and field strength:
//   B = \u03a6/A  (flux per area, for uniform B perpendicular to area A)
//   B = \u00b5\u2080(\u00b5\u1d63 H + M)  (in matter: permeability \u00d7 (field strength + magnetisation))
// All factors express how many T equal 1 unit of the given measure.
//
// Exact foundations:
//   1 T   = 1 Wb/m\u00b2 = 1 kg\u00b7s\u207b\u00b2\u00b7A\u207b\u00b9  (SI coherent derived unit; tesla)
//   1 G   = 10\u207b\u2074 T                       (exact; gauss, CGS-Gaussian; 1 G = 1 Mx/cm\u00b2)
//   1 \u03b3   = 10\u207b\u2079 T = 1 nT                (exact; gamma; geomagnetic survey unit)
//   1 mG  = 10\u207b\u2077 T                       (exact; milligauss = 10\u207b\u00b3 G)
//
// SI prefix T units (exact by SI prefix definitions):
//   1 fT  = 10\u207b\u00b9\u2075 T   1 pT = 10\u207b\u00b9\u00b2 T   1 nT = 10\u207b\u2079 T
//   1 \u00b5T  = 10\u207b\u2076 T   1 mT = 10\u207b\u00b3 T     1 kT = 10\u00b3 T
//   1 MT  = 10\u2076 T

const toTeslas = {
  // -- SI prefix units (smallest to largest) ---------------------------------
  femtoteslas:    1e-15,    // exact: 10\u207b\u00b9\u2075 T (SI prefix femto)
  picoteslas:     1e-12,    // exact: 10\u207b\u00b9\u00b2 T (SI prefix pico)
  nanoteslas:     1e-9,     // exact: 10\u207b\u2079 T (SI prefix nano)
  // -- Gamma (geophysics CGS unit, = nT) -------------------------------------
  gammas:         1e-9,     // exact: 10\u207b\u2079 T; 1 \u03b3 = 1 nT (geomagnetic survey unit)
  // -- Milligauss (CGS submultiple) ------------------------------------------
  milligausses:   1e-7,     // exact: 10\u207b\u2077 T; 1 mG = 10\u207b\u00b3 \u00d7 10\u207b\u2074 T
  // -- SI micro prefix -------------------------------------------------------
  microteslas:    1e-6,     // exact: 10\u207b\u2076 T (SI prefix micro)
  // -- Gauss (CGS base unit) -------------------------------------------------
  gausses:        1e-4,     // exact: 10\u207b\u2074 T; 1 G = 1 Mx/cm\u00b2 (CGS-Gaussian)
  // -- SI milli prefix -------------------------------------------------------
  milliteslas:    1e-3,     // exact: 10\u207b\u00b3 T (SI prefix milli)
  // -- Base unit (SI) --------------------------------------------------------
  teslas:         1,        // reference (base unit)
  // -- Large SI prefix units -------------------------------------------------
  kiloteslas:     1e3,      // exact: 10\u00b3 T (SI prefix kilo)
  megateslas:     1e6,      // exact: 10\u2076 T (SI prefix mega)
};

// Unit descriptions (parsed at build time by build.js for static SEO text)
const unitDescriptions = {
  femtoteslas: {
    name: "Femtoteslas",
    description: "The femtotesla (fT) equals 10\u207b\u00b9\u2075 T. The standard field scale for biomagnetic measurements: neural signals in magnetoencephalography (MEG) produce cortical fields of 10-1000 fT, while cardiac magnetic fields (magnetocardiography, MCG) are around 10-100 pT. SQUID sensors routinely measure in the fT range. 1 fT = 10\u207b\u00b9\u2075 T.",
    symbol: "fT"
  },
  picoteslas: {
    name: "Picoteslas",
    description: "The picotesla (pT) equals 10\u207b\u00b9\u00b2 T. Used in magnetocardiography (MCG) and magnetic anomaly detection (MAD) - the heart's magnetic field peaks at around 50-100 pT; a submerged ferromagnetic submarine distorts Earth's field by a few pT at detection range. 1 pT = 10\u207b\u00b9\u00b2 T.",
    symbol: "pT"
  },
  nanoteslas: {
    name: "Nanoteslas",
    description: "The nanotesla (nT) equals 10\u207b\u2079 T. The standard unit in geomagnetism and space physics: Earth's surface field is 25 000-65 000 nT; geomagnetic storms cause fluctuations of hundreds to thousands of nT; solar wind field at 1 AU is 2-10 nT. 1 nT = 10\u207b\u2079 T = 1 \u03b3.",
    symbol: "nT"
  },
  gammas: {
    name: "Gammas",
    description: "The gamma (\u03b3) equals exactly 1 nT = 10\u207b\u2079 T. A legacy CGS-adjacent unit adopted in geophysics and aeromagnetic surveying before SI. Total-field aeromagnetic surveys measure local anomalies of a few \u03b3 to thousands of \u03b3 over mineral deposits. 1 \u03b3 = 1 nT = 10\u207b\u2079 T.",
    symbol: "\u03b3"
  },
  milligausses: {
    name: "Milligausses",
    description: "The milligauss (mG) equals 10\u207b\u2077 T. The dominant unit in EMF (electromagnetic field) health and safety assessments: ICNIRP and IEEE C95.1 reference levels for power-frequency (50/60 Hz) public exposure limits are expressed in mG or \u00b5T; typical residential power-line exposure is 0.2-5 mG. 1 mG = 10\u207b\u2077 T = 0.1 \u00b5T.",
    symbol: "mG"
  },
  microteslas: {
    name: "Microteslas",
    description: "The microtesla (\u00b5T) equals 10\u207b\u2076 T. Earth's surface magnetic field is approximately 25-65 \u00b5T; the WHO recommends 100 \u00b5T as an occupational limit for 50/60 Hz fields; metal detectors and electromagnetic compatibility (EMC) tests routinely work in the \u00b5T range. 1 \u00b5T = 10\u207b\u2076 T = 10 mG.",
    symbol: "\u00b5T"
  },
  gausses: {
    name: "Gausses",
    description: "The gauss (G) equals exactly 10\u207b\u2074 T, the CGS unit of magnetic flux density. Still widely used in magnetics engineering: permanent magnet remanence is typically 5 000-14 000 G for NdFeB; MRI field strengths are sometimes quoted as 10 000 G (1 T); loudspeaker gap fields are 8 000-20 000 G. 1 G = 10\u207b\u2074 T.",
    symbol: "G"
  },
  milliteslas: {
    name: "Milliteslas",
    description: "The millitesla (mT) equals 10\u207b\u00b3 T = 10 G. Used in industrial induction heating, magnetic particle inspection (MPI), and low-field MRI systems; the fringe field at the 5 G (0.5 mT) safety line around clinical MRI scanners is the standard exclusion boundary. 1 mT = 10\u207b\u00b3 T = 10 G.",
    symbol: "mT"
  },
  teslas: {
    name: "Teslas",
    description: "The tesla (T) is the SI coherent unit of magnetic flux density, equal to 1 Wb/m\u00b2 = 1 kg\u00b7s\u207b\u00b2\u00b7A\u207b\u00b9. Clinical MRI scanners operate at 1.5-3 T; research MRI at 7-11.7 T; the strongest continuous electromagnet is 45 T (NHMFL); NdFeB remanence is about 1.0-1.4 T. 1 T = 10\u2074 G = 1 Wb/m\u00b2.",
    symbol: "T"
  },
  kiloteslas: {
    name: "Kiloteslas",
    description: "The kilotesla (kT) equals 10\u00b3 T. Encountered only in pulsed-power physics experiments: the National High Magnetic Field Laboratory (NHMFL) 100 T pulsed magnets approach 0.1 kT; explosive-driven flux compression generators have reached 2.8 kT (2 800 T) in short pulses. 1 kT = 10\u00b3 T = 10\u2077 G.",
    symbol: "kT"
  },
  megateslas: {
    name: "Megateslas",
    description: "The megatesla (MT) equals 10\u2076 T. Relevant only in astrophysics - neutron star (magnetar) surface fields reach 10\u2078-10\u00b9\u00b9 T (0.1-100 000 MT); laser-driven implosion experiments have produced fields approaching 0.001 MT transiently. 1 MT = 10\u2076 T = 10\u00b9\u2070 G.",
    symbol: "MT"
  },
};

function updateFormula() {
  var fromKey = document.getElementById('fromUnit').value;
  var toKey   = document.getElementById('toUnit').value;
  updateFormulaFactor(fromKey, toKey, toTeslas);
}

function convertMagneticFluxDensity() {
  convertFactorBased(toTeslas);
}

initConverterPage();
