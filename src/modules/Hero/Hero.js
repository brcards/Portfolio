import * as React from "react";
import HeroBackground from "src/modules/Hero/HeroBackground";
import {StaticImage} from "gatsby-plugin-image";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
    Avatar,
    AvatarImage,
    AvatarDetails,
    AvatarHeading,
    AvatarActions,
    AvatarLink
} from "src/modules/Avatar";

const Hero = () => {
    return (
        <HeroBackground>
            <Avatar>
                <AvatarImage href="https://www.gerryjdiaz.com/">
                    <StaticImage src="../../resources/images/headshot.png" alt="Headshot" placeholder="blurred" />
                </AvatarImage>
                <AvatarDetails>
                    <AvatarHeading name="Bryan Carder" title="Software Engineer" />
                    <AvatarActions>
                        <AvatarLink aria-label="github" href="https://github.com/brcarder">
                            <GitHubIcon fontSize='inherit'/>
                        </AvatarLink>
                        <AvatarLink aria-label="email" >
                            <EmailIcon fontSize='inherit'/>
                        </AvatarLink>
                        <AvatarLink aria-label="linkdin"  href="https://www.linkedin.com/in/bryan-carder-9a012883/">
                            <LinkedInIcon fontSize='inherit'/>
                        </AvatarLink>
                    </AvatarActions>
                </AvatarDetails>
            </Avatar>
        </HeroBackground>
    );
};

export default Hero;
