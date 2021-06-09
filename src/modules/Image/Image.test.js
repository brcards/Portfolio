import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Image from "src/modules/Image/Image";

describe("Image", () => {
    it('renders the image', () => {
        const {getByRole} = render(<Image src="" alt="some alt"/>);
        getByRole("img");
    });
});
