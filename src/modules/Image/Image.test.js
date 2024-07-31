import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import MyImage from "src/modules/Image/Image";

describe("Image", () => {
    it('renders the image', () => {
        const {getByRole} = render(<MyImage src="" alt="some alt" height={100} width={100}/>);
        getByRole("img");
    });
});
