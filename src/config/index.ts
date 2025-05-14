import { HeroUIPluginConfig } from "@heroui/react";

export {
  heroui as stowlogUI,
  HeroUIProvider as StowlogUIProvider,
} from "@heroui/react";
export const stowlogTheme: HeroUIPluginConfig = {
  themes: {
    light: {
      extend: "light",
      layout: {
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "1px",
        },
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
      },
      colors: {
        focus: "#416672",
        background: "#F5F5F5",
        foreground: "#26383D",
        primary: {
          "50": "#E2F7F7",
          "100": "#E2F7F7",
          "200": "#C7EFF0",
          "300": "#9DCFD4",
          "400": "#73A0AA",
          "500": "#416672",
          "600": "#2F5262",
          "700": "#203E52",
          "800": "#142D42",
          "900": "#0C2036",
          DEFAULT: "#416672",
        },
        secondary: {
          "50": "#FFF4DF",
          "100": "#FFF4DF",
          "200": "#FFE6BF",
          "300": "#FFD49F",
          "400": "#FFC387",
          "500": "#FFA75F",
          "600": "#DB8045",
          "700": "#B75E2F",
          "800": "#93401E",
          "900": "#7A2A12",
          DEFAULT: "#FFA75F",
        },
      },
    },
    dark: {
      extend: "dark",
      layout: {
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "1px",
        },
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
      },
      colors: {
        focus: "#2F464C",
        background: "#121414",
        foreground: "#F5F5F5",
        content1: "#151617",
        content2: "#17191A",
        content3: "#191B1C",
        content4: "#1C1E1F",
        primary: {
          "50": "#E3F6F4",
          "100": "#E3F6F4",
          "200": "#C8EDEC",
          "300": "#9BC6C9",
          "400": "#698D93",
          "500": "#2F464C",
          "600": "#223841",
          "700": "#172B36",
          "800": "#0E1F2C",
          "900": "#091624",
          DEFAULT: "#2F464C",
        },
        secondary: {
          "50": "#FFF4DF",
          "100": "#FFF4DF",
          "200": "#FFE6BF",
          "300": "#FFD49F",
          "400": "#FFC387",
          "500": "#FFA75F",
          "600": "#DB8045",
          "700": "#B75E2F",
          "800": "#93401E",
          "900": "#7A2A12",
          DEFAULT: "#FFA75F",
        },
      },
    },
  },
};
