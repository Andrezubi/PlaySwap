package ucb.playswap.navigation

import kotlinx.serialization.Serializable

sealed interface NavRoute {
    @Serializable
    data object Home : NavRoute
}
