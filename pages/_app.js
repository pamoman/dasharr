/*
 * App
 */

import React, { useState, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@styles/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { dark, globalStyle } from '@themes';
import { ConfigProvider, FilterProvider } from '@components/Contexts';
import Layout from '@components/Layout';
import yaml from 'js-yaml';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

    const [ config, setConfig ] = useState({});
    const [ filters, setFilters ] = useState(["All"]);

    useEffect(() => {
        fetch("assets/config.yml")
        .then(res => res.text())
        .then(data => {
            const user = yaml.load(data);

            setConfig(user);
        });
    }, []);

    return (
        <CacheProvider value={emotionCache}>
            <FilterProvider value={{ filters, setFilters }}>
                <ConfigProvider value={{ config, setConfig }}>
                    <ThemeProvider theme={dark}>
                        <CssBaseline />
                        <GlobalStyles styles={globalStyle} />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </ConfigProvider>
            </FilterProvider>
        </CacheProvider>
    );
}

export default App;
