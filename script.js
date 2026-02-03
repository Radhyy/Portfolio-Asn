// ===== ANIMASI NAVBAR & HERO SECTION =====
// Animasi Navbar saat load
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.opacity = '0';
    
    setTimeout(() => {
        navbar.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }, 100);
});

// Animasi Hero Section
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    const heroStats = document.querySelectorAll('.stat-item');
    const heroButtons = document.querySelector('.hero-buttons');
    
    // Set initial state
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-50px)';
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(50px)';
    }
    
    heroStats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(30px)';
    });
    
    // Animate hero text
    setTimeout(() => {
        if (heroText) {
            heroText.style.transition = 'opacity 1s ease, transform 1s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }
    }, 300);
    
    // Animate hero image
    setTimeout(() => {
        if (heroImage) {
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }
    }, 500);
    
    // Animate hero stats one by one
    heroStats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 900 + (index * 150));
    });
});

// ===== ANIMASI ABOUT SECTION =====
const aboutSection = document.querySelector('.about');
const aboutImage = document.querySelector('.about-image');
const aboutText = document.querySelector('.about-text');
const aboutBadges = document.querySelectorAll('.about-badges .badge');
const infoItems = document.querySelectorAll('.info-item');

// Set initial state
if (aboutImage) {
    aboutImage.style.opacity = '0';
    aboutImage.style.transform = 'translateX(-50px)';
}

if (aboutText) {
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateX(50px)';
}

aboutBadges.forEach(badge => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(30px)';
});

infoItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
});

// Animate on scroll
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate image
            setTimeout(() => {
                if (aboutImage) {
                    aboutImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    aboutImage.style.opacity = '1';
                    aboutImage.style.transform = 'translateX(0)';
                }
            }, 100);
            
            // Animate text
            setTimeout(() => {
                if (aboutText) {
                    aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    aboutText.style.opacity = '1';
                    aboutText.style.transform = 'translateX(0)';
                }
            }, 300);
            
            // Animate badges
            aboutBadges.forEach((badge, index) => {
                setTimeout(() => {
                    badge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    badge.style.opacity = '1';
                    badge.style.transform = 'translateY(0)';
                }, 500 + (index * 150));
            });
            
            // Animate info items
            infoItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 700 + (index * 100));
            });
            
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// ===== ANIMASI EXPERTISE SECTION =====
const expertiseCards = document.querySelectorAll('.expertise-card');

expertiseCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
});

const expertiseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.expertise-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });
            expertiseObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const expertiseSection = document.querySelector('.expertise');
if (expertiseSection) {
    expertiseObserver.observe(expertiseSection);
}

// ===== ANIMASI TECHNICAL SKILLS SECTION =====
const techSkillCards = document.querySelectorAll('.tech-skill-card');

techSkillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
});

const techSkillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.tech-skill-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateX(0)';
                }, index * 200);
            });
            techSkillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const techSkillsSection = document.querySelector('.skills');
if (techSkillsSection) {
    techSkillsObserver.observe(techSkillsSection);
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }
});

// Smooth Scrolling
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

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('.skills');

const animateSkills = () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        window.removeEventListener('scroll', animateSkills);
    }
};

window.addEventListener('scroll', animateSkills);

// Observe contact cards with animation
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 150);
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and content sections
document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add current year to footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
}

// Floating animation for hero cards
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// Typing effect is disabled - name stays visible
// Add typing effect to hero title (optional enhancement)
// const heroTitle = document.querySelector('.hero h1');
// const titleText = heroTitle.textContent;
// heroTitle.textContent = '';
// let i = 0;

// function typeWriter() {
//     if (i < titleText.length) {
//         heroTitle.textContent += titleText.charAt(i);
//         i++;
//         setTimeout(typeWriter, 100);
//     }
// }

// Uncomment to enable typing effect
// window.addEventListener('load', typeWriter);

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-item h3');

statNumbers.forEach(stat => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50;
    const suffix = stat.textContent.includes('+') ? '+' : '';
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            stat.textContent = Math.ceil(current) + suffix;
            setTimeout(updateCounter, 30);
        } else {
            stat.textContent = target + suffix;
        }
    };
    
    // Start counter when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroObserver.observe(document.querySelector('.hero'));
});

// ========================================
// DIGITAL PRODUCTS SECTION ANIMATION
// ========================================
const productsSection = document.querySelector('.digital-products');
if (productsSection) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
    });
    
    const productsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                productCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                productsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    productsObserver.observe(productsSection);
}

