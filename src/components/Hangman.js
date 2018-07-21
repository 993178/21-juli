import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Hangman3d(props){
    return (<div>
        <Link to="/hangman" onClick={console.log('haai')}>Start dying!</Link>
    </div>)
}