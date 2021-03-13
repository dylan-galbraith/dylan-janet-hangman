import React from 'react';

function Keyboard(props) {
  
    let alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return (
        <div className="keyboard">
            {alphabetArr.map((letter)=> {
                return <button disabled={false} name={letter} onClick={props.clickedLetter}  id={letter} className="keyboard__box" key={letter}>{letter}</button>
            })}
            
        </div>
    );
}

export default Keyboard;
