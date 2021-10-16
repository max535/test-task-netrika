import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count === 0) {
            <button disabled/>;
        } else {
            setCount(count - 1);
        }
    }

    return (

        <div className="Frame">
             <div className="Counter">
                <button className="Decrement" onClick={handleDecrement}>-</button>
                <span className="Count">{count}</span>
                <button className="Increment" onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default Counter;