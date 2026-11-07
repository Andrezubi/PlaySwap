package ucb.playswap

import android.app.Application
import ucb.playswap.di.initKoinAndroid

class MainApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        initKoinAndroid(this)
    }
}
