package ucb.playswap.di

import org.koin.core.module.dsl.viewModelOf
import org.koin.dsl.module
import ucb.playswap.feature.auth.presentation.viewmodel.AuthViewModel

val presentationModule = module {
    viewModelOf(::AuthViewModel)
}
