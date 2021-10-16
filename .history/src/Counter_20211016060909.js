import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
        if (count == 0) {
            break;
        }
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