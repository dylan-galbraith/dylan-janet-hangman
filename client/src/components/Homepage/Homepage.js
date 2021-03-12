import React, { Component } from 'react';
import Hangman from "../Hangman/Hangman";
import Keyboard from "../Keyboard/Keyboard";

class Homepage extends Component {
    render() {
        return (
            <div>
                <Hangman />
                <Keyboard />
                
            </div>
        );
    }
}

export default Homepage;