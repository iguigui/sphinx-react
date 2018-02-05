import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import PropTypes from 'prop-types';

class SignupPage extends React.Component {
	render(){
		const {userSignupRequest} = this.props; 

		return (
			<div className="row">
				<div className="col"></div>
				<div className="col-6">
					<br/>
					<br/>
					<h4>Registration Form</h4>
					<br/>
					<SignupForm userSignupRequest={userSignupRequest} />
				</div>
				<div className="col"></div>
			</div>
		);
	}
}

// SignupPage.propTypes = {
// 	userSignupRequest: PropTypes.func.isRequired
// }

export default connect((state) => {return {} }, {userSignupRequest})(SignupPage);