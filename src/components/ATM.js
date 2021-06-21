import { useState } from 'react';

function ATM() {
    const [count, setCount] = useState(0);
    const minusValue = (event) => {
        setCount(count - event.target.value);
    }
    const plusValue = (event) => {
        setCount(count + parseInt(event.target.value));
    }

    return (
        <div>
            <h1>Task 3</h1>
            <button onClick={minusValue} value={5}>-5</button>
            <button onClick={minusValue} value={1}>-1</button>
            <input disabled={true} value={count}/>
            <button onClick={plusValue} value={1}>+1</button>
            <button onClick={plusValue} value={5}>+5</button>
        </div>
    )
}

export default ATM;

