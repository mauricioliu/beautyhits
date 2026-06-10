/* PROTOTYPE — BeautyHits interactions. In-memory only, no persistence, no backend. */

// ---- Product data (fake) ----
const CLP = n => '$' + n.toLocaleString('es-CL');
const products = [
  { brand: 'Dyson', name: 'Airwrap™ Coanda 2x™ – Liso + Ondulado (Ceramic Pink/Rose Gold)', price: 1049990, was: 1490990, rating: 4.9, reviews: 312, badge: 'Best Seller', img: '../img/airwrap-pink.jpg' },
  { brand: 'Dyson', name: 'Airstrait™ (Ceramic Pink/Rose Gold)', price: 679990, was: 999990, rating: 4.8, reviews: 198, badge: 'Best Seller', img: '../img/airstrait-pink.webp' },
  { brand: 'Dyson', name: 'Airwrap i.d.™ – Liso + Ondulado (Ceramic Pink/Rose Gold)', price: 859990, was: 1390990, rating: 4.7, reviews: 156, badge: null, img: '../img/airwrap-id.webp' },
  { brand: 'Dyson', name: 'Airwrap™ Coanda 2x™ (Jasper Plum)', price: 999990, was: 1490990, rating: 4.9, reviews: 87, badge: 'Último lanzamiento', img: '../img/coanda-plum.jpg' },
  { brand: 'Dyson', name: 'Supersonic™ Nural – Secador (Pink/Rose Gold)', price: 699990, was: 999990, rating: 4.8, reviews: 203, badge: null, img: '../img/supersonic-nural.webp' },
  { brand: 'Dyson', name: 'Sérum Chitosan™ Post-Style', price: 89990, was: null, rating: 4.8, reviews: 64, badge: null, img: '../img/serum-chitosan.webp' },
  { brand: 'Medicube', name: 'AGE-R Booster Pro Mini (Blanco)', price: 159990, was: null, rating: 4.6, reviews: 88, badge: null, img: '../img/medicube-mini.webp' },
  { brand: 'Dyson', name: 'Set de 4 Pinzas para el Cabello', price: 99990, was: 109990, rating: 4.9, reviews: 167, badge: 'Oferta', img: '../img/pinzas.webp' },
 { brand: 'GHD', name: 'ghd Platinum+ Styler – Plancha 1"', price: 455990, was: 599990, rating: 4.8, reviews: 143, badge: 'Oferta', img: '../img/ghd-platinum.webp' },
 { brand: 'Color Wow', name: 'Dream Coat – Spray Anti-Frizz 500 ml', price: 69990, was: null, rating: 4.9, reviews: 421, badge: 'Best Seller', img: '../img/dreamcoat.jpg' },
 { brand: 'Dyson', name: 'Kit Airwrap Coanda 2x + Airstrait™ (Pink/Rose Gold)', price: 1499990, was: 1899990, rating: 4.9, reviews: 41, badge: 'Kit', img: '../img/kit-dyson.webp' },
 { brand: 'Crazy Color', name: 'Pinkissimo – Tinte Semipermanente', price: 9990, was: 14990, rating: 4.7, reviews: 234, badge: 'Oferta', img: '../img/crazy-pinkissimo.jpg' },
];

// ---- Render products ----
const grid = document.getElementById('productGrid');
grid.innerHTML = products.map((p, i) => `
  <article class="card" data-i="${i}">
    <div class="card__media">
      ${p.badge ? `<span class="card__badge ${p.badge === 'Sale' ? 'card__badge--sale' : ''}">${p.badge}</span>` : ''}
      <button class="card__wish" aria-label="Favorito">♡</button>
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <button class="card__add">Añadir al carro</button>
    </div>
    <p class="card__brand">${p.brand}</p>
    <h3 class="card__name">${p.name}</h3>
    <p class="card__stars">★★★★★ <small>(${p.reviews})</small></p>
    <p class="card__price">
      <b>${CLP(p.price)}</b>
      ${p.was ? `<s>${CLP(p.was)}</s>` : ''}
    </p>
    <p class="card__cuotas">o 12x de ${CLP(Math.round(p.price / 12))} sin interés</p>
  </article>
`).join('');

// ---- Cart ----
let cart = 0;
const cartCount = document.getElementById('cartCount');
grid.addEventListener('click', e => {
  if (e.target.classList.contains('card__add')) {
    cart++;
    cartCount.textContent = cart;
    e.target.textContent = '✓ Añadido';
    setTimeout(() => { e.target.textContent = 'Añadir al carro'; }, 1100);
  }
  if (e.target.classList.contains('card__wish')) {
    e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
  }
});

// ---- Reviews ----
const reviews = [
  { stars: 5, text: '“El Airwrap superó mis expectativas. Llegó en 24 horas y el empaque es precioso. Volveré a comprar.”', author: 'Valentina R.', tag: 'Compra verificada' },
  { stars: 5, text: '“Por fin una tienda con stock real de Dyson en Chile y con cuotas sin interés. Atención impecable por WhatsApp.”', author: 'Camila S.', tag: 'Compra verificada' },
  { stars: 5, text: '“El Dream Coat de Color Wow es magia pura. BeautyHits se volvió mi tienda de cabecera.”', author: 'Antonia M.', tag: 'Compra verificada' },
];
document.getElementById('reviews').innerHTML = reviews.map(r => `
  <div class="review">
    <p class="review__stars">${'★'.repeat(r.stars)}</p>
    <p>${r.text}</p>
    <p class="review__author">${r.author} <span>· ${r.tag}</span></p>
  </div>
`).join('');

// ---- Hero carousel ----
const slides = [...document.querySelectorAll('.hero__slide')];
const dotsWrap = document.getElementById('heroDots');
let hero = 0;
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.className = i === 0 ? 'is-active' : '';
  b.addEventListener('click', () => goHero(i));
  dotsWrap.appendChild(b);
});
const dots = [...dotsWrap.children];
function goHero(i) {
  slides[hero].classList.remove('is-active');
  dots[hero].classList.remove('is-active');
  hero = i;
  slides[hero].classList.add('is-active');
  dots[hero].classList.add('is-active');
}
setInterval(() => goHero((hero + 1) % slides.length), 5500);

// ---- Promo bar rotation ----
const promo = [...document.querySelectorAll('#promoTrack span')];
let pi = 0;
promo[0].classList.add('is-active');
setInterval(() => {
  promo[pi].classList.remove('is-active');
  pi = (pi + 1) % promo.length;
  promo[pi].classList.add('is-active');
}, 3500);

// ---- Mobile menu ----
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('is-open');
});

// ---- Newsletter ----
document.getElementById('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('newsMsg').textContent = '¡Gracias! Revisa tu correo para el código HITS10. ✨';
  e.target.reset();
});
