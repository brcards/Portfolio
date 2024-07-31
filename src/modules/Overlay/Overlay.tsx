import React, {ReactNode} from 'react';
import styled from "styled-components";

const Container = styled.div``;

const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0);
    
    ${Container}:hover & {
        opacity: 0.5;
    }
    ${Container}:focus & {
        opacity: 0.5;
    }
`;

const OverlayText = styled.div`
    color: white;
    font-size: 1.2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

interface OverlayProps {
    content: ReactNode;
    children: ReactNode;
}

/**
 * Basic hover overlay for elements, parent should be position relative
 *
 * @param text
 * @param children
 * @returns {*}
 * @constructor
 */
const Overlay: React.FC<OverlayProps> = ({content, children}) => {
    return (
        <Container>
            {children}
            <OverlayContainer>
                <OverlayText>
                    {content}
                </OverlayText>
            </OverlayContainer>
        </Container>
    );
};

export default Overlay;
