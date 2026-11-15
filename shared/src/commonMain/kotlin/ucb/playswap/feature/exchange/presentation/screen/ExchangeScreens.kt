package ucb.playswap.feature.exchange.presentation.screen

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
fun RequestFormScreen(
    gameId: String,
    onBack: () -> Unit,
    onSubmitRequest: () -> Unit
) {
    var selectedType by remember { mutableStateOf("Intercambio") }
    var selectedDuration by remember { mutableStateOf("14 días") }

    Scaffold(
        topBar = {
            Box(modifier = Modifier.statusBarsPadding()) {
                TopAppBar(
                    title = { Text("Solicitar Intercambio", color = Color.White, fontWeight = FontWeight.Bold) },
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0B0B0F))
                )
            }
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).navigationBarsPadding().padding(20.dp)) {
            Text("Elige los términos del intercambio con Sofía.", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(16.dp))

            Surface(
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp),
                color = Color(0xFF121218)
            ) {
                Row(modifier = Modifier.padding(4.dp)) {
                    Box(
                        modifier = Modifier.weight(1f).fillMaxHeight().clip(RoundedCornerShape(8.dp)).background(if (selectedType == "Intercambio") Color(0xFF1C1C24) else Color.Transparent).clickable { selectedType = "Intercambio" },
                        contentAlignment = Alignment.Center
                    ) {
                        Text("Intercambio", fontSize = 13.sp, fontWeight = FontWeight.Bold, color = if (selectedType == "Intercambio") Color(0xFF00D9A6) else Color(0xFFA3A3C2))
                    }
                    Box(
                        modifier = Modifier.weight(1f).fillMaxHeight().clip(RoundedCornerShape(8.dp)).background(if (selectedType == "Préstamo") Color(0xFF1C1C24) else Color.Transparent).clickable { selectedType = "Préstamo" },
                        contentAlignment = Alignment.Center
                    ) {
                        Text("Préstamo temporal", fontSize = 13.sp, fontWeight = FontWeight.Bold, color = if (selectedType == "Préstamo") Color(0xFF00D9A6) else Color(0xFFA3A3C2))
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))
            Text("DURACIÓN RECOMENDADA", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Spacer(modifier = Modifier.height(10.dp))

            FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                listOf("7 días", "14 días", "30 días", "Personalizada").forEach { duration ->
                    FilterChip(
                        selected = selectedDuration == duration,
                        onClick = { selectedDuration = duration },
                        label = { Text(duration) },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = Color(0xFF121218),
                            selectedLabelColor = Color(0xFF00D9A6),
                            containerColor = Color(0xFF121218),
                            labelColor = Color(0xFFA3A3C2)
                        ),
                        border = FilterChipDefaults.filterChipBorder(
                            borderColor = if (selectedDuration == duration) Color(0xFF00D9A6) else Color(0xFF282834),
                            enabled = true,
                            selected = selectedDuration == duration
                        )
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("JUEGOS SELECCIONADOS", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
                    Spacer(modifier = Modifier.height(12.dp))
                    Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.SpaceBetween) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.god_of_war), contentDescription = "God of War", modifier = Modifier.size(40.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("God of War", fontSize = 13.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                        RepeatIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.elden_ring), contentDescription = "Elden Ring", modifier = Modifier.size(40.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("Elden Ring", fontSize = 13.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.weight(1f))
            val gradientBrush = Brush.horizontalGradient(listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6)))
            Button(
                onClick = onSubmitRequest,
                modifier = Modifier.fillMaxWidth().height(52.dp).clip(RoundedCornerShape(26.dp)).background(gradientBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Enviar solicitud", fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(modifier = Modifier.height(10.dp))
            OutlinedButton(
                onClick = onBack,
                modifier = Modifier.fillMaxWidth().height(52.dp),
                shape = RoundedCornerShape(26.dp),
                border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF282834))
            ) {
                Text("Cancelar", fontWeight = FontWeight.Bold, color = Color.White)
            }
        }
    }
}

@Composable
fun RequestSentScreen(
    onNavigateHome: () -> Unit
) {
    Scaffold(containerColor = Color(0xFF0B0B0F)) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).padding(24.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier.size(100.dp).clip(CircleShape).background(Color(0xFF00D9A6).copy(alpha = 0.15f)),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier.size(80.dp).clip(CircleShape).background(Color(0xFF00D9A6).copy(alpha = 0.25f)),
                    contentAlignment = Alignment.Center
                ) {
                    CheckIcon(modifier = Modifier.size(28.dp), color = Color(0xFF00D9A6))
                }
            }
            Spacer(modifier = Modifier.height(28.dp))
            Text("¡Solicitud Enviada!", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                "Le hemos avisado a Sofía. Te notificaremos en cuanto acepte los términos del intercambio.",
                fontSize = 14.sp,
                color = Color(0xFFA3A3C2),
                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                lineHeight = 20.sp
            )
            Spacer(modifier = Modifier.height(48.dp))
            val gradientBrush = Brush.horizontalGradient(listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6)))
            Button(
                onClick = onNavigateHome,
                modifier = Modifier.fillMaxWidth().height(52.dp).clip(RoundedCornerShape(26.dp)).background(gradientBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Volver al inicio", fontWeight = FontWeight.Bold, color = Color.White)
            }
        }
    }
}

@Composable
fun ExchangesListScreen(
    onBack: () -> Unit,
    onNavigateChat: () -> Unit,
    onNavigateLoanReturn: () -> Unit,
    onNavigateToHome: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToMyGames: () -> Unit,
    onNavigateToProfile: () -> Unit
) {
    var selectedTab by remember { mutableStateOf(1) }

    Scaffold(
        topBar = {
            Column(modifier = Modifier.fillMaxWidth().background(Color(0xFF0B0B0F)).statusBarsPadding().padding(20.dp)) {
                Text("Tus Intercambios", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Text("Gestiona tus propuestas y préstamos de juegos", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                Spacer(modifier = Modifier.height(16.dp))
                Row(modifier = Modifier.fillMaxWidth()) {
                    TabItem("Pendientes", selectedTab == 0) { selectedTab = 0 }
                    TabItem("Activos", selectedTab == 1) { selectedTab = 1 }
                    TabItem("Historial", selectedTab == 2) { selectedTab = 2 }
                }
            }
        },
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 3,
                onTabSelected = { tab ->
                    when (tab) {
                        0 -> onNavigateToHome()
                        1 -> onNavigateToSearch()
                        2 -> onNavigateToMyGames()
                        4 -> onNavigateToProfile()
                    }
                }
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(horizontal = 20.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
            Card(
                modifier = Modifier.fillMaxWidth().clickable { onNavigateChat() },
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.sofia_avatar), contentDescription = "Sofía", modifier = Modifier.size(36.dp).clip(CircleShape), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Column {
                                Text("Sofía Valenzuela", fontWeight = FontWeight.Bold, color = Color.White, fontSize = 15.sp)
                                Text("Queru Queru · Hace 2 días", fontSize = 11.sp, color = Color(0xFFA3A3C2))
                            }
                        }
                        Surface(shape = RoundedCornerShape(8.dp), color = Color(0xFF00D9A6).copy(alpha = 0.2f)) {
                            Text("Activo", modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp), fontSize = 11.sp, color = Color(0xFF00D9A6), fontWeight = FontWeight.Bold)
                        }
                    }
                    Spacer(modifier = Modifier.height(14.dp))
                    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        Image(painter = painterResource(Res.drawable.elden_ring), contentDescription = "Elden Ring", modifier = Modifier.width(60.dp).height(80.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                        RepeatIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                        Image(painter = painterResource(Res.drawable.god_of_war), contentDescription = "God of War", modifier = Modifier.width(60.dp).height(80.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text("Tiempo restante:", fontSize = 11.sp, color = Color(0xFFA3A3C2))
                            Text("12 Días", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                    Spacer(modifier = Modifier.height(14.dp))
                    Button(
                        onClick = onNavigateLoanReturn,
                        modifier = Modifier.fillMaxWidth().height(40.dp),
                        shape = RoundedCornerShape(12.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF00D9A6))
                    ) {
                        Text("Devolver / Finalizar préstamo", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.Black)
                    }
                }
            }

            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.carlos_avatar), contentDescription = "Carlos", modifier = Modifier.size(36.dp).clip(CircleShape), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Column {
                                Text("Carlos Mendoza", fontWeight = FontWeight.Bold, color = Color.White, fontSize = 15.sp)
                                Text("Cala Cala · Ayer", fontSize = 11.sp, color = Color(0xFFA3A3C2))
                            }
                        }
                        Surface(shape = RoundedCornerShape(8.dp), color = Color(0xFF8B5CF6).copy(alpha = 0.2f)) {
                            Text("Pendiente", modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp), fontSize = 11.sp, color = Color(0xFF8B5CF6), fontWeight = FontWeight.Bold)
                        }
                    }
                    Spacer(modifier = Modifier.height(14.dp))
                    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        Image(painter = painterResource(Res.drawable.spiderman2), contentDescription = "Spider-Man 2", modifier = Modifier.width(60.dp).height(80.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                        RepeatIcon(modifier = Modifier.size(20.dp), color = Color(0xFF00D9A6))
                        Image(painter = painterResource(Res.drawable.demons_souls), contentDescription = "Demon's Souls", modifier = Modifier.width(60.dp).height(80.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                        Spacer(modifier = Modifier.width(12.dp))
                        Text("Esperando confirmación", fontSize = 12.sp, color = Color(0xFF8B5CF6))
                    }
                }
            }
        }
    }
}

@Composable
fun RowScope.TabItem(title: String, selected: Boolean, onClick: () -> Unit) {
    Column(
        modifier = Modifier.weight(1f).clickable { onClick() }.padding(bottom = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(title, fontWeight = FontWeight.Bold, color = if (selected) Color(0xFF00D9A6) else Color(0xFFA3A3C2), fontSize = 13.sp)
        Spacer(modifier = Modifier.height(6.dp))
        Box(modifier = Modifier.fillMaxWidth().height(2.dp).background(if (selected) Color(0xFF00D9A6) else Color.Transparent))
    }
}

@Composable
fun LoanReturnScreen(
    onBack: () -> Unit,
    onReturnConfirmed: () -> Unit
) {
    var confirmed by remember { mutableStateOf(true) }

    Scaffold(
        topBar = {
            Box(modifier = Modifier.statusBarsPadding()) {
                TopAppBar(
                    title = { Text("Devolver préstamo", color = Color.White, fontWeight = FontWeight.Bold) },
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0B0B0F))
                )
            }
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).navigationBarsPadding().padding(20.dp).verticalScroll(rememberScrollState())) {
            Text("Cierra el préstamo con Sofía.", fontSize = 13.sp, color = Color(0xFFA3A3C2))
            Spacer(modifier = Modifier.height(16.dp))

            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Row(modifier = Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
                    Image(painter = painterResource(Res.drawable.elden_ring), contentDescription = "Elden Ring", modifier = Modifier.width(60.dp).height(80.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                    Spacer(modifier = Modifier.width(14.dp))
                    Column {
                        Text("Elden Ring", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        Text("PlayStation 5 · Edición física", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                        Spacer(modifier = Modifier.height(4.dp))
                        Text("Devolver a Sofía Valenzuela", fontSize = 12.sp, color = Color.White, fontWeight = FontWeight.Bold)
                        Text("12 días restantes", fontSize = 12.sp, color = Color(0xFF00D9A6))
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text("DETALLES DE LA ENTREGA", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Fecha y hora acordadas", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                    Text("Hoy · 18:00", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                    Spacer(modifier = Modifier.height(12.dp))
                    Text("Lugar de encuentro", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                    Text("Plaza de las Banderas · Cochabamba", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            Text("ESTADO DEL JUEGO", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(16.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))) {
                Row(modifier = Modifier.padding(16.dp), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Text("En buen estado, con caja y disco", fontSize = 14.sp, color = Color.White, fontWeight = FontWeight.Bold)
                    ChevronRightIcon(modifier = Modifier.size(16.dp), color = Color(0xFFA3A3C2))
                }
            }

            Spacer(modifier = Modifier.height(16.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = confirmed,
                    onCheckedChange = { confirmed = it },
                    colors = CheckboxDefaults.colors(checkedColor = Color(0xFF00D9A6))
                )
                Text("Confirmo que entregué el juego a Sofía en las condiciones acordadas.", fontSize = 13.sp, color = Color.White)
            }

            Spacer(modifier = Modifier.height(24.dp))
            Text(
                "Sofía también deberá confirmar la recepción para finalizar el préstamo.",
                fontSize = 12.sp,
                color = Color(0xFFA3A3C2),
                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp)
            )

            val gradientBrush = Brush.horizontalGradient(listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6)))
            Button(
                onClick = onReturnConfirmed,
                modifier = Modifier.fillMaxWidth().height(52.dp).clip(RoundedCornerShape(26.dp)).background(gradientBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Confirmar devolución", fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(modifier = Modifier.height(8.dp))
            TextButton(onClick = {}, modifier = Modifier.align(Alignment.CenterHorizontally)) {
                Text("Coordinar por chat", color = Color(0xFF00D9A6), fontWeight = FontWeight.Bold)
            }
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}
