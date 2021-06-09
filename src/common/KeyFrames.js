import {keyframes} from "styled-components";

// slides from bottom to top
// quickly at first then slows
const SlideUp = keyframes`
    0% {
        top: 100px;
        opacity: 0;
    }
    5% {
        top: 70px;
        opacity: 0.2;
    }
    100% {
        top: 0px;
        opacity: 1;
    }
`;

// simple linear fade in
const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export {
    SlideUp,
    FadeIn
}
