import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { clearDb } from "../../utils/appDatabase";

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button
        title="Clear DB"
        onPress={() => clearDb()}
      />
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