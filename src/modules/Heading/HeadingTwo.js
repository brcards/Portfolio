import styled from "styled-components";

const HeadingTwo = styled.h2`
    font-size: 2.0rem;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 1.6rem;
    };
    color: ${props => props.theme.colours.text[0]};
`;

export default HeadingTwo;