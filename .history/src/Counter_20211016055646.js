import React from 'react';

const Counter = () => {
    const count = 1;

    const handleIncrement = () => {
        count++;
    }

    return (
        <React.Fragment>
            <button onClick={handleIncrement}>-</button>
            <div>{count}</div>
            <button>+</button>
        </React.Fragment>
    );
}

export default Counter;