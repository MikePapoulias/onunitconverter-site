const toRadians = {
  nanoradians:       1e-9,
  milliarcseconds:   4.84813681109536e-9,
  centesimalSeconds: 1.5707963267948966e-6,
  microradians:      1e-6,
  arcseconds:        4.84813681109536e-6,
  centesimalMinutes: 1.5707963267948966e-4,
  arcminutes:        2.908882086657216e-4,
  natoMils:          9.817477042468103e-4,
  milliradians:      1e-3,
  warsawPactMils:    1.0471975511965977e-3,
  gradians:          1.5707963267948966e-2,
  degrees:           1.7453292519943295e-2,
  binaryDegrees:     2.454369260617026e-2,
  compassPoints:     0.19634954084936207,
  signs:             0.5235987755982988,
  radians:           1,
  sextants:          1.0471975511965976,
  quadrants:         1.5707963267948966,
  semicircles:       3.141592653589793,
  turns:             6.283185307179586,
};

// Unit descriptions
const unitDescriptions = {
  nanoradians: {
    name: "Nanoradian",
    description: "A nanoradian (nrad) is one billionth of a radian (10⁻⁹ rad), the smallest angle unit in regular scientific use. LIGO and Virgo gravitational-wave observatories maintain mirror tilts to sub-nanoradian stability - a 1 nrad tilt on a 4 km mirror shifts the reflected beam by 4 nm. Earth-tidal deformation deflects the local plumb line by roughly 50 nrad over a full tidal cycle, measurable with superconducting gravimeters and ring-laser gyroscopes. Synchrotron X-ray beamline mirrors are steered to single-digit nanoradians by piezo actuators. 1 nrad = 10⁻⁹ rad ≈ 0.206 µas.",
    symbol: "nrad"
  },
  milliarcseconds: {
    name: "Milliarcsecond",
    description: "A milliarcsecond (mas) is one thousandth of an arcsecond - approximately 4.848 × 10⁻⁹ rad. It is the standard unit of precision astrometry. The ESA Hipparcos satellite measured stellar positions to ~1 mas; its successor Gaia achieves 7-100 µas for bright stars. A parallax of 1 mas corresponds to a distance of 1 kiloparsec (3,260 light-years). Very Long Baseline Interferometry (VLBI) resolves well below 1 mas, imaging structures around supermassive black holes. 1 mas = 10⁻³ arcseconds ≈ 4.848 × 10⁻⁹ rad.",
    symbol: "mas"
  },
  centesimalSeconds: {
    name: "Centesimal Second",
    description: "A centesimal second (c″) is 1/10,000 of a gradian - exactly π/2,000,000 rad ≈ 1.5708 × 10⁻⁶ rad. In the gradian hierarchy, 1 right angle = 100 grad = 10,000 c′ = 1,000,000 c″. High-precision total stations calibrated in gons report to 0.1-1 c″, equivalent to ~0.0324 arcseconds. Used in French, Dutch, Swiss, and Scandinavian cadastral surveys. DIN 1313 designates 10 c″ = 1 milligon (mgon). 1 c″ ≈ 0.324″ sexagesimal = π/2,000,000 rad.",
    symbol: "c\u2033"
  },
  microradians: {
    name: "Microradian",
    description: "A microradian (µrad) is one millionth of a radian (10⁻⁶ rad ≈ 0.206265 arcseconds). It is the standard unit for small angles in precision optics and structural monitoring. A 1 µm wavelength beam from a 1 mm aperture has a diffraction-limited half-angle divergence of ~1 µrad. Atmospheric seeing for ground-based telescopes is typically 2.4-9.7 µrad (0.5-2 arcseconds). Autocollimators resolve angular deviations to 0.05-1 µrad for machine tool alignment. Building tilt monitoring tracks µrad/day. 1 µrad ≈ 0.2063″ = 0.2063 arcseconds.",
    symbol: "\u00b5rad"
  },
  arcseconds: {
    name: "Arcsecond",
    description: "An arcsecond (″) is 1/3,600 of a degree - π/648,000 rad ≈ 4.848 × 10⁻⁶ rad. It is the fundamental resolution unit of classical astronomy and geodetic surveying. The Hubble Space Telescope delivers ~0.05″ resolution; atmospheric seeing at excellent sites gives 0.4-0.6″. Stellar parallax of Proxima Centauri is 0.7687″, defining its distance of 1.3009 parsecs. The parsec is defined as the distance at which 1 AU subtends exactly 1 arcsecond - giving 1 pc = 3.0857 × 10¹⁶ m. 1″ = π/648,000 rad ≈ 4.848 µrad.",
    symbol: "\u2033"
  },
  centesimalMinutes: {
    name: "Centesimal Minute",
    description: "A centesimal minute (c′) is 1/100 of a gradian - exactly π/20,000 rad ≈ 1.5708 × 10⁻⁴ rad (= 0.9 sexagesimal arcminutes). Also designated cgon (centigon) in ISO/DIN standards. Total stations in the grad system display readings to 1 c′ or 0.1 c′; a right angle = 100 grad = 10,000 c′. A 1% slope ≈ 0.6366 grad ≈ 63.66 c′ - a simple calculation that makes the centesimal minute popular in road and railway alignment. 1 c′ = 0.9′ = 54″ = π/20,000 rad.",
    symbol: "c\u2032"
  },
  arcminutes: {
    name: "Arcminute",
    description: "An arcminute (′) is 1/60 of a degree - π/10,800 rad ≈ 2.909 × 10⁻⁴ rad. One arcminute of latitude equals exactly one nautical mile (1,852 m), which is the origin of the nautical mile unit. The Moon and Sun both subtend ~30 arcminutes in apparent diameter - the coincidence exploited in total solar eclipses. Human 20/20 visual acuity resolves letters 5 arcminutes tall at 6 m. Binocular and telescope apparent fields of view are quoted in arcminutes. 1′ = π/10,800 rad ≈ 0.01667° ≈ 290.9 µrad.",
    symbol: "\u2032"
  },
  natoMils: {
    name: "NATO Angular Mil",
    description: "The NATO angular mil equals 1/6,400 of a full circle - π/3,200 rad ≈ 0.9817 mrad. Artillery and mortar crews rely on its practical small-angle equivalence: 1 mil at 1,000 m subtends ~1 m (exact: 0.9817 m), enabling rapid range correction calculations. The 6,400-mil circle divides cleanly: 1,600 mils = 90°, 3,200 mils = 180°. Note: 1 NATO mil ≈ 0.9817 mrad - not the same as a milliradian; the 1.8% difference equals ~18 mm at 1,000 m. 1° ≈ 17.778 NATO mils.",
    symbol: "mil (NATO)"
  },
  milliradians: {
    name: "Milliradian",
    description: "A milliradian (mrad) is one thousandth of a radian (10⁻³ rad ≈ 0.05730°). The MIL-dot reticle system in precision rifle scopes uses milliradians for its elegant property: at range R metres, 1 mrad subtends exactly R mm - so at 300 m, 1 mrad = 300 mm; at 1,000 m, 1 mrad = 1,000 mm = 1 m. Semiconductor laser slow-axis divergence is typically 5-15 mrad. Note: 1 mrad ≠ 1 NATO mil (which is π/3,200 rad ≈ 0.9817 mrad). 1 mrad ≈ 0.05730° ≈ 3.438′ ≈ 206.3″.",
    symbol: "mrad"
  },
  warsawPactMils: {
    name: "Warsaw Pact Mil",
    description: "The Warsaw Pact mil equals 1/6,000 of a full circle - π/3,000 rad ≈ 1.0472 mrad. The Soviet military adopted this system, dividing the circle into 6,000 parts instead of the NATO standard 6,400. A full circle = 6,000 WP mils; a right angle = 1,500 mils. Used by Russia, Ukraine, Belarus, Finland, and other post-Soviet states. The 6.7% difference between WP and NATO mils (6,000 vs 6,400 per circle) can cause targeting errors of >1.5 m at 1,000 m if confused. 1 WP mil ≈ 1.0472 mrad = π/3,000 rad.",
    symbol: "mil (WP)"
  },
  gradians: {
    name: "Gradian",
    description: "A gradian (grad), also called a gon (ISO 31/DIN), equals 1/400 of a full circle - π/200 rad = 0.9°. Its main advantage: a right angle = exactly 100 grad, simplifying complementary and supplementary angle arithmetic. Introduced during the French Revolution as part of decimal angle reform. Surveying in France, the Netherlands, Switzerland, and Scandinavia uses gradians; professional total stations display both degrees and gons. A 1% slope ≈ 0.6366 grad. 1 grad = 0.9° = 54′ = π/200 rad; 400 grad = 360° = one full circle.",
    symbol: "grad"
  },
  degrees: {
    name: "Degree",
    description: "The degree (°) is the most widely used angle unit in everyday life, tracing to Babylonian astronomy ~300 BCE - the ecliptic was divided into 360 parts because the sexagesimal base-60 system made 360 highly divisible (by 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20). Each degree divides into 60 arcminutes and 3,600 arcseconds. The degree dominates practical work: compass bearings, geographic coordinates (latitude ±90°, longitude ±180°), wind direction, polygon angles, and engineering drawings. Calculus uses radians because sin(x) ≈ x only holds in radians. 1° = π/180 rad ≈ 17.453 mrad.",
    symbol: "\u00b0"
  },
  binaryDegrees: {
    name: "Binary Degree",
    description: "A binary degree (brad) divides the full circle into 256 equal parts - π/128 rad ≈ 0.024544 rad (= 1.40625°). The 256-part circle maps perfectly onto an 8-bit byte, making binary degrees ideal for memory-constrained embedded systems: headings stored in a single byte (0-255) need no floating-point arithmetic. Game engines, CNC machine controllers, and digital servo systems use this representation. 16-bit BAM (65,536 per circle) gives ~0.005° (≈ 89 µrad) per unit for precision heading systems. 1 brad = 1.40625° = 84.375′.",
    symbol: "brad"
  },
  compassPoints: {
    name: "Compass Point",
    description: "A compass point equals 1/32 of a full circle - π/16 rad ≈ 0.19635 rad (= 11.25°). Traditional maritime compasses divide the horizon into 32 named points from North clockwise back to North, each further divided into quarter-points (2.8125°). This 32-point rose was the standard for European seafaring from the 14th to 19th centuries. Modern navigation uses three-digit decimal bearings (000°-359°), but compass roses persist in meteorology and nautical heritage. 1 compass point = 11.25° = 11°15′ = 200 NATO mils.",
    symbol: "pt"
  },
  signs: {
    name: "Sign",
    description: "An astrological sign equals 1/12 of a full circle - π/6 rad = exactly 30°. The zodiac divides the ecliptic into twelve 30° signs (Aries through Pisces), originating in Babylonian astronomy ~5th century BCE. Historical ecliptic longitude was expressed as sign + degrees: \"Scorpio 12°\" = 222°. The 30° spacing also appears in music theory: the circle of fifths has twelve equally spaced positions 30° apart, and the octave divides into 12 equal semitones. 1 sign = 30° = 1,800′ = π/6 rad = 533.3 NATO mils.",
    symbol: "sign"
  },
  radians: {
    name: "Radian",
    description: "The radian (rad) is the SI unit of plane angle, defined as the angle subtended at the centre of a circle by an arc equal in length to the radius. A full circle = 2π rad; a right angle = π/2 rad. The radian is dimensionless (arc length / radius), so it can be omitted in equations. All calculus and physics formulas are simplest in radians: d/dx(sin x) = cos x holds only in radians; Taylor series sin x = x − x³/6 + x⁵/120 hold only for x in radians; angular frequency ω = 2πf gives energy E = ħω. 1 rad = 180°/π ≈ 57.2958° ≈ 206,264.8″.",
    symbol: "rad"
  },
  sextants: {
    name: "Sextant",
    description: "A sextant, as an angle unit, equals 1/6 of a full circle - π/3 rad = exactly 60°. The marine sextant (invented ~1730s by John Hadley and Thomas Godfrey) measures the altitude between a celestial body and the horizon; its 60° arc gives 120° measurement range via double reflection. The 60° angle is geometrically fundamental: equilateral triangles, regular hexagons, hexagonal crystal structures, and sp²-hybridised carbon (benzene, graphene) all exhibit 60° symmetry. 1 sextant = 60° = π/3 rad = 100 grad.",
    symbol: "sxt"
  },
  quadrants: {
    name: "Quadrant",
    description: "A quadrant equals 1/4 of a full circle - π/2 rad = 90°, the right angle. Perpendicularity underpins Euclidean geometry, the Pythagorean theorem, and Cartesian coordinate systems. In AC electrical engineering, voltage and current in purely reactive circuits are exactly 90° out of phase, defining reactive power in VAr. The four quadrants of the unit circle determine the sign of sine, cosine, and tangent. GPS orbital elements encode latitude in semicircles bounded by ±1 quadrant = ±90°. 1 quadrant = 90° = 100 grad = π/2 rad = 1,600 NATO mils.",
    symbol: "quad"
  },
  semicircles: {
    name: "Semicircle",
    description: "A semicircle equals 1/2 of a full circle - exactly π rad = 180°. GPS and GLONASS transmit satellite orbital elements with latitude and longitude in semicircles, maximising angular resolution within 32-bit signed integers: ±2³¹ units span ±π rad with ~1.46 × 10⁻⁹ rad resolution per unit. Euler's identity e^(iπ) + 1 = 0 encodes exactly 1 semicircle of rotation in the complex plane, mapping 1 to -1 - often called the most beautiful equation in mathematics. 1 semicircle = π rad = 180° = 200 grad = 3,200 NATO mils.",
    symbol: "sc"
  },
  turns: {
    name: "Turn",
    description: "A turn (revolution, cycle) equals one complete rotation - 2π rad = 360° = 400 grad. Rotational speed is naturally measured in turns per minute (rpm): a car engine idles at ~750 rpm; a hard disk spins at 7,200 rpm. The factor 2π in physics formulas (ω = 2πf, E = hf = ħω) arises from converting turns to radians. The turn is the natural unit for gear ratios, transformer winding counts, and thread pitch (turns per inch). The tau convention (τ = 2π ≈ 6.2832) proposes 1τ = 1 full turn. 1 rpm = 1/60 Hz = 2π/60 rad/s ≈ 0.10472 rad/s.",
    symbol: "rev"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toRadians);
}

function convertAngle() {
  convertFactorBased(toRadians);
}

initConverterPage();
