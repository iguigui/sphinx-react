import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			username: '',
			email:'',
			password: '',
			confirmPassword: '',
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	} 

	onSubmit(e){
		e.preventDefault();
		this.props.userSignupRequest(this.state);
		console.log(this.state);
	}


	render(){
		return (
				<form onSubmit={this.onSubmit}>
				  <div className="form-group">
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	value={this.state.username}
				    	onChange={this.onChange}
				    	name="username"
				    	placeholder="Username"
				    />
				  </div>
				  <div className="form-group">
				    <input 
				    	type="email" 
				    	className="form-control" 
				    	value={this.state.email}
				    	onChange={this.onChange}
				    	name="email"
				    	placeholder="Email"
				    />
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>
				  <div className="form-group">
				    <input 
				    	type="password" 
				    	className="form-control" 
				    	value={this.state.password}
				    	onChange={this.onChange}
				    	name="password"
				    	placeholder="Password"
				    />
				  </div>
				  <div className="form-group">
				    <input 
				    	type="password" 
				    	className="form-control" 
				    	value={this.state.confirmPassword}
				    	onChange={this.onChange}
				    	name="confirmPassword"
				    	placeholder="Confirm Password"
				    />
				  </div>
				  <button type="submit" className="btn btn-primary">Signup</button>
				</form>
		);
	}
}

// SignupForm.propTypes = {
// 	userSignupRequest: PropTypes.func.isRequired
// }
export default SignupForm;