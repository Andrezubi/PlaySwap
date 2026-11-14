package ucb.playswap.core.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val PlaySwapFigmaColorPalette = darkColorScheme(
    primary = Color(0xFF8B5CF6), // #8b5cf6 - Primary Violet
    onPrimary = Color(0xFFFFFFFF),
    primaryContainer = Color(0xFF5B21B6),
    onPrimaryContainer = Color(0xFFEDE9FE),
    secondary = Color(0xFF00D9A6), // #00d9a6 - Accent Teal
    onSecondary = Color(0xFF000000),
    background = Color(0xFF0B0B0F), // #0b0b0f - Exact Figma background
    onBackground = Color(0xFFFFFFFF),
    surface = Color(0xFF121218), // #121218 - Exact Figma surface
    onSurface = Color(0xFFFFFFFF),
    surfaceVariant = Color(0xFF282834), // #282834 - Exact Figma surface variant
    onSurfaceVariant = Color(0xFFA3A3C2), // #a3a3c2 - Exact Figma secondary text
    error = Color(0xFFE11D48), // #e11d48 - Exact Figma red/error
    onError = Color(0xFFFFFFFF)
)

@Composable
fun PlaySwapTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = PlaySwapFigmaColorPalette,
        content = content
    )
}
