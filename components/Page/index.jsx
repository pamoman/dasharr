/*
 * Page
 */

import { Box } from '@mui/material';
import styles from './styles';

const Page = ({ children }) => {
    return (
        <main>
            <Box sx={styles.page}>
                {children}
            </Box>
        </main>
    )
};

export default Page;