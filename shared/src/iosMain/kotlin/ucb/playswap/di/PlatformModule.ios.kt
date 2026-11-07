package ucb.playswap.di

import org.koin.core.module.Module
import org.koin.dsl.module
import ucb.playswap.core.database.AppDatabase
import ucb.playswap.core.database.getDatabaseBuilder
import ucb.playswap.core.database.getRoomDatabase

actual fun platformModule(): Module = module {
    single<AppDatabase> {
        getRoomDatabase(
            getDatabaseBuilder()
        )
    }
}
