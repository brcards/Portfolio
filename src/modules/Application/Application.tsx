import * as React from "react";
import {ReactNode} from "react";
import styled, {createGlobalStyle} from "styled-components";
import "@fontsource/oswald"
import "@fontsource/source-sans-pro"
import {ApplicationThemeProvider} from "src/modules/Theme";
import Hero from "src/modules/Hero";
import NavigationBar from "src/modules/NavigationBar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import "normalize.css";
import Settings from "src/modules/Settings/Settings";
import Alert from "@mui/material/Alert";
import ApplicationContentColumn from "src/modules/Application/ApplicationContentColumn";
import ApplicationHeroColumn from "src/modules/Application/ApplicationHeroColumn";
import {Theme} from "src/modules/Theme/ThemeTypes";

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 14px;
        background-color: ${props => props.theme.colours.background[0]};
    },
    a {
        &:link {
            color: ${props => props.theme.colours.primary};
        }
        &:visited {
            color: ${props => props.theme.colours.secondary};
        }
    }
`;

const ContentContainer = styled(Container)`
    padding: 0 50px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding: 0 10px;
    }
`;

const ApplicationContainer = styled(Grid)`
    color: ${props => props.theme.colours.text[0]};
`;

const links = [
    {label: "about", link: "/"},
    {label: "works", link: "/works"},
    {label: "photos", link: "/photos"}
];

interface ApplicationProps {
    children: ReactNode;
}

/**
 * Global Component that wraps pages. Tied together with pages in gatsby-browser.js
 */
const Application: React.FC<ApplicationProps> = ({children}) => {
    const [settingsOpen, setSettingsOpen] = React.useState(false);

    const toggleSettings = (state: boolean) => {
        setSettingsOpen(state);
    };

    return (
        <ApplicationThemeProvider>
            <GlobalStyle/>

            <ApplicationContainer container spacing={0}>
                <ApplicationHeroColumn>
                    <Hero />
                </ApplicationHeroColumn>

                <ApplicationContentColumn>
                    <Grid item sm={12}>
                        <NavigationBar toggleSettings={toggleSettings} links={links}/>
                    </Grid>
                    <ContentContainer maxWidth="md">
                        {children}
                    </ContentContainer>
                </ApplicationContentColumn>
            </ApplicationContainer>

            <Settings open={settingsOpen} setOpen={setSettingsOpen}/>

            <noscript>
                <Alert severity="error">Please enable JavaScript to use this site</Alert>
            </noscript>
        </ApplicationThemeProvider>
    )
};

export default Application;
