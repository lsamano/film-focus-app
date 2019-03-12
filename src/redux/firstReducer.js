const initialState = {
  user: {}
}

export default function firstReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
          return { ...state, user: action.payload};
        default:
            return state;
    }
}
