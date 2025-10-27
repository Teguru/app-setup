import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getRecentlyPlayedSongs } from "../../utils/appDatabase";
import { SongsColumn } from "../../custom_components/SongsColumn";

export function RecentlyPlayedScreen() {
  const [recentSongs, setRecentSongs] = useState([])

  useEffect(() => {
    const fetchMusicFiles = async () => {
      const files = await getRecentlyPlayedSongs()
      // console.log(JSON.stringify(files, null, 2))
      setRecentSongs(files)
    }

    fetchMusicFiles()
  }, [])

  return (
    <View style={styles.container}>
      <SongsColumn allSongs={recentSongs}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});