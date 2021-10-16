import React, { useState } from 'react';

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
            <span>{count}</span>
            <button className="Increment" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;