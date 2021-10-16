import React from 'react';

const Counter = () => {
    

    return (
        <React.Fragment>
            <button>-</button>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
        </React.Fragment>
    );
}

export default Counter;