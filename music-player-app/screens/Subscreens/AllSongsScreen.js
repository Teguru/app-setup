import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { getMusicFiles } from "../../utils/getMusicFiles";
import { SongsColumn } from "../../custom_components/SongsColumn";

export function AllSongsScreen() {
  const [allSongs, setAllSongs] = useState([])

  useEffect(() => {
    const fetchMusicFiles = async () => {
      const files = await getMusicFiles()
      // console.log(JSON.stringify(files, null, 2))
      setAllSongs(files)
    }

    fetchMusicFiles()
  }, [])

  return (
    <View
      style={styles.container}>
      <SongsColumn allSongs={allSongs} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});