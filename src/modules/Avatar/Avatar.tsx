import React, {ReactNode} from 'react';
import styled from "styled-components";

// to change overall size of Detailed avatar set font size here (media query when using mobile)
const AvatarContainer = styled.div`
    display: block;
    padding: 0.8em;
    font-size: 14px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 9px;
    };
`;

interface AvatarProps {
    children: ReactNode;
    [remaining:string]: any;
}

/**
 * Avatar top level component.
 */
const Avatar: React.FC<AvatarProps> = ({children, ...remaining}) => {
    return (
        <AvatarContainer {...remaining}>
            {children}
        </AvatarContainer>
    );
};

export default Avatar;
