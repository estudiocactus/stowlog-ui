import { NextUIPluginConfig } from "@nextui-org/react";

export {
  nextui as stowlogUI,
  NextUIProvider as StowlogUIProvider
} from "@nextui-org/react";
export const stowlogTheme: NextUIPluginConfig = {
  themes: {
    light: {
      extend: "light",
      layout: {
        borderWidth:{
          small: "1px",
          medium: "1px",
          large: "1px"
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
        borderWidth:{
          small: "1px",
          medium: "1px",
          large: "1px"
        },
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
      },
      colors: {
        focus: "#416672",
        background: "#0F1618",
        foreground: "#F5F5F5",
        content1: "#182326",
        content2: "#213135",
        content3: "#2a3e43",
        content4: "#334b52",
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
          DEFAULT: "#416672"
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