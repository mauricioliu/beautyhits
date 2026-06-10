# Prototipo BeautyHits — notas

## Pregunta que responde
¿Cómo debería verse el sitio de **BeautyHits**, una nueva tienda Shopify de belleza/cuidado
capilar que compite con [lpb.cl](https://lpb.cl/) y quiere un estilo *parecido*?

## Qué es esto
Maqueta **desechable** estática (HTML/CSS/JS, sin backend ni Shopify real). Sirve para
validar el look & feel antes de construir el tema Shopify de verdad. Nada persiste; el
carro, favoritos y newsletter son solo de demostración en memoria.

## Cómo correrlo (un comando)
```bash
cd ~/Projects/beautyhits
python3 -m http.server 8000
# abre http://localhost:8000
```

## Decisiones de diseño (heredadas de LPB)
- **Estética**: minimalismo de lujo, mucho espacio en blanco.
- **Paleta**: negro tinta + blanco + crema, con acento *rose gold* (#b76e79) y dorado (#c9a87c).
- **Tipografía**: Jost (display, geométrica elegante) + Inter (cuerpo).
- **Logo centrado**, nav de marcas a la izquierda, iconos (buscar/cuenta/wishlist/carro) a la derecha.
- **Secciones** (igual orden que LPB): promo bar rotativa → hero carrusel → tira de marcas →
  Best Sellers 🔥 → categorías → banner de producto → reseñas → newsletter (-10%) → footer.
- **Copy chileno**: "12 cuotas sin interés", "envío gratis en todo Chile", CLP con `$`.
- **Marca**: BEAUTY + HITS (acento rosa en "HITS").

## Imágenes
Placeholders de Unsplash (requieren internet). Reemplazar por fotografía de producto real
antes de cualquier uso.

## Variantes de diseño (switcher en `?variant=`)
La home (`index.html`) ahora es un **shell** con iframe + barra flotante para alternar diseños
(flechas o teclas ← →). Cada variante es una página autocontenida en `variants/`:

| Var | Archivo | Dirección estética |
|-----|---------|--------------------|
| **A — Salon** | `variants/a.html` | Minimalismo de lujo estilo LPB (negro/crema + rose gold). Usa `styles.css` + `app.js`. |
| **B — Editorial** | `variants/b.html` | Revista de moda: tipografía Bodoni, papel crema, acento rojo lápiz, "El Índice" numerado en vez de grilla de cards. |
| **C — Noir Chrome** | `variants/c.html` | Beauty-tech oscuro: negro, degradados cromo/oro, serif Cormorant, hero con halo, banda de specs. |
| **D — Drop** | `variants/d.html` | DTC inspirado en **dropbe.pe**: blanco, teal + dorado, pills redondeadas, trust badges, copy cercano con emojis, showcases alternados, "Tu pelo, tus reglas". Fuentes Fredoka + Hanken Grotesk. |
| **E — Quiz** | `variants/e.html` | El hero **es un test interactivo** "¿Cuál es para ti?" que recomienda un producto. Pastel, blobs, cards color-block. Estructura única. Fuentes Bricolage Grotesque + Figtree. |
| **F — Pop** | `variants/f.html` | Maximalismo neo-brutalista: bloques teal/crema, sombras duras, stickers rotados, marquee, antes/después, #RealHairDay. Fuentes Darker Grotesque + Hanken Grotesk. |

| **G — Blush** | `variants/g.html` | Rosa pastel muy redondeado (recreación de una imagen de referencia del cliente): hero panel rosa + foto, trust badges, "Nuestras marcas", Best Sellers en cards blush, banda de tecnología, 3 cards de categoría (peach/lilac/mint). Plus Jakarta Sans. |
| **H — Glam Pop** | `variants/h.html` | Recreación de la 2ª imagen de referencia (WhatsApp 2026-06-10): top bar y footer **negros**, hero **magenta** con titular en bloques negros estilo sticker (Anton), títulos brush (Permanent Marker), Best Sellers sobre fondos de color con nomenclatura Dyson real, banda negra "Tecnología que cambia tu rutina", cards de categoría con overlay de color, newsletter negra. |
| **I — Blush Glam** | `variants/i.html` | Recreación de la 3ª imagen de referencia: misma estructura de H pero en **rosa suave** — itálicas serif elegantes (Fraunces), flores acuarela en CSS, banda de tecnología rosa, footer claro. **Mobile-first**: menú drawer funcional, Best Sellers como carrusel scroll-snap, trust 2×2, CTAs a ancho completo. |
| **J — Bay** | `variants/j.html` | Inspirada en **beautybay.com** (Gen-Z bold): lima eléctrico + rosa vivo sobre blanco/negro, bordes duros 2px, stickers rotados, ticker marquee, scroller de pills de categorías, "drop de la semana" con countdown, grilla por vibra. Archivo Black + Public Sans. |
| **K — Cult** | `variants/k.html` | Inspirada en **cultbeauty.com** (curaduría editorial): blanco cálido, badges champagne (Nuevo/Exclusivo/-10%), peso 300/700 contrastado, tabs con filtro funcional, sección "En foco", marca en spotlight, "Únete al culto". Albert Sans. |
| **L — NK** | `variants/l.html` | Inspirada en **spacenk.com** (lujo calmado): campaña de temporada "Rosa Flamenco", serif Caslon + Karla, pasteles (flamingo/durazno/piscina), club de fidelidad "Club Hits", blog "Inside Hits". |
| **M — Niche** | `variants/m.html` | Inspirada en **niche-beauty.com** (minimal high-fashion): blanco/gris, grillas con bordes 1px, badge "Hits Approved", historia de marca como hero, categorías tipográficas, Magazine integrado, CTAs de texto subrayado. Manrope 300/800. |

**Todas J–M son mobile-first**: drawer funcional, carruseles scroll-snap para productos, CTAs full-width, grillas que colapsan, tap targets ≥44px. Verificadas con screenshots a 390px.

## Catálogo (2026-06-10)
Todas las variantes usan ahora el **inventario real de lpb.cl** (nombres y precios exactos
del scrape de hoy): Airwrap Coanda 2x $1.049.990 (antes $1.490.990), Airstrait $679.990
(antes $999.990), Airwrap i.d. $859.990, Coanda 2x Jasper Plum $999.990, Supersonic Nural
$699.990, Sérum Chitosan $89.990, Medicube AGE-R Pro Mini $159.990, Set 4 Pinzas $99.990.
Marcas: Color Wow · Crazy Color · Osmo · Dyson Hair · Dyson Home · Medicube · GHD.
El branding es siempre **Beauty Hits** (empresa nueva).

**Fotos de producto reales** (2026-06-10): descargadas de lpb.cl (tienda del cliente, con su
autorización) a `img/` — 10 fotos de producto que reemplazan los placeholders de Unsplash en
todas las grillas. Las fotos de *lifestyle* (heros, categorías, UGC) siguen siendo Unsplash
porque lpb.cl no tiene equivalentes; reemplazar cuando el cliente entregue fotografía de campaña.

## Validación de fidelidad (2026-06-10)
Se capturaron screenshots móviles reales de los 4 sitios fuente y se compararon contra las variantes:
- **J**: la 1ª versión (lima/rosa neo-brutalista) NO se parecía al BeautyBay real (fotografía-led, monocromo). **Rediseñada** → hero foto a sangre, tiles de campaña, pills/botones blanco-negro.
- **K**: ajustada de champagne/durazno → **blanco/negro alto contraste** + acento serif itálico (Playfair), headers en mayúsculas, bloque de registro negro (como el real).
- **L**: Space NK bloquea captura headless; ajustada según análisis de texto + identidad de marca → fondo blanco-dominante, pastel solo como acento, logo sans tracked.
- **M**: tipografía corregida → serif Marcellus en mayúsculas + script Pinyon como acento, hero foto centrado (composición editorial del real).

Variantes A–C nacen de **lpb.cl** (lujo minimalista). D–F nacen de **dropbe.pe** (DTC joven). G recrea una **imagen de referencia** (estilo rosa blush).

Links directos:
- https://mauricioliu.github.io/beautyhits/?variant=a · b · c (estilo LPB)
- https://mauricioliu.github.io/beautyhits/?variant=d · e · f (estilo DropBe)
- https://mauricioliu.github.io/beautyhits/?variant=g (rosa blush, según imagen)

## Veredicto del cliente
> _Pendiente_ — completar tras revisión: ¿qué variante gana? ¿qué secciones mezclar?
> El feedback más útil suele ser "el hero de C con el índice de B" — esa es la pista del diseño real.
> Cuando se decida: conservar la variante ganadora, borrar las otras + el shell switcher.

## Siguiente paso si se aprueba
No promover esta maqueta a producción tal cual. Trasladar las decisiones validadas a un
**tema de Shopify** real (Liquid/Online Store 2.0) con productos, pagos y Webpay reales.
