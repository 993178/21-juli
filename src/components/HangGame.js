import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Hangman3d(props){
    return (<div>
        <p><Link to="/">The only way out (down)</Link></p>
        <button onClick={() => props.randomWord()}>Give me a word</button>
        <h3> {props.theWord} </h3>
        { props.listOfLetters.map(letter => 
            <h4 key={letter} onClick={(letter) => props.showGuess(props.theWord, letter)} > 
                {letter} 
            </h4>
        )}
    </div>)
}















// Nee, sorry, dit is alles.
            
//             Ik begrijp echt -NIET- waar ik mee bezig ben. Ik heb een bergje puzzelstukjes, maar ik overzie het geheel niet. 
//             Kan op zich wel volgen wat er gebeurt in een bestaande werkende app, maar ik krijg niet door mijn dikke schedel 
//             wat voor hangman dan met wat correspondeert en wat ik dan moet doen om een bepaalde actie te laten gebeuren.
//             Ik kan stomweg niet bedenken wat er moet gebeuren - ook niet met je checklist.

//             Heb je dáár al die uitleg voor gegeven :-/