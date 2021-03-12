import React, { Component } from 'react';
import Hangman from "../Hangman/Hangman";
import Puzzle from "../Puzzle/Puzzle"

class Homepage extends Component {
    render() {
        return (
            <div>
                <Hangman />
                <Puzzle />
            </div>
        );
    }
}

export default Homepage;