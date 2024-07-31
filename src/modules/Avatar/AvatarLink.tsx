import React, {ReactNode} from 'react';
import styled from "styled-components";
import {UnstyledLink} from "src/common/Stylings";

const StyledLink = styled.a`
    ${UnstyledLink}
    font-size: 1.5em;
    &:focus {
        color: ${props => props.theme.colours.text[1]}
    }
    &:hover {
        color: ${props => props.theme.colours.text[1]}
    }
`;

interface AvatarLinkProps {
    children: ReactNode;
    [remaining:string]: any;
}

const AvatarLink: React.FC<AvatarLinkProps> = ({children, ...remaining}) => {
    return (
        <StyledLink {...remaining}>
            {children}
        </StyledLink>
    );
};

export default AvatarLink;
