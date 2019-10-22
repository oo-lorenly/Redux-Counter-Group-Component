import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, productBy2, quotient, reset} from '../actions';
import './Counter.css';

function CounterWithReduxState(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log(counter);

    return (
        <div className="counter">
            <span class="Counter">{counter}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(productBy2())}>*2</button>
            <button onClick={()=>dispatch(quotient())}>/2</button>
            <button onClick={()=>dispatch(reset())}>R</button>
        </div>
    );
}

export default CounterWithReduxState;