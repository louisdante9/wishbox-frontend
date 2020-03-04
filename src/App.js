import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createHashHistory} from 'history'
import CheckLoggedInUser   from './utils/CheckLoggedInUser'
import {PrivateRoute} from './utils/PrivateRoute'
// import { AdminPrivateRoute } from './utils/AdminPrivateRoute'
// import AdminSignup from './components/AdminSignup';
// import AdminLogin from './components/AdminLogin';
// import Client from './components/Client';
// import Deposite from './components/Deposite';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import Home from './components/Home'
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/Admin/Dashboard';
// import Transfer from './components/Transfer';

const hashHistory = createHashHistory({basename: process.env.PUBLIC_URL});

class App extends Component {
  render() {
    console.log(this.props, 'helo tere')
  return (
    <Router history={hashHistory}>
      <div id="app">
        <Switch>

        {/* <PrivateRoute exact path="/parcel/:id" component={ViewParcel} />
          <PrivateRoute exact path="/parcel" component={BookParcel} />*/}
         <PrivateRoute role={this.props.role} requiredRoles= {[ 'admin', 'superadmin']} exact path="/admin/dashboard" component={AdminDashboard} /> 
         <PrivateRoute role={this.props.role} requiredRoles= {['user']} exact path="/dashboard" component={Dashboard} /> 
        {/* <AdminPrivateRoute exact path="/admin/clients/:userId" component={Client} /> */}
        {/* <Route exact path="/dashboard" component={AdminDashboard}/> */}
        {/* <AdminPrivateRoute exact path="/admin/clients/:userId/deposite" component={Deposite} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
        <PrivateRoute exact path="/transfer" component={Transfer} /> 
        <Route exact path="/admin/signup" component={CheckLoggedInUser(AdminSignup)} />
      <Route exact path="/admin/signin" component={CheckLoggedInUser(AdminLogin)} />*/}
        <Route exact path="/signup" component={CheckLoggedInUser(Signup)}/>
      </Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={CheckLoggedInUser(Signin)}/>
      </div>
    </Router>
  )
 }
}
const mapStateToProps = state => ({
  role: state.setCurrentUser.user.role,
});
export default connect(mapStateToProps, null)(App);
