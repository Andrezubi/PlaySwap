package ucb.playswap.core.theme

import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.unit.dp
import kotlin.math.cos
import kotlin.math.sin

@Composable
fun BackIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val path = Path().apply {
            moveTo(w * 0.7f, h * 0.2f)
            lineTo(w * 0.3f, h * 0.5f)
            lineTo(w * 0.7f, h * 0.8f)
        }
        drawPath(path = path, color = color, style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}

@Composable
fun MoreVertIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val radius = 2.dp.toPx()
        drawCircle(color = color, radius = radius, center = Offset(w * 0.5f, h * 0.25f))
        drawCircle(color = color, radius = radius, center = Offset(w * 0.5f, h * 0.5f))
        drawCircle(color = color, radius = radius, center = Offset(w * 0.5f, h * 0.75f))
    }
}

@Composable
fun AddIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 3.dp.toPx()
        drawLine(color = color, start = Offset(w * 0.2f, h * 0.5f), end = Offset(w * 0.8f, h * 0.5f), strokeWidth = stroke, cap = StrokeCap.Round)
        drawLine(color = color, start = Offset(w * 0.5f, h * 0.2f), end = Offset(w * 0.5f, h * 0.8f), strokeWidth = stroke, cap = StrokeCap.Round)
    }
}

@Composable
fun SearchIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 2.5.dp.toPx()
        drawCircle(color = color, radius = w * 0.28f, center = Offset(w * 0.42f, h * 0.42f), style = Stroke(width = stroke))
        drawLine(color = color, start = Offset(w * 0.62f, h * 0.62f), end = Offset(w * 0.85f, h * 0.85f), strokeWidth = stroke, cap = StrokeCap.Round)
    }
}

@Composable
fun PersonIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        drawCircle(color = color, radius = w * 0.22f, center = Offset(w * 0.5f, h * 0.32f))
        val path = Path().apply {
            moveTo(w * 0.2f, h * 0.82f)
            quadraticBezierTo(w * 0.2f, h * 0.58f, w * 0.5f, h * 0.58f)
            quadraticBezierTo(w * 0.8f, h * 0.58f, w * 0.8f, h * 0.82f)
        }
        drawPath(path = path, color = color, style = Stroke(width = 2.5.dp.toPx(), cap = StrokeCap.Round))
    }
}

@Composable
fun BellIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 2.5.dp.toPx()
        val path = Path().apply {
            moveTo(w * 0.25f, h * 0.7f)
            lineTo(w * 0.75f, h * 0.7f)
            lineTo(w * 0.7f, h * 0.45f)
            quadraticBezierTo(w * 0.7f, h * 0.25f, w * 0.5f, h * 0.25f)
            quadraticBezierTo(w * 0.3f, h * 0.25f, w * 0.3f, h * 0.45f)
            lineTo(w * 0.25f, h * 0.7f)
            close()
        }
        drawPath(path = path, color = color, style = Stroke(width = stroke, join = StrokeJoin.Round))
        drawCircle(color = color, radius = 2.dp.toPx(), center = Offset(w * 0.5f, h * 0.85f))
    }
}

@Composable
fun HomeIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 2.5.dp.toPx()
        val path = Path().apply {
            moveTo(w * 0.15f, h * 0.52f)
            lineTo(w * 0.5f, h * 0.2f)
            lineTo(w * 0.85f, h * 0.52f)
            moveTo(w * 0.25f, h * 0.45f)
            lineTo(w * 0.25f, h * 0.82f)
            lineTo(w * 0.75f, h * 0.82f)
            lineTo(w * 0.75f, h * 0.45f)
        }
        drawPath(path = path, color = color, style = Stroke(width = stroke, cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}

@Composable
fun BookIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 2.5.dp.toPx()
        val path = Path().apply {
            moveTo(w * 0.5f, h * 0.25f)
            quadraticBezierTo(w * 0.35f, h * 0.2f, w * 0.15f, h * 0.25f)
            lineTo(w * 0.15f, h * 0.8f)
            quadraticBezierTo(w * 0.35f, h * 0.75f, w * 0.5f, h * 0.8f)
            quadraticBezierTo(w * 0.65f, h * 0.75f, w * 0.85f, h * 0.8f)
            lineTo(w * 0.85f, h * 0.25f)
            quadraticBezierTo(w * 0.65f, h * 0.2f, w * 0.5f, h * 0.25f)
            close()
        }
        drawPath(path = path, color = color, style = Stroke(width = stroke, cap = StrokeCap.Round, join = StrokeJoin.Round))
        drawLine(color = color, start = Offset(w * 0.5f, h * 0.25f), end = Offset(w * 0.5f, h * 0.8f), strokeWidth = stroke)
    }
}

@Composable
fun RepeatIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val stroke = 2.5.dp.toPx()
        val path = Path().apply {
            moveTo(w * 0.2f, h * 0.35f)
            lineTo(w * 0.8f, h * 0.35f)
            moveTo(w * 0.65f, h * 0.2f)
            lineTo(w * 0.8f, h * 0.35f)
            lineTo(w * 0.65f, h * 0.5f)

            moveTo(w * 0.8f, h * 0.65f)
            lineTo(w * 0.2f, h * 0.65f)
            moveTo(w * 0.35f, h * 0.5f)
            lineTo(w * 0.2f, h * 0.65f)
            lineTo(w * 0.35f, h * 0.8f)
        }
        drawPath(path = path, color = color, style = Stroke(width = stroke, cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}

@Composable
fun CheckIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val path = Path().apply {
            moveTo(w * 0.22f, h * 0.52f)
            lineTo(w * 0.44f, h * 0.72f)
            lineTo(w * 0.78f, h * 0.32f)
        }
        drawPath(path = path, color = color, style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}

@Composable
fun SendIcon(modifier: Modifier = Modifier, color: Color = Color.White) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val path = Path().apply {
            moveTo(w * 0.15f, h * 0.2f)
            lineTo(w * 0.85f, h * 0.5f)
            lineTo(w * 0.15f, h * 0.8f)
            lineTo(w * 0.35f, h * 0.5f)
            close()
        }
        drawPath(path = path, color = color, style = Stroke(width = 2.5.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}

@Composable
fun StarIcon(modifier: Modifier = Modifier, color: Color = Color(0xFFFFD700)) {
    Canvas(modifier = modifier) {
        val w = size.width
        val h = size.height
        val cx = w / 2f
        val cy = h / 2f
        val outerRadius = w / 2f
        val innerRadius = outerRadius * 0.4f
        val path = Path().apply {
            val numPoints = 5
            for (i in 0 until numPoints * 2) {
                val r = if (i % 2 == 0) outerRadius else innerRadius
                val angle = (i * kotlin.math.PI / numPoints) - kotlin.math.PI / 2
                val x = cx + (r * cos(angle)).toFloat()
                val y = cy + (r * sin(angle)).toFloat()
                if (i == 0) moveTo(x, y) else lineTo(x, y)
            }
            close()
        }
        drawPath(path = path, color = color)
    }
}
