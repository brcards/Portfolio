import React from 'react';
import styled from "styled-components";
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
import Tag from "src/modules/Tag";
import Application, {ApplicationHelmet} from "src/modules/Application";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CardQuickInfo from "src/modules/Card/CardQuickInfo";
import WorksData from "public/projects/projects.json"

const CardContainer = styled.div`
    margin-bottom: 30px;
`;

const StyledCardImage = styled(CardImage)`
    position: relative;
`;


const Works = () => {
    return (
        <Application>
            <ApplicationHelmet title="Bryan Carder Works" description="Works page for Bryan Carders portfolio site"/>
            <Heading level={1}>
                Projects I&apos;ve Worked On
            </Heading>
            {WorksData.map(project => (
                <CardContainer key={project.title}>
                    <Card>
                        <StyledCardImage src={"/projects/images/" + project.image}
                                         alt={project.title} />
                        <CardContent>
                            <CardHeading>
                                {project.title}
                            </CardHeading>
                            <CardSubHeading>
                                {project.year}
                            </CardSubHeading>
                            <CardText>
                                {project.description}
                            </CardText>
                            <CardQuickInfo>
                                {project.primary_tag &&
                                    <Tag>
                                        {project.primary_tag}
                                    </Tag>
                                }
                                {project.link.href &&
                                    <CardLink href={project.link.href} target="_blank">
                                        <OpenInNewIcon />
                                    </CardLink>
                                }
                            </CardQuickInfo>
                            <CardTags>
                                {project.technologies.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                            </CardTags>
                        </CardContent>
                    </Card>
                </CardContainer>
            ))}
        </Application>
    );
};

export default Works;
