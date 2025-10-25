import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getMusicFiles } from "../../utils/getMusicFiles";

export function AllSongsScreen() {
  const [allSongs, setAllSongs] = useState([])

  useEffect(() => {
    const fetchMusicFiles = async () => {
      const files = await getMusicFiles()
      console.log(files)
      setAllSongs(files)
    }

    fetchMusicFiles()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Songs Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: 'white'
  },
});