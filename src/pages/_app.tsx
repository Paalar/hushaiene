import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { compositeReducer, State } from '../redux/store';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from './components/Layout';
import './index.css';

const CustomApp: FC<AppProps> = ({ Component, pageProps  }) => (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </Provider>
);


const makeStore: MakeStore<State> = () => createStore(compositeReducer);
const wrapper = createWrapper<State>(makeStore, {debug: true});

export default wrapper.withRedux(CustomApp);
