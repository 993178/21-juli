import React, {PureComponent} from 'react'
import Hangman from '../components/Hangman'
import { connect } from 'react-redux'
import { wordList } from '../lib/game'

export default class Hangman3dContainer extends PureComponent {
    //state = null
  componentDidMount() {

    }

  randomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }


  render() {
    return (
        <Hangman />
    )
  }
}