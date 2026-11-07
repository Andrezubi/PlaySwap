package ucb.playswap.di

import org.koin.core.module.Module

fun sharedModules(): List<Module> {
    return listOf(
        platformModule(),
        networkModule,
        databaseModule,
        dataModule,
        domainModule,
        presentationModule
    )
}
