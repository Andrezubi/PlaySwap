package ucb.playswap.feature.profile.domain.model

data class UserProfileModel(
    val id: String,
    val username: String,
    val email: String,
    val avatarUrl: String,
    val favoriteConsole: String,
    val rating: Double,
    val completedExchanges: Int
)
