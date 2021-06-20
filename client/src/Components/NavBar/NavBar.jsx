import  style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logoTodo.png';

function Nav () {
  return (
    <nav className={style.ctn}>
      <NavLink to='/' className={style.navTodo}>
      <img src={logo} alt='logo check' className={style.imgTodo}/>
      </NavLink>
      <div className={style.divH3}>
        <NavLink exact to='/home' activeStyle={{borderBottom:'1px solid #2A8AE4'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faHome}/> Home</h3>
        </NavLink>
        <NavLink to='/create' activeClassName='active' activeStyle={{borderBottom:'1px solid #2A8AE4'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faPlus}/> Create</h3>
        </NavLink>
        <NavLink to='/about' activeClassName='active' activeStyle={{borderBottom:'1px solid #2A8AE4'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faAddressCard}/> About</h3>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;
