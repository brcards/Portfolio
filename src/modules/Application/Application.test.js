import React from "react"
import '@testing-library/jest-dom'
import {getMeta, render} from "src/testing/testUtils";
import Application from "src/modules/Application/Application";
import ApplicationHelmet from "src/modules/Application/ApplicationHelmet";
import {waitFor} from "@testing-library/dom";

describe('Application',() => {
    it('render the Application', () => {
        const {getByText} = render(<Application>test</Application>);
        getByText(/test/i);
    });
});

describe('ApplicationHelmet',  () => {
    it('render the Helmet', async () => {
        const {getByText} = render(<ApplicationHelmet description="test description" title="test title"/>);

        await waitFor(() => expect(document.title).toEqual("test title"));
        await waitFor(() => expect(getMeta("description")).toBe("test description"));
    });
});