const toMeters = {
  yoctometers: 1e-24,
  zeptometers: 1e-21,
  attometers: 1e-18,
  femtometers: 1e-15,
  picometers: 1e-12,
  angstroms: 1e-10,
  nanometers: 1e-9,
  micrometers: 1e-6,
  thou: 0.0000254,
  millimeters: 0.001,
  centimeters: 0.01,
  inches: 0.0254,
  decimeters: 0.1,
  feet: 0.3048,
  fathoms: 1.8288,
  yards: 0.9144,
  meters: 1,
  dekameters: 10,
  hectometers: 100,
  kilometers: 1000,
  miles: 1609.344,
  nauticalMiles: 1852,
  megameters: 1e6,
  gigameters: 1e9,
  terameters: 1e12,
  earthRadius: 6.3781e6,
  astronomicalUnits: 1.495978707e11,
  lightSeconds: 299792458,
  lightMinutes: 17987547480,
  lightHours: 1079252848800,
  lightDays: 25902068371200,
  lightYears: 9.4607304725808e15,
  parsecs: 3.0856775814913673e16,
  kiloparsecs: 3.0856775814913673e19,
  megaparsecs: 3.0856775814913673e22,
  gigaparsecs: 3.0856775814913673e25
};

// Unit descriptions
const unitDescriptions = {
  yoctometers: {
    name: "Yoctometer",
    description: "A yoctometer (ym) is one septillionth of a meter (10⁻²⁴ m), representing the smallest SI unit prefix. This scale is smaller than any physical measurement currently possible and exists primarily in theoretical physics. At this scale, we approach the Planck length (1.6 × 10⁻³⁵ m), where quantum effects of gravity become significant and our current understanding of physics breaks down. Yoctometers are used in theoretical discussions about quantum foam and the fabric of spacetime itself.",
    symbol: "ym"
  },
  zeptometers: {
    name: "Zeptometer",
    description: "A zeptometer (zm) is one sextillionth of a meter (10⁻²¹ m), 1,000 times larger than a yoctometer but still far beyond measurable scales. This unit exists in the realm of theoretical particle physics and quantum mechanics. While no physical structures exist at this scale, zeptometers are occasionally referenced in discussions about quantum fluctuations and high-energy particle interactions at colliders like the Large Hadron Collider, where particles are probed at incredibly small distances.",
    symbol: "zm"
  },
  attometers: {
    name: "Attometer",
    description: "An attometer (am) is one quintillionth of a meter (10⁻¹⁸ m), smaller than atomic nuclei but larger than the realm of pure theory. This scale represents the size of individual quarks within protons and neutrons, though quarks are considered point particles with no measurable size. Attometers are used in high-energy physics experiments that probe the internal structure of protons through deep inelastic scattering, revealing the distribution of quarks and gluons within.",
    symbol: "am"
  },
  femtometers: {
    name: "Femtometer",
    description: "A femtometer (fm) is an incredibly tiny unit equal to one quadrillionth of a meter (10⁻¹⁵ m). To put this in perspective, if an atom were the size of a football field, a femtometer would be the size of a marble. This unit is primarily used in nuclear physics to measure the size of atomic nuclei, protons, and neutrons. The proton, for example, has a diameter of about 1.7 femtometers.",
    symbol: "fm"
  },
  picometers: {
    name: "Picometer",
    description: "A picometer (pm) is one trillionth of a meter (10⁻¹² m), making it 1,000 times larger than a femtometer but still unimaginably small. This unit is crucial in atomic and molecular physics, as it represents the scale of atomic radii and chemical bonds. For example, a hydrogen atom has a radius of about 53 picometers, and the length of a typical chemical bond ranges from 100 to 200 picometers. X-ray wavelengths also fall within this range.",
    symbol: "pm"
  },
  angstroms: {
    name: "Angstrom",
    description: "An angstrom (Å) is equal to 0.1 nanometers or 10⁻¹⁰ meters, named after Swedish physicist Anders Jonas Ångström. While not an official SI unit, it remains widely used in chemistry, solid-state physics, and crystallography to express atomic distances and wavelengths. A typical atom has a diameter of 1-3 angstroms, and the spacing between atoms in crystals is commonly measured in angstroms. X-ray crystallographers use angstroms to describe molecular structures with atomic precision.",
    symbol: "Å"
  },
  nanometers: {
    name: "Nanometer",
    description: "A nanometer (nm) is one billionth of a meter (10⁻⁹ m), roughly the width of 3-4 atoms placed side by side. This scale is where nanotechnology operates and is visible light wavelengths are measured. Visible light ranges from about 400 nm (violet) to 700 nm (red). DNA molecules are about 2.5 nm wide, and modern computer processors have transistors as small as 3-5 nm. A human hair is approximately 80,000-100,000 nanometers thick, making one nanometer incredibly tiny by human standards.",
    symbol: "nm"
  },
  micrometers: {
    name: "Micrometer",
    description: "A micrometer (μm), also called a micron, is one millionth of a meter (10⁻⁶ m). This is the scale of bacteria, small cells, and fine particles. Most bacteria range from 1-10 micrometers in length, while human red blood cells are about 6-8 micrometers in diameter. The smallest particles visible to the naked eye are around 40 micrometers. This unit is essential in biology, medicine, and precision engineering, where measurements of microscopic structures and tolerances are critical.",
    symbol: "μm"
  },
  thou: {
    name: "Thou",
    description: "A thou (also called mil) is one thousandth of an inch, equal to 0.0254 millimeters or 25.4 micrometers. This unit is commonly used in engineering and manufacturing in countries that use imperial measurements, particularly for specifying tolerances, wire gauges, and thin material thicknesses. For example, a standard plastic bag might be 1-2 thou thick, a sheet of paper is about 4 thou, and precision machined parts often have tolerances measured in thou. Electronic circuit board copper traces are typically 1.4 thou thick.",
    symbol: "th"
  },
  millimeters: {
    name: "Millimeter",
    description: "A millimeter (mm) is one thousandth of a meter, making it the smallest unit commonly used in everyday measurements. To visualize this, a credit card is about 1 mm thick, and a paperclip wire is roughly 1 mm in diameter. Millimeters are essential in engineering, manufacturing, and medicine for precise measurements. Rainfall is measured in millimeters, with 1 mm representing a very light drizzle. Most rulers and measuring tapes include millimeter markings for accuracy.",
    symbol: "mm"
  },
  centimeters: {
    name: "Centimeter",
    description: "A centimeter (cm) is one hundredth of a meter and one of the most frequently used units in daily life. A typical fingernail is about 1 cm wide, and a standard paperclip is about 3 cm long. This unit is particularly common in the metric system for measuring body height, clothing sizes, and small objects. In many countries, rulers in schools are marked in centimeters, making it a familiar unit for educational purposes. There are 2.54 centimeters in one inch.",
    symbol: "cm"
  },
  inches: {
    name: "Inch",
    description: "The inch (in) is a unit of length primarily used in the United States, Canada, and the United Kingdom. Historically, an inch was defined as the width of a man's thumb, but today it's precisely defined as 2.54 centimeters. Common examples include: a quarter coin is about 1 inch in diameter, a standard smartphone is roughly 6 inches tall, and most computer screens are measured diagonally in inches. The inch is divided into fractions like 1/2, 1/4, 1/8, and 1/16 for precision measurements.",
    symbol: "in"
  },
  decimeters: {
    name: "Decimeter",
    description: "A decimeter (dm) is one tenth of a meter, equal to 10 centimeters. While less commonly used in everyday measurements, it's particularly important in volume calculations, as 1 liter equals 1 cubic decimeter. A typical smartphone is about 1.5-1.7 decimeters long, and a standard book is roughly 2-2.5 decimeters tall. In some European countries, decimeters are used in construction and scientific measurements as an intermediate unit between centimeters and meters.",
    symbol: "dm"
  },
  feet: {
    name: "Foot",
    description: "A foot (ft) is equal to 12 inches or 30.48 centimeters, originally based on the length of a human foot. It remains widely used in the United States and some other countries for measuring height, room dimensions, and distances. For reference, a standard door is about 6.5-7 feet tall, ceiling height in homes is typically 8-9 feet, and a basketball hoop stands 10 feet high. The foot is also used in aviation (altitude) and real estate (square footage).",
    symbol: "ft"
  },
  fathoms: {
    name: "Fathom",
    description: "A fathom (ftm) is equal to 6 feet or 1.8288 meters, traditionally based on the span of a man's outstretched arms. This unit has been used for centuries in maritime navigation to measure water depth and rope or cable lengths. While largely replaced by meters in modern nautical charts, fathoms remain in use by sailors and in naval traditions. The Mariana Trench, Earth's deepest point, reaches about 6,000 fathoms. The term 'to fathom' meaning 'to understand' derives from this nautical unit.",
    symbol: "ftm"
  },
  yards: {
    name: "Yard",
    description: "A yard (yd) equals 3 feet or 36 inches (91.44 centimeters), roughly the distance from your nose to your outstretched fingertip. Originally used in medieval England for measuring cloth, it remains important in American football (100-yard field), golf (yardage markers), and fabric sales. A typical car is about 5-6 yards long, and swimming pools are often measured in yards (25-yard or 50-yard pools). In landscaping and construction, yards are commonly used for measuring larger distances.",
    symbol: "yd"
  },
  meters: {
    name: "Meter",
    description: "The meter (m) is the fundamental unit of length in the International System of Units (SI) and is used worldwide. Originally defined as one ten-millionth of the distance from the Earth's equator to the North Pole, it's now precisely defined as the distance light travels in a vacuum in 1/299,792,458 of a second. A meter is roughly the height of a kitchen counter, the width of a large door, or one large step for an adult. Most countries use meters for measuring room sizes, building heights, and short distances.",
    symbol: "m"
  },
  dekameters: {
    name: "Dekameter",
    description: "A dekameter (dam) is equal to 10 meters, a unit rarely used in everyday measurements but occasionally found in surveying and land measurement. It represents roughly the length of a large room or the height of a three-story building. While not common in most countries, dekameters provide a convenient intermediate scale between meters and hectometers. In some regions, agricultural land plots and property boundaries are measured using dekameters. One dekameter is approximately 33 feet.",
    symbol: "dam"
  },
  hectometers: {
    name: "Hectometer",
    description: "A hectometer (hm) is equal to 100 meters, roughly the length of a standard city block or a professional soccer field. While not commonly used in everyday conversation, this unit appears in surveying, land measurement, and some European athletic contexts. A 400-meter running track is 4 hectometers around. In agriculture and forestry, hectometers are sometimes used to measure field dimensions or forest plots. One hectometer equals approximately 328 feet or 109 yards.",
    symbol: "hm"
  },
  kilometers: {
    name: "Kilometer",
    description: "A kilometer (km) is 1,000 meters and the standard unit for measuring longer distances in most of the world. It takes about 10-12 minutes to walk one kilometer at a normal pace. Common references include: a typical city block might be 100-200 meters (0.1-0.2 km), most cars display speed in km/h, and marathon races are 42.195 kilometers long. Road signs, GPS systems, and maps globally use kilometers to indicate distances between cities and locations.",
    symbol: "km"
  },
  miles: {
    name: "Mile",
    description: "A mile (mi) is 5,280 feet or approximately 1.609 kilometers, originating from the Roman 'mille passus' (thousand paces). It remains the primary distance unit in the United States and United Kingdom for road travel, with speed limits and distances posted in miles per hour (mph) and miles respectively. For perspective, a 15-20 minute drive in the city typically covers 2-4 miles, while a marathon is about 26.2 miles. The mile is also used in aviation (nautical miles) and running events.",
    symbol: "mi"
  },
  nauticalMiles: {
    name: "Nautical Mile",
    description: "A nautical mile (nmi) is equal to 1,852 meters or approximately 1.15078 statute miles, based on one minute of arc along Earth's meridian. This unit is the standard for maritime and aviation navigation worldwide because it directly relates to Earth's geometry, making navigation calculations simpler. Ships and aircraft measure speed in knots (nautical miles per hour). The distance between parallels of latitude is almost exactly 60 nautical miles. International maritime law uses nautical miles to define territorial waters and exclusive economic zones.",
    symbol: "nmi"
  },
  megameters: {
    name: "Megameter",
    description: "A megameter (Mm) is one million meters (10⁶ m), a unit suitable for measuring continental distances and planetary features. Earth's diameter is about 12.7 Mm, while the distance from New York to Los Angeles is roughly 4 Mm. The deepest part of the ocean (Mariana Trench) is about 0.011 Mm deep. This unit helps scientists and geographers express large terrestrial distances without using thousands of kilometers, making calculations and comparisons more manageable in Earth sciences.",
    symbol: "Mm"
  },
  gigameters: {
    name: "Gigameter",
    description: "A gigameter (Gm) is one billion meters (10⁹ m), making it useful for planetary measurements and inner solar system distances. The Sun's diameter is about 1.39 Gm, while Jupiter's diameter is roughly 0.14 Gm. The distance from Earth to the Moon is approximately 0.38 Gm. This unit bridges the gap between terrestrial measurements (megameters) and astronomical distances, providing a convenient scale for describing planetary sizes and nearby celestial distances in our solar system.",
    symbol: "Gm"
  },
  terameters: {
    name: "Terameter",
    description: "A terameter (Tm) is one trillion meters (10¹² m), representing distances within our solar system. The distance from the Sun to Mars ranges from about 0.08 to 0.4 Tm depending on orbital positions, while Jupiter orbits at approximately 0.78 Tm from the Sun. Pluto, at its farthest, is about 7.3 Tm from the Sun. This unit is essential in planetary science and space exploration for expressing interplanetary distances without resorting to even larger astronomical units.",
    symbol: "Tm"
  },
  earthRadius: {
    name: "Earth Radius",
    description: "The Earth radius (R⊕) is approximately 6.371 million meters or 6,371 kilometers, representing the average distance from Earth's center to its surface. Due to Earth's rotation, it's slightly flattened, with the equatorial radius being about 21 km larger than the polar radius. This fundamental measurement is crucial in geology, geography, and astronomy for calculating Earth's circumference (about 40,000 km), surface area, and volume. It's also used as a comparative unit for describing other planets and exoplanets.",
    symbol: "R⊕"
  },
  astronomicalUnits: {
    name: "Astronomical Unit",
    description: "An astronomical unit (AU) is the average distance between Earth and the Sun, precisely defined as 149,597,870.7 kilometers. This unit provides a convenient scale for measuring distances within our solar system. Mars orbits at 1.5 AU, Jupiter at 5.2 AU, and Neptune at about 30 AU from the Sun. The dwarf planet Pluto reaches up to 49 AU away. Light takes about 8.3 minutes to travel 1 AU, explaining why we see the Sun as it was 8 minutes ago. The AU is fundamental in astronomy and space exploration.",
    symbol: "AU"
  },
  lightSeconds: {
    name: "Light Second",
    description: "A light second (ls) is the distance light travels in one second through a vacuum, exactly 299,792,458 meters. This represents one of the fundamental constants in physics - the speed of light. For perspective, light takes about 1.3 seconds to travel from Earth to the Moon, and 8.3 minutes (500 light seconds) to reach us from the Sun. This unit is crucial in astronomy, telecommunications (satellite delays), and physics experiments, helping us understand the finite speed of light and its implications for communication and observation.",
    symbol: "ls"
  },
  lightMinutes: {
    name: "Light Minute",
    description: "A light minute (lm) is the distance light travels in one minute through a vacuum, equal to 17,987,547,480 meters or about 17.99 million kilometers. The Sun is approximately 8.3 light minutes from Earth, meaning sunlight takes 8 minutes and 20 seconds to reach us. Venus ranges from 2 to 14 light minutes from Earth depending on orbital positions. This unit provides a convenient scale for discussing distances within the inner solar system and helps visualize the time delays in space communications.",
    symbol: "lm"
  },
  lightHours: {
    name: "Light Hour",
    description: "A light hour (lh) is the distance light travels in one hour through a vacuum, approximately 1.08 billion kilometers. Jupiter is about 0.72 light hours from the Sun, while Saturn orbits at roughly 1.3 light hours. This unit is useful for expressing distances to the outer planets and understanding communication delays with spacecraft. A radio signal to a probe near Jupiter takes about 43 minutes to arrive, representing the vast scales even within our solar system. Pluto at its farthest reaches about 5.5 light hours from the Sun.",
    symbol: "lh"
  },
  lightDays: {
    name: "Light Day",
    description: "A light day (ld) is the distance light travels in one day through a vacuum, equal to approximately 25.9 billion kilometers. This unit bridges the gap between planetary distances and interstellar space. The Voyager 1 spacecraft, humanity's most distant object, is currently over 0.9 light days from Earth. The outer edge of our solar system (heliopause) is roughly 0.6-0.7 light days away. The Oort Cloud, a theoretical sphere of icy objects surrounding our solar system, extends from about 0.16 light days to possibly 1.6 light years.",
    symbol: "ld"
  },
  lightYears: {
    name: "Light Year",
    description: "A light year (ly) is the distance light travels in one year through a vacuum, approximately 9.46 trillion kilometers. This is the primary unit for measuring stellar distances. Our nearest star neighbor, Proxima Centauri, is 4.24 light years away, meaning its light takes over 4 years to reach us. The center of our Milky Way galaxy is about 26,000 light years distant, and the nearest large galaxy (Andromeda) is 2.5 million light years away. When we observe distant objects, we're literally seeing them as they were years ago.",
    symbol: "ly"
  },
  parsecs: {
    name: "Parsec",
    description: "A parsec (pc) is approximately 3.26 light years or 30.86 trillion kilometers, defined as the distance at which one astronomical unit subtends an angle of one arcsecond. Despite being less familiar than light years, parsecs are preferred by professional astronomers because they relate directly to stellar parallax measurements - the apparent shift in a star's position as Earth orbits the Sun. Most nearby stars are within a few dozen parsecs, our galaxy is about 30,000 parsecs across, and distant galaxies are measured in millions of parsecs (megaparsecs).",
    symbol: "pc"
  },
  kiloparsecs: {
    name: "Kiloparsec",
    description: "A kiloparsec (kpc) is 1,000 parsecs or 3,260 light years, making it ideal for measuring distances within galaxies. Our Milky Way galaxy has a diameter of about 30-40 kiloparsecs, and the Sun is located roughly 8 kiloparsecs from the galactic center. Star clusters within our galaxy are typically measured in kiloparsecs. The galactic halo extends several kiloparsecs beyond the visible disk. This unit helps astronomers discuss galactic structures and the distribution of stars, gas, and dark matter within galaxies.",
    symbol: "kpc"
  },
  megaparsecs: {
    name: "Megaparsec",
    description: "A megaparsec (Mpc) is one million parsecs or 3.26 million light years, the standard unit for measuring intergalactic distances. The Andromeda Galaxy is about 0.77 megaparsecs away, while most galaxies in the observable universe are measured in megaparsecs. The Local Group of galaxies spans about 3 megaparsecs. Astronomers use megaparsecs in combination with redshift measurements to calculate distances to distant galaxies and study the expansion of the universe. The Hubble constant, describing cosmic expansion, is expressed in kilometers per second per megaparsec.",
    symbol: "Mpc"
  },
  gigaparsecs: {
    name: "Gigaparsec",
    description: "A gigaparsec (Gpc) is one billion parsecs or 3.26 billion light years, used for measuring the largest structures in the cosmos. The observable universe has a radius of about 14.3 gigaparsecs (46 billion light years when accounting for expansion). Superclusters and cosmic filaments, the largest known structures, span hundreds of megaparsecs to gigaparsecs. The cosmic microwave background radiation originates from a distance of about 14 gigaparsecs. This unit helps cosmologists map the large-scale structure of the universe and understand its evolution since the Big Bang.",
    symbol: "Gpc"
  }
};

function updateFormula(fromUnit, toUnit) {
  updateFormulaFactor(fromUnit, toUnit, toMeters);
}

function convertLength() {
  convertFactorBased(toMeters);
}

initConverterPage();
