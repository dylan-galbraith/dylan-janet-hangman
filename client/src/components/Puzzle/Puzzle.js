import axios from "axios";
import { Component } from "react";
import "./Puzzle.scss"

class Puzzle extends Component {

  state = {
    word: null
  }

  generateWord = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/random")
      .then(response => {
        this.setState({
          word: response.data.split("")
        })
      })
  }

  render() {
    console.log(this.state);
    if(!this.state.word) {
      return (
        <div>
          <button onClick={this.generateWord}>Random Word</button>
        </div>
      )
    } 

    return (
      <div className="puzzle">
        <button onClick={this.generateWord}>Random Word</button>
        <ul className="puzzle__word">
          {this.state.word.map(letter => {
            return <li className="puzzle__letter">{letter}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Puzzle;