import React from 'react';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

// need to apply these styles to the gatsby image wrapper,
// which can't be done with styled components
const ImageStyles = {
    margin: "0",
    verticalAlign: "top",
    objectFit: "cover",
    height: "100%",
    minWidth: "100%"
};

const CardImage = ({children, ...remaining}) => {
    return (
        <Grid item xs={12} sm={4} md={4} {...remaining}>
            {React.cloneElement(children, {style: ImageStyles})}
        </Grid>
    );
};

CardImage.propTypes = {
    /**
     * Image node to render, adds specific styles to the image so it works with the card
     */
    children: PropTypes.node.isRequired
};

export default CardImage;
