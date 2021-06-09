import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Overlay from "src/modules/Overlay";

describe("Overlay", () => {
    it('renders the Overlay', () => {
        const {getByText} = render(<Overlay content={<div>link</div>}>test</Overlay>);
        getByText(/link/i);
        getByText(/test/i);
    });
});
