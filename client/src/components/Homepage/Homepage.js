import React, { Component } from 'react';
import Hangman from "../Hangman/Hangman";
import Keyboard from "../Keyboard/Keyboard";
import Puzzle from "../Puzzle/Puzzle"

class Homepage extends Component {
    render() {
        return (
            <div>
                <Hangman />
                <Keyboard />
                
                <Puzzle />
            </div>
        );
    }
}

export default Homepage;