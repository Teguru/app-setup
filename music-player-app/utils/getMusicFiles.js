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
        
        const assetsWithAlbums = await Promise.all(
            assets.assets.map(async (asset) => {
                const album = await MediaLibrary.getAlbumAsync(asset.albumId)
                return {
                    ...asset,
                    albumName: album ? album.title : 'Unknown Album'
                }
            })
        )

        return assetsWithAlbums
    } catch (error) {
        console.error("Error getting music files:", error)
        return []
    }
}