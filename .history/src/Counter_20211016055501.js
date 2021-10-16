import React from 'react';

const Counter = () => {
    const count = 1;

    return (
        <React.Fragment>
            <button>-</button>
            {count}
            <button>+</button>
        </React.Fragment>
    );
}

export default Counter;