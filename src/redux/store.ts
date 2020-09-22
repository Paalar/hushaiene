import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import user from './userStore';

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;

type InitialState = { counter: number }

const initialState: InitialState = { counter: 0 };

const increment = createAction<number, 'increment'>('increment');
const decrement = createAction<number, 'decrement'>('decrement');

const counter = createReducer(initialState, builder =>
    builder
        .addCase(increment, state => { state.counter += 1; })
        .addCase(decrement, (state) => { state.counter -= 1; })
);


const store = configureStore({
    reducer: {
        counterState: counter,
        user: user,
    },
});

export default store;
