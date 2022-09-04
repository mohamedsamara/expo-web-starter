import { Dripsy } from "./dripsy";
import { NavigationProvider } from "../navigation";
import { Fonts } from "./fonts";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Fonts>
        <Dripsy>{children}</Dripsy>
      </Fonts>
    </NavigationProvider>
  );
}
