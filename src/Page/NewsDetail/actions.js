const actions = {
  FETCH_NEWS_DETAIL: 'FETCH_NEWS_DETAIL',
  SET_NEWS_DETAIL: 'SET_NEWS_DETAIL',
  REMOVE_CURRENT_NEWS: 'REMOVE_CURRENT_NEWS',
  fetchNewsDetail: (id) => {
    return  {
      type: actions.FETCH_NEWS_DETAIL,
      id
    }
  },
  removeCurrentNews: () => {
    return  {
      type: actions.REMOVE_CURRENT_NEWS,
    }
  }
};

export default actions
