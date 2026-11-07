package ucb.playswap.core.database.dao

import androidx.room3.Dao
import androidx.room3.Insert
import androidx.room3.OnConflictStrategy
import androidx.room3.Query
import kotlinx.coroutines.flow.Flow
import ucb.playswap.core.database.entity.SwapItemEntity

@Dao
interface SwapItemDao {

    @Query("SELECT * FROM swap_items ORDER BY timestamp DESC")
    fun getAll(): Flow<List<SwapItemEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(item: SwapItemEntity)

    @Query("DELETE FROM swap_items WHERE id = :id")
    suspend fun deleteById(id: Long)

    @Query("DELETE FROM swap_items")
    suspend fun deleteAll()
}
