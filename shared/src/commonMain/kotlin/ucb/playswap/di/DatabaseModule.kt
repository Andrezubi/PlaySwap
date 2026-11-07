package ucb.playswap.di

import org.koin.dsl.module
import ucb.playswap.core.database.AppDatabase
import ucb.playswap.core.database.dao.SwapItemDao

val databaseModule = module {
    single<SwapItemDao> {
        get<AppDatabase>().swapItemDao()
    }
}
