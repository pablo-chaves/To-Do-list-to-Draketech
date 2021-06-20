import { Link } from 'react-router-dom';

function Login () {
  return (
    <div Style='margin-top:40px'>
    	<div className="container d-flex justify-content-center">
    		<div className="row">
    			<div className="card">
    				<div className="card-header">
    					<strong>Login</strong>
    				</div>
    				<div className="card-body">
    					<form name="login" id="login">
    						<div className="row">
    							<div className="col">
    								<span className="profile-img">
    									<i className='fas fa-user-circle' Style='font-size:120px'></i>
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
    										<input className="form-control" placeholder="Email" id="loginEmail" name="loginEmail" type="email" autofocus/>
    									</div>
    								</div>
    								<div className="form-group">
    									<div className="input-group mb-3">
    										<div className="input-group-prepend">
    											<span className="input-group-text" id="basic-addon1">
    												<i className='fas fa-user-secret'></i>
    											</span>
    										</div>
    										<input className="form-control" placeholder="Password" id="loginPassword" name="loginPassword" type="password"/>
    									</div>
    								</div>
    								<div className="form-group">
    									<input type="button" className="btn btn-primary btn-block" id="login_m"  value="Sign in"  disabled/>
    								</div>
    							</div>
    						</div>
                <p className="text-center">You don't have an account? <Link to='/register' onClick="">Register</Link> </p>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default Login;
