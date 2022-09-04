import * as React from "react";
import { useFonts } from "expo-font";

export function Fonts({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    "space-mono": require("../../../assets/fonts/SpaceMono-Regular.ttf"),
    "space-mono-bold": require("../../../assets/fonts/SpaceMono-Bold.ttf"),
  });

  return <>{loaded && children}</>;
}
