/**
 * @format
 */
import React from "react";
import { Navigation } from "react-native-navigation";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import Authentication from "./src/screens/auth/Authentication";
const store = configureStore();
const appMain = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Authentication);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
