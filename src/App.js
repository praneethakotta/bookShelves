import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import BooksListComponent from './components/BooksListComponent'
import SearchComponent from './components/SearchComponent'

class App extends Component{
    render() {
      return (
          <BrowserRouter>
            <div className="App">
                <Switch>
                  <Route exact path="/" component={BooksListComponent} />
                  <Route path="/search" component={SearchComponent} />
                </Switch>
            </div>
          </BrowserRouter>
      );
    }
}

export default App;
