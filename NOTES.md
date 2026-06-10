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
