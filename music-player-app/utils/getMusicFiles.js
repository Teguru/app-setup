import * as MediaLibrary from 'expo-media-library'
import { requestAndroidPermission } from './requestAndroidPermission'

export async function getMusicFiles() {
    try {
        const ok = await requestAndroidPermission()
        if (!ok) throw new Error('Permission denied')
        const assets = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: 50,
            sortBy: MediaLibrary.SortBy.creationTime
        })
        console.log(assets.assets)
    } catch (error) {
        console.error("Get all music files:", error)
        return []
    }
}