import { getRecentlyPlayedSongs, storeRecentlyPlayedSongs } from "../appDatabase"

const MAX_RECENTS = 50

export async function recentlyPlayedEvent(metaData) {
    // console.log("Now playing:", JSON.stringify(metaData?.id, null, 2)) // logging the incoming song

    if (!metaData || !metaData?.id) return []

    const dbRecentSongsArray = await getRecentlyPlayedSongs() || []
    const dbLastSong = dbRecentSongsArray[0]
    // console.log(dbRecentSongsArray)

    if (dbLastSong && dbLastSong?.id === metaData?.id) return dbRecentSongsArray

    const existingIndex = dbRecentSongsArray.findIndex(songObj => songObj?.id === metaData?.id)
    if (existingIndex !== -1) dbRecentSongsArray.splice(existingIndex, 1)

    dbRecentSongsArray.unshift(metaData)

    if (dbRecentSongsArray.length > MAX_RECENTS) dbRecentSongsArray.length = MAX_RECENTS
    
    await storeRecentlyPlayedSongs(dbRecentSongsArray)
}

