import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
import withContext from './components/Context';
//import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCourse from './components/CreateCourse';





const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const HeaderWithContext = withContext(Header);

const  App = () => {
  return (
    <div>
       <Router>
   <div>
   <HeaderWithContext />
   <CreateCourse/>
   <Switch>
    {/* <Route exact path="/" component={Public} /> */}
    {/* <Route path="/authenticated" component={Authenticated} /> */}
    {/* <PrivateRoute path="/courses/create" component={CreateCourse} />
    <PrivateRoute path="/courses/:id/update" component={UpdateCourse} /> */}
    <Route path="/signin" component={UserSignInWithContext} />
    <Route path="/signup" component={UserSignUpWithContext} />
    <Route path="/signout" component={UserSignOutWithContext} />
    <Route path="/error" component={NotFound} />
  </Switch>
</div>
   </Router>
   </div>
  );
}

export default App;
