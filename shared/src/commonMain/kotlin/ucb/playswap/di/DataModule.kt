package ucb.playswap.di

import org.koin.dsl.module
import ucb.playswap.feature.auth.data.repository.AuthRepositoryImpl
import ucb.playswap.feature.auth.domain.repository.AuthRepository

val dataModule = module {
    single<AuthRepository> { AuthRepositoryImpl() }
}
