let INTIAL_STATE = {
    favourite : []
}

export default function Reducer(state = INTIAL_STATE, action){
    switch (action.type) {
      case "SET_LANGAUGE":
        return {...state, lang:action.payload};
      default:
        return state;
    }
  }
