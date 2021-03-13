import axios from "axios";
import { Component } from "react";
import Hangman from "./Hangman";
import Keyboard from "./Keyboard";

class Puzzle extends Component {

  state = {
    word: null,
    currentCount: 0
  }

  generateWord = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/random")
      .then(response => {
        
        let wordArray = response.data.split("").map(letter => {
          return {letter: letter, isGuessed: false}
        })
        this.setState({
          word: wordArray,
          currentCount: 0
        })
      })
  }

  clickHandler=(event) => {
    console.log(event.target.name);
    let guessedCorrect = false
    let newState = this.state.word.map(letterObj => {
      if(letterObj.letter === event.target.name) {
        letterObj.isGuessed = true
        console.log(letterObj.isGuessed);
        guessedCorrect = true;
      } 
      return letterObj
    })
    if (!guessedCorrect) {
      this.setState({
        currentCount: this.state.currentCount +1
      })
    }
    this.setState({
      word: newState,

    })
    event.target.disabled = true;
};


  render() {
    console.log(this.state);
    if(!this.state.word) {
      return (

        <div className="puzzle">
          <button onClick={this.generateWord} className="puzzle__button puzzle__button--starter">Start a New Game</button>
        </div>
      )
    } 

    return (
      <div className="puzzle">
        <Hangman currentCount={this.state.currentCount} />
        <button onClick={this.generateWord} className="puzzle__button">Start a New Game</button>
        <ul className="puzzle__word">
          {this.state.word.map(letterobj => {
            return <li className={letterobj.isGuessed ? "puzzle__letter--visible" : "puzzle__letter"}>{letterobj.letter}</li>
          })}
        </ul>
        <Keyboard currentWord={this.state.word} clickedLetter={this.clickHandler}/>
      </div>
    )
  }
}

export default Puzzle;