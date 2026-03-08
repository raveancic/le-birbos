import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

import heroImg from "./assets/birbos-hero.jpg";
import occitanaImg from "./assets/occitana.png";
import interniImg from "./assets/interni.jpg";
import serviziImg from "./assets/servizi.jpg";
import panoramaImg from "./assets/panorama.jpg";
import camminateImg from "./assets/camminate.jpg";
import sanMicheleImg from "./assets/san-michele.jpg";

import panorama1Img from "./assets/panorama-1.jpg";
import panorama2Img from "./assets/panorama-2.jpg";
import panorama3Img from "./assets/panorama-3.jpg";
import panorama4Img from "./assets/panorama-4.jpg";

function App() {
  const [language, setLanguage] = useState("it");

  const localeMap = {
    it: "it-IT",
    en: "en-GB",
    nl: "nl-NL",
    de: "de-DE",
  };

  const texts = {
    it: {
      navHome: "La casa",
      navExperiences: "Esperienze",
      navGallery: "Gallery",
      navAvailability: "Disponibilità",
      navLocation: "Dove siamo",
      navContacts: "Contatti",
      floatingBooking: "Prenota",

      heroEyebrow: "Casa di montagna in Valle Maira",
      heroTitle: "Le Birbos",
      heroText:
        "Una vecchia casa di montagna ristrutturata, immersa nella quiete di Borgata Chiesa a San Michele di Prazzo, ai piedi del Monte Chersogno.",
      heroBtnBook: "Prenota ora",
      heroBtnGallery: "Guarda la gallery",
      heroBtnAvailability: "Vedi disponibilità",

      houseLabel: "La casa",
      houseTitle: "Autenticità, natura e atmosfera alpina",
      houseP1:
        "Le Birbos è una vecchia casa di montagna ristrutturata con cura, situata nella piccola Borgata Chiesa, a San Michele di Prazzo, nel cuore della Valle Maira.",
      houseP2:
        "È il luogo ideale per chi desidera rallentare, respirare aria pulita e vivere la montagna in un ambiente semplice, accogliente e autentico.",
      houseP3:
        "La casa dispone di porticato e giardino ed è perfetta per un soggiorno rilassante tra paesaggi alpini, silenzio e natura.",

      infoTitle: "Informazioni principali",
      info1: "4 posti letto",
      info2: "1 letto matrimoniale",
      info3: "2 letti singoli",
      info4: "Porticato",
      info5: "Giardino",
      info6: "Ai piedi del Monte Chersogno",
      info7: "Ideale per escursioni e relax",

      expLabel: "Esperienze",
      expTitle: "Vivi la Valle Maira",
      exp1Title: "Trekking e escursioni",
      exp1Text:
        "Le Birbos è un ottimo punto di partenza per numerose escursioni tra sentieri alpini, boschi e panorami spettacolari della Valle Maira.",
      exp2Title: "Natura e relax",
      exp2Text:
        "Un soggiorno perfetto per chi cerca tranquillità, silenzio e contatto autentico con la montagna, lontano dal ritmo della città.",
      exp3Title: "Borghi e tradizione",
      exp3Text:
        "Scopri le borgate della valle, l’atmosfera alpina, la cultura del territorio e i sapori tipici di una montagna vera.",

      galleryLabel: "Gallery",
      galleryTitle: "Scopri Le Birbos",
      gallery1: "Gli interni",
      gallery2: "I servizi",
      gallery3: "La casa e il panorama",
      gallery4: "Camminate e natura",

      availabilityLabel: "Disponibilità",
      availabilityTitle: "Seleziona il tuo soggiorno",
      availabilityText:
        "Scegli il periodo che ti interessa. I giorni occupati sono evidenziati in rosso.",
      available: "Disponibile",
      occupied: "Occupato",
      summaryTitle: "Riepilogo soggiorno",
      checkIn: "Check-in",
      checkOut: "Check-out",
      nights: "Notti",
      selectDate: "Seleziona una data",
      warning:
        "Attenzione: l’intervallo selezionato contiene una o più date segnate come occupate.",
      requestBooking: "Richiedi prenotazione",
      clearSelection: "Azzera selezione",

      locationLabel: "Dove siamo",
      locationTitle: "San Michele di Prazzo, Valle Maira",
      locationText1:
        "Le Birbos si trova in Borgata Chiesa, a San Michele di Prazzo, nel cuore della splendida Valle Maira.",
      locationText2:
        "Ai piedi del Monte Chersogno, è il punto ideale per chi ama escursioni, natura e la tranquillità delle borgate alpine.",
      openMaps: "Apri su Google Maps",
      churchCaption: "Parrocchiale di San Michele - Borgata Chiesa",

      contactsLabel: "Contatti",
      contactsTitle: "Prenota il tuo soggiorno",
      contactsText:
        "Per disponibilità, dettagli sul soggiorno o prenotazioni, contatta direttamente la struttura.",
      emailBooking: "Prenota via email",
      callNow: "Chiama ora",
      whatsapp: "WhatsApp",

      footer: "© 2026 Le Birbos — Casa di montagna in Valle Maira",
      emailSubject: "Richiesta prenotazione Le Birbos",
      emailIntro:
        "vorrei richiedere informazioni per un soggiorno a Le Birbos.",
      guests: "Numero di ospiti",
      phone: "Telefono",
      message: "Messaggio",
      greeting: "Buongiorno,",
      name: "Nome",
      panoramaAlt: "Panorama",
      churchAlt: "Parrocchiale di San Michele",
      occitanaAlt: "Occitania",
    },

    en: {
      navHome: "The house",
      navExperiences: "Experiences",
      navGallery: "Gallery",
      navAvailability: "Availability",
      navLocation: "Location",
      navContacts: "Contacts",
      floatingBooking: "Book",

      heroEyebrow: "Mountain house in Valle Maira",
      heroTitle: "Le Birbos",
      heroText:
        "A restored old mountain house, immersed in the quiet of Borgata Chiesa in San Michele di Prazzo, at the foot of Mount Chersogno.",
      heroBtnBook: "Book now",
      heroBtnGallery: "View gallery",
      heroBtnAvailability: "Check availability",

      houseLabel: "The house",
      houseTitle: "Authenticity, nature and alpine atmosphere",
      houseP1:
        "Le Birbos is a carefully restored old mountain house located in the small hamlet of Borgata Chiesa, in San Michele di Prazzo, in the heart of Valle Maira.",
      houseP2:
        "It is the ideal place for those who want to slow down, breathe fresh air and experience the mountains in a simple, welcoming and authentic setting.",
      houseP3:
        "The house has a covered porch and a garden and is perfect for a relaxing stay surrounded by alpine scenery, silence and nature.",

      infoTitle: "Key information",
      info1: "4 beds",
      info2: "1 double bed",
      info3: "2 single beds",
      info4: "Covered porch",
      info5: "Garden",
      info6: "At the foot of Mount Chersogno",
      info7: "Ideal for hiking and relaxation",

      expLabel: "Experiences",
      expTitle: "Experience Valle Maira",
      exp1Title: "Hiking and walking",
      exp1Text:
        "Le Birbos is an excellent starting point for many hikes through alpine trails, woods and spectacular views of Valle Maira.",
      exp2Title: "Nature and relaxation",
      exp2Text:
        "A perfect stay for those looking for peace, silence and an authentic connection with the mountains, far from the rhythm of the city.",
      exp3Title: "Hamlets and tradition",
      exp3Text:
        "Discover the valley’s hamlets, the alpine atmosphere, the local culture and the flavors of a truly authentic mountain area.",

      galleryLabel: "Gallery",
      galleryTitle: "Discover Le Birbos",
      gallery1: "Interiors",
      gallery2: "Amenities",
      gallery3: "House and panorama",
      gallery4: "Walks and nature",

      availabilityLabel: "Availability",
      availabilityTitle: "Select your stay",
      availabilityText:
        "Choose the period you are interested in. Occupied days are highlighted in red.",
      available: "Available",
      occupied: "Occupied",
      summaryTitle: "Stay summary",
      checkIn: "Check-in",
      checkOut: "Check-out",
      nights: "Nights",
      selectDate: "Select a date",
      warning:
        "Please note: the selected range contains one or more dates marked as occupied.",
      requestBooking: "Request booking",
      clearSelection: "Clear selection",

      locationLabel: "Location",
      locationTitle: "San Michele di Prazzo, Valle Maira",
      locationText1:
        "Le Birbos is located in Borgata Chiesa, in San Michele di Prazzo, in the heart of the beautiful Valle Maira.",
      locationText2:
        "At the foot of Mount Chersogno, it is the ideal place for those who love hiking, nature and the peaceful atmosphere of alpine hamlets.",
      openMaps: "Open in Google Maps",
      churchCaption: "Parish Church of San Michele - Borgata Chiesa",

      contactsLabel: "Contacts",
      contactsTitle: "Book your stay",
      contactsText:
        "For availability, stay details or bookings, please contact the property directly.",
      emailBooking: "Book by email",
      callNow: "Call now",
      whatsapp: "WhatsApp",

      footer: "© 2026 Le Birbos — Mountain house in Valle Maira",
      emailSubject: "Booking request Le Birbos",
      emailIntro: "I would like to request information for a stay at Le Birbos.",
      guests: "Number of guests",
      phone: "Phone",
      message: "Message",
      greeting: "Hello,",
      name: "Name",
      panoramaAlt: "Panorama",
      churchAlt: "Parish Church of San Michele",
      occitanaAlt: "Occitania",
    },

    nl: {
      navHome: "Het huis",
      navExperiences: "Belevenissen",
      navGallery: "Galerij",
      navAvailability: "Beschikbaarheid",
      navLocation: "Ligging",
      navContacts: "Contact",
      floatingBooking: "Boeken",

      heroEyebrow: "Berghuis in Valle Maira",
      heroTitle: "Le Birbos",
      heroText:
        "Een gerenoveerd oud berghuis, gelegen in de rust van Borgata Chiesa in San Michele di Prazzo, aan de voet van de Monte Chersogno.",
      heroBtnBook: "Boek nu",
      heroBtnGallery: "Bekijk galerij",
      heroBtnAvailability: "Bekijk beschikbaarheid",

      houseLabel: "Het huis",
      houseTitle: "Authenticiteit, natuur en alpine sfeer",
      houseP1:
        "Le Birbos is een zorgvuldig gerenoveerd oud berghuis in het kleine gehucht Borgata Chiesa, in San Michele di Prazzo, in het hart van Valle Maira.",
      houseP2:
        "Het is de ideale plek voor wie wil vertragen, frisse lucht wil inademen en de bergen wil beleven in een eenvoudige, gastvrije en authentieke omgeving.",
      houseP3:
        "Het huis heeft een overdekte veranda en een tuin en is perfect voor een ontspannen verblijf tussen alpiene landschappen, stilte en natuur.",

      infoTitle: "Belangrijke informatie",
      info1: "4 slaapplaatsen",
      info2: "1 tweepersoonsbed",
      info3: "2 eenpersoonsbedden",
      info4: "Overdekte veranda",
      info5: "Tuin",
      info6: "Aan de voet van Monte Chersogno",
      info7: "Ideaal voor wandelen en ontspanning",

      expLabel: "Belevenissen",
      expTitle: "Beleef Valle Maira",
      exp1Title: "Wandelen en hiken",
      exp1Text:
        "Le Birbos is een uitstekend vertrekpunt voor vele wandelingen over alpenpaden, door bossen en langs prachtige uitzichten in Valle Maira.",
      exp2Title: "Natuur en ontspanning",
      exp2Text:
        "Een perfect verblijf voor wie rust, stilte en een authentiek contact met de bergen zoekt, ver weg van het stadsritme.",
      exp3Title: "Dorpen en traditie",
      exp3Text:
        "Ontdek de bergdorpen van de vallei, de alpine sfeer, de lokale cultuur en de smaken van een echte bergstreek.",

      galleryLabel: "Galerij",
      galleryTitle: "Ontdek Le Birbos",
      gallery1: "Interieur",
      gallery2: "Voorzieningen",
      gallery3: "Huis en panorama",
      gallery4: "Wandelingen en natuur",

      availabilityLabel: "Beschikbaarheid",
      availabilityTitle: "Kies je verblijf",
      availabilityText:
        "Kies de periode waarin je geïnteresseerd bent. Bezette dagen zijn rood gemarkeerd.",
      available: "Beschikbaar",
      occupied: "Bezet",
      summaryTitle: "Verblijfoverzicht",
      checkIn: "Aankomst",
      checkOut: "Vertrek",
      nights: "Nachten",
      selectDate: "Selecteer een datum",
      warning:
        "Let op: de gekozen periode bevat een of meer datums die als bezet zijn gemarkeerd.",
      requestBooking: "Boekingsaanvraag",
      clearSelection: "Selectie wissen",

      locationLabel: "Ligging",
      locationTitle: "San Michele di Prazzo, Valle Maira",
      locationText1:
        "Le Birbos ligt in Borgata Chiesa, in San Michele di Prazzo, in het hart van het prachtige Valle Maira.",
      locationText2:
        "Aan de voet van Monte Chersogno is het de ideale plek voor liefhebbers van wandelen, natuur en de rust van alpine gehuchten.",
      openMaps: "Open in Google Maps",
      churchCaption: "Parochiekerk van San Michele - Borgata Chiesa",

      contactsLabel: "Contact",
      contactsTitle: "Boek je verblijf",
      contactsText:
        "Voor beschikbaarheid, verblijfsinformatie of boekingen kun je rechtstreeks contact opnemen met de accommodatie.",
      emailBooking: "Boek via e-mail",
      callNow: "Bel nu",
      whatsapp: "WhatsApp",

      footer: "© 2026 Le Birbos — Berghuis in Valle Maira",
      emailSubject: "Boekingsaanvraag Le Birbos",
      emailIntro:
        "Ik wil graag informatie aanvragen voor een verblijf in Le Birbos.",
      guests: "Aantal gasten",
      phone: "Telefoon",
      message: "Bericht",
      greeting: "Goedendag,",
      name: "Naam",
      panoramaAlt: "Panorama",
      churchAlt: "Parochiekerk van San Michele",
      occitanaAlt: "Occitanië",
    },

    de: {
      navHome: "Das Haus",
      navExperiences: "Erlebnisse",
      navGallery: "Galerie",
      navAvailability: "Verfügbarkeit",
      navLocation: "Lage",
      navContacts: "Kontakt",
      floatingBooking: "Buchen",

      heroEyebrow: "Berghaus im Valle Maira",
      heroTitle: "Le Birbos",
      heroText:
        "Ein renoviertes altes Berghaus, eingebettet in die Ruhe von Borgata Chiesa in San Michele di Prazzo, am Fuße des Monte Chersogno.",
      heroBtnBook: "Jetzt buchen",
      heroBtnGallery: "Galerie ansehen",
      heroBtnAvailability: "Verfügbarkeit prüfen",

      houseLabel: "Das Haus",
      houseTitle: "Authentizität, Natur und alpine Atmosphäre",
      houseP1:
        "Le Birbos ist ein sorgfältig renoviertes altes Berghaus im kleinen Weiler Borgata Chiesa in San Michele di Prazzo, im Herzen des Valle Maira.",
      houseP2:
        "Es ist der ideale Ort für alle, die entschleunigen, frische Luft atmen und die Berge in einer einfachen, einladenden und authentischen Umgebung erleben möchten.",
      houseP3:
        "Das Haus verfügt über einen überdachten Vorplatz und einen Garten und ist perfekt für einen erholsamen Aufenthalt zwischen alpinen Landschaften, Stille und Natur.",

      infoTitle: "Wichtige Informationen",
      info1: "4 Schlafplätze",
      info2: "1 Doppelbett",
      info3: "2 Einzelbetten",
      info4: "Überdachter Vorplatz",
      info5: "Garten",
      info6: "Am Fuße des Monte Chersogno",
      info7: "Ideal zum Wandern und Entspannen",

      expLabel: "Erlebnisse",
      expTitle: "Erlebe das Valle Maira",
      exp1Title: "Wandern und Touren",
      exp1Text:
        "Le Birbos ist ein hervorragender Ausgangspunkt für zahlreiche Wanderungen auf Alpenwegen, durch Wälder und zu spektakulären Ausblicken im Valle Maira.",
      exp2Title: "Natur und Entspannung",
      exp2Text:
        "Ein perfekter Aufenthalt für alle, die Ruhe, Stille und einen authentischen Kontakt mit den Bergen suchen, fern vom Rhythmus der Stadt.",
      exp3Title: "Weiler und Tradition",
      exp3Text:
        "Entdecke die Dörfer des Tals, die alpine Atmosphäre, die lokale Kultur und die Geschmäcker einer echten Bergregion.",

      galleryLabel: "Galerie",
      galleryTitle: "Entdecke Le Birbos",
      gallery1: "Innenräume",
      gallery2: "Ausstattung",
      gallery3: "Haus und Panorama",
      gallery4: "Wanderungen und Natur",

      availabilityLabel: "Verfügbarkeit",
      availabilityTitle: "Wähle deinen Aufenthalt",
      availabilityText:
        "Wähle den Zeitraum, der dich interessiert. Belegte Tage sind rot markiert.",
      available: "Verfügbar",
      occupied: "Belegt",
      summaryTitle: "Aufenthaltsübersicht",
      checkIn: "Anreise",
      checkOut: "Abreise",
      nights: "Nächte",
      selectDate: "Datum auswählen",
      warning:
        "Achtung: Der ausgewählte Zeitraum enthält ein oder mehrere als belegt markierte Daten.",
      requestBooking: "Buchungsanfrage",
      clearSelection: "Auswahl löschen",

      locationLabel: "Lage",
      locationTitle: "San Michele di Prazzo, Valle Maira",
      locationText1:
        "Le Birbos befindet sich in Borgata Chiesa, in San Michele di Prazzo, im Herzen des wunderschönen Valle Maira.",
      locationText2:
        "Am Fuße des Monte Chersogno ist es der ideale Ort für alle, die Wanderungen, Natur und die Ruhe alpiner Weiler lieben.",
      openMaps: "In Google Maps öffnen",
      churchCaption: "Pfarrkirche San Michele - Borgata Chiesa",

      contactsLabel: "Kontakt",
      contactsTitle: "Buche deinen Aufenthalt",
      contactsText:
        "Für Verfügbarkeit, Aufenthaltsdetails oder Buchungen kontaktiere die Unterkunft bitte direkt.",
      emailBooking: "Per E-Mail buchen",
      callNow: "Jetzt anrufen",
      whatsapp: "WhatsApp",

      footer: "© 2026 Le Birbos — Berghaus im Valle Maira",
      emailSubject: "Buchungsanfrage Le Birbos",
      emailIntro:
        "Ich möchte Informationen für einen Aufenthalt in Le Birbos anfragen.",
      guests: "Anzahl der Gäste",
      phone: "Telefon",
      message: "Nachricht",
      greeting: "Guten Tag,",
      name: "Name",
      panoramaAlt: "Panorama",
      churchAlt: "Pfarrkirche San Michele",
      occitanaAlt: "Okzitanien",
    },
  };

  const t = texts[language];

  const panoramaGallery = [
    { src: panorama1Img, alt: `${t.panoramaAlt} 1` },
    { src: panorama2Img, alt: `${t.panoramaAlt} 2` },
    { src: panorama3Img, alt: `${t.panoramaAlt} 3` },
    { src: panorama4Img, alt: `${t.panoramaAlt} 4` },
  ];

  const occupiedDates = [
    "2026-01-03",
    "2026-01-04",
    "2026-01-05",
    "2026-01-18",
    "2026-01-19",
    "2026-02-14",
    "2026-02-15",
    "2026-03-01",
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRange, setSelectedRange] = useState(null);

  const galleryImages = [
    {
      src: interniImg,
      alt: t.gallery1,
      label: t.gallery1,
      gallery: [{ src: interniImg, alt: t.gallery1 }],
    },
    {
      src: serviziImg,
      alt: t.gallery2,
      label: t.gallery2,
      gallery: [{ src: serviziImg, alt: t.gallery2 }],
    },
    {
      src: panoramaImg,
      alt: t.gallery3,
      label: t.gallery3,
      gallery: panoramaGallery,
    },
    {
      src: camminateImg,
      alt: t.gallery4,
      label: t.gallery4,
      gallery: [{ src: camminateImg, alt: t.gallery4 }],
    },
  ];

  const openGallery = (images, index = 0) => {
    setCurrentGallery(images);
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentGallery([]);
    setCurrentImageIndex(0);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDateLocal = (date) => {
    return new Intl.DateTimeFormat(localeMap[language], {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const isOccupied = (date) => occupiedDates.includes(formatDate(date));

  const nights = useMemo(() => {
    if (!Array.isArray(selectedRange) || selectedRange.length < 2) return 0;
    const [start, end] = selectedRange;
    if (!start || !end) return 0;
    const ms = end.getTime() - start.getTime();
    return Math.round(ms / (1000 * 60 * 60 * 24));
  }, [selectedRange]);

  const selectedStart = Array.isArray(selectedRange) ? selectedRange[0] : null;
  const selectedEnd = Array.isArray(selectedRange) ? selectedRange[1] : null;

  const hasOccupiedDatesInRange = useMemo(() => {
    if (!selectedStart || !selectedEnd) return false;

    const current = new Date(selectedStart);
    current.setHours(0, 0, 0, 0);

    const end = new Date(selectedEnd);
    end.setHours(0, 0, 0, 0);

    while (current <= end) {
      if (isOccupied(current)) return true;
      current.setDate(current.getDate() + 1);
    }

    return false;
  }, [selectedStart, selectedEnd]);

  const bookingEmailHref = useMemo(() => {
    const subject = encodeURIComponent(t.emailSubject);

    const bodyLines = [
      t.greeting,
      "",
      t.emailIntro,
      "",
      selectedStart
        ? `${t.checkIn}: ${formatDateLocal(selectedStart)}`
        : `${t.checkIn}:`,
      selectedEnd
        ? `${t.checkOut}: ${formatDateLocal(selectedEnd)}`
        : `${t.checkOut}:`,
      nights > 0 ? `${t.nights}: ${nights}` : `${t.nights}:`,
      "",
      `${t.name}:`,
      `${t.guests}:`,
      `${t.phone}:`,
      `${t.message}:`,
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:info@lebirbos.it?subject=${subject}&body=${body}`;
  }, [selectedStart, selectedEnd, nights, t, language]);

  return (
    <div className="site">
      <a className="floating-booking" href="#contatti">
        {t.floatingBooking}
      </a>

      <header
        className="hero"
        style={{
          background: `linear-gradient(rgba(22, 18, 14, 0.35), rgba(22, 18, 14, 0.5)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <nav className="navbar">
          <div className="logo">
            <img src={occitanaImg} alt={t.occitanaAlt} />
            <div className="logo-text">
              <span className="logo-title">Le Birbos</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#casa">{t.navHome}</a>
            <a href="#esperienze">{t.navExperiences}</a>
            <a href="#gallery">{t.navGallery}</a>
            <a href="#disponibilita">{t.navAvailability}</a>
            <a href="#dove-siamo">{t.navLocation}</a>
            <a href="#contatti">{t.navContacts}</a>
          </div>

          <div className="language-switcher">
            <button
              type="button"
              className={language === "it" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLanguage("it")}
            >
              IT
            </button>
            <button
              type="button"
              className={language === "en" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={language === "nl" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLanguage("nl")}
            >
              NL
            </button>
            <button
              type="button"
              className={language === "de" ? "lang-btn active" : "lang-btn"}
              onClick={() => setLanguage("de")}
            >
              DE
            </button>
          </div>
        </nav>

        <div className="hero-overlay">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-buttons">
            <a href="#contatti" className="btn btn-primary">
              {t.heroBtnBook}
            </a>
            <a href="#gallery" className="btn btn-secondary">
              {t.heroBtnGallery}
            </a>
            <a href="#disponibilita" className="btn btn-secondary">
              {t.heroBtnAvailability}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="casa" className="section about">
          <div className="container two-columns">
            <div>
              <p className="section-label">{t.houseLabel}</p>
              <h2>{t.houseTitle}</h2>
              <p>{t.houseP1}</p>
              <p>{t.houseP2}</p>
              <p>{t.houseP3}</p>
            </div>

            <div className="card info-card">
              <h3>{t.infoTitle}</h3>
              <ul>
                <li>{t.info1}</li>
                <li>{t.info2}</li>
                <li>{t.info3}</li>
                <li>{t.info4}</li>
                <li>{t.info5}</li>
                <li>{t.info6}</li>
                <li>{t.info7}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="esperienze" className="section experiences">
          <div className="container">
            <p className="section-label center">{t.expLabel}</p>
            <h2 className="center">{t.expTitle}</h2>

            <div className="grid cards-3">
              <article className="card">
                <h3>{t.exp1Title}</h3>
                <p>{t.exp1Text}</p>
              </article>

              <article className="card">
                <h3>{t.exp2Title}</h3>
                <p>{t.exp2Text}</p>
              </article>

              <article className="card">
                <h3>{t.exp3Title}</h3>
                <p>{t.exp3Text}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <p className="section-label center">{t.galleryLabel}</p>
            <h2 className="center">{t.galleryTitle}</h2>

            <div className="grid gallery-grid">
              {galleryImages.map((image) => (
                <button
                  key={image.label}
                  type="button"
                  className="photo-card photo-card-button"
                  onClick={() => openGallery(image.gallery, 0)}
                >
                  <img src={image.src} alt={image.alt} />
                  <p>{image.label}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="disponibilita" className="section availability">
          <div className="container two-columns availability-layout">
            <div>
              <p className="section-label">{t.availabilityLabel}</p>
              <h2>{t.availabilityTitle}</h2>
              <p>{t.availabilityText}</p>

              <div className="availability-legend">
                <div className="legend-item">
                  <span className="legend-dot available"></span>
                  <span>{t.available}</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot occupied"></span>
                  <span>{t.occupied}</span>
                </div>
              </div>

              <div className="availability-summary card">
                <h3>{t.summaryTitle}</h3>

                <p>
                  <strong>{t.checkIn}:</strong>{" "}
                  {selectedStart ? formatDateLocal(selectedStart) : t.selectDate}
                </p>

                <p>
                  <strong>{t.checkOut}:</strong>{" "}
                  {selectedEnd ? formatDateLocal(selectedEnd) : t.selectDate}
                </p>

                <p>
                  <strong>{t.nights}:</strong> {nights > 0 ? nights : "-"}
                </p>

                {hasOccupiedDatesInRange && (
                  <p className="warning-text">{t.warning}</p>
                )}

                <div className="availability-buttons">
                  <a className="btn btn-primary" href={bookingEmailHref}>
                    {t.requestBooking}
                  </a>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setSelectedRange(null)}
                  >
                    {t.clearSelection}
                  </button>
                </div>
              </div>
            </div>

            <div className="calendar-card">
              <Calendar
                locale={localeMap[language]}
                selectRange
                value={selectedRange}
                onChange={setSelectedRange}
                minDate={new Date()}
                tileClassName={({ date, view }) => {
                  if (view === "month" && isOccupied(date)) return "occupied-date";
                  if (view === "month") return "available-date";
                  return null;
                }}
              />
            </div>
          </div>
        </section>

        <section id="dove-siamo" className="section location">
          <div className="container two-columns">
            <div>
              <p className="section-label">{t.locationLabel}</p>
              <h2>{t.locationTitle}</h2>

              <p>{t.locationText1}</p>
              <p>{t.locationText2}</p>

              <div className="location-actions">
                <a
                  className="btn btn-primary"
                  href="https://www.google.com/maps/search/?api=1&query=Borgata+Chiesa+San+Michele+di+Prazzo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.openMaps}
                </a>
              </div>
            </div>

            <div className="location-right">
              <a
                className="location-card"
                href="https://www.vallemaira.org/attrazioni/parrocchiale-di-san-michele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sanMicheleImg} alt={t.churchAlt} />
                <p>{t.churchCaption}</p>
              </a>

              <div className="map-frame">
                <iframe
                  title="Mappa Borgata Chiesa San Michele di Prazzo"
                  src="https://www.google.com/maps?q=Borgata%20Chiesa%20San%20Michele%20di%20Prazzo&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="contatti" className="section contact">
          <div className="container contact-box">
            <p className="section-label center">{t.contactsLabel}</p>
            <h2 className="center">{t.contactsTitle}</h2>
            <p className="center contact-text">{t.contactsText}</p>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={`mailto:info@lebirbos.it?subject=${encodeURIComponent(
                  t.emailSubject
                )}`}
              >
                {t.emailBooking}
              </a>
              <a className="btn btn-secondary" href="tel:+390000000000">
                {t.callNow}
              </a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/390000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>

      {isGalleryOpen && currentGallery.length > 0 && (
        <div className="lightbox" onClick={closeGallery}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="lightbox-close" onClick={closeGallery}>
              ×
            </button>

            {currentGallery.length > 1 && (
              <button
                type="button"
                className="lightbox-arrow left"
                onClick={showPrevImage}
              >
                ‹
              </button>
            )}

            <img
              className="lightbox-image"
              src={currentGallery[currentImageIndex].src}
              alt={currentGallery[currentImageIndex].alt}
            />

            {currentGallery.length > 1 && (
              <button
                type="button"
                className="lightbox-arrow right"
                onClick={showNextImage}
              >
                ›
              </button>
            )}

            <p className="lightbox-counter">
              {currentImageIndex + 1} / {currentGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;