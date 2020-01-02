import { all } from 'redux-saga/effects';
import homeSaga from '../Page/Home/saga';
import newsDetailSaga from '../Page/NewsDetail/saga';

export default function* rootSaga(getState) {
  yield all([
    homeSaga(),
    newsDetailSaga()
  ]);
}
