import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { LinearGradient } from "expo-linear-gradient"
import Routes from "./src/routes";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <StatusBar backgroundColor={"#000"}/>
      <Routes />
    </NativeBaseProvider>
  );
}