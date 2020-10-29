import * as  actionTypes from './action'

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD5:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUB5:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORERESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETERESULT:
      const updateArray = state.results.filter(
        (result) => result.id !== action.resultEID
      );
      return {
        ...state,
        results: updateArray,
      };
     default:
        return state;
  }

  
};

export default reducer;
