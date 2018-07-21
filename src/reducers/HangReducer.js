const initialState = null

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'IETS':
          return action.payload
        default:
          return state
    }
}

export default reducer

//eerste actie is een woord kiezen. 