import styled from "styled-components";

const HeadingOne = styled.h1`
    font-family: 'Oswald', sans-serif;
    letter-spacing: 2px;
    font-size: 3.0rem;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 2.0rem;
    };
    color: ${props => props.theme.colours.text[0]}
`;

export default HeadingOne;