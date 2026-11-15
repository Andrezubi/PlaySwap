# Tasks.md — Organización y limpieza de recursos Frontend

## Objetivo general

Realizar una reorganización completa de todos los archivos y recursos relacionados con el frontend del proyecto de juegos desarrollado en **Kotlin Multiplatform (KMP) con Compose Multiplatform**.

El objetivo es establecer una estructura de carpetas clara, consistente y escalable, donde cada archivo se encuentre en su ubicación correspondiente según su función y utilización dentro del proyecto.

La reorganización debe respetar la arquitectura existente y las convenciones oficiales de Kotlin Multiplatform y Compose Multiplatform.

## 1. Análisis inicial del proyecto

Antes de realizar cualquier modificación:

- Analizar toda la estructura actual del proyecto.
- Identificar todos los módulos y directorios relacionados con el frontend.
- Revisar todos los archivos de recursos, independientemente de su extensión.
- Identificar imágenes, iconos, ilustraciones, fondos, fuentes, animaciones, sonidos, archivos vectoriales y demás recursos visuales.
- Revisar los componentes Compose, pantallas, temas, estilos y configuraciones de recursos.
- Identificar archivos duplicados, recursos sin referencias, archivos temporales y elementos aparentemente innecesarios.
- Comprobar qué recursos están siendo utilizados y desde dónde se referencian.

No mover ni eliminar archivos antes de completar este análisis.

## 2. Reorganización de recursos

Organizar los recursos siguiendo una estructura coherente con Kotlin Multiplatform y Compose Multiplatform.

Tomar como referencia la siguiente distribución, adaptándola a la arquitectura real del proyecto:

```text
composeApp/
└── src/
    ├── commonMain/
    │   ├── composeResources/
    │   │   ├── drawable/
    │   │   │   ├── backgrounds/
    │   │   │   ├── icons/
    │   │   │   ├── illustrations/
    │   │   │   ├── logos/
    │   │   │   └── game_assets/
    │   │   │
    │   │   ├── font/
    │   │   ├── files/
    │   │   │   ├── animations/
    │   │   │   ├── sounds/
    │   │   │   └── other/
    │   │   │
    │   │   └── values/
    │   │
    │   └── kotlin/
    │       └── ...
    │
    ├── androidMain/
    │   └── ...
    │
    ├── iosMain/
    │   └── ...
    │
    └── commonTest/
        └── ...
```

Esta estructura es una referencia, no una obligación de crear todas las carpetas. Crear únicamente las que sean necesarias.

### Clasificación de archivos

Cada recurso debe ubicarse según su propósito:

- **Backgrounds:** fondos de pantallas, escenarios y secciones.
- **Icons:** iconos de navegación, acciones y elementos de interfaz.
- **Illustrations:** ilustraciones y elementos gráficos decorativos.
- **Logos:** logotipos e identidad visual.
- **Game assets:** sprites, personajes, objetos, elementos de juego y gráficos.
- **Font:** tipografías y variantes tipográficas.
- **Animations:** archivos de animación y recursos relacionados.
- **Sounds:** efectos de sonido y archivos de audio.
- **Values:** recursos de configuración y valores compartidos cuando corresponda.

No introducir recursos específicos de Android o iOS dentro de `commonMain` si no son compatibles con el uso multiplataforma.

## 3. Organización del código frontend

Revisar también la organización de los archivos Kotlin relacionados con la interfaz.

Separar correctamente, según la arquitectura existente:

- Screens: pantallas completas.
- Components: componentes reutilizables.
- Navigation: navegación y rutas.
- Theme: colores, tipografías, formas y estilos.
- UI: elementos visuales compartidos.
- Animations: lógica y componentes de animación.
- Game: componentes visuales y elementos específicos de los juegos.

Evitar duplicar componentes o mantener implementaciones visuales equivalentes en diferentes ubicaciones.

No crear capas innecesarias ni modificar la lógica de negocio.

## 4. Identificación de archivos innecesarios

Realizar una auditoría de todos los archivos existentes.

Identificar:

- Recursos duplicados.
- Imágenes que no se utilizan.
- Iconos reemplazados por otras versiones.
- Archivos temporales.
- Recursos antiguos que ya no pertenecen a ninguna pantalla.
- Componentes sin referencias.
- Archivos de prueba que no corresponden a pruebas automatizadas.
- Recursos que se encuentran fuera de las carpetas correspondientes.

**IMPORTANTE:** No eliminar automáticamente ningún archivo solamente porque no tenga referencias directas.

Antes de considerar un recurso innecesario, comprobar que no se utilice mediante referencias dinámicas, generación de recursos, configuración de Gradle, reflexión o mecanismos propios de Compose Multiplatform.

## 5. Actualización de referencias

Después de reorganizar los archivos:

- Actualizar todas las referencias a los recursos movidos.
- Corregir imports.
- Actualizar referencias generadas por Compose Resources cuando corresponda.
- Revisar rutas de archivos y configuraciones de Gradle.
- Comprobar que todas las pantallas sigan mostrando correctamente sus imágenes, iconos y demás elementos.
- Eliminar imports y referencias obsoletas.

No cambiar innecesariamente nombres de recursos ni identificadores públicos que puedan afectar otras partes del proyecto.

## 6. Limpieza y validación

Una vez terminada la reorganización:

1. Comprobar que no existan recursos duplicados innecesarios.
2. Verificar que todos los recursos utilizados estén correctamente ubicados.
3. Ejecutar las tareas de compilación correspondientes a los targets disponibles.
4. Corregir errores ocasionados por los movimientos.
5. Verificar que las pantallas y componentes frontend sigan funcionando.
6. Comprobar que no se hayan eliminado recursos necesarios.
7. Revisar que la estructura final sea fácil de mantener y ampliar.

No modificar configuraciones de dependencias ni versiones de Kotlin o Compose salvo que sea estrictamente necesario para corregir un problema derivado de la reorganización.

## 7. Informe final obligatorio

Al terminar, entregar un informe que incluya:

- Estructura anterior del proyecto.
- Nueva estructura de carpetas.
- Archivos y recursos reorganizados.
- Archivos duplicados identificados.
- Archivos considerados innecesarios.
- Archivos eliminados y justificación de cada eliminación.
- Referencias e imports actualizados.
- Archivos que no pudieron clasificarse con seguridad.
- Resultados de las compilaciones y validaciones realizadas.

## Restricciones importantes

- No modificar el diseño visual de las pantallas.
- No modificar la lógica funcional de los juegos.
- No alterar el comportamiento de las animaciones.
- No eliminar recursos sin verificar previamente su utilización.
- No mover archivos de backend, configuración o lógica de negocio.
- Respetar la arquitectura Kotlin Multiplatform.
- Priorizar `commonMain` para los recursos y componentes verdaderamente compartidos.
- Mantener las implementaciones específicas de cada plataforma en sus respectivos source sets.
- No crear carpetas vacías ni estructuras innecesariamente complejas.

**Resultado esperado:** un frontend completamente organizado, con recursos clasificados, archivos ubicados correctamente, referencias actualizadas y una estructura limpia que permita identificar fácilmente qué archivos se utilizan y cuáles pueden eliminarse con seguridad.