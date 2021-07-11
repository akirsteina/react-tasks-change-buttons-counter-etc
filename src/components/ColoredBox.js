import {useState} from 'react';

function ColoredBox() {
    const [color, setColor] = useState('grey');

    const changeColor = (event) => {
        if (event.target.value === 'yellow') {
            setColor('yellow');
        } else if (event.target.value === 'red') {
            setColor('red');
        }else if (event.target.value === 'green') {
            setColor('green');
        } else if (event.target.value === 'blue') {
            setColor('blue');
        } else {
            setColor('grey');
        }
    }

    return (
        <div>
            <div>
                <h1>Task 5</h1>
                <input onChange={changeColor}/>
                <div style={{height:100, width:100,backgroundColor:color}}></div>
            </div>
        </div>
    )
}

export default ColoredBox;