import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import Home from "./src/screens/Home";

import { LinearGradient } from "expo-linear-gradient"
import Login from "./src/screens/Login";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <StatusBar backgroundColor={"#000"}/>
      {/* <Home /> */}
      <Login />
    </NativeBaseProvider>
  );
}