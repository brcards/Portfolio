import React from 'react';
import styled from 'styled-components';
import {Link} from "gatsby";
import {UnstyledLink} from "src/common/Stylings";
import NavigationBarButton from "src/modules/NavigationBar/NavigationBarButton";

const StyledGatsbyLink = styled(Link)`
    ${UnstyledLink}
`;

const NavigationBarLink = ({link, children, ...remaining}) => {
    return (
        <StyledGatsbyLink to={link} {...remaining}>
            <NavigationBarButton>
                {children}
            </NavigationBarButton>
        </StyledGatsbyLink>
    );
};

export default NavigationBarLink;
