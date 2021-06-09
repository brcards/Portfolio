import styled from "styled-components";

const NavigationBarLinks = styled.ul`
    flex-grow: 6;
    padding-left: 50px;
    & > * {
        margin-right: 2.0em;
    }
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        padding-left: 10px;
        & > * {
            margin-right: 1.0em;
        }
    }
`;

export default NavigationBarLinks;
