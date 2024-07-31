import React, {ReactNode} from 'react';
import MUICard from "@mui/material/Card";
import Transition from "src/modules/Transition";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const StyledCard = styled(MUICard)`
    background-color: ${props => props.theme.colours.background[1]};
`;

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return (
        <Transition cascade>
            <StyledCard>
                <Grid container spacing={0}>
                    {children}
                </Grid>
            </StyledCard>
        </Transition>
    );
};

export default Card;
