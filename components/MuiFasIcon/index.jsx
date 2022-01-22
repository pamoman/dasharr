/*
 * MuiFasIcon
 */

import { Icon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MuiFasIcon = ({ children, ...props }) => {
    const isFas = children.indexOf("fa-") !== -1;

    if (isFas) {
        return (
            <FontAwesomeIcon {...props} icon={children.replace("fa-", "")} />
        )
    }

    return (
        <Icon {...props}>
            {children.split(/(?=[A-Z])/).join('_').toLowerCase()}
        </Icon>
    )
}

export default MuiFasIcon;