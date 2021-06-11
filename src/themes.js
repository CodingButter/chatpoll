const BaseTheme = {
  font: {
    color: {
      dark: "#222222",
      light: "#fefefe",
    },
    size: {
      extraSmall: ".5vw",
      small: "1vw",
      medium: "2vw",
      large: "3vw",
      extraLarge: "4vw",
    },
  },
  name: "Base",
  padding: {
    large: 40,
    base: 20,
    small: 5,
  },
  screenSize: {
    desktop: {
      small: 860,
      medium: 1024,
      large: 2000,
    },
    mobile: {
      small: 550,
      medium: 640,
      large: 820,
    },
  },
  palette: {
    primary: {
      lighter: "#63365b",
      main: "#351d31",
      darker: "#10090f",
    },
    secondary: {
      lighter: "#f88c87",
      main: "#f55951",
      darker: "#f23026",
    },
    accent: {
      one: "#edd2cb",
      two: "#f1e8e6",
      three: "#543c52",
    },
  },
};

export { BaseTheme };
