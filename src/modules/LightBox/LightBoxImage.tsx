import React, {useEffect, useState} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import styled, {css} from "styled-components";
import {FadeIn} from "src/common/KeyFrames";
import Image from "src/modules/Image"

const CenteringDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledImageContainer = styled.div`
    position: relative;
    color: ${props => props.theme.colours.primary};
`;

const StyledLoader = styled(CircularProgress)`
    position: absolute;
    left: 50%;
    top: 50%;
`;

interface StyledImageProps {
    loaded: boolean;
}

const StyledImage = styled(Image)<StyledImageProps>`
    max-height: 90vh;
    width: auto;
    opacity: 0;
    
    ${({ loaded }) => loaded && css`
        animation-name: ${FadeIn};
        animation-duration: 0.3s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    `}
`;

interface LightBoxImageProps {
    src: string;
    [remaining:string]: any;
}

/**
 * Image component for when the actually image source is used,
 * the dynamic nature of gatsby images crops the images when processed.
 *
 * @param props     props to be passed to img component
 * @returns {*}
 * @constructor
 */
const LightBoxImage: React.FC<LightBoxImageProps> = ({src, ...remaining}) => {
    const [loaded, setLoaded] = useState(false);

    // if src changes reset load indicator
    useEffect(() => {
        setLoaded(false);
    },[src]);

    return (
        <CenteringDiv>
            <StyledImageContainer>
                {loaded ? '' : <StyledLoader color='inherit'/>}
                <StyledImage src={src}
                             loaded={loaded}
                             onLoad={() => setLoaded(true)}
                             {...remaining}/>
            </StyledImageContainer>
        </CenteringDiv>
    );
};

export default LightBoxImage;
