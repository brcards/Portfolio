import React from 'react';
import MUIDrawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core";
import {withTheme} from "styled-components";

const useStyles = makeStyles({
    paper: {
        background: theme => theme.colours.background[1],
    }
});

/**
 *  Extended in order to change style
 */
const Drawer = ({children, theme, ...remaining}) => {
    const styles = useStyles(theme);

    return (
        <MUIDrawer classes={styles} {...remaining}>
            {children}
        </MUIDrawer>
    );
};

export default withTheme(Drawer);
