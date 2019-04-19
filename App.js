/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      places: []
    };
  }
  onClickHander(action) {
    let places = [...this.state.places];
    switch (action) {
      case "ADD":
        places.push(this.state.placeName);
        this.setState({ places, placeName: "" });
    }
  }
  renderPlaces(places) {
    if (places.length) {
      return places.map((place, index) => {
        return (
          <Text key={index}>
            {index}:{place}.
          </Text>
        );
      });
    } else return <Text>No places Added yet!</Text>;
  }
  render() {
    const { placeName, places } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.InputSection}>
          <TextInput placeholder="Enter Something" style={{ width: 300 }} onChangeText={placeName => this.setState({ placeName })} value={placeName} />
          <Button title="Add" onPress={() => this.onClickHander("ADD")} />
        </View>
        <View style={styles.placesSection}>
          <Text>Places</Text>
          {this.renderPlaces(places)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  InputSection: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  placesSection: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#cc0c"
  }
});
