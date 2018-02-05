import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col"></div>
				<div className="col-6">
					<br/>
					<br/>
					<h4>Registration Form</h4>
					<br/>
					<SignupForm />
				</div>
				<div className="col"></div>
			</div>
		);
	}
}

export default SignupPage;