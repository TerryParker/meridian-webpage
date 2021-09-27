import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Armor from './pages/Armor';
import Weapons from './pages/Weapons';
import { NavMenu }from './components/NavMenu';
import Creature from './pages/Creatures';
import School from './pages/School';
import Npc from './pages/Npcs';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <NavMenu/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/armor' component={Armor} />
        <Route path='/creature' component={Creature} />
        <Route path='/weapons' component={Weapons} />
        <Route path='/schools' component={School} />
        <Route path='/npcs' component={Npc} />
        </Switch>
      </Router>
    );
  }
}
