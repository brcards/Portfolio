import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Name = styled.div`
    display: block;
    text-transform: uppercase;
    font-size: 3em;
    letter-spacing: 0.15em;
    font-family: 'Oswald', sans-serif;
`;

const Title = styled.div`
    display: block;
    font-size: 1.8em;
    font-family: 'Oswald', sans-serif;
    color: ${props => props.theme.colours.secondary};
`;

const AvatarHeading = ({name, title}) => {
    return (
        <React.Fragment>
            <Name>
                {name}
            </Name>
            <Title>
                {title}
            </Title>
        </React.Fragment>
    );
};

AvatarHeading.propTypes = {
    /**
     * Used in the main heading
     */
    name: PropTypes.string,
    /**
     * Used in the sub heading
     */
    title: PropTypes.string,
};

export default AvatarHeading;
