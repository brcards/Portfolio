import React from 'react';
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const StyledGrid = styled(Grid)`
    max-height: 100vh;
`;

const ApplicationHeroColumn = ({children, ...remaining}) => {
    return (
        <StyledGrid item xs={12} sm={12} md={12} lg={5} xl={5} {...remaining}>
            {children}
        </StyledGrid>
    );
};

export default ApplicationHeroColumn;