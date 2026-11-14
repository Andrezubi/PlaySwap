package ucb.playswap.feature.exchange.domain.model

data class ExchangeModel(
    val id: String,
    val gameTitle: String,
    val gameImageUrl: String,
    val requesterName: String,
    val ownerName: String,
    val status: String, // "PENDING", "ACTIVE", "COMPLETED", "RETURNED"
    val type: String, // "SWAP" or "LOAN"
    val date: String
)
