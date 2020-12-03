import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HELLO</Text>
      </View>
      <View>
        <Text>HELLO</Text>
      </View>
      <View>
        <Text>HELLO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#000",
    padding: 20,
  },
  headerText: {
    color: "#fff",
  },
});
