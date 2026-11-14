# AGENTS.md — Proyecto Android de Juegos

## 1. Propósito del proyecto

Este repositorio contiene una aplicación de juegos desarrollada con:

- Kotlin
- Kotlin Multiplatform
- Compose Multiplatform
- Clean Architecture
- MVVM
- Ktor, cuando existan servicios HTTP
- kotlinx.serialization, cuando se serialicen datos
- Koin para inyección de dependencias
- ViewModel
- StateFlow y SharedFlow
- Navigation Compose

Este archivo define las reglas permanentes de arquitectura, organización y desarrollo **de este proyecto de juegos**. No depende de otro repositorio ni requiere consultar proyectos externos.

La identidad visual, las pantallas, los componentes y los flujos de la aplicación deben obtenerse del archivo de Figma proporcionado para este proyecto. Las reglas técnicas se definen aquí y en la estructura real de este repositorio.

---

## 2. Reglas fundamentales

1. Mantener Clean Architecture y separación de responsabilidades.
2. Mantener la organización por funcionalidades (`feature`).
3. Utilizar Kotlin y Compose para la implementación de interfaz.
4. Utilizar MVVM para la presentación.
5. Utilizar Koin para Dependency Injection.
6. Utilizar `NavRoute` y `AppNavHost` para navegación, respetando la implementación existente del repositorio.
7. No colocar lógica de negocio dentro de las Screens.
8. No realizar llamadas HTTP directamente desde la UI o los ViewModels.
9. No crear capas, clases o abstracciones vacías que no aporten una responsabilidad real.
10. No inventar reglas de los juegos, datos, pantallas ni comportamientos que no estén respaldados por los requisitos o por el diseño.
11. Antes de modificar archivos, revisar la estructura y las convenciones que ya existen **en este mismo proyecto**.
12. No sustituir ni rediseñar la identidad visual definida en Figma.

No se debe consultar ni depender de PisciData ni de ningún otro proyecto externo para desarrollar este repositorio.

---

## 3. Organización por funcionalidades

Cada funcionalidad debe estar organizada por feature y mantener separadas las capas:

```text
feature/
├── data/
├── domain/
└── presentation/
```

Estructura orientativa:

```text
nombre_feature/
├── data/
│   ├── datasource/
│   ├── dto/
│   ├── mapper/
│   ├── repository/
│   └── service/
│
├── domain/
│   ├── model/
│   ├── repository/
│   └── usecase/
│
└── presentation/
    ├── screen/
    └── viewmodel/
        ├── NombreViewModel.kt
        ├── NombreState.kt
        ├── NombreEvent.kt
        └── NombreEffect.kt
```

La estructura es una guía para las funcionalidades que necesiten esas responsabilidades. No se deben crear carpetas vacías ni componentes innecesarios.

Ejemplos de posibles funcionalidades, únicamente si corresponden al alcance real del proyecto:

- Inicio o menú principal.
- Catálogo o selección de juegos.
- Instrucciones.
- Partida o sesión de juego.
- Resultados.
- Perfil o progreso.
- Configuración.

Los nombres definitivos deben salir del dominio y de los requisitos reales de esta aplicación.

---

## 4. Responsabilidades de Clean Architecture

### 4.1. Data

Contiene implementaciones concretas de acceso a datos:

```text
data/
├── datasource/
├── dto/
├── mapper/
├── repository/
└── service/
```

Responsabilidades:

- `DataSource`: define cómo se obtiene o guarda la información.
- `DTO`: representa datos externos cuando exista una API o formato de persistencia que lo requiera.
- `Mapper`: transforma DTO a modelos de dominio y viceversa cuando corresponda.
- `RepositoryImpl`: implementa los contratos definidos en Domain.
- `Service`: implementa la comunicación con fuentes externas cuando exista.

Reglas:

- No colocar componentes Compose en Data.
- No colocar lógica de presentación en Data.
- No hacer que Domain dependa de DTO, Ktor o implementaciones concretas.
- No crear DTO, Service o llamadas HTTP ficticias para mecánicas que se ejecutan localmente.

### 4.2. Domain

```text
domain/
├── model/
├── repository/
└── usecase/
```

Responsabilidades:

- `Model`: representa conceptos y reglas del dominio de juegos.
- `Repository`: declara contratos que necesita el dominio.
- `UseCase`: encapsula operaciones o reglas de negocio relevantes.

Reglas:

- Domain no debe depender de Compose.
- Domain no debe depender de Ktor ni de DTO.
- Las reglas de puntuación, validación de respuestas, avance de niveles, temporizadores y estados de partida deben ubicarse en el dominio cuando sean reglas de negocio.
- Mantener los modelos independientes de la infraestructura.

### 4.3. Presentation

```text
presentation/
├── screen/
└── viewmodel/
```

Responsabilidades:

- `Screen`: representa la interfaz y envía eventos.
- `State`: contiene los datos necesarios para dibujar la interfaz.
- `Event`: representa acciones del usuario o de la interfaz.
- `Effect`: representa acciones puntuales, como navegación, mensajes o solicitudes de diálogo.
- `ViewModel`: coordina el estado, recibe eventos y ejecuta UseCases.

Reglas:

- No llamar a Services, DataSources ni implementaciones concretas desde la Screen o el ViewModel.
- No colocar lógica compleja de negocio en Composables.
- Mantener la UI declarativa y derivada del estado.

---

## 5. Flujo de datos

Para operaciones que acceden a una fuente de datos:

```text
Fuente externa o local
        ↓
     Service / DataSource
        ↓
    RepositoryImpl
        ↓
      Repository
        ↓
       UseCase
        ↓
      ViewModel
        ↓
        State
        ↓
       Screen
```

Para reglas locales de juego, no es obligatorio simular una API ni crear capas remotas. Se debe conservar la separación de responsabilidades, utilizando los contratos y UseCases que realmente aporten valor.

Flujo de interacción:

```text
Usuario
   ↓
 Screen
   ↓
  Event
   ↓
ViewModel
   ↓
UseCase
   ↓
Domain / Repository cuando corresponda
   ↓
Nuevo State o Effect
   ↓
 Screen
```

---

## 6. DataSource, DTO, Mapper, Repository y Service

### DataSource

- Definir contratos mediante interfaces cuando exista una fuente de datos intercambiable o una abstracción útil.
- Utilizar funciones `suspend` para operaciones asíncronas.
- Mantener los resultados y errores consistentes con las convenciones del repositorio.
- No incluir implementación HTTP en la interfaz.

### DTO

- Utilizar `@Serializable` cuando se requiera serialización con kotlinx.serialization.
- Respetar el formato real de los datos.
- Utilizar `@SerialName` cuando corresponda.
- No inventar campos ni asumir respuestas de servicios no verificados.
- No crear DTO para modelos que solo existen en memoria si no hay necesidad de serialización.

### Mapper

- Mantener transformaciones en `data/mapper`.
- Utilizar funciones de extensión si esa es la convención del proyecto.
- No incluir lógica visual ni llamadas de red.
- Separar modelos de dominio de estructuras externas.

### Repository

- Declarar interfaces en Domain.
- Implementar interfaces en Data.
- Inyectar dependencias mediante Koin.
- No mezclar lógica de presentación ni componentes Compose.

### Service y Ktor

Cuando una funcionalidad necesite comunicación HTTP:

- Utilizar Ktor y la configuración de cliente existente en el proyecto.
- Utilizar `ContentNegotiation` y kotlinx.serialization cuando corresponda.
- Centralizar configuración del cliente y manejo de errores.
- Evitar crear un `HttpClient` distinto por cada llamada.
- No guardar secretos ni credenciales en el código fuente.
- No introducir servicios remotos si el juego funciona completamente de forma local.

---

## 7. UseCases y reglas de los juegos

Los UseCases deben representar acciones del dominio, por ejemplo:

- Iniciar una partida.
- Validar una respuesta.
- Calcular o actualizar una puntuación.
- Avanzar de nivel.
- Pausar o reanudar una partida.
- Finalizar una partida.
- Obtener o guardar resultados.

Estos nombres son ejemplos; implementar únicamente los que correspondan a las mecánicas definidas para el proyecto.

Reglas:

- Mantener las reglas de juego fuera de las Screens.
- No duplicar la misma regla en varios ViewModels.
- Validar entradas y transiciones de estado.
- Evitar estados imposibles o contradictorios.
- Probar las reglas importantes con pruebas unitarias.
- No inventar reglas que no estén especificadas.

---

## 8. ViewModel, State, Event y Effect

Cada pantalla o funcionalidad que lo necesite debe seguir el patrón unidireccional.

### State

Ejemplo orientativo:

```kotlin
data class GameState(
    val isLoading: Boolean = false,
    val error: String? = null
)
```

- Representa la información necesaria para dibujar la pantalla.
- Debe ser inmutable.
- No debe contener lógica de negocio.
- Debe incluir estados de carga, error, partida, selección o resultado cuando correspondan.

### Event

Ejemplo orientativo:

```kotlin
sealed interface GameEvent {
    data object OnStart : GameEvent
    data object OnRetry : GameEvent
}
```

- Representa acciones del usuario o de la interfaz.
- Debe tener nombres claros.
- La Screen envía eventos al ViewModel.

### Effect

Ejemplo orientativo:

```kotlin
sealed interface GameEffect {
    data class ShowMessage(val message: String) : GameEffect
}
```

- Representa acciones puntuales que no deben quedar guardadas como estado permanente.
- Puede incluir navegación, mensajes, apertura/cierre de diálogos u otros efectos de una sola ejecución.
- Utilizar `SharedFlow` siguiendo la convención del proyecto.

### ViewModel

Patrón orientativo:

```kotlin
class GameViewModel(
    private val useCase: GameUseCase
) : ViewModel() {

    private val _state = MutableStateFlow(GameState())
    val state = _state.asStateFlow()

    private val _effect = MutableSharedFlow<GameEffect>()
    val effect = _effect.asSharedFlow()

    fun emitEvent(event: GameEvent) {
        // Procesar eventos y actualizar estado.
    }
}
```

Reglas:

- Extender `ViewModel`.
- Utilizar `viewModelScope` para trabajo asíncrono.
- Mantener privados los flujos mutables.
- Exponer `StateFlow` y `SharedFlow`.
- Utilizar UseCases cuando corresponda.
- No llamar directamente a Services ni DataSources.
- No incluir componentes Compose.

---

## 9. Screens y Compose

Las Screens deben ser Composables declarativos.

Patrón orientativo:

```kotlin
@Composable
fun GameScreen(
    viewModel: GameViewModel = koinViewModel()
) {
    val state by viewModel.state.collectAsState()

    // Representar la interfaz a partir de state.
    // Enviar acciones mediante viewModel.emitEvent(...).
}
```

Reglas:

- Seguir las convenciones de Compose del repositorio.
- Observar el estado de forma lifecycle-aware si la configuración disponible lo permite.
- Observar Effects mediante `LaunchedEffect` cuando corresponda.
- Separar componentes grandes en Composables reutilizables.
- No introducir lógica de negocio en los componentes visuales.
- No utilizar datos de ejemplo como sustituto de funcionalidades reales en la entrega final.
- Evitar valores visuales repetidos: centralizarlos en el Design System.

---

## 10. Design System y recursos visuales

La interfaz debe utilizar un sistema de diseño centralizado derivado de los diseños aprobados para este proyecto.

Organizar, según las convenciones del repositorio:

- Colores.
- Tipografías.
- Dimensiones y espaciados.
- Formas y radios.
- Bordes y elevaciones.
- Temas.
- Componentes compartidos.
- Iconos e imágenes.

Reglas:

- No dispersar valores visuales repetidos por todas las Screens.
- No reemplazar assets originales por emojis, iconos genéricos o placeholders si el recurso está disponible.
- Mantener nombres descriptivos y organización consistente.
- No deformar imágenes ni cambiar sus proporciones.
- No crear variantes visuales no solicitadas.
- Mantener fidelidad al archivo de diseño del proyecto.

---

## 11. Dependency Injection con Koin

Utilizar Koin, respetando los módulos y la inicialización que existan en este repositorio.

Organización conceptual:

```kotlin
val dataModule = module {
    // DataSources y RepositoryImpl necesarios.
}

val domainModule = module {
    // UseCases necesarios.
}

val presentationModule = module {
    // ViewModels.
}
```

Reglas:

- Registrar cada dependencia que realmente se utilice.
- Utilizar `single`, `factory` o `viewModelOf` según su ciclo de vida y la convención existente.
- No registrar clases innecesarias.
- No crear un segundo contenedor de dependencias.
- Verificar que la resolución de dependencias funcione al ejecutar la aplicación.

---

## 12. Navegación

Utilizar `NavRoute` y `AppNavHost` si son el sistema establecido en el repositorio.

Reglas:

1. Definir una ruta por destino navegable.
2. Registrar el destino en `AppNavHost`.
3. Mantener la navegación fuera de las reglas de negocio.
4. Evitar rutas duplicadas.
5. Gestionar argumentos de navegación de forma segura.
6. Respetar el flujo y los destinos definidos para la aplicación.
7. No crear otro sistema de navegación.

Los nombres y tipos concretos deben ajustarse a las librerías y APIs que ya utiliza el proyecto.

---

## 13. Persistencia y servicios

No asumir que todos los datos requieren backend.

Determinar según los requisitos si la información debe ser:

- Temporal, durante una partida.
- Persistente en el dispositivo.
- Compartida entre sesiones.
- Sincronizada con un servidor.

Elegir la solución compatible con las dependencias ya configuradas. No agregar Room, Firebase, Ktor u otra tecnología por costumbre: utilizarla únicamente cuando exista un requisito que la justifique.

No almacenar contraseñas, tokens ni secretos en texto plano.

---

## 14. Calidad, pruebas y compatibilidad

- Mantener el proyecto compilable durante el desarrollo.
- Respetar las versiones configuradas en Gradle y los catálogos de versiones.
- No actualizar dependencias sin necesidad justificada.
- Escribir pruebas unitarias para reglas de dominio y ViewModels cuando corresponda.
- Probar navegación y estados principales.
- Verificar comportamiento en emulador o dispositivo.
- Corregir warnings relevantes y errores de compilación.
- Comprobar que los recursos se carguen correctamente.
- Considerar accesibilidad, TalkBack, contraste y escalado de texto.
- No afirmar que una prueba fue ejecutada si no se ejecutó.

---

## 15. Forma de trabajo

Antes de realizar cambios:

1. Revisar la estructura actual de este repositorio.
2. Identificar los módulos, paquetes, convenciones y dependencias existentes.
3. Revisar los archivos que se modificarán.
4. Determinar qué archivos nuevos son necesarios.
5. Evitar modificaciones ajenas al alcance.

Para cambios amplios, comunicar brevemente:

```text
Archivos que se crearán:
- ...

Archivos que se modificarán:
- ...

Archivos que no necesitan cambios:
- ...

Motivo:
- ...
```

No realizar operaciones destructivas de Git, borrar configuraciones, modificar secretos ni sobrescribir trabajo existente sin autorización.

---

## 16. Restricciones

- No consultar ni depender de PisciData u otros repositorios.
- No cambiar Clean Architecture por otra arquitectura.
- No mezclar Data, Domain y Presentation.
- No colocar lógica de negocio en Composables.
- No llamar a servicios desde la UI.
- No crear APIs, DTOs o Services ficticios.
- No agregar dependencias sin justificación.
- No inventar reglas de los juegos.
- No introducir pantallas o diseños que no pertenezcan al alcance aprobado.
- No dejar botones sin comportamiento.
- No dejar placeholders en funcionalidades declaradas como terminadas.
- No declarar una tarea completada sin validarla.

**Regla final:** este AGENTS.md es la guía técnica permanente del proyecto de juegos. Las tareas concretas, el inventario de Figma y los criterios de aceptación visual se especifican en `TASKS.md`.
