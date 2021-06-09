import styled, {ThemeContext} from "styled-components";
import React, {useContext} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from "src/modules/IconButton";
import NavigationBarButton from "src/modules/NavigationBar/NavigationBarButton";

const StyledList = styled.ul`
    margin-right: 50px;
    padding-left: 0;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        margin-right: 10px;
    }
`;

const MobileSettingsButton = styled(IconButton)`
    margin-top: -125%;
    color: ${props => props.theme.colours.text[0]}
`;

const NavigationBarSettingsButton = ({onClick}) => {
    const theme = useContext(ThemeContext);
    const mobile = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

    return (
        <StyledList>
            {mobile ?
                <NavigationBarButton onClick={onClick}>
                    Settings
                </NavigationBarButton> :
                <MobileSettingsButton onClick={onClick}>
                    <SettingsIcon/>
                </MobileSettingsButton>
            }
        </StyledList>
    );
};

export default NavigationBarSettingsButton;
