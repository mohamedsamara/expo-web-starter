import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "../../lib/navigation/root-navigator";
import { Provider } from "../../lib/provider";

export default function App() {
  return (
    <Provider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
