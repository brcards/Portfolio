import React from 'react';
import Paragraph from "src/modules/Paragraph";
import styled from "styled-components";

const Text = styled(Paragraph)`
    margin-bottom: 2.0em;
`;

const CardText = ({children, ...remaining}) => {
    return (
        <Text {...remaining}>
            {children}
        </Text>
    );
};

export default CardText;
