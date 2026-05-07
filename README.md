# SOY+ Food Ingredients — Sitio Web

Sitio web institucional de Alimentos Texturizados S.A. (marca SOY+).

## Estructura

```
soyplus/
├── index.html                 # Home (Hero, Nosotros, Calidad, Contacto)
├── productos.html             # Listado de productos
├── productos/
│   ├── proteina-de-soja-texturizada.html
│   ├── harina-de-soja-desgrasada.html
│   └── harina-de-soja-desgrasada-texturizada.html
├── styles.css                 # Estilos compartidos
├── script.js                  # JS (menú mobile, formulario)
└── assets/
    ├── logos/                 # Logos SOY+
    ├── icons/                 # Íconos (valores, productos, contacto)
    ├── img/                   # Fotos y fondos
    └── certs/                 # Logos de certificaciones
```

## Cómo subirlo a Vercel

### Opción A — Drag & drop (la más fácil para empezar)

1. Andá a https://vercel.com/new
2. Clickeá **"Browse"** o arrastrá la carpeta `soyplus` completa.
3. Vercel detectará que es un sitio estático y lo subirá.
4. En unos segundos te dará una URL tipo `https://soyplus-abc123.vercel.app`.

### Opción B — Vía GitHub (recomendada para actualizaciones futuras)

1. Creá un repositorio nuevo en GitHub y subí esta carpeta.
2. En Vercel, "New Project" → "Import Git Repository" → seleccioná el repo.
3. Click en "Deploy".
4. Cada push a `main` redespliega automáticamente.

### Conectar tu dominio

Una vez online en Vercel:
1. Settings → Domains → "Add"
2. Escribí tu dominio (ej: `alimentostexturizados.com`).
3. Vercel te indicará qué registros DNS configurar (un registro A o CNAME).
4. Andá al panel de tu proveedor de dominio y agregá esos registros.
5. La propagación tarda entre 5 minutos y 48 horas.

---

## Configuraciones pendientes ⚠️

### 1. Formulario de contacto

El formulario está armado pero necesita un servicio que envíe los emails. Recomiendo **Formspree** (plan gratuito 50 envíos/mes):

1. Registrate en https://formspree.io
2. Creá un nuevo formulario asociado al email `ventas@alimentostexturizados.com`.
3. Te darán un endpoint tipo `https://formspree.io/f/abc123XYZ`.
4. En los **4 archivos HTML** (index.html, productos.html, y los 3 de productos/), buscá:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Y reemplazalo por tu endpoint real.

**Alternativa gratuita:** Web3Forms (https://web3forms.com), 250 envíos/mes.

### 2. Mapa de Google Maps

El iframe del mapa apunta a unas coordenadas aproximadas. Para que muestre exactamente España 137, Paraná:

1. Andá a https://www.google.com/maps
2. Buscá "España 137, Paraná, Entre Ríos".
3. Click en "Compartir" → "Insertar un mapa" → copiá el código `<iframe>`.
4. Reemplazá el iframe en los 5 archivos HTML por el nuevo.

### 3. Foto de la harina (placeholder actual)

⚠️ La foto del montón de harina dorada no se pudo cargar al armar el código. Está usando temporalmente la foto del TVP texturizada como placeholder en las páginas de Harina Desgrasada y Harina Desgrasada Texturizada.

**Para reemplazar:** subí la foto real de la harina dorada como `assets/img/producto-harina-monton.png`.

### 4. Tipografías

El sitio usa **Fredoka** y **Nunito** (Google Fonts) como reemplazo de las **Nexa Rust Sans Black** y **Nexa Bold** del diseño original.

**Para migrar a Nexa cuando consigas la licencia:**
1. Comprá la licencia web de Nexa Rust Sans Black y Nexa Bold (Fontfabric).
2. Descargá los archivos `.woff2`.
3. Colocalos en `assets/fonts/`.
4. En `styles.css`, eliminá el `@import` de Google Fonts del inicio.
5. Agregá los `@font-face` para Nexa.
6. Actualizá las variables `--font-display` y `--font-body`.

### 5. Switch de idioma EN/ESP

Está visualmente presente pero no funcional (al hacer click muestra un mensaje "próximamente"). Cuando tengas las traducciones al inglés, se puede implementar fácilmente con archivos paralelos `index-en.html`, etc., o con un sistema de i18n más sofisticado.

---

## Notas de mantenimiento

- **Editar textos:** abrí el HTML correspondiente con cualquier editor (VS Code, soy-blanco.png++, hasta el Bloc de Notas) y modificá el texto entre las etiquetas.
- **Cambiar colores:** todos los colores están en `styles.css` al inicio, en `:root`.
- **Agregar productos:** duplicá uno de los archivos en `productos/`, renombralo, editá el contenido, y agregá una nueva tarjeta en `productos.html`.

## Licencias

- Tipografías: Google Fonts (open source).
- Imágenes: propiedad de Alimentos Texturizados S.A.
