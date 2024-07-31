import React, {ReactNode} from 'react';
import HeadingOne from "src/modules/Heading/HeadingOne";
import HeadingTwo from "src/modules/Heading/HeadingTwo";

interface HeadingTypes {
    level: number;
    children: ReactNode;
    [remaining:string]: any;
}

const HeadingFactory = (level: number) => {
    switch (level) {
        case 1:
            return HeadingOne;
        case 2:
            return HeadingTwo;
        default:
            throw new RangeError("Supported headings include [1, 2]");
    }
};

const Heading: React.FC<HeadingTypes> = ({level, children, ...remaining}) => {
    const HeadingComponent = HeadingFactory(level);
    return (
        <HeadingComponent {...remaining}>
            {children}
        </HeadingComponent>
    );
};

export default Heading;
