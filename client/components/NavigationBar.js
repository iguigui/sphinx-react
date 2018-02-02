import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <Link to="/" className="navbar-brand">Sphinx</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto navbar-right">
		      <li className="nav-item">
		        <Link to="/signup" className="nav-link">Signup</Link>
		      </li>
		    </ul>
		  </div>
		</nav>

  );
}

