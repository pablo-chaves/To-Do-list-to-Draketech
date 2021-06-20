import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Actions/index';
import Swal from 'sweetalert2';

function Register() {

  useEffect(() => {
    const tokenStorage = sessionStorage.getItem('token')
    if(tokenStorage) window.location = '/home';
  }, []);

  const dispatch = useDispatch();
  const obj = {
    name: '',
    email: '',
  }
  const obj2 = {
    password1: '0',
    password2: '1',
  }
  const [register2, setRegister2] = useState(obj);
  const [password, setPassword] = useState(obj2);
  const handlerChange = (e) => {
    if (e.target.name.includes('password')) {
      setPassword({
        ...password,
        [e.target.name]: e.target.value
      })
    } else {
      setRegister2({
        ...register2,
        [e.target.name]: e.target.value
      })
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(password, register2)
    if(password.password1 === password.password2) {
      dispatch(register({...register2, password:password.password1 }));
    } else {
      Swal.fire({
        title: 'wrong data!',
        text: 'check the fields',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Exit',
      })
    }
  }

  return (
    <article className="card-body mx-auto" Style="max-width: 400px; margin-top:40px">
    	<h4 className="card-title mt-3 text-center">Create Account</h4>
    	<p className="text-center">Get started with your free account</p>

    	<form onSubmit={handlerSubmit}>
    	<div className="form-group input-group">
    		<div className="input-group-prepend">
    		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
    		 </div>
            <input name="name" className="form-control" placeholder="Full name" type="text" onChange={handlerChange}/>
        </div>
        <div className="form-group input-group">
        	<div className="input-group-prepend">
    		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
    		 </div>
            <input name="email" className="form-control" placeholder="Email address" type="email" onChange={handlerChange}/>
        </div>
        <div className="form-group input-group">
        	<div className="input-group-prepend">
    		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
    		</div>
            <input name='password1' className="form-control" placeholder="Create password" type="password" onChange={handlerChange}/>
        </div>
        <div className="form-group input-group">
        	<div className="input-group-prepend">
    		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
    		</div>
            <input name='password2' className="form-control" placeholder="Repeat password" type="password" onChange={handlerChange}/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
        </div>
        <p className="text-center">Have an account? <Link to='/'>Log In</Link> </p>
    </form>
    </article>
  )
}

export default Register;
