package ucb.playswap.feature.home.domain.model

data class GameModel(
    val id: String,
    val title: String,
    val console: String,
    val imageUrl: String,
    val ownerName: String,
    val condition: String,
    val description: String,
    val isAvailableForSwap: Boolean = true,
    val isAvailableForLoan: Boolean = true
)
