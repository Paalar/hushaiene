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

const CustomApp: FC<AppProps> = ({ Component, pageProps  }) => (
    <AuthProvider session={pageProps.session}>
        <Provider store={store}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </Provider>
    </AuthProvider>
);


const makeStore: MakeStore<State> = () => createStore(compositeReducer);
const wrapper = createWrapper<State>(makeStore, {debug: true});

export default wrapper.withRedux(CustomApp);
