import React from 'react';
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const StyledGrid = styled(Grid)`
    height: 100vh;
    border-left: 2px solid ${props => props.theme.colours.primary};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        border-left: 0px;
        border-top: 2px solid ${props => props.theme.colours.primary};
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        overflow-y: scroll;
    }
`;

const ApplicationContentColumn = ({children, ...remaining}) => {
    return (
        <StyledGrid item xs={12} sm={12} md={12} lg={7} xl={7} {...remaining}>
            {children}
        </StyledGrid>
    );
};

export default ApplicationContentColumn;