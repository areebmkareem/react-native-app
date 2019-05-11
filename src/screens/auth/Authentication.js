import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

class Authentication extends React.Component {
  onClickHandler() {
    Icon.getImageSource("accessibility", 30).then(srcc => {
      console.log("[PROMIS]", srcc, srcc[0]);
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: "tabOne",
                        passProps: {
                          text: "This is tab 1"
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: "Tab 1",
                      icon: srcc,
                      testID: "FIRST_TAB_BAR_BUTTON"
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: "tabTwo",
                        passProps: {
                          text: "This is tab 2"
                        }
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: "Tab 2",
                      icon: srcc,
                      testID: "FIRST_TAB_BAR_BUTTON"
                    }
                  }
                }
              }
            ]
          }
        }
      });
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
