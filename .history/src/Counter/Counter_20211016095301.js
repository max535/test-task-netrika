import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count === 0) {
            return;
        } else {
            setCount(count - 1);
        }
    }

    return (
             <div className="counter">
                <button className={count > 0 ? "decrement" : "disabled"} onClick={handleDecrement}>-</button>
                <span className="count">{count}</span>
                <button className="increment" onClick={handleIncrement}>+</button>
            </div>
    );
}

export default Counter;