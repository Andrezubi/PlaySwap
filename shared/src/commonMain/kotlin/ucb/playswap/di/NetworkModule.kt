package ucb.playswap.di

import org.koin.dsl.module
import ucb.playswap.core.network.createHttpClient

val networkModule = module {
    single { createHttpClient() }
}
