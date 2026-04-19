/**
 * custom-select.js
 * Replaces native <select> elements inside .converter-row with a styled
 * custom dropdown that shows at most 10 items at a time (scroll for the rest).
 * The hidden native <select> is kept in sync so all existing converter JS
 * continues to work without modification.
 */
(function () {
  'use strict';

  function buildCustomSelect(sel) {
    // Find the SI unit key for this converter from the nearest ancestor
    // that carries a data-si-unit attribute (set once per .converter-box).
    var siUnitKey = '';
    var el = sel.parentElement;
    while (el) {
      if ('siUnit' in el.dataset) { siUnitKey = el.dataset.siUnit; break; }
      el = el.parentElement;
    }

    // Wrapper takes the select's place in the grid
    var wrapper = document.createElement('span');
    wrapper.className = 'cs-wrapper';

    // Trigger button (looks like a single-line select)
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'cs-trigger';

    // Scrollable dropdown panel
    var dropdown = document.createElement('div');
    dropdown.className = 'cs-dropdown';
    dropdown.hidden = true;

    function updateTrigger() {
      var idx = sel.selectedIndex >= 0 ? sel.selectedIndex : 0;
      var opt = sel.options[idx];
      trigger.innerHTML =
        '<span class="cs-text">' + opt.text + '</span>' +
        '<span class="cs-arrow">&#9660;</span>';
    }

    function closeAll() {
      document.querySelectorAll('.cs-dropdown').forEach(function (d) { d.hidden = true; });
      document.querySelectorAll('.cs-trigger').forEach(function (t) { t.classList.remove('cs-open'); });
    }

    // Build option items from the native select (supports <optgroup>)
    function buildOption(opt) {
      var item = document.createElement('div');
      item.className = 'cs-option';
      if (opt.selected) item.classList.add('cs-selected');
      var isSI = siUnitKey !== '' && opt.value === siUnitKey;
      if (isSI) item.classList.add('cs-si');
      item.dataset.value = opt.value;
      item.textContent = isSI ? opt.text + '\u00a0\u00a0\u00a0  [SI]' : opt.text;

      item.addEventListener('click', function () {
        sel.value = opt.value;
        dropdown.querySelectorAll('.cs-option').forEach(function (o) {
          o.classList.remove('cs-selected');
        });
        item.classList.add('cs-selected');
        updateTrigger();
        dropdown.hidden = true;
        trigger.classList.remove('cs-open');
        sel.dispatchEvent(new Event('change'));
      });

      dropdown.appendChild(item);
    }

    Array.from(sel.children).forEach(function (child) {
      if (child.tagName === 'OPTGROUP') {
        var header = document.createElement('div');
        header.className = 'cs-group-header';
        header.textContent = child.label;
        dropdown.appendChild(header);
        Array.from(child.children).forEach(buildOption);
      } else if (child.tagName === 'OPTION') {
        buildOption(child);
      }
    });

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = !dropdown.hidden;
      closeAll();
      if (!isOpen) {
        dropdown.hidden = false;
        trigger.classList.add('cs-open');
        // Scroll currently selected item into view
        var selected = dropdown.querySelector('.cs-selected');
        if (selected) selected.scrollIntoView({ block: 'nearest' });
      }
    });

    updateTrigger();

    // Hide native select (keep in DOM so existing JS can read/write .value)
    sel.style.display = 'none';

    // Insert wrapper right before the select, then adopt the select inside it
    sel.parentNode.insertBefore(wrapper, sel);
    wrapper.appendChild(trigger);
    wrapper.appendChild(dropdown);
    wrapper.appendChild(sel);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Close any open dropdown on outside click
    document.addEventListener('click', function () {
      document.querySelectorAll('.cs-dropdown').forEach(function (d) { d.hidden = true; });
      document.querySelectorAll('.cs-trigger').forEach(function (t) { t.classList.remove('cs-open'); });
    });

    // Only target visible selects (skip the hidden ones in auto-generated pages)
    document.querySelectorAll('.converter-row select:not([hidden])').forEach(buildCustomSelect);
  });

  window.refreshCustomSelect = function (selectId) {
    var sel = document.getElementById(selectId);
    if (!sel) return;
    var wrapper = sel.parentNode;
    if (!wrapper || !wrapper.classList.contains('cs-wrapper')) return;
    var trigger = wrapper.querySelector('.cs-trigger');
    var dropdown = wrapper.querySelector('.cs-dropdown');
    if (!trigger || !dropdown) return;
    var selectedOpt = sel.options[sel.selectedIndex];
    if (selectedOpt) {
      var textEl = trigger.querySelector('.cs-text');
      if (textEl) {
        textEl.textContent = selectedOpt.text;
        textEl.style.color = '';
      }
    }
    dropdown.querySelectorAll('.cs-option').forEach(function (item) {
      item.classList.toggle('cs-selected', item.dataset.value === sel.value);
    });
  };
}());
