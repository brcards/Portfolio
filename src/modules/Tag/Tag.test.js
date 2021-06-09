import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Tag from "src/modules/Tag/Tag";

describe("Tag", () => {
    it('render a tag', () => {
        const {getByText} = render(<Tag>children</Tag>);

        getByText(/children/i);
    });
});
