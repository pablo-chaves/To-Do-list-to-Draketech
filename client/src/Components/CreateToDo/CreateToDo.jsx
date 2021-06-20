import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../Services/todos.service';
import { getTodos } from '../../Redux/Actions/index';

function CreateToDo() {

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const { session } = useSelector((store) => store);
  const obj = {
    title: '',
    status: 'unfilled',
    UserId: session.id
  }
  const [task, setTask] = useState(obj);

  const handlerChange = (e) => {
    setTask({...task,title: e.target.value});
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if(task.title) {
      await addTodo(task, token);
      await dispatch(getTodos(token));
      setTask(obj)
    }
  }

  return (
    <div className="row justify-content-center mt-5 mr-0">
        <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm" onSubmit={handlerSubmit}>
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <i className="fa fa-plus h4 text-body"></i>
                    </div>

                    <div className="col">
                        <input onChange={handlerChange} value={task.title} className="form-control form-control-borderless src_fild" type="search" placeholder="Add task to your To Do list"/>
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-lg btn-primary src_btn" type="submit">Add</button>
                    </div>

                </div>
            </form>
        </div>

    </div>
  )
}

export default CreateToDo;
