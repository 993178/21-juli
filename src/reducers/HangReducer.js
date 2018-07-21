import { wordList } from '../lib/game'

const initialState = null


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'NEW_WORD':
          return wordList[Math.floor(Math.random() * wordList.length)]
        default:
          return state
    }
}

export default reducer

//eerste actie is een woord kiezen. 