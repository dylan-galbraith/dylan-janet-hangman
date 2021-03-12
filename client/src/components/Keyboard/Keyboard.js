import React from 'react';
import './Keyboard.scss';

function Keyboard(props) {
  
const clickHandler=(event) => {
    if( event.key === props.key) {
        return <li className="puzzle__letter" key={props.key} >{props.letter}</li>
    }
};

    let alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
    return (
        <div className="keyboard">
            {alphabetArr.map((letter)=> {
                return <button onCLick={clickHandler} className="keyboard__box" key={letter}>{letter}</button>
            })}
            
        </div>
    );
}

export default Keyboard;