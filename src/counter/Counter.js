import React from 'react';

import './Counter.scss';

function Counter(props) {

    const [counter, setCounter] = React.useState(0);

    return (
        <div className="counter">
            <div className="counter__display" data-testid="counter__display">{counter}</div>
            <div className="counter__button" onClick={() => setCounter(counter + 1)}>click me</div>
        </div>
    );
}

export default Counter;