import React from 'react';
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "src/modules/Drawer";
import Divider from "@mui/material/Divider";
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
