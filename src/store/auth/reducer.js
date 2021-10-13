const INITIAL_STATE = {
  token: undefined
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload.token }
    case 'LOGOUT':
      return { ...state, token: undefined }
    default: 
        return state;
  }
}

export default reducer;