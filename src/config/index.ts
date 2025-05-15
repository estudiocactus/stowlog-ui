import { HeroUIPluginConfig } from "@heroui/react";

export {
  heroui as stowlogUI,
  HeroUIProvider as StowlogUIProvider,
} from "@heroui/react";
export const stowlogTheme: HeroUIPluginConfig = {
  themes: {
    light: {
      extend: 'light',
      layout: {
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '1px'
        },
        radius: {
          small: '4px',
          medium: '4px',
          large: '4px'
        }
      },
      colors: {
        focus: '#2C4147',
        background: '#F9F9FB',
        foreground: '#2C4147',
        content1: '#FFFFFF',
        content2: '#F7F7F9',
        content3: '#F0F0F4',
        content4: '#E1E1E8',
        default: {
          50: '#F7F7F9',
          100: '#F0F0F4',
          200: '#E1E1E8',
          300: '#D1D2DB',
          400: '#A7A8B4',
          500: '#787A89',
          600: '#5A5C6D',
          700: '#444553',
          800: '#2D2F39',
          900: '#1A1B24',
          DEFAULT: '#D1D2DB'
        },
        primary: {
          50: '#b0c8ce',
          100: '#93b1ba',
          200: '#759aa5',
          300: '#5c818c',
          400: '#46656d',
          500: '#2C4147',
          600: '#20343D',
          700: '#162833',
          800: '#0E1D29',
          900: '#081422',
          DEFAULT: '#2C4147'
        },
        secondary: {
          50: '#FFF4DF',
          100: '#FFF4DF',
          200: '#FFE6BF',
          300: '#FFD49F',
          400: '#FFC387',
          500: '#FFA75F',
          600: '#DB8045',
          700: '#B75E2F',
          800: '#93401E',
          900: '#7A2A12',
          DEFAULT: '#FFA75F'
        },
        success: {
          50: '#DEFBE5',
          100: '#DEFBE5',
          200: '#BFF7D2',
          300: '#99E7BC',
          400: '#78CFA7',
          500: '#4DB08D',
          600: '#38977F',
          700: '#267E71',
          800: '#186661',
          900: '#0E5154',
          DEFAULT: '#4DB08D'
        },
        danger: {
          50: '#FBEBE5',
          100: '#FEF0E9',
          200: '#FDDED3',
          300: '#F9C6BC',
          400: '#F4AFA9',
          500: '#EE8C8C',
          600: '#CC666F',
          700: '#AB4658',
          800: '#8A2C44',
          900: '#721A39',
          DEFAULT: '#EE8C8C'
        },
        warning: {
          50: '#FEFAE2',
          100: '#FEFAE2',
          200: '#FEF4C5',
          300: '#FCEBA7',
          400: '#F9E190',
          500: '#F5D36C',
          600: '#D2AE4E',
          700: '#B08B36',
          800: '#8E6B22',
          900: '#755314',
          DEFAULT: '#F5D36C'
        },
        // blue: {
        //   50: '#E6F1FF',
        //   100: '#CCE4FF',
        //   200: '#99C9FF',
        //   300: '#66ADFF',
        //   400: '#3392FF',
        //   500: '#0077FF',
        //   600: '#005FCC',
        //   700: '#004799',
        //   800: '#003066',
        //   900: '#001833',
        //   DEFAULT: '#0077FF'
        // },
        // orange: {
        //   50: '#FFF0E6',
        //   100: '#FFE0CC',
        //   200: '#FFC299',
        //   300: '#FFA366',
        //   400: '#FF8533',
        //   500: '#FF6600',
        //   600: '#CC5200',
        //   700: '#993D00',
        //   800: '#662900',
        //   900: '#331400',
        //   DEFAULT: '#FF6600'
        // },
        // pink: {
        //   50: '#FFE6F2',
        //   100: '#FFCCE5',
        //   200: '#FF99CB',
        //   300: '#FF66B1',
        //   400: '#FF3397',
        //   500: '#FF007D',
        //   600: '#CC0064',
        //   700: '#99004B',
        //   800: '#660032',
        //   900: '#330019',
        //   DEFAULT: '#FF007D'
        // },
        // purple: {
        //   50: '#F2E6FF',
        //   100: '#E5CCFF',
        //   200: '#CC99FF',
        //   300: '#B266FF',
        //   400: '#9933FF',
        //   500: '#8000FF',
        //   600: '#6600CC',
        //   700: '#4D0099',
        //   800: '#330066',
        //   900: '#1A0033',
        //   DEFAULT: '#8000FF'
        // }
      }
    },
    dark: {
      extend: 'dark',
      layout: {
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '1px'
        },
        radius: {
          small: '4px',
          medium: '4px',
          large: '4px'
        }
      },
      colors: {
        focus: '#A7C8D2',
        background: '#181819',
        foreground: '#E1E1E8',
        primary: {
          50: '#081422',
          100: '#0E1D29',
          200: '#162833',
          300: '#20343D',
          400: '#2C4147',
          500: '#46656D',
          600: '#5C818C',
          700: '#759AA5',
          800: '#93B1BA',
          900: '#B0C8CE',
          DEFAULT: '#5C818C'
        },
        secondary: {
          50: '#7A2A12',
          100: '#93401E',
          200: '#B75E2F',
          300: '#DB8045',
          400: '#FFA75F',
          500: '#FFC387',
          600: '#FFD49F',
          700: '#FFE6BF',
          800: '#FFF4DF',
          900: '#FFF9EF',
          DEFAULT: '#FFA75F'
        },
        success: {
          50: '#0E5154',
          100: '#186661',
          200: '#267E71',
          300: '#38977F',
          400: '#4DB08D',
          500: '#78CFA7',
          600: '#99E7BC',
          700: '#BFF7D2',
          800: '#DEFBE5',
          900: '#EDFDF2',
          DEFAULT: '#4DB08D'
        },
        danger: {
          50: '#721A39',
          100: '#8A2C44',
          200: '#AB4658',
          300: '#CC666F',
          400: '#EE8C8C',
          500: '#F4AFA9',
          600: '#F9C6BC',
          700: '#FDDED3',
          800: '#FEF0E9',
          900: '#FFF7F4',
          DEFAULT: '#EE8C8C'
        },
        warning: {
          50: '#755314',
          100: '#8E6B22',
          200: '#B08B36',
          300: '#D2AE4E',
          400: '#F5D36C',
          500: '#F9E190',
          600: '#FCEBA7',
          700: '#FEF4C5',
          800: '#FEFAE2',
          900: '#FEFDF0',
          DEFAULT: '#F5D36C'
        },
        // blue: {
        //   50: '#001833',
        //   100: '#003066',
        //   200: '#004799',
        //   300: '#005FCC',
        //   400: '#0077FF',
        //   500: '#3392FF',
        //   600: '#66ADFF',
        //   700: '#99C9FF',
        //   800: '#CCE4FF',
        //   900: '#E6F1FF',
        //   DEFAULT: '#3392FF'
        // },
        // orange: {
        //   50: '#331400',
        //   100: '#662900',
        //   200: '#993D00',
        //   300: '#CC5200',
        //   400: '#FF6600',
        //   500: '#FF8533',
        //   600: '#FFA366',
        //   700: '#FFC299',
        //   800: '#FFE0CC',
        //   900: '#FFF0E6',
        //   DEFAULT: '#FF8533'
        // },
        // pink: {
        //   50: '#330019',
        //   100: '#660032',
        //   200: '#99004B',
        //   300: '#CC0064',
        //   400: '#FF007D',
        //   500: '#FF3397',
        //   600: '#FF66B1',
        //   700: '#FF99CB',
        //   800: '#FFCCE5',
        //   900: '#FFE6F2',
        //   DEFAULT: '#FF3397'
        // },
        // purple: {
        //   50: '#1A0033',
        //   100: '#330066',
        //   200: '#4D0099',
        //   300: '#6600CC',
        //   400: '#8000FF',
        //   500: '#9933FF',
        //   600: '#B266FF',
        //   700: '#CC99FF',
        //   800: '#E5CCFF',
        //   900: '#F2E6FF',
        //   DEFAULT: '#9933FF'
        // }
      }
    }
  },
};
