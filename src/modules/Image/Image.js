import React from 'react';
import PropTypes from 'prop-types';

/**
 * Image component for when the actual image source is used.
 * Generally better to use GatsbyImage if possible but this is easier
 * for showing the original source image.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Image = ({src, alt, ...remaining}) => {
    return (
        <img src={src} alt={alt} {...remaining} />
    );
};

Image.propTypes = {
    /**
     * image src
     */
    src: PropTypes.string.isRequired,
    /**
     * image alt, required to enforce goo practice on my part
     */
    alt: PropTypes.string.isRequired
};

export default Image;
