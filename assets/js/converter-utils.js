// =============================================================================
// converter-utils.js - Shared utilities for all unit converters
// Loaded before every individual converter script.
// =============================================================================

// -----------------------------------------------------------------------------
// Number formatting
// -----------------------------------------------------------------------------

// Plain scientific notation (× 10^n) - used in build.js factorFormulaStr
function formatNumberSimple(num) {
  if (num === 0) return "0";
  const abs = Math.abs(num);
  if (abs < 1e-4 || abs > 1e6) {
    const exponent = Math.floor(Math.log10(abs));
    const mantissa = num / Math.pow(10, exponent);
    const roundedMantissa = parseFloat(mantissa.toPrecision(15));
    return `${roundedMantissa} \u00d7 10^${exponent}`;
  }
  return parseFloat(num.toPrecision(15)).toString();
}

// Scientific notation with Unicode superscripts (displayed in result / formula)
function formatNumber(num) {
  if (num === 0) return "0";
  const abs = Math.abs(num);
  if (abs < 1e-4 || abs > 1e6) {
    const exponent = Math.floor(Math.log10(abs));
    const mantissa = num / Math.pow(10, exponent);
    const roundedMantissa = parseFloat(mantissa.toPrecision(15));
    const superscriptMap = {
      '0': '\u2070', '1': '\u00b9', '2': '\u00b2', '3': '\u00b3', '4': '\u2074',
      '5': '\u2075', '6': '\u2076', '7': '\u2077', '8': '\u2078', '9': '\u2079',
      '-': '\u207b'
    };
    const superExponent = exponent.toString().split('').map(c => superscriptMap[c] || c).join('');
    return `${roundedMantissa} \u00d7 10${superExponent}`;
  }
  return parseFloat(num.toPrecision(15)).toString();
}

// -----------------------------------------------------------------------------
// UI updaters (rely on global `unitDescriptions` from each converter file)
// -----------------------------------------------------------------------------

// Populate the "About" description panels
function updateDescriptions(fromUnit, toUnit) {
  const descriptionsDiv = document.getElementById("unitDescriptions");
  if (!descriptionsDiv) return;
  const fromDesc = unitDescriptions[fromUnit];
  const toDesc   = unitDescriptions[toUnit];

  function getArticle(word) {
    return /^[aeiou]/i.test(word) ? "an" : "a";
  }

  if (fromUnit === toUnit) {
    descriptionsDiv.innerHTML = `
      <h3>What is ${getArticle(fromDesc.name)} ${fromDesc.name}?</h3>
      <p>${fromDesc.description}</p>
    `;
  } else {
    descriptionsDiv.innerHTML = `
      <h3>What is ${getArticle(fromDesc.name)} ${fromDesc.name}?</h3>
      <p>${fromDesc.description}</p>

      <h3>What is ${getArticle(toDesc.name)} ${toDesc.name}?</h3>
      <p>${toDesc.description}</p>
    `;
  }
}

// Update the formula panel for factor-based converters (all except temperature)
function updateFormulaFactor(fromUnit, toUnit, toBase) {
  const formulaDescription = document.getElementById("formulaDescription");
  const formulaDisplay     = document.getElementById("formulaDisplay");

  if (fromUnit === toUnit) {
    formulaDescription.textContent = "No conversion needed - same unit selected.";
    formulaDisplay.textContent = "";
    return;
  }

  const conversionFactor = toBase[fromUnit] / toBase[toUnit];
  formulaDescription.textContent = `To convert ${unitDescriptions[fromUnit].name.toLowerCase()} to ${unitDescriptions[toUnit].name.toLowerCase()}, multiply by ${formatNumber(conversionFactor)}:`;
  formulaDisplay.innerHTML = `<strong>${unitDescriptions[toUnit].symbol} = ${unitDescriptions[fromUnit].symbol} \u00d7 ${formatNumber(conversionFactor)}</strong>`;
}

// -----------------------------------------------------------------------------
// Factor-based conversion (all converters except temperature)
// Each converter exposes a thin wrapper: function convertX() { convertFactorBased(toBase); }
// -----------------------------------------------------------------------------
function convertFactorBased(toBase) {
  const fromValue    = parseFloat(document.getElementById("fromValue").value);
  const fromUnit     = document.getElementById("fromUnit").value;
  const toUnit       = document.getElementById("toUnit").value;
  const toValueField = document.getElementById("toValue");
  const result       = document.getElementById("result");

  if (fromUnit === toUnit) {
    result.textContent = "Please select different units to convert.";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  if (isNaN(fromValue) || fromValue === "") {
    result.textContent = "";
    toValueField.value = "";
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  const valueInBase    = fromValue * toBase[fromUnit];
  const convertedValue = valueInBase / toBase[toUnit];

  toValueField.value = parseFloat(convertedValue.toPrecision(15));
  toValueField.style.color = "blue";
  result.innerHTML = `${fromValue} ${unitDescriptions[fromUnit].symbol} = <span style="color: blue;">${formatNumber(convertedValue)}</span> ${unitDescriptions[toUnit].symbol}`;

  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
}

// -----------------------------------------------------------------------------
// Page initialiser - call once per converter, after defining updateFormula
// -----------------------------------------------------------------------------
function initConverterPage() {
  window.addEventListener('DOMContentLoaded', function () {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit   = document.getElementById('toUnit').value;
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
  });
}
