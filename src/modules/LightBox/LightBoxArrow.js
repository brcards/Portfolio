import React from 'react';
import styled from "styled-components";
import LightBoxButton from "src/modules/LightBox/LightBoxButton";

const PreviousChevronButton = styled(LightBoxButton)`
    left: 0;
    top: 50%;
`;

const NextChevronButton = styled(LightBoxButton)`
    right: 0;
    top: 50%;
`;

const Previous = ({children, ...props}) => {
    return <PreviousChevronButton {...props}>
        {children}
    </PreviousChevronButton>
};

const Next = ({children, ...props}) => {
    return <NextChevronButton {...props}>
        {children}
    </NextChevronButton>
};

const LightBoxArrow = ({children, type="next", ...remaining}) => {
    return (
        <React.Fragment>
            {type === "next" ?
                <Next aria-label="next" {...remaining}>{children}</Next> :
                <Previous aria-label="previous" {...remaining}>{children}</Previous>}
        </React.Fragment>
    );
};


export default LightBoxArrow;
