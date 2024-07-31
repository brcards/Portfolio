import React, {ReactNode} from 'react';
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

interface LightBoxProps {
    type: string;
    children?: ReactNode;
    [remaining:string]: any;
}

interface ArrowProps {
    children?: ReactNode;
    [remaining:string]: any;
}

const Previous: React.FC<ArrowProps> = ({children, ...props}) => {
    return <PreviousChevronButton {...props}>
        {children}
    </PreviousChevronButton>
};

const Next: React.FC<ArrowProps> = ({children, ...props}) => {
    return <NextChevronButton {...props}>
        {children}
    </NextChevronButton>
};

const LightBoxArrow: React.FC<LightBoxProps> = ({children, type="next", ...remaining}) => {
    return (
        <React.Fragment>
            {type === "next" ?
                <Next aria-label="next" {...remaining}>{children}</Next> :
                <Previous aria-label="previous" {...remaining}>{children}</Previous>}
        </React.Fragment>
    );
};


export default LightBoxArrow;
