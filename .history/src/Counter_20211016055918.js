import React from 'react';

const Counter = () => {
    let count = 1;

    const handleIncrement = () => {
        count++;
        console.log(count);
    };

    return (
        <React.Fragment>
            <button>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
        </React.Fragment>
    );
}

export default Counter;