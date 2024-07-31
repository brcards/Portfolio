import React, {ReactNode} from 'react';
import styled from "styled-components";
import Transition from "src/modules/Transition/Transition";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "src/modules/Image";

const ImageContainer = styled(Paper)`
    width: 100%;
    height: 12em;
    overflow: hidden;
    background-color: ${props => props.theme.colours.background[1]};
`;

const StyledImage = styled(Image)`
    position: relative;
    display: block !important;
    cursor: pointer;
    transition: transform .5s;
    min-height: 100%;
    height: auto;
    min-width: 100%;
    width: 100%;
    &:hover {
        transform: scale(1.1); 
    }
`;

const StyledGrid = styled(Grid)`
    padding: 0.5em;
    width: 100%;
`;

interface GalleryImageProps {
    children: ReactNode;
    [remaining:string]: any;
}

const GalleryImage: React.FC<GalleryImageProps> = ({...remaining}) => {
    return (
        <StyledGrid item xs={12} sm={12} md={4}>
            <Transition cascade>
                <ImageContainer>
                    <StyledImage {...remaining}/>
                </ImageContainer>
            </Transition>
        </StyledGrid>
    );
};

export default GalleryImage;
