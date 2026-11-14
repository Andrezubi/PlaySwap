package ucb.playswap.feature.home.presentation.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource
import playswap.shared.generated.resources.*
import ucb.playswap.core.theme.*

@Composable
fun HomeFeedScreen(
    onNavigateToDetail: (String) -> Unit,
    onNavigateToSearch: () -> Unit,
    onNavigateToMyGames: () -> Unit,
    onNavigateToExchanges: () -> Unit,
    onNavigateToProfile: () -> Unit
) {
    val matches = remember {
        listOf(
            MatchItem(
                "1", "Sofía Valenzuela", "Queru Queru · a 2.3 km", "100% Compatible",
                listOf(Res.drawable.elden_ring, Res.drawable.mario_odyssey, Res.drawable.spiderman2),
                "PS5", "¡Ella busca lo que tú tienes!", Res.drawable.sofia_avatar
            ),
            MatchItem(
                "2", "Andrés Rocha", "Cala Cala · a 4.1 km", "75% Compatible",
                listOf(Res.drawable.tlou2, Res.drawable.ghost_tsushima),
                "PS4", "", Res.drawable.andres_avatar
            )
        )
    }

    Scaffold(
        topBar = {
            Surface(
                color = Color(0xFF0B0B0F),
                tonalElevation = 0.dp
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth().statusBarsPadding().padding(horizontal = 20.dp, vertical = 14.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Image(
                            painter = painterResource(Res.drawable.mateo_avatar),
                            contentDescription = "Mateo Avatar",
                            modifier = Modifier.size(44.dp).clip(CircleShape),
                            contentScale = ContentScale.Crop
                        )
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text("Hola de nuevo,", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                            Text("Mateo", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                    Box(
                        modifier = Modifier.size(40.dp).clip(CircleShape).background(Color(0xFF181818)),
                        contentAlignment = Alignment.Center
                    ) {
                        BellIcon(modifier = Modifier.size(20.dp), color = Color.White)
                    }
                }
            }
        },
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 0,
                onTabSelected = { tab ->
                    when (tab) {
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
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(padding).padding(horizontal = 20.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(bottom = 24.dp)
        ) {
            item {
                Spacer(modifier = Modifier.height(8.dp))
                Text("Coincidencias cercanas", fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Spacer(modifier = Modifier.height(4.dp))
                Text("Encontrados en Cochabamba basándonos en tu biblioteca", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                Spacer(modifier = Modifier.height(8.dp))
            }
            items(matches) { match ->
                Card(
                    modifier = Modifier.fillMaxWidth().clickable { onNavigateToDetail(match.id) },
                    shape = RoundedCornerShape(20.dp),
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF00D9A6).copy(alpha = 0.5f))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Image(
                                    painter = painterResource(match.avatarResource),
                                    contentDescription = match.name,
                                    modifier = Modifier.size(40.dp).clip(CircleShape),
                                    contentScale = ContentScale.Crop
                                )
                                Spacer(modifier = Modifier.width(10.dp))
                                Column {
                                    Text(match.name, fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                                    Text(match.location, fontSize = 12.sp, color = Color(0xFFA3A3C2))
                                }
                            }
                            Surface(
                                shape = RoundedCornerShape(12.dp),
                                color = Color(0xFF00D9A6).copy(alpha = 0.15f)
                            ) {
                                Text(
                                    match.compatibility,
                                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF00D9A6)
                                )
                            }
                        }

                        Spacer(modifier = Modifier.height(14.dp))
                        Text("TIENE DISPONIBLE:", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
                        Spacer(modifier = Modifier.height(8.dp))

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            match.gameCovers.forEach { coverRes ->
                                Image(
                                    painter = painterResource(coverRes),
                                    contentDescription = "Game Cover",
                                    modifier = Modifier.width(76.dp).height(100.dp).clip(RoundedCornerShape(10.dp)),
                                    contentScale = ContentScale.Crop
                                )
                            }
                            Box(
                                modifier = Modifier
                                    .width(60.dp)
                                    .height(100.dp)
                                    .clip(RoundedCornerShape(10.dp))
                                    .background(Color(0xFF1C1C24)),
                                contentAlignment = Alignment.Center
                            ) {
                                Text("+4", fontSize = 14.sp, fontWeight = FontWeight.Bold, color = Color.White)
                            }
                        }

                        Spacer(modifier = Modifier.height(14.dp))
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Surface(
                                shape = RoundedCornerShape(6.dp),
                                color = Color(0xFF282834)
                            ) {
                                Text(match.console, modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp), fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFF8B5CF6))
                            }
                            if (match.footerText.isNotEmpty()) {
                                Text(match.footerText, fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                            }
                        }
                    }
                }
            }
        }
    }
}

data class MatchItem(
    val id: String,
    val name: String,
    val location: String,
    val compatibility: String,
    val gameCovers: List<DrawableResource>,
    val console: String,
    val footerText: String,
    val avatarResource: DrawableResource
)

@Composable
fun PlaySwapBottomNav(
    currentTab: Int,
    onTabSelected: (Int) -> Unit
) {
    NavigationBar(
        containerColor = Color(0xFF0B0B0F),
        tonalElevation = 8.dp
    ) {
        val items = listOf("Inicio", "Buscar", "Mis juegos", "Intercambios", "Perfil")

        items.forEachIndexed { index, item ->
            NavigationBarItem(
                selected = currentTab == index,
                onClick = { onTabSelected(index) },
                icon = {
                    val iconColor = if (currentTab == index) Color(0xFF00D9A6) else Color(0xFFA3A3C2)
                    when (index) {
                        0 -> HomeIcon(modifier = Modifier.size(22.dp), color = iconColor)
                        1 -> SearchIcon(modifier = Modifier.size(22.dp), color = iconColor)
                        2 -> BookIcon(modifier = Modifier.size(22.dp), color = iconColor)
                        3 -> RepeatIcon(modifier = Modifier.size(22.dp), color = iconColor)
                        else -> PersonIcon(modifier = Modifier.size(22.dp), color = iconColor)
                    }
                },
                label = { Text(item, fontSize = 11.sp) },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = Color(0xFF00D9A6),
                    selectedTextColor = Color(0xFF00D9A6),
                    unselectedIconColor = Color(0xFFA3A3C2),
                    unselectedTextColor = Color(0xFFA3A3C2),
                    indicatorColor = Color.Transparent
                )
            )
        }
    }
}

@Composable
fun SearchScreen(
    onBack: () -> Unit,
    onNavigateToDetail: (String) -> Unit,
    onNavigateToHome: () -> Unit,
    onNavigateToMyGames: () -> Unit,
    onNavigateToExchanges: () -> Unit,
    onNavigateToProfile: () -> Unit
) {
    var query by remember { mutableStateOf("") }
    val filters = listOf("PS5", "PS4", "Xbox", "Switch", "1 km", "5 km", "10 km")
    var selectedFilter by remember { mutableStateOf("PS5") }

    Scaffold(
        topBar = {
            Column(modifier = Modifier.fillMaxWidth().background(Color(0xFF0B0B0F)).statusBarsPadding().padding(top = 16.dp, start = 20.dp, end = 20.dp, bottom = 12.dp)) {
                OutlinedTextField(
                    value = query,
                    onValueChange = { query = it },
                    placeholder = { Text("Buscar juegos o gamers...", color = Color(0xFFA3A3C2)) },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(24.dp),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = Color(0xFF8B5CF6),
                        unfocusedBorderColor = Color(0xFF282834),
                        focusedContainerColor = Color(0xFF121218),
                        unfocusedContainerColor = Color(0xFF121218)
                    )
                )
                Spacer(modifier = Modifier.height(12.dp))
                Row(
                    modifier = Modifier.horizontalScroll(rememberScrollState()),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    filters.forEach { filter ->
                        FilterChip(
                            selected = selectedFilter == filter,
                            onClick = { selectedFilter = filter },
                            label = { Text(filter) },
                            colors = FilterChipDefaults.filterChipColors(
                                selectedContainerColor = Color(0xFF00D9A6),
                                selectedLabelColor = Color.Black,
                                containerColor = Color(0xFF181818),
                                labelColor = Color.White
                            )
                        )
                    }
                }
            }
        },
        bottomBar = {
            PlaySwapBottomNav(
                currentTab = 1,
                onTabSelected = { tab ->
                    when (tab) {
                        0 -> onNavigateToHome()
                        2 -> onNavigateToMyGames()
                        3 -> onNavigateToExchanges()
                        4 -> onNavigateToProfile()
                    }
                }
            )
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(modifier = Modifier.fillMaxSize().padding(padding).padding(20.dp)) {
            Text("RESULTADOS EN COCHABAMBA", fontSize = 11.sp, fontWeight = FontWeight.Bold, color = Color(0xFFA3A3C2), letterSpacing = 1.sp)
            Spacer(modifier = Modifier.height(12.dp))
            Card(
                modifier = Modifier.fillMaxWidth().clickable { onNavigateToDetail("hogwarts") },
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF121218))
            ) {
                Row(modifier = Modifier.padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                    Image(
                        painter = painterResource(Res.drawable.hogwarts_legacy),
                        contentDescription = "Hogwarts Legacy",
                        modifier = Modifier.size(60.dp).clip(RoundedCornerShape(8.dp)),
                        contentScale = ContentScale.Crop
                    )
                    Spacer(modifier = Modifier.width(14.dp))
                    Column {
                        Text("Hogwarts Legacy", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        Text("Disponible con Lucas G.", fontSize = 13.sp, color = Color(0xFFA3A3C2))
                        Spacer(modifier = Modifier.height(4.dp))
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp), verticalAlignment = Alignment.CenterVertically) {
                            Surface(shape = RoundedCornerShape(4.dp), color = Color(0xFF282834)) {
                                Text("PS5", modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp), fontSize = 10.sp, fontWeight = FontWeight.Bold, color = Color(0xFF00D9A6))
                            }
                            Text("A 1.5 km (América Este)", fontSize = 11.sp, color = Color(0xFFA3A3C2))
                        }
                    }
                }
            }
        }
    }
}
