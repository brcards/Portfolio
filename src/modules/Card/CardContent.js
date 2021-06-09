import React from 'react';
import Grid from "@material-ui/core/Grid";

const CardContent = ({children, ...remaining}) => {
    return (
        <Grid item xs={12} sm={8} md={8} {...remaining}>
            {children}
        </Grid>
    );
};

export default CardContent;