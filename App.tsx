import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import Home from "./src/pages/Home";

import { LinearGradient } from "expo-linear-gradient"
import Login from "./src/pages/Login";

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