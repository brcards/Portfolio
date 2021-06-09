import React, {useContext} from 'react';
import Modal from "@material-ui/core/Modal";
import {LightBoxArrow} from "src/modules/LightBox/index";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from 'prop-types';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeContext } from 'styled-components';

const LightBox = ({children, open, onClose, index, setIndex, count, ...remaining}) => {
    const theme = useContext(ThemeContext);
    const disabled = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    let increment = (index) => {
        setIndex(index + 1);
    };

    let decrement = (index) => {
        setIndex(index - 1);
    };

    let close = () => {
        onClose();
    };

    const handleLightBoxKeyDown = (event) => {
        switch (event.key) {
            case "Left":
            case "ArrowLeft":
                decrement(index);
                break;
            case "Right":
            case "ArrowRight":
                increment(index);
                break;
            case "Esc":
            case "Escape":
                close();
                break;
            default:
                // do nothing
        }
    };

    return (
        <React.Fragment>
            {!disabled &&
                <Modal
                    tabIndex="0"
                    open={open}
                    onClose={close}
                    onKeyDown={handleLightBoxKeyDown}
                    {...remaining}>
                    <React.Fragment>
                        <LightBoxArrow type="previous"
                                       disabled={index - 1 < 0}
                                       onClick={() => decrement(index)}
                        >
                            <ChevronLeftIcon fontSize="inherit"/>
                        </LightBoxArrow>

                        {children}

                        <LightBoxArrow type="next"
                                       disabled={index + 1 > count - 1}
                                       onClick={() => increment(index)}
                        >
                            <ChevronRightIcon fontSize="inherit"/>
                        </LightBoxArrow>
                    </React.Fragment>
                </Modal>
            }
        </React.Fragment>
    );
};

LightBox.propTypes = {
    /**
     * If true shows modal, hides otherwise
     */
    open: PropTypes.bool.isRequired,
    /**
     * Called when closing the modal
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Current index of item being displayed
     */
    index: PropTypes.number.isRequired,
    /**
     * Function used to set the index value, need to move through items
     */
    setIndex: PropTypes.func.isRequired,
    /**
     * Number of items in the list
     */
    count: PropTypes.number.isRequired,
    /**
     * Current lightbox element to display
     */
    children: PropTypes.node.isRequired
};

export default LightBox;
