import React, {PureComponent} from 'react'
import Hangman from '../components/Hangman'
import { connect } from 'react-redux'
import { wordList } from '../lib/game'

export default class Hangman3dContainer extends PureComponent {
    //state = null
  componentDidMount() {

    }

  randomWord = () => {
    this.props.dispatch({
      type: 'NEW_WORD'
    })
    console.log('er gebeurt niets')
  }


  render() {
    return (
        <Hangman randomWord={this.randomWord}/>
    )
  }
}



//export default connect(mapStateToProps)(HangmanContainer)