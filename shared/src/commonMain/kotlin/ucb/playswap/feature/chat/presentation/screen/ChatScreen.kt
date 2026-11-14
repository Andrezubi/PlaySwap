package ucb.playswap.feature.chat.presentation.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
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
import org.jetbrains.compose.resources.painterResource
import playswap.shared.generated.resources.*
import ucb.playswap.core.theme.*

@Composable
fun ChatScreen(
    onBack: () -> Unit
) {
    var text by remember { mutableStateOf("") }

    Scaffold(
        topBar = {
            Surface(color = Color(0xFF0B0B0F)) {
                Row(
                    modifier = Modifier.fillMaxWidth().statusBarsPadding().padding(horizontal = 16.dp, vertical = 12.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        IconButton(onClick = onBack) {
                            BackIcon(modifier = Modifier.size(20.dp), color = Color.White)
                        }
                        Image(
                            painter = painterResource(Res.drawable.sofia_avatar),
                            contentDescription = "Sofía Avatar",
                            modifier = Modifier.size(40.dp).clip(CircleShape),
                            contentScale = ContentScale.Crop
                        )
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text("Sofía Valenzuela", fontWeight = FontWeight.Bold, color = Color.White, fontSize = 16.sp)
                            Text("Activa ahora", fontSize = 12.sp, color = Color(0xFF00D9A6))
                        }
                    }
                    IconButton(onClick = {}) {
                        Text("⋮", fontSize = 20.sp, color = Color.White)
                    }
                }
            }
        },
        containerColor = Color(0xFF0B0B0F)
    ) { padding ->
        Column(
            modifier = Modifier.fillMaxSize().padding(padding).padding(16.dp),
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                // Meetup banner
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = Color(0xFF121218)),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF8B5CF6))
                ) {
                    Row(
                        modifier = Modifier.padding(14.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Column(modifier = Modifier.weight(1f)) {
                            Text("¿Listos para acordar el punto?", fontWeight = FontWeight.Bold, color = Color.White, fontSize = 14.sp)
                            Text("Proponer lugar de encuentro en Cochabamba", fontSize = 12.sp, color = Color(0xFFA3A3C2))
                        }
                        Button(
                            onClick = {},
                            shape = RoundedCornerShape(12.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF8B5CF6))
                        ) {
                            Text("Acordar", fontSize = 12.sp, color = Color.White)
                        }
                    }
                }

                Spacer(modifier = Modifier.height(12.dp))

                // Messages
                ChatMessageBubble("¡Hola Mateo! Sí, tengo el Elden Ring disponible para intercambio. Me interesa mucho tu God of War.", "10:02 AM", isUser = false)
                ChatMessageBubble("Buenísimo. ¿Qué te parece si nos encontramos en el Plaza de Cala Cala o por el Cine Center de la Oquendo?", "10:05 AM", isUser = true)
                ChatMessageBubble("El Cine Center me queda perfecto por las tardes. ¿Puedes hoy a las 5:30 PM?", "10:07 AM", isUser = false)
            }

            // Input Bar
            Row(
                modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = {}) {
                    Text("➕", fontSize = 16.sp)
                }
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it },
                    modifier = Modifier.weight(1f),
                    placeholder = { Text("Escribe un mensaje...", color = Color(0xFFA3A3C2)) },
                    shape = RoundedCornerShape(24.dp),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = Color(0xFF00D9A6),
                        unfocusedBorderColor = Color(0xFF282834),
                        focusedContainerColor = Color(0xFF121218),
                        unfocusedContainerColor = Color(0xFF121218)
                    )
                )
                Spacer(modifier = Modifier.width(8.dp))
                IconButton(onClick = { text = "" }) {
                    Text("➤", fontSize = 18.sp, color = Color(0xFF00D9A6))
                }
            }
        }
    }
}

@Composable
fun ChatMessageBubble(message: String, time: String, isUser: Boolean) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = if (isUser) Alignment.End else Alignment.Start
    ) {
        Surface(
            shape = RoundedCornerShape(16.dp),
            color = if (isUser) Color(0xFF00D9A6).copy(alpha = 0.2f) else Color(0xFF181818),
            border = if (isUser) androidx.compose.foundation.BorderStroke(1.dp, Color(0xFF00D9A6)) else null
        ) {
            Text(
                message,
                modifier = Modifier.padding(14.dp),
                fontSize = 14.sp,
                color = Color.White,
                lineHeight = 20.sp
            )
        }
        Spacer(modifier = Modifier.height(4.dp))
        Text(time, fontSize = 10.sp, color = Color(0xFFA3A3C2))
    }
}
