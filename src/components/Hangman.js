import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Hangman3d(props){
    return (<div>
        <Link to="/hangman" onClick={() => props.randomWord}>Start dying!</Link>
    </div>)
}