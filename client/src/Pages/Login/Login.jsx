import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Actions/index';
import Swal from 'sweetalert2';

function Login () {

  const dispatch = useDispatch();
  useEffect(() => {
    const tokenStorage = sessionStorage.getItem('token')
    if(tokenStorage) window.location = '/home';
  }, []);

  const obj = {
    email: '',
    password: ''
  }
  const [login2, setLogin2] = useState(obj);

  const handlerChange = (e) => {
    setLogin2({
      ...login2,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(login(login2));
    setTimeout(function(){
      Swal.fire({
        title: 'wrong data!',
        text: 'check the fields',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Exit',
      })
    }, 1500);
  }

  return (
    <div Style='margin-top:40px'>
    	<div className="container d-flex justify-content-center">
    		<div className="row">
    			<div className="card">
    				<div className="card-header">
    					<strong>Login</strong>
    				</div>
    				<div className="card-body">
    					<form name="login" id="login" onSubmit={handlerSubmit}>
    						<div className="row">
    							<div className="col">
    								<span className="profile-img" Style='display: flex; justifyContent: center; alignItems: center; margin: auto'>
    									<i className='fas fa-user-circle' Style='font-size:120px; margin: auto'></i>
    								</span>
    							</div>
    						</div>
    						<div className="row">
    							<div className="col">
    								<hr/>
    							</div>
    						</div>
    						<div className="row">
    							<div className="col">
    								<div className="form-group">
    									<div className="input-group mb-3">
    										<div className="input-group-prepend">
    											<span className="input-group-text" id="basic-addon1">
    												<i className='fas fa-user-shield'></i>
    											</span>
    										</div>
    										<input className="form-control" onChange={handlerChange} placeholder="Email" id="loginEmail" name="email" type="email" autofocus/>
    									</div>
    								</div>
    								<div className="form-group">
    									<div className="input-group mb-3">
    										<div className="input-group-prepend">
    											<span className="input-group-text" id="basic-addon1">
    												<i className='fas fa-user-secret'></i>
    											</span>
    										</div>
    										<input className="form-control" onChange={handlerChange} placeholder="Password" id="loginPassword" name="password" type="password"/>
    									</div>
    								</div>
    								<div className="form-group">
    									<input type="submit" className="btn btn-primary btn-block" id="login_m"  value="Sign in" />
    								</div>
    							</div>
    						</div>
                <p className="text-center">You don't have an account? <Link to='/register'>Register</Link> </p>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default Login;
