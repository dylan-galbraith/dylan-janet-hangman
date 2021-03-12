import React from 'react';

function Keyboard(props) {
    let alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"]
    return (
        <div className="keyboard">
            {alphabetArr.map((letter)=> {
                return <button type="submit" onCLick={props.clickHandler} giclassName="letter__box" key={letter}>{letter}</button>
            })}
            
        </div>
    );
}

export default Keyboard;