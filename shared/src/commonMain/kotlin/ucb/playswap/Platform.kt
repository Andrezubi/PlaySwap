package ucb.playswap

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform