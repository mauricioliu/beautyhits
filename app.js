/* PROTOTYPE — BeautyHits interactions. In-memory only, no persistence, no backend. */

// ---- Product data (fake) ----
const CLP = n => '$' + n.toLocaleString('es-CL');
const products = [
  { brand: 'Dyson', name: 'Airwrap™ Coanda 2x', price: 599990, was: 679990, rating: 4.9, reviews: 312, badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Dyson', name: 'Supersonic™ Secador', price: 449990, was: null, rating: 4.8, reviews: 198, badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1599387737838-3a2f0e0a2b5e?auto=format&fit=crop&w=600&q=80' },
  { brand: 'GHD', name: 'Platinum+ Plancha', price: 269990, was: 299990, rating: 4.7, reviews: 156, badge: 'Sale', img: 'https://images.unsplash.com/photo-1620331317314-7c5f4e2e93b2?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Color Wow', name: 'Dream Coat Anti-Frizz', price: 34990, was: null, rating: 4.9, reviews: 421, badge: null, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Medicube', name: 'Age-R Booster Pro', price: 189990, was: 219990, rating: 4.6, reviews: 88, badge: 'Sale', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Osmo', name: 'Blinding Shine Serum', price: 18990, was: null, rating: 4.8, reviews: 203, badge: null, img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Dyson', name: 'Corrale™ Plancha', price: 379990, was: 419990, rating: 4.7, reviews: 134, badge: 'Sale', img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=600&q=80' },
  { brand: 'Color Wow', name: 'Money Masque', price: 29990, was: null, rating: 4.9, reviews: 167, badge: 'Best Seller', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' },
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
