import Link from 'next/link';
import React, { FC } from 'react';
import { useDispatch, useSelector } from '../../redux/hooks';

const CounterPage: FC = () => {
    const counter = useSelector(state => state.counterState.counter);
    const dispatch = useDispatch();
    const inc = () => dispatch({ type: 'increment' });
    const dec = () => dispatch({ type: 'decrement' });
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
            <Link href='/'><a>Main page</a></Link>
        </div>
        // <div>
        //     <h1>0</h1>
        //     <button>increment</button>
        //     <button>decrement</button>
        // </div>
    );
};

export default CounterPage;
