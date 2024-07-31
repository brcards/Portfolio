import React from 'react';
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Image from "src/modules/Image";

const ImageContainer = styled(Image)`
    margin: 0;
    vertical-align: top;
    object-fit: cover;
    height: 100%;
    width 100%;
`;

interface CardImageProps {
    src: string;
    alt: string;
    [remaining:string]: any;
}

const CardImage: React.FC<CardImageProps> = ({src, alt, ...remaining}) => {
    return (
        <Grid item xs={12} sm={4} md={4} {...remaining}>
            <ImageContainer src={src}
                   alt={alt}
                   fill
            />
        </Grid>
    );
};

export default CardImage;
