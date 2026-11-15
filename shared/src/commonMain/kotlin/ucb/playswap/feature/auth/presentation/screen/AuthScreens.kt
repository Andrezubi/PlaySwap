package ucb.playswap.feature.auth.presentation.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import playswap.shared.generated.resources.Res
import playswap.shared.generated.resources.welcome_illustration
import ucb.playswap.core.theme.GamePadIcon
import ucb.playswap.core.theme.PersonIcon
import ucb.playswap.core.theme.*
import ucb.playswap.feature.auth.presentation.viewmodel.AuthEvent
import ucb.playswap.feature.auth.presentation.viewmodel.AuthViewModel

@Composable
fun SplashScreen(
    onNavigateToWelcome: () -> Unit
) {
    LaunchedEffect(Unit) {
        kotlinx.coroutines.delay(2000)
        onNavigateToWelcome()
    }
    Box(
        modifier = Modifier.fillMaxSize().background(Color(0xFF0B0B0F)),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Box(
                modifier = Modifier.size(64.dp).clip(RoundedCornerShape(16.dp)).background(Color(0xFF181818)),
                contentAlignment = Alignment.Center
            ) {
                GamePadIcon(modifier = Modifier.size(32.dp), color = Color(0xFF00D9A6))
            }
            Spacer(modifier = Modifier.height(16.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text("Play", fontSize = 36.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Text("Swap", fontSize = 36.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text("COCHABAMBA", fontSize = 12.sp, fontWeight = FontWeight.SemiBold, color = Color(0xFFA3A3C2), letterSpacing = 2.sp)
        }

        Box(
            modifier = Modifier.fillMaxSize().padding(bottom = 32.dp),
            contentAlignment = Alignment.BottomCenter
        ) {
            Text("Versión 1.0.4 · Cochabamba", fontSize = 12.sp, color = Color(0xFFA3A3C2))
        }
    }
}

@Composable
fun WelcomeScreen(
    onNavigateToLogin: () -> Unit,
    onNavigateToRegister: () -> Unit
) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = Color(0xFF0B0B0F)
    ) {
        Column(
            modifier = Modifier.fillMaxSize().statusBarsPadding().navigationBarsPadding().padding(24.dp),
            verticalArrangement = Arrangement.SpaceBetween,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Row(
                modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center
            ) {
                Box(
                    modifier = Modifier.size(36.dp).clip(RoundedCornerShape(8.dp)).background(Color(0xFF181818)),
                    contentAlignment = Alignment.Center
                ) {
                    GamePadIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                }
                Spacer(modifier = Modifier.width(10.dp))
                Column {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text("Play", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        Text("Swap", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                    }
                    Text("COCHABAMBA", fontSize = 9.sp, fontWeight = FontWeight.SemiBold, color = Color(0xFFA3A3C2), letterSpacing = 1.5.sp)
                }
            }

            Column(
                modifier = Modifier.fillMaxWidth().weight(1f),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(260.dp)
                        .clip(RoundedCornerShape(20.dp))
                        .background(Color(0xFF181818)),
                    contentAlignment = Alignment.Center
                ) {
                    Image(
                        painter = painterResource(Res.drawable.welcome_illustration),
                        contentDescription = "Welcome Illustration",
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Crop
                    )
                }

                Spacer(modifier = Modifier.height(28.dp))

                Text(
                    text = "Intercambia juegos.\nDescubre nuevos mundos.",
                    fontSize = 26.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                    lineHeight = 32.sp
                )

                Spacer(modifier = Modifier.height(12.dp))

                Text(
                    text = "Encuentra a gamers cerca de ti en Cochabamba. Presta tus juegos de siempre y juega a lo que siempre quisiste gratis.",
                    fontSize = 14.sp,
                    color = Color(0xFFA3A3C2),
                    lineHeight = 20.sp
                )
            }

            Column(
                modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                val gradientButtonBrush = Brush.horizontalGradient(
                    colors = listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6))
                )
                Button(
                    onClick = onNavigateToRegister,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(54.dp)
                        .clip(RoundedCornerShape(28.dp))
                        .background(gradientButtonBrush),
                    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
                ) {
                    Text("Comenzar", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                }

                Spacer(modifier = Modifier.height(16.dp))

                Row(
                    modifier = Modifier.clickable { onNavigateToLogin() },
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("¿Ya tienes cuenta? ", fontSize = 14.sp, color = Color(0xFFA3A3C2))
                    Text("Inicia sesión", fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                }
            }
        }
    }
}

@Composable
fun LoginScreen(
    viewModel: AuthViewModel = koinViewModel(),
    onLoginSuccess: () -> Unit,
    onNavigateToRegister: () -> Unit
) {
    val state by viewModel.state.collectAsState()
    var email by remember { mutableStateOf("mateo@correo.com") }
    var pass by remember { mutableStateOf("12345678") }

    LaunchedEffect(state.isAuthenticated) {
        if (state.isAuthenticated) {
            onLoginSuccess()
        }
    }

    Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0B0B0F)) {
        Column(
            modifier = Modifier.fillMaxSize().statusBarsPadding().navigationBarsPadding().padding(24.dp).verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.SpaceBetween,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.Center
                ) {
                    Box(
                        modifier = Modifier.size(36.dp).clip(RoundedCornerShape(8.dp)).background(Color(0xFF181818)),
                        contentAlignment = Alignment.Center
                    ) {
                        GamePadIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                    }
                    Spacer(modifier = Modifier.width(10.dp))
                    Column {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Play", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color.White)
                            Text("Swap", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                        }
                        Text("COCHABAMBA", fontSize = 9.sp, fontWeight = FontWeight.SemiBold, color = Color(0xFFA3A3C2), letterSpacing = 1.5.sp)
                    }
                }

                Spacer(modifier = Modifier.height(36.dp))
                Text("Vuelve a la partida", fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    "Inicia sesión y sigue descubriendo juegos con tu comunidad en Cochabamba.",
                    fontSize = 14.sp,
                    color = Color(0xFFA3A3C2),
                    lineHeight = 20.sp,
                    modifier = Modifier.fillMaxWidth()
                )

                Spacer(modifier = Modifier.height(28.dp))

                Text("Correo electrónico", fontSize = 13.sp, color = Color(0xFFA3A3C2), modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(6.dp))
                OutlinedTextField(
                    value = email,
                    onValueChange = { email = it },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = Color(0xFF00D9A6),
                        unfocusedBorderColor = Color(0xFF282834),
                        focusedContainerColor = Color(0xFF121218),
                        unfocusedContainerColor = Color(0xFF121218)
                    )
                )

                Spacer(modifier = Modifier.height(16.dp))

                Text("Contraseña", fontSize = 13.sp, color = Color(0xFFA3A3C2), modifier = Modifier.fillMaxWidth())
                Spacer(modifier = Modifier.height(6.dp))
                OutlinedTextField(
                    value = pass,
                    onValueChange = { pass = it },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = Color(0xFF00D9A6),
                        unfocusedBorderColor = Color(0xFF282834),
                        focusedContainerColor = Color(0xFF121218),
                        unfocusedContainerColor = Color(0xFF121218)
                    )
                )

                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    "¿Olvidaste tu contraseña?",
                    fontSize = 13.sp,
                    color = Color(0xFF00D9A6),
                    modifier = Modifier.align(Alignment.End).clickable { }
                )
            }

            Column(horizontalAlignment = Alignment.CenterHorizontally, modifier = Modifier.padding(top = 32.dp, bottom = 16.dp)) {
                val gradientButtonBrush = Brush.horizontalGradient(
                    colors = listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6))
                )
                Button(
                    onClick = { viewModel.emitEvent(AuthEvent.OnLogin(email, pass)) },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(54.dp)
                        .clip(RoundedCornerShape(28.dp))
                        .background(gradientButtonBrush),
                    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
                ) {
                    Text("Iniciar sesión", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                }

                Spacer(modifier = Modifier.height(16.dp))
                TextButton(onClick = onNavigateToRegister) {
                    Text("¿Aún no tienes cuenta? Crea tu perfil", color = Color(0xFFA3A3C2), fontSize = 14.sp)
                }
                Spacer(modifier = Modifier.height(16.dp))
                Text(
                    "Al iniciar sesión aceptas nuestros\nTérminos de uso y Política de privacidad.",
                    fontSize = 11.sp,
                    color = Color(0xFFA3A3C2),
                    textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                    lineHeight = 16.sp
                )
            }
        }
    }
}

@Composable
fun ConsoleSelectionScreen(
    onConsoleSelected: () -> Unit
) {
    val consoles = remember {
        mutableStateListOf(
            ConsoleItem("PlayStation 5", true),
            ConsoleItem("PlayStation 4", true),
            ConsoleItem("Nintendo Switch", false),
            ConsoleItem("Nintendo Switch 2", false),
            ConsoleItem("Xbox One & Series", false)
        )
    }

    Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0B0B0F)) {
        Column(
            modifier = Modifier.fillMaxSize().statusBarsPadding().navigationBarsPadding().padding(24.dp).verticalScroll(rememberScrollState())
        ) {
            Spacer(modifier = Modifier.height(12.dp))
            Row(
                modifier = Modifier.fillMaxWidth().height(4.dp).clip(RoundedCornerShape(2.dp)).background(Color(0xFF282834))
            ) {
                Box(modifier = Modifier.fillMaxHeight().fillMaxWidth(0.4f).background(Color(0xFF00D9A6)))
            }
            Spacer(modifier = Modifier.height(32.dp))

            Text("¿Qué consolas tienes?", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                "Selecciona todas las plataformas en las que te gustaría intercambiar juegos.",
                fontSize = 14.sp,
                color = Color(0xFFA3A3C2),
                lineHeight = 20.sp
            )

            Spacer(modifier = Modifier.height(28.dp))

            Column(verticalArrangement = Arrangement.spacedBy(14.dp)) {
                consoles.forEachIndexed { index, console ->
                    Card(
                        modifier = Modifier.fillMaxWidth().clickable {
                            consoles[index] = console.copy(selected = !console.selected)
                        },
                        shape = RoundedCornerShape(16.dp),
                        colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)),
                        border = androidx.compose.foundation.BorderStroke(
                            1.dp,
                            if (console.selected) Color(0xFF00D9A6) else Color(0xFF282834)
                        )
                    ) {
                        Row(
                            modifier = Modifier.fillMaxWidth().padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Box(
                                    modifier = Modifier.size(32.dp).clip(CircleShape).background(if (console.selected) Color(0xFF00D9A6).copy(alpha = 0.2f) else Color(0xFF282834)),
                                    contentAlignment = Alignment.Center
                                ) {
                                    if (console.selected) {
                                        CheckIcon(modifier = Modifier.size(16.dp), color = Color(0xFF00D9A6))
                                    } else {
                                        Box(modifier = Modifier.size(10.dp).clip(CircleShape).background(Color(0xFFA3A3C2).copy(alpha = 0.4f)))
                                    }
                                }
                                Spacer(modifier = Modifier.width(14.dp))
                                Text(console.name, fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                            }
                            if (console.selected) {
                                CheckIcon(modifier = Modifier.size(18.dp), color = Color(0xFF00D9A6))
                            }
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(32.dp))

            val gradientButtonBrush = Brush.horizontalGradient(
                colors = listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6))
            )
            Button(
                onClick = onConsoleSelected,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(54.dp)
                    .clip(RoundedCornerShape(28.dp))
                    .background(gradientButtonBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Continuar", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}

data class ConsoleItem(val name: String, val selected: Boolean)

@Composable
fun ProfileCreationScreen(
    onProfileCreated: () -> Unit
) {
    var username by remember { mutableStateOf("Mateo Claros") }
    var location by remember { mutableStateOf("Queru Queru (Zona Norte)") }
    var bio by remember { mutableStateOf("Hola! Juego principalmente en PS5. Busco intercambiar RPGs y juegos de aventura como Elden Ring y God of War.") }

    Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0B0B0F)) {
        Column(
            modifier = Modifier.fillMaxSize().statusBarsPadding().navigationBarsPadding().padding(24.dp).verticalScroll(rememberScrollState())
        ) {
            Spacer(modifier = Modifier.height(12.dp))
            Row(
                modifier = Modifier.fillMaxWidth().height(4.dp).clip(RoundedCornerShape(2.dp)).background(Color(0xFF282834))
            ) {
                Box(modifier = Modifier.fillMaxHeight().fillMaxWidth(0.7f).background(Color(0xFF00D9A6)))
            }
            Spacer(modifier = Modifier.height(28.dp))

            Text("Crea tu perfil", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                "Queremos que tengas la mejor experiencia conectando con tu comunidad local.",
                fontSize = 14.sp,
                color = Color(0xFFA3A3C2),
                lineHeight = 20.sp
            )

            Spacer(modifier = Modifier.height(24.dp))

            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier.size(64.dp).clip(CircleShape).background(Color(0xFF181818)),
                    contentAlignment = Alignment.Center
                ) {
                    PersonIcon(modifier = Modifier.size(32.dp), color = Color(0xFF00D9A6))
                }
                Spacer(modifier = Modifier.width(16.dp))
                Column {
                    Text("Foto de perfil", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                    Text("Sube una imagen para tu cuenta", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            Text("Nombre Completo", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(6.dp))
            OutlinedTextField(
                value = username,
                onValueChange = { username = it },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = Color(0xFF282834),
                    unfocusedBorderColor = Color(0xFF282834),
                    focusedContainerColor = Color(0xFF121218),
                    unfocusedContainerColor = Color(0xFF121218)
                )
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text("Zona / Barrio (Cochabamba)", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(6.dp))
            OutlinedTextField(
                value = location,
                onValueChange = { location = it },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                trailingIcon = {
                    PinIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                },
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = Color(0xFF00D9A6),
                    unfocusedBorderColor = Color(0xFF00D9A6),
                    focusedContainerColor = Color(0xFF121218),
                    unfocusedContainerColor = Color(0xFF121218)
                )
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text("Biografía / ¿Qué buscas jugar?", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(6.dp))
            OutlinedTextField(
                value = bio,
                onValueChange = { bio = it },
                modifier = Modifier.fillMaxWidth().height(110.dp),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = Color(0xFF282834),
                    unfocusedBorderColor = Color(0xFF282834),
                    focusedContainerColor = Color(0xFF121218),
                    unfocusedContainerColor = Color(0xFF121218)
                )
            )

            Spacer(modifier = Modifier.height(32.dp))

            val gradientButtonBrush = Brush.horizontalGradient(
                colors = listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6))
            )
            Button(
                onClick = onProfileCreated,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(54.dp)
                    .clip(RoundedCornerShape(28.dp))
                    .background(gradientButtonBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Crear perfil", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}
