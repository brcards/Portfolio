import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import IconButton from "src/modules/IconButton/IconButton";

describe("IconButton", () => {
    it('renders the hero', () => {
        const {getByText} = render(<IconButton>I</IconButton>);
        getByText(/i/i);
    });
});
