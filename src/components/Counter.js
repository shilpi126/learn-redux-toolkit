import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store'



const Counter = () => {
const show = useSelector((state) => state.counter.showCounter)
const counter = useSelector((state) => state.counter.counter)

const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(counterActions.increment())
}

const handleDecrement = () => {
    dispatch(counterActions.decrement())
}

const handleIncrementBy5 = () => {
    dispatch(counterActions.incrementby5(5))
}

const handleDecrementBy5 = () => {
    dispatch(counterActions.decrementby5(5))
}

const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter())
}


return (
    <div className='container'>
<div className='count'>
<p>Redux Toolkit</p>
        {show &&  <div className='counter'>{counter}</div>}
        <div className='btn'>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        
        </div>
        <div className='btn'>
            <button  onClick={handleIncrementBy5}>IncreaseBy5</button>
            <button  onClick={handleDecrementBy5}>DecreseBy5</button>
        </div>
        <button className='toggle' onClick={handleToggleCounter}>Toggle Counter</button>
</div>
    </div>
    )
}




export default Counter