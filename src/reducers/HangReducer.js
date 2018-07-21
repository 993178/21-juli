import { wordList } from '../lib/game'


const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case 'NEW_WORD':
          return wordList[Math.floor(Math.random() * wordList.length)]
        default:
          return state
    }
}

export default reducer