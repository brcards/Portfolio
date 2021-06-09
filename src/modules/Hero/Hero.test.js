import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Hero from "src/modules/Hero";

describe("Hero", () => {
    it('renders the hero', () => {
        const {getByLabelText, getByRole} = render(<Hero/>);

        getByLabelText(/github/i);
        getByLabelText(/email/i);
        getByLabelText(/linkdin/i);
    });
});
