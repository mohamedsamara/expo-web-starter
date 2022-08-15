import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";
import Home from "../../screens/Home";

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: "Home",
        })}
      />
    </Stack.Navigator>
  );
}
