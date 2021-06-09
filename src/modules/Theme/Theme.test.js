import React from "react"
import '@testing-library/jest-dom'
import {fireEvent, render} from '@testing-library/react';
import {ApplicationThemeProvider, ThemeContext} from "src/modules/Theme/Theme";

describe("Theme", () => {
    it('should initialize to a light theme', () => {
        let currentTheme = '';

        render(
            <ApplicationThemeProvider>
                <ThemeContext.Consumer>
                    {({theme}) => {
                        currentTheme = theme;
                    }}
                </ThemeContext.Consumer>
            </ApplicationThemeProvider>
        );

        expect(currentTheme).toBe("light");
    });

    it('should change theme on toggle', () => {
        let currentTheme = '';

        const {getByText} = render(
            <ApplicationThemeProvider>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => (
                        <div>
                            <button onClick={toggleTheme}>
                                toggle
                            </button>
                            <div>
                                {theme}
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ApplicationThemeProvider>
        );

        fireEvent.click(getByText(/toggle/i));
        getByText(/dark/i);
    });
});
