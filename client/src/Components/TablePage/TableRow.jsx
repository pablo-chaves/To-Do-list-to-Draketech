import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonOptions from '../ButtonOptions/ButtonOptions';
import { getTodos } from '../../Redux/Actions/index';
import { updateTodo } from '../../Services/todos.service';
import Swal from 'sweetalert2';

export default function TableRow({ id, deleteAction, task, status }) {

  const obj = {
    id,
    status,
    title: task
  }
  const { edit } = useSelector((store) => store)
  const [flag, setFlag] = useState(false);
  const [editState, setEditState] = useState(obj);
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    if(edit.id === id) {
      setFlag(true);
      dispatch(getTodos(token))
    }
    else {
      setFlag(false);
      dispatch(getTodos(token))
    }
  }, [edit]);

  const handlerChange = (e) => {
    setEditState({
      ...editState,
      [e.target.name]: e.target.value,
    })
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const response = await updateTodo(editState, id, token)
    console.log('state====', response)
    if(response.message) {
      await dispatch(getTodos(token));
      setFlag(false);
      Swal.fire({
        title: response.message,
        text: 'the task was updated successfully',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Exit',
      })
    }

  }

  return (
    <tr>
      <td>
        { flag ? <input value={editState.title} name='title' onChange={handlerChange} /> : task }
      </td>
      <td>
        { flag ? <select value={editState.status} name='status' onChange={handlerChange}>
            <option>unfilled</option>
            <option>complete</option>
          </select>
        : status }
      </td>
      <td>
        {flag
          ? <div>
            <button onClick={handlerSubmit} className="btn btn-xs btn-primary">Save</button>
            <button onClick={() => setFlag(false)} className='btn btn-xs btn-danger'>Exit</button>
          </div>
          : <ButtonOptions
          id={id}
        />}
      </td>
    </tr>
  );
}
