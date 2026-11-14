package ucb.playswap.feature.chat.domain.model

data class ChatMessageModel(
    val id: String,
    val senderId: String,
    val senderName: String,
    val message: String,
    val timestamp: String
)
