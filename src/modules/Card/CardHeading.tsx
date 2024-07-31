import React, {ReactNode} from 'react';
import styled from "styled-components";
import Heading from "src/modules/Heading";

const StyledHeading = styled(Heading)`
    margin-top: 0.1em;
    margin-bottom: 0em;
`;

interface CardHeadingProps {
    children: ReactNode;
    [remaining:string]: any;
}

const CardHeading: React.FC<CardHeadingProps> = ({children, ...remaining}) => {
    return (
        <StyledHeading level={2} {...remaining}>
            {children}
        </StyledHeading>
    );
};

export default CardHeading;