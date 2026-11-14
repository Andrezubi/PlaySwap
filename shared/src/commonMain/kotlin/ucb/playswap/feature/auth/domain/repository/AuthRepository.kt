package ucb.playswap.feature.auth.domain.repository

interface AuthRepository {
    suspend fun login(email: String, pass: String): Result<Boolean>
    suspend fun register(username: String, email: String, pass: String): Result<Boolean>
}
