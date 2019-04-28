import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Navigation } from "react-native-navigation";
class Authentication extends React.Component {
  onClickHandler() {
    Navigation.push(this.props.componentId, {
      component: {
        name: "example.Overlay",
        passProps: {
          text: "Helo",
          why: "sad"
        },
        options: {
          topBar: {
            title: {
              text: "Pushed screen title"
            }
          }
        }
      }
    });
    // https://medium.com/react-native-training/react-native-navigation-v2-by-wix-getting-started-7d647e944132
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ marginBottom: 5, fontSize: 30 }}>Login</Text>
          <TextInput style={{ borderColor: "#eee", borderWidth: 2, width: "100%", marginBottom: 5 }} placeholder="Enter user id" />
          <TextInput style={{ borderColor: "#eee", borderWidth: 2, width: "100%", marginBottom: 5 }} placeholder="Enter password" />
          <Button onPress={() => this.onClickHandler()} title="Login" color="#841584" accessibilityLabel="Learn more about this purple button" />
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
    margin: 10
  }
});

export default Authentication;
