import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {useOnScreen, getTotalVerticalOffset} from "src/modules/Screen";
import PropTypes from "prop-types";
import {SlideUp} from "src/common/KeyFrames";

const Container = styled.div`
    position: relative;
    top: 100px;
    opacity: 0;
    
    ${({ animate }) => animate && css`
        animation-name: ${SlideUp};
        animation-duration: 0.6s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-delay: ${props => props.delay || 0}s;
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
const getCascadeDelay = (ref, window) =>{
    if(ref.current !== null){
        if(getTotalVerticalOffset(ref.current) > window.innerHeight){
            return 0;
        }
        return ref.current.getBoundingClientRect().top / window.innerHeight;
    }
    return 0;
};


const Transition = ({children, cascade}) => {
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

Transition.defaultProps = {
    cascade: true
};

Transition.propTypes = {
    /**
     * Child components to animate
     */
    children: PropTypes.node,
    /**
     * Used with multiple transition objects, if true adds a cascade effect on initial load
     */
    cascade: PropTypes.bool
};

export default Transition;
