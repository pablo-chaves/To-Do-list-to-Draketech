import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import style from './ButtonOptions.module.css';
import Swal from 'sweetalert2';
import { deleteTodo } from '../../Services/todos.service';
import { getTodos } from '../../Redux/Actions/index';

function ButtonOptions({ id, buttonPath, deleteAction }) {
  const token = sessionStorage.getItem('token');
  const dispatch = useDispatch();

  return (
    <div className={style.ctn}>
      <input type="checkbox" id={id} className={style.checkbox} />
      <label htmlFor={id} className={style.button}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </label>
      <nav className={style.nav}>
        <NavLink to={`/panel/${buttonPath}/${id}/edit`} className={style.NavLink}>
          <FontAwesomeIcon icon={faEdit} />
          {' Update'}
        </NavLink>
        <span className={style.NavLink} onClick={() => {
          Swal.fire({
            title: 'Are you sure?',
            text: 'will be permanently deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {
              (async () => {await deleteTodo(id, token)
              await dispatch(getTodos(token));})();
              Swal.fire(
                'deleted!',
                `task deleted successfully`,
                'success'
              )
            }
          })

        }}>

          <FontAwesomeIcon icon={faTrashAlt} />
          {' Delete'}
        </span>
      </nav>
    </div>
  );
}

export default ButtonOptions;
