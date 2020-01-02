import actions from './actions'

const MAX_LENGTH = 9999999999;
const  DEFAULT_PER_PAGE = 30;

const initState = {
  newsList: [],
  currentPage: 0,
  pageBeingLoaded: 0,
  pagination: {
    page: 0,
    perPage: DEFAULT_PER_PAGE,
    total: MAX_LENGTH
  }
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_NEWS_LIST:
      let newsList = state.newsList.concat(action.newsList);
      return {...state,  newsList: newsList};
    case actions.INCREASE_CURRENT_PAGE:
      return {...state,  currentPage: state.currentPage + 1};
    case actions.UPDATE_FETCHING_PAGE:
      return {...state,  pageBeingLoaded: action.page};
    case actions.UPDATE_PAGINATION:
      return {...state,  pagination: action.payload};
    default:
      return state;
  }
}
