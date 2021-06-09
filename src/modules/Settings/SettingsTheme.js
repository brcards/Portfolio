import React from 'react';
import {ThemeContext} from "src/modules/Theme";
import ListItem from "@material-ui/core/ListItem";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
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
