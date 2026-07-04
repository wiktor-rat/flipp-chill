/* ============================================================
   Flipp&Chill — Landing Page Script
   ============================================================ */

/* ── KONFIGURACJA ────────────────────────────────────────── */
const LEAD_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19282604/42p4kqi/";

/* ── TŁUMACZENIA ─────────────────────────────────────────── */
var currentLang = 'pl';

var translations = {
  pl: {
    'nav.cta': 'Bezpłatna wycena',

    'hero.badge': 'Najskuteczniejsze biuro nieruchomości w Warszawie',
    'hero.h1': 'Sprzedaj swoją nieruchomość',
    'hero.h1em': 'drożej, niż myślisz.',
    'hero.sub': 'Regularnie uzyskujemy dla naszych klientów oferty <strong style="color: var(--color-gold-light);">średnio o 50 000 zł wyższe</strong> niż osiągnęliby samodzielnie. To nie wyjątek — to nasz standard.',
    'hero.cta1': 'Sprawdź wartość mieszkania',
    'hero.cta2prefix': 'Zadzwoń: ',
    'hero.trust1': '8 lat doświadczenia',
    'hero.trust2': 'Prowizja dopiero po sprzedaży',
    'hero.trust3': 'Pierwsze oferty w 2–3 tygodnie',

    'stats.label': 'Tyle więcej uzyskujemy dla klientów<br>w stosunku do samodzielnej sprzedaży',
    'stats.mini1': 'Powyżej ceny rynkowej',
    'stats.mini2': 'Średni czas sprzedaży',
    'stats.mini3': 'Na rynku nieruchomości',
    'stats.mini4': 'Kompleksowa obsługa',

    'problem.eyebrow': 'Znasz to uczucie?',
    'problem.h2': 'Sprzedaż nieruchomości nie powinna być tak trudna.',
    'problem.p1h': 'Ogłoszenie wisi tygodniami',
    'problem.p1t': 'Mało zapytań, brak realnych zainteresowanych — cisza, która kosztuje czas i nerwy.',
    'problem.p2h': 'Presja zejścia z ceny',
    'problem.p2t': 'Im dłużej mieszkanie nie sprzedane, tym silniejsza pokusa obniżania — i tym więcej tracisz.',
    'problem.p3h': 'Nie wiesz, czy trafiłeś na realnego kupca',
    'problem.p3t': 'Zapytania są, ale mało konkretne. Trudno odróżnić poważnego kupca od „okienka”.',
    'problem.p4h': 'Biuro wrzuciło ogłoszenie i znikło',
    'problem.p4t': 'Prowizja była, ale pracy — mało. Jesteś pozostawiony sam sobie w procesie sprzedaży.',
    'problem.cta.h3': 'Nie musisz sprzedawać w takich warunkach.',
    'problem.cta.p': 'Mamy gotowych, zdecydowanych kupujących i aktywnie dowozimy oferty — zamiast czekać przy ogłoszeniu.',
    'problem.cta.btn': 'Chcę lepszej oferty',
    'problem.cta.note': 'Bezpłatna konsultacja · Bez zobowiązań',

    'calc.eyebrow': 'Kalkulator zysku',
    'calc.h2': 'Ile więcej zyskasz<br>sprzedając z nami?',
    'calc.p': 'Przesuń suwak, żeby zobaczyć ile możesz zyskać przy sprzedaży z Flipp&amp;Chill.',
    'calc.label': 'Orientacyjna wartość Twojego mieszkania',
    'calc.result.label': 'Z Flipp&amp;Chill możesz uzyskać dodatkowo',
    'calc.result.note': 'Szacunek oparty na realnych wynikach naszych transakcji (+7–11%)',
    'calc.cta.p': 'Chcesz potwierdzić tę kwotę z agentem i ustalić plan działania?',
    'calc.cta.btn': 'Sprawdź to z agentem →',

    'process.eyebrow': 'Jak to działa',
    'process.h2': 'Przejmujemy cały proces.<br>Ty robisz minimum.',
    'process.s1title': 'Bezpłatna wycena',
    'process.s1desc': 'Oceniamy realną wartość rynkową i omawiamy strategię sprzedaży.',
    'process.s2title': 'Przygotowanie i marketing',
    'process.s2desc': 'Homestaging, profesjonalne zdjęcia, kampania — Twoje mieszkanie błyszczy.',
    'process.s3title': 'Aktywne dotarcie do kupujących',
    'process.s3desc': 'Baza zdecydowanych kupujących + kontakt z każdym agentem na rynku. Pierwsze oferty po 2–3 tygodniach.',
    'process.s4title': 'Negocjacje i finalizacja',
    'process.s4desc': 'Prowadzimy kupujących, negocjujemy cenę, wspieramy kredytowo i notarialnie aż po przekazanie kluczy.',
    'process.footer': '<strong>Umowa na maksymalnie 3 miesiące</strong> (z możliwością 1 przedłużenia) — każda oferta dostaje maksimum energii i budżetu. Wynagrodzenie dopiero przy faktycznej sprzedaży — nie ponosisz ryzyka.',

    'whyus.eyebrow': 'Dlaczego Flipp&amp;Chill',
    'whyus.h2': 'Nie każde biuro dowozi wyniki.',
    'whyus.p': 'Różnica jest w tym, jak aktywnie pracujemy na Twoją sprzedaż.',
    'whyus.them.header': 'Inne biura nieruchomości',
    'whyus.them.i1': 'Wystawiają ogłoszenie na portalu i czekają — bez aktywnego generowania kupujących.',
    'whyus.them.i2': 'Brak specjalizacji w konkretnym segmencie → brak dopasowanej bazy kupujących pod Twoje mieszkanie.',
    'whyus.them.i3': 'Słaba komunikacja — nie wiesz co się dzieje, proces się rozmywa, mijają tygodnie bez efektów.',
    'whyus.us.i1': 'Aktywnie docieramy do zdecydowanych kupujących z bazy + współpracujemy z każdym agentem na rynku — Twoje mieszkanie trafia do każdego potencjalnego kupca.',
    'whyus.us.i2': 'Specjalizacja w mieszkaniach 1–3 pokojowych w Warszawie — mamy gotową bazę kupujących pod ten segment i doskonałe znamy ceny w każdej dzielnicy.',
    'whyus.us.i3': 'Pełna transparentność i stały kontakt — wiesz co dzieje się na każdym etapie. Pierwsze realne oferty już po 2–3 tygodniach współpracy.',

    'results.eyebrow': 'Realne wyniki',
    'results.h2': 'Liczby mówią same za siebie.',
    'results.p': 'Poniżej konkretne transakcje — bez upiększania, tylko fakty.',
    'results.gain': 'zysku',
    'results.c1note': 'O 7,3% więcej niż pierwotna cena',
    'results.c2note': 'O 6,25% więcej niż cena wyjściowa',
    'results.c3note': 'O 7,3% powyżej oczekiwań klienta',
    'results.c4note': '⚡ Sprzedane w 2 tygodnie — pierwszemu klientowi',
    'results.c5note': 'O 7,2% powyżej ceny ofertowej',
    'results.c6loc': '📍 Sytuacja kryzysowa, Warszawa',
    'results.c6title': 'Mieszkanie zagrożone licytacją komorniczą',
    'results.c6value': 'Wartość: 1 200 000 zł',
    'results.c6note': '⚡ Sprzedane w niecały miesiąc — uratowaliśmy sytuację klienta',

    'guarantee.eyebrow': 'Nasza obietnica',
    'guarantee.h2': 'Nikt nie sprzeda Twojej nieruchomości drożej.',
    'guarantee.p': 'Regularnie uzyskujemy dla klientów oferty <strong style="color: var(--color-gold-light);">średnio o 7–11% wyższe</strong> niż osiągnęliby samodzielnie. To nie przypadek — to efekt specjalizacji, aktywnej pracy i dostępu do każdego kupującego na rynku.',
    'guarantee.btn1': 'Chcę sprzedać drożej',
    'guarantee.btn2': 'Zadzwoń teraz',

    'form.eyebrow': 'Bezpłatna wycena',
    'form.h2': 'Twoja nieruchomość może być warta więcej, niż myślisz.',
    'form.p': 'Zostaw kontakt — oddzwonimy, omówimy Twoją sytuację i podamy realną wartość rynkową. Bez zobowiązań, bez presji.',
    'form.b1h': 'Szybki kontakt w ciągu 24h',
    'form.b1p': 'Agent skontaktuje się i omówi Twoje oczekiwania',
    'form.b2h': 'Realna wycena, nie „kosmiczne” kwoty',
    'form.b2p': 'Znamy ceny transakcyjne — nie tylko ofertowe',
    'form.b3h': 'Prowizja dopiero po sprzedaży',
    'form.b3p': 'Nie ryzykujesz niczym — płacisz dopiero gdy dostaniesz pieniądze',
    'form.b4h': 'Pierwsze oferty po 2–3 tygodniach',
    'form.b4p': 'Aktywnie dotrzemy do zdecydowanych kupujących za Ciebie',
    'form.card.h3': 'Sprawdź wartość swojego mieszkania',
    'form.card.sub': 'Wypełnij poniższy formularz — agent oddzwoni z wyceną',
    'form.name.label': 'Imię i nazwisko *',
    'form.phone.label': 'Numer telefonu *',
    'form.district.label': 'Dzielnica *',
    'form.district.default': 'Wybierz dzielnicę',
    'form.rooms.label': 'Liczba pokoi',
    'form.rooms.default': 'Wybierz',
    'form.value.label': 'Orientacyjna wartość (opcjonalnie)',
    'form.rodo': 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Samuel Sp. z o.o. (Puławska 270/73, 02-819 Warszawa) w celu odpowiedzi na zapytanie i przedstawienia oferty współpracy w zakresie pośrednictwa nieruchomości, zgodnie z <a href="https://flippchill.waw.pl/" style="text-decoration: underline; color: var(--color-dark-green);">Polityką Prywatności</a>. Zgoda jest dobrowolna i może być cofnięta w każdym czasie. *',
    'form.name.placeholder': 'Jan Kowalski',
    'form.value.placeholder': 'np. 750 000 zł',
    'form.submit': 'Wyślij — chcę bezpłatną wycenę',
    'form.privacy': 'Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.',
    'form.sending': 'Wysyłanie…',
    'form.retry': 'Wyślij zapytanie',

    'reviews.eyebrow': 'Opinie klientów',
    'reviews.h2': 'Co mówią osoby, które nam zaufały.',

    'faq.eyebrow': 'Często zadawane pytania',
    'faq.h2': 'Masz pytania? Odpowiadamy.',
    'faq.q1': 'Ile zapłacę za waszą usługę?',
    'faq.a1': 'Wynagrodzenie pobieramy wyłącznie po faktycznej sprzedaży — dopiero gdy Ty dostaniesz pieniądze. Nie ponosisz żadnego ryzyka finansowego: jeśli nie sprzedamy, nie płacisz. Prowizja jest ustalana indywidualnie podczas bezpłatnej konsultacji.',
    'faq.q2': 'Jak długo trwa sprzedaż z Flipp&amp;Chill?',
    'faq.a2': 'Pierwsze realne oferty od zdecydowanych kupujących pojawiają się już po 2–3 tygodniach od podpisania umowy. Pełna transakcja (od umowy do przekazania kluczy) zamyka się zwykle w ciągu 1–2 miesięcy. W przypadkach pilnych (<a href="#results" style="color: var(--color-gold-light); text-decoration: underline;">Jadźwingów</a>) finalizowaliśmy sprzedaż w 2 tygodnie.',
    'faq.q3': 'Czy to tylko kolejne „wrzucenie ogłoszenia na portal”?',
    'faq.a3': 'Zdecydowanie nie. Aktywnie docieramy do kupujących z naszej bazy, którzy szukają dokładnie takich mieszkań jak Twoje. Jednocześnie kontaktujemy się z każdym agentem na rynku, który ma potencjalnych kupujących pasujących do Twojego profilu. W praktyce Twoje mieszkanie trafia do każdego realnie zainteresowanego kupca w Warszawie.',
    'faq.q4': 'A co jeśli wy też nie sprzedacie? Czy będę związany umową na rok?',
    'faq.a4': 'Umowa zawierana jest na maksymalnie 3 miesiące z możliwością trzech tygodni wypowiedzenia i jednego przedłużenia. Taki horyzont motywuje nas do maksymalnego zaangażowania od pierwszego dnia – wiemy, że mamy ograniczony czas.',
    'faq.q5': 'Czy działacie tylko w Warszawie?',
    'faq.a5': 'Głównie działamy na terenie Warszawy specjalizując się w sprzedaży mieszkań i domów. Ale również aktywnie sprzedajemy nieruchomości w bliskich okolicach miasta m.in. domy czy działki inwestycyjne.',
    'faq.q6': 'Czy zarobię tyle, ile obiecujecie — mimo prowizji?',
    'faq.a6': 'Tak. Regularnie uzyskujemy ceny 7–11% wyższe niż właściciel osiągnąłby samodzielnie. W praktyce oznacza to, że nawet po odjęciu naszego wynagrodzenia zostajesz na plusie — i to często znaczącym. Na konkretnych liczbach porozmawiamy podczas bezpłatnej konsultacji.',

    'finalcta.eyebrow': 'Gotowy, żeby sprzedać drożej?',
    'finalcta.h2': 'Nie sprzedawaj poniżej wartości rynkowej.',
    'finalcta.h2em': 'Skontaktuj się z nami.',
    'finalcta.p': 'Zostaw kontakt lub zadzwoń teraz — przedstawimy Ci konkretny plan działania, realną wycenę i pokażemy ile możesz zyskać.',
    'finalcta.btn1': 'Bezpłatna wycena online',
    'finalcta.cta2prefix': 'Zadzwoń: ',
    'finalcta.tagline': 'Samuel Piwnicki · 8 lat doświadczenia · Prowizja dopiero po sprzedaży',

    'footer.p': 'Najskuteczniejsze biuro pośrednictwa nieruchomości w Warszawie. Specjalizujemy się w sprzedaży mieszkań. Regularnie uzyskujemy oferty 7–11% powyżej ceny rynkowej.',
    'footer.contact': 'Kontakt',
    'footer.company': 'Dane spółki',
    'footer.copyright': '© 2024 Samuel Sp. z o.o. · Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
    'sb.call': 'Zadzwoń',
    'sb.form': 'Wyceń mieszkanie',
  },

  en: {
    'nav.cta': 'Free Valuation',

    'hero.badge': "Warsaw’s Most Effective Real Estate Agency",
    'hero.h1': 'Sell your property',
    'hero.h1em': 'for more than you think.',
    'hero.sub': 'We regularly achieve offers for our clients averaging <strong style="color: var(--color-gold-light);">50,000 PLN higher</strong> than they would get on their own. This isn’t the exception — it’s our standard.',
    'hero.cta1': 'Check Your Property Value',
    'hero.cta2prefix': 'Call: ',
    'hero.trust1': '8 years of experience',
    'hero.trust2': 'Commission only after sale',
    'hero.trust3': 'First offers within 2–3 weeks',

    'stats.label': 'More than clients would achieve selling on their own',
    'stats.mini1': 'Above market price',
    'stats.mini2': 'Average time to sell',
    'stats.mini3': 'In real estate',
    'stats.mini4': 'Full-service support',

    'problem.eyebrow': 'DOES THIS SOUND FAMILIAR?',
    'problem.h2': "Selling property shouldn’t be this hard.",
    'problem.p1h': 'Your listing sits for weeks',
    'problem.p1t': 'Few enquiries, no serious buyers — silence that costs you time and stress.',
    'problem.p2h': 'Pressure to drop the price',
    'problem.p2t': 'The longer your property sits unsold, the stronger the temptation to reduce — and the more you lose.',
    'problem.p3h': "You can’t tell if enquiries are serious",
    'problem.p3t': "There are enquiries, but vague ones. It’s hard to tell a serious buyer from a time-waster.",
    'problem.p4h': 'The agency listed it and disappeared',
    'problem.p4t': "They charged a commission but did little. You’re left to manage the sale on your own.",
    'problem.cta.h3': "You don’t have to sell under these conditions.",
    'problem.cta.p': 'We have ready, motivated buyers and actively bring offers to you — instead of waiting by a listing.',
    'problem.cta.btn': 'I want a better offer',
    'problem.cta.note': 'Free consultation · No commitment',

    'calc.eyebrow': 'PROFIT CALCULATOR',
    'calc.h2': 'How much more could you earn<br>selling with us?',
    'calc.p': 'Move the slider to see how much more you could earn selling with Flipp&amp;Chill.',
    'calc.label': 'Estimated value of your property',
    'calc.result.label': 'With Flipp&amp;Chill you could earn an additional',
    'calc.result.note': 'Estimate based on our real transaction results (+7–11%)',
    'calc.cta.p': 'Want to confirm this figure with an agent and set out a plan?',
    'calc.cta.btn': 'Confirm with an agent →',

    'process.eyebrow': 'HOW IT WORKS',
    'process.h2': 'We handle the entire process.<br>You do the minimum.',
    'process.s1title': 'Free valuation',
    'process.s1desc': 'We assess the real market value and discuss your sales strategy.',
    'process.s2title': 'Preparation &amp; marketing',
    'process.s2desc': 'Home staging, professional photography, campaign — your property shines.',
    'process.s3title': 'Active buyer outreach',
    'process.s3desc': 'Our database of motivated buyers + contact with every agent on the market. First offers within 2–3 weeks.',
    'process.s4title': 'Negotiation &amp; completion',
    'process.s4desc': 'We guide buyers, negotiate the price, support with mortgage and notary processes through to key handover.',
    'process.footer': '<strong>Contract for a maximum of 3 months</strong> (with 1 possible extension) — every listing gets maximum energy and budget. Payment only on actual sale — you carry no risk.',

    'whyus.eyebrow': 'WHY FLIPP&amp;CHILL',
    'whyus.h2': 'Not every agency delivers results.',
    'whyus.p': 'The difference is in how actively we work on your sale.',
    'whyus.them.header': 'OTHER AGENCIES',
    'whyus.them.i1': 'They list on a portal and wait — no active buyer generation.',
    'whyus.them.i2': 'No specialisation in a specific segment → no matched buyer database for your property.',
    'whyus.them.i3': "Poor communication — you don’t know what’s happening, the process drags, weeks pass with no results.",
    'whyus.us.i1': 'We actively reach motivated buyers from our database + collaborate with every agent on the market — your property reaches every potential buyer.',
    'whyus.us.i2': 'Specialised in 1–3 room apartments in Warsaw — we have a ready buyer database for this segment and know prices in every district.',
    'whyus.us.i3': 'Full transparency and constant communication — you know what’s happening at every stage. First real offers within 2–3 weeks of working together.',

    'results.eyebrow': 'REAL RESULTS',
    'results.h2': 'The numbers speak for themselves.',
    'results.p': 'Real transactions below — no embellishment, just facts.',
    'results.gain': 'gained',
    'results.c1note': '7.3% above the initial price',
    'results.c2note': '6.25% above the asking price',
    'results.c3note': "7.3% above client’s expectations",
    'results.c4note': '⚡ Sold in 2 weeks — to the first buyer',
    'results.c5note': '7.2% above the listing price',
    'results.c6loc': '📍 CRISIS SITUATION, WARSAW',
    'results.c6title': 'Property facing mortgage repossession',
    'results.c6value': 'Value: 1,200,000 PLN',
    'results.c6note': '⚡ Sold in under a month — we saved the client’s situation',

    'guarantee.eyebrow': 'OUR PROMISE',
    'guarantee.h2': 'Nobody will sell your property for more.',
    'guarantee.p': 'We regularly achieve offers for clients averaging <strong style="color: var(--color-gold-light);">7–11% higher</strong> than they would achieve on their own. This is no accident — it’s the result of specialisation, active work, and access to every buyer on the market.',
    'guarantee.btn1': 'I want to sell for more',
    'guarantee.btn2': 'Call now',

    'form.eyebrow': 'FREE VALUATION',
    'form.h2': 'Your property may be worth more than you think.',
    'form.p': "Leave your details — we’ll call back, discuss your situation and give you a real market value. No commitment, no pressure.",
    'form.b1h': 'Quick contact within 24h',
    'form.b1p': 'An agent will contact you to discuss your expectations',
    'form.b2h': 'Real valuation, not inflated figures',
    'form.b2p': 'We know transaction prices — not just asking prices',
    'form.b3h': 'Commission only after sale',
    'form.b3p': 'You risk nothing — you pay only when you receive the money',
    'form.b4h': 'First offers within 2–3 weeks',
    'form.b4p': "We’ll actively reach motivated buyers on your behalf",
    'form.card.h3': 'Check Your Property Value',
    'form.card.sub': 'Fill in the form below — an agent will call back with a valuation',
    'form.name.label': 'Full name *',
    'form.phone.label': 'Phone number *',
    'form.district.label': 'District *',
    'form.district.default': 'Select district',
    'form.rooms.label': 'Number of rooms',
    'form.rooms.default': 'Select',
    'form.value.label': 'Estimated value (optional)',
    'form.rodo': 'I consent to the processing of my personal data by Samuel Sp. z o.o. (Puláwska 270/73, 02-819 Warsaw) for the purpose of responding to my enquiry and presenting a real estate brokerage offer, in accordance with the <a href="https://flippchill.waw.pl/" style="text-decoration: underline; color: var(--color-dark-green);">Privacy Policy</a>. Consent is voluntary and may be withdrawn at any time. *',
    'form.name.placeholder': 'John Smith',
    'form.value.placeholder': 'e.g. 750,000 PLN',
    'form.submit': 'Submit — I want a free valuation',
    'form.privacy': 'Your data is secure and will not be shared with third parties.',
    'form.sending': 'Sending…',
    'form.retry': 'Send enquiry',

    'reviews.eyebrow': 'CLIENT REVIEWS',
    'reviews.h2': 'What people who trusted us say.',

    'faq.eyebrow': 'FREQUENTLY ASKED QUESTIONS',
    'faq.h2': "Got questions? We’ve got answers.",
    'faq.q1': 'How much do you charge?',
    'faq.a1': "We charge only upon actual sale — only when you receive the money. You carry no financial risk: if we don’t sell, you don’t pay. The commission is agreed individually during a free consultation.",
    'faq.q2': 'How long does selling with Flipp&amp;Chill take?',
    'faq.a2': 'The first real offers from motivated buyers typically appear within 2–3 weeks of signing the agreement. A full transaction (from contract to key handover) usually closes within 1–2 months. In urgent cases (<a href="#results" style="color: var(--color-gold-light); text-decoration: underline;">Jadźwingów</a>) we completed the sale in 2 weeks.',
    'faq.q3': 'Is this just another “list it and forget it” service?',
    'faq.a3': "Absolutely not. We actively reach buyers from our database who are looking for exactly the type of property you have. At the same time, we contact every agent on the market who has potential buyers matching your profile. In practice, your property reaches every genuinely interested buyer in Warsaw.",
    'faq.q4': "What if you don’t sell either? Am I locked in for a year?",
    'faq.a4': 'The contract is for a maximum of 3 months, with a three-week notice period and one possible extension. This timeline motivates us to give maximum effort from day one — we know our time is limited.',
    'faq.q5': 'Do you only operate in Warsaw?',
    'faq.a5': 'We primarily operate in Warsaw, specialising in the sale of apartments and houses. We also actively sell properties in the surrounding area, including houses and investment plots.',
    'faq.q6': 'Will I actually earn what you promise — even after your commission?',
    'faq.a6': "Yes. We regularly achieve prices 7–11% higher than the owner would achieve on their own. In practice, even after deducting our fee you come out ahead — often significantly. We’ll go through the specific numbers during a free consultation.",

    'finalcta.eyebrow': 'READY TO SELL FOR MORE?',
    'finalcta.h2': "Don’t sell below market value.",
    'finalcta.h2em': 'Get in touch with us.',
    'finalcta.p': "Leave your details or call now — we’ll present a concrete action plan, a real valuation and show you how much you could gain.",
    'finalcta.btn1': 'Free online valuation',
    'finalcta.cta2prefix': 'Call: ',
    'finalcta.tagline': 'Samuel Piwnicki · 8 years of experience · Commission only after sale',

    'footer.p': "Warsaw’s most effective real estate agency. We specialise in selling apartments. We regularly achieve offers 7–11% above market price.",
    'footer.contact': 'Contact',
    'footer.company': 'Company Details',
    'footer.copyright': '© 2024 Samuel Sp. z o.o. · All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'sb.call': 'Call us',
    'sb.form': 'Value my property',
  }
};

/* ── FUNKCJA ZMIANY JĘZYKA ───────────────────────────────── */
function setLanguage(lang) {
  if (lang !== 'pl' && lang !== 'en') lang = 'pl';
  currentLang = lang;
  var t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'pl';
  localStorage.setItem('lang', lang);

  if (lang === 'en' && window.fbq) {
    fbq('trackCustom', 'LanguageSwitchEN');
  }

  if (typeof updateCalc === 'function') updateCalc();
}

/* ── DOM READY ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* ─ Scroll animation ────────────────────────────────────── */
  var fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
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
    var suffix = currentLang === 'en' ? ' PLN' : ' zł';
    return n.toLocaleString('pl-PL') + suffix;
  }

  window.updateCalc = function() {
    if (!slider) return;
    var val = parseInt(slider.value, 10);
    valueDisplay.textContent = formatPLN(val * 1000);

    var low  = Math.round(val * 0.07) * 1000;
    var high = Math.round(val * 0.11) * 1000;

    if (currentLang === 'en') {
      resultRange.textContent = 'from ' + formatPLN(low) + ' to ' + formatPLN(high);
    } else {
      resultRange.textContent = 'od ' + formatPLN(low) + ' do ' + formatPLN(high);
    }
    resultBox.classList.add('visible');

    if (!calcTracked) {
      if (window.fbq) fbq('trackCustom', 'CalculatorUsed', { value: val * 1000 });
      calcTracked = true;
    }
  };

  if (slider) {
    slider.addEventListener('input', window.updateCalc);
    window.updateCalc();
  }

  if (calcCTA) {
    calcCTA.addEventListener('click', function() {
      var formSection = document.getElementById('form-section');
      if (formSection) formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ─ Sticky bottom bar ───────────────────────────────────── */
  var sbFormBtn = document.getElementById('sb-form-btn');
  if (sbFormBtn) {
    sbFormBtn.addEventListener('click', function() {
      var fs = document.getElementById('form-section');
      if (fs) fs.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ─ Przełącznik języka ──────────────────────────────────── */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  /* ─ FORMULARZ ────────────────────────────────────────────── */
  var form        = document.getElementById('lead-form');
  var formCard    = document.getElementById('form-card-inner');
  var formSuccess = document.getElementById('form-success');
  var formError   = document.getElementById('form-error');
  var submitBtn   = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = {
        name:      document.getElementById('field-name').value.trim(),
        phone:     document.getElementById('field-phone').value.trim(),
        district:  document.getElementById('field-district').value,
        rooms:     document.getElementById('field-rooms').value,
        value:     document.getElementById('field-value').value.trim(),
        language:  currentLang === 'en' ? 'EN' : 'PL',
        source:    'landing-flippchill',
        timestamp: new Date().toISOString(),
      };

      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLang]['form.sending'] || 'Wysyłanie…';
      if (formError) formError.classList.remove('visible');

      try {
        var response = await fetch(LEAD_WEBHOOK_URL, {
          method:  'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body:    new URLSearchParams(data).toString(),
        });

        if (!response.ok) throw new Error('HTTP ' + response.status);

        if (window.fbq) fbq('track', 'Lead');
        if (formCard)    formCard.style.display    = 'none';
        if (formSuccess) formSuccess.classList.add('visible');

      } catch (err) {
        if (formError) formError.classList.add('visible');
        submitBtn.disabled    = false;
        submitBtn.textContent = translations[currentLang]['form.retry'] || 'Wyślij zapytanie';
      }
    });
  }

  /* ─ Inicjalizacja języka ────────────────────────────────── */
  var savedLang = localStorage.getItem('lang') || 'pl';
  setLanguage(savedLang);

}); // end DOMContentLoaded
