// ─────────────────────────────────────────────────────────────────────────────
// CASE TRANSFORMATIONS
// ─────────────────────────────────────────────────────────────────────────────

function caseApplyUpper(text) {
  return text.toUpperCase();
}

function caseApplyLower(text) {
  return text.toLowerCase();
}

function caseApplyCapitalized(text) {
  // Capitalize the first character after every whitespace boundary and at text start
  return text.replace(/(^|\s)(\S)/g, function(_, space, char) {
    return space + char.toUpperCase();
  });
}

function caseApplySentence(text) {
  if (!text) return text;
  // Capitalize the very first character, then each character that follows '. '
  var result = text.charAt(0).toUpperCase() + text.slice(1);
  return result.replace(/(\.\s+)([a-z])/g, function(_, before, char) {
    return before + char.toUpperCase();
  });
}

function caseApplyNormalize(text) {
  // Add a space after a period/comma only when NOT followed by:
  // same punctuation, digit, whitespace, closing brackets/quotes, or path chars
  var result = text.replace(/\.(?![\s.\d!?,;:'")\]}\_\/\\-])/g, '. ');
  result = result.replace(/,(?![\s,\d!?.;:'")\]}\_\/\\-])/g, ', ');
  // Collapse multiple consecutive spaces into a single space
  return result.replace(/ {2,}/g, ' ');
}

var caseTransforms = {
  upperCase:          caseApplyUpper,
  lowerCase:          caseApplyLower,
  capitalizedCase:    caseApplyCapitalized,
  sentenceCase:       caseApplySentence,
  normalizeWithSpace: caseApplyNormalize,
};

// ─────────────────────────────────────────────────────────────────────────────
// COUNTER LOGIC
// ─────────────────────────────────────────────────────────────────────────────

function updateCounts() {
  var input = document.getElementById('caseInput');
  if (!input) return;
  var text = input.value;
  var charEl = document.getElementById('charCount');
  var wordEl = document.getElementById('wordCount');
  if (charEl) charEl.textContent = text.length;
  if (wordEl) wordEl.textContent = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

// ─────────────────────────────────────────────────────────────────────────────
// APPLY TRANSFORMATION
// ─────────────────────────────────────────────────────────────────────────────

var caseLabels = {
  upperCase:          'Upper Case',
  lowerCase:          'Lower Case',
  capitalizedCase:    'Capitalized Case',
  sentenceCase:       'Sentence Case',
  normalizeWithSpace: 'Normalize with Space',
};

function updateCurrentState(type) {
  var el = document.getElementById('currentCaseState');
  if (!el) return;
  if (!type) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'inline';
  var nameEl = el.querySelector('.cs-name');
  if (nameEl) nameEl.textContent = caseLabels[type] || type;
}

function applyCase(type) {
  var input = document.getElementById('caseInput');
  if (!input || !caseTransforms[type]) return;
  input.value = caseTransforms[type](input.value);
  updateCounts();
  updateCurrentState(type);
}

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('caseInput');
  if (!input) return;
  input.addEventListener('input', function () {
    updateCounts();
    updateCurrentState(null);
  });
});
