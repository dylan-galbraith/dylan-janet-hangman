import React from 'react';
import body from "../assets/images/hangman-body.jpg";
import head from "../assets/images/hangman-head.jpg";
import leftArm from "../assets/images/hangman-leftarm.jpg";
import leftLeg from "../assets/images/hangman-leftleg.jpg";
import noose from "../assets/images/hangman-noose.jpg";
import rightArm from "../assets/images/hangman-rightarm.jpg";
import rightLeg from "../assets/images/hangman-rightleg.jpg";
import stand from "../assets/images/hangman-stand.jpg";

function Hangman(props) {
    return (
        <section className="hangman">
            <div className="hangman__box">
                <img src={stand} className="hangman__img" alt="stand"/>
                <div className="hangman__column">
                    <img src={noose} className="hangman__noose hangman__img" alt="noose"/>
                    <div className="hangman__headBody">
                        {props.currentCount>0 ? <img src={head} className="hangman__head hangman__img" alt="head"/>: ""}
                        <div className="hangman__arms">
                            <div className="hangman__limbs">
                            {props.currentCount>2 ? <img src={rightArm} className="hangman__rightarm" alt="rightArm"/> : ""}
                            {props.currentCount>3 ? <img src={rightLeg} className="hangman__rightleg hangman__img" alt="rightLeg"/> : ""}    
                        </div>
                        {props.currentCount>1 ? <img src={body} className="hangman__body hangman__img" alt="body"/> : ""}  
                        <div className="hangman__limbs">               
                        {props.currentCount>4 ? <img src={leftArm} className="hangman__leftarm" alt="leftArm"/> : ""}
                        {props.currentCount>5 ? <img src={leftLeg} className="hangman__leftleg hangman__img" alt="leftLeg"/>  : ""}
                    </div>
                    </div>
                 </div>
                </div>
                </div>
                {props.currentCount>5 ? <h1 className="failure">FAILURE</h1>  : ""}
        </section>
    );
}

export default Hangman;