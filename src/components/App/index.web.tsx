// import { RootNavigator } from "../../lib/navigation/root-navigator";
import { RootNavigator } from "../../lib/navigation/root-navigator.web";
import { Provider } from "../../lib/provider";

export default function App() {
  return (
    <Provider>
      <RootNavigator />
    </Provider>
  );
}

{
  /* <StatusBar style="auto" /> */
}
