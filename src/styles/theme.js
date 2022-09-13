const Theme = {
  font: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {},
    fontWeight: {},
  },
  screens: {
    sm: "480px",
    md: "701px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    primary: "#3d155f",
    primary500: "#4831d4",
    secondary: "#eaeaea",
    secondary500: "#ccf381",
    blue: "#4831d4",
    green: "#ccf381",
    yellow: "#ffc82c",
    grayDark: "#273444",
    gray: "#8492a6",
    grayLight: "#d3dce6",
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
  },
};

export default Theme;
