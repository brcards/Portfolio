import React from 'react';
import Paragraph from "src/modules/Paragraph";

const CardText = ({children, ...remaining}) => {
    return (
        <Paragraph {...remaining}>
            {children}
        </Paragraph>
    );
};

export default CardText;
