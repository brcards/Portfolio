import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";

interface GalleryProps {
    children: ReactNode;
    [remaining:string]: any;
}

const Gallery: React.FC<GalleryProps> = ({children, ...remaining}) => {
    return (
        <Grid container spacing={2} {...remaining}>
            {children}
        </Grid>
    );
};

export default Gallery;
