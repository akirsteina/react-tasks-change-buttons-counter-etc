import { useState } from 'react';
function ChangeText() {
    const [text, setText] = useState('Foo');
    let color = 'red';
    const editText =  () => {
        if (text === 'Foo'){
            setText('Bar');
        } else {
            setText('Foo');
        }
    }

    if (text === 'Bar') {
        color = 'blue';
    } else {
        color = 'red';
    }

    return (
        <div>
            <h1>Task 1</h1>
            <h2 style={{color:color}}>{text}</h2>
            <button onClick={editText}>Click me!</button>
        </div>
    );
}

export default ChangeText;