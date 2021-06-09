import styled from "styled-components";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const SettingsListItemIcon = styled(ListItemIcon)`
    color: ${props => props.theme.colours.text[1]};
`;

export default SettingsListItemIcon;
