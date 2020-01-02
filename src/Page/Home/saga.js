import { takeEvery, all, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import {fetchApi} from "../../helpers/api";
import {store} from '../../redux/store';


export function* fetchNewsList() {
  yield takeEvery(actions.FETCH_NEWS_LIST, function*({page}) {
    yield put({
      type: actions.UPDATE_FETCHING_PAGE,
      page: page
    });
    let response = yield call(fetchApi, 'get', 'api/v1/posts', {page: page}, (paginationHeader) => {
      store.dispatch({
        type: actions.UPDATE_PAGINATION,
        payload: paginationHeader
      });
    });
    yield put({
      type: actions.SET_NEWS_LIST,
      newsList: response
    });
    yield put({
      type: actions.INCREASE_CURRENT_PAGE,
    });
  })
}

export default function* rootSaga() {
  yield all([
    fork(fetchNewsList),
  ]);
}

