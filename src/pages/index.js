import * as React from "react"
import Paragraph from "src/modules/Paragraph";
import Heading from "src/modules/Heading";
import Application, {ApplicationHelmet} from "src/modules/Application";
import Transition from "src/modules/Transition";

const IndexPage = () => {
    return (
        <Application>
            <React.Fragment>
                <ApplicationHelmet title="Bryan Carder About" description="About page for Bryan Carders portfolio site"/>
                <Heading level={1}>About Me</Heading>
                <Transition cascade>
                    <Heading level={2}>Lorem ipsum dolor</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere posuere dolor id tincidunt.
                        Nullam in turpis in ipsum rutrum porta at a purus. Fusce auctor accumsan mattis. Ut vitae ante quis dolor volutpat blandit sed vitae erat.
                        In hac habitasse platea dictumst. Suspendisse metus lacus, lobortis euismod pretium quis, pharetra at ligula.
                        Nullam elementum est a nisi rutrum lacinia. Curabitur mi lorem, elementum in elit eu, efficitur mollis nibh.
                    </Paragraph>

                    <Paragraph>
                        Proin auctor ipsum in sem placerat viverra. Fusce vel porttitor erat. Etiam eget gravida risus. Vestibulum ornare mi enim.
                        Vestibulum volutpat magna at feugiat egestas. Mauris eu quam sem. In egestas dignissim placerat. Integer congue finibus leo vel suscipit.
                    </Paragraph>

                    <Paragraph>
                        Integer lectus metus, malesuada eget libero sit amet, dictum auctor erat. Nullam bibendum, ipsum eu pulvinar malesuada, ligula neque convallis est,
                        eu molestie purus purus nec arcu. Nunc suscipit accumsan tincidunt. Donec ut aliquet mi, vitae commodo enim. Cras magna magna, rutrum ut dignissim et,
                        euismod sit amet lectus. Fusce malesuada ante sed ante elementum feugiat. Donec nunc nibh, tristique tristique elit at, feugiat ullamcorper nibh.
                        Nulla tincidunt vel sapien vel semper.
                    </Paragraph>
                </Transition>
            </React.Fragment>
        </Application>
    )
};

export default IndexPage
