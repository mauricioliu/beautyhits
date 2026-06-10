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

## Veredicto del cliente
> _Pendiente_ — completar tras revisión: ¿qué se aprueba, qué se ajusta?
> Ej. "El hero y la paleta sí; quiero el footer más simple."

## Siguiente paso si se aprueba
No promover esta maqueta a producción tal cual. Trasladar las decisiones validadas a un
**tema de Shopify** real (Liquid/Online Store 2.0) con productos, pagos y Webpay reales.
