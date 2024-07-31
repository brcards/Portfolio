import styled from "styled-components";

const AvatarActions = styled.div`
    margin-top: 0.5em;
    * {
        margin-right: 0.2em;
    }
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 1.5em;
         * {
            margin-right: 0.3em;
        }
    }
`;

export default AvatarActions;
