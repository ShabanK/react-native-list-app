import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Dude");
  let changeName = () => {
    setName("Shaban");
  };
  return (
    <View style={styles.container}>
      <Text>Hello, I am {name}</Text>
      <View style={styles.buttonDiv}>
        <Button
          style={styles.button}
          title="Change Name"
          onPress={changeName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDiv: {
    marginTop: 20,
  },
});
