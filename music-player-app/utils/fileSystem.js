import * as MediaLibrary from 'expo-media-library'
import { Platform, PermissionsAndroid } from 'react-native'

async function requestAndroidMediaPermission() {
    if (Platform.OS !== 'android') return true

    try {
        if (Platform.Version >= 33) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
                {
                    title: 'App needs access to audio files',
                    message: 'So we can read your music library',
                    buttonPositive: 'OK'
                }
            )
            return granted === PermissionsAndroid.RESULTS.GRANTED
        } else {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'App needs storage access',
                    message: 'So we can read media files',
                    buttonPositive: 'OK'
                }
            )
            return granted === PermissionsAndroid.RESULTS.GRANTED
        }
    } catch (error) {
        console.warn('Permission request error', err)
        return false
    }
}

export async function readMusicFolder() {
    try {
        if (Platform.OS === 'android') {
            const ok = await requestAndroidMediaPermission()
            if (!ok) {
                console.warn('Android media permission not granted')
                return []
            }
        }

        const { status } = await MediaLibrary.requestPermissionsAsync()

        if (status !== 'granted') {
            console.warn('Media permission not granted')
            return []
        }

        const result = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        })

        return result.assets
    } catch (error) {
        console.error("Error fetching music folder:", error)
        return []
    }
}