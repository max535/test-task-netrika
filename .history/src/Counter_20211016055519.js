import React from 'react';

const Counter = () => {
    const count = 1;

    return (
        <React.Fragment>
            <button>-</button>
            <div>{count}</div>
            <button>+</button>
        </React.Fragment>
    );
}

export default Counter;