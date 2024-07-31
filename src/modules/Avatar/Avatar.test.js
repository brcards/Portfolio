import React from "react"
import '@testing-library/jest-dom'
import AvatarHeading from "src/modules/Avatar/AvatarHeading";
import {render} from "src/testing/testUtils";
import AvatarLink from "src/modules/Avatar/AvatarLink";
import AvatarImage from "src/modules/Avatar/AvatarImage";
import {Avatar} from "src/modules/Avatar/index";
import MyImage from "src/modules/Image/Image";

describe("Avatar", () => {
    it('renders the avatar', () => {
        const {getByText} = render(<Avatar>children</Avatar>);

        getByText(/children/i);
    });
});

describe("AvatarHeading", () => {
    it('renders name and title', () => {
        const {queryByText, getByText} = render(<AvatarHeading name="Bryan" title="Engineer" />,);

        getByText(/bryan/i);
        getByText(/engineer/i);
    });
});

describe("AvatarLink", () => {
    it('renders the avatar link', () => {
        const {getByText} = render(<AvatarLink>github</AvatarLink>);

        getByText(/github/i);
    });
});

describe("AvatarImage", () => {
    it('renders the avatar image', () => {
        const {getByRole} = render(
            <AvatarImage href={"href"}>
                <MyImage src="/example.jpg" alt="headshot" width={120} height={120}/>
            </AvatarImage>);

        getByRole('img');
    });
});

describe("AvatarLink", () => {
    it('renders the link', () => {
        const {getByText} = render(<AvatarLink><span>link</span></AvatarLink>);

        getByText(/link/i);
    });
});

