package ucb.playswap.navigation

import kotlinx.serialization.Serializable

@Serializable
sealed interface NavRoute {
    @Serializable data object Splash : NavRoute
    @Serializable data object Welcome : NavRoute
    @Serializable data object Login : NavRoute
    @Serializable data object ConsoleSelection : NavRoute
    @Serializable data object ProfileCreation : NavRoute
    @Serializable data object HomeFeed : NavRoute
    @Serializable data object Search : NavRoute
    @Serializable data class MatchDetail(val gameId: String) : NavRoute
    @Serializable data object MyGames : NavRoute
    @Serializable data class RequestForm(val gameId: String) : NavRoute
    @Serializable data object RequestSent : NavRoute
    @Serializable data object ExchangesList : NavRoute
    @Serializable data object LoanReturn : NavRoute
    @Serializable data object Chat : NavRoute
    @Serializable data object Profile : NavRoute
    @Serializable data object Rating : NavRoute
    @Serializable data object Settings : NavRoute
}
