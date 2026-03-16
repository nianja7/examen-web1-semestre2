// --- SÉLECTEURS ---
const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const cartTrigger = document.getElementById('cart-trigger');
const cartDropdown = document.getElementById('cart-dropdown');
const closeCart = document.getElementById('close-cart');

// --- PRÉPARATION DU MENU MOBILE ---
// On ajoute le titre "MENU" dynamiquement en haut de la navigation
if (navMenu && !document.querySelector('.menu-title')) {
  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'MENU';
  menuTitle.className = 'menu-title';
  navMenu.prepend(menuTitle); // Ajoute au tout début du nav
}

// --- LOGIQUE DES 3 POINTS (MENU MOBILE) ---
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('active');
    
    // Fermer le panier si on ouvre le menu
    if (cartDropdown) cartDropdown.classList.remove('active');
  });
}

// --- LOGIQUE DES LIENS NAV ---
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
  // Changement de couleur au toucher/clic (Noir)
  link.addEventListener('mousedown', () => {
    link.style.color = 'black';
  });

  link.addEventListener('click', () => {
    // Fermeture automatique après clic
    navMenu.classList.remove('open');
    menuBtn.classList.remove('active');
  });
});

// --- LOGIQUE DU PANIER ---
if (cartTrigger && cartDropdown) {
  cartTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle('active');
    
    // Fermer le menu mobile si on ouvre le panier
    navMenu.classList.remove('open');
    menuBtn.classList.remove('active');
  });
}

if (closeCart) {
  closeCart.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.remove('active');
  });
}

// --- FERMETURE AU CLIC EXTÉRIEUR ---
window.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove('open');
    menuBtn.classList.remove('active');
  }
  if (cartDropdown.classList.contains('active') && !cartDropdown.contains(e.target) && !cartTrigger.contains(e.target)) {
    cartDropdown.classList.remove('active');
  }
});
/* ============================================================
   LOGIQUE DU SITE BLOG - TOKIMAHERY RAMAROZAKA
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GESTION DE LA NEWSLETTER
    const newsletterForm = document.querySelector('.news-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const button = newsletterForm.querySelector('button');
            
            if (emailInput.value) {
                // Simulation d'envoi
                const originalText = button.textContent;
                button.textContent = "THANK YOU!";
                button.style.backgroundColor = "#16a34a"; // Vert succès
                
                console.log(`Email enregistré: ${emailInput.value}`);
                
                // Réinitialisation après 3 secondes
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = ""; // Retour au rouge bordeaux
                    emailInput.value = "";
                }, 3000);
            }
        });
    }

    // 2. ANIMATION DES ARTICLES AU SCROLL (Apparition douce)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach(item => {
        // État initial pour l'animation
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.6s ease-out";
        observer.observe(item);
    });

    // 3. INTERACTIVITÉ DES TAGS
    // Optionnel : Vous pouvez ajouter un filtrage par tag ici
    const tags = document.querySelectorAll('.tag-blue');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent.trim();
            console.log(`Filtrage par tag : ${tagName}`);
            
            // Effet visuel au clic
            tags.forEach(t => t.style.opacity = "0.5");
            this.style.opacity = "1";
            
            // Note : Pour un vrai filtrage, cachez les .post-item 
            // qui ne contiennent pas ce tag.
        });
    });

    // 4. GESTION DES ARCHIVES (Simulation de clic)
    const archiveRows = document.querySelectorAll('.archive-row');
    archiveRows.forEach(row => {
        row.style.cursor = "pointer";
        row.addEventListener('click', () => {
            const month = row.querySelector('span:first-child').textContent;
            alert(`Chargement des archives pour : ${month}`);
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.nav-slider');
    const activeItem = document.querySelector('.page-item.active');

    // Positionne le slider automatiquement au chargement de la page
    if (activeItem && slider) {
        slider.style.left = activeItem.offsetLeft + "px";
    }

    // Petit effet visuel lors du clic avant de changer de page
    document.querySelectorAll('.page-item').forEach(item => {
        item.addEventListener('click', function() {
            if (!this.classList.contains('arrow')) {
                slider.style.left = this.offsetLeft + "px";
            }
        });
    });
});


