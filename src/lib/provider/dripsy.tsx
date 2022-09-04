import { Platform } from "react-native";
import { DripsyProvider, makeTheme } from "dripsy";

const fontName = "space-mono";

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, space-mono-bold`,
    default: font,
  });

const theme = makeTheme({
  customFonts: {
    [fontName]: {
      400: webFont(fontName),
      default: webFont(fontName),
      normal: webFont(fontName),
      500: webFont("space-mono-bold"),
      600: webFont("space-mono-bold"),
      bold: webFont("space-mono-bold"),
      700: webFont("space-mono-bold"),
    },
  },
  fonts: {
    root: fontName,
  },
  colors: {
    $text: "#000",
    $background: "#fff",
    $primary: "tomato",
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 28,
    $6: 32,
  },
  text: {
    body: {
      fontSize: "$1",
    },
    p: {
      fontSize: "$0",
    },
    h1: {
      fontSize: "$6",
      fontWeight: "700",
    },
    h2: {
      fontSize: "$5",
      fontWeight: "600",
    },
    h3: {
      fontSize: "$4",
      fontWeight: "600",
    },
    h4: {
      fontSize: "$3",
      fontWeight: "500",
    },
    h5: {
      fontSize: "$2",
      fontWeight: "500",
    },
    h6: {
      fontSize: "$1",
      fontWeight: "400",
    },
  },
  layout: {
    container: {
      p: 16,
    },
  },
});

export function Dripsy({ children }: { children: React.ReactNode }) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
