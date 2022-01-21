/*
 * Header
 */

import { useConfig } from '@components/Contexts';
import { Grid, Box, Typography } from '@mui/material';
import styles from './styles';

const Header = ({ props }) => {
    const configContext = useConfig();
    const { config } = configContext || {};
    const { title, header } = config || {};
    const { backgroundColor, color } = header || {};

    return (
        <header>
            <Grid sx={styles.header(backgroundColor)} container direction="row" alignItems="center">
                <Grid item>
                    <Typography sx={styles.typography(color)} component="h1" variant="h4">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </header>
    )
};

export default Header;