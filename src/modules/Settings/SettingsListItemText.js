import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";

const SettingsListItemText = styled(ListItemText)`
    color: ${props => props.theme.colours.text[0]};
`;

export default SettingsListItemText;
