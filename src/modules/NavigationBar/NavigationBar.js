import React from 'react';
import NavigationBarLinks from "src/modules/NavigationBar/NavigationBarLinks";
import styled from "styled-components";
import NavigationBarSettingsButton from "src/modules/NavigationBar/NavigationBarSettingsButton";
import PropTypes from "prop-types";
import NavigationBarLink from "src/modules/NavigationBar/NavigationBarLink";
import NavigationBarSettings from "src/modules/NavigationBar/NavigationBarSettings";

const NavigationContainer = styled.div`
    display: flex;
    align-content: space-between;
    text-transform: uppercase;
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.2em;
    letter-spacing: 2px;
    color: ${props => props.theme.colours.text[0]};
`;

const NavigationBar = ({toggleSettings, links}) => {
    return (
        <NavigationContainer>
            <NavigationBarLinks>
                {links.map(page => {
                    return <NavigationBarLink link={page.link} key={page.label}>
                        {page.label}
                    </NavigationBarLink>
                })}
            </NavigationBarLinks>
            <NavigationBarSettings>
                <NavigationBarSettingsButton onClick={() => toggleSettings(true)}/>
            </NavigationBarSettings>
        </NavigationContainer>
    );
};

NavigationBar.propTypes = {
    /**
     * function to toggle settings
     */
    toggleSettings: PropTypes.func,

    /**
     * Links to different pages
     */
    links: PropTypes.arrayOf(PropTypes.shape({
        /**
         * url to link to
         */
        link: PropTypes.string,
        /**
         * text to be displayed
         */
        label: PropTypes.string
    }))
};

export default NavigationBar;
