const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhone14Plus from "./screens/IPhone14Plus";
import IPhone14Plus1 from "./screens/IPhone14Plus1";
import IPhone14Plus2 from "./screens/IPhone14Plus2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Plus"
              component={IPhone14Plus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Plus1"
              component={IPhone14Plus1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Plus2"
              component={IPhone14Plus2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
