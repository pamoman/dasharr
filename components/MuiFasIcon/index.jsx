/*
 * MuiFasIcon
 */

import { Icon } from '@mui/material';

const MuiFasIcon = ({ children, sx = {}, color = "inherit", fontSize = "medium" }) => {
    const isFas = children.indexOf("fa-") !== -1;

    if (isFas) {
        return (
            <Icon
                sx={{
                    boxSizing: 'content-box',
                    ...sx
                }}
                baseClassName="fas"
                className={children}
                color={color}
                fontSize={fontSize}
            />
        )
    }

    return (
        <Icon sx={sx} color={color} fontSize={fontSize}>
            {children.split(/(?=[A-Z])/).join('_').toLowerCase()}
        </Icon>
    )
}

export default MuiFasIcon;