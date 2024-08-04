/** @type {import('tailwindcss').Config} */

//import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  "./stories/**/*.{js,ts,jsx,tsx}", // Here!
];
export const darkMode = "class";
export const theme = {
  important: true,
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      "2xl": "128px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    maxWidth: {
      container: {
        DEFAULT: "100%", // default for mobile screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1290px",
        "2xl": "1536px",
      },
    },
  },
  fontFamily: {
    display: ["var(--font-recoleta)"],
    body: ["var(--font-triomphe)"],
    mono: ["var(--font-ninjasaas)"],
    sans: ["var(--font-lateef)"],
  },

  extend: {
    animation: {
      blob: "blob 7s infinite",
      blob2: "blob2 10s infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
          filter: "blur(0px)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
          filter: "blur(2px)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
      },
      blob2: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "50%": {
          transform: "translate(20px, -20px) scale(1.1)",
          filter: "blur(0px)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
      },
      blob3: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "50%": {
          transform: "translate(10px, -10px) scale(1.1)",
          filter: "blur(0px)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
      },
    },
    colors: {
      primary: {
        50: customColors("--c-primary-50"),
        100: customColors("--c-primary-100"),
        200: customColors("--c-primary-200"),
        300: customColors("--c-primary-300"),
        400: customColors("--c-primary-400"),
        500: customColors("--c-primary-500"),
        6000: customColors("--c-primary-600"),
        700: customColors("--c-primary-700"),
        800: customColors("--c-primary-800"),
        900: customColors("--c-primary-900"),
      },
      secondary: {
        50: customColors("--c-secondary-50"),
        100: customColors("--c-secondary-100"),
        200: customColors("--c-secondary-200"),
        300: customColors("--c-secondary-300"),
        400: customColors("--c-secondary-400"),
        500: customColors("--c-secondary-500"),
        6000: customColors("--c-secondary-600"),
        700: customColors("--c-secondary-700"),
        800: customColors("--c-secondary-800"),
        900: customColors("--c-secondary-900"),
      },
      neutral: {
        50: customColors("--c-neutral-50"),
        100: customColors("--c-neutral-100"),
        200: customColors("--c-neutral-200"),
        300: customColors("--c-neutral-300"),
        400: customColors("--c-neutral-400"),
        500: customColors("--c-neutral-500"),
        6000: customColors("--c-neutral-600"),
        700: customColors("--c-neutral-700"),
        800: customColors("--c-neutral-800"),
        900: customColors("--c-neutral-900"),
      },
      mainRed: {
        50: customColors("--c-main-red-50"),
        100: customColors("--c-main-red-100"),
        6000: customColors("--c-main-red-6000"),
      },
      mainPurple: {
        50: customColors("--c-main-purple-50"),
        100: customColors("--c-main-purple-100"),
        6000: customColors("--c-main-purple-6000"),
      },
      mainYellow: {
        50: customColors("--c-main-yellow-50"),
        100: customColors("--c-main-yellow-100"),
        6000: customColors("--c-main-yellow-6000"),
      },
      lightWhite: {
        500: customColors("--c-lightWhite-500"),
      },

      lightBlue: {
        500: customColors("--c-lightBlue-500"),
      },
      darkBlue: {
        500: customColors("--c-darkBlue-500"),
      },
      gold: {
        500: customColors("--c-gold-500"),
      },
      darkGray: {
        500: customColors("--c-darkGray-500"),
      },
      yellow: {
        500: customColors("--c-yellow-500"),
      },
      darkgreen: {
        500: customColors("--c-darkgreen-500"),
      },
      green: {
        500: customColors("--c-card-500"),
      },

      lightGreen: {
        500: customColors("--c-lightGreen-500"),
      },
      //Badge 50 - 900
      badgePrimary: {
        50: customColors("--c-badge-primary-color"),
        800: customColors("--c-badge-primary-background"),
        900: customColors("--c-badge-primary-hover"),
      },
      badgeGreen: {
        50: customColors("--c-badge-green-color"),
        800: customColors("--c-badge-green-background"),
        900: customColors("--c-badge-green-hover"),
      },
      badgeBlue: {
        50: customColors("--c-badge-blue-color"),
        800: customColors("--c-badge-blue-background"),
        900: customColors("--c-badge-blue-hover"),
      },
      badgeIndigo: {
        50: customColors("--c-badge-indigo-color"),
        800: customColors("--c-badge-indigo-background"),
        900: customColors("--c-badge-indigo-hover"),
      },
      badgeBrown: {
        50: customColors("--c-badge-brown-color"),
        800: customColors("--c-badge-brown-background"),
        900: customColors("--c-badge-brown-hover"),
      },
      badgeRed: {
        50: customColors("--c-badge-red-color"),
        800: customColors("--c-badge-red-background"),
        900: customColors("--c-badge-red-hover"),
      },
      badgePurple: {
        50: customColors("--c-badge-purple-color"),
        800: customColors("--c-badge-purple-background"),
        900: customColors("--c-badge-purple-hover"),
      },
      badgeYellow: {
        50: customColors("--c-badge-yellow-color"),
        800: customColors("--c-badge-yellow-background"),
        900: customColors("--c-badge-yellow-hover"),
      },

      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    spacing: {
      1.2: "0.3rem", // 3px if base is 16px
      2.5: "0.625rem",
      3.75: "0.9375rem",
      4: "1rem",
      5.08: "1.27rem",
    },
    zIndex: {
      1: 1,
      100: 100,
      20: 20,
    },
    backgroundImage: {
      "lines-pattern": "url('/images/linesBg.svg')",
      "dark-lines": "url('/images/whiteLinesBg.svg')",
      "mark-green-longer": "url('/images/mark-green-longer.svg')",
      "mark-yellow-longer": "url('/images/mark-yellow-longer.svg')",
      "hero-pattern": "url('/images/bg-texture.png')",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    height: {
      "screen-ios": ["100vh", "-webkit-fill-available"],
    },
  },
};
export const variants = {
  extend: {
    backgroundColor: ["enabled"],
    textColor: ["enable"],
  },
};

export const plugins = [
  require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("tailwindcss-animate"),
  function ({ addComponents, addUtilities }) {
    addComponents({
      ".container": {
        "@screen xl": {
          maxWidth: "1360px",
        },
        "@screen 2xl": {
          maxWidth: "1620px",
        },
      },
    });
    const newUtilities = {
      ".safe-bottom": {
        paddingBottom: "env(safe-area-inset-bottom)",
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  },
];
