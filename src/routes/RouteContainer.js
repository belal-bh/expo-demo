import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SampleScreen from "../screens/SampleScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default RouteContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sample" component={SampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
