import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { compositeReducer, State } from '../redux/store';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from '../redux/store';

type CustomAppProps = AppProps

const CustomApp: FC<CustomAppProps> = ({ Component, pageProps  }) => (
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
);


const makeStore: MakeStore<State> = () => createStore(compositeReducer);
const wrapper = createWrapper<State>(makeStore, {debug: true});

export default wrapper.withRedux(CustomApp);
