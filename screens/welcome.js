import { View, Text, Image } from "react-native";
import React from "react";
import { useCallback } from "react";
import Background from "../components/background";
import { useFonts } from "expo-font";
import Buttons from "../components/Buttons";
import Separator from "../components/Seperator";
import Animeted, { SlideInUp, SlideOutDown } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import COLORS from "../constants/colors";

const Welcome = ({ navigation }) => {
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
    <Background style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Animeted.Image
            entering={SlideInUp.delay(460).duration(1600)}
            exiting={SlideOutDown}
            source={require("../assets/box1.png")}
            resizeMode="contain"
            style={{
              width: 100,
              transform: [
                { translateX: -100 },
                { translateY: -50 },
                { rotate: "-20deg" },
              ],
            }}
          />
          <Animeted.Image
            entering={SlideInUp.delay(390).duration(1600)}
            source={require("../assets/box2.png")}
            resizeMode="contain"
            style={{
              width: 150,
              transform: [
                { translateX: 100 },
                { translateY: -350 },
                { rotate: "20deg" },
              ],
            }}
          />
          <Animeted.Image
            entering={SlideInUp.delay(240).duration(1600)}
            source={require("../assets/avatar.png")}
            resizeMode="contain"
            style={{
              width: 350,
              transform: [{ translateX: 10 }, { translateY: -650 }],
            }}
          />
          <Animeted.Image
            entering={SlideInUp.delay(160).duration(1600)}
            source={require("../assets/box3.png")}
            resizeMode="contain"
            style={{
              width: 200,
              transform: [
                { translateX: 20 },
                { translateY: -820 },
                { rotate: "-20deg" },
              ],
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1, margin: 0, paddingTop: 150 }}>
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <Text
            style={{
              fontFamily: "Manrope-Extra",
              fontSize: 30,
              marginBottom: 0,
            }}
          >
            Best Checking
          </Text>
          <Image
            source={require("../assets/star.png")}
            resizeMode="contain"
            style={{ transform: [{ translateY: 12 }, { translateX: 10 }] }}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              fontFamily: "Manrope-Extra",
              fontSize: 30,
            }}
          >
            Receipts Platform
          </Text>
          <Text
            style={{
              fontFamily: "Manrope-Reguler",
              fontSize: 15,
              width: 250,
              paddingVertical: 5,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            The ResiKu application was created for people who like to shop
            online
          </Text>
        </View>
        <Separator height={30} />
        <Buttons
          text="Joint Us"
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

export default Welcome;
