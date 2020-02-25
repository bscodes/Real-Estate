import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';


import {HashRouter, Switch, Route} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";

/* brand pages */
import HouseHome from "./pages/Home/HouseHome";


import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <HashRouter basename="/">
            <React.Fragment>
            <ScrollToTop/>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/houses'} component={HouseHome}/>
                    <Route exact path={'/contact'} component={Contact}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                </Switch>
                <Footer/>
            </React.Fragment>
            </HashRouter>
        </Provider>
    );
  }
}

export default App;