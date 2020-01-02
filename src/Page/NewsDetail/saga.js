import { takeEvery, all, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import {fetchApi} from "../../helpers/api";

export function* fetchNewsDetail() {
  yield takeEvery(actions.FETCH_NEWS_DETAIL, function*({id}) {
    let response = yield call(fetchApi, 'get', `api/v1/posts/${id}`);
    yield put({
      type: actions.SET_NEWS_DETAIL,
      payload: response
    });
  })
}

export default function* rootSaga() {
  yield all([
    fork(fetchNewsDetail),
  ]);
}

