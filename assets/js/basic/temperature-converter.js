// Temperature conversion functions
const temperatureConverters = {
  // Convert TO Celsius
  toCelsius: {
    celsius: (value) => value,
    fahrenheit: (value) => (value - 32) * 5/9,
    kelvin: (value) => value - 273.15,
    rankine: (value) => (value - 491.67) * 5/9,
    reaumur: (value) => value * 5/4,
    delisle: (value) => 100 - value * 2/3,
    newton:  (value) => value * 100/33,
    roemer:  (value) => (value - 7.5) * 40/21
  },
  
  // Convert FROM Celsius
  fromCelsius: {
    celsius: (value) => value,
    fahrenheit: (value) => (value * 9/5) + 32,
    kelvin: (value) => value + 273.15,
    rankine: (value) => (value + 273.15) * 9/5,
    reaumur: (value) => value * 4/5,
    delisle: (value) => (100 - value) * 3/2,
    newton:  (value) => value * 33/100,
    roemer:  (value) => value * 21/40 + 7.5
  }
};

// Unit descriptions
const unitDescriptions = {
  celsius: {
    name: "Celsius",
    description: "Celsius (°C) is the most widely used temperature scale worldwide, named after Swedish astronomer Anders Celsius (1742). It's based on the freezing point of water at 0°C and boiling point at 100°C under standard atmospheric pressure (1 atmosphere). This makes it intuitive for daily use: room temperature is around 20-22°C, body temperature is 37°C, and a hot summer day might reach 35-40°C. It's the standard in science, medicine, and weather reporting in most countries.",
    symbol: "°C"
  },
  fahrenheit: {
    name: "Fahrenheit",
    description: "Fahrenheit (°F) was developed by German physicist Daniel Gabriel Fahrenheit in 1724 and remains the primary temperature scale in the United States, Belize, and the Cayman Islands. Water freezes at 32°F and boils at 212°F at standard atmospheric pressure. For Americans, common references include: room temperature (68-72°F), body temperature (98.6°F), and a hot summer day (90-100°F). The scale was originally based on the lowest temperature Fahrenheit could create with ice and salt (-17.8°C or 0°F).",
    symbol: "°F"
  },
  kelvin: {
    name: "Kelvin",
    description: "Kelvin (K) is the base unit of thermodynamic temperature in the International System of Units (SI), named after British physicist Lord Kelvin (William Thomson). It starts at absolute zero (0 K = -273.15°C), the theoretical point where all molecular motion ceases. Unlike other scales, Kelvin uses no degree symbol. This scale is essential in physics, chemistry, and astronomy: room temperature is about 295 K, water freezes at 273.15 K, and the Sun's surface is approximately 5,778 K. It's used in scientific calculations because it's directly proportional to molecular kinetic energy.",
    symbol: "K"
  },
  rankine: {
    name: "Rankine",
    description: "Rankine (°R) is an absolute temperature scale named after Scottish engineer William John Macquorn Rankine. Like Kelvin, it starts at absolute zero (0°R = -459.67°F = 0 K), but uses Fahrenheit-sized degree intervals instead of Celsius-sized ones. It's primarily used in engineering applications in the United States, particularly in thermodynamics and steam power calculations. For reference: water freezes at 491.67°R, room temperature is about 530°R, and water boils at 671.67°R. The relationship is simple: °R = °F + 459.67.",
    symbol: "°R"
  },
  reaumur: {
    name: "Réaumur",
    description: "Réaumur (°Ré) was developed by French scientist René Antoine Ferchault de Réaumur in 1730 and was widely used across Europe until the 19th century. The scale sets water's freezing point at 0°Ré and boiling point at 80°Ré, creating a more compressed scale than Celsius. While largely obsolete today, it's still occasionally used in specific industries like cheese-making, brewing, and candy production in some European countries. For perspective: room temperature is about 16°Ré, body temperature is roughly 30°Ré, and a hot summer day reaches 32°Ré. The conversion is straightforward: °Ré = °C × 4/5.",
    symbol: "°Ré"
  },
  delisle: {
    name: "Delisle",
    description: "Delisle (°De) was created by French astronomer Joseph-Nicolas Delisle in 1732 and used in Russia for nearly a century before metrication. Uniquely, the scale is inverted: it increases as temperature decreases. Water boils at 0°De and freezes at 150°De - the opposite of Celsius. Delisle calibrated his mercury thermometer against the boiling point of water, assigning it zero. The scale was adopted by the Russian Academy of Sciences and used by astronomers and naturalists across the Russian Empire throughout the 18th century. It still appears in historical scientific records from that era.",
    symbol: "°De"
  },
  newton: {
    name: "Newton",
    description: "Newton (°N) was devised by Isaac Newton around 1700 and published anonymously in 1701. The scale places water's freezing point at 0°N and boiling point at 33°N - a choice that allowed body temperature to fall at approximately 12°N. Newton used linseed oil as the thermometric fluid and described his scale in the Philosophical Transactions of the Royal Society. Although never widely adopted, it is historically significant as one of the earliest systematic temperature scales and directly inspired Ole Rømer, who visited Newton, and later Daniel Gabriel Fahrenheit, who built upon Rømer's work.",
    symbol: "°N"
  },
  roemer: {
    name: "Rømer",
    description: "Rømer (°Rø) was designed by Danish astronomer Ole Christensen Rømer in 1701, making it one of the earliest calibrated temperature scales using two fixed points. It sets water's freezing point at 7.5°Rø and boiling point at 60°Rø; the offset of 7.5 at freezing was chosen to avoid negative numbers during the coldest Danish winters. In 1708, Daniel Gabriel Fahrenheit visited Rømer and was directly inspired by his thermometer design to create the Fahrenheit scale. Body temperature on the Rømer scale is approximately 22.5°Rø. Though now obsolete, Rømer's scale holds an important place in thermometric history.",
    symbol: "°Rø"
  }
};

// Formulas for display
const formulas = {
  celsius_fahrenheit: "°F = (°C × 9/5) + 32",
  fahrenheit_celsius: "°C = (°F - 32) × 5/9",
  celsius_kelvin: "K = °C + 273.15",
  kelvin_celsius: "°C = K - 273.15",
  celsius_rankine: "°R = (°C + 273.15) × 9/5",
  rankine_celsius: "°C = (°R - 491.67) × 5/9",
  celsius_reaumur: "°Ré = °C × 4/5",
  reaumur_celsius: "°C = °Ré × 5/4",
  fahrenheit_kelvin: "K = (°F - 32) × 5/9 + 273.15",
  kelvin_fahrenheit: "°F = (K - 273.15) × 9/5 + 32",
  fahrenheit_rankine: "°R = °F + 459.67",
  rankine_fahrenheit: "°F = °R - 459.67",
  fahrenheit_reaumur: "°Ré = (°F - 32) × 4/9",
  reaumur_fahrenheit: "°F = (°Ré × 9/4) + 32",
  kelvin_rankine: "°R = K × 9/5",
  rankine_kelvin: "K = °R × 5/9",
  kelvin_reaumur: "°Ré = (K - 273.15) × 4/5",
  reaumur_kelvin: "K = (°Ré × 5/4) + 273.15",
  rankine_reaumur: "°Ré = (°R - 491.67) × 4/9",
  reaumur_rankine: "°R = (°Ré × 9/4) + 491.67",
  // Delisle combinations
  celsius_delisle: "°De = (100 - °C) × 3/2",
  delisle_celsius: "°C = 100 - °De × 2/3",
  fahrenheit_delisle: "°De = (212 - °F) × 5/6",
  delisle_fahrenheit: "°F = 212 - °De × 6/5",
  kelvin_delisle: "°De = (373.15 - K) × 3/2",
  delisle_kelvin: "K = 373.15 - °De × 2/3",
  rankine_delisle: "°De = (671.67 - °R) × 5/6",
  delisle_rankine: "°R = 671.67 - °De × 6/5",
  reaumur_delisle: "°De = (80 - °Ré) × 15/8",
  delisle_reaumur: "°Ré = 80 - °De × 8/15",
  // Newton combinations
  celsius_newton: "°N = °C × 33/100",
  newton_celsius: "°C = °N × 100/33",
  fahrenheit_newton: "°N = (°F - 32) × 11/60",
  newton_fahrenheit: "°F = °N × 60/11 + 32",
  kelvin_newton: "°N = (K - 273.15) × 33/100",
  newton_kelvin: "K = °N × 100/33 + 273.15",
  rankine_newton: "°N = (°R - 491.67) × 11/60",
  newton_rankine: "°R = °N × 60/11 + 491.67",
  reaumur_newton: "°N = °Ré × 33/80",
  newton_reaumur: "°Ré = °N × 80/33",
  // Rømer combinations
  celsius_roemer: "°Rø = °C × 21/40 + 7.5",
  roemer_celsius: "°C = (°Rø - 7.5) × 40/21",
  fahrenheit_roemer: "°Rø = (°F - 32) × 7/24 + 7.5",
  roemer_fahrenheit: "°F = (°Rø - 7.5) × 24/7 + 32",
  kelvin_roemer: "°Rø = (K - 273.15) × 21/40 + 7.5",
  roemer_kelvin: "K = (°Rø - 7.5) × 40/21 + 273.15",
  rankine_roemer: "°Rø = (°R - 491.67) × 7/24 + 7.5",
  roemer_rankine: "°R = (°Rø - 7.5) × 24/7 + 491.67",
  reaumur_roemer: "°Rø = °Ré × 21/32 + 7.5",
  roemer_reaumur: "°Ré = (°Rø - 7.5) × 32/21",
  // Cross-combinations among the three new scales
  delisle_newton: "°N = 33 - °De × 11/50",
  newton_delisle: "°De = (33 - °N) × 50/11",
  delisle_roemer: "°Rø = 60 - °De × 7/20",
  roemer_delisle: "°De = (60 - °Rø) × 20/7",
  newton_roemer: "°Rø = °N × 35/22 + 7.5",
  roemer_newton: "°N = (°Rø - 7.5) × 22/35"
};

function convertTemperature() {
  const fromValue = parseFloat(document.getElementById("fromValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const toValueField = document.getElementById("toValue");
  const result = document.getElementById("result");

  // Check if same unit
  if (fromUnit === toUnit) {
    result.textContent = "Please select different units to convert.";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  // Validate input
  if (isNaN(fromValue) || fromValue === "") {
    result.textContent = "";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  // Convert: fromUnit → Celsius → toUnit
  const celsiusValue = temperatureConverters.toCelsius[fromUnit](fromValue);
  const convertedValue = temperatureConverters.fromCelsius[toUnit](celsiusValue);

  // Display result
  toValueField.value = parseFloat(convertedValue.toPrecision(15));
  toValueField.style.color = "blue";
  result.innerHTML = `${fromValue} ${unitDescriptions[fromUnit].symbol} = <span style="color: blue;">${formatNumber(convertedValue)}</span> ${unitDescriptions[toUnit].symbol}`;
  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
}

function updateFormula(fromUnit, toUnit) {
  const formulaDescription = document.getElementById("formulaDescription");
  const formulaDisplay = document.getElementById("formulaDisplay");

  if (fromUnit === toUnit) {
    formulaDescription.textContent = "No conversion needed - same unit selected.";
    formulaDisplay.textContent = "";
    return;
  }

  const formulaKey = `${fromUnit}_${toUnit}`;
  const formula = formulas[formulaKey];

  if (formula) {
    formulaDescription.textContent = `To convert ${unitDescriptions[fromUnit].name} to ${unitDescriptions[toUnit].name}:`;
    formulaDisplay.innerHTML = `<strong>${formula}</strong>`;
  } else {
    formulaDescription.textContent = `To convert ${unitDescriptions[fromUnit].name} to ${unitDescriptions[toUnit].name}, first convert to Celsius, then to the target unit.`;
    formulaDisplay.textContent = "Multi-step conversion required";
  }
}

function updateDescriptions(fromUnit, toUnit) {
  const descriptionsDiv = document.getElementById("unitDescriptions");
  
  const fromDesc = unitDescriptions[fromUnit];
  const toDesc = unitDescriptions[toUnit];

  // Αν η ίδια μονάδα, εμφάνισε μόνο μία περιγραφή
  if (fromUnit === toUnit) {
    descriptionsDiv.innerHTML = `
      <h3>What is ${fromDesc.name}?</h3>
      <p>${fromDesc.description}</p>
    `;
  } else {
    descriptionsDiv.innerHTML = `
      <h3>What is ${fromDesc.name}?</h3>
      <p>${fromDesc.description}</p>
      
      <h3>What is ${toDesc.name}?</h3>
      <p>${toDesc.description}</p>
    `;
  }
}

// Initialize on page load

initConverterPage();
