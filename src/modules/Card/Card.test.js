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
    it('renders the test', () => {
        const {getByText} = render(<CardText title="card title">test card text</CardText>);

        getByText(/card title/i);
        getByText(/test card text/i);
    });
});