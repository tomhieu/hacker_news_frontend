const actions = {
  FETCH_NEWS_LIST: 'FETCH_NEWS_LIST',
  UPDATE_FETCHING_PAGE: 'UPDATE_FETCHING_PAGE',
  SET_NEWS_LIST: 'SET_NEWS_LIST',
  INCREASE_CURRENT_PAGE: 'INCREASE_CURRENT_PAGE',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',
  RESET_NEWS_LIST: 'RESET_NEWS_LIST',
  fetchNewsList: (page) => {
    return  {
      type: actions.FETCH_NEWS_LIST,
      page
    }
  },
  resetNewsList: () => {
    return  {
      type: actions.RESET_NEWS_LIST
    }
  },
};

export default actions
