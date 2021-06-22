import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import Card from "@material-ui/core/Card";
import {
    CardContent,
    CardImage,
    CardTags,
    CardText
} from "src/modules/Card";
import Tag from "src/modules/Tag";
import CardHeading from "src/modules/Card/CardHeading";
import CardLink from "src/modules/Card/CardLink";

describe("Card", () => {
    it('renders the card', () => {
        const {getByText} = render(<Card>children</Card>);

        getByText(/children/i);
    });
});

describe("CardContent", () => {
    it('renders the card', () => {
        const {getByText} = render(<CardContent>children</CardContent>);

        getByText(/children/i);
    });
});

describe("CardImage", () => {
    it('renders the card', () => {
        const {getByRole} = render(<CardImage><img src="" alt="test" /></CardImage>);

        getByRole('img');
    });
});

describe("CardTags", () => {
    it('renders the tags', () => {
        const {getByText} = render(<CardTags><Tag>tag</Tag></CardTags>);

        getByText(/tag/i);
    });
});

describe("CardText", () => {
    it('renders the text', () => {
        const {getByText} = render(<CardText>test card text</CardText>);

        getByText(/test card text/i);
    });
});

describe("CardHeading", () => {
    it('renders the heading', () => {
        const {getByText} = render(<CardHeading>test card text</CardHeading>);

        getByText(/test card text/i);
    });
});

describe("CardLink", () => {
    it('renders the link', () => {
        const {getByText} = render(<CardLink>test card text</CardLink>);

        getByText(/test card text/i);
    });
});