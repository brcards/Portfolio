import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import LightBox from "src/modules/LightBox/LightBox";
import {fireEvent} from '@testing-library/react'
import { act } from '@testing-library/react';

let index = 1;
const setIndex = (i) => {
    index = i;
};

beforeEach(() => {
    setIndex(1);
});

describe("LightBox", () => {
    it('renders the LightBox', () => {
        const {getByText} = render(
            <LightBox open={true} onClose={() => null} index={0} setIndex={() => null} count={1}>
                    children
            </LightBox>
        );

        getByText(/children/i);
    });

    it('is hidden when closed', () => {
        const {queryByText} = render(
            <LightBox open={false} onClose={() => null} index={0} setIndex={() => null} count={1}>
                children
            </LightBox>
        );

        expect(queryByText(/children/i)).not.toBeInTheDocument();
    });

    it('should increment on next', () => {
        setIndex(1);

        const {getByLabelText} = render(
            <LightBox open={true} onClose={() => null} index={index} setIndex={setIndex} count={3}>
                children
            </LightBox>
        );

        act(() => {
            fireEvent.click(getByLabelText(/next/i));
        });
        expect(index).toBe(2);
    });

    it('should not increment on next if out of range', () => {
        setIndex(2);

        const {getByLabelText} = render(
            <LightBox open={true} onClose={() => null} index={index} setIndex={setIndex} count={3}>
                children
            </LightBox>
        );

        act(() => {
            fireEvent.click(getByLabelText(/next/i));
        });
        expect(index).toBe(2);
    });

    it('should decrement on previous', () => {
        setIndex(1);

        const {getByLabelText} = render(
            <LightBox open={true} onClose={() => null} index={index} setIndex={setIndex} count={3}>
                children
            </LightBox>
        );

        act(() => {
            fireEvent.click(getByLabelText(/previous/i));
        });
        expect(index).toBe(0);
    });

    it('should not decrement on previous if out of range', () => {
        setIndex(0);

        const {getByLabelText} = render(
            <LightBox open={true} onClose={() => null} index={index} setIndex={setIndex} count={3}>
                children
            </LightBox>
        );

        act(() => {
            fireEvent.click(getByLabelText(/previous/i));
        });

        expect(index).toBe(0);
    });
});

// describe("LightBoxImage", () => {
//     it('renders the right arrow', () => {
//         let getByRole;
//         act(() => {
//             const renderResult = render(<LightBoxImage src="" alt="test image"/>);
//             getByRole = renderResult.getByRole;
//         });
//         getByRole('img');
//     });
// });
