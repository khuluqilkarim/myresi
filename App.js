import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation//native-stack";
import {
  Login,
  Menu,
  Signup,
  Tracking,
  Welcome,
  ForgetPass,
} from "./screens/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Tracking" component={Tracking} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgetpass" component={ForgetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
