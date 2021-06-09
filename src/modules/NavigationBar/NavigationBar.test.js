import React from "react"
import '@testing-library/jest-dom'
import {render} from "src/testing/testUtils";
import NavigationBar from "src/modules/NavigationBar/NavigationBar";
import NavigationBarLink from "src/modules/NavigationBar/NavigationBarLink";
import NavigationBarLinks from "src/modules/NavigationBar/NavigationBarLinks";
import NavigationBarSettings from "src/modules/NavigationBar/NavigationBarSettings";
import {fireEvent} from "@testing-library/react";
import {breakpoints} from "src/modules/Theme";

describe("NavigationBar", () => {
    it('renders the navigation bar', () => {
        const links = [{label: "about", link: "/"}];
        const {getByLabelText, getByRole} = render(
            <NavigationBar toggleSettings={() => null} links={links}/>
        );
    });

    it('calls settings callback when clicked', () => {
        window.matchMedia = jest.fn().mockImplementation(query => {
            return {
                matches: query !== '(max-width: ' + breakpoints.md + ')' ,
                media: '',
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        });

        let settingsOpen = false;
        let callSettings = () => {
            settingsOpen = true;
        };

        const {getByText} = render(<NavigationBar toggleSettings={() => callSettings()} links={[]} />);

        fireEvent.click(getByText(/Settings/i));
        expect(settingsOpen).toBe(true);
    });

    it('renders the navigation bar link', () => {
        const link = {label: "about", link: "/"};
        const {getByText} = render(<NavigationBarLink link={"/"}>link</NavigationBarLink>);
        getByText(/link/i);
    });

    it('renders the navigation bar links', () => {
        const {getByText} = render(<NavigationBarLinks>about</NavigationBarLinks>);
        getByText(/about/i);
    });

    it('renders the navigation bar settings', () => {
        const links = [{label: "about", link: "/"}];
        const {getByText} = render(<NavigationBarSettings>settings</NavigationBarSettings>);
        getByText(/settings/i);
    });
});
