# IMPLEMENTATION PLAN — PlaySwap

Plan de desarrollo e implementación de la aplicación PlaySwap en Kotlin Multiplatform y Compose Multiplatform, siguiendo Clean Architecture, MVVM, Koin y Navigation Compose.

## 1. Arquitectura por Funcionalidades (Features)

Cada funcionalidad seguirá estrictamente la estructura Clean Architecture:
```text
feature/
├── data/
│   ├── datasource/
│   ├── dto/
│   ├── mapper/
│   ├── repository/
│   └── service/
├── domain/
│   ├── model/
│   ├── repository/
│   └── usecase/
└── presentation/
    ├── screen/
    └── viewmodel/
        ├── FeatureViewModel.kt
        ├── FeatureState.kt
        ├── FeatureEvent.kt
        └── FeatureEffect.kt
```

## 2. Mapeo de Pantallas a Features

1. **Auth / Splash Feature (`auth`)**:
   - `SplashScr` / `WelcomeScr` (`01_splash-logo`, `02_welcome`)
   - `LoginScr` (`16_login`)
   - `ProfileCreationScr` (`04_profile-creation`)
   - `ConsoleSelectionScr` (`03_console-selection`)
2. **Home & Feed Feature (`home` / `catalog`)**:
   - `HomeFeedScreen` (`05_home-feed`)
   - `SearchScreen` (`12_search-screen`)
3. **Match / Game Detail Feature (`game`)**:
   - `MatchDetailScreen` (`06_match-detail`)
   - `MyGamesScreen` (`11_my-games`)
4. **Exchange & Request Feature (`exchange`)**:
   - `RequestFormScreen` (`07_request-form`)
   - `RequestSentScreen` (`08_request-sent`)
   - `ExchangesListScreen` (`10_exchanges-list`)
   - `LoanReturnScreen` (`17_loan-return`)
5. **Chat Feature (`chat`)**:
   - `ChatScreen` (`09_chat-screen`)
6. **Profile & Settings Feature (`profile`)**:
   - `ProfileScreen` (`13_profile-screen`)
   - `RatingScreen` (`14_rating-screen`)
   - `SettingsScreen` (`15_settings`)

## 3. Plan de Integración en Navegación y DI
- **NavRoute**: Definición de rutas serializables para cada pantalla.
- **AppNavHost**: Configuración centralizada de la navegación con Jetpack Navigation Compose.
- **Módulos Koin**: `dataModule`, `domainModule`, `presentationModule`.

## 4. Verificación y Pruebas
- Compilación limpia en cada paso.
- Verificación de flujos de navegación y estados de UI.
