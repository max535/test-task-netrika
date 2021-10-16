import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count++);
    }

    const handleDecrement = () => {
        setCount(count--);
    }

    return (
        <React.Fragment>
            <button onClick={handleDecrement}>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
        </React.Fragment>
    );
}

export default Counter;