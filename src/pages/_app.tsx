import type { AppProps } from 'next/app'
import { Router } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { LoadingPageAdmin } from '../components/LoadingPageAdmin';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <>
            {loading && (
                <LoadingPageAdmin />
            )}
            <Component {...pageProps} />
            <GlobalStyle />

        </>
    )
}
export default MyApp
