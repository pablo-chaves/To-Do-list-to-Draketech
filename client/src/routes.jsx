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
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


export default function TodosRoutes() {

  return (
    <Router>
      <div className='soyYo'>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route path="/" component={NavBar}/>
        </Switch>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  );
}
