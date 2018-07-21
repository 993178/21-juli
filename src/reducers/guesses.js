const guesses = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SHOW_GUESS':      //showGuess
          return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
        case 'WRONG_GUESSES_COUNT':
          return guesses.filter(guess => word.indexOf(guess) < 0).length
        case 'WRONG_GUESS_LIMIT':
          return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
        default:
          return state
    }
}

export default reducer


  export const isWinner = (word, guesses) => {
    return showGuess(word, guesses) === word.split('').join(' ')
  }
  
  export const gameFinished = (word, guesses) => {
    return (wrongGuessLimit(word, guesses) || isWinner(word, guesses))
  }

