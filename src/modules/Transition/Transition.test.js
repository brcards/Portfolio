import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Transition from "src/modules/Transition/Transition";
import {setupMockIntersectionObserver} from "src/testing/__mocks__/IntersectionObserver";

beforeEach(() => {
    setupMockIntersectionObserver();
});

describe("Transition", () => {
    it('render a Transition with its child', () => {
        const {getByText} = render(<Transition><div>content</div></Transition>);
        getByText(/content/i);
    });
});