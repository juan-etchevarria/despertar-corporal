# Guía de Configuración y Personalización - Despertar Corporal

Esta guía te permitirá realizar cambios básicos en el sitio web, como actualizar textos, imágenes, enlaces de redes sociales y el logotipo.

---

## 1. Cambio de Textos
La mayoría de los textos del sitio se encuentran directamente en los archivos de las páginas dentro de la carpeta `frontend/src/pages/`.

### Pasos para cambiar un texto:
1. Ve a la carpeta `frontend/src/pages/`.
2. Abre el archivo de la página que quieras editar:
   - **Inicio:** `HomePage.jsx`
   - **Filosofía:** `PhilosophyPage.jsx`
   - **Contacto:** `ContactPage.jsx`
3. Busca el texto que deseas cambiar (puedes usar `Cmd+F` o `Ctrl+F` para buscar palabras clave).
4. Edita el texto entre las etiquetas HTML (por ejemplo, entre `<h1>...</h1>`, `<p>...</p>`, o dentro de las comillas de un objeto).
5. Guarda el archivo y los cambios se verán reflejados automáticamente si el servidor está corriendo.

> [!TIP]
> En `HomePage.jsx`, algunos textos como las "Clases Destacadas" están organizados en una lista llamada `classes`. Puedes editar los campos `title` y `description` allí mismo.

---

## 2. Cambio de Imágenes
Las imágenes se manejan de dos formas en este proyecto: mediante **enlaces externos (URLs)** o **archivos locales**.

### Imágenes con URL (Unsplash, etc.):
En `HomePage.jsx`, verás enlaces como `https://images.unsplash.com/...`. 
- Simplemente reemplaza esa URL por la de la nueva imagen que desees usar.

### Imágenes Locales:
Si prefieres usar una imagen propia guardada en tu computadora:
1. Guarda la imagen en la carpeta `frontend/src/assets/`.
2. En el archivo `.jsx` correspondiente, impórtala de la siguiente manera:
   ```javascript
   import miImagen from '../assets/nombre-de-tu-imagen.jpg';
   ```
3. Úsala en la etiqueta `<img>` de esta forma:
   ```javascript
   <img src={miImagen} alt="Descripción" />
   ```

---

## 3. Redes Sociales en el Footer
Los enlaces a Instagram, YouTube y WhatsApp se encuentran en el componente del pie de página.

### Cómo cambiar los enlaces:
1. Abre el archivo `frontend/src/components/Footer.jsx`.
2. Busca la sección que contiene los enlaces (líneas 13-15 aproximadamente).
3. Reemplaza el símbolo `#` por la URL de tu perfil:
   ```jsx
   <a href="https://instagram.com/tu_perfil" className="...">Instagram</a>
   <a href="https://youtube.com/@tu_canal" className="...">YouTube</a>
   <a href="https://wa.me/tu_numero" className="...">WhatsApp</a>
   ```

---

## 4. Cambio del Logo
El logo actual se encuentra en `frontend/src/assets/logo.png`.

### Para cambiarlo rápidamente:
1. Toma tu nuevo logo y renómbralo exactamente como `logo.png`.
2. Reemplaza el archivo existente en `frontend/src/assets/logo.png` con el nuevo.
3. El sitio se actualizará automáticamente en todas las secciones donde aparece (Header y Footer).

### Si el nuevo logo tiene un nombre o formato diferente (ej. `nuevo-logo.svg`):
1. Guárdalo en `frontend/src/assets/`.
2. Abre `frontend/src/components/Navbar.jsx` y `frontend/src/components/Footer.jsx`.
3. Actualiza la línea de importación:
   ```javascript
   import logo from '../assets/nuevo-logo.svg';
   ```

---

## 5. Otros Ajustes Rápidos
- **Formulario de Contacto:** El formulario está en `ContactPage.jsx`. Si necesitas cambiar los campos o el mensaje de éxito, ese es el lugar.
- **Colores:** Los estilos utilizan Tailwind CSS. Puedes cambiar colores buscando clases como `bg-stone-900`, `text-stone-600`, etc.
- **Favicon:** Para cambiar el icono que aparece en la pestaña del navegador, reemplaza el archivo `favicon.ico` o `favicon.png` dentro de la carpeta `frontend/public/`.

---

> [!IMPORTANT]
> Recuerda que cada vez que guardas un archivo, el servidor de desarrollo (`npm run dev`) recargará la página para mostrarte los cambios. Si cometes un error de sintaxis, la pantalla se pondrá roja con un mensaje de error; solo deshaz el cambio o corrígelo para que todo vuelva a la normalidad.
