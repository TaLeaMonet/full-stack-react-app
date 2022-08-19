import React from 'react';

class UserSignUp extends Component {

    state = {
     signUp: false
    }
  
    render() {
      return(
        <div id="root">
        <header>
          <div className="wrap header--flex">
            <h1 className="header--logo">
              <a href="index.html">Courses</a>
            </h1>
            <nav>
              <ul className="header--signedout">
                <li>
                  <a href="sign-up.html">Sign Up</a>
                </li>
                <li>
                  <a href="sign-in.html">Sign In</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className="form--centered">
            <h2>Sign Up</h2>
            <form>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" defaultValue="" />
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" defaultValue="" />
              <label htmlFor="emailAddress">Email Address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                defaultValue=""
              />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" defaultValue="" />
              <button className="button" type="submit">
                Sign Up
              </button>
              <button
                className="button button-secondary"
                onclick="event.preventDefault(); location.href='index.html';"
              >
                Cancel
              </button>
            </form>
            <p>
              Already have a user account? Click here to{" "}
              <a href="sign-in.html">sign in</a>!
            </p>
          </div>
        </main>
      </div>      
      )
    }
  }

  export default UserSignUp; 