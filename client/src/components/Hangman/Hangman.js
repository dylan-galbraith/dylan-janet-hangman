import React from 'react';
import body from "../../images/hangman-body.jpg";
import head from "../../images/hangman-head.jpg";
import leftArm from "../../images/hangman-leftarm.jpg";
import leftLeg from "../../images/hangman-leftleg.jpg";
import noose from "../../images/hangman-noose.jpg";
import rightArm from "../../images/hangman-rightarm.jpg";
import rightLeg from "../../images/hangman-rightleg.jpg";
import stand from "../../images/hangman-stand.jpg";
import "./Hangman.scss";

function Hangman(props) {
    return (
        <section className="hangman">
            <div className="hangman__box">
                <img src={stand} className="hangman__img" alt="stand"/>
                <div className="hangman__column">
                    <img src={noose} className="hangman__noose hangman__img" alt="noose"/>
                    <div className="hangman__headBody">
                        <img src={head} className="hangman__head hangman__img" alt="head"/>
                        <div className="hangman__arms">
                        <img src={body} className="hangman__body hangman__img" alt="body"/>
                        <img src={rightArm} className="hangman__rightarm" alt="rightArm"/>
            <img src={leftArm} className="hangman__leftarm" alt="leftArm"/>
                    </div>
                 </div>
                </div>
                </div>
            {/* 
            <img src={rightLeg} className="hangman__rightleg" alt="rightLeg"/>             
            <img src={leftLeg} className="hangman__leftleg" alt="leftLeg"/>             */}
        </section>
    );
}

export default Hangman;