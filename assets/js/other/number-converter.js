// ── Available characters and label per base ──────────────────────────────────
var numberBaseInfo = {
  '2':  { label: 'Binary (bin)',       chars: '0, 1' },
  '3':  { label: 'Base 3 (base 3)',   chars: '0, 1, 2' },
  '4':  { label: 'Base 4 (base 4)',   chars: '0, 1, 2, 3' },
  '5':  { label: 'Base 5 (base 5)',   chars: '0, 1, 2, 3, 4' },
  '6':  { label: 'Base 6 (base 6)',   chars: '0, 1, 2, 3, 4, 5' },
  '7':  { label: 'Base 7 (base 7)',   chars: '0, 1, 2, 3, 4, 5, 6' },
  '8':  { label: 'Octal (oct)',       chars: '0, 1, 2, 3, 4, 5, 6, 7' },
  '9':  { label: 'Base 9 (base 9)',   chars: '0, 1, 2, 3, 4, 5, 6, 7, 8' },
  '10': { label: 'Decimal (dec)',     chars: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9' },
  '16': { label: 'Hexadecimal (hex)', chars: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F' }
};

// ── Valid character filters per base (applied after toUpperCase) ─────────────
var numberBaseValidRE = {
  '2':  /[^01]/g,
  '3':  /[^012]/g,
  '4':  /[^0123]/g,
  '5':  /[^01234]/g,
  '6':  /[^012345]/g,
  '7':  /[^0123456]/g,
  '8':  /[^01234567]/g,
  '9':  /[^012345678]/g,
  '10': /[^0-9]/g,
  '16': /[^0-9A-F]/g
};

function filterNumberInput() {
  var fromBase = document.getElementById('fromUnit').value;
  var re  = numberBaseValidRE[fromBase];
  var inp = document.getElementById('fromValue');
  if (!re || !inp) return;
  var upper    = inp.value.toUpperCase();
  var filtered = upper.replace(re, '');
  if (filtered !== inp.value) inp.value = filtered;
}

function updateAvailChars() {
  var fromBase = document.getElementById('fromUnit').value;
  var info = numberBaseInfo[fromBase];
  var el   = document.getElementById('availChars');
  if (!el || !info) return;
  el.textContent = 'Selected ' + info.label + ' - available characters: ' + info.chars;
}

function fromBaseChanged() {
  updateAvailChars();
  var inp    = document.getElementById('fromValue');
  var toVal  = document.getElementById('toValue');
  var result = document.getElementById('result');
  if (inp)    inp.value = '';
  if (toVal)  toVal.value = '';
  if (result) result.textContent = '';
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit   = document.getElementById('toUnit').value;
  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
}

function updateFormula(fromUnit, toUnit) {
  var fd    = document.getElementById('formulaDescription');
  var fdisp = document.getElementById('formulaDisplay');
  if (!fd || !fdisp) return;
  var fromBase = parseInt(fromUnit, 10);
  var toBase   = parseInt(toUnit, 10);

  if (fromUnit === toUnit) {
    fd.textContent    = 'No conversion needed - same base selected.';
    fdisp.textContent = '';
    checkFormulaOverflow();
    return;
  }

  // Use the actual user input; show nothing if no valid value entered yet
  var rawInput = document.getElementById('fromValue');
  var inputStr = rawInput ? rawInput.value.trim().toUpperCase() : '';
  if (!inputStr) {
    fd.textContent    = 'Enter a value above to see the step by step conversion.';
    fdisp.textContent = '';
    checkFormulaOverflow();
    return;
  }
  var exDec = parseInt(inputStr, fromBase);
  if (isNaN(exDec) || exDec <= 0) {
    fd.textContent    = 'Enter a valid value above to see the step by step conversion.';
    fdisp.textContent = '';
    checkFormulaOverflow();
    return;
  }

  var exFrom = exDec.toString(fromBase).toUpperCase();
  var exTo   = exDec.toString(toBase).toUpperCase();
  var SEP    = '\u2500'.repeat(28);
  var lines  = [];

  fd.textContent = 'Step by step conversion of your input:';

  // Step 1: fromBase -> decimal
  if (fromBase === 10) {
    lines.push('Step 1: Input is already decimal - skip to Step 2.');
    lines.push('        Value: ' + exDec);
  } else {
    lines.push('Step 1: Expand each digit of ' + exFrom + ' (' + unitDescriptions[fromUnit].symbol + ') by position:');
    lines.push('');
    var digits = exFrom.split('');
    var dLen   = digits.length;
    var parts  = [];
    for (var i = 0; i < dLen; i++) {
      var pos  = dLen - 1 - i;
      var dVal = parseInt(digits[i], fromBase);
      var val  = dVal * Math.round(Math.pow(fromBase, pos));
      parts.push({ digit: digits[i], pos: pos, val: val });
    }
    var maxValLen = parts.reduce(function(m, p) { return Math.max(m, String(p.val).length); }, 0);
    parts.forEach(function(p) {
      lines.push('        ' + p.digit + ' \u00d7 ' + fromBase + '^' + p.pos + ' = ' + String(p.val).padStart(maxValLen));
    });
    lines.push('        ' + '\u2500'.repeat(10 + maxValLen));
    lines.push('        Sum = ' + exDec + ' (decimal)');
  }

  lines.push('');

  // Step 2: decimal -> toBase
  if (toBase === 10) {
    lines.push('Step 2: Target is decimal - Step 1 result is the final answer.');
  } else {
    lines.push('Step 2: Divide ' + exDec + ' by ' + toBase + ' repeatedly (read remainders upward):');
    lines.push('');
    var n2   = exDec;
    var divs = [];
    while (n2 > 0) {
      var q      = Math.floor(n2 / toBase);
      var r      = n2 % toBase;
      var rLabel = r.toString(toBase).toUpperCase();
      var rDisp  = (rLabel !== String(r)) ? r + ' (' + rLabel + ')' : String(r);
      divs.push([n2, q, rDisp]);
      n2 = q;
    }
    var maxNLen2 = divs.reduce(function(m, d) { return Math.max(m, String(d[0]).length); }, 0);
    var maxQLen2 = divs.reduce(function(m, d) { return Math.max(m, String(d[1]).length); }, 0);
    divs.forEach(function(d) {
      lines.push('        ' + String(d[0]).padStart(maxNLen2) + ' \u00f7 ' + toBase + ' = ' + String(d[1]).padStart(maxQLen2) + '  r ' + d[2]);
    });
    lines.push('        Read remainders upward: ' + exTo);
  }

  lines.push('');
  lines.push(SEP);

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  var boldPfx = ['Step 1:', 'Step 2:'];
  var html = lines.map(function(line) {
    var esc = escHtml(line);
    for (var b = 0; b < boldPfx.length; b++) {
      if (esc.indexOf(boldPfx[b]) === 0) {
        return '<strong>' + boldPfx[b] + '</strong>' + esc.slice(boldPfx[b].length);
      }
    }
    return esc;
  }).join('\n');
  html += '\n<strong>Result:</strong> ' + escHtml(exFrom) + '(' + escHtml(unitDescriptions[fromUnit].symbol) + ') = <span style="color:blue;">' + escHtml(exTo) + '</span>(' + escHtml(unitDescriptions[toUnit].symbol) + ')';
  fdisp.innerHTML = html;
  checkFormulaOverflow();
}

function checkFormulaOverflow() {
  var el = document.getElementById('formulaDisplay');
  if (!el) return;
  el.classList.remove('formula-rx', 'formula-ry');
  el.style.height = '';
  el.style.width  = '';
  var ox = el.scrollWidth > el.clientWidth;
  var oy = el.scrollHeight > el.clientHeight;
  if (ox) el.classList.add('formula-rx');
  if (oy) {
    el.classList.add('formula-ry');
    el.style.height = '450px';
  }
}

function convertNumber() {
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit   = document.getElementById('toUnit').value;
  var input    = document.getElementById('fromValue').value.trim().toUpperCase();
  var toValEl  = document.getElementById('toValue');
  var resultEl = document.getElementById('result');

  if (fromUnit === toUnit) {
    resultEl.textContent = 'Please select different units to convert.';
    toValEl.value = '';
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  if (!input) {
    resultEl.textContent = '';
    toValEl.value = '';
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  var fromBase = parseInt(fromUnit, 10);
  var toBase   = parseInt(toUnit, 10);
  var decimal  = parseInt(input, fromBase);

  if (isNaN(decimal) || decimal < 0) {
    toValEl.value = '';
    resultEl.textContent = 'Invalid input for base ' + fromBase + '.';
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  var result = decimal.toString(toBase).toUpperCase();
  toValEl.value = result;
  toValEl.style.color = 'blue';
  resultEl.innerHTML = input + '\u00a0(' + unitDescriptions[fromUnit].symbol + ') = <span style="color: blue;">' +
    result + '</span>\u00a0(' + unitDescriptions[toUnit].symbol + ')';

  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
  checkResultOverflow();
}

function checkResultOverflow() {
  var el = document.getElementById('result');
  if (!el) return;
  // Reset state from previous check
  el.classList.remove('number-resizable');
  el.style.width = '';
  // Temporarily clip to measure true scrollWidth
  el.style.overflow = 'hidden';
  var overflows = el.scrollWidth > el.clientWidth;
  el.style.overflow = '';
  if (overflows) {
    el.classList.add('number-resizable');
  }
}

initConverterPage();
document.addEventListener('DOMContentLoaded', updateAvailChars);

// UNIT DESCRIPTIONS
const unitDescriptions = {
  '2': {
    name: "Binary",
    description: "Binary (base 2) is the foundational numeral system of all digital electronics, using only 0 and 1. Each position represents a power of 2: 2⁰=1, 2¹=2, 2²=4, 2³=8. Leibniz formalised it in 1679; Shannon applied Boolean logic to circuits in 1948. 8 bits = 1 byte (256 values) - the fundamental unit in every CPU from the 8080 to ARM Cortex-X. Every integer, float, character, pixel, and instruction in any digital device is ultimately binary. Conversion: decimal 42 = 32+8+2 = 2⁵+2³+2¹ = 101010₂.",
    symbol: "bin"
  },
  '3': {
    name: "Base 3",
    description: "Ternary (base 3) uses digits 0, 1, 2. Each position is a power of 3: 3⁰=1, 3¹=3, 3²=9, 3³=27. Balanced ternary (β’1, 0, +1) represents negatives without a sign and minimises rounding error. The Soviet Setun computer (1958) was the only practical balanced-ternary machine. Ternary underlies the Cantor set and Toom-Cook multiplication. Conversion: decimal 42 = 1×27+1×9+2×3+0 = 1120₃.",
    symbol: "base 3"
  },
  '4': {
    name: "Base 4",
    description: "Quaternary (base 4) uses digits 0-3. Each position is a power of 4: 4⁰=1, 4¹=4, 4²=16. Because 4 = 2², each quaternary digit maps to exactly 2 bits (0=00, 1=01, 2=10, 3=11). Used in bioinformatics to encode DNA nucleotides (A, C, G, T = 0-3), storing the human genome (3.2 Gbp) in ≈750 MB. 4-QAM encodes exactly 2 bits per symbol. Conversion: decimal 42 = 2×16+2×4+2 = 222₄.",
    symbol: "base 4"
  },
  '5': {
    name: "Base 5",
    description: "Quinary (base 5) uses digits 0-4. Each position is a power of 5: 5⁰=1, 5¹=5, 5²=25. One of the most historically widespread alternative bases, reflecting one-hand finger counting - Proto-Indo-European *penkwe = 'five/fist'. Tally marks group strokes in fives. Babylonian sexagesimal (base 60) used a 5×12 sub-structure. Fibonacci numbers mod 5 have Pisano period 20. Conversion: decimal 42 = 1×25+3×5+2 = 132₅.",
    symbol: "base 5"
  },
  '6': {
    name: "Base 6",
    description: "Senary (base 6) uses digits 0-5. Each position is a power of 6: 6⁰=1, 6¹=6, 6²=36. Six is divisible by 1, 2, 3, and 6, making fractions clean: 1/2 = 0.3, 1/3 = 0.2 (both terminating). Native to the Ndom language of Papua New Guinea. Standard dice produce one uniform senary digit per roll. Donald Knuth noted senary's compact multiplication table. Conversion: decimal 42 = 1×36+1×6+0 = 110₆.",
    symbol: "base 6"
  },
  '7': {
    name: "Base 7",
    description: "Septenary (base 7) uses digits 0-6. Each position is a power of 7: 7⁰=1, 7¹=7, 7²=49. Seven is prime, so every fraction p/q (q not divisible by 7) produces a purely repeating expansion. Seven days of the week derive from Babylonian astronomy (the 7 naked-eye celestial objects). Reed-Solomon codes used in QR codes and Blu-ray draw on prime-field properties of GF(7). Conversion: decimal 42 = 6×7+0 = 60₇.",
    symbol: "base 7"
  },
  '8': {
    name: "Octal",
    description: "Octal (base 8) uses digits 0-7. Each position is a power of 8: 8⁰=1, 8¹=8, 8²=64. Because 8 = 2³, each octal digit = exactly 3 binary bits. The Unix/Linux file permission system (chmod 755 = rwxr-xr-x; 7=111, 5=101) uses octal for concise 3-bit rwx triplets. The DEC PDP series encoded 12- and 16-bit words naturally in octal. In C/C++/JS a leading zero denotes octal: 0755 = 493₁₀. Conversion: decimal 42 = 5×8+2 = 52₈.",
    symbol: "oct"
  },
  '9': {
    name: "Base 9",
    description: "Nonary (base 9) uses digits 0-8. Each position is a power of 9: 9⁰=1, 9¹=9, 9²=81. Because 9 = 3², each nonary digit maps to exactly 2 ternary digits (0=00 … 8=22). The finite field GF(9) = GF(3²) is used in certain error-correcting codes and algebraic geometry. The 3×3 magic square sums to 15 in every row/column/diagonal and is deeply tied to mod-9 arithmetic. Conversion: decimal 42 = 4×9+6 = 46₉.",
    symbol: "base 9"
  },
  '10': {
    name: "Decimal",
    description: "Decimal (base 10) is the universal positional system using digits 0-9. Each position is a power of 10: 10⁰=1, 10¹=10, 10²=100. Attributed to human anatomy (ten fingers). The Hindu-Arabic system - including zero - was formalised by Brahmagupta (628 CE) and spread via al-Khwarizmi (c. 820 CE). SI and metric systems are base-10. IEEE 754-2008 added decimal64/128 formats for exact decimal arithmetic in financial applications. Conversion: decimal 42 is the reference value used throughout this converter.",
    symbol: "dec"
  },
  '16': {
    name: "Hexadecimal",
    description: "Hexadecimal (base 16) uses digits 0-9 and A-F (A=10, B=11, C=12, D=13, E=14, F=15). Each position is a power of 16: 16⁰=1, 16¹=16, 16²=256. Because 16 = 2⁴, each hex digit = exactly 4 bits (one nibble). Ubiquitous in computing: memory addresses (0x7FFF…), CSS colours (#FF5733), IPv6, SHA-256 hashes (64 hex digits = 256 bits), MAC addresses, UUID/GUIDs, and binary file magic numbers. The '0x' prefix originated in C (1972) and is standard in C++, Java, Python, JS, Rust, and Go. Conversion: decimal 42 = 2×16+10 = 2A₁₆.",
    symbol: "hex"
  }
};
