import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../components/Layout';
import './index.css';
import { ThemeProvider } from 'styled-components';

export type ColorTheme = typeof colorTheme;

export const colorTheme = {
    primary: '#f9f9f9',
    primaryDark: '#ebebeb',
    secondary: '#363333',
    tertiary: '#3fd2c9',
};

const CustomApp: FC<AppProps> = ({ Component, pageProps  }) => (
    <Provider store={store}>
        <ThemeProvider theme={colorTheme}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </Provider>
);

export default CustomApp;
