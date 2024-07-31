import React from 'react';
import {ThemeContext} from "src/modules/Theme";
import ListItem from "@mui/material/ListItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SettingsListItemText from "src/modules/Settings/SettingsListItemText";
import SettingsListItemIcon from "src/modules/Settings/SettingsListItemIcon";

const SettingsTheme = () => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <ListItem button onClick={toggleTheme}>
                    <SettingsListItemIcon>
                        {theme === "dark" ?
                            <WbSunnyIcon fontSize="small" color="inherit"/> :
                            <NightsStayIcon fontSize="small" color="inherit"/>}
                    </SettingsListItemIcon>
                    <SettingsListItemText primary={(theme === "dark" ? "Light" : "Dark") + " Theme"} />
                </ListItem>
            )}
        </ThemeContext.Consumer>
    );
};

export default SettingsTheme;
