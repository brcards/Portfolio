import React from 'react';
import MUICard from "@material-ui/core/Card";
import Transition from "src/modules/Transition";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled(MUICard)`
    background-color: ${props => props.theme.colours.background[1]};
`;

const Card = ({gatsbyImageData, title, children, tags}) => {
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

Card.propTypes = {
    /**
     * Href for when image is clicked
     */
    href: PropTypes.string,
    /**
     * Used in the main header
     */
    name: PropTypes.string,
    /**
     * Used in the sub header
     */
    title: PropTypes.string,
};

export default Card;
