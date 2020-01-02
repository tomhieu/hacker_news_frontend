const actions = {
  FETCH_NEWS_LIST: 'FETCH_NEWS_LIST',
  UPDATE_FETCHING_PAGE: 'UPDATE_FETCHING_PAGE',
  SET_NEWS_LIST: 'SET_NEWS_LIST',
  INCREASE_CURRENT_PAGE: 'INCREASE_CURRENT_PAGE',
  UPDATE_PAGINATION: 'UPDATE_PAGINATION',
  fetchNewsList: (page) => {
    return  {
      type: actions.FETCH_NEWS_LIST,
      page
    }
  },
};

export default actions
