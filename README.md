Amigo Secreto

Aplicación web estática (HTML/CSS/JS) para ingresar nombres en una lista y realizar un sorteo aleatorio del “amigo secreto”. Sin dependencias, sin frameworks, lista para abrir en el navegador o publicar en GitHub Pages.

Contenidos

Características

Estructura del proyecto

Requisitos

Instalación y ejecución

Uso

Accesibilidad y UX

Despliegue (GitHub Pages)

Solución de problemas

Roadmap

Contribución

Licencia

Características

Agregar nombres mediante campo de texto y botón Añadir (o tecla Enter).

Validación de entrada: alerta si el campo está vacío.

Visualización en lista: todos los nombres ingresados aparecen bajo el input.

Eliminación individual de nombres (botón × en cada elemento).

Sorteo aleatorio con un clic en Sortear amigo, mostrando el ganador en pantalla.

UX rápida: foco vuelve al input tras acciones comunes; soporte Enter para agilizar.

Estructura del proyecto
.
├─ index.html        # Estructura del documento y enlaces a CSS/JS
├─ style.css         # Estilos (CSS variables + layout responsivo)
├─ app.js            # Lógica: agregar/validar/listar/sortear
└─ assets/           # Recursos estáticos (imágenes, íconos)
   ├─ amigo-secreto.png
   └─ play_circle_outline.png

Requisitos

Navegador moderno (Chrome, Edge, Firefox, Safari).

No requiere Node ni paquetes externos.

Instalación y ejecución
Opción 1 — Abrir directo

Descarga/clona el repositorio.

Abre index.html con doble clic en tu navegador.

Opción 2 — VS Code (Live Server)

Instala la extensión Live Server.

Abre la carpeta del proyecto en VS Code.

Clic derecho en index.html → Open with Live Server.

Opción 3 — Servidor local simple

Python

python3 -m http.server 5173
# Abre http://localhost:5173


Node (npx)

npx serve .
# Te indicará la URL local (ej. http://localhost:3000)

Uso

Escribe un nombre en el campo de texto.

Presiona Añadir (o Enter). Se agregará a la lista inferior.

Repite con todos los participantes.

Presiona Sortear amigo: se seleccionará aleatoriamente un nombre y se mostrará el ganador.

Tip: puedes eliminar cualquier nombre con el botón × al lado del ítem.
Si intentas añadir un nombre vacío, el sistema mostrará una alerta solicitando un nombre válido.

Accesibilidad y UX

La lista de resultado usa aria-live="polite" para anunciar el ganador sin recargar la página.

La lista de nombres se expone como role="list" para mejorar la semántica.

Se devuelve el foco al input tras acciones comunes (mejorando flujo con teclado).

Despliegue (GitHub Pages)

En GitHub: Settings → Pages

Source: Deploy from a branch

Branch: main — Folder: /root → Save

Espera a que se genere el sitio y utiliza la URL pública.

Solución de problemas

No aparece el ganador
Verifica que app.js está referenciado en index.html y con defer:

<script src="app.js" defer></script>


No se ven las imágenes/íconos
Revisa la ruta y nombres en la carpeta assets/.

No agrega con Enter
Asegúrate de estar con el foco en el input de nombres.

Doble nombre
El sistema bloquea duplicados exactos (insensible a mayúsculas). Si requieres permitirlos, ajusta la validación en app.js.

Roadmap

 Persistencia con localStorage (recordar lista entre sesiones).

 Reglas opcionales: mínimo 2 nombres para sortear.

 Animación breve de sorteo (tipo “bombo”).

 Exportar CSV de la lista de participantes.

 i18n (ES/EN/PT) y mensajes configurables.

Contribución

Crea una rama: git checkout -b feature/tu-mejora

Aplica cambios y commitea: git commit -m "feat: tu mejora"

Push a tu rama: git push -u origin feature/tu-mejora

Abre un Pull Request con descripción clara (qué, por qué, cómo probar).

Licencia

MIT — Libre uso, modificación y distribución. 
