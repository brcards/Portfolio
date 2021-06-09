import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Paragraph from "src/modules/Paragraph/Paragraph";

describe("Paragraph", () => {
    it('renders the paragraph', () => {
        const {getByText} = render(<Paragraph>test</Paragraph>);
        getByText(/test/i);
    });
});
