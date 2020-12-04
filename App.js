import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [data, setData] = useState([
    { name: "Dude", id: 1 },
    { name: "Someone", id: 12 },
    { name: "Broke", id: 13 },
    { name: "The", id: 14 },
    { name: "Xbone", id: 15 },
    { name: "And", id: 16 },
    { name: "Got", id: 17 },
    { name: "Away", id: 18 },
    { name: "With It", id: 19 },
  ]);
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  // inputDiv: {
  //   alignItems: "center",
  // },
  // buttonDiv: {
  //   margin: 10,
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#777",
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
});
