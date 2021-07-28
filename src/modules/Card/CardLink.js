import styled from 'styled-components';
import {HoverUnderline} from "src/common/Animations";

const CardLink = styled.a`
    ${HoverUnderline}
    text-decoration: none;
    padding-top: 0.3em;
    padding-right: 0.3em;
`;

export default CardLink;