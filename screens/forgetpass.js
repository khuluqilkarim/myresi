import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";
import { useCallback } from "react";
import Buttons from "../components/Buttons";
import { useFonts } from "expo-font";
import Separator from "../components/Seperator";
import Background from "../components/background";
import { StatusBar } from "expo-status-bar";
import COLORS from "../constants/colors";

const ForgetPass = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Manrope-Reguler": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Extra": require("../assets/fonts/Manrope-ExtraBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar style="light" />
      <View>
        <Separator height={150} />
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Manrope-Extra",
                fontSize: 30,
              }}
            >
              Reset Password
            </Text>
            <Image
              source={require("../assets/star.png")}
              resizeMode="contain"
              style={{
                width: 25,
                transform: [{ translateY: 10 }, { translateX: 10 }],
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: "Manrope-Bold",
              fontSize: 25,
              width: 250,
            }}
          >
            Make & Change
          </Text>
          <Text
            style={{
              fontFamily: "Manrope-Reguler",
              width: 200,
            }}
          >
            I hope you enter a strong password!
          </Text>
        </View>
        <Separator height={30} />
        <View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                color: COLORS.text,
                fontFamily: "Manrope-Bold",
              }}
            >
              Email Address
            </Text>
            <Separator height={10} />
            <View
              style={{
                borderColor: COLORS.button,
                borderRadius: 10,
                borderWidth: 1,
                padding: 10,
              }}
            >
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor={COLORS.button}
              />
            </View>
            <Separator height={15} />
            <Text
              style={{
                color: COLORS.text,
                fontFamily: "Manrope-Bold",
              }}
            >
              New Password
            </Text>
            <Separator height={10} />
            <View
              style={{
                borderColor: COLORS.button,
                borderRadius: 10,
                borderWidth: 1,
                padding: 10,
              }}
            >
              <TextInput
                placeholder="Enter Your New Password"
                placeholderTextColor={COLORS.button}
              />
            </View>
            <Separator height={25} />
          </View>
        </View>
        <Buttons
          text="Reset Password"
          onPress={() => navigation.navigate("Login")}
          containerStyle={{ backgroundColor: COLORS.button }}
          textStyle={{
            color: COLORS.secondry,
            fontFamily: "Manrope-Reguler",
            fontSize: 14,
          }}
        />
      </View>
    </Background>
  );
};

export default ForgetPass;
