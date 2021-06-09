import React from 'react';
import Grid from "@material-ui/core/Grid";

const Gallery = ({children, ...remaining}) => {
    return (
        <Grid container spacing={2} {...remaining}>
            {children}
        </Grid>
    );
};

export default Gallery;
