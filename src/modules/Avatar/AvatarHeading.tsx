import React from 'react';
import styled from "styled-components";

const Name = styled.div`
    display: block;
    text-transform: uppercase;
    font-size: 3em;
    letter-spacing: 0.15em;
    font-family: 'Oswald', sans-serif;
`;

const Title = styled.div`
    display: block;
    font-size: 1.8em;
    font-family: 'Oswald', sans-serif;
    color: ${props => props.theme.colours.secondary};
`;

interface AvatarHeadingProps {
    name: string;
    title: string;
}

const AvatarHeading: React.FC<AvatarHeadingProps> = ({name, title}) => {
    return (
        <React.Fragment>
            <Name>
                {name}
            </Name>
            <Title>
                {title}
            </Title>
        </React.Fragment>
    );
};

export default AvatarHeading;
