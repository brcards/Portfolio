import React, {ReactNode, useEffect, useRef, useState, RefObject} from 'react';
import styled, {css} from "styled-components";
import {useOnScreen, getTotalVerticalOffset} from "src/modules/Screen";
import {SlideUp} from "src/common/KeyFrames";

interface ContainerProps {
    animate: boolean;
    delay: number;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    top: 100px;
    opacity: 0;
    
    ${({ animate, delay }) => animate && css`
        animation-name: ${SlideUp};
        animation-duration: 0.6s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-delay: ${delay || 0}s;
    `}
`;

/**
 * Determine the delay for a cascade effect, elements with lower screen position will
 * have a higher delay. If element is not visible on initial load delay will be 0
 *
 * @param ref           React ref object to calculate delay for
 * @param window        Browser window object
 * @returns {number}    Delay between 0 and 1
 */
const getCascadeDelay = (ref: RefObject<HTMLInputElement>, window: Window) =>{
    if(ref.current !== null){
        if(getTotalVerticalOffset(ref.current) > window.innerHeight){
            return 0;
        }
        return ref.current.getBoundingClientRect().top / window.innerHeight;
    }
    return 0;
};

interface TransitionProps {
    cascade?: boolean;
    children: ReactNode;
}

const Transition: React.FC<TransitionProps> = ({children, cascade = true}) => {
    const ref = useRef(null);
    const [isVisible, shown] = useOnScreen(ref);
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        setDelay(cascade ? getCascadeDelay(ref, window) : 0);
    }, [cascade]);

    return (
        <div ref={ref} >
            <Container animate={isVisible || shown} delay={delay}>
                {children}
            </Container>
        </div>
    );
};

export default Transition;
