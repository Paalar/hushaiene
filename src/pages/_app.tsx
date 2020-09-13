import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { compositeReducer, State } from '../redux/store';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
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
    <AuthProvider session={pageProps.session}>
        <Provider store={store}>
            <ThemeProvider theme={colorTheme}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </ThemeProvider>
        </Provider>
    </AuthProvider>
);


const makeStore: MakeStore<State> = () => createStore(compositeReducer);
const wrapper = createWrapper<State>(makeStore, {debug: true});

export default wrapper.withRedux(CustomApp);
