import { useState } from 'react';

function ChangeButton() {
    const [text, setText] = useState('Foo');
    const changeButtonText = () => {
        if (text === 'Foo') {
            setText('Bar');
        } else if (text === 'Bar') {
            setText('Baz');
        } else {
            setText('Foo');
        }
    }
    
    return (
        <div>
            <h1>Task 2</h1>
            <button onClick={changeButtonText}>{text}</button>
        </div>
    )
}

export default ChangeButton;