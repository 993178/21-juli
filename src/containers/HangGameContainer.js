import React, {PureComponent} from 'react'
import HangGame from '../components/HangGame'
import { connect } from 'react-redux'

export default class Hangman3dContainer extends PureComponent {
    //state = null
  componentDidMount() {

    }

    

  render() {
    return (
        <HangGame />
    )
  }
}