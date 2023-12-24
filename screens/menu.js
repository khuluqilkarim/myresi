import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import Background from "../components/background";
import COLORS from "../constants/colors";
import Separator from "../components/Seperator";
import { useFonts } from "expo-font";

const Menu = () => {
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
      <Separator height={150} />
      <View
        style={{
          position: "relative",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.secondry,
            width: "auto",
            height: 800,
            borderRadius: (0, 0, 20, 20),
          }}
        >
          <Separator height={20} />
          {/* header Read More */}
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: "#D9D9D9",
              width: "auto",
              height: 150,
              borderLeftColor: COLORS.button,
              borderLeftWidth: 7,
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../assets/garis-biru.png")}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 126,
                top: -54,
                transform: [
                  {
                    rotate: "-20deg",
                  },
                ],
              }}
            />
            <View
              style={{
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 34,
                  fontFamily: "Manrope-Bold",
                }}
              >
                Discover
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Manrope-Reguler",
                  width: 180,
                }}
              >
                read and explore the features of Resiku
              </Text>
              <Separator height={10} />
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 120,
                  borderRadius: 20,
                  backgroundColor: COLORS.secondry,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Separator height={20} />

          {/* Tracking resi */}
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: "#D9D9D9",
              width: "auto",
              height: 50,
              borderLeftColor: COLORS.button,
              borderLeftWidth: 7,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Tracking Resi</Text>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                height: 50,
                width: 100,
                marginLeft: 160,
                backgroundColor: COLORS.button,
              }}
            >
              
            </TouchableOpacity>
          </View>

          <Separator height={10} />
          {/* Search Maps */}
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: "#D9D9D9",
              width: "auto",
              height: 50,
              borderLeftColor: COLORS.green,
              borderLeftWidth: 7,
              borderRadius: 10,
            }}
          ></View>
        </View>

        {/* image box */}
        <View
          style={{
            flexDirection: "row",
            left: 100,
            position: "absolute",
            top: -190,
          }}
        >
          <Image
            source={require("../assets/box1.png")}
            resizeMode="contain"
            style={{
              width: 100,
              bottom: 70,
              transform: [
                {
                  rotate: "-20deg",
                },
              ],
            }}
          />
          <Image
            source={require("../assets/box4.png")}
            resizeMode="contain"
            style={{
              width: 180,
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default Menu;
