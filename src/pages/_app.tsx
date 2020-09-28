import React, { FC } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout';
import './index.css';
import { ThemeProvider } from 'styled-components';
import cookies from 'next-cookies';

export type ColorTheme = typeof colorTheme;

export const colorTheme = {
    primary: '#f9f9f9',
    primaryDark: '#ebebeb',
    secondary: '#363333',
    tertiary: '#3fd2c9',
};

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Provider store={store}>
        <ThemeProvider theme={colorTheme}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </Provider>
);

CustomApp.getInitialProps = async (appContext: AppContext) => {
    const { ctx } = appContext;
    // Calls `getInitialProps` and fills `appProps.pageProps`
    let error;
    const appProps = await App.getInitialProps(appContext);

    const { firebaseToken } = cookies(ctx);

    // If token exists run Firebase validation on server side before rendering.
    if (firebaseToken) {
    //   try {
    //     const headers = {
    //       'Context-Type': 'application/json',
    //       Authorization: JSON.stringify({ token: firebaseToken }),
    //     };
    //     // const result = await fetch(`${server}/api/validate`, { headers }).then((res) => res.json());
    //     return { ...result, ...appProps };
    //   } catch (e) {
    //     console.log(e);
    //   }
        console.log('firebaseToken');
    }

    return { ...appProps };
};

export default CustomApp;
