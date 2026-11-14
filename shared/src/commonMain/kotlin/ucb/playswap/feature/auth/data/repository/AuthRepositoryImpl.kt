package ucb.playswap.feature.auth.data.repository

import ucb.playswap.feature.auth.domain.repository.AuthRepository

class AuthRepositoryImpl : AuthRepository {
    override suspend fun login(email: String, pass: String): Result<Boolean> {
        return Result.success(true)
    }

    override suspend fun register(username: String, email: String, pass: String): Result<Boolean> {
        return Result.success(true)
    }
}
