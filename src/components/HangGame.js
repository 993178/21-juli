import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Hangman3d(props){
    return (<div>
        <p><Link to="/">The only way out (down)</Link></p>
        <div>
            { state }
        </div>
    </div>)
}