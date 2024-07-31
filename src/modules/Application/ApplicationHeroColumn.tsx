import React, {ReactNode} from 'react';
import styled from "styled-components";
import Grid from "@mui/material/Grid";

const StyledGrid = styled(Grid)`
    max-height: 100vh;
`;

interface HeroProps {
    children: ReactNode;
    [remaining:string]: any;
}

const ApplicationHeroColumn: React.FC<HeroProps> = ({children, ...remaining}) => {
    return (
        <StyledGrid item xs={12} sm={12} md={12} lg={5} xl={5} {...remaining}>
            {children}
        </StyledGrid>
    );
};

export default ApplicationHeroColumn;