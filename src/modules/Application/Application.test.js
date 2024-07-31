import React from "react"
import '@testing-library/jest-dom'
import Application from "src/modules/Application";
import { render } from '@testing-library/react';

describe('Application',() => {
    it('render the Application', () => {
        const {getByText} = render(<Application>test</Application>);
        getByText(/test/i);
    });
});
