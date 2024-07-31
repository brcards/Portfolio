import React, {ReactNode} from 'react';
import Paragraph from "src/modules/Paragraph";
import styled from "styled-components";

const Text = styled(Paragraph)`
    margin-bottom: 2.0em;
`;

interface CardTextProps {
    children: ReactNode;
    [remaining:string]: any;
}

const CardText: React.FC<CardTextProps> = ({children, ...remaining}) => {
    return (
        <Text {...remaining}>
            {children}
        </Text>
    );
};

export default CardText;
