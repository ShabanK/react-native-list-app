import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Dude");
  const [age, setAge] = useState(21);
  const [textfieldName, setTextfieldName] = useState("");
  const [textfieldAge, setTextfieldAge] = useState("");
  let change = () => {
    setName(textfieldName);
    setAge(textfieldAge);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        <Text>Enter Name</Text>
        <TextInput
          multiline
          style={styles.textInput}
          placeholder="Your Name"
          onChangeText={(val) => {
            setTextfieldName(val);
          }}
        />
        <Text>Enter Age</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          placeholder="Your Age"
          onChangeText={(val) => {
            setTextfieldAge(val);
          }}
        />
        <View style={styles.buttonDiv}>
          <Button
            title="ENTER"
            onPress={change}
            // accessibilityLabel="Learn more about this button"
          />
        </View>
      </View>
      <View>
        <Text>
          Hi I am {name}, age {age}
        </Text>
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
  inputDiv: {
    alignItems: "center",
  },
  buttonDiv: {
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
