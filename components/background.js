import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Background = (props) => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#78BEFF"]}
      start={{ x: 0.7, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: "100%",
        flex: 1,
      }}
    >
      {props.children}
    </LinearGradient>
  );
};

export default Background;
