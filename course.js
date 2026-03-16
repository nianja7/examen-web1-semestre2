
const menuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const cartTrigger = document.getElementById('cart-trigger');
const cartDropdown = document.getElementById('cart-dropdown');
const closeCart = document.getElementById('close-cart');



if (navMenu && !document.querySelector('.menu-title')) {
  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'MENU';
  menuTitle.className = 'menu-title';
  navMenu.prepend(menuTitle);
}


if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('active');
    
   
    if (cartDropdown) cartDropdown.classList.remove('active');
  });
}


const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
  
  link.addEventListener('mousedown', () => {
    link.style.color = 'black';
  });

  link.addEventListener('click', () => {
  
    navMenu.classList.remove('open');
    menuBtn.classList.remove('active');
  });
});


if (cartTrigger && cartDropdown) {
  cartTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle('active');
    
  
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


window.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove('open');
    menuBtn.classList.remove('active');
  }
  if (cartDropdown.classList.contains('active') && !cartDropdown.contains(e.target) && !cartTrigger.contains(e.target)) {
    cartDropdown.classList.remove('active');
  }
});


// DROPDOWN FUNCTION
document.querySelectorAll('.dropdown-selected').forEach(selected => {
  selected.addEventListener('click', () => {
    const list = selected.nextElementSibling;
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
  });
});

// SELECT DROPDOWN ITEM
document.querySelectorAll('.dropdown-list div').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement.previousElementSibling;
    parent.textContent = item.textContent;
    item.parentElement.style.display = 'none';
  });
});

// PRICE SLIDER FUNCTION
function setupPrice(rangeId, minId, maxId, lineId) {
  const range = document.getElementById(rangeId);
  const minPrice = document.getElementById(minId);
  const maxPrice = document.getElementById(maxId);
  const line = document.getElementById(lineId);

  range.addEventListener('input', () => {
    const value = parseInt(range.value);
    minPrice.textContent = '0';
    maxPrice.textContent = value.toLocaleString();
    const percent = (value / range.max) * 100;
    line.style.width = percent + '%';
  });
}

// Setup sliders
setupPrice('price-range-1', 'min-price-1', 'max-price-1', 'price-line-1');
setupPrice('price-range-2', 'min-price-2', 'max-price-2', 'price-line-2');

// CLEAR ALL
document.getElementById('clear-all').addEventListener('click', () => {
  document.getElementById('lang-selected').textContent = '🌐';
  document.getElementById('tech-selected').textContent = 'All technologies';
  document.getElementById('level-selected').textContent = 'All levels';

  document.getElementById('price-range-1').value = 0;
  document.getElementById('min-price-1').textContent = '0';
  document.getElementById('max-price-1').textContent = '130,000';
  document.getElementById('price-line-1').style.width = '0';

  document.getElementById('price-range-2').value = 0;
  document.getElementById('min-price-2').textContent = '0';
  document.getElementById('max-price-2').textContent = '130,000';
  document.getElementById('price-line-2').style.width = '0';

  document.getElementById('search-input').value = '';
});