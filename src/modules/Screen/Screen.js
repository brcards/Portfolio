import {useEffect, useState} from "react";

const useOnScreen = (ref) => {
    const [isVisible, setVisible] = useState(false);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
                if(entry.isIntersecting){
                    setShown(true);
                }
            }
        );

        observer.observe(ref.current);
        return () => { observer.disconnect() }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return [isVisible, shown];
};

/**
 * Get the total vertical offset of an html element, includes scroll offset of all parents
 *
 * @param element       Html element to get offset for
 * @returns {number}    Total vertical offset of the element in pixels
 */
const getTotalVerticalOffset = (element) =>{
    if(element.offsetParent === null){
        return element.offsetTop;
    } else {
        return element.offsetTop + getTotalVerticalOffset(element.offsetParent);
    }
};


export {useOnScreen, getTotalVerticalOffset};
