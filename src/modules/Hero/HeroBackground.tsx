import styled from "styled-components";
import LightBackgroundImage from "src/resources/images/light_theme_hero.jpg";
import DarkBackgroundImage from "src/resources/images/dark_theme_hero.jpg";

const HeroBackground = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.theme.name === "light" ? LightBackgroundImage.src : DarkBackgroundImage.src});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset -30px 0px 15px -15px rgba(0, 0, 0, 0.3);
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        box-shadow: inset 0px -30px 15px -15px rgba(0, 0, 0, 0.3);
    }
`;

export default HeroBackground;
