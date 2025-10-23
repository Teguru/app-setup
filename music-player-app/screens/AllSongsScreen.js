import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AllSongsScreen() {
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