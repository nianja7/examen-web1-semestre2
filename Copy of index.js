
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