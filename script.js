/* ============================================================
   Flipp&Chill — Landing Page Script
   ============================================================ */

/* ── KONFIGURACJA — podmień przed wdrożeniem ─────────────── */
const LEAD_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19282604/42p4kqi/"; // np. https://services.leadconnectorhq.com/hooks/...

/* ── DOM READY ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* ─ Scroll animation (IntersectionObserver) ─────────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(function(el) { obs.observe(el); });
  } else {
    fadeEls.forEach(function(el) { el.classList.add('visible'); });
  }

  /* ─ FAQ accordion ───────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o) {
        o.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ─ KALKULATOR ───────────────────────────────────────────── */
  var slider       = document.getElementById('calc-slider');
  var valueDisplay = document.getElementById('calc-value-display');
  var resultBox    = document.getElementById('calc-result');
  var resultRange  = document.getElementById('calc-result-range');
  var calcCTA      = document.getElementById('calc-cta-btn');
  var calcTracked  = false;

  function formatPLN(n) {
    return n.toLocaleString('pl-PL') + ' zł';
  }

  function updateCalc() {
    var val = parseInt(slider.value, 10);
    valueDisplay.textContent = formatPLN(val * 1000);

    var low  = Math.round(val * 0.07) * 1000;
    var high = Math.round(val * 0.11) * 1000;

    resultRange.textContent = 'od ' + formatPLN(low) + ' do ' + formatPLN(high);
    resultBox.classList.add('visible');

    // Pixel event — tylko raz
    if (!calcTracked) {
      if (window.fbq) fbq('trackCustom', 'CalculatorUsed', { value: val * 1000 });
      calcTracked = true;
    }
  }

  if (slider) {
    slider.addEventListener('input', updateCalc);
    // Inicjalizacja przy załadowaniu
    updateCalc();
  }

  if (calcCTA) {
    calcCTA.addEventListener('click', function() {
      var formSection = document.getElementById('form-section');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ─ Sticky bottom bar – scroll do formularza ────────────── */
  var sbFormBtn = document.getElementById('sb-form-btn');
  if (sbFormBtn) {
    sbFormBtn.addEventListener('click', function() {
      var fs = document.getElementById('form-section');
      if (fs) fs.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ─ FORMULARZ ────────────────────────────────────────────── */
  var form        = document.getElementById('lead-form');
  var formCard    = document.getElementById('form-card-inner');
  var formSuccess = document.getElementById('form-success');
  var formError   = document.getElementById('form-error');
  var submitBtn   = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Walidacja
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Zbierz dane
      var data = {
        name:     document.getElementById('field-name').value.trim(),
        phone:    document.getElementById('field-phone').value.trim(),
        district: document.getElementById('field-district').value,
        rooms:    document.getElementById('field-rooms').value,
        value:    document.getElementById('field-value').value.trim(),
        source:   'landing-flippchill',
        timestamp: new Date().toISOString(),
      };

      // UI — loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Wysyłanie…';
      if (formError) formError.classList.remove('visible');

      try {
        var response = await fetch(LEAD_WEBHOOK_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(data),
        });

        if (!response.ok) throw new Error('HTTP ' + response.status);

        // Sukces
        if (window.fbq) fbq('track', 'Lead');
        if (formCard)    formCard.style.display    = 'none';
        if (formSuccess) formSuccess.classList.add('visible');

      } catch (err) {
        // Fallback — pokaż numer telefonu
        if (formError) formError.classList.add('visible');
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Wyślij zapytanie';
      }
    });
  }

}); // end DOMContentLoaded
