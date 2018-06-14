import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/pages/Home/Home.component'
import Contact from './components/pages/Contanct/Contact.component'
import Menu from './components/common/Menu/Menu.component'

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Menu />
        
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
