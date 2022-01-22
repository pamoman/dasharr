/*
 * MuiFasIcon
 */

import { Icon } from '@mui/material';

const MuiFasIcon = ({ children, ...props }) => {
    const isFas = children.indexOf("fa-") !== -1;

    if (isFas) {
        return (
            <Icon baseClassName="fas" className={children} {...props} />
        )
    }

    return (
        <Icon {...props}>
            {children.split(/(?=[A-Z])/).join('_').toLowerCase()}
        </Icon>
    )
}

export default MuiFasIcon;