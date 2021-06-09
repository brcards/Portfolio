import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    border: none;
    cursor: default;
    height: 2em;
    display: inline-flex;
    outline: 0;
    padding: 0;
    font-size: 0.8125rem;
    box-sizing: border-box;
    align-items: center;
    white-space: nowrap;
    border-radius: 1em;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: ${props => props.theme.colours.background[0]};
    color: ${props => props.theme.colours.text[0]};
    border: 1px solid ${props => props.theme.colours.primary};
`;

const StyledTag = styled.span`
    overflow: hidden;
    white-space: nowrap;
    padding-left: 1em;
    padding-right: 1em;
    text-overflow: ellipsis;
`;

const Tag = ({children, ...remaining}) => {
    return (
        <StyledContainer {...remaining}>
            <StyledTag>
                {children}
            </StyledTag>
        </StyledContainer>
    );
};

export default Tag;
