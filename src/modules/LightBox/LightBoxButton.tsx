import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import React, {ReactNode} from "react";

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

interface LightBoxButtonProps {
    children: ReactNode;
    [remaining:string]: any;
}

const LightBoxButton: React.FC<LightBoxButtonProps> = ({children, ...remaining}) => {
    return (
        <StyleIconButton {...remaining}>
            {children}
        </StyleIconButton>
    );
};

export default LightBoxButton;
