const counter = (state={count:0,incrementBy:0}, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {...state, count : state.count + 1};
      case "DECREMENT":
        return {...state, count : state.count - 1};
      case "INCREMENT_BY":
        return {...state, count : state.count + state.incrementBy};
      case "CHNAGE_AMOUNT":
        return {...state, incrementBy : action.payload};
      default:
        return state;
    }
  };
  
  export default counter;