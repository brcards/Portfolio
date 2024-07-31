import React, {ReactNode, useContext} from 'react';
import Modal from "@mui/material/Modal";
import {LightBoxArrow} from "src/modules/LightBox/index";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeContext } from 'styled-components';

interface LightBoxProps {
    open: boolean;
    onClose: () => void;
    index: number;
    setIndex: (index: number) => string;
    count: number;
    children: ReactNode;
    [remaining:string]: any;
}

const LightBox: React.FC<LightBoxProps> = ({children, open, onClose, index, setIndex, count, ...remaining}) => {
    const theme = useContext(ThemeContext);
    const disabled = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    let increment = (index: number) => {
        setIndex(index + 1);
    };

    let decrement = (index: number) => {
        setIndex(index - 1);
    };

    let close = () => {
        onClose();
    };

    const handleLightBoxKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
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
                    tabIndex={0}
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

export default LightBox;
