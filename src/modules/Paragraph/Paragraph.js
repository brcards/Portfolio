import React from 'react';
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2rem;
    color: ${props => props.theme.colours.text[0]}
`;

const Paragraph = ({children, ...remaining}) => {
    return (
        <StyledParagraph {...remaining}>
            {children}
        </StyledParagraph>
    );
};

export default Paragraph;
