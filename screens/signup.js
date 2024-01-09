import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { useCallback } from "react";
import Buttons from "../components/Buttons";
import { useFonts } from "expo-font";
import Separator from "../components/Seperator";
import Background from "../components/background";
import { StatusBar } from "expo-status-bar";
import COLORS from "../constants/colors";
import { auth } from "../firebase";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
        <Separator height={80} />
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Manrope-Extra",
                fontSize: 30,
              }}
            >
              Let’s Sign you up
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
            }}
          >
            Check & Track
          </Text>
          <Text
            style={{
              fontFamily: "Manrope-Reguler",
              width: 200,
            }}
          >
            Connect with your friend and track the delivery together
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
              Username
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
                placeholder="Enter Your Username"
                placeholderTextColor={COLORS.button}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <Separator height={15} />

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
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <Separator height={15} />
            <Text
              style={{
                color: COLORS.text,
                fontFamily: "Manrope-Bold",
              }}
            >
              Password
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
                placeholder="Enter Your Password"
                placeholderTextColor={COLORS.button}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>

            <Separator height={40} />
          </View>
        </View>
        <Buttons
          text="Sign up"
          onPress={handleSignUp}
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

export default Signup;
