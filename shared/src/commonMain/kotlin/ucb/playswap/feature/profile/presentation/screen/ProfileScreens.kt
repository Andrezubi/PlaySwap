package ucb.playswap.feature.profile.presentation.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
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
import playswap.shared.generated.resources.*
import ucb.playswap.core.theme.*
import ucb.playswap.feature.home.presentation.screen.PlaySwapBottomNav

@Composable
fun ProfileScreen(
    onBack: () -> Unit,
    onNavigateSettings: () -> Unit,
    onNavigateMyGames: () -> Unit,
    onNavigateToHome: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToExchanges: () -> Unit
) {
    Scaffold(
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 4,
                onTabSelected = { tab ->
                    when (tab) {
                        0 -> onNavigateToHome()
                        1 -> onNavigateToSearch()
                        2 -> onNavigateMyGames()
                        3 -> onNavigateToExchanges()
                    }
                }
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).statusBarsPadding().navigationBarsPadding().padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Spacer(modifier = Modifier.height(10.dp))
            Image(
                painter = painterResource(Res.drawable.mateo_avatar),
                contentDescription = "Mateo Claros Avatar",
                modifier = Modifier.size(90.dp).clip(CircleShape),
                contentScale = ContentScale.Crop
            )
            Spacer(modifier = Modifier.height(14.dp))
            Text("Mateo Claros", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Text("Cala Cala, Cochabamba", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(8.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Row(horizontalArrangement = Arrangement.spacedBy(0.dp)) {
                    repeat(5) { StarIcon(modifier = Modifier.size(14.dp), color = Color(0xFFFFD700)) }
                }
                Spacer(modifier = Modifier.width(6.dp))
                Text("4.8 ", fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                Text("(18 calificaciones)", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            }

            Spacer(modifier = Modifier.height(24.dp))
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                StatCard("14", "Completados", Modifier.weight(1f))
                StatCard("8", "Disponibles", Modifier.weight(1f))
                StatCard("6m", "Tiempo app", Modifier.weight(1f))
            }

            Spacer(modifier = Modifier.height(24.dp))
            Column(modifier = Modifier.fillMaxWidth()) {
                Text("CONSOLAS", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
                Spacer(modifier = Modifier.height(8.dp))
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Surface(shape = RoundedCornerShape(8.dp), color = Color(0xFF00D9A6).copy(alpha = 0.2f)) {
                        Text("PlayStation 5", modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp), fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                    }
                    Surface(shape = RoundedCornerShape(8.dp), color = Color(0xFF8B5CF6).copy(alpha = 0.2f)) {
                        Text("Xbox Series X", modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp), fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF8B5CF6))
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))
            Card(
                modifier = Modifier.fillMaxWidth().clickable { onNavigateMyGames() },
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Row(modifier = Modifier.padding(18.dp), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Text("Editar Perfil", fontWeight = FontWeight.Bold, color = Color.White)
                    Text(">", color = Color(0xFFA3A3C2), fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }
            }
            Spacer(modifier = Modifier.height(12.dp))
            Card(
                modifier = Modifier.fillMaxWidth().clickable { onNavigateSettings() },
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Row(modifier = Modifier.padding(18.dp), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Text("Configuración", fontWeight = FontWeight.Bold, color = Color.White)
                    Text(">", color = Color(0xFFA3A3C2), fontSize = 16.sp, fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

@Composable
fun StatCard(value: String, label: String, modifier: Modifier) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
    ) {
        Column(modifier = Modifier.padding(14.dp), horizontalAlignment = Alignment.CenterHorizontally) {
            Text(value, fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Spacer(modifier = Modifier.height(4.dp))
            Text(label, fontSize = 11.sp, color = Color(0xFFA3A3C2))
        }
    }
}

@Composable
fun RatingScreen(
    onBack: () -> Unit,
    onSubmitRating: () -> Unit
) {
    var comment by remember { mutableStateOf("Todo excelente, el disco está impecable y Sofía fue muy puntual en el Cine Center. ¡Recomendada!") }
    val tags = listOf("Puntual", "Juego impecable", "Amable", "Recomendado", "Buena comunicación")

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0B0B0F))
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(horizontal = 24.dp, vertical = 8.dp), horizontalAlignment = Alignment.CenterHorizontally) {
            Box(
                modifier = Modifier.size(70.dp).clip(CircleShape).background(Color(0xFF00D9A6).copy(alpha = 0.2f)),
                contentAlignment = Alignment.Center
            ) {
                CheckIcon(modifier = Modifier.size(36.dp), color = Color(0xFF00D9A6))
            }
            Spacer(modifier = Modifier.height(16.dp))
            Text("¡Intercambio Completado!", fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Text("Califica tu experiencia de intercambio con Sofía.", fontSize = 13.sp, color = Color(0xFFA3A3C2))

            Spacer(modifier = Modifier.height(20.dp))
            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Row(modifier = Modifier.padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                    Image(painter = painterResource(Res.drawable.sofia_avatar), contentDescription = "Sofía", modifier = Modifier.size(44.dp).clip(CircleShape), contentScale = ContentScale.Crop)
                    Spacer(modifier = Modifier.width(12.dp))
                    Column {
                        Text("Sofía Valenzuela", fontWeight = FontWeight.Bold, color = Color.White)
                        Text("Queru Queru · 14 intercambios", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text("TU CALIFICACIÓN", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                repeat(4) { StarIcon(modifier = Modifier.size(32.dp), color = Color(0xFF00D9A6)) }
                StarIcon(modifier = Modifier.size(32.dp), color = Color(0xFF282834))
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text("COMENTARIOS RÁPIDOS", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp, modifier = Modifier.align(Alignment.Start))
            Spacer(modifier = Modifier.height(8.dp))
            FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                tags.forEach { tag ->
                    FilterChip(
                        selected = true,
                        onClick = {},
                        label = { Text(tag) },
                        colors = FilterChipDefaults.filterChipColors(containerColor = Color(0xFF121218), selectedContainerColor = Color(0xFF00D9A6).copy(alpha = 0.2f), selectedLabelColor = Color(0xFF00D9A6))
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            OutlinedTextField(
                value = comment,
                onValueChange = { comment = it },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = Color(0xFF282834), unfocusedBorderColor = Color(0xFF282834), focusedContainerColor = Color(0xFF121218), unfocusedContainerColor = Color(0xFF121218))
            )

            Spacer(modifier = Modifier.weight(1f))
            val gradientBrush = Brush.horizontalGradient(listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6)))
            Button(
                onClick = onSubmitRating,
                modifier = Modifier.fillMaxWidth().height(52.dp).clip(RoundedCornerShape(26.dp)).background(gradientBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Enviar calificación", fontWeight = FontWeight.Bold, color = Color.White)
            }
        }
    }
}

@Composable
fun SettingsScreen(
    onBack: () -> Unit,
    onLogout: () -> Unit,
    onNavigateToHome: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToMyGames: () -> Unit,
    onNavigateToExchanges: () -> Unit,
    onNavigateToProfile: () -> Unit
) {
    var notificationsEnabled by remember { mutableStateOf(true) }
    var remindersEnabled by remember { mutableStateOf(true) }
    var visibleInSearch by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            Box(modifier = Modifier.statusBarsPadding()) {
                TopAppBar(
                    title = { Text("Configuración", color = Color.White, fontWeight = FontWeight.Bold) },
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0B0B0F))
                )
            }
        },
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 4,
                onTabSelected = { tab ->
                    when (tab) {
                        0 -> onNavigateToHome()
                        1 -> onNavigateToSearch()
                        2 -> onNavigateToMyGames()
                        3 -> onNavigateToExchanges()
                        4 -> onNavigateToProfile()
                    }
                }
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).navigationBarsPadding().padding(20.dp).verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text("Tu cuenta, a tu manera.", fontSize = 13.sp, color = Color(0xFFA3A3C2))

            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Row(modifier = Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
                    Image(painter = painterResource(Res.drawable.mateo_avatar), contentDescription = "Mateo Avatar", modifier = Modifier.size(44.dp).clip(CircleShape), contentScale = ContentScale.Crop)
                    Spacer(modifier = Modifier.width(12.dp))
                    Column {
                        Text("Mateo Claros", fontWeight = FontWeight.Bold, color = Color.White)
                        Text("Cala Cala · Cochabamba", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                    }
                }
            }

            Text("CUENTA", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Text("Editar perfil", color = Color.White, fontWeight = FontWeight.Bold)
                        ChevronRightIcon(modifier = Modifier.size(16.dp), color = Color(0xFFA3A3C2))
                    }
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Text("Contraseña y seguridad", color = Color.White, fontWeight = FontWeight.Bold)
                        ChevronRightIcon(modifier = Modifier.size(16.dp), color = Color(0xFFA3A3C2))
                    }
                }
            }

            Text("PREFERENCIAS", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Text("Notificaciones", color = Color.White)
                        Switch(checked = notificationsEnabled, onCheckedChange = { notificationsEnabled = it }, colors = SwitchDefaults.colors(checkedThumbColor = Color.White, checkedTrackColor = Color(0xFF00D9A6)))
                    }
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Text("Recordatorios de devolución", color = Color.White)
                        Switch(checked = remindersEnabled, onCheckedChange = { remindersEnabled = it }, colors = SwitchDefaults.colors(checkedThumbColor = Color.White, checkedTrackColor = Color(0xFF00D9A6)))
                    }
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Text("Perfil visible en búsquedas", color = Color.White)
                        Switch(checked = visibleInSearch, onCheckedChange = { visibleInSearch = it }, colors = SwitchDefaults.colors(checkedThumbColor = Color.White, checkedTrackColor = Color(0xFF00D9A6)))
                    }
                }
            }

            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Row(modifier = Modifier.padding(16.dp), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Text("Ayuda y privacidad", color = Color.White, fontWeight = FontWeight.Bold)
                    ChevronRightIcon(modifier = Modifier.size(16.dp), color = Color(0xFFA3A3C2))
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
            Button(
                onClick = onLogout,
                modifier = Modifier.fillMaxWidth().height(52.dp),
                shape = RoundedCornerShape(26.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF121218))
            ) {
                Text("Cerrar sesión", fontWeight = FontWeight.Bold, color = Color(0xFFE11D48))
            }
            Spacer(modifier = Modifier.height(8.dp))
            Text("PlaySwap · Versión 1.0.4", fontSize = 12.sp, color = Color(0xFFA3A3C2), modifier = Modifier.align(Alignment.CenterHorizontally))
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}
