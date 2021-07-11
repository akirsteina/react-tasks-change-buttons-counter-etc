import { useState } from 'react';
function ChangeText() {
    const [text, setText] = useState('Foo');
    const [color, setColor] = useState('red');
    const editText =  () => {
        if (text === 'Foo'){
            setText('Bar');
            setColor('blue');
        } else {
            setText('Foo');
            setColor('red');

        }
    }

    return (
        <div>
            <h1>Task 1</h1>
            {/* color:color == color */}
            <h2 style={{color}}>{text}</h2>
            <button onClick={editText}>Click me!</button>
        </div>
    );
}

export default ChangeText;