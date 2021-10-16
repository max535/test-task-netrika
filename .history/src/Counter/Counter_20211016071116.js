import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="Counter">
            <button className="Decrement" onClick={handleDecrement}>-</button>
            <div className="Count">{count}</div>
            <button className="Increment" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;