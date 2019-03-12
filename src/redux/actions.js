export const doTheLoginThing = userLogin => {
  return {
    type: "LOGIN_USER",
    payload: userLogin
  }
}
