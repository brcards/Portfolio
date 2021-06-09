import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Settings from "src/modules/Settings/Settings";


describe("Settings", () => {
    it('render the settings drawer when open', () => {
        const {getByText} = render(<Settings setOpen={() => true} open={true}/>);

        getByText(/theme/i);
        getByText(/language/i);
    });

    it('hides the settings drawer when open', () => {
        const {queryByText} = render(<Settings setOpen={() => true} open={false}/>);

        expect(queryByText(/theme/i)).not.toBeInTheDocument();
        expect(queryByText(/language/i)).not.toBeInTheDocument();
    });
});
