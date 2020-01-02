import actions from './actions'

const initState = {
  currentNews: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_NEWS_DETAIL:
      return {...state,  currentNews: action.payload};
    case actions.REMOVE_CURRENT_NEWS:
      return {...state,  currentNews: null};
    default:
      return state;
  }
}
