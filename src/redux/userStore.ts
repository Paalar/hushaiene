import {  createAction, createReducer } from '@reduxjs/toolkit';
import { User } from 'pages/auth/types';

type InitialState = {
    profile?: User
}

const initialState: InitialState = {};

export const loginUser = createAction<User, 'loginUser'>('loginUser');

const user = createReducer(initialState, builder =>
    builder
        .addCase(loginUser, (state, action) => { state.profile = { ...action.payload }; }),
);

export default user;
