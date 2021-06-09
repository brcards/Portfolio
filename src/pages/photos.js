import React from 'react';
import {graphql} from "gatsby";
import Heading from "src/modules/Heading";
import {LightBox, LightBoxImage, UseLightBox} from "src/modules/LightBox";
import {Gallery, GalleryImage} from "src/modules/Gallery";
import {ApplicationHelmet} from "src/modules/Application";

const Photos = ({data}) => {
    const [
        lightBoxOpen,
        setLightBoxOpen,
        lightBoxIndex,
        setLightBoxIndex,
        handleLightBoxOpen
    ] = UseLightBox(false, 0);

    return (
        <div>
            <ApplicationHelmet title="Bryan Carder Photos" description="Photo gallery page for Bryan Carders portfolio site" />
            <Heading level={1}>Photos I've Taken</Heading>
            <Gallery>
                {data.allFile.edges.map((image, index) => (
                    <GalleryImage key={image.node.base.split(".")[0]}
                                 image={image.node.childImageSharp.gatsbyImageData}
                                 alt={image.node.base.split(".")[0]}
                                 onClick={() => handleLightBoxOpen(index)}
                    />
                ))}
            </Gallery>

            <LightBox open={lightBoxOpen}
                      onClose={() => setLightBoxOpen(false)}
                      index={lightBoxIndex}
                      setIndex={setLightBoxIndex}
                      count={data.allFile.edges.length}>
                    <LightBoxImage src={data.allFile.edges[lightBoxIndex].node.childImageSharp.original.src}
                                   alt={data.allFile.edges[lightBoxIndex].node.base.split(".")[0]}/>
            </LightBox>
        </div>
    );
};

export const query = graphql`
    query {
        allFile(
            filter: {
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                relativeDirectory: { eq: "photos/images" }
            }
        ) {
            edges {
                node {
                    base
                    childImageSharp {
                        gatsbyImageData(
                            aspectRatio : 1.333
                            width: 1600
                            quality: 75
                            placeholder: BLURRED,
                            transformOptions: {fit: COVER, cropFocus: CENTER}
                        ),
                        original {
                          src
                        }
                    }
                }
            }
        }
    }
`;

export default Photos;
