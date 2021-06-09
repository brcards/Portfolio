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

const getMeta = (metaName) => {
    const metas = document.getElementsByTagName("meta");
    for (let i = 0; i < metas.length; i += 1) {
        if (metas[i].getAttribute("name") === metaName) {
            return metas[i].getAttribute("content");
        }
    }
    return "";
};

export {render, getMeta};