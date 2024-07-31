import React, {ReactNode} from 'react';
import Link from 'next/link';
import { UnstyledLink } from "src/common/Stylings";
import NavigationBarButton from "src/modules/NavigationBar/NavigationBarButton";
import styled from "styled-components";

// Create a styled component for the Link
const StyledLink = styled(Link)`
    ${UnstyledLink}
`;

interface LinkProps {
    link: string;
    children: ReactNode;
    [remaining:string]: any;
}

const NavigationBarLink: React.FC<LinkProps> = ({ link, children, ...remaining }) => {
    return (
        <StyledLink href={link} {...remaining}>
            <NavigationBarButton>
                {children}
            </NavigationBarButton>
        </StyledLink>
    );
};

export default NavigationBarLink;
