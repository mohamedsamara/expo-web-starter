import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { NavigationProviderProps } from "./types";

const prefix = Linking.createURL("/");

export function NavigationProvider({ children }: NavigationProviderProps) {
  const linking = useMemo(
    () => ({
      prefixes: [prefix],
      config: {
        screens: {
          Root: {
            path: "",
            screens: {
              home: "/",
            },
          },
        },
      },
    }),
    []
  );

  return (
    <NavigationContainer linking={linking}>{children}</NavigationContainer>
  );
}
