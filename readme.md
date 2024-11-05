# Stowlog UI Components Library

[![npm version](https://img.shields.io/npm/v/@estudio-cactus/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@estudio-cactus/stowlog-ui)
[![npm downloads](https://img.shields.io/npm/dm/@estudio-cactus/stowlog-ui.svg?style=flat-square)](https://www.npmjs.com/package/@estudio-cactus/stowlog-ui)

This library contains the UI components used in Stowlog.

## Installation

1. Install the library and dependences with your preferred package manager:

```bash
# use npm, yarn, pnpm
npm install @estudio-cactus/stowlog-ui next-themes tailwindcss-animate
```

2. Update your tailwind.config.js file to include the Stowlog UI plugin and fonts:

```ts
// tailwind.config.ts
import { stowlogTheme, stowlogUI } from "@estudio-cactus/stowlog-ui/config";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    ..., // your current tailwind content
    "./node_modules/@estudio-cactus/stowlog-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  ..., // your current tailwind config
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"],
        mono: ["var(--font-georama)"],
      }
    }
  },
  darkMode: "class",
  plugins: [
    stowlogUI(stowlogTheme),
    tailwindcssAnimate
  ],
};
export default config;
```

3. Update the providers file:

```tsx
// providers.tsx
"use client";

import { StowlogUIProvider } from "@estudio-cactus/stowlog-ui/config";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StowlogUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </StowlogUIProvider>
  );
}
```

4. Update main layout file:

```tsx
// layout.tsx

import "@/app/globals.css";
import { Providers } from "@/app/providers";
import "@estudio-cactus/stowlog-ui/index.css";
import type { Metadata } from "next";
import { Georama, Plus_Jakarta_Sans } from "next/font/google";

export const georama = Georama({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-georama",
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Stowlog UI Playground",
  description: "Stowlog UI Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.variable} ${plus_jakarta_sans.className} antialiased bg-background text-foreground min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## Usage

### Theme Selector
```tsx
import { Switch } from "@estudio-cactus/stowlog-ui";

<Switch
  isSelected={theme === "dark"}
  color="primary"
  onValueChange={(value) => setTheme(value ? "dark" : "light")}
  startContent={<LucideIcon size={14} name="Moon" />}
  endContent={<LucideIcon size={14} name="Sun" />}
></Switch>;
```

### Button
```tsx
import { Button } from "@estudio-cactus/stowlog-ui";

<Button>Primary Button</Button>
<Button color="default">Default Button</Button>
<Button isIconOnly color="default">
  <LucideIcon name="RefreshCcw" size={24} />
</Button>
<Button color="secondary">Secondary Button</Button>
```

