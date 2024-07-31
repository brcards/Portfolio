import React from "react"
import '@testing-library/jest-dom'
import {useOnScreen} from "src/modules/Screen/Screen";
import {setupMockIntersectionObserver, MockIntersectionObserver} from "src/testing/__mocks__/IntersectionObserver";
import { renderHook, act } from '@testing-library/react'

beforeEach(() => {
    setupMockIntersectionObserver();
});

describe("Screen", () => {
    it('when visible set shown', () => {
        let dummyRef = React.createRef();
        const { result } = renderHook(() => useOnScreen(dummyRef));

        let [isVisible, shown] = result.current;
        expect(isVisible).toBeFalsy();
        expect(shown).toBeFalsy();

        // simulates object entering screen
        act(() => {
            MockIntersectionObserver.triggerObservers(true);
        });

        [isVisible, shown] = result.current;
        expect(isVisible).toBeTruthy();
        expect(shown).toBeTruthy();

        // simulate object leaving screen
        act(() => {
            MockIntersectionObserver.triggerObservers(false);
        });

        [isVisible, shown] = result.current;
        expect(isVisible).toBeFalsy();
        expect(shown).toBeTruthy();
    });
});
