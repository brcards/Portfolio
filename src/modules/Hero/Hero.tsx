import * as React from "react";
import HeroBackground from "src/modules/Hero/HeroBackground";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
    Avatar,
    AvatarImage,
    AvatarDetails,
    AvatarHeading,
    AvatarActions,
    AvatarLink
} from "src/modules/Avatar";
import Image from "src/modules/Image";
import HeadShot from "src/resources/images/headshot.png";
import styled from "styled-components";

const StyledHeadShot = styled(Image)`
    width: 100%;
    height: 100%;
`;

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
    return (
        <HeroBackground>
            <Avatar>
                <AvatarImage href="https://www.gerryjdiaz.com/portraits">
                    <StyledHeadShot src={HeadShot} alt="Headshot" placeholder="blur" />
                </AvatarImage>
                <AvatarDetails>
                    <AvatarHeading name="John Doe" title="Profession" />
                    <AvatarActions>
                        <AvatarLink aria-label="github" href="">
                            <GitHubIcon fontSize='inherit'/>
                        </AvatarLink>
                        <AvatarLink aria-label="email" href="">
                            <EmailIcon fontSize='inherit'/>
                        </AvatarLink>
                        <AvatarLink aria-label="linkdin"  href="">
                            <LinkedInIcon fontSize='inherit'/>
                        </AvatarLink>
                    </AvatarActions>
                </AvatarDetails>
            </Avatar>
        </HeroBackground>
    );
};

export default Hero;
