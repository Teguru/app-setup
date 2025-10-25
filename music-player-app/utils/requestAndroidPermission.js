import { Platform, PermissionsAndroid } from 'react-native'

export async function requestAndroidPermission() {
    if (Platform.OS !== 'android') return true
    if (Platform.Version >= 33) {
        const perm = PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
        const granted = await PermissionsAndroid.request(perm)
        return granted === PermissionsAndroid.RESULTS.GRANTED
    } else {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        )
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }
}