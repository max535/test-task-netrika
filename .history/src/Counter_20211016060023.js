import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(1);

    return (
        <React.Fragment>
            <button>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
        </React.Fragment>
    );
}

export default Counter;