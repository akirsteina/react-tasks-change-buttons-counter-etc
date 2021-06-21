import {useState} from 'react';

function Boxes() {
    const [selectedSquare, setActive] = useState(0);

    const box = <span/>;
    let boxes = [];
    for (let i=0; i<5; i++){
        boxes.push(box);
    }

    let color;

    const boxItems = boxes.map((box, index) => {
        color = 'blue';
        if (selectedSquare === index) {
            color = 'red';
        }
        return (
            <div key={index} style={{height:100, width:100,display:'inline-block', margin:5, backgroundColor:color}}>
            {box}
            </div>
        )
    });

    const changeColor = () => {
        color = 'red';
    }

    const changeColorRight = () => {
        if (selectedSquare < 4) {
            setActive(selectedSquare+1);
            changeColor();
        }
    }

    const changeColorLeft = () => {
        if (selectedSquare > 0) {
            setActive(selectedSquare-1);
            changeColor();
        }
    }

    return (
        <div>
            <div>
                <h1>Task 4</h1>
                {boxItems}
            </div>
            <div>
                <button onClick={changeColorLeft}>Left</button>
                <button onClick={changeColorRight}>Right</button>
            </div>
        </div>
    )
}

export default Boxes;