import React from 'react';
import styled from "styled-components";
import {graphql} from "gatsby";
import Heading from "src/modules/Heading";
import {Card, CardContent, CardImage, CardTags, CardText} from "src/modules/Card";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Tag from "src/modules/Tag";
import {ApplicationHelmet} from "src/modules/Application";

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
                            <CardText title={project.node.title}>
                                {project.node.description}
                            </CardText>
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
                        title
                        href
                    }
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
