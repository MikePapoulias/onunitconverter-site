// ── Currency Converter ────────────────────────────────────────────────────────
// Rates served from localStorage cache immediately; if the cached date is older
// than today's UTC date, a background revalidation fetch runs automatically.
// ─────────────────────────────────────────────────────────────────────────────

var FX_CDN_BASE = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@';
var FX_PATH     = '/v1/currencies/usd.json';
var FX_FALLBACK = 'https://raw.githubusercontent.com/fawazahmed0/exchange-api/1/latest/v1/currencies/usd.json';

var FX_CACHE_KEY  = 'fx_rates_v1';
var FX_CACHE_DATE = 'fx_date_v1';
var FX_CACHE_TS   = 'fx_ts_v1';

var fxRates = null;
var fxDate  = null;

// Formats ISO date string "YYYY-MM-DD" → "DD-MM-YYYY"
function formatDate(iso) {
  if (!iso || iso.length !== 10) return iso;
  return iso.slice(8, 10) + '-' + iso.slice(5, 7) + '-' + iso.slice(0, 4);
}

// Returns a string like "06-04-2026 14:23 (Europe/Athens)"
function formatFetchTime(tsMs) {
  if (!tsMs) return null;
  try {
    var d  = new Date(tsMs);
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'local';
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    var ss = String(d.getSeconds()).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    var mo = String(d.getMonth() + 1).padStart(2, '0');
    var yy = d.getFullYear();
    return dd + '-' + mo + '-' + yy + 'T' + hh + ':' + mm + ':' + ss + ' (' + tz + ')';
  } catch (e) { return null; }
}

// Builds the full status string from date and cached timestamp
function rateStatusMsg(isoDate, tsMs) {
  var datePart = 'Rates as of ' + formatDate(isoDate) + ' (UTC)';
  var fetched  = formatFetchTime(parseInt(tsMs, 10));
  return fetched ? datePart + ' - fetched ' + fetched : datePart;
}

// Returns today's date in UTC as "YYYY-MM-DD"
function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

// Fetches fresh rates and updates cache + UI. If `silent` is true (background
// revalidation), only updates when the API returns a date newer than what we
// already have - avoids a visible flicker when nothing changed.
function fetchFresh(silent) {
  var today = todayUTC();
  function tryUrl(url) {
    return fetch(url).then(function(r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }
  return tryUrl(FX_CDN_BASE + today + FX_PATH)
    .catch(function() { return tryUrl(FX_CDN_BASE + 'latest' + FX_PATH); })
    .catch(function() { return tryUrl(FX_FALLBACK); })
    .then(function(data) {
      // In silent/background mode only proceed if data is not older than what we have
      if (silent && fxDate && data.date < fxDate) return;
      fxRates = data.usd;
      fxDate  = data.date;
      fxRates['usd'] = fxRates['usd'] || 1;
      var nowTs = Date.now();
      try {
        localStorage.setItem(FX_CACHE_KEY,  JSON.stringify(fxRates));
        localStorage.setItem(FX_CACHE_DATE, fxDate);
        localStorage.setItem(FX_CACHE_TS,   String(nowTs));
      } catch (e) {}
      updateRateStatus(rateStatusMsg(fxDate, nowTs), false);
      // If rates changed, re-run any conversion already on screen
      if (silent) {
        var fv = document.getElementById('fromValue');
        if (fv && fv.value !== '') convertCurrency();
      }
    })
    .catch(function() {
      if (silent) return; // background failure - keep showing cached data
      try {
        var stale = localStorage.getItem(FX_CACHE_KEY);
        var sd    = localStorage.getItem(FX_CACHE_DATE);
        if (stale && sd) {
          fxRates = JSON.parse(stale);
          fxDate  = sd;
          var staleTs = localStorage.getItem(FX_CACHE_TS) || '0';
          updateRateStatus('\u26a0 Live rates unavailable - showing ' + rateStatusMsg(fxDate, staleTs), true);
          return;
        }
      } catch (e) {}
      updateRateStatus('\u26a0 Could not load exchange rates. Please try again later.', true);
    });
}

function loadRates() {
  var today = todayUTC();
  try {
    var ts     = parseInt(localStorage.getItem(FX_CACHE_TS)  || '0', 10);
    var cached = localStorage.getItem(FX_CACHE_KEY);
    var cdate  = localStorage.getItem(FX_CACHE_DATE);
    if (cached && cdate) {
      // Serve from cache immediately - user sees rates with zero delay
      fxRates = JSON.parse(cached);
      fxDate  = cdate;
      updateRateStatus(rateStatusMsg(cdate, ts), false);
      // Revalidate if cached date is behind today, or last fetch was more than 6 hours ago
      var SIX_HOURS = 6 * 60 * 60 * 1000;
      if (cdate < today || (Date.now() - ts) > SIX_HOURS) {
        fetchFresh(true);
      }
      return Promise.resolve();
    }
  } catch (e) {}

  // No cache at all - must fetch and wait
  updateRateStatus('Loading exchange rates...', false);
  return fetchFresh(false);
}

function updateRateStatus(msg, isError) {
  var el = document.getElementById('rateStatus');
  if (!el) return;
  el.textContent = msg;
  el.style.color = isError ? '#c0392b' : '#27ae60';
}

function formatCurrencyValue(n) {
  if (n === null || n === undefined || !isFinite(n)) return '?';
  if (n === 0) return '0';
  var abs = Math.abs(n);
  if (abs < 0.000001) return n.toExponential(4);
  if (abs < 0.001)    return parseFloat(n.toPrecision(4)).toString();
  if (abs < 1)        return parseFloat(n.toPrecision(5)).toString();
  return parseFloat(n.toPrecision(7)).toString();
}

function convertCurrency() {
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit   = document.getElementById('toUnit').value;
  var rawVal   = document.getElementById('fromValue').value;
  var toValEl  = document.getElementById('toValue');
  var resultEl = document.getElementById('result');
  var fromVal  = parseFloat(rawVal);

  if (fromUnit === toUnit) {
    resultEl.textContent = 'Please select different units to convert.';
    toValEl.value = '';
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    return;
  }

  if (!fxRates) {
    resultEl.textContent = 'Waiting for exchange rates...';
    toValEl.value = '';
    return;
  }

  if (rawVal === '' || isNaN(fromVal)) {
    resultEl.textContent = '';
    toValEl.value = '';
    updateFormula(fromUnit, toUnit);
    updateDescriptions(fromUnit, toUnit);
    if (fxRates) updateRefTable(fromUnit, toUnit);
    return;
  }

  var rateFrom = fxRates[fromUnit];
  var rateTo   = fxRates[toUnit];

  if (!rateFrom || !rateTo) {
    resultEl.textContent = 'Rate not available for selected currencies.';
    toValEl.value = '';
    return;
  }

  var result    = fromVal * (rateTo / rateFrom);
  var formatted = formatCurrencyValue(result);
  var fromSym   = unitDescriptions[fromUnit].symbol;
  var toSym     = unitDescriptions[toUnit].symbol;

  toValEl.value = formatted;
  toValEl.style.color = 'blue';
  resultEl.innerHTML = rawVal + '\u00a0' + fromSym +
    ' = <span style="color:blue;">' + formatted + '</span>\u00a0' + toSym;
  resultEl.classList.toggle('fx-resizable', resultEl.scrollWidth > resultEl.clientWidth);

  updateFormula(fromUnit, toUnit);
  updateDescriptions(fromUnit, toUnit);
  updateRefTable(fromUnit, toUnit);
}

function updateFormula(fromUnit, toUnit) {
  var fd    = document.getElementById('formulaDescription');
  var fdisp = document.getElementById('formulaDisplay');
  if (!fd || !fdisp) return;

  if (fromUnit === toUnit) {
    fd.textContent    = 'No conversion needed - same currency selected.';
    fdisp.textContent = '';
    return;
  }

  if (!fxRates) {
    fd.textContent    = 'Exchange rates are updated daily.';
    fdisp.textContent = 'Loading current rate...';
    return;
  }

  var rateFrom = fxRates[fromUnit];
  var rateTo   = fxRates[toUnit];

  if (!rateFrom || !rateTo) {
    fd.textContent    = 'Rate not available.';
    fdisp.textContent = '';
    return;
  }

  var rate    = rateTo / rateFrom;
  var rateInv = rateFrom / rateTo;
  var fSym    = unitDescriptions[fromUnit].symbol;
  var tSym    = unitDescriptions[toUnit].symbol;

  fd.textContent    = 'Exchange rate as of ' + (fxDate ? formatDate(fxDate) + ' (UTC)' : 'latest') + ':';
  fdisp.textContent =
    '1 ' + fSym + ' = ' + formatCurrencyValue(rate)    + ' ' + tSym + '\n' +
    '1 ' + tSym + ' = ' + formatCurrencyValue(rateInv) + ' ' + fSym;
}

function updateRefTable(fromUnit, toUnit) {
  var thead = document.getElementById('currencyRefTableHead');
  var tbody = document.getElementById('currencyRefTableBody');
  if (!tbody || !fxRates) return;

  var rateFrom = fxRates[fromUnit];
  var rateTo   = fxRates[toUnit];
  if (!rateFrom || !rateTo) return;

  var rate = rateTo / rateFrom;
  var fSym = unitDescriptions[fromUnit].symbol;
  var tSym = unitDescriptions[toUnit].symbol;
  var fName = unitDescriptions[fromUnit].name;
  var tName = unitDescriptions[toUnit].name;

  if (thead) {
    thead.innerHTML = '<tr><th>' + fName + ' (' + fSym + ')</th>' +
                      '<th>' + tName + ' (' + tSym + ')</th></tr>';
  }

  var vals = [1, 5, 10, 25, 50, 100, 250, 500, 1000];
  tbody.innerHTML = vals.map(function(v) {
    return '<tr><td>' + v + ' ' + fSym + '</td><td>' +
      formatCurrencyValue(v * rate) + ' ' + tSym + '</td></tr>';
  }).join('');
}

initConverterPage();

document.addEventListener('DOMContentLoaded', function() {
  loadRates().then(function() {
    var fu = document.getElementById('fromUnit');
    var tu = document.getElementById('toUnit');
    if (!fu || !tu) return;
    updateFormula(fu.value, tu.value);
    updateRefTable(fu.value, tu.value);
    var fv = document.getElementById('fromValue');
    if (fv && fv.value !== '') convertCurrency();
  });
});

// UNIT DESCRIPTIONS
const unitDescriptions = {
  'aed': {
    name: 'UAE Dirham',
    description: 'The UAE Dirham (AED) is the official currency of the United Arab Emirates, introduced in 1973 to replace the Qatar and Dubai Riyal. It has been pegged to the US Dollar at a fixed rate of 3.6725 AED per USD since 1997, providing exceptional monetary stability. The UAE\'s oil-driven economy and status as a global financial hub - particularly Dubai and Abu Dhabi - make the dirham one of the most stable currencies in the Arab world. The word "dirham" derives from the ancient Greek "drachma". Banknotes feature landmarks such as the Sheikh Zayed Grand Mosque and the Burj Khalifa.',
    symbol: 'AED'
  },
  'afn': {
    name: 'Afghan Afghani',
    description: 'The Afghan Afghani (AFN) is the official currency of Afghanistan, reintroduced in 2002 after decades of conflict and monetary instability. The new afghani replaced the old afghani at a rate of 1,000 to 1, successfully reducing the denominations in circulation. Da Afghanistan Bank is the central bank responsible for its issuance. The afghani has experienced significant volatility in recent years due to political instability and international sanctions. The currency is divided into 100 pul, though pul coins are rarely used in practice due to their negligible value.',
    symbol: 'AFN'
  },
  'all': {
    name: 'Albanian Lek',
    description: 'The Albanian Lek (ALL) is the official currency of Albania, with a history dating back to 1926. The name "lek" is believed to derive from a shortened form of "Aleksander", referring to Alexander the Great, who is celebrated in Albanian culture. Albania is a candidate for European Union membership, and the lek may eventually be replaced by the Euro upon accession. The Bank of Albania issues the lek, which is divided into 100 qindarka. Albania\'s economy is transitioning from a communist system to a market economy, and the lek has gradually stabilised over the past two decades.',
    symbol: 'ALL'
  },
  'amd': {
    name: 'Armenian Dram',
    description: 'The Armenian Dram (AMD) became the official currency of Armenia in November 1993, replacing the Soviet ruble following the country\'s independence from the USSR in 1991. Its name derives from the historic silver coin used in medieval Armenia. The Central Bank of Armenia oversees monetary policy and issues dram banknotes and coins. Armenia\'s economy is heavily influenced by remittances from the Armenian diaspora and exports of diamonds, minerals, and brandy. The dram is divided into 100 luma, though luma coins are no longer in circulation due to low purchasing power.',
    symbol: 'AMD'
  },
  'ars': {
    name: 'Argentine Peso',
    description: 'The Argentine Peso (ARS) is the official currency of Argentina, a country that has experienced several monetary crises and currency replacements throughout its history. The current peso was introduced in 1992 at a 1:1 peg with the US Dollar, which was abandoned in 2002 during a severe economic and banking crisis. Argentina has struggled with recurring high inflation and currency devaluation, making the peso one of the most volatile currencies among major Latin American nations. The Banco Central de la Republica Argentina manages monetary policy. The peso is divided into 100 centavos.',
    symbol: 'ARS'
  },
  'aud': {
    name: 'Australian Dollar',
    description: 'The Australian Dollar (AUD), nicknamed the "Aussie", was introduced on 14 February 1966 when Australia decimalised its currency, replacing the Australian pound at two dollars to the pound. It is the fifth most traded currency in global foreign exchange markets, reflecting Australia\'s status as a major commodity exporter - particularly iron ore, coal, and gold. The Reserve Bank of Australia manages monetary policy. The AUD is also legal tender in several Pacific island nations including Kiribati, Nauru, and Tuvalu.',
    symbol: 'AUD'
  },
  'azn': {
    name: 'Azerbaijani Manat',
    description: 'The Azerbaijani Manat (AZN) is the official currency of Azerbaijan, reintroduced as the "new manat" in 2006 to replace the old manat at a rate of 5,000 to 1. The Central Bank of the Republic of Azerbaijan issues the manat, which is divided into 100 qapik. Azerbaijan\'s economy is strongly driven by oil and natural gas exports from the Caspian Sea region, making the manat\'s value closely tied to energy commodity prices. The currency experienced a significant devaluation in 2015-2016 when oil prices fell sharply. The manat\'s name derives from the Russian word for "coin".',
    symbol: 'AZN'
  },
  'bam': {
    name: 'Bosnian Convertible Mark',
    description: 'The Bosnian Convertible Mark (BAM) was introduced in 1995 following the Dayton Peace Agreement that ended the Bosnian War. It replaced the Bosnian dinar and has been pegged to the Euro at a fixed rate of 1.95583 BAM per EUR since 1998 (originally pegged to the Deutsche Mark). This currency board arrangement ensures full convertibility and monetary discipline. The Central Bank of Bosnia and Herzegovina issues the BAM but has no power to conduct independent monetary policy due to the peg. The "marka" design on banknotes reflects both Bosniak and Croat cultural heritage.',
    symbol: 'BAM'
  },
  'bdt': {
    name: 'Bangladeshi Taka',
    description: 'The Bangladeshi Taka (BDT) has been the official currency of Bangladesh since the country\'s independence in 1971, replacing the Pakistani rupee. The word "taka" derives from the Sanskrit "tankah", an ancient silver coin. Bangladesh Bank, the central bank, manages monetary policy. The taka is divided into 100 poisha. Bangladesh\'s economy has grown remarkably over the past three decades, powered primarily by its garment and textile export industry - the second largest in the world after China.',
    symbol: 'BDT'
  },
  'bgn': {
    name: 'Bulgarian Lev',
    description: 'The Bulgarian Lev (BGN) is the official currency of Bulgaria, with a history dating to 1880 when it replaced the Turkish piastre after Bulgaria\'s liberation. The word "lev" means "lion" in Bulgarian. Following a severe financial crisis in 1996-1997, a currency board was established and the lev was pegged first to the Deutsche Mark and then to the Euro at 1.95583 BGN per EUR. Bulgaria is an EU member since 2007 and is working towards adopting the Euro. The Bulgarian National Bank issues the lev, which is divided into 100 stotinki.',
    symbol: 'BGN'
  },
  'bhd': {
    name: 'Bahraini Dinar',
    description: 'The Bahraini Dinar (BHD) is one of the highest-valued currencies in the world by exchange rate. Introduced in 1965 to replace the Gulf rupee, it has been pegged to the US Dollar at 0.376 BHD per USD since 1980, making 1 dinar worth approximately 2.65 USD. Bahrain is a small but wealthy Gulf state, with an economy centred on oil refining, banking, and financial services. The dinar is divided into 1,000 fils, making it one of the few currencies with a three-decimal subdivision system. The Central Bank of Bahrain oversees monetary policy.',
    symbol: 'BHD'
  },
  'bnd': {
    name: 'Bruneian Dollar',
    description: 'The Bruneian Dollar (BND) is the official currency of Brunei Darussalam, introduced in 1967 when Brunei separated its currency from the unified Malaya and British Borneo dollar. By a Currency Interchangeability Agreement signed in 1967, the BND is interchangeable at par (1:1) with the Singapore Dollar (SGD) - both currencies are accepted in both countries. The Autoriti Monetari Brunei Darussalam manages the currency. Brunei\'s economy is dominated by oil and natural gas exports, which give it one of the highest per capita incomes in Asia. The dollar is divided into 100 sen.',
    symbol: 'BND'
  },
  'bob': {
    name: 'Bolivian Boliviano',
    description: 'The Bolivian Boliviano (BOB) is the official currency of Bolivia, named after Simon Bolivar, the independence hero of Latin America. The current boliviano was introduced in 1987, replacing the peso boliviano at a rate of 1,000,000 to 1 following a period of devastating hyperinflation in the mid-1980s when annual inflation reached 24,000%. The Banco Central de Bolivia manages monetary policy. Bolivia is a landlocked South American country with significant natural gas and lithium reserves. The boliviano is divided into 100 centavos.',
    symbol: 'BOB'
  },
  'brl': {
    name: 'Brazilian Real',
    description: 'The Brazilian Real (BRL) was introduced on 1 July 1994 as a cornerstone of the Plano Real economic stabilisation programme, which successfully ended decades of hyperinflation that had reached over 2,000% annually. The name "real" means "royal" in Portuguese and also "real" as in genuine. The Banco Central do Brasil manages monetary policy. Brazil has the largest economy in Latin America and the ninth largest globally. The real is divided into 100 centavos. The BRL is one of the most important emerging market currencies and is heavily traded in global forex markets.',
    symbol: 'BRL'
  },
  'byn': {
    name: 'Belarusian Ruble',
    description: 'The Belarusian Ruble (BYN) is the official currency of Belarus. A redenomination occurred on 1 July 2016 at a rate of 1 new ruble to 10,000 old rubles (BYR), simplifying transactions and reducing the size of banknote denominations. The National Bank of the Republic of Belarus issues the ruble and manages monetary policy. Belarus maintains a managed float exchange rate influenced by its close economic ties with Russia. The economy is largely state-controlled with major industries including potash mining, machinery manufacturing, and agriculture. The ruble is divided into 100 kopecks.',
    symbol: 'BYN'
  },
  'cad': {
    name: 'Canadian Dollar',
    description: 'The Canadian Dollar (CAD), nicknamed the "Loonie" after the loon bird on the one-dollar coin, was introduced in 1858 and has been the official currency of Canada since Confederation in 1867. It is the sixth most traded currency in global foreign exchange markets. Canada\'s economy is among the world\'s ten largest and is closely integrated with the US economy under the USMCA (formerly NAFTA) agreement. The Bank of Canada manages monetary policy with a floating exchange rate.',
    symbol: 'CAD'
  },
  'chf': {
    name: 'Swiss Franc',
    description: 'The Swiss Franc (CHF) is the official currency of Switzerland and Liechtenstein, and one of the most important safe-haven currencies in the world. The name "franc" derives from the Latin "Francorum Rex" (King of the Franks). Switzerland is not a European Union member and has maintained its own currency, which regularly appreciates during global financial uncertainty due to Switzerland\'s political neutrality, strong banking sector, and fiscal discipline. The Swiss National Bank (SNB) manages monetary policy.',
    symbol: 'CHF'
  },
  'clp': {
    name: 'Chilean Peso',
    description: 'The Chilean Peso (CLP) is the official currency of Chile, with a history dating to the colonial period, though the current peso was established in 1975 after the short-lived escudo. Chile has one of the most stable and prosperous economies in Latin America, with a diversified export base that includes copper (the world\'s largest producer), lithium, and agricultural products including wine. The Banco Central de Chile manages monetary policy with a free-floating exchange rate. The peso is divided into 100 centavos, though centavo coins are no longer issued.',
    symbol: 'CLP'
  },
  'cny': {
    name: 'Chinese Yuan',
    description: 'The Chinese Yuan (CNY), also known as the Renminbi (RMB, meaning "people\'s currency"), is the official currency of the People\'s Republic of China. Introduced in 1949 when the People\'s Republic was founded, it replaced multiple currencies issued by various warlords and governments. The People\'s Bank of China manages monetary policy using a managed floating exchange rate with reference to a basket of currencies. The yuan became an IMF Special Drawing Rights (SDR) reserve currency in 2016, recognising China\'s role as the world\'s second largest economy.',
    symbol: 'CNY'
  },
  'cop': {
    name: 'Colombian Peso',
    description: 'The Colombian Peso (COP) is the official currency of Colombia, with a history dating to 1837, making it one of the older continuously used currencies in Latin America. The Banco de la Republica issues the peso and manages monetary policy with an inflation-targeting framework. Colombia has the third largest economy in South America, with significant exports of oil, coal, coffee, flowers, and emeralds. The peso has experienced volatility due to its correlation with oil prices - Colombia is South America\'s third-largest oil producer.',
    symbol: 'COP'
  },
  'crc': {
    name: 'Costa Rican Colon',
    description: 'The Costa Rican Colon (CRC) is the official currency of Costa Rica, named after Christopher Columbus (Cristobal Colon in Spanish) who arrived on the coast of Costa Rica in 1502. Introduced in 1896, it replaced the Costa Rican peso. The Banco Central de Costa Rica manages monetary policy. Costa Rica is notable in Latin America for its stable democracy, high standard of living, and strong eco-tourism and technology sectors. The colon is divided into 100 centimos, though low-value centimo coins are rarely used.',
    symbol: 'CRC'
  },
  'czk': {
    name: 'Czech Koruna',
    description: 'The Czech Koruna (CZK) became the sole currency of the Czech Republic on 8 February 1993, following the peaceful dissolution of Czechoslovakia - the "Velvet Divorce" - and the separation from the Slovak Koruna. The word "koruna" means "crown". The Czech National Bank manages monetary policy with an inflation-targeting regime. The Czech Republic has been an EU member since 2004 but has not yet adopted the Euro, retaining its own currency as a matter of national policy. The Czech economy is highly industrialised with a strong automotive, machinery, and electronics manufacturing base.',
    symbol: 'CZK'
  },
  'dkk': {
    name: 'Danish Krone',
    description: 'The Danish Krone (DKK) is the official currency of Denmark, Greenland, and the Faroe Islands. First introduced in 1875 as part of the Scandinavian Monetary Union alongside Sweden and Norway, it has been Denmark\'s sole official currency since 1914. Denmark is an EU member but has a formal opt-out from adopting the Euro, and the krone has been pegged to the Euro within a narrow band of plus or minus 2.25% since 1999 (previously pegged to the Deutsche Mark since 1982). Danmarks Nationalbank manages the peg primarily through interest rate policy.',
    symbol: 'DKK'
  },
  'dop': {
    name: 'Dominican Peso',
    description: 'The Dominican Peso (DOP) is the official currency of the Dominican Republic, occupying the eastern two-thirds of the island of Hispaniola. The peso has been reintroduced multiple times throughout the country\'s turbulent history, with the current version established in 1947. The Banco Central de la Republica Dominicana manages monetary policy. Tourism is the Dominican Republic\'s largest foreign-exchange earner, followed by remittances, free-trade zone manufacturing, and agriculture including sugar and mining exports. The peso is divided into 100 centavos.',
    symbol: 'DOP'
  },
  'dzd': {
    name: 'Algerian Dinar',
    description: 'The Algerian Dinar (DZD) has been the official currency of Algeria since 1964, replacing the Algerian franc used during the French colonial period. The Banque d\'Algerie manages monetary policy. Algeria is the largest country in Africa by land area and holds significant hydrocarbon reserves - oil and natural gas account for the majority of government revenues and export earnings. The dinar operates under a managed float exchange regime and is not freely convertible. Algeria has used foreign exchange controls and import restrictions to manage its balance of payments.',
    symbol: 'DZD'
  },
  'egp': {
    name: 'Egyptian Pound',
    description: 'The Egyptian Pound (EGP) is the official currency of Egypt and one of the oldest currency systems in the world, with versions of the pound used since Egypt adopted a monetary system in the 19th century. The Central Bank of Egypt manages monetary policy. Egypt is the most populous Arab country and the third most populous in Africa, with an economy driven by tourism, Suez Canal revenues, remittances, oil exports, and agriculture. The pound underwent significant devaluations in 2016 and 2023 as Egypt moved to a more flexible exchange rate policy under IMF-backed economic reform programmes.',
    symbol: 'EGP'
  },
  'etb': {
    name: 'Ethiopian Birr',
    description: 'The Ethiopian Birr (ETB) is the official currency of Ethiopia, the second most populous country in Africa and one of the world\'s fastest-growing economies. The word "birr" means "silver" in Amharic. The National Bank of Ethiopia manages monetary policy. Ethiopia\'s economy is largely agricultural - it is the world\'s largest producer of chat (khat) and one of the largest of coffee, which is believed to have originated in the Ethiopian highlands. The birr is divided into 100 santim.',
    symbol: 'ETB'
  },
  'eur': {
    name: 'Euro',
    description: 'The Euro (EUR) is the official currency of the Eurozone, comprising 20 of the 27 European Union member states - the single largest currency union in the world by GDP. Introduced in non-physical form on 1 January 1999 and as banknotes and coins on 1 January 2002, the Euro replaced participating national currencies such as the Deutsche Mark, French Franc, Italian Lira, and Spanish Peseta. The European Central Bank (ECB) in Frankfurt manages monetary policy. The Euro is the second largest reserve currency and the second most traded currency in global foreign exchange markets after the US Dollar.',
    symbol: 'EUR'
  },
  'fjd': {
    name: 'Fijian Dollar',
    description: 'The Fijian Dollar (FJD) has been the official currency of Fiji since 1969, replacing the pound at a rate of two dollars to the pound during decimalisation. The Reserve Bank of Fiji manages monetary policy. Fiji is the most developed economy in the Pacific island region, with sugar, tourism, garments, and gold as primary economic drivers. The dollar is divided into 100 cents. The Fijian Dollar\'s exchange rate is managed against a basket of currencies of Fiji\'s main trading partners, providing a degree of stability while allowing some flexibility.',
    symbol: 'FJD'
  },
  'gbp': {
    name: 'British Pound Sterling',
    description: 'The British Pound Sterling (GBP), symbolised by the pound sign "£", is the world\'s oldest currency still in use, with roots dating to Anglo-Saxon England in the 8th century. It is the fourth most traded currency in global forex markets and the third largest reserve currency after the US Dollar and Euro. The Bank of England, established in 1694, is the world\'s second oldest central bank and manages UK monetary policy. The pound is divided into 100 pence. Following Brexit in 2020, the UK maintains full monetary independence.',
    symbol: 'GBP'
  },
  'gel': {
    name: 'Georgian Lari',
    description: 'The Georgian Lari (GEL) has been the official currency of Georgia since 1995, replacing the Georgian coupon at a rate of one million to one following the economic collapse after the dissolution of the Soviet Union. The name "lari" derives from an old Georgian word meaning "hoard" or "property". The National Bank of Georgia manages monetary policy with a floating exchange rate regime. Georgia\'s economy has undergone significant reforms since independence, establishing strong property rights and a competitive business environment that attracted considerable foreign investment.',
    symbol: 'GEL'
  },
  'ghs': {
    name: 'Ghanaian Cedi',
    description: 'The Ghanaian Cedi (GHS) was reintroduced in July 2007, replacing the old cedi at a rate of 10,000 old cedis to 1 new cedi, simplifying transactions and improving monetary management. Ghana was one of the first African countries to adopt a redenomination to address accumulated inflation. The Bank of Ghana manages monetary policy. Ghana is one of Africa\'s leading economies with significant exports of gold (the country\'s name historically derives from an ancient gold-trading empire), cocoa, oil, and timber.',
    symbol: 'GHS'
  },
  'gtq': {
    name: 'Guatemalan Quetzal',
    description: 'The Guatemalan Quetzal (GTQ) is the official currency of Guatemala, named after the resplendent quetzal bird, the national symbol of Guatemala and one of the world\'s most spectacular tropical birds. The quetzal was introduced in 1925, replacing the peso. The Banco de Guatemala manages monetary policy. Guatemala is the largest economy in Central America, with agriculture (coffee, sugar, bananas, cardamom) accounting for a significant share of exports. The quetzal has maintained relative stability compared to many Latin American currencies.',
    symbol: 'GTQ'
  },
  'hkd': {
    name: 'Hong Kong Dollar',
    description: 'The Hong Kong Dollar (HKD) has been the official currency of Hong Kong since 1863. It has been pegged to the US Dollar under a Currency Board system since 1983 within a tight band of 7.75 to 7.85 HKD per USD, providing monetary stability crucial for Hong Kong\'s role as a global financial centre. The Hong Kong Monetary Authority (HKMA) manages the peg by automatically adjusting interest rates. Hong Kong is one of the world\'s most important financial hubs, hosting one of Asia\'s largest stock exchanges.',
    symbol: 'HKD'
  },
  'hnl': {
    name: 'Honduran Lempira',
    description: 'The Honduran Lempira (HNL) is the official currency of Honduras, named after Lempira, an indigenous Lenca chief who led resistance against Spanish colonisation in the 16th century and is celebrated as a national hero. The lempira was introduced in 1931 to replace the Honduran peso. The Banco Central de Honduras manages monetary policy. Honduras is one of Central America\'s larger economies, with exports primarily consisting of coffee, bananas, palm oil, shrimp, and textiles from maquiladora (export processing zone) factories.',
    symbol: 'HNL'
  },
  'huf': {
    name: 'Hungarian Forint',
    description: 'The Hungarian Forint (HUF) has been the official currency of Hungary since 1 August 1946, introduced as part of a post-World War II monetary reform that ended one of history\'s worst hyperinflations - at its peak, prices doubled every 15 hours. The word "forint" derives from the Italian city of Florence (fiorino d\'oro). Hungary has been an EU member since 2004 but has not yet adopted the Euro. The Magyar Nemzeti Bank (Magyar National Bank) manages monetary policy. Hungary\'s economy is strongly integrated with Western European supply chains, particularly the automotive sector.',
    symbol: 'HUF'
  },
  'idr': {
    name: 'Indonesian Rupiah',
    description: 'The Indonesian Rupiah (IDR) is the official currency of Indonesia, the world\'s fourth most populous country and largest archipelago nation. The word "rupiah" derives from the Sanskrit "rupyakam" (silver). First issued in 1946, the rupiah replaced the Dutch colonial guilder. Bank Indonesia manages monetary policy. Indonesia is a member of the G20 and has one of Southeast Asia\'s largest economies, driven by natural resource exports (coal, palm oil, rubber, metals) and a growing domestic consumer market.',
    symbol: 'IDR'
  },
  'ils': {
    name: 'Israeli New Shekel',
    description: 'The Israeli New Shekel (ILS) has been the official currency of Israel since 1986, replacing the old shekel at a rate of 1,000 to 1. The shekel is one of the oldest monetary units in human history, mentioned throughout the Hebrew Bible as a weight of silver. The Bank of Israel manages monetary policy with a free-floating exchange rate. Israel has a highly developed, technology-driven economy - often called the "Start-Up Nation" - with significant exports of software, semiconductors, pharmaceuticals, and diamond cutting and polishing. The new shekel is divided into 100 agorot.',
    symbol: 'ILS'
  },
  'inr': {
    name: 'Indian Rupee',
    description: 'The Indian Rupee (INR) is the official currency of India, the world\'s most populous country and fifth largest economy. The name "rupee" derives from the Sanskrit "rupyakam" (silver coin), used since the Maurya Empire around 300 BCE. The Reserve Bank of India (RBI) manages monetary policy. The rupee was decimalised in 1957 and is divided into 100 paise, though paise coins below 50 are no longer in circulation. India\'s economy is driven by information technology services, pharmaceuticals, textiles, agriculture, and rapidly growing manufacturing.',
    symbol: 'INR'
  },
  'iqd': {
    name: 'Iraqi Dinar',
    description: 'The Iraqi Dinar (IQD) is the official currency of Iraq, one of the world\'s largest oil producers with reserves comparable to Saudi Arabia\'s. The dinar was introduced in 1932, replacing the Indian rupee. The Central Bank of Iraq manages monetary policy with a quasi-peg to the US Dollar. The dinar underwent a reissue in 2003 following the fall of Saddam Hussein\'s government, replacing both the "Swiss" dinar used in Kurdistan and the Saddam-era dinar at various exchange rates.',
    symbol: 'IQD'
  },
  'irr': {
    name: 'Iranian Rial',
    description: 'The Iranian Rial (IRR) is the official currency of Iran, though Iranians commonly quote prices in tomans (1 toman = 10 rials). Due to decades of international economic sanctions and domestic monetary mismanagement, the rial has experienced catastrophic depreciation - losing over 99.9% of its value against the dollar since the 1979 Islamic Revolution. In 2020, the Iranian parliament approved a redenomination plan replacing 10,000 rials with 1 new toman, though full implementation has been slow. The Central Bank of Iran issues currency and manages monetary policy.',
    symbol: 'IRR'
  },
  'isk': {
    name: 'Icelandic Krona',
    description: 'The Icelandic Krona (ISK) is the official currency of Iceland, one of the world\'s most sparsely populated countries but with a high standard of living. The krona has been subject to notable turbulence - during the 2008 global financial crisis, Iceland\'s banking system collapsed spectacularly and the krona lost about half its value virtually overnight, requiring capital controls that remained in place until 2017. The Central Bank of Iceland manages monetary policy. Iceland\'s economy is based on fishing, aluminium smelting, geothermal energy, and increasingly tourism.',
    symbol: 'ISK'
  },
  'jmd': {
    name: 'Jamaican Dollar',
    description: 'The Jamaican Dollar (JMD) has been the official currency of Jamaica since 1969, replacing the Jamaican pound following decimalisation. The Bank of Jamaica manages monetary policy with a floating exchange rate, and the JMD has depreciated steadily over the decades relative to major currencies. Jamaica\'s economy depends heavily on tourism, bauxite and alumina exports, and remittances from the large Jamaican diaspora in the United States, United Kingdom, and Canada. The dollar is divided into 100 cents.',
    symbol: 'JMD'
  },
  'jod': {
    name: 'Jordanian Dinar',
    description: 'The Jordanian Dinar (JOD) is one of the highest-valued currencies in the world by exchange rate versus the US Dollar. It has been pegged to the USD at 0.709 JOD per 1 USD since 1995, making 1 dinar worth approximately 1.41 US Dollars. Jordan is a stable constitutional monarchy with a diversified economy including phosphate mining (one of the world\'s top producers), tourism, services, and significant foreign investment. The Central Bank of Jordan manages the peg. The dinar is divided into 10 dirhams or 100 qirsh or 1,000 fils.',
    symbol: 'JOD'
  },
  'jpy': {
    name: 'Japanese Yen',
    description: 'The Japanese Yen (JPY) is the official currency of Japan and the third most traded currency in global foreign exchange markets, accounting for approximately 17% of daily forex turnover. Introduced in 1871 as part of the Meiji government\'s monetary reforms, the yen replaced a complex system of Feudal domain currencies. The Bank of Japan (BoJ) manages monetary policy. Japan has the world\'s third largest economy and has been characterised by decades of near-zero interest rates and periodic quantitative easing.',
    symbol: 'JPY'
  },
  'kes': {
    name: 'Kenyan Shilling',
    description: 'The Kenyan Shilling (KES) has been the official currency of Kenya since 1966, replacing the East African shilling used during the colonial period. The Central Bank of Kenya manages monetary policy. Kenya is the largest economy in East Africa and a regional hub for finance, telecommunications, and logistics. Major export earners include tea (Kenya is the world\'s largest exporter of black tea), coffee, flowers, horticulture, and tourism. The Kenyan shilling is divided into 100 cents.',
    symbol: 'KES'
  },
  'kgs': {
    name: 'Kyrgyzstani Som',
    description: 'The Kyrgyzstani Som (KGS) has been the official currency of Kyrgyzstan since 1993, replacing the Soviet ruble following independence. The word "som" means "pure" in Kyrgyz and several other Turkic languages, historically referring to pure silver or gold. The National Bank of the Kyrgyz Republic manages monetary policy with a managed float regime. Kyrgyzstan is a Central Asian country with a landlocked mountain economy dependent on gold mining (the Kumtor mine is one of Central Asia\'s largest), remittances from workers in Russia and Kazakhstan, agriculture, and some manufacturing.',
    symbol: 'KGS'
  },
  'khr': {
    name: 'Cambodian Riel',
    description: 'The Cambodian Riel (KHR) is the official currency of Cambodia but exists in an unusual dual-currency environment where the US Dollar is widely used alongside the riel for most large transactions. The riel was reintroduced in 1980 after the Khmer Rouge abolished currency entirely between 1975 and 1979 - one of only two instances in modern history where a national currency was completely abolished. The National Bank of Cambodia manages monetary policy. Cambodia\'s economy has grown rapidly, fuelled by garment exports, tourism, and construction.',
    symbol: 'KHR'
  },
  'kwd': {
    name: 'Kuwaiti Dinar',
    description: 'The Kuwaiti Dinar (KWD) consistently holds the title of the world\'s highest-valued currency unit by exchange rate - 1 Kuwaiti Dinar is currently worth approximately 3.25 US Dollars. Introduced in 1961 when Kuwait gained independence from Britain, it replaced the Gulf rupee. Kuwait is a small but immensely wealthy Gulf state with the world\'s sixth-largest proven oil reserves relative to its size, generating enormous per capita wealth. The Central Bank of Kuwait manages the dinar, which is pegged to an undisclosed basket of currencies.',
    symbol: 'KWD'
  },
  'kzt': {
    name: 'Kazakhstani Tenge',
    description: 'The Kazakhstani Tenge (KZT) became the official currency of Kazakhstan in November 1993, replacing the Soviet ruble following independence in 1991. Kazakhstan is Central Asia\'s largest and wealthiest economy, possessing enormous reserves of oil, natural gas, uranium (the world\'s top uranium producer), copper, zinc, and other minerals. The National Bank of Kazakhstan manages monetary policy. The tenge experienced significant devaluations in 2009 and 2015 in response to falling oil prices and the devaluation of the Russian ruble.',
    symbol: 'KZT'
  },
  'lak': {
    name: 'Lao Kip',
    description: 'The Lao Kip (LAK) is the official currency of the Lao People\'s Democratic Republic (Laos), a landlocked Southeast Asian country bordered by China, Vietnam, Myanmar, Cambodia, and Thailand. The current kip was introduced in 1979 when the communist Pathet Lao government unified the country\'s divided monetary system. The Bank of the Lao P.D.R. manages monetary policy. Laos is one of Southeast Asia\'s least developed countries, with an economy increasingly based on hydropower exports to neighbouring countries, mining, tourism, and agriculture.',
    symbol: 'LAK'
  },
  'lbp': {
    name: 'Lebanese Pound',
    description: 'The Lebanese Pound (LBP) has been in a state of severe crisis since 2019, when Lebanon entered its worst economic collapse since the civil war. The pound lost over 95% of its value as the banking system froze dollar deposits, the government defaulted on its debt, and rampant money printing fuelled hyperinflation. Formally introduced in 1939 and once pegged at 1,507 LBP per USD for decades (providing artificial stability), the multiple exchange rates and loss of the peg created a chaotic monetary situation. The Banque du Liban manages the currency.',
    symbol: 'LBP'
  },
  'lkr': {
    name: 'Sri Lankan Rupee',
    description: 'The Sri Lankan Rupee (LKR) has been the official currency of Sri Lanka since 1872, with the Central Bank of Sri Lanka (CBSL) managing monetary policy since 1950. Sri Lanka experienced a severe economic crisis in 2022, running out of foreign exchange reserves, causing widespread fuel, medicine, and food shortages that led to political upheaval and the resignation of the president. An IMF bailout agreement in 2023 helped stabilise the situation. Sri Lanka\'s economy is based on tourism, garment exports, tea (a world-leading exporter), and remittances.',
    symbol: 'LKR'
  },
  'lyd': {
    name: 'Libyan Dinar',
    description: 'The Libyan Dinar (LYD) is the official currency of Libya, one of Africa\'s largest oil producers with proven reserves among the continent\'s largest. Introduced in 1971 to replace the Libyan pound, the dinar operates under a fixed official exchange rate managed by the Central Bank of Libya. Libya\'s monetary system has been significantly disrupted by the ongoing political instability and civil conflict that began in 2011 with the fall of Muammar Gaddafi\'s government. There have at times been two competing central banks issuing currency.',
    symbol: 'LYD'
  },
  'mad': {
    name: 'Moroccan Dirham',
    description: 'The Moroccan Dirham (MAD) has been the official currency of Morocco since 1960, replacing the franc used during the French protectorate period. Bank Al-Maghrib manages monetary policy with a managed float exchange rate pegged to a basket of the Euro and US Dollar. Morocco has one of Africa\'s most diversified economies, with revenues from phosphate exports (the world\'s third largest producer), tourism, remittances from Moroccans abroad, and growing manufacturing including automotive and aerospace sectors. Morocco has signed a free trade agreement with the EU.',
    symbol: 'MAD'
  },
  'mdl': {
    name: 'Moldovan Leu',
    description: 'The Moldovan Leu (MDL) has been the official currency of Moldova since 1993, replacing the Moldovan cupon interim currency used after independence from the Soviet Union in 1991. The word "leu" means "lion" in Romanian. The National Bank of Moldova manages monetary policy with a managed float. Moldova is one of Europe\'s least developed countries, with an economy strongly dependent on agriculture (wine, fruits, vegetables), remittances from the large Moldovan diaspora working in Russia and EU countries, and light manufacturing. The leu is divided into 100 bani.',
    symbol: 'MDL'
  },
  'mkd': {
    name: 'Macedonian Denar',
    description: 'The Macedonian Denar (MKD) has been the official currency of North Macedonia since 1992, replacing the Yugoslav dinar following the country\'s independence. The name "denar" derives from the ancient Roman silver coin "denarius". The National Bank of the Republic of North Macedonia manages monetary policy with a fixed exchange rate de facto pegged to the Euro. North Macedonia is a small Balkan country with an economy based on steel, iron, lead, zinc, manganese, chromite, and tungsten mining, as well as agriculture and light manufacturing.',
    symbol: 'MKD'
  },
  'mmk': {
    name: 'Myanmar Kyat',
    description: 'The Myanmar Kyat (MMK) is the official currency of Myanmar (formerly Burma), managed by the Central Bank of Myanmar. The kyat has experienced extraordinary volatility following the military coup of February 2021, which led to international sanctions, economic disruption, and a collapse in investor confidence. The kyat lost a significant portion of its value in the years following the coup. Myanmar\'s economy was based on natural gas exports, garments, jade and gems, rice, and tourism prior to the coup. The parallel market exchange rate often diverges significantly from the official rate.',
    symbol: 'MMK'
  },
  'mnt': {
    name: 'Mongolian Tugrik',
    description: 'The Mongolian Tugrik (MNT) has been the official currency of Mongolia since 1925, introduced by the Mongolian People\'s Republic with Soviet assistance. The Bank of Mongolia manages monetary policy with a managed float regime. Mongolia is a vast landlocked nation wedged between Russia and China, with an economy dominated by mining - it is one of the world\'s top exporters of copper, coal, molybdenum, and gold. The tugrik\'s value fluctuates significantly with global commodity prices, particularly copper. The "Gobi" brand cashmere wool is also an important export.',
    symbol: 'MNT'
  },
  'mop': {
    name: 'Macanese Pataca',
    description: 'The Macanese Pataca (MOP) is the official currency of Macau Special Administrative Region of China, used alongside the Hong Kong Dollar (which is widely accepted at a rate of 1 HKD = 1.03 MOP approximately). The pataca has been pegged to the HKD since 1977. Macau is the only place in China where gambling is legal, making its economy - per capita one of the world\'s richest - almost entirely dependent on gaming and tourism revenues. The Monetary Authority of Macao issues the pataca.',
    symbol: 'MOP'
  },
  'mur': {
    name: 'Mauritian Rupee',
    description: 'The Mauritian Rupee (MUR) is the official currency of Mauritius, an island nation in the Indian Ocean known for its diversified and well-managed economy. The Bank of Mauritius manages monetary policy with a managed float regime. Mauritius has successfully transitioned from a mono-crop sugar economy to a multi-pillar economy driven by financial services, tourism, textiles, information and communication technology, and seafood processing. It has one of Africa\'s highest income levels and a reputation for political stability and good governance. The rupee is divided into 100 cents.',
    symbol: 'MUR'
  },
  'mvr': {
    name: 'Maldivian Rufiyaa',
    description: 'The Maldivian Rufiyaa (MVR) is the official currency of the Maldives, an archipelago of 1,200 coral islands in the Indian Ocean. The Maldives Monetary Authority (MMA) manages monetary policy. The rufiyaa is pegged to the US Dollar at a rate of approximately 15.42 MVR per USD within a narrow band. The Maldivian economy is almost entirely dependent on tourism - the Maldives is one of the world\'s premier luxury travel destinations - and fishing. The tourism sector accounts for around 25% of GDP directly and far more indirectly. The rufiyaa is divided into 100 laari.',
    symbol: 'MVR'
  },
  'mwk': {
    name: 'Malawian Kwacha',
    description: 'The Malawian Kwacha (MWK) is the official currency of Malawi, one of the world\'s least developed countries and most densely populated nations in Sub-Saharan Africa. Introduced in 1971 to replace the Malawian pound, the name "kwacha" means "dawn" in the Chichewa language, reflecting the aspiration of a new beginning at independence. The Reserve Bank of Malawi manages monetary policy. Malawi\'s economy is overwhelmingly agricultural, with tobacco as the dominant export crop.',
    symbol: 'MWK'
  },
  'mxn': {
    name: 'Mexican Peso',
    description: 'The Mexican Peso (MXN) is one of Latin America\'s most important currencies and among the most actively traded emerging market currencies globally. Mexico has a deep and liquid forex market. The Banco de Mexico (Banxico) manages monetary policy with a free-floating exchange rate. Mexico is the 13th largest economy in the world and the second largest in Latin America. Its economy is closely integrated with the US through the USMCA (formerly NAFTA) agreement - the US is Mexico\'s largest trading partner.',
    symbol: 'MXN'
  },
  'myr': {
    name: 'Malaysian Ringgit',
    description: 'The Malaysian Ringgit (MYR) is the official currency of Malaysia. The word "ringgit" means "jagged" in Malay, describing the milled or serrated edges of old Spanish silver dollars that once circulated in the region. Bank Negara Malaysia manages monetary policy. Malaysia has one of Southeast Asia\'s most diversified and developed economies, with major exports including electronics, petroleum products, palm oil, rubber, and liquefied natural gas. Malaysia is the world\'s second largest producer of palm oil.',
    symbol: 'MYR'
  },
  'mzn': {
    name: 'Mozambican Metical',
    description: 'The Mozambican Metical (MZN) was reintroduced in 2006 at a rate of 1,000 old meticals to 1 new metical following years of inflation after Mozambique\'s devastating civil war that ended in 1992. The Banco de Mocambique manages monetary policy. Mozambique is a rapidly developing East African country with significant natural resources - offshore natural gas fields discovered in the Rovuma Basin are among the world\'s largest, positioning Mozambique for major LNG exports. The country also exports prawns, coal, aluminium, and cashew nuts. The metical is divided into 100 centavos.',
    symbol: 'MZN'
  },
  'nad': {
    name: 'Namibian Dollar',
    description: 'The Namibian Dollar (NAD) has been the official currency of Namibia since 1993, replacing the South African Rand when Namibia achieved full monetary independence after gaining independence from South Africa in 1990. The NAD is pegged to the South African Rand at parity (1:1), and the rand remains legal tender in Namibia. The Bank of Namibia issues the dollar under a currency board arrangement. Namibia is a sparsely populated country with significant natural resources - diamonds (the coast is one of the world\'s richest diamond fields), uranium, zinc, copper, gold, and fish.',
    symbol: 'NAD'
  },
  'ngn': {
    name: 'Nigerian Naira',
    description: 'The Nigerian Naira (NGN) is the official currency of Nigeria, Africa\'s most populous country and largest economy by GDP. Introduced in 1973 to replace the Nigerian pound, the naira has experienced severe long-term depreciation relative to major currencies. The Central Bank of Nigeria (CBN) manages monetary policy. Nigeria is a major oil producer - crude oil and natural gas account for the vast majority of government revenues and export earnings. The economy has faced structural challenges including dependence on oil, inflation, currency shortages, and foreign exchange controls.',
    symbol: 'NGN'
  },
  'nio': {
    name: 'Nicaraguan Cordoba',
    description: 'The Nicaraguan Cordoba (NIO) is the official currency of Nicaragua, named after Francisco Hernandez de Cordoba, the Spanish conquistador who founded several of Nicaragua\'s major colonial cities. The current gold cordoba was introduced in 1991 following a period of hyperinflation under the Nicaraguan Revolution government, replacing the old cordoba at a rate of 5 million to 1. The Banco Central de Nicaragua manages monetary policy with a crawling peg exchange rate that depreciates against the US Dollar at a controlled rate of approximately 3% per year.',
    symbol: 'NIO'
  },
  'nok': {
    name: 'Norwegian Krone',
    description: 'The Norwegian Krone (NOK) is the official currency of Norway and is managed by Norges Bank with an inflation-targeting floating exchange rate regime. Norway is one of the world\'s wealthiest countries, with a massive sovereign wealth fund - the Government Pension Fund Global, the world\'s largest sovereign wealth fund at over one trillion US Dollars - built from North Sea oil revenues. This "oil fund" provides a financial buffer against commodity price cycles. Norway is not an EU member but participates in the European Economic Area.',
    symbol: 'NOK'
  },
  'npr': {
    name: 'Nepalese Rupee',
    description: 'The Nepalese Rupee (NPR) is the official currency of Nepal, a landlocked Himalayan nation between India and China. The Nepal Rastra Bank manages monetary policy. The NPR has been pegged to the Indian Rupee (INR) at a fixed rate of 1.6 NPR per 1 INR since 1994, reflecting the close economic integration between Nepal and India - India is Nepal\'s largest trading partner and source of most imports. Nepal\'s economy depends on tourism (trekking, mountaineering - Mount Everest is in Nepal), remittances from workers abroad (primarily in Gulf countries and India), and hydropower exports.',
    symbol: 'NPR'
  },
  'nzd': {
    name: 'New Zealand Dollar',
    description: 'The New Zealand Dollar (NZD), nicknamed the "Kiwi" after the native flightless bird on the one-dollar coin, was introduced in 1967 when New Zealand decimalised its currency. It is the tenth most traded currency in global foreign exchange markets. The Reserve Bank of New Zealand (RBNZ) manages monetary policy with an inflation-targeting floating exchange rate. New Zealand\'s export-oriented economy is based primarily on dairy products, meat, wool, and wine, alongside tourism and financial services.',
    symbol: 'NZD'
  },
  'omr': {
    name: 'Omani Rial',
    description: 'The Omani Rial (OMR) is the official currency of the Sultanate of Oman and one of the highest-valued currencies in the world by exchange rate. Introduced in 1973 to replace the Saidi rial, it has been pegged to the US Dollar at 0.3845 OMR per USD since 1986. This peg has remained stable even during periods of lower oil prices, supported by government reserves. The Central Bank of Oman manages the peg. Oman is a major oil and natural gas producer on the Arabian Peninsula, though it is also investing in diversification through tourism, logistics, and manufacturing.',
    symbol: 'OMR'
  },
  'pen': {
    name: 'Peruvian Sol',
    description: 'The Peruvian Sol (PEN) - formally the "nuevo sol" (new sun) - was introduced in 1991 as part of a sweeping economic stabilisation programme that ended hyperinflation, which had reached 7,000% annually under the previous inti currency. The name "sol" is the Spanish word for "sun" and reflects the ancient Inca sun deity Inti. The Banco Central de Reserva del Peru manages monetary policy with a managed float. Peru is one of South America\'s strongest economies and the world\'s second largest copper producer, as well as a major producer of gold, zinc, and silver.',
    symbol: 'PEN'
  },
  'php': {
    name: 'Philippine Peso',
    description: 'The Philippine Peso (PHP) is the official currency of the Philippines, an archipelago nation of over 7,000 islands in Southeast Asia. Introduced in its modern form in 1949 when the Central Bank of the Philippines was established, the peso replaced the controlled "win" currency used during and after World War II. Bangko Sentral ng Pilipinas (BSP) manages monetary policy with a managed float. The Philippines is one of Asia\'s fastest growing economies, with remittances from over 10 million overseas Filipino workers (OFWs) forming a critical economic pillar representing about 10% of GDP.',
    symbol: 'PHP'
  },
  'pkr': {
    name: 'Pakistani Rupee',
    description: 'The Pakistani Rupee (PKR) is the official currency of Pakistan, the world\'s fifth most populous country. At independence in 1947, Pakistan adopted the Indian rupee and later issued its own currency. The State Bank of Pakistan (SBP) manages monetary policy. Pakistan\'s economy has faced recurring balance-of-payments crises, heavy dependence on IMF support programmes, high inflation, and external debt pressures - all of which have contributed to sustained depreciation of the rupee over decades.',
    symbol: 'PKR'
  },
  'pln': {
    name: 'Polish Zloty',
    description: 'The Polish Zloty (PLN) is the official currency of Poland, the sixth largest economy in the European Union and the largest in Central Europe. The word "zloty" means "golden" in Polish. The National Bank of Poland (NBP) manages monetary policy with a floating exchange rate. Poland has been an EU member since 2004 but has not yet adopted the Euro, retaining the zloty as both a practical monetary instrument and a symbol of national identity. The Polish economy has been one of the fastest growing in Europe, driven by manufacturing, services, and strong domestic consumption.',
    symbol: 'PLN'
  },
  'pyg': {
    name: 'Paraguayan Guarani',
    description: 'The Paraguayan Guarani (PYG) is the official currency of Paraguay, named after the indigenous Guarani people who constitute a significant portion of the Paraguayan population and whose language is co-official with Spanish. Introduced in 1944, the guarani replaced the peso boliviano. The Banco Central del Paraguay manages monetary policy.',
    symbol: 'PYG'
  },
  'qar': {
    name: 'Qatari Riyal',
    description: 'The Qatari Riyal (QAR) is the official currency of Qatar, one of the world\'s wealthiest countries by per capita income. The riyal has been pegged to the US Dollar at 3.64 QAR per USD since 2001, a peg maintained with ease due to Qatar\'s enormous oil and liquefied natural gas (LNG) revenues. Qatar holds the world\'s third largest proven natural gas reserves and is the world\'s largest exporter of LNG. The Qatar Central Bank manages the peg. The country hosted the FIFA World Cup in 2022, showcasing massive infrastructure development.',
    symbol: 'QAR'
  },
  'ron': {
    name: 'Romanian Leu',
    description: 'The Romanian Leu (RON) is the official currency of Romania, with "leu" meaning "lion" in Romanian. A redenomination occurred in 2005 where 10,000 old lei (ROL) became 1 new leu (RON). The National Bank of Romania manages monetary policy. Romania is an EU member since 2007 and is preparing to adopt the Euro, though no firm date has been set. Romania has a medium-sized economy in Southeast Europe with strong agricultural, manufacturing (automotive - Dacia/Renault), and IT services sectors. The leu is divided into 100 bani.',
    symbol: 'RON'
  },
  'rsd': {
    name: 'Serbian Dinar',
    description: 'The Serbian Dinar (RSD) has been Serbia\'s official currency since 2003, when the Yugoslav dinar was replaced following the dissolution of the Federal Republic of Yugoslavia. The National Bank of Serbia manages monetary policy with a managed float regime where the dinar is de facto stable against the Euro. Serbia is a candidate for EU membership and its economy is closely integrated with the EU trade bloc. Major industries include automotive manufacturing (Fiat Chrysler), chemicals, banking, and agriculture. Belgrade has grown as a regional financial and technology hub.',
    symbol: 'RSD'
  },
  'rub': {
    name: 'Russian Ruble',
    description: 'The Russian Ruble (RUB) is one of the world\'s oldest currencies, with roots dating to the 13th century as a silver ingot used in medieval Kievan Rus. The Bank of Russia manages monetary policy with a floating exchange rate, adopted in 2014. Following Russia\'s invasion of Ukraine in February 2022, the ruble experienced a sharp depreciation due to unprecedented international sanctions but subsequently recovered due to capital controls, mandatory export revenue conversion, and high energy prices.',
    symbol: 'RUB'
  },
  'rwf': {
    name: 'Rwandan Franc',
    description: 'The Rwandan Franc (RWF) is the official currency of Rwanda, a small but remarkable East African nation that has rebuilt itself after the devastating genocide of 1994 into one of Africa\'s fastest growing economies and a regional leader in good governance, technology, and financial services. The National Bank of Rwanda manages monetary policy. Rwanda\'s economic model, driven by President Kagame\'s government, has pursued ambitious development plans focusing on tourism (gorilla trekking), financial services, ICT, and manufacturing. The country has consistently achieved high GDP growth rates.',
    symbol: 'RWF'
  },
  'sar': {
    name: 'Saudi Arabian Riyal',
    description: 'The Saudi Arabian Riyal (SAR) is the official currency of Saudi Arabia, the world\'s largest exporter of petroleum and home to ARAMCO - the world\'s most profitable company by revenue. The riyal has been pegged to the US Dollar at 3.75 SAR per USD since 1986, one of the most durable currency pegs in the world, supported by Saudi Arabia\'s vast oil revenues and the world\'s second largest foreign exchange reserves. The Saudi Central Bank (SAMA - Saudi Arabian Monetary Authority) manages the peg. The riyal is divided into 100 halalas.',
    symbol: 'SAR'
  },
  'sek': {
    name: 'Swedish Krona',
    description: 'The Swedish Krona (SEK) is the official currency of Sweden. Despite being an EU member since 1995, Sweden held a referendum in 2003 in which voters rejected adopting the Euro, and Sweden has since maintained the krona with no current plans for Eurozone entry. The Riksbank, established in 1668, is the world\'s oldest central bank and manages monetary policy. Sweden has a highly developed, export-oriented economy known for brands like IKEA, Volvo, H&M, Ericsson, and Spotify. The krona is divided into 100 ore, though ore coins are no longer issued.',
    symbol: 'SEK'
  },
  'sgd': {
    name: 'Singapore Dollar',
    description: 'The Singapore Dollar (SGD) is the official currency of Singapore and is interchangeable at par with the Brunei Dollar (BND) by a 1967 Currency Interchangeability Agreement. The Monetary Authority of Singapore (MAS) manages monetary policy uniquely through the exchange rate - adjusting the Singapore Dollar against a basket of trading partner currencies - rather than through interest rates, because of Singapore\'s small open economy. Singapore is a global financial centre, the world\'s busiest container port, and one of the wealthiest nations by per capita income.',
    symbol: 'SGD'
  },
  'thb': {
    name: 'Thai Baht',
    description: 'The Thai Baht (THB) is the official currency of Thailand, one of Southeast Asia\'s largest and most successful economies. The Bank of Thailand manages monetary policy with a managed float regime. Thailand is the world\'s second largest exporter of rice and a major producer of rubber, electronics, automobiles, and gems. Tourism is a critical economic sector - Thailand is among the world\'s top tourist destinations annually. The baht experienced a 40% devaluation in July 1997 that triggered the Asian Financial Crisis, spreading financial contagion across the region.',
    symbol: 'THB'
  },
  'tnd': {
    name: 'Tunisian Dinar',
    description: 'The Tunisian Dinar (TND) has been the official currency of Tunisia since 1960, replacing the Tunisian franc used during the French protectorate period. The Banque Centrale de Tunisie manages monetary policy. Tunisia has one of North Africa\'s most diversified economies, with phosphate mining (one of the world\'s top producers), olive oil, tourism, and textiles as major industries. The dinar is not fully convertible and Tunisians face restrictions on foreign currency exchange. Tunisia has faced economic challenges following the 2011 Arab Spring revolution and subsequent political instability.',
    symbol: 'TND'
  },
  'try': {
    name: 'Turkish Lira',
    description: 'The Turkish Lira (TRY) is the official currency of Turkey and Turkish Northern Cyprus. Turkey redenominated in 2005, replacing the old Turkish lira at a rate of 1,000,000 to 1 to eliminate the impact of decades of high inflation. The Central Bank of the Republic of Turkey (TCMB) manages monetary policy. Turkey has experienced acute currency crises and high inflation periodically, with significant depreciations in 2018, 2021, and after the earthquake of 2023.',
    symbol: 'TRY'
  },
  'ttd': {
    name: 'Trinidad and Tobago Dollar',
    description: 'The Trinidad and Tobago Dollar (TTD) is the official currency of the Republic of Trinidad and Tobago, a twin-island Caribbean nation just off the northeast coast of Venezuela. Introduced in 1964, it replaced the British West Indies dollar. The Central Bank of Trinidad and Tobago manages monetary policy with a managed float. Trinidad and Tobago is the Caribbean\'s leading energy producer with significant natural gas and oil reserves. It is also the largest producer of methanol and ammonia in the Western Hemisphere.',
    symbol: 'TTD'
  },
  'twd': {
    name: 'New Taiwan Dollar',
    description: 'The New Taiwan Dollar (TWD) is the official currency of Taiwan (Republic of China), introduced in 1949 when the Nationalist government retreated from mainland China to Taiwan. The Central Bank of the Republic of China (Taiwan) manages monetary policy. Taiwan has one of Asia\'s most dynamic economies and is a global technology powerhouse - TSMC (Taiwan Semiconductor Manufacturing Company), the world\'s largest contract chipmaker, is headquartered in Taiwan and produces the world\'s most advanced semiconductors.',
    symbol: 'TWD'
  },
  'tzs': {
    name: 'Tanzanian Shilling',
    description: 'The Tanzanian Shilling (TZS) has been the official currency of Tanzania since 1966, replacing the East African shilling. The Bank of Tanzania manages monetary policy. Tanzania is one of Africa\'s largest and fastest growing economies, with significant revenues from tourism (safari - Serengeti, Ngorongoro Crater; Kilimanjaro; Zanzibar), gold mining, coffee, tea, cotton, and increasingly extractable natural gas reserves. The country hosts the Serengeti, one of the world\'s greatest wildlife spectacles, and is home to Mount Kilimanjaro, Africa\'s highest peak.',
    symbol: 'TZS'
  },
  'uah': {
    name: 'Ukrainian Hryvnia',
    description: 'The Ukrainian Hryvnia (UAH) has been the official currency of Ukraine since 1996, replacing the karbovanets interim currency used after Soviet dissolution in 1991. The name "hryvnia" refers to a historical silver ingot currency used in Kievan Rus. The National Bank of Ukraine manages monetary policy. Since Russia\'s full-scale invasion in February 2022, the hryvnia has operated under capital controls and a managed exchange rate to maintain economic stability during wartime. Ukraine is a major global exporter of wheat, corn, sunflower oil, and steel.',
    symbol: 'UAH'
  },
  'ugx': {
    name: 'Ugandan Shilling',
    description: 'The Ugandan Shilling (UGX) has been the official currency of Uganda since 1987 - a reissued version replacing the old shilling following monetary reform. The Bank of Uganda manages monetary policy with a floating exchange rate and inflation-targeting framework. Uganda is an East African nation with a growing economy based on coffee (one of the world\'s top producers of the robusta variety), fisheries, tourism (mountain gorillas in Bwindi Impenetrable Forest), minerals, and oil reserves discovered in the Albertine Rift.',
    symbol: 'UGX'
  },
  'usd': {
    name: 'US Dollar',
    description: 'The US Dollar (USD) is the world\'s primary reserve currency, used in approximately 88% of all foreign exchange transactions globally. Introduced in 1792 with the Coinage Act, the dollar became the cornerstone of the international monetary system under the 1944 Bretton Woods Agreement. Even after the gold standard was abandoned in 1971, the dollar maintained its dominant status - oil and most global commodities are priced in dollars, and major sovereign debt is primarily denominated in USD. The Federal Reserve System (Fed) manages US monetary policy.',
    symbol: 'USD'
  },
  'uyu': {
    name: 'Uruguayan Peso',
    description: 'The Uruguayan Peso (UYU) is the official currency of Uruguay, one of Latin America\'s most stable, prosperous, and democratic nations. The current peso was introduced in 1993, replacing the nuevo peso at a rate of 1,000 to 1 following a period of inflation. The Banco Central del Uruguay manages monetary policy with a floating exchange rate. Uruguay has a well-developed economy with high per capita income relative to regional peers, driven by agriculture (soybeans, beef, dairy, rice, wool), financial services, software exports, and tourism.',
    symbol: 'UYU'
  },
  'uzs': {
    name: 'Uzbekistani Som',
    description: 'The Uzbekistani Som (UZS) has been the official currency of Uzbekistan since 1994, replacing the Soviet ruble after independence. The Central Bank of the Republic of Uzbekistan manages monetary policy. Uzbekistan is Central Asia\'s most populous nation and has transformed significantly since its economic liberalisation reforms beginning in 2017 under President Mirziyoyev. It is one of the world\'s largest producers and exporters of gold, cotton, uranium, natural gas, and copper, and a major producer of potash.',
    symbol: 'UZS'
  },
  'vnd': {
    name: 'Vietnamese Dong',
    description: 'The Vietnamese Dong (VND) is the official currency of Vietnam, managed by the State Bank of Vietnam with a managed float exchange regime that keeps it tightly controlled against the US Dollar. Vietnam has one of the world\'s fastest-growing economies and has emerged as a major global manufacturing hub for electronics (Samsung, Intel, LG have large facilities in Vietnam), garments, and footwear. Vietnam is the world\'s second largest exporter of coffee (after Brazil) and a leading exporter of rice, shrimp, and cashew nuts.',
    symbol: 'VND'
  },
  'zar': {
    name: 'South African Rand',
    description: 'The South African Rand (ZAR) is the official currency of South Africa, taking its name from the Witwatersrand (White Waters Ridge), the major gold reef that underpins the Johannesburg metropolitan area and made South Africa the world\'s leading gold producer for much of the 20th century. Introduced in 1961 when South Africa became a republic, the rand replaced the South African pound. The South African Reserve Bank (SARB) manages monetary policy with a floating exchange rate.',
    symbol: 'ZAR'
  },
  'zmw': {
    name: 'Zambian Kwacha',
    description: 'The Zambian Kwacha (ZMW), meaning "dawn" or "freedom" in Nyanja, was redenominated in January 2013 at a rate of 1,000 old kwacha (ZMK) to 1 new kwacha (ZMW), eliminating the large denominations that had accumulated from years of inflation. The Bank of Zambia manages monetary policy. Zambia is Africa\'s second largest copper producer and copper accounts for the bulk of its export revenues, making the kwacha highly sensitive to global copper prices. Zambia became the first African nation to default on its debt in the post-pandemic era in 2020, and completed a debt restructuring process in 2023.',
    symbol: 'ZMW'
  }
};
