// https://www.dripsy.xyz/usage/theming/create
import { DripsyProvider, makeTheme } from "dripsy";

const theme = makeTheme({
  text: {
    p: {
      fontSize: 16,
    },
  },
});

export function Dripsy({ children }: { children: React.ReactNode }) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
