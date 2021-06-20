import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';

export default function TodosRoutes() {

  return (
    <Router>
      <div className='soyYo'>
        <NavBar />
        <Switch>
          <Route exact path="/" component={''}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}
