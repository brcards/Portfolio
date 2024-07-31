
export interface AllThemes {
    light: Theme;
    dark: Theme;
}

export interface Theme {
    name: string;
    colours: Colours;
    fonts: Fonts;
    breakpoints: Breakpoints;
}

export interface Colours {
    primary: string;
    secondary: string;
    background: string[];
    text: string[];
}

export interface Fonts {
    header: string;
    text: string;
}

export interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

