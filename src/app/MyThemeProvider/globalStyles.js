export const getGlobalSytels = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  secondary: {
                      main: "#E0FCFF",
                  },
                  background: {
                      default: "#7098DA",
                      paper: "#fff",
                  },
              }
            : {
                  // palette values for dark mode
                  secondary: {
                      main: "#3A4750",
                  },
                  background: {
                      default: "#1B262C",
                      paper: "#1B262C",
                  },
              }),
    },
});
