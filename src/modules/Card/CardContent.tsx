import React, {ReactNode} from 'react';
import Grid from "@mui/material/Grid";
import styled from 'styled-components';

const Content = styled(Grid)`
    padding: 16px;
`;

interface CardContentProps {
    children: ReactNode;
    [remaining:string]: any;
}

const CardContent: React.FC<CardContentProps> = ({children, ...remaining}) => {
    return (
        <Content item xs={12} sm={8} md={8} {...remaining}>
            {children}
        </Content>
    );
};

export default CardContent;