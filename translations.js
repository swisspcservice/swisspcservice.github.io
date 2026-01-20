// Sistema de traducción multiidioma - TechFix Swiss
// DE (alemán por defecto) / FR / EN / ES

const translations = {
    de: {
        // Logo & Nav
        logo: "TechFix Swiss",
        nav_home: "Start",
        nav_services: "Services",
        nav_garantie: "Garantie",
        nav_contact: "Kontakt",
        
        // Hero
        hero_badge: "Verfügbar heute in Zürich, Basel & Genf",
        hero_title_1: "PC kaputt?",
        hero_title_2: "Wir reparieren's noch heute.",
        hero_subtitle: "Express-Reparatur in 24h oder gratis. Kostenlose Diagnose, faire Preise ab CHF 69, 90 Tage Garantie auf alles. Kein Kleingedrucktes. Ehrlich.",
        hero_btn_primary: "Jetzt Diagnose buchen",
        hero_btn_secondary: "Services ansehen",
        
        // Stats
        stat_express: "Express-Service",
        stat_garantie: "Tage Garantie",
        stat_kunden: "Zufriedene Kunden",
        
        // Problems
        problem_1: "PC startet nicht mehr",
        solution_1: "Diagnose in 1h",
        problem_2: "Extrem langsam",
        solution_2: "SSD Upgrade",
        problem_3: "Virus / Malware",
        solution_3: "Komplett-Reinigung",
        problem_4: "Daten verloren",
        solution_4: "Rettung möglich",
        
        // Services
        services_title: "Was wir reparieren",
        services_subtitle: "Diagnose immer kostenlos. Reparieren alles von PCs bis Gaming-Konsolen.",
        
        service_1_title: "PCs & Laptops",
        service_1_desc: "Windows, Mac, Linux. Alle Marken: Dell, HP, Lenovo, Asus, Acer, MSI. Hardware oder Software - wir reparieren alles.",
        service_1_feat_1: "✓ Desktop PCs",
        service_1_feat_2: "✓ Notebooks & Laptops",
        service_1_feat_3: "✓ MacBooks & iMacs",
        service_1_feat_4: "✓ Gaming PCs",
        
        service_2_title: "Tablets & Smartphones",
        service_2_desc: "iPad, Samsung Galaxy Tab, Surface. Bildschirm kaputt? Akku leer? Wasser drin? Wir reparieren es schnell und günstig.",
        service_2_feat_1: "✓ iPads & Tablets",
        service_2_feat_2: "✓ Smartphones (iPhone, Samsung)",
        service_2_feat_3: "✓ Surface Tablets",
        service_2_feat_4: "✓ E-Reader (Kindle, etc.)",
        
        service_3_title: "Gaming Konsolen",
        service_3_desc: "PlayStation 5/4, Xbox Series X/S, Nintendo Switch. Laufwerk defekt? Überhitzt? Controller kaputt? Wir sind Gaming-Spezialisten.",
        service_3_feat_1: "✓ PlayStation 5 / PS4",
        service_3_feat_2: "✓ Xbox Series X/S / One",
        service_3_feat_3: "✓ Nintendo Switch",
        service_3_feat_4: "✓ Steam Deck / Handhelds",
        
        service_4_title: "Datenrettung & Upgrade",
        service_4_desc: "Festplatte tot? Daten gelöscht? Virus? Langsamer PC? Wir retten Daten und machen alte Geräte wieder schnell.",
        service_4_feat_1: "✓ Datenrettung HDD/SSD",
        service_4_feat_2: "✓ Virus & Malware Entfernung",
        service_4_feat_3: "✓ SSD Upgrade & RAM",
        service_4_feat_4: "✓ Windows Neuinstallation",
        
        service_note: "Diagnose 100% gratis. Falls Sie die Reparatur nicht durchführen möchten, berechnen wir nur die Transportkosten.",
        
        featured_badge: "Beliebt",
        btn_anfragen: "Kostenlose Diagnose",
        
        // Garantie
        garantie_title: "Unsere Versprechen",
        garantie_1_title: "24h Express oder Gratis",
        garantie_1_desc: "Wenn wir länger als 24h brauchen, zahlen Sie nichts. Versprochen.",
        garantie_2_title: "90 Tage Garantie",
        garantie_2_desc: "Alle Reparaturen mit 3 Monaten Garantie. Kommt's zurück, fixen wir's gratis.",
        garantie_3_title: "Service vor Ort",
        garantie_3_desc: "Zürich, Basel, Genf. Wir kommen zu Ihnen nach Hause oder ins Büro.",
        garantie_4_title: "Fixpreis-Garantie",
        garantie_4_desc: "Der zuerst genannte Preis gilt. Keine Überraschungen auf der Rechnung.",
        garantie_5_title: "Datenschutz 100%",
        garantie_5_desc: "Ihre Daten bleiben privat. Wir schauen nur, was für die Reparatur nötig ist.",
        garantie_6_title: "Gratis Recycling",
        garantie_6_desc: "Alter PC zum Entsorgen? Bringen Sie ihn mit und kriegen 10% Rabatt.",
        
        // Contact
        contact_title: "Reparatur anfragen",
        contact_text: "Füllen Sie das Formular aus oder scannen Sie den QR-Code für WhatsApp. Wir melden uns innerhalb von 2 Stunden.",
        contact_email_label: "Email",
        contact_location_label: "Standorte",
        contact_locations: "Zürich, Basel, Genf, Bern",
        qr_title: "WhatsApp scannen",
        qr_subtitle: "Direkt chatten für schnelle Antwort",
        
        // Form
        form_name: "Name *",
        form_email: "Email *",
        form_phone: "Telefon *",
        form_device: "Gerät *",
        form_device_select: "Wählen Sie...",
        form_device_laptop: "Laptop",
        form_device_desktop: "Desktop PC",
        form_device_mac: "Mac / iMac",
        form_device_tablet: "Tablet",
        form_device_gaming: "Gaming Konsole",
        form_device_smartphone: "Smartphone",
        form_device_other: "Anderes",
        form_problem: "Problem beschreiben *",
        form_submit: "Diagnose anfragen",
        form_sending: "Wird gesendet...",
        form_success: "Danke! Wir melden uns in max. 2 Stunden bei Ihnen.",
        form_error: "Fehler beim Senden. Bitte versuchen Sie es nochmal oder rufen Sie uns an.",
        form_validation_fill: "Bitte füllen Sie alle Felder aus.",
        form_validation_email: "Bitte geben Sie eine gültige Email ein.",
        
        // Footer
        footer_text: "Professionelle PC Reparatur in der ganzen Schweiz seit 2018"
    },
    
    en: {
        // Logo & Nav
        logo: "TechFix Swiss",
        nav_home: "Home",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_garantie: "Guarantee",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "Available today in Zurich, Basel & Geneva",
        hero_title_1: "PC broken?",
        hero_title_2: "We'll fix it today.",
        hero_subtitle: "Express repair in 24h or it's free. Free diagnostics, fair prices from CHF 69, 90-day warranty on everything. No fine print. Honest.",
        hero_btn_primary: "Book Free Diagnosis",
        hero_btn_secondary: "View Services",
        
        // Stats
        stat_express: "Express Service",
        stat_garantie: "Day Warranty",
        stat_kunden: "Happy Customers",
        
        // Problems
        problem_1: "PC won't start",
        solution_1: "Diagnosis in 1h",
        problem_2: "Extremely slow",
        solution_2: "SSD Upgrade",
        problem_3: "Virus / Malware",
        solution_3: "Complete cleanup",
        problem_4: "Lost data",
        solution_4: "Recovery possible",
        
        // Services
        services_title: "What we repair",
        services_subtitle: "Free diagnosis always. We repair everything from PCs to gaming consoles.",
        
        service_1_title: "PCs & Laptops",
        service_1_desc: "Windows, Mac, Linux. All brands: Dell, HP, Lenovo, Asus, Acer, MSI. Hardware or software - we fix everything.",
        service_1_feat_1: "✓ Desktop PCs",
        service_1_feat_2: "✓ Notebooks & Laptops",
        service_1_feat_3: "✓ MacBooks & iMacs",
        service_1_feat_4: "✓ Gaming PCs",
        
        service_2_title: "Tablets & Smartphones",
        service_2_desc: "iPad, Samsung Galaxy Tab, Surface. Broken screen? Dead battery? Water damage? We fix it fast and affordable.",
        service_2_feat_1: "✓ iPads & Tablets",
        service_2_feat_2: "✓ Smartphones (iPhone, Samsung)",
        service_2_feat_3: "✓ Surface Tablets",
        service_2_feat_4: "✓ E-Readers (Kindle, etc.)",
        
        service_3_title: "Gaming Consoles",
        service_3_desc: "PlayStation 5/4, Xbox Series X/S, Nintendo Switch. Drive broken? Overheating? Controller dead? We're gaming specialists.",
        service_3_feat_1: "✓ PlayStation 5 / PS4",
        service_3_feat_2: "✓ Xbox Series X/S / One",
        service_3_feat_3: "✓ Nintendo Switch",
        service_3_feat_4: "✓ Steam Deck / Handhelds",
        
        service_4_title: "Data Recovery & Upgrade",
        service_4_desc: "Hard drive dead? Data deleted? Virus? Slow PC? We recover data and make old devices fast again.",
        service_4_feat_1: "✓ Data Recovery HDD/SSD",
        service_4_feat_2: "✓ Virus & Malware Removal",
        service_4_feat_3: "✓ SSD Upgrade & RAM",
        service_4_feat_4: "✓ Windows Reinstallation",
        
        service_note: "100% free diagnosis. If you choose not to proceed with the repair, we only charge transport costs.",
        
        featured_badge: "Popular",
        btn_anfragen: "Free Diagnosis",
        
        // Garantie
        garantie_title: "Our Promises",
        garantie_1_title: "24h Express or Free",
        garantie_1_desc: "If we take longer than 24h, you pay nothing. Promise.",
        garantie_2_title: "90 Day Warranty",
        garantie_2_desc: "All repairs with 3-month warranty. If it comes back, we fix it free.",
        garantie_3_title: "On-Site Service",
        garantie_3_desc: "Zurich, Basel, Geneva. We come to your home or office.",
        garantie_4_title: "Fixed Price Guarantee",
        garantie_4_desc: "The first quoted price stands. No surprises on the bill.",
        garantie_5_title: "100% Privacy",
        garantie_5_desc: "Your data stays private. We only look at what's needed for repair.",
        garantie_6_title: "Free Recycling",
        garantie_6_desc: "Old PC to dispose? Bring it along and get 10% discount.",
        
        // Contact
        contact_title: "Request Repair",
        contact_text: "Fill out the form or scan the QR code for WhatsApp. We'll get back to you within 2 hours.",
        contact_email_label: "Email",
        contact_location_label: "Locations",
        contact_locations: "Zurich, Basel, Geneva, Bern",
        qr_title: "Scan for WhatsApp",
        qr_subtitle: "Direct chat for quick response",
        
        // Form
        form_name: "Name *",
        form_email: "Email *",
        form_phone: "Phone *",
        form_device: "Device *",
        form_device_select: "Choose...",
        form_device_laptop: "Laptop",
        form_device_desktop: "Desktop PC",
        form_device_mac: "Mac / iMac",
        form_device_tablet: "Tablet",
        form_device_other: "Other",
        form_problem: "Describe problem *",
        form_submit: "Request Diagnosis",
        form_sending: "Sending...",
        form_success: "Thanks! We'll contact you within 2 hours.",
        form_error: "Error sending. Please try again or call us.",
        form_validation_fill: "Please fill in all fields.",
        form_validation_email: "Please enter a valid email.",
        
        // Footer
        footer_text: "Professional PC repair throughout Switzerland since 2018"
    },
    
    fr: {
        // Logo & Nav
        logo: "TechFix Swiss",
        nav_home: "Accueil",
        nav_services: "Services",
        nav_pricing: "Prix",
        nav_garantie: "Garantie",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "Disponible aujourd'hui à Zurich, Bâle et Genève",
        hero_title_1: "PC cassé?",
        hero_title_2: "On le répare aujourd'hui.",
        hero_subtitle: "Réparation express en 24h ou gratuit. Diagnostic gratuit, prix justes dès CHF 69, garantie 90 jours sur tout. Sans petites lignes. Honnête.",
        hero_btn_primary: "Réserver un diagnostic",
        hero_btn_secondary: "Voir les services",
        
        // Stats
        stat_express: "Service Express",
        stat_garantie: "Jours Garantie",
        stat_kunden: "Clients Satisfaits",
        
        // Problems
        problem_1: "PC ne démarre plus",
        solution_1: "Diagnostic en 1h",
        problem_2: "Extrêmement lent",
        solution_2: "Upgrade SSD",
        problem_3: "Virus / Malware",
        solution_3: "Nettoyage complet",
        problem_4: "Données perdues",
        solution_4: "Récupération possible",
        
        // Services
        services_title: "Ce qu'on répare",
        services_subtitle: "Des simples problèmes logiciels aux pannes matérielles complètes. Prix honnêtes, pas de coûts cachés.",
        
        service_1_title: "Réparation Hardware",
        service_1_desc: "Écran cassé? Clavier mort? Alimentation défectueuse? On répare ou remplace n'importe quel composant. Pièces d'origine, prix justes.",
        service_1_feat_1: "✓ Remplacement écran",
        service_1_feat_2: "✓ Clavier / Touchpad",
        service_1_feat_3: "✓ Changement batterie",
        service_1_feat_4: "✓ Nettoyage ventilateur",
        
        service_2_title: "Suppression Virus",
        service_2_desc: "PC se comporte bizarrement? Pop-ups partout? On supprime virus, malwares, spywares et ransomwares. Complètement. Garanti.",
        service_2_feat_1: "✓ Nettoyage profond",
        service_2_feat_2: "✓ Suppression adware",
        service_2_feat_3: "✓ Installation protection",
        service_2_feat_4: "✓ Vérification sécurité",
        
        service_3_title: "Récupération Données",
        service_3_desc: "Disque dur mort? Photos disparues? Documents effacés? On récupère les données des disques durs, SSD, clés USB défectueux. 95% de succès.",
        service_3_feat_1: "✓ Récup. HDD/SSD",
        service_3_feat_2: "✓ Fichiers supprimés",
        service_3_feat_3: "✓ Disques formatés",
        service_3_feat_4: "✓ Systèmes RAID",
        
        service_4_title: "Accélérer le PC",
        service_4_desc: "Vieux PC? Lent? On lui redonne vie. Installer SSD, augmenter RAM, réinstaller Windows. Comme neuf.",
        service_4_feat_1: "✓ Install. SSD + clonage",
        service_4_feat_2: "✓ Extension RAM",
        service_4_feat_3: "✓ Windows réinstallé",
        service_4_feat_4: "✓ Pilotes à jour",
        
        featured_badge: "Populaire",
        price_from: "Dès",
        btn_anfragen: "Demander",
        
        // Pricing
        pricing_title: "Prix Transparents",
        pricing_diag: "Diagnostic",
        pricing_repair: "Réparation Standard",
        pricing_express: "Express 24h",
        pricing_home: "Visite à domicile",
        
        // Garantie
        garantie_title: "Nos Promesses",
        garantie_1_title: "24h Express ou Gratuit",
        garantie_1_desc: "Si on prend plus de 24h, vous ne payez rien. Promis.",
        garantie_2_title: "Garantie 90 Jours",
        garantie_2_desc: "Toutes réparations avec 3 mois de garantie. Si ça revient, on le répare gratis.",
        garantie_3_title: "Service sur Place",
        garantie_3_desc: "Zurich, Bâle, Genève. On vient chez vous ou au bureau.",
        garantie_4_title: "Prix Fixe Garanti",
        garantie_4_desc: "Le premier prix annoncé vaut. Pas de surprises sur la facture.",
        garantie_5_title: "Confidentialité 100%",
        garantie_5_desc: "Vos données restent privées. On regarde seulement ce qui est nécessaire.",
        garantie_6_title: "Recyclage Gratuit",
        garantie_6_desc: "Vieux PC à jeter? Amenez-le et obtenez 10% de réduction.",
        
        // Contact
        contact_title: "Demander Réparation",
        contact_text: "Remplissez le formulaire ou scannez le QR code pour WhatsApp. On vous répond sous 2 heures.",
        contact_email_label: "Email",
        contact_location_label: "Emplacements",
        contact_locations: "Zurich, Bâle, Genève, Berne",
        qr_title: "Scanner pour WhatsApp",
        qr_subtitle: "Chat direct pour réponse rapide",
        
        // Form
        form_name: "Nom *",
        form_email: "Email *",
        form_phone: "Téléphone *",
        form_device: "Appareil *",
        form_device_select: "Choisir...",
        form_device_laptop: "Laptop",
        form_device_desktop: "PC de bureau",
        form_device_mac: "Mac / iMac",
        form_device_tablet: "Tablette",
        form_device_other: "Autre",
        form_problem: "Décrire le problème *",
        form_submit: "Demander diagnostic",
        form_sending: "Envoi en cours...",
        form_success: "Merci! On vous contacte sous 2 heures.",
        form_error: "Erreur d'envoi. Réessayez ou appelez-nous.",
        form_validation_fill: "Veuillez remplir tous les champs.",
        form_validation_email: "Veuillez entrer un email valide.",
        
        // Footer
        footer_text: "Réparation PC professionnelle dans toute la Suisse depuis 2018"
    },
    
    es: {
        // Logo & Nav
        logo: "TechFix Swiss",
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_pricing: "Precios",
        nav_garantie: "Garantía",
        nav_contact: "Contacto",
        
        // Hero
        hero_badge: "Disponible hoy en Zúrich, Basilea y Ginebra",
        hero_title_1: "¿PC roto?",
        hero_title_2: "Lo reparamos hoy mismo.",
        hero_subtitle: "Reparación express en 24h o gratis. Diagnóstico gratuito, precios justos desde CHF 69, garantía de 90 días en todo. Sin letra pequeña. Honesto.",
        hero_btn_primary: "Reservar diagnóstico",
        hero_btn_secondary: "Ver servicios",
        
        // Stats
        stat_express: "Servicio Express",
        stat_garantie: "Días Garantía",
        stat_kunden: "Clientes Felices",
        
        // Problems
        problem_1: "PC no arranca",
        solution_1: "Diagnóstico en 1h",
        problem_2: "Extremadamente lento",
        solution_2: "Upgrade SSD",
        problem_3: "Virus / Malware",
        solution_3: "Limpieza completa",
        problem_4: "Datos perdidos",
        solution_4: "Recuperación posible",
        
        // Services
        services_title: "Qué reparamos",
        services_subtitle: "Desde problemas simples de software hasta fallos completos de hardware. Precios honestos, sin costos ocultos.",
        
        service_1_title: "Reparación Hardware",
        service_1_desc: "¿Pantalla rota? ¿Teclado muerto? ¿Fuente defectuosa? Reparamos o reemplazamos cualquier componente. Piezas originales, precios justos.",
        service_1_feat_1: "✓ Cambio de pantalla",
        service_1_feat_2: "✓ Teclado / Touchpad",
        service_1_feat_3: "✓ Cambio batería",
        service_1_feat_4: "✓ Limpieza ventilador",
        
        service_2_title: "Eliminación Virus",
        service_2_desc: "¿PC se comporta raro? ¿Pop-ups por todos lados? Eliminamos virus, malware, spyware y ransomware. Completamente. Garantizado.",
        service_2_feat_1: "✓ Limpieza profunda",
        service_2_feat_2: "✓ Eliminación adware",
        service_2_feat_3: "✓ Instalación protección",
        service_2_feat_4: "✓ Chequeo seguridad",
        
        service_3_title: "Recuperación Datos",
        service_3_desc: "¿Disco duro muerto? ¿Fotos perdidas? ¿Documentos borrados? Recuperamos datos de discos duros, SSD, pendrives rotos. 95% éxito.",
        service_3_feat_1: "✓ Recuperación HDD/SSD",
        service_3_feat_2: "✓ Archivos eliminados",
        service_3_feat_3: "✓ Discos formateados",
        service_3_feat_4: "✓ Sistemas RAID",
        
        service_4_title: "Acelerar PC",
        service_4_desc: "¿PC viejo? ¿Lento? Le damos nueva vida. Instalar SSD, aumentar RAM, reinstalar Windows. Como nuevo.",
        service_4_feat_1: "✓ Instalación SSD + clonado",
        service_4_feat_2: "✓ Ampliación RAM",
        service_4_feat_3: "✓ Windows reinstalado",
        service_4_feat_4: "✓ Drivers actualizados",
        
        featured_badge: "Popular",
        price_from: "Desde",
        btn_anfragen: "Solicitar",
        
        // Pricing
        pricing_title: "Precios Transparentes",
        pricing_diag: "Diagnóstico",
        pricing_repair: "Reparación Estándar",
        pricing_express: "Express 24h",
        pricing_home: "Visita a domicilio",
        
        // Garantie
        garantie_title: "Nuestras Promesas",
        garantie_1_title: "24h Express o Gratis",
        garantie_1_desc: "Si tardamos más de 24h, no pagas nada. Prometido.",
        garantie_2_title: "Garantía 90 Días",
        garantie_2_desc: "Todas las reparaciones con 3 meses de garantía. Si vuelve, lo arreglamos gratis.",
        garantie_3_title: "Servicio a Domicilio",
        garantie_3_desc: "Zúrich, Basilea, Ginebra. Vamos a tu casa o a la oficina.",
        garantie_4_title: "Precio Fijo Garantizado",
        garantie_4_desc: "El primer precio mencionado es válido. Sin sorpresas en la factura.",
        garantie_5_title: "Privacidad 100%",
        garantie_5_desc: "Tus datos se quedan privados. Solo miramos lo necesario para la reparación.",
        garantie_6_title: "Reciclaje Gratis",
        garantie_6_desc: "¿PC viejo para tirar? Tráelo y consigue 10% descuento.",
        
        // Contact
        contact_title: "Solicitar Reparación",
        contact_text: "Rellena el formulario o escanea el código QR para WhatsApp. Te contactamos en máximo 2 horas.",
        contact_email_label: "Email",
        contact_location_label: "Ubicaciones",
        contact_locations: "Zúrich, Basilea, Ginebra, Berna",
        qr_title: "Escanear para WhatsApp",
        qr_subtitle: "Chat directo para respuesta rápida",
        
        // Form
        form_name: "Nombre *",
        form_email: "Email *",
        form_phone: "Teléfono *",
        form_device: "Dispositivo *",
        form_device_select: "Elegir...",
        form_device_laptop: "Laptop",
        form_device_desktop: "PC sobremesa",
        form_device_mac: "Mac / iMac",
        form_device_tablet: "Tablet",
        form_device_other: "Otro",
        form_problem: "Describir problema *",
        form_submit: "Solicitar diagnóstico",
        form_sending: "Enviando...",
        form_success: "¡Gracias! Te contactamos en máximo 2 horas.",
        form_error: "Error al enviar. Intenta de nuevo o llámanos.",
        form_validation_fill: "Por favor rellena todos los campos.",
        form_validation_email: "Por favor introduce un email válido.",
        
        // Footer
        footer_text: "Reparación profesional de PCs en toda Suiza desde 2018"
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar botones
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar atributo html lang
    document.documentElement.lang = lang;
    
    // Traducir todos los elementos
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Para inputs y textareas, actualizar placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } 
            // Para options de select
            else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            }
            // Para el resto, actualizar textContent
            else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Detectar idioma del navegador al cargar
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.substring(0, 2);
    
    // Prioridad: 1. Guardado, 2. Navegador, 3. Alemán por defecto
    let defaultLang = 'de';
    
    if (savedLang && translations[savedLang]) {
        defaultLang = savedLang;
    } else if (translations[browserLang]) {
        defaultLang = browserLang;
    }
    
    changeLanguage(defaultLang);
});