import { AllThemes } from 'src/modules/Theme/ThemeTypes';

// fonts are the same regardless of theme
const fonts = {
    header: "'Oswald',sans-serif",
    text: "'Source Sans Pro', sans-serif"
};

const breakpoints = {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px"
};

/**
 * Provides the theme values, the follow have unique configurations:
 *
 * background: increasing values increasing different
 * elevations. 0 is base, 1 is 1 above base etc...
 *
 * text: increasing values for increasing fade.
 * 0 is base, 1 is 1 above base etc...
 */
const Themes: AllThemes = {
    light: {
        name: "light",
        colours: {
            primary: "#1ECBE1",
            secondary: "#3500D3",
            background: ["#FFFFFF", "#FEFEFE"],
            text: ["#000000", "#737373"],
        },
        fonts: fonts,
        breakpoints: breakpoints
    },
    dark: {
        name: "dark",
        colours: {
            primary: "#E3AE57",
            secondary: "#008000",
            background: ["#121212", "#222222"],
            text: ["#FFFFFF", "#DDDDDD"],
        },
        fonts: fonts,
        breakpoints: breakpoints
    }
};

export default Themes;
export {breakpoints}
