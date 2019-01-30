const initialState = {};

function reducer(state = {}, action) {
  switch (action.type) {
    case "PEEL_THE_POTATO":
      return Object.assign({}, state, action.payload)
    case "DO_SOMETHING":
      return Object.assign({}, state, action.payload)
    case "REQ_TO_DATABASE":
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default reducer;