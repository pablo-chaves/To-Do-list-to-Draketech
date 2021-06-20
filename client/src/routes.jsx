import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';


export default function TodosRoutes() {

  const [loginToken, setLoginToken] = useState(null);
  useEffect(() => {
    const tokenStorage = sessionStorage.getItem('token')
    setLoginToken(tokenStorage);
  }, []);

  return (
    <Router>
      <div className='soyYo'>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          {loginToken ? <Route path="/" component={NavBar}/> : null}
        </Switch>
        {loginToken ? <Route path="/home" component={Home}/> : null}
        <Route exact path="/about" component={About}/>
      </div>
    </Router>
  );
}
