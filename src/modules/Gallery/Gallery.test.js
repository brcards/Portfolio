import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Gallery from "src/modules/Gallery/Gallery";
import GalleryImage from "src/modules/Gallery/GalleryImage";
import {setupMockIntersectionObserver} from "src/testing/__mocks__/IntersectionObserver";

beforeEach(() => {
    setupMockIntersectionObserver();
});

describe("Gallery", () => {
    it('renders the gallery', () => {
        const {getByText} = render(<Gallery>children</Gallery>);
        getByText(/children/i);
    });
});

describe("GalleryImage", () => {
    it('renders a gallery image', () => {
        const {getByRole} = render(<Gallery><GalleryImage /></Gallery>);
        getByRole('img');
    });
});