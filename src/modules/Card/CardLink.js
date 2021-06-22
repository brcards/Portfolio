import styled from 'styled-components';
import {HoverUnderline} from "src/common/Animations";

const CardLink = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    ${HoverUnderline}
    text-decoration: none;
    font-size: 1.3em;
    margin: 0.5em;
`;

export default CardLink;