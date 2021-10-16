import React from 'react';

const Counter = () => {
    let count = 1;

    const handleIncrement = () => {
        count++;
        console.log(count);
    };

    return (
        <React.Fragment>
            <button onClick={handleIncrement}>-</button>
            <div>{count}</div>
            <button>+</button>
        </React.Fragment>
    );
}

export default Counter;