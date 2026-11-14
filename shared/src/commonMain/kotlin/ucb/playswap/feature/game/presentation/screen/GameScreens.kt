package ucb.playswap.feature.game.presentation.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
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
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource
import playswap.shared.generated.resources.*
import ucb.playswap.core.theme.*
import ucb.playswap.feature.home.presentation.screen.PlaySwapBottomNav

@Composable
fun MatchDetailScreen(
    gameId: String,
    onBack: () -> Unit,
    onRequestSwap: () -> Unit,
    onNavigateChat: () -> Unit
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Comparación de biblioteca", color = Color.White) },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                    }
                },
                actions = {
                    IconButton(onClick = {}) {
                        MoreVertIcon(modifier = Modifier.size(20.dp), color = Color.White)
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF0B0B0F))
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(20.dp)) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Row(modifier = Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
                    Image(
                        painter = painterResource(Res.drawable.sofia_avatar),
                        contentDescription = "Sofía Avatar",
                        modifier = Modifier.size(50.dp).clip(CircleShape),
                        contentScale = ContentScale.Crop
                    )
                    Spacer(modifier = Modifier.width(12.dp))
                    Column(modifier = Modifier.weight(1f)) {
                        Text("Sofía Valenzuela", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        Text("Activa ahora en Queru Queru", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                    }
                    Surface(shape = RoundedCornerShape(12.dp), color = Color(0xFF00D9A6).copy(alpha = 0.2f)) {
                        Text("100%", modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp), fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                    }
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                Column(modifier = Modifier.weight(1f)) {
                    Text("TÚ TIENES", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                    Spacer(modifier = Modifier.height(8.dp))
                    Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(12.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)), border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF00D9A6))) {
                        Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.god_of_war), contentDescription = "God of War", modifier = Modifier.size(44.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("God of War Ragnarok", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
                Column(modifier = Modifier.weight(1f)) {
                    Text("SOFÍA TIENE", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2))
                    Spacer(modifier = Modifier.height(8.dp))
                    Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(12.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)), border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF00D9A6))) {
                        Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.elden_ring), contentDescription = "Elden Ring", modifier = Modifier.size(44.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("Elden Ring", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                Column(modifier = Modifier.weight(1f)) {
                    Text("TÚ BUSCAS", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF8B5CF6))
                    Spacer(modifier = Modifier.height(8.dp))
                    Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(12.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)), border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF8B5CF6))) {
                        Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.elden_ring), contentDescription = "Elden Ring", modifier = Modifier.size(44.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("Elden Ring", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
                Column(modifier = Modifier.weight(1f)) {
                    Text("SOFÍA BUSCA", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2))
                    Spacer(modifier = Modifier.height(8.dp))
                    Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(12.dp), colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)), border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF8B5CF6))) {
                        Row(modifier = Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                            Image(painter = painterResource(Res.drawable.god_of_war), contentDescription = "God of War", modifier = Modifier.size(44.dp).clip(RoundedCornerShape(8.dp)), contentScale = ContentScale.Crop)
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("God of War Ragnarok", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.weight(1f))

            val gradientBrush = Brush.horizontalGradient(listOf(Color(0xFF00D9A6), Color(0xFF8B5CF6)))
            Button(
                onClick = onRequestSwap,
                modifier = Modifier.fillMaxWidth().height(52.dp).clip(RoundedCornerShape(26.dp)).background(gradientBrush),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent)
            ) {
                Text("Solicitar intercambio", fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(modifier = Modifier.height(12.dp))
            OutlinedButton(
                onClick = onNavigateChat,
                modifier = Modifier.fillMaxWidth().height(52.dp),
                shape = RoundedCornerShape(26.dp),
                border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF282834))
            ) {
                Text("Enviar mensaje", fontWeight = FontWeight.Bold, color = Color.White)
            }
        }
    }
}

@Composable
fun MyGamesScreen(
    onBack: () -> Unit,
    onAddNewGame: () -> Unit,
    onNavigateToHome: () -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToExchanges: () -> Unit,
    onNavigateToProfile: () -> Unit
) {
    var selectedTab by remember { mutableStateOf(0) }
    val myGames = listOf(
        GameCardInfo("God of War Ragnarok", "PS5", Res.drawable.god_of_war),
        GameCardInfo("Cyberpunk 2077", "XBOX", Res.drawable.cyberpunk),
        GameCardInfo("Zelda: Tears of the Ki...", "SWITCH", Res.drawable.zelda_totk),
        GameCardInfo("Elden Ring", "PS5", Res.drawable.elden_ring)
    )

    Scaffold(
        topBar = {
            Column(modifier = Modifier.fillMaxWidth().background(Color(0xFF0B0B0F)).statusBarsPadding().padding(20.dp)) {
                Text("Mis Juegos", fontSize = 26.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Text("Gestiona tu biblioteca personal", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                Spacer(modifier = Modifier.height(16.dp))
                Row(modifier = Modifier.fillMaxWidth()) {
                    TabItem("Tengo (4)", selectedTab == 0) { selectedTab = 0 }
                    TabItem("Busco (2)", selectedTab == 1) { selectedTab = 1 }
                }
            }
        },
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 2,
                onTabSelected = { tab ->
                    when (tab) {
                        0 -> onNavigateToHome()
                        1 -> onNavigateToSearch()
                        3 -> onNavigateToExchanges()
                        4 -> onNavigateToProfile()
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = onAddNewGame,
                containerColor = Color(0xFF00D9A6),
                shape = CircleShape
            ) {
                AddIcon(modifier = Modifier.size(24.dp), color = Color.Black)
            }
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            modifier = Modifier.fillMaxSize().padding(padding).padding(horizontal = 20.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(vertical = 16.dp)
        ) {
            items(myGames) { game ->
                Card(
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
                ) {
                    Column(modifier = Modifier.padding(12.dp)) {
                        Image(
                            painter = painterResource(game.coverRes),
                            contentDescription = game.title,
                            modifier = Modifier.fillMaxWidth().height(150.dp).clip(RoundedCornerShape(12.dp)),
                            contentScale = ContentScale.Crop
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(game.title, fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color.White, maxLines = 1)
                        Spacer(modifier = Modifier.height(4.dp))
                        Surface(shape = RoundedCornerShape(4.dp), color = Color(0xFF181818)) {
                            Text(game.console, modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp), fontSize = 10.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                        }
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
        Text(title, fontWeight = FontWeight.Bold, color = if (selected) Color(0xFF00D9A6) else Color(0xFFA3A3C2))
        Spacer(modifier = Modifier.height(6.dp))
        Box(modifier = Modifier.fillMaxWidth().height(2.dp).background(if (selected) Color(0xFF00D9A6) else Color.Transparent))
    }
}

data class GameCardInfo(val title: String, val console: String, val coverRes: DrawableResource)
