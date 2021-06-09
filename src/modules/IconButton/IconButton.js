import Button from "@material-ui/core/Button";
import styled from "styled-components";

const IconButton = styled(Button)`
    border-radius: 50%;
    padding: 0.6em;
    min-width: 0px; 
    color: ${props => props.theme.colours.text[0]};
    background: ${props => props.theme.colours.background[0]};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                0px 2px 2px 0px rgba(0,0,0,0.14),
                0px 1px 5px 0px rgba(0,0,0,0.12);
    border: 2px solid ${props => props.theme.colours.primary};
    &:hover {
        border: 2px solid ${props => props.theme.colours.secondary};
    }
`;

export default IconButton;
