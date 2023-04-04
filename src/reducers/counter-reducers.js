import { actionTypes } from './counter-actions.js'
const counter = (state={count:0,incrementBy:0}, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return {...state, count : state.count + 1};
      case actionTypes.DECREMENT:
        return {...state, count : state.count - 1};
      case actionTypes.INCREMENT_BY:
        return {...state, count : state.count + state.incrementBy};
      case actionTypes.CHNAGE_AMOUNT:
        return {...state, incrementBy : action.payload};
      default:
        return state;
    }
  };
  
  export default counter;