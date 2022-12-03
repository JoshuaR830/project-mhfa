import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import '../styles/globals.css';
import { useRouter } from 'next/router';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache ?: EmotionCache
}

function MyApp(props: MyAppProps) {

    // https://gist.githubusercontent.com/mynameisguy/42efc351b743dcd857a0f84e636df7cd/raw/535b01019a3d0c7db97bbcb0eddf119f11520e8c/_app.js
    const router = useRouter();
    const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
    if (path) {
        router.replace(path);
    }

    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    return <CacheProvider value={emotionCache}>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps}/>
        </ThemeProvider>
    </CacheProvider>;
}

export default MyApp;
