import React from 'react';
import PropTypes from "prop-types";
import HeadingOne from "src/modules/Heading/HeadingOne";
import HeadingTwo from "src/modules/Heading/HeadingTwo";

const HeadingFactory = (level) => {
    switch (level) {
        case 1:
            return HeadingOne;
        case 2:
            return HeadingTwo;
        default:
            throw new RangeError("Supported headings include [1, 2]");
    }
};

const Heading = ({level, children, ...remaining}) => {
    const HeadingComponent = HeadingFactory(level);
    return (
        <HeadingComponent {...remaining}>
            {children}
        </HeadingComponent>
    );
};

Heading.propTypes = {
    /**
     * determines which heading to use,
     * largest starts at 1 and it decreases in size from there
     */
    level: PropTypes.number
};

export default Heading;
