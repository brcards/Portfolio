import React from 'react';
import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";
import Transition from "src/modules/Transition/Transition";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ImageBackground = styled(Paper)`
    background-color: ${props => props.theme.colours.background[1]};
`;

const StyledImage = styled(GatsbyImage)`
    position: relative;
    display: block;
    cursor: pointer;
    transition: transform .5s;
    min-height: 200px;
    &:hover {
        transform: scale(1.05); 
    }
`;

const GalleryImage = ({...remaining}) => {
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Transition cascade>
                <ImageBackground>
                    <StyledImage imgStyle={{display: "block"}} {...remaining}/>
                </ImageBackground>
            </Transition>
        </Grid>
    );
};

export default GalleryImage;
