import AsyncStorage from '@react-native-async-storage/async-storage'

const rpsDb = 'recently-played-songs'

export async function storeRecentlyPlayedSongs(value) {
    try {
        const jsonValue = JSON.stringify(value ?? [])
        await AsyncStorage.setItem(rpsDb, jsonValue)
        return { success: true }
    } catch (error) {
        console.error("Error storing recently played songs:", error)
        return { success: false }
    }
} 

export async function getRecentlyPlayedSongs() {
    try {
        const jsonValue = await AsyncStorage.getItem(rpsDb)
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error) {
        console.error("Error getting recently played songs:", error)
        return []
    }
}

export async function getDbKeys() {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch (error){
        console.error("Error getting all keys:", error)
    }
    console.log(keys)
}

export async function clearDb() {
    try {
        await AsyncStorage.clear()
        await getDbKeys()
    } catch (error){
        console.error("Error getting all keys:", error)
    }
}