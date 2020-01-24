import React, {useState, useEffect, Fragment} from 'react';
import {connect}                              from 'react-redux';
import {withRouter}                           from 'react-router-dom';
import {}                                     from '../../../actions';
import Sidebar                                from "../Sidebar";
import Footer                                 from "../../Shared/Footer";
import Nav                                    from "../Nav";
import Search                                 from "../Search";
import Cards                                  from "./Cards";
import Slots                                  from "./Slots";
import FulfilledSlots                         from "./FullfilledSlots";
import {slots, fulfilledWishes}               from './data';
import './user-dashboard.css'

function Dashboard (props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    document.title = `User Dashboard`;
    setUser(props.user);
  }, [props.user]);

  return (
    <Fragment>
      <div className="wrapper d-flex">
        <Sidebar/>
        <div className="container-fluid">
          <Nav user={user}/>
          <Search/>
          <Cards openWishCount={203} fulfilledWishCount={16} pendingWishCount={823}/>
          <div className="slots-wrapper d-lg-flex justify-content-between">
            <Slots slots={slots}/>
            <FulfilledSlots fulfilledWishes={fulfilledWishes}/>
          </div>
        </div>
        <Footer/>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.setCurrentUser.user
  }
};

export default connect(mapStateToProps, {})(withRouter(Dashboard));
