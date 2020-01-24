import React, {Component}  from 'react';
import {Router, Route}     from 'react-router-dom';
import {createHashHistory} from 'history'
import CheckLoggedInUser   from './utils/CheckLoggedInUser'
import {PrivateRoute}      from './utils/PrivateRoute'
// import { AdminPrivateRoute } from './utils/AdminPrivateRoute'
// import AdminSignup from './components/AdminSignup';
// import AdminLogin from './components/AdminLogin';
// import Client from './components/Client';
// import Deposite from './components/Deposite';
import Signup              from './components/Authentication/Signup';
import Signin              from './components/Authentication/Signin';
import Home                from './components/Home'
import Dashboard           from './components/User/Dashboard/Dashboard';
// import AdminDashboard from './components/AdminDashboard';
// import Transfer from './components/Transfer';

const hashHistory = createHashHistory({basename: process.env.PUBLIC_URL});

function App () {
  return (
    <Router history={hashHistory}>
      <div id="app">
        {/* <PrivateRoute exact path="/parcel/:id" component={ViewParcel} />
          <PrivateRoute exact path="/parcel" component={BookParcel} />*/}
        {/* <AdminPrivateRoute exact path="/admin/clients" component={AdminDashboard} />  */}
        {/* <AdminPrivateRoute exact path="/admin/clients/:userId" component={Client} /> */}
        {/* <AdminPrivateRoute exact path="/admin/client/new" component={Signup} /> */}
        {/* <AdminPrivateRoute exact path="/admin/clients/:userId/deposite" component={Deposite} />
        <PrivateRoute exact path="/transfer" component={Transfer} />
        <Route exact path="/admin/signup" component={CheckLoggedInUser(AdminSignup)} />
        <Route exact path="/admin/signin" component={CheckLoggedInUser(AdminLogin)} />*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={CheckLoggedInUser(Signin)}/>
        <Route exact path="/signup" component={CheckLoggedInUser(Signup)}/>
      </div>
    </Router>
  )
}

export default App;
