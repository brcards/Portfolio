import React from 'react';
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "src/modules/Drawer";
import Divider from "@material-ui/core/Divider";
import SettingsTheme from "src/modules/Settings/SettingsTheme";
import SettingsLanguage from "src/modules/Settings/SettingsLanguage";

const DrawerContent = styled(List)`
    min-width: 20em;
`;

const StyledListItemText = styled(ListItemText)`
    color: ${props => props.theme.colours.text[0]};
`;

const Settings = ({open, setOpen}) => {

    const toggleDrawer = (state) => {
        setOpen(state);
    };

    return (
        <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
            <DrawerContent>
                <List>
                    <ListItem>
                        <StyledListItemText primary="Settings"/>
                    </ListItem>

                    <Divider />

                    <SettingsTheme />
                    <SettingsLanguage />
                </List>
            </DrawerContent>
        </Drawer>
    );
};

export default Settings;
