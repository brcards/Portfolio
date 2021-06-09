import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Heading from "src/modules/Heading/Heading";

describe("Heading", () => {
    it('renders the heading one', () => {
        const {getByText} = render(<Heading level={1}>children</Heading>);
        getByText(/children/i);
    });

    it('renders the heading two', () => {
        const {getByText} = render(<Heading level={2}>children</Heading>);
        getByText(/children/i);
    });
});