import React, {ReactNode} from 'react';
import styled from "styled-components";
import Grid from "@mui/material/Grid";

const StyledGrid = styled(Grid)`
    height: 100vh;
    border-left: 2px solid ${props => props.theme.colours.primary};
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        border-left: 0px;
        border-top: 2px solid ${props => props.theme.colours.primary};
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        overflow-y: scroll;
    }
`;

interface ApplicationContentColumnProps {
    children: ReactNode;
    [remaining:string]: any;
}

const ApplicationContentColumn: React.FC<ApplicationContentColumnProps> = ({children, ...remaining}) => {
    return (
        <StyledGrid item xs={12} sm={12} md={12} lg={7} xl={7} {...remaining}>
            {children}
        </StyledGrid>
    );
};

export default ApplicationContentColumn;