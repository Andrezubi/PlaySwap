package ucb.playswap.feature.auth.presentation.viewmodel

data class AuthState(
    val isLoading: Boolean = false,
    val isAuthenticated: Boolean = false,
    val error: String? = null
)

sealed interface AuthEvent {
    data class OnLogin(val email: String, val pass: String) : AuthEvent
    data class OnRegister(val username: String, val email: String, val pass: String) : AuthEvent
    data object OnNavigateToHome : AuthEvent
}

sealed interface AuthEffect {
    data class ShowToast(val message: String) : AuthEffect
}
