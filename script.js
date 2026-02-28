/* ========================================
   UNCUT® - Sacred Warrior Oil Women's Landing Page
   Interactive JavaScript Functionality
   ======================================== */

// ========================================
// SMOOTH SCROLL WITH OFFSET FOR STICKY NAV
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for non-section links
        if (href === '#' || href === '#!') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight +
                            document.querySelector('.top-banner').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL ANIMATIONS - FADE IN ON SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
const animatedSections = document.querySelectorAll(`
    .identity-section,
    .product-intro,
    .benefits-section,
    .ritual-section,
    .performance-section,
    .ingredients-section,
    .social-proof-section,
    .cta-section,
    .repeat-purchase-section,
    .influencer-section
`);

animatedSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    fadeInObserver.observe(section);
});

// ========================================
// STAGGER ANIMATION FOR BENEFITS & TESTIMONIALS
// ========================================
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.children;
            Array.from(items).forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 150);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const benefitsGrid = document.querySelector('.benefits-grid');
const testimonialsGrid = document.querySelector('.testimonials-grid');
const ingredientsGrid = document.querySelector('.ingredients-grid');

[benefitsGrid, testimonialsGrid, ingredientsGrid].forEach(grid => {
    if (grid) {
        Array.from(grid.children).forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
        staggerObserver.observe(grid);
    }
});

// ========================================
// EMAIL MODAL - EXIT INTENT
// ========================================
const emailModal = document.getElementById('emailModal');
const modalClose = document.getElementById('modalClose');
let modalShown = false;
let exitIntentTriggered = false;

// Show modal on exit intent (mouse leaving viewport from top)
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !modalShown && !exitIntentTriggered) {
        // Add delay to prevent accidental triggers
        setTimeout(() => {
            if (!modalShown) {
                showEmailModal();
                exitIntentTriggered = true;
            }
        }, 500);
    }
});

// Alternative trigger: After 45 seconds if not shown
setTimeout(() => {
    if (!modalShown && !exitIntentTriggered) {
        showEmailModal();
    }
}, 45000);

function showEmailModal() {
    emailModal.classList.add('active');
    modalShown = true;
    document.body.style.overflow = 'hidden';
}

function hideEmailModal() {
    emailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on button click
if (modalClose) {
    modalClose.addEventListener('click', hideEmailModal);
}

// Close modal on outside click
emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        hideEmailModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalShown) {
        hideEmailModal();
    }
});

// Handle email form submission
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = emailForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Here you would integrate with your email service (e.g., Mailchimp, ConvertKit, etc.)
        console.log('Email captured:', email);

        // Show success message
        emailForm.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h3 style="color: var(--gold); margin-bottom: 15px;">Thank You!</h3>
                <p style="color: var(--cream);">Your recovery guide is on its way.<br>Check your inbox in the next few minutes.</p>
            </div>
        `;

        // Close modal after 3 seconds
        setTimeout(hideEmailModal, 3000);
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const nav = document.querySelector('.nav');
const topBanner = document.querySelector('.top-banner');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow to nav when scrolled
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// PRODUCT IMAGE PARALLAX EFFECT
// ========================================
const productPlaceholder = document.querySelector('.product-placeholder');

window.addEventListener('scroll', () => {
    if (productPlaceholder) {
        const scrolled = window.pageYOffset;
        const rect = productPlaceholder.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isInView) {
            const offset = (scrolled - rect.top) * 0.1;
            productPlaceholder.style.transform = `translateY(${offset}px)`;
        }
    }
});

// ========================================
// SCROLL INDICATOR AUTO-HIDE
// ========================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ========================================
// CTA BUTTON CLICK TRACKING
// ========================================
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', (e) => {
        // Don't prevent default if it's a real link
        const href = button.getAttribute('href');
        if (href && href !== '#') return;

        e.preventDefault();

        // Here you would track the CTA click (Google Analytics, Meta Pixel, etc.)
        console.log('CTA clicked:', button.textContent);

        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);

        // Navigate to purchase page or open product modal
        // window.location.href = '/purchase';
    });
});

// ========================================
// MOBILE MENU TOGGLE (if adding hamburger menu)
// ========================================
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');

        // Check if hamburger already exists
        if (!document.querySelector('.hamburger')) {
            document.querySelector('.nav-container').appendChild(hamburger);

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
                hamburger.innerHTML = navLinks.classList.contains('mobile-active') ? '✕' : '☰';
            });
        }
    }
}

// ========================================
// LAZY LOADING FOR IMAGES (when real images are added)
// ========================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

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

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// FORM VALIDATION ENHANCEMENT
// ========================================
function enhanceFormValidation() {
    const emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(input => {
        input.addEventListener('blur', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailRegex.test(input.value)) {
                input.style.borderColor = '#ff4444';
            } else {
                input.style.borderColor = 'var(--gold)';
            }
        });

        input.addEventListener('input', () => {
            input.style.borderColor = 'var(--gold)';
        });
    });
}

// ========================================
// COUNTDOWN TIMER FOR SCARCITY (Optional)
// ========================================
function updateStockCounter() {
    const stockElement = document.querySelector('.top-banner strong');
    if (stockElement && stockElement.textContent.includes('Batch')) {
        // Simulate stock countdown (in real implementation, pull from backend)
        let currentStock = parseInt(localStorage.getItem('stockCount')) || 47;

        // Randomly decrease stock every 5-10 minutes
        setInterval(() => {
            if (currentStock > 10) {
                currentStock--;
                localStorage.setItem('stockCount', currentStock);
                stockElement.textContent = `Spring Batch: ${currentStock} bottles left`;
            }
        }, Math.random() * 300000 + 300000); // 5-10 minutes
    }
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Defer non-critical operations
window.addEventListener('load', () => {
    lazyLoadImages();
    enhanceFormValidation();
    // updateStockCounter(); // Uncomment if using stock counter
});

// ========================================
// INITIALIZE ON DOM READY
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('UNCUT® Women\'s Landing Page Loaded');

    // Initialize mobile menu if needed
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});

// ========================================
// ANALYTICS HELPER FUNCTIONS
// ========================================
function trackEvent(category, action, label) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Meta Pixel example
    if (typeof fbq !== 'undefined') {
        fbq('track', action, { category, label });
    }

    console.log('Event tracked:', { category, action, label });
}

// Track scroll depth
let scrollDepthTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

window.addEventListener('scroll', () => {
    const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    Object.keys(scrollDepthTracked).forEach(depth => {
        if (scrollPercent >= parseInt(depth) && !scrollDepthTracked[depth]) {
            scrollDepthTracked[depth] = true;
            trackEvent('Scroll Depth', 'scroll', `${depth}%`);
        }
    });
});

// Track time on page
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 30;

    // Track milestones
    if (timeOnPage === 30) {
        trackEvent('Engagement', 'time_on_page', '30_seconds');
    } else if (timeOnPage === 60) {
        trackEvent('Engagement', 'time_on_page', '1_minute');
    } else if (timeOnPage === 120) {
        trackEvent('Engagement', 'time_on_page', '2_minutes');
    }
}, 30000);
