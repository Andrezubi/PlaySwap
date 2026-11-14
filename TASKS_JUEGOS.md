# TASKS.md — Migración y reproducción visual exacta de Figma a Kotlin Compose Multiplatform

## 1. OBJETIVO PRINCIPAL

Quiero que transformes mi aplicación de diseño original a una aplicación desarrollada con **Kotlin Compose Multiplatform**, utilizando absolutamente todos los recursos, archivos, estilos y especificaciones visuales que te he proporcionado.

El proyecto debe conservar exactamente la identidad visual del diseño original de Figma.

Tengo 17 pantallas independientes y quiero que las 17 sean reconstruidas en Kotlin, respetando todos sus elementos, dimensiones, colores, imágenes, iconos, tipografías, formas, estilos y distribución.

**NO quiero un rediseño. NO quiero una versión parecida. NO quiero una simplificación. Quiero reproducir fielmente el diseño original.**

La prioridad principal es la fidelidad visual.

## 2. ANALIZA TODO ANTES DE PROGRAMAR

Antes de realizar cualquier modificación:

1. Lee completamente `AGENTS.md`.
2. Analiza la estructura actual del proyecto Android Studio.
3. Identifica la arquitectura, módulos, dependencias, convenciones y tecnologías existentes.
4. Examina todos los archivos y carpetas que te he proporcionado.
5. Descomprime y analiza completamente `FIGMA_COMPLETE_VISUAL_ASSETS.zip`, si está disponible.
6. Revisa también los archivos originales de referencia de Figma y cualquier documentación adicional.
7. Inspecciona todos los recursos visuales, incluidos los que no estén referenciados directamente en los archivos de configuración.
8. Identifica las 17 pantallas y relaciona cada una con sus recursos correspondientes.

No empieces a programar hasta comprender cómo están organizados los recursos y cómo funciona el proyecto existente.

No ignores archivos porque sus nombres sean poco descriptivos.

## 3. UTILIZA ABSOLUTAMENTE TODOS LOS RECURSOS ORIGINALES NECESARIOS

Quiero que revises y utilices todos los recursos visuales que correspondan a la aplicación.

### Imágenes
Utiliza las imágenes originales:
- Fotografías.
- Avatares.
- Portadas.
- Ilustraciones.
- Fondos.
- Logos.
- Imágenes decorativas.
- Imágenes de tarjetas.
- Recursos gráficos.

No sustituyas ninguna imagen por otra parecida.

### Iconos y símbolos
Utiliza los iconos originales:
- SVG.
- Vectores.
- Iconos de navegación.
- Iconos de botones.
- Iconos de acciones.
- Iconos de formularios.
- Iconos de configuración.
- Iconos de estados.
- Símbolos decorativos.

**PROHIBIDO utilizar emojis como iconos.**

No utilices iconos genéricos de Material Icons, Unicode o bibliotecas externas cuando exista un icono original que deba utilizarse.

Si un icono original está disponible en SVG, conserva su diseño y conviértelo o incorpóralo mediante un mecanismo compatible con Compose Multiplatform.

### Tipografías
Utiliza las fuentes originales proporcionadas.

Respeta:
- Familia.
- Peso.
- Tamaño.
- Altura de línea.
- Espaciado entre letras.
- Estilo.
- Alineación.

No sustituyas las fuentes por tipografías genéricas sin informarme.

### Colores y temas
Utiliza los valores originales de los archivos de diseño.

Respeta:
- Fondos.
- Superficies.
- Textos.
- Botones.
- Iconos.
- Bordes.
- Degradados.
- Transparencias.
- Sombras.
- Estados.
- Temas y variantes.

No crees una paleta nueva ni cambies colores para que combinen mejor.

### Formas y estilos
Reproduce:
- Radios de esquinas.
- Bordes.
- Sombras.
- Elevaciones.
- Desenfoques.
- Opacidad.
- Formas personalizadas.
- Contornos.
- Separadores.
- Recortes.
- Máscaras.
- Degradados.

## 4. CONVIERTE LOS ESTILOS A KOTLIN COMPOSE MULTIPLATFORM

Transforma las especificaciones y estilos originales al sistema correspondiente de Compose Multiplatform.

Utiliza los mecanismos adecuados para:

- `Color`
- `Dp`
- `Sp`
- `TextStyle`
- `FontFamily`
- `RoundedCornerShape`
- `BorderStroke`
- `Brush`
- `Shadow`
- `Modifier`
- `MaterialTheme`, si corresponde a la arquitectura existente.

Crea un sistema de diseño centralizado cuando sea apropiado, conservando los valores originales.

No escribas valores visuales arbitrarios en cada pantalla si pueden organizarse en recursos y componentes reutilizables.

Mantén consistencia entre todas las pantallas sin modificar sus diferencias originales.

## 5. RECONSTRUYE LAS 17 PANTALLAS

Implementa todas las pantallas que aparecen en las referencias originales.

Debes conservar:
- Todos los elementos visibles.
- Sus posiciones.
- Sus dimensiones.
- Sus proporciones.
- Sus márgenes.
- Sus separaciones.
- Sus alineaciones.
- Sus colores.
- Sus imágenes.
- Sus iconos.
- Sus tipografías.
- Sus formas.
- Sus efectos.
- Sus estilos.

No elimines elementos aunque parezcan decorativos o secundarios.

No cambies textos ni etiquetas.

No reorganices componentes.

No agregues elementos que no existan en el diseño original.

No conviertas una pantalla en una imagen estática. Cada pantalla debe estar construida mediante componentes reales de Kotlin Compose.

## 6. RESPETA LAS REFERENCIAS INDIVIDUALES DE CADA PANTALLA

Utiliza las capturas originales y los archivos `screen_01.json` a `screen_17.json` como referencias cuando estén disponibles.

Consulta también:
- `colors.json`
- `typography.json`
- `spacing.json`
- `dimensions.json`
- `shadows.json`
- `shapes.json`
- `themes.json`
- `components.json`
- `assets_inventory.json`
- `screen_asset_mapping.json`

Relaciona cada recurso con la pantalla en la que aparece.

No utilices una imagen en una pantalla simplemente porque tenga un nombre parecido. Verifica que sea el recurso correcto.

Si un elemento aparece en varias pantallas, reutiliza el recurso original correspondiente.

## 7. ESTRUCTURA DEL PROYECTO

Respeta completamente el `AGENTS.md` y la estructura existente.

No reemplaces el proyecto actual.

No crees una arquitectura diferente sin necesidad.

No elimines archivos existentes.

Crea los archivos Kotlin, componentes, recursos y clases necesarios siguiendo las convenciones del proyecto.

Organiza correctamente:
- Pantallas.
- Componentes reutilizables.
- Temas.
- Colores.
- Tipografías.
- Dimensiones.
- Iconos.
- Imágenes.
- Recursos compartidos.

Utiliza la ubicación de recursos compatible con la configuración multiplataforma existente.

Evita duplicar recursos y componentes innecesariamente.

## 8. NO INVENTES RECURSOS FALTANTES

Si falta una imagen, un icono, una fuente, un color, una especificación o cualquier otro elemento:

1. Busca primero en todos los archivos y carpetas proporcionados.
2. Comprueba si existe con otro nombre o formato.
3. Comprueba si aparece en el inventario.
4. Si no existe, registra el recurso faltante.
5. Indica a qué pantalla pertenece.
6. Explica qué archivo necesito proporcionar.
7. Continúa con las demás partes que sí se puedan implementar.

No sustituyas recursos originales por emojis, iconos genéricos, imágenes de Internet ni elementos inventados.

No presentes valores estimados como si fueran valores originales.

Si tienes que utilizar provisionalmente una aproximación para poder avanzar, identifícala claramente y déjala pendiente de aprobación. No la consideres una implementación final.

## 9. RESPONSIVE Y DIMENSIONES

Conserva las proporciones y dimensiones del diseño original.

Ten en cuenta las dimensiones de los Frames y el tamaño de pantalla de referencia.

Implementa una adaptación técnica adecuada a los dispositivos compatibles con el proyecto, sin alterar innecesariamente la apariencia de la referencia.

No cambies los tamaños, márgenes o proporciones originales arbitrariamente.

Si necesitas adaptar algún elemento por diferencias entre dispositivos, conserva el diseño de referencia y documenta el comportamiento.

## 10. COMPROBACIÓN VISUAL OBLIGATORIA

Esta fase es imprescindible.

No basta con que el código compile.

Debes ejecutar la aplicación y comparar visualmente cada pantalla implementada con su captura original de Figma.

Para cada una de las 17 pantallas:

1. Ejecuta la pantalla en el entorno de prueba adecuado.
2. Genera una captura de pantalla.
3. Compárala con la referencia original.
4. Comprueba colores, imágenes, iconos, tipografías, tamaños, posiciones, bordes, sombras y espaciados.
5. Detecta diferencias.
6. Corrige las diferencias que puedas resolver con los recursos disponibles.
7. Repite la comparación.

Comprueba especialmente:
- Elementos desplazados.
- Diferencias de tamaño.
- Imágenes incorrectas.
- Iconos sustituidos.
- Tipografías diferentes.
- Colores incorrectos.
- Espaciados distintos.
- Sombras o radios diferentes.
- Elementos omitidos.

No declares una pantalla visualmente idéntica si todavía existen diferencias importantes.

Si no puedes realizar una comparación automatizada, haz una comparación visual mediante las capturas disponibles e indica esa limitación.

## 11. COMPILACIÓN Y FUNCIONAMIENTO

Después de implementar:

- Compila el proyecto.
- Ejecuta las tareas de comprobación disponibles.
- Corrige los errores.
- Verifica que los recursos se carguen correctamente.
- Comprueba que las pantallas se puedan abrir.
- Comprueba que no existan referencias a archivos inexistentes.
- Respeta las plataformas configuradas en el proyecto.

No cambies dependencias innecesariamente.

No rompas las funcionalidades existentes.

## 12. INFORME FINAL

Crea un archivo `MIGRATION_REPORT.md` que incluya:

1. Las 17 pantallas implementadas y su estado.
2. Los archivos Kotlin creados.
3. Los archivos existentes modificados.
4. Los recursos originales utilizados.
5. Las imágenes incorporadas.
6. Los iconos incorporados.
7. Las fuentes incorporadas.
8. Los colores y estilos implementados.
9. Los componentes reutilizables creados.
10. Los recursos faltantes.
11. Las aproximaciones provisionales, si las hubiera.
12. Las diferencias visuales detectadas.
13. El resultado de las comparaciones.
14. El resultado de la compilación.
15. Los problemas que necesitan mi intervención.

No ocultes errores ni elementos pendientes.

## 13. CONDICIONES PARA DAR POR TERMINADO EL TRABAJO

El proyecto solo podrá considerarse terminado cuando:

- Las 17 pantallas estén implementadas en Kotlin Compose Multiplatform.
- Se hayan revisado todos los recursos proporcionados.
- Se hayan utilizado todos los recursos originales que correspondan.
- Los iconos originales estén incorporados.
- Las imágenes originales estén incorporadas.
- Las tipografías originales estén incorporadas cuando su uso esté permitido.
- Los colores, dimensiones y estilos correspondan a las referencias.
- No existan emojis utilizados como sustitutos de iconos.
- No existan imágenes genéricas sustituyendo recursos originales.
- Se hayan comparado visualmente las 17 pantallas.
- Se haya compilado el proyecto o documentado claramente cualquier bloqueo.
- Se haya creado `MIGRATION_REPORT.md`.

## 14. INSTRUCCIÓN FINAL

Mi prioridad absoluta es que la aplicación Kotlin Compose Multiplatform se vea exactamente igual que el diseño original de Figma.

Quiero conservar todos los elementos visuales originales, sin perder detalles durante la conversión.

**No rediseñes, no simplifiques, no inventes, no sustituyas y no elimines elementos.**

Analiza todos los archivos que te he proporcionado y utiliza todos los recursos que correspondan.

Si falta algo, avísame de forma específica y explícame cómo conseguirlo.

Trabaja sobre el proyecto existente, respeta `AGENTS.md` y realiza una implementación Kotlin real, organizada y visualmente fiel al diseño original.