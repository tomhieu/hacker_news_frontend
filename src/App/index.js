import './App.scss';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store, history} from '../redux/store';
import PublicRoutes from '../router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='site-content'>
          <PublicRoutes history={history}/>
        </div>
      </Provider>
    );
  }
}
export default App;
