import  style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function Nav () {
  return (
    <nav className={style.ctn}>
      <NavLink to='/' className={style.navPoke}>
      <img src='' alt='pokebola' className={style.imgPoke}/>
      </NavLink>
      <div className={style.divH3}>
        <NavLink exact to='/home' activeStyle={{borderBottom:'1px solid white'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faHome}/> Home</h3>
        </NavLink>
        <NavLink to='/create' activeClassName='active' activeStyle={{borderBottom:'1px solid white'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faPlus}/> Create</h3>
        </NavLink>
        <NavLink to='/about' activeClassName='active' activeStyle={{borderBottom:'1px solid white'}}>
        <h3 className={style.h3}><FontAwesomeIcon icon={faAddressCard}/> About</h3>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav;
