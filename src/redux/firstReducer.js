const initialState = {
  user: {}
}

export default function firstReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
          console.log("Now starting the fetch...");
          fetch("http://localhost:3000/api/v1/login", {
          method: "POST",
          body: JSON.stringify({user: action.payload}),
          headers: {
          "content-type": "application/json",
          accepts: "application/json"
          }
          })
          .then(resp => resp.json())
          .then(data => console.log("Hey, the fetch worked?", data))
            return { ...state, user: {username: "Eme"}};

        default:
            return state;
    }
}
