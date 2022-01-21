/*
 * Layout
 */

import { Box } from '@mui/material';
import Header from '@components/Header';
import Page from '@components/Page';
import Footer from '@components/Footer';
import { useConfig } from '@components/Contexts';
import styles from './styles';

const Layout = ({ children }) => {
    const configContext = useConfig();

    const { config: { backgroundImage } } = configContext || {};

    return (
        <Box sx={styles.layout(backgroundImage)}>
            <Header />
            <Page>
                {children}
            </Page>
            <Footer />
        </Box>
    )
};

export default Layout;