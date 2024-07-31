import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Drawer from "src/modules/Drawer/Drawer";

describe("Drawer", () => {
    it('renders the drawer', () => {
        const {getByText} = render(<Drawer open>children</Drawer>);

        getByText(/children/i);
    });
});
