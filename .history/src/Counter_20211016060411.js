import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
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