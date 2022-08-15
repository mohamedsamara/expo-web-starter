import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationProviderProps } from "./types";

export function NavigationProvider({ children }: NavigationProviderProps) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
