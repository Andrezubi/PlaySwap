TASKS.md — Análisis de recursos y réplica fiel de pantallas
Objetivo
Implementar en Android las pantallas de referencia que proporcionaré (imágenes o capturas), utilizando los recursos originales que entregaré en una carpeta.

El objetivo es que cada pantalla implementada sea visualmente idéntica o lo más cercana posible a su referencia, aprovechando correctamente todos los recursos disponibles: imágenes, ilustraciones, iconos, fondos, fuentes, formas, texturas y cualquier otro archivo útil.

Regla principal: primero analiza detenidamente todas las imágenes de referencia y todos los archivos de la carpeta de recursos. Solo después de completar ese análisis debes comenzar a implementar las pantallas.

No empieces a programar basándote únicamente en una primera impresión de la imagen ni sustituyas recursos originales por aproximaciones genéricas.
FASE 1. Inspección de las referencias
Tarea 1. Analizar cada imagen completa
Por cada imagen o captura de pantalla:
1. Observa la imagen completa antes de analizar elementos individuales.
2. Identifica el tamaño y la proporción.
3. Divide la interfaz en secciones y analiza su jerarquía visual.
4. Identifica todos los elementos visibles, incluidos los pequeños y decorativos.
5. Registra posición, dimensiones relativas, alineación y separación.
6. Identifica colores, gradientes, transparencias, sombras, bordes y radios.
7. Analiza las tipografías: familia aparente, tamaño, peso, color, alineación y altura de línea.
8. Identifica imágenes, ilustraciones, iconos, personajes, fondos, texturas y elementos decorativos.
9. Identifica botones, tarjetas, campos, indicadores, barras, controles, menús y diálogos.
10. Detecta estados visuales como seleccionado, deshabilitado, activo, inactivo, enfocado o presionado, cuando sean visibles.
    No ignores elementos por ser pequeños, estar parcialmente superpuestos o parecer decorativos.
    Tarea 2. Crear una ficha por pantalla
    Antes de programar, registra para cada referencia:
- Nombre o identificador de la imagen.
- Dimensiones y proporción.
- Secciones principales.
- Lista de elementos visibles.
- Recursos gráficos necesarios.
- Tipografías y estilos detectados.
- Componentes que podrían implementarse con Compose o Material.
- Elementos que requieren un asset específico.
- Dudas o detalles que no se puedan determinar.
  Si se proporcionan varias pantallas, analiza todas antes de implementar la primera. Así podrás detectar recursos compartidos y mantener consistencia.
  FASE 2. Inspección completa de la carpeta de recursos
  Tarea 3. Revisar todos los archivos
  Inspecciona la carpeta completa que proporcionaré, incluidas sus subcarpetas. No te limites a archivos cuyo nombre parezca coincidir con la pantalla.

Revisa, según corresponda:
- PNG, JPG, JPEG, WEBP y otros formatos de imagen.
- SVG y recursos vectoriales.
- XML y recursos Android existentes.
- Fuentes tipográficas.
- Iconos, ilustraciones, fondos y texturas.
- Logotipos y elementos decorativos.
- Animaciones y archivos auxiliares.
- Variantes de resolución, color o tamaño.
  No omitas archivos por tener nombres poco descriptivos. Cuando sea posible, inspecciona visualmente su contenido, dimensiones, transparencia, proporción y calidad.

Si existen muchos recursos, organízalos por lotes y genera un catálogo visual u hoja de miniaturas (contact sheet). Después inspecciona individualmente los recursos que puedan corresponder a elementos de las pantallas.
Tarea 4. Crear un inventario de recursos
Crea docs/RESOURCE_INVENTORY.md con una tabla como esta:
Archivo	Tipo	Dimensiones	Descripción visual	Pantalla/elemento relacionado	Estado
nombre.ext	Imagen/icono/fuente/etc.	Ancho × alto	Qué contiene	Dónde se utiliza	Disponible/Pendiente


Para cada recurso:
- Registra su ruta exacta.
- Describe lo que contiene, no solamente su nombre.
- Identifica si tiene transparencia.
- Identifica posibles variantes o duplicados.
- Indica en qué pantalla y elemento puede utilizarse.
- Señala si su resolución o formato parece inadecuado.
  No marques un recurso como correspondiente a un elemento solo por su nombre: comprueba visualmente que realmente coincide.
  Tarea 5. Relacionar referencias con recursos
  Compara cada elemento detectado en las imágenes de referencia con todos los recursos disponibles.

Crea una matriz de correspondencia por pantalla:
Pantalla	Elemento de referencia	Recurso encontrado	Ruta	Coincidencia
Pantalla A	Fondo	archivo.ext	ruta/...	Exacta/Parcial/No encontrada
Pantalla A	Icono	archivo.ext	ruta/...	Exacta/Parcial/No encontrada


Busca recursos en toda la carpeta, incluso si están en subcarpetas o tienen nombres distintos a los elementos visuales.

Si una imagen de referencia contiene varios elementos gráficos, analiza cada uno por separado y busca sus recursos correspondientes. No asumas que una sola imagen contiene todos los elementos: el fondo, personajes, botones, iconos y adornos pueden estar separados en archivos distintos.

Criterio de aceptación: antes de programar existe un inventario de la carpeta y una correspondencia entre los elementos de cada pantalla y los recursos que se utilizarán.
FASE 3. Recursos faltantes
Tarea 6. Detectar y comunicar lo que no existe
Si un elemento visible en la referencia no tiene un recurso correspondiente:
1. Identifica exactamente qué elemento falta.
2. Indica en qué pantalla aparece.
3. Describe su apariencia, ubicación y función visual.
4. Indica qué tipo de archivo sería necesario (PNG, SVG, fuente, etc.).
5. Si es posible, proporciona las dimensiones o proporciones aproximadas necesarias.
6. Registra el elemento como pendiente en docs/RESOURCE_INVENTORY.md.
   Antes de sustituir, dibujar o aproximar un recurso faltante, avísame para que pueda buscarlo o proporcionártelo.

No reemplaces silenciosamente un asset faltante por un emoji, icono genérico, imagen de Internet, dibujo aproximado o placeholder.

Si faltan varios recursos, presenta una lista agrupada por pantalla para que pueda proporcionarlos de forma ordenada.

Puedes continuar con el análisis y con las partes que no dependan de esos recursos, pero no declares terminada la pantalla ni cierres su validación visual mientras falten elementos importantes.
FASE 4. Plan de implementación
Tarea 7. Preparar el plan antes de escribir código
Una vez analizadas todas las referencias y todos los recursos:
1. Resume la estructura de cada pantalla.
2. Indica qué assets se utilizarán en cada elemento.
3. Identifica los componentes reutilizables.
4. Determina qué elementos conviene implementar con Compose.
5. Determina qué elementos conviene implementar con componentes de Material.
6. Identifica qué elementos requieren recursos personalizados.
7. Identifica las librerías adicionales que podrían ser necesarias.
8. Revisa las dependencias existentes para evitar duplicarlas.
9. Indica qué recursos faltan y espera mi respuesta cuando sean indispensables para reproducir fielmente la pantalla.
   Crea docs/SCREEN_IMPLEMENTATION_PLAN.md con este detalle.

No empieces la implementación hasta haber terminado el inventario y el plan de correspondencia de recursos.
FASE 5. Implementación de la interfaz
Tarea 8. Utilizar Compose, Material Theme y librerías adecuadas
Implementa las pantallas con Kotlin y Jetpack Compose o Compose Multiplatform, según la configuración real del proyecto.

Utiliza Material Theme / Material 3 y sus componentes cuando ayuden a conseguir el resultado esperado. Puedes utilizar otras librerías compatibles cuando aporten una capacidad necesaria, por ejemplo:
- Componentes de interfaz.
- Iconografía.
- Carga y visualización de imágenes.
- SVG o vectores.
- Animaciones.
- Gradientes o efectos.
- Fuentes tipográficas personalizadas.
  Antes de agregar una librería:
- Comprueba si el proyecto ya tiene una dependencia que resuelva esa necesidad.
- Verifica que sea compatible con las versiones de Kotlin, Compose y Gradle existentes.
- Evita dependencias redundantes.
- Justifica brevemente por qué es necesaria.
  No utilices los componentes predeterminados de Material sin personalizarlos si su apariencia no coincide con la referencia. Ajusta colores, tipografías, formas, dimensiones, elevaciones, estados e indicadores.

Si un componente personalizado en Compose permite una réplica más fiel que un componente Material, implementa el componente personalizado.
Tarea 9. Utilizar los recursos correctos
Para cada pantalla:
- Utiliza el archivo exacto que corresponda a cada imagen, icono, fondo o ilustración.
- Respeta la proporción original.
- Respeta transparencia, recorte y modo de ajuste.
- Utiliza las fuentes originales cuando estén disponibles.
- No recrees mediante código un recurso gráfico que ya existe como archivo.
- No uses una imagen completa de la pantalla como fondo para simular la implementación de sus componentes, salvo que esa sea explícitamente la estructura real del diseño.
- No sustituyas varios recursos independientes por una sola imagen aplanada si deben ser elementos interactivos separados.
  Organiza los assets correctamente en los recursos del proyecto y cárgalos de forma adecuada desde Compose.
  Tarea 10. Replicar dimensiones y estilos
  Reproduce con la mayor exactitud posible:
- Dimensiones del contenedor y de cada elemento.
- Posiciones y alineaciones.
- Márgenes y padding.
- Separación entre componentes.
- Colores y gradientes.
- Tipografías, tamaños y pesos.
- Bordes y radios.
- Sombras y elevaciones.
- Transparencias.
- Fondos y superposiciones.
- Recorte y escala de imágenes.
- Estados visuales.
  No uses valores aproximados cuando puedas medirlos o deducirlos de la referencia.

Si el diseño debe adaptarse a otros tamaños de pantalla, conserva la composición y las proporciones, evitando deformaciones, desbordamientos y recortes accidentales.
Tarea 11. Consistencia entre pantallas
Si se proporcionan varias pantallas:
- Reutiliza componentes que realmente compartan diseño.
- Mantén los mismos estilos para elementos equivalentes.
- Centraliza colores, tipografías, dimensiones y formas.
- Reutiliza los mismos assets cuando correspondan.
- No generes variaciones visuales arbitrarias.
- Respeta las diferencias que sí aparezcan en cada referencia.
  FASE 6. Validación visual
  Tarea 12. Comparar la implementación con la referencia
  La validación visual es obligatoria para cada pantalla.
1. Ejecuta la aplicación en un emulador o dispositivo.
2. Abre la pantalla implementada.
3. Obtén una captura.
4. Compárala con la imagen original.
5. Revisa posiciones, tamaños, proporciones, colores, tipografías, imágenes y espaciados.
6. Identifica las diferencias.
7. Corrige las diferencias.
8. Repite la comparación.
   Utiliza, cuando sea posible, la misma resolución y proporción de pantalla de la referencia.

No declares una pantalla terminada solo porque compila o porque se parece de forma general.
Tarea 13. Registrar el resultado
Mantén una tabla de seguimiento:
Pantalla	Análisis completo	Recursos asignados	Recursos faltantes	Implementada	Comparación visual
Pantalla A	Sí/No	Sí/No	Detalle/No	Sí/No	Pendiente/Aprobada


Una pantalla solo puede marcarse como aprobada visualmente cuando se haya comparado con su referencia y se hayan corregido las diferencias detectadas, o cuando las diferencias restantes estén claramente documentadas.
FASE 7. Verificación técnica
Tarea 14. Compilación y funcionamiento
- Compila el proyecto después de implementar cada pantalla o grupo pequeño de cambios.
- Corrige errores de Kotlin, Compose y Gradle.
- Comprueba que todos los assets se carguen correctamente.
- Verifica que las fuentes estén aplicadas.
- Verifica que no existan elementos cortados o superpuestos.
- Comprueba que las dependencias nuevas no generen conflictos.
- Ejecuta la aplicación en emulador o dispositivo.
  No elimines configuraciones existentes ni actualices dependencias sin una razón justificada.
  ORDEN OBLIGATORIO DE TRABAJO
  Sigue este orden:
1. Recibir y abrir todas las imágenes de referencia.
2. Analizar detenidamente cada imagen completa.
3. Recorrer todos los archivos y subcarpetas de recursos.
4. Inspeccionar visualmente los recursos, no solo sus nombres.
5. Crear docs/RESOURCE_INVENTORY.md.
6. Relacionar cada elemento de cada pantalla con su recurso correspondiente.
7. Identificar los recursos faltantes.
8. Comunicarme los recursos faltantes para que pueda proporcionarlos.
9. Crear docs/SCREEN_IMPLEMENTATION_PLAN.md.
10. Seleccionar los componentes de Compose, Material Theme y librerías necesarias.
11. Implementar las pantallas utilizando los recursos correctos.
12. Ejecutar la aplicación y comparar cada pantalla con su referencia.
13. Corregir las diferencias visuales.
14. Verificar compilación y funcionamiento.
15. Actualizar el inventario y el informe final.
    No adelantes la implementación a las fases de análisis e inventario. Si se proporcionan varias imágenes, analiza todas y revisa la carpeta completa antes de comenzar a programar.
    ENTREGABLES
    Al finalizar, deben existir:
1. docs/RESOURCE_INVENTORY.md: inventario de todos los recursos y su correspondencia con las pantallas.
2. docs/SCREEN_IMPLEMENTATION_PLAN.md: plan de implementación por pantalla.
3. Pantallas implementadas en Kotlin y Compose.
4. Assets originales integrados y organizados.
5. Tema y componentes personalizados necesarios.
6. Librerías adicionales justificadas, si se utilizaron.
7. Capturas de las pantallas implementadas para su comparación.
8. Registro de validación visual.
9. Informe de recursos faltantes y elementos pendientes.
   Informe final obligatorio
   Indica:
- Cuántas imágenes de referencia se analizaron.
- Cuántos archivos de recursos se inspeccionaron.
- Cuántos recursos se utilizaron.
- Qué recursos se asignaron a cada pantalla.
- Qué recursos faltan y cuáles debo proporcionar.
- Qué componentes de Material o Compose se utilizaron.
- Qué librerías se agregaron y por qué.
- Qué pantallas se implementaron.
- Qué pantallas se compararon visualmente.
- Qué diferencias siguen pendientes.
- Si el proyecto compila y se ejecuta correctamente.
  CRITERIOS DE ACEPTACIÓN
- [ ] Se analizaron todas las imágenes de referencia antes de programar.
- [ ] Se inspeccionaron todos los archivos y subcarpetas de recursos.
- [ ] Se analizaron visualmente los recursos relevantes.
- [ ] Se creó un inventario con rutas y descripciones.
- [ ] Cada elemento gráfico se relacionó con el recurso correcto cuando estaba disponible.
- [ ] Se identificaron y comunicaron los recursos faltantes.
- [ ] No se sustituyeron recursos originales silenciosamente.
- [ ] Se preparó el plan de implementación antes de programar.
- [ ] Se utilizaron Material Theme, Compose y librerías compatibles cuando aportaban valor.
- [ ] Se implementaron las pantallas con la mayor fidelidad visual posible.
- [ ] Se comparó cada pantalla implementada con su imagen de referencia.
- [ ] Se corrigieron las diferencias detectadas o se documentaron las pendientes.
- [ ] El proyecto compila y se ejecuta correctamente.
  Prioridad absoluta: analizar primero todas las referencias y todos los recursos; después relacionar cada elemento visual con su archivo correspondiente y, finalmente, implementar cada pantalla con la máxima fidelidad posible. Si falta un recurso, avísame para que pueda proporcionártelo antes de sustituirlo por una aproximación.