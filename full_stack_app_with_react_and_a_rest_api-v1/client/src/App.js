import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import withContext from './components/Context';
import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';









const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const HeaderWithContext = withContext(Header);
// const AuthWithContext = withContext(Authenticated);

const  App = () => {
  return (
    <div>
       <Router>
   <div>
   <HeaderWithContext />
   <CreateCourse /> 
   <Switch>
    <Route exact path="/" component={Courses} />
    {/* <Route path="/authenticated" component={AuthWithContext} />  */}
     <PrivateRoute path="/courses/create" component={CreateCourse} />
    <PrivateRoute path="/courses/:id/update" component={UpdateCourse} /> 
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
