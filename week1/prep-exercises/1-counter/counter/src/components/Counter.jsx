import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <Count count={count} />
            <Button handleClick={incrementCount} />
            <p>{feedback}</p>
        </div>
 );
};

export default Counter;
