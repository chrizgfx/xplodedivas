document.addEventListener('DOMContentLoaded', () => {
    // mobile menu toggle
    const navToggle = document.querySelector('.navToggle');
    const navLinks = document.querySelector('.navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const galleryGrid = document.querySelector('.galleryGrid');
    const images = [
        'assets/images/img2.png',
        'assets/images/img8.png',
        'assets/images/img4.png',
        'assets/images/img5.png',
        'assets/images/img6.png',
        'assets/images/img7.png',
    ];

    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightboxContent">
            <button class="lightboxClose">&times;</button>
            <img src="" alt="Gallery Image">
        </div>
    `;
    document.body.appendChild(lightbox);

    images.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'galleryItem';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Gallery Image ${index + 1}`;
        img.loading = 'lazy';

        galleryItem.addEventListener('click', () => {
            lightbox.querySelector('img').src = imagePath;
            lightbox.classList.add('active');
        });

        const overlay = document.createElement('div');
        overlay.className = 'galleryOverlay';
        overlay.innerHTML = '<i class="fas fa-expand"></i>';

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        galleryGrid.appendChild(galleryItem);
    });

    // close box
    lightbox.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox') || 
            e.target.classList.contains('lightboxClose')) {
            lightbox.classList.remove('active');
        }
    });

    // close box with excape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });

    // contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // parallax effect
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * .5;
            hero.style.backgroundPositionY = `${rate}px`; //10vw, 20vh, 150 
        } else {
            hero.style.backgroundPositionY = 'center';
        }
    });

    // back to top
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
