import React from 'react';

const Counter = () => {
    const count = 1;

    return (
        <React.Fragment>
            <button>-</button>
            <p>{count}</p>
            <button>+</button>
        </React.Fragment>
    );
}

export default Counter;