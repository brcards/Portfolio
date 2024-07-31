import React, {ReactNode} from 'react';
import Drawer from '@mui/material/Drawer';
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        background-color: ${props => props.theme.colours.background[1]};
    }
`;

interface DrawerProps {
    children: ReactNode;
    [remaining:string]: any;
}

const CustomDrawer: React.FC<DrawerProps> = ({ children, ...remaining }) => {
    return (
        <StyledDrawer {...remaining}>
            {children}
        </StyledDrawer>
    );
};

export default CustomDrawer;