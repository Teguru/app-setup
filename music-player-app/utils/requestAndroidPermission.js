import { Platform, PermissionsAndroid } from 'react-native'
import * as MediaLibrary from 'expo-media-library'

export async function requestAndroidPermission() {
    if (Platform.OS !== 'android') return true
    try {
        const current = await MediaLibrary.getPermissionsAsync()
        if (current.granted) return true

        const asked = await MediaLibrary.requestPermissionsAsync()
        return Boolean(asked.granted) 
    } catch (error) {
        console.error("Error with permission status:", error)
        return false
    }
}