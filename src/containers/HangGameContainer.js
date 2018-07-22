import React, {PureComponent} from 'react'
import HangGame from '../components/HangGame'
//import { connect } from 'react-redux'
import { wordList } from '../lib/game'

export default class Hangman3dContainer extends PureComponent {
  state = {
    theWord: this.theWord,
    wrongGuesses: [] //die moet dus van de randomWord functie komen, dus die moet worden gecalld en dan gesetStatet.
  }

  listOfLetters = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]

  randomWord = () => {
    const theWord = wordList[Math.floor(Math.random() * wordList.length)]
    this.setState({
      ...this.state,
      theWord
    })
    console.log(this.state)
  }

  showGuess = (word, guesses) => {
    console.log(guesses)
    // guesses.style.color = 'white'
    return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
  }
  //methode(s) om geraden letters te verwerken

  render() {
    return (
        <HangGame listOfLetters={this.listOfLetters} randomWord={this.randomWord} theWord={this.theWord} showGuess={this.showGuess} />
    )
  }
}