# Álbum Virtual — FIFA World Cup Russia 2018

Álbum de figuritas virtual para el Mundial Rusia 2018, desarrollado con React + Firebase.
Permite registrar figuritas obtenidas, marcar repetidas, buscar por equipo, nombre o código, y sincronizar el progreso en la nube.

## Características

- 670 figuritas totales: 1 PANINI + 19 INTRO + 640 equipos (32 × 20) + 10 LEGENDS
- 50 figuritas brillantes: 1 PANINI + 7 INTRO + 32 escudos + 10 LEGENDS
- Búsqueda por código de equipo, nombre de jugador o número de figurita
- Sincronización en tiempo real con Firebase Firestore
- Soporte offline con fallback a localStorage
- Modo oscuro / claro
- Exportar / importar progreso como JSON
- Navegación entre los demás álbumes del ecosistema

## Estructura de archivos

| Archivo | Rol |
|---|---|
| `albumConfig_RUS2018.js` | Configuración central: id, título, equipos, secciones, grupos, paleta |
| `playerNames_RUS2018.js` | Nombres de jugadores por equipo |
| `teamThemes_RUS2018.js` | Gradientes visuales por equipo usando clases Tailwind |
| `firebase_RUS2018.js` | Configuración de Firebase y funciones de lectura/escritura del progreso |
| `panini_virtual_album_rus2018_app.jsx` | Componente React principal — toda la UI y lógica del álbum |
| `index.html` | Punto de entrada HTML — carga dependencias CDN y transpila con Babel |

Los archivos `albumConfig_2022.js`, `playerNames_2022.js`, `teamThemes_2022.js`, `firebase_2022.js` y `panini_virtual_album_2022_app.jsx` son residuos del template de origen (Qatar 2022) y no se utilizan en producción.

## Álbum ID en Firebase

El campo `id` en `albumConfig_RUS2018.js` es `paniniRussia2018`.
Esto determina la clave en Firestore (`albumProgress/paniniRussia2018`) y en localStorage.

## Otros álbumes del ecosistema

| Álbum | Repositorio |
|---|---|
| Mundial 2026 | [albumvirtual](https://facuca86.github.io/albumvirtual/) |
| Mundial 2022 · Qatar | [albumvirtual-2022](https://facuca86.github.io/albumvirtual-2022/) |
| Club World Cup 2025 | [albumvirtual-cwc25](https://facuca86.github.io/albumvirtual-cwc25/) |
| **Mundial 2018 · Rusia** | **este repositorio** |

## Documentación para clonar

Este repositorio fue creado a partir del proyecto madre (Qatar 2022).
Para crear un álbum de un nuevo torneo, consultar [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md).
Clonar siempre a un nuevo repositorio y nunca modificar el proyecto madre.
