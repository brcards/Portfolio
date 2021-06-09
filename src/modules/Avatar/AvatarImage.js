import React from 'react';
import styled from "styled-components";
import Overlay from "src/modules/Overlay/Overlay";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PropTypes from "prop-types";

const AvatarContainer = styled.div`
    background-color: #000000;
    display: inline-block;
    position: relative;
    width: 8em;
    height: 8em;
    border-radius: 50%;
    border-color: ${props => props.theme.colours.primary};
    border-width: 2px;
    border-style: solid;
    overflow: hidden;
`;


/**
 * Image in rounded border, Currently using static image
 * but could configured to dynamic if needed
 */
const AvatarImage = ({children, href, ...remaining}) => {
    return (
        <AvatarContainer {...remaining}>
            <a href={href} target="_blank" rel="noreferrer">
                <Overlay content={<PhotoCameraIcon fontSize="large"/>}>
                    {children}
                </Overlay>
            </a>
        </AvatarContainer>
    );
};

AvatarImage.propTypes = {
    /**
     * Href for when image is clicked
     */
    href: PropTypes.string
};

export default AvatarImage;
