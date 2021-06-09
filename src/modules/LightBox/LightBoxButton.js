import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import React from "react";

const StyleIconButton = styled(IconButton)`
    position: absolute;
    font-size: 6rem;
    color: white;
    transform: translate(0, -50%);
    &:hover {
        opacity: 0.8;
    }
    &:focus {
        opacity: 0.8;           
    }
    &:disabled {
        color: white;
        opacity: 0.3;
    }
`;

const LightBoxButton = ({children, ...remaining}) => {
    return (
        <StyleIconButton {...remaining}>
            {children}
        </StyleIconButton>
    );
};

export default LightBoxButton;
