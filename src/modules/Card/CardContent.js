import React from 'react';
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';

const Content = styled(Grid)`
    padding: 16px;
`;

const CardContent = ({children, ...remaining}) => {
    return (
        <Content item xs={12} sm={8} md={8} {...remaining}>
            {children}
        </Content>
    );
};

export default CardContent;