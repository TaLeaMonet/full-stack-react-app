import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return(
      <div id="root">
      <header>
        <div className="wrap header--flex">
          <h1 className="header--logo">
            <Link to="/">Courses</Link>
          </h1>
          <nav>
            {authUser ? (
              <React.Fragment>
                <ul className="header--signedin">
                <span>Welcome, {authUser.user.firstName}!</span>
                <li>
                <Link className="signedout" to="/signout">Sign Out</Link>
              </li>

            </ul>
            </React.Fragment>
              ) : (
            <React.Fragment>
            <ul className="header--signedout">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
            </React.Fragment>
              )}
          </nav>
        </div>
      </header>
    </div>    
    )
}
}


