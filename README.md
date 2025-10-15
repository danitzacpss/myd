# 💕 Invitación de Boda - Michael & Danitza

Invitación digital elegante y minimalista para la boda de Michael & Danitza el 13 de Febrero de 2026.

## 🎨 Características

- ✨ **Diseño elegante** con tonos rosados y beige
- ⏰ **Cuenta regresiva** en tiempo real hasta la boda
- 📅 **Botón para agendar** directamente en el calendario
- 📍 **Integración con Google Maps** para el lugar del evento
- 🖼️ **Galería de fotos** interactiva con lightbox
- 🎁 **Lista de regalos** (transferencia bancaria y código Falabella)
- 📝 **Formulario RSVP** conectado a Google Sheets
- 🎵 **Música de fondo** con control de reproducción
- 📱 **Diseño responsive** (móvil y desktop)

## 🚀 Tecnologías

- **Vite** - Build tool ultra rápido
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **TailwindCSS** - Estilos utility-first
- **Google Apps Script** - Backend para formulario

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## ⚙️ Configuración

### 1. Google Sheets para Formulario RSVP

1. Crea una nueva hoja de cálculo en Google Sheets
2. Ve a **Extensiones > Apps Script**
3. Copia el contenido de `google-apps-script.js` y pégalo en el editor
4. Haz clic en **Implementar > Nueva implementación**
5. Selecciona tipo: **Aplicación web**
6. Configuración:
   - Ejecutar como: **Tu cuenta**
   - Quién tiene acceso: **Cualquier persona**
7. Copia la **URL de la aplicación web**
8. Pega la URL en `src/components/RSVPModal.tsx`:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'TU_URL_AQUI'
   ```

### 2. Música de Fondo (Opcional)

1. Coloca tu archivo MP3 en `public/music/wedding-song.mp3`
2. O actualiza la ruta en `src/components/MusicPlayer.tsx`:
   ```typescript
   const musicUrl = '/music/tu-cancion.mp3'
   ```

## 📂 Estructura del Proyecto

```
myd/
├── public/
│   ├── images/          # Imágenes de la galería y hero
│   ├── music/           # Archivo de música (opcional)
│   └── heart.svg        # Favicon
├── src/
│   ├── components/      # Componentes React
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── EventDetails.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── GiftRegistry.tsx
│   │   ├── Recommendations.tsx
│   │   ├── RSVPModal.tsx
│   │   └── MusicPlayer.tsx
│   ├── hooks/          # Custom hooks
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globales
├── google-apps-script.js  # Script para Google Sheets
└── package.json
```

## 🎯 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

```js
colors: {
  'wedding-pink': { ... },
  'wedding-beige': { ... }
}
```

### Fecha de la Boda

Actualiza la fecha en `src/components/Countdown.tsx`:

```typescript
const weddingDate = new Date('2026-02-13T18:00:00').getTime()
```

### Información del Evento

Modifica los detalles en `src/components/EventDetails.tsx`

### Lista de Regalos

Actualiza la información bancaria y código Falabella en `src/components/GiftRegistry.tsx`

## 📱 Despliegue

### Netlify

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

```bash
npm run build
# Sube la carpeta 'dist' a la rama gh-pages
```

## 📝 Notas Importantes

- Las fotos se cargan desde `public/images/` - asegúrate de que estén optimizadas
- El formulario RSVP requiere configurar Google Apps Script (ver instrucciones arriba)
- La música de fondo requiere interacción del usuario debido a políticas de autoplay de los navegadores
- El diseño es completamente responsive y se adapta a móviles

## 💖 Créditos

Diseñado con amor para Michael & Danitza 💕

---

¡Esperamos que disfrutes de esta invitación digital! 🎉
