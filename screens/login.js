import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Buttons from "../components/Buttons";
import { useFonts } from "expo-font";
import Separator from "../components/Seperator";
import Background from "../components/background";
import { StatusBar } from "expo-status-bar";
import COLORS from "../constants/colors";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with : ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("home");
      }
    });
    return unsubscribe;
  });

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
              Let’s Sign you in
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
              width: 140,
            }}
          >
            Welcome back You’ve been missed!
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
            <Separator height={15} />
            <View
              style={{
                marginLeft: 100,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Forgetpass")}
              >
                <Text
                  style={{
                    marginTop: -2,
                    paddingLeft: 100,
                    fontFamily: "Manrope-Bold",
                    color: COLORS.text,
                  }}
                >
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <Separator height={40} />
          </View>
        </View>
        <Buttons
          text="Log in"
          onPress={handleLogin}
          containerStyle={{ backgroundColor: COLORS.button }}
          textStyle={{
            color: COLORS.secondry,
            fontFamily: "Manrope-Reguler",
            fontSize: 14,
          }}
        />
        <Separator height={10} />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: -10,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              width: 162,
              borderColor: COLORS.primary,
              borderBottomWidth: 3,
            }}
          ></View>
          <Text
            style={{
              marginHorizontal: 5,
              transform: [{ translateY: 5 }],
              color: COLORS.primary,
            }}
          >
            Or
          </Text>
          <View
            style={{
              width: 160,
              borderColor: COLORS.primary,
              borderBottomWidth: 3,
            }}
          ></View>
        </View>
        <Separator height={10} />
        <Buttons
          text="Sign up"
          onPress={() => navigation.navigate("Signup")}
          containerStyle={{
            borderColor: COLORS.primary,
            borderWidth: 2,
            padding: 13,
          }}
          textStyle={{
            color: COLORS.primary,
            fontFamily: "Manrope-Reguler",
            fontSize: 14,
          }}
        />
      </View>
    </Background>
  );
};

export default Login;
