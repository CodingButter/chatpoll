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
      lighter: "#556474",
      main: "#F2F2F2",
      darker: "#164475",
    },
    secondary: {
      lighter: "#C4B4BF",
      main: "#A3B4BF",
      darker: "#8297A1",
    },
    accent: {
      one: "#edd2cb",
      two: "#A3B4BF",
      three: "#A3B4BF",
    },
  },
};

export { BaseTheme };
