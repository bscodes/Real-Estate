import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';


import {HashRouter, Switch, Route} from 'react-router-dom';

import './App.scss';
import Rent from "./pages/Rent/Rent";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import School from "./pages/School/School";
import Contact from "./pages/Contact/Contact";
// eslint-disable-next-line
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter basename="/">
          <React.Fragment>
            <ScrollToTop/>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/rent'} component={Rent}/>
              <Route exact path={'/tour'} component={Tour}/>
              <Route exact path={'/school-registration'} component={School}/>
              <Route exact path={'/contact'} component={Contact}/>
              <Route exact path={'/rent/:id'} component={ProductDetail}/>
            </Switch>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
