import styled from "styled-components";
import {HoverUnderline} from "src/common/Animations";

const NavigationBarButton = styled.li`
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    ${HoverUnderline}
`;

export default NavigationBarButton;