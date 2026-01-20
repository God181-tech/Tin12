// ==================== Placeholder Configuration ==================== 
// Update these with your actual file paths and information when you have them

const config = {
    // Team logo image
    teamLogo: {
        selector: '#team-logo',
        src: '', // Will be updated with your logo file
        alt: 'Logo Nhóm'
    },

    // Podcast links
    podcasts: [
        {
            selector: '#podcast1-link',
            url: '', // Podcast 1 URL
            title: 'Podcast 1'
        },
        {
            selector: '#podcast2-link',
            url: '', // Podcast 2 URL
            title: 'Podcast 2'
        },
        {
            selector: '#podcast3-link',
            url: '', // Podcast 3 URL
            title: 'Podcast 3'
        }
    ],

    // Slogan
    slogan: {
        selector: '#slogan',
        text: '' // Your slogan text here
    },

    // Mindmap image
    mindmap: {
        selector: '#mindmap-img',
        src: '', // Mindmap image URL
        alt: 'Mindmap 3 Video'
    },

    // Contact information
    contact: {
        email: {
            selector: '#contact-email',
            value: '' // Contact email
        },
        phone: {
            selector: '#contact-phone',
            value: '' // Contact phone
        },
        address: {
            selector: '#contact-address',
            value: '' // Contact address
        }
    }
};

// ==================== Helper Functions ==================== 

/**
 * Load external content into the page
 * @param {string} selector - CSS selector for the element
 * @param {string} content - Content to load
 * @param {boolean} isImage - Whether content is an image (src) or text
 */
function loadContent(selector, content, isImage = false) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element with selector "${selector}" not found`);
        return;
    }

    if (isImage) {
        if (content) {
            element.src = content;
            element.style.display = 'block';
        }
    } else {
        if (content) {
            element.textContent = content;
        }
    }
}

/**
 * Initialize all dynamic content
 */
function initializeContent() {
    // Load team logo
    if (config.teamLogo.src) {
        loadContent(config.teamLogo.selector, config.teamLogo.src, true);
    }

    // Load podcast links
    config.podcasts.forEach((podcast) => {
        const element = document.querySelector(podcast.selector);
        if (element && podcast.url) {
            element.href = podcast.url;
        }
    });

    // Load slogan
    if (config.slogan.text) {
        loadContent(config.slogan.selector, config.slogan.text);
    }

    // Load mindmap
    if (config.mindmap.src) {
        loadContent(config.mindmap.selector, config.mindmap.src, true);
    }

    // Load contact information
    if (config.contact.email.value) {
        loadContent(config.contact.email.selector, config.contact.email.value);
    }
    if (config.contact.phone.value) {
        loadContent(config.contact.phone.selector, config.contact.phone.value);
    }
    if (config.contact.address.value) {
        loadContent(config.contact.address.selector, config.contact.address.value);
    }
}

/**
 * Smooth scroll to section
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add animation on scroll
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.podcast-card, .category-card, .profession-section').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Update configuration from external JSON
 * @param {Object} newConfig - Configuration object
 */
function updateConfig(newConfig) {
    Object.keys(newConfig).forEach(key => {
        if (config.hasOwnProperty(key)) {
            Object.assign(config[key], newConfig[key]);
        }
    });
    initializeContent();
}

/**
 * Load configuration from a JSON file
 * @param {string} jsonFile - Path to JSON configuration file
 */
async function loadConfigFromFile(jsonFile) {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) {
            console.warn(`Could not load configuration from ${jsonFile}`);
            return;
        }
        const data = await response.json();
        updateConfig(data);
    } catch (error) {
        console.error('Error loading configuration:', error);
    }
}

// ==================== Initialize on Document Ready ==================== 

document.addEventListener('DOMContentLoaded', function() {
    // Initialize content
    initializeContent();

    // Setup smooth scroll
    setupSmoothScroll();

    // Setup scroll animations
    setupScrollAnimations();

    // Log configuration (for debugging)
    console.log('Graphic Designer Website Initialized');
    console.log('Configuration:', config);
});

// ==================== Utility: Export Configuration ==================== 

/**
 * Export current configuration as JSON
 * (For reference when you're preparing your files)
 */
function exportConfig() {
    return {
        teamLogo: {
            src: config.teamLogo.src,
            alt: config.teamLogo.alt
        },
        podcasts: config.podcasts.map(p => ({ url: p.url, title: p.title })),
        slogan: { text: config.slogan.text },
        mindmap: {
            src: config.mindmap.src,
            alt: config.mindmap.alt
        },
        contact: {
            email: config.contact.email.value,
            phone: config.contact.phone.value,
            address: config.contact.address.value
        }
    };
}

// Make updateConfig accessible from console for testing
window.updateConfig = updateConfig;
window.exportConfig = exportConfig;