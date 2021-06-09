import * as React from "react"
import Paragraph from "src/modules/Paragraph";
import Heading from "src/modules/Heading";
import {ApplicationHelmet} from "src/modules/Application";

const IndexPage = () => {
    return (
        <React.Fragment>
            <ApplicationHelmet title="Bryan Carder About" description="About page for Bryan Carders portfolio site" />
            <Heading level={1}>About Me</Heading>
            <Heading level={2}>Hello!</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Paragraph>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </Paragraph>
        </React.Fragment>
    )
};

export default IndexPage
