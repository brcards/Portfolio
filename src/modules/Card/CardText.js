import React from 'react';
import Paragraph from "src/modules/Paragraph";
import styled from "styled-components";
import Heading from "src/modules/Heading";
import MUICardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";

const StyledHeading = styled(Heading)`
    margin-top: 0.1em;
`;

const CardText = ({children, title}) => {
    return (
        <MUICardContent>
            <StyledHeading level={2}>{title}</StyledHeading>
            <Paragraph>
                {children}
            </Paragraph>
        </MUICardContent>
    );
};

CardText.propTypes = {
    /**
     * title for the card, displayed in large text heading
     */
    title: PropTypes.string.isRequired
};

export default CardText;
