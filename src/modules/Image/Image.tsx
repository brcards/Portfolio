import React from 'react';
import Image from 'next/image'

interface ImageProps {
    src: string;
    alt: string;
    [remaining:string]: any;
}

/**
 * Image component for when the actual image source is used.
 * Generally better to use GatsbyImage if possible but this is easier
 * for showing the original source image.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const MyImage: React.FC<ImageProps> = ({src, alt, ...remaining}) => {
    return (
        <Image src={src} alt={alt} {...remaining} />
    );
};

export default MyImage;
