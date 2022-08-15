import "expo/build/Expo.fx";
import { AppRegistry, Platform } from "react-native";
import { createRoot } from "react-dom/client";
import { activateKeepAwake } from "expo-keep-awake";
import withExpoRoot from "expo/build/launch/withExpoRoot";

import App from "./src/components/App";

if (__DEV__) {
  activateKeepAwake();
}

AppRegistry.registerComponent("main", () => withExpoRoot(App));
if ("web" === Platform.OS) {
  const rootTag = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );

  const RootComponent = withExpoRoot(App);
  rootTag.render(<RootComponent />);
}
