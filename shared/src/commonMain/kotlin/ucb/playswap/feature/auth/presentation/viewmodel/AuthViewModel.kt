package ucb.playswap.feature.auth.presentation.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import ucb.playswap.feature.auth.domain.repository.AuthRepository

class AuthViewModel(
    private val authRepository: AuthRepository
) : ViewModel() {

    private val _state = MutableStateFlow(AuthState())
    val state = _state.asStateFlow()

    private val _effect = MutableSharedFlow<AuthEffect>()
    val effect = _effect.asSharedFlow()

    fun emitEvent(event: AuthEvent) {
        when (event) {
            is AuthEvent.OnLogin -> login(event.email, event.pass)
            is AuthEvent.OnRegister -> register(event.username, event.email, event.pass)
            AuthEvent.OnNavigateToHome -> {}
        }
    }

    private fun login(email: String, pass: String) {
        viewModelScope.launch {
            _state.update { it.copy(isLoading = true, error = null) }
            val result = authRepository.login(email, pass)
            if (result.isSuccess) {
                _state.update { it.copy(isLoading = false, isAuthenticated = true) }
            } else {
                _state.update { it.copy(isLoading = false, error = "Error al iniciar sesión") }
            }
        }
    }

    private fun register(username: String, email: String, pass: String) {
        viewModelScope.launch {
            _state.update { it.copy(isLoading = true, error = null) }
            val result = authRepository.register(username, email, pass)
            if (result.isSuccess) {
                _state.update { it.copy(isLoading = false, isAuthenticated = true) }
            } else {
                _state.update { it.copy(isLoading = false, error = "Error en registro") }
            }
        }
    }
}
