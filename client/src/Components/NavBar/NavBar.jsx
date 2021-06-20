import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoTodo.png';
import { get, getTodos } from '../../Redux/Actions/index';

function Nav () {

  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem('id');
    dispatch(get(id))
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    dispatch(getTodos(token))
  }, []);

  const handlerClick = (e) => {
    sessionStorage.clear();
    window.location = '/'
  }

  return (
    <nav className={style.ctn}>
      <NavLink to='/home' className={style.navTodo}>
      <img src={logo} alt='logo check' className={style.imgTodo}/>
      </NavLink>
      <div className={style.divH3}>
        <NavLink exact to='/home' activeStyle={{borderBottom:'1px solid #2A8AE4'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faHome}/> Home</h3>
        </NavLink>
        <NavLink to='/about' activeClassName='active' activeStyle={{borderBottom:'1px solid #2A8AE4'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faAddressCard}/> About</h3>
        </NavLink>
        <button onClick={handlerClick} className='btn btn-primary slide_left' >Logout</button>
      </div>
    </nav>
  )
}

export default Nav;
