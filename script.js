// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('has-scrolled');
    } else {
        navbar.classList.remove('has-scrolled');
    }
});

// Initial trigger for scroll pos on load
if (window.scrollY > 50) {
    navbar.classList.add('has-scrolled');
}

// Close mobile menu when link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Intersection Observer for Scroll Animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it comes fully into view
    });

    // Select elements to animate
    const animatables = document.querySelectorAll('.animate-up, .animate-scale, .animate-left, .animate-right');
    animatables.forEach(el => observer.observe(el));
};

// Start observing on load
window.addEventListener('DOMContentLoaded', () => {
    // Add in-view to hero text immediately
    const heroElements = document.querySelectorAll('.hero .animate-up, .hero .animate-scale');
    setTimeout(() => {
        heroElements.forEach(el => el.classList.add('in-view'));
    }, 100);

    observeElements();
});

// Menu Tabs Logic
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanes = document.querySelectorAll('.menu-pane');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panes
        menuTabs.forEach(t => t.classList.remove('active'));
        menuPanes.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding pane
        const targetId = tab.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
            targetPane.classList.add('active');

            // Re-trigger animations in the new pane
            const animateItems = targetPane.querySelectorAll('.animate-scale');
            animateItems.forEach(item => {
                item.classList.remove('in-view');
                // Small delay to allow reflow
                setTimeout(() => {
                    item.classList.add('in-view');
                }, 50);
            });
        }
    });
});

// Gallery Animations (Staggered Delays)
const galleryItems = document.querySelectorAll('.gallery-section .masonry-item.animate-up');
galleryItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    item.style.transitionDuration = '0.7s';
});

// Lightbox Gallery Logic
const masonryItems = document.querySelectorAll('.masonry-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImgIndex = 0;
const galleryData = Array.from(masonryItems).map(item => ({
    src: item.querySelector('img').src,
    caption: item.querySelector('.gallery-text').textContent
}));

masonryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImgIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // allow scrolling
});

lightbox.addEventListener('click', (e) => {
    // Close lightbox if clicking outside the image or nav buttons
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

const updateLightbox = () => {
    lightboxImg.src = galleryData[currentImgIndex].src;
    if (lightboxCaption) {
        lightboxCaption.textContent = galleryData[currentImgIndex].caption;
    }
};

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex - 1 + galleryData.length) % galleryData.length;
        updateLightbox();
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex + 1) % galleryData.length;
        updateLightbox();
    });
}

// Swipe support for mobile
let touchstartX = 0;
let touchendX = 0;

lightbox.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchendX < touchstartX - 50) {
        // Swipe left -> next
        if (lightboxNext) lightboxNext.click();
    }
    if (touchendX > touchstartX + 50) {
        // Swipe right -> prev
        if (lightboxPrev) lightboxPrev.click();
    }
}
