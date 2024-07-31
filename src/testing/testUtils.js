import {ApplicationThemeProvider} from "src/modules/Theme";
import { render as testingLibraryRender} from '@testing-library/react';
import React from "react";

/**
 * function to inject theme into individual components
 *
 * @param component
 * @returns {*}
 */
const render = (component) => {
    return testingLibraryRender(
        <ApplicationThemeProvider>
            {component}
        </ApplicationThemeProvider>
    );
};

export {render};