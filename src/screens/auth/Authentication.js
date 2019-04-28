import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
class Authentication extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text>Login</Text>
          <TextInput style={{ borderColor: "#eee", borderWidth: 2, width: "100%" }} placeholder="Enter user id" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ff0000"
  }
});

export default Authentication;
