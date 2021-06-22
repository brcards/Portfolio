import React from 'react';
import Grid from "@material-ui/core/Grid";
import MUICardContent from "@material-ui/core/CardContent";

const CardContent = ({children, ...remaining}) => {
    return (
        <Grid item xs={12} sm={8} md={8} {...remaining}>
            <MUICardContent>
                {children}
            </MUICardContent>
        </Grid>
    );
};

export default CardContent;