package ucb.playswap.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.toRoute
import ucb.playswap.core.theme.PlaySwapTheme
import ucb.playswap.feature.auth.presentation.screen.*
import ucb.playswap.feature.chat.presentation.screen.ChatScreen
import ucb.playswap.feature.exchange.presentation.screen.*
import ucb.playswap.feature.game.presentation.screen.*
import ucb.playswap.feature.home.presentation.screen.*
import ucb.playswap.feature.profile.presentation.screen.*

@Composable
fun AppNavHost(
    navController: NavHostController = rememberNavController()
) {
    PlaySwapTheme {
        NavHost(
            navController = navController,
            startDestination = NavRoute.Splash
        ) {
            composable<NavRoute.Splash> {
                SplashScreen(
                    onNavigateToWelcome = { navController.navigate(NavRoute.Welcome) { popUpTo<NavRoute.Splash> { inclusive = true } } }
                )
            }
            composable<NavRoute.Welcome> {
                WelcomeScreen(
                    onNavigateToLogin = { navController.navigate(NavRoute.Login) },
                    onNavigateToRegister = { navController.navigate(NavRoute.ConsoleSelection) }
                )
            }
            composable<NavRoute.Login> {
                LoginScreen(
                    onLoginSuccess = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.Login> { inclusive = true } } },
                    onNavigateToRegister = { navController.navigate(NavRoute.ConsoleSelection) }
                )
            }
            composable<NavRoute.ConsoleSelection> {
                ConsoleSelectionScreen(
                    onConsoleSelected = { navController.navigate(NavRoute.ProfileCreation) }
                )
            }
            composable<NavRoute.ProfileCreation> {
                ProfileCreationScreen(
                    onProfileCreated = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.Welcome> { inclusive = true } } }
                )
            }
            composable<NavRoute.HomeFeed> {
                HomeFeedScreen(
                    onNavigateToDetail = { gameId -> navController.navigate(NavRoute.MatchDetail(gameId)) },
                    onNavigateToSearch = { navController.navigate(NavRoute.Search) },
                    onNavigateToMyGames = { navController.navigate(NavRoute.MyGames) },
                    onNavigateToExchanges = { navController.navigate(NavRoute.ExchangesList) },
                    onNavigateToProfile = { navController.navigate(NavRoute.Profile) }
                )
            }
            composable<NavRoute.Search> {
                SearchScreen(
                    onBack = { navController.popBackStack() },
                    onNavigateToDetail = { gameId -> navController.navigate(NavRoute.MatchDetail(gameId)) },
                    onNavigateToHome = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } },
                    onNavigateToMyGames = { navController.navigate(NavRoute.MyGames) },
                    onNavigateToExchanges = { navController.navigate(NavRoute.ExchangesList) },
                    onNavigateToProfile = { navController.navigate(NavRoute.Profile) }
                )
            }
            composable<NavRoute.MatchDetail> { backStackEntry ->
                val route = backStackEntry.toRoute<NavRoute.MatchDetail>()
                MatchDetailScreen(
                    gameId = route.gameId,
                    onBack = { navController.popBackStack() },
                    onRequestSwap = { navController.navigate(NavRoute.RequestForm(route.gameId)) },
                    onNavigateChat = { navController.navigate(NavRoute.Chat) }
                )
            }
            composable<NavRoute.MyGames> {
                MyGamesScreen(
                    onBack = { navController.popBackStack() },
                    onAddNewGame = { navController.navigate(NavRoute.HomeFeed) },
                    onNavigateToHome = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } },
                    onNavigateToSearch = { navController.navigate(NavRoute.Search) },
                    onNavigateToExchanges = { navController.navigate(NavRoute.ExchangesList) },
                    onNavigateToProfile = { navController.navigate(NavRoute.Profile) }
                )
            }
            composable<NavRoute.RequestForm> { backStackEntry ->
                val route = backStackEntry.toRoute<NavRoute.RequestForm>()
                RequestFormScreen(
                    gameId = route.gameId,
                    onBack = { navController.popBackStack() },
                    onSubmitRequest = { navController.navigate(NavRoute.RequestSent) }
                )
            }
            composable<NavRoute.RequestSent> {
                RequestSentScreen(
                    onNavigateHome = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } }
                )
            }
            composable<NavRoute.ExchangesList> {
                ExchangesListScreen(
                    onBack = { navController.popBackStack() },
                    onNavigateChat = { navController.navigate(NavRoute.Chat) },
                    onNavigateLoanReturn = { navController.navigate(NavRoute.LoanReturn) },
                    onNavigateToHome = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } },
                    onNavigateToSearch = { navController.navigate(NavRoute.Search) },
                    onNavigateToMyGames = { navController.navigate(NavRoute.MyGames) },
                    onNavigateToProfile = { navController.navigate(NavRoute.Profile) }
                )
            }
            composable<NavRoute.LoanReturn> {
                LoanReturnScreen(
                    onBack = { navController.popBackStack() },
                    onReturnConfirmed = { navController.navigate(NavRoute.Rating) }
                )
            }
            composable<NavRoute.Chat> {
                ChatScreen(
                    onBack = { navController.popBackStack() }
                )
            }
            composable<NavRoute.Profile> {
                ProfileScreen(
                    onBack = { navController.popBackStack() },
                    onNavigateSettings = { navController.navigate(NavRoute.Settings) },
                    onNavigateMyGames = { navController.navigate(NavRoute.MyGames) },
                    onNavigateToHome = { navController.navigate(NavRoute.HomeFeed) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } },
                    onNavigateToSearch = { navController.navigate(NavRoute.Search) },
                    onNavigateToExchanges = { navController.navigate(NavRoute.ExchangesList) }
                )
            }
            composable<NavRoute.Rating> {
                RatingScreen(
                    onBack = { navController.popBackStack() },
                    onSubmitRating = { navController.popBackStack() }
                )
            }
            composable<NavRoute.Settings> {
                SettingsScreen(
                    onBack = { navController.popBackStack() },
                    onLogout = { navController.navigate(NavRoute.Welcome) { popUpTo<NavRoute.HomeFeed> { inclusive = true } } }
                )
            }
        }
    }
}
