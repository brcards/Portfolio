import React from 'react';
import styled from "styled-components";
import {graphql} from "gatsby";
import Heading from "src/modules/Heading";
import {
    Card,
    CardContent,
    CardImage,
    CardTags,
    CardText,
    CardLink,
    CardHeading,
    CardSubHeading
} from "src/modules/Card";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Tag from "src/modules/Tag";
import {ApplicationHelmet} from "src/modules/Application";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CardQuickInfo from "src/modules/Card/CardQuickInfo";

const CardContainer = styled.div`
    margin-bottom: 30px;
`;

const Works = ({data}) => {
    return (
        <div>
            <ApplicationHelmet title="Bryan Carder Works" description="Works page for Bryan Carders portfolio site" />
            <Heading level={1}>
                Projects I've Worked On
            </Heading>
            {data.allProjectsJson.edges.map(project => (
                <CardContainer key={project.node.title}>
                    <Card>
                        <CardImage>
                            <GatsbyImage image={getImage(project.node.image.childImageSharp.gatsbyImageData)}
                                         alt={project.node.title}
                            />
                        </CardImage>
                        <CardContent>
                            <CardHeading>
                                {project.node.title}
                            </CardHeading>
                            <CardSubHeading>
                                {project.node.year}
                            </CardSubHeading>
                            <CardText>
                                {project.node.description}
                            </CardText>
                            <CardQuickInfo>
                                {project.node.primary_tag &&
                                    <Tag>
                                        {project.node.primary_tag}
                                    </Tag>
                                }
                                {project.node.link.href &&
                                    <CardLink href={project.node.link.href} target="_blank">
                                        <OpenInNewIcon />
                                    </CardLink>
                                }
                            </CardQuickInfo>
                            <CardTags>
                                {project.node.technologies.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                            </CardTags>
                        </CardContent>
                    </Card>
                </CardContainer>
            ))}
        </div>
    );
};

export const query = graphql`
    query {
        allProjectsJson {
            edges {
                node {
                    description
                    title
                    year
                    link {
                        href
                    }
                    primary_tag
                    technologies
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                width: 800, 
                                quality: 75, 
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default Works;
