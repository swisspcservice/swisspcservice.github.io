// TechFix Swiss - JavaScript con funcionalidad completa
// Anti-spam, formulario, QR WhatsApp, animaciones

// Timestamp anti-spam
window.pageLoadTime = Date.now();

// ========================================
// MOBILE NAVIGATION
// ========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// WHATSAPP QR CODE
// ========================================
// Número de WhatsApp configurado
const whatsappNumber = '41772015401'; // +41 77 201 54 01
const whatsappURL = `https://wa.me/${whatsappNumber}`;

// Generar QR Code
if (document.getElementById('qrcode')) {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: whatsappURL,
        width: 200,
        height: 200,
        colorDark: '#2563EB',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// ========================================
// FORMULARIO DE CONTACTO CON ANTI-SPAM
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            device: document.getElementById('device').value,
            problem: document.getElementById('problem').value.trim()
        };
        
        // Idioma actual para mensajes
        const currentLang = localStorage.getItem('preferredLanguage') || 'de';
        
        // ===== PROTECCIÓN ANTI-SPAM =====
        
        // 1. Honeypot (campo oculto)
        const honeypot = contactForm.querySelector('input[name="_gotcha"]');
        if (honeypot && honeypot.value !== '') {
            console.log('Bot detected via honeypot');
            return;
        }
        
        // 2. Tiempo en página (mínimo 3 segundos)
        const timeOnPage = (Date.now() - window.pageLoadTime) / 1000;
        if (timeOnPage < 3) {
            showMessage('Bitte warten Sie einen Moment.', 'error');
            return;
        }
        
        // 3. Detectar spam keywords en mensaje
        const spamKeywords = [
            'viagra', 'cialis', 'lottery', 'winner', 'bitcoin', 'crypto',
            'investment opportunity', 'make money fast', 'click here', 'buy now',
            'casino', 'poker', 'forex', 'trading'
        ];
        const problemText = formData.problem.toLowerCase();
        const containsSpam = spamKeywords.some(keyword => problemText.includes(keyword));
        if (containsSpam) {
            showMessage(translations[currentLang].form_error, 'error');
            return;
        }
        
        // 4. Longitud mínima del mensaje (anti-bot)
        if (formData.problem.length < 10) {
            showMessage('Bitte beschreiben Sie das Problem genauer.', 'error');
            return;
        }
        
        // 5. Rate limiting - 1 envío cada 60 segundos
        const lastSubmit = localStorage.getItem('lastFormSubmit');
        const now = Date.now();
        if (lastSubmit && (now - parseInt(lastSubmit)) < 60000) {
            const waitTime = Math.ceil((60000 - (now - parseInt(lastSubmit))) / 1000);
            showMessage(`Bitte warten Sie ${waitTime} Sekunden.`, 'error');
            return;
        }
        
        // ===== FIN PROTECCIÓN ANTI-SPAM =====
        
        // Validación básica
        if (!formData.name || !formData.email || !formData.phone || !formData.device || !formData.problem) {
            showMessage(translations[currentLang].form_validation_fill, 'error');
            return;
        }
        
        // Validación email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage(translations[currentLang].form_validation_email, 'error');
            return;
        }
        
        // Botón loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>${translations[currentLang].form_sending}</span>`;
        submitBtn.disabled = true;
        
        // Email configurado
        const YOUR_EMAIL = 'swisspcservice@gmail.com';
        
        try {
            const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    device: formData.device,
                    problem: formData.problem,
                    _subject: `Neue Reparatur-Anfrage von ${formData.name}`,
                    _template: 'table',
                    _captcha: 'false'
                })
            });
            
            if (response.ok) {
                // Guardar timestamp
                localStorage.setItem('lastFormSubmit', Date.now().toString());
                
                // Mensaje de éxito
                showMessage(translations[currentLang].form_success, 'success');
                
                // Resetear formulario
                contactForm.reset();
                
                // OPCIONAL: Enviar también por WhatsApp
                // const whatsappMsg = `Hola! Neue Anfrage:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ATel: ${formData.phone}%0AGerät: ${formData.device}%0A%0AProblem: ${formData.problem}`;
                // window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
                
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Form error:', error);
            showMessage(translations[currentLang].form_error, 'error');
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Mostrar mensajes del formulario
function showMessage(message, type) {
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-ocultar mensajes de éxito
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// SERVICE CARDS - Click para ir al formulario
// ========================================
document.querySelectorAll('.btn-card').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Obtener el tipo de servicio de la card padre
        const serviceCard = button.closest('.service-card');
        const serviceType = serviceCard.dataset.service;
        
        // Scroll al formulario
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        
        // Focus en el campo de problema después de un delay
        setTimeout(() => {
            const problemField = document.getElementById('problem');
            if (problemField) {
                problemField.focus();
                
                // Pre-rellenar con texto según el servicio (OPCIONAL)
                const currentLang = localStorage.getItem('preferredLanguage') || 'de';
                const servicePrefills = {
                    de: {
                        pcs: 'Hallo, ich habe ein Problem mit meinem PC/Laptop. ',
                        tablets: 'Hallo, mein Tablet/Smartphone ist kaputt. ',
                        gaming: 'Meine Gaming Konsole funktioniert nicht mehr. ',
                        data: 'Ich brauche Hilfe bei Datenrettung oder Upgrade. '
                    },
                    en: {
                        pcs: 'Hello, I have a problem with my PC/Laptop. ',
                        tablets: 'Hello, my tablet/smartphone is broken. ',
                        gaming: 'My gaming console is not working. ',
                        data: 'I need help with data recovery or upgrade. '
                    },
                    fr: {
                        pcs: 'Bonjour, j\'ai un problème avec mon PC/Laptop. ',
                        tablets: 'Bonjour, ma tablette/smartphone est cassé. ',
                        gaming: 'Ma console de jeux ne fonctionne plus. ',
                        data: 'J\'ai besoin d\'aide pour la récupération de données ou upgrade. '
                    },
                    es: {
                        pcs: 'Hola, tengo un problema con mi PC/Laptop. ',
                        tablets: 'Hola, mi tablet/smartphone está roto. ',
                        gaming: 'Mi consola de juegos no funciona. ',
                        data: 'Necesito ayuda con recuperación de datos o upgrade. '
                    }
                };
                
                if (servicePrefills[currentLang] && servicePrefills[currentLang][serviceType]) {
                    problemField.value = servicePrefills[currentLang][serviceType];
                }
            }
        }, 800);
    });
});

// ========================================
// SCROLL ANIMATIONS (sutiles)
// ========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;
    const animatedElements = document.querySelectorAll(
        '.service-card, .garantie-card, .pricing-item, .problem-card'
    );
    
    animatedElements.forEach((el, index) => {
        // En móvil, animaciones más sutiles
        if (!isMobile) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        }
    });
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHT
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// HOVER EFFECTS SUAVES
// ========================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// CONSOLE MESSAGE (opcional, con personalidad)
// ========================================
console.log(
    '%c⚡ TechFix Swiss ',
    'background: #2563EB; color: #fff; font-size: 20px; font-weight: bold; padding: 10px;'
);
console.log(
    '%c PC Reparatur mit Herz 💙 ',
    'background: #F59E0B; color: #000; font-size: 14px; padding: 5px;'
);

// ========================================
// PERFORMANCE: Lazy load de imágenes (si añades)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}