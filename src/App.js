import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import MainNavigation from './components/navbar/navbar';
import MainPage from './pages/main';
import MenuPage from './pages/menu';
import PicturesPage from './pages/pictures';
import InfoPage from './pages/info';
import ContactPage from './pages/contact';
import Header from './components/header';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className='container shadow'>
            <Header />
            <MainNavigation />
            <main className='main-content'>
              <Switch>
                <Redirect exact from='/' to='/home' />
                <Route path='/home' component={MainPage} />
                <Route path='/menu' component={MenuPage} />
                <Route path='/pictures' component={PicturesPage} />
                <Route path='/info' component={InfoPage} />
                <Route path='/contact' component={ContactPage} />
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
