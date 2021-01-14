import React, { useState, useEffect, Fragment } from "react";
import {NavLink, Link} from 'react-router-dom'
import moment from 'moment'
import { connect } from "react-redux";

import { getAllSlots, getAllPendingWishes, getAllFulfilledWishes } from "../actions";
import SlotCard from "./Commons/SlotCards";
import Footer from "./Commons/Footer";
import SideBar from "./Commons/SideBar";

function Dashboard({
  getAllSlots,
  getAllPendingWishes,
  getAllFulfilledWishes,
  slotCount,
  pendingCount,
  fulfiledCount,
  user,
  slotList,
  wishes
}) {
  const [openSlot, setOpenSlot] = useState("0");
  const [pendingWish, setPendWish] = useState("0");
  const [fulfiledWish, setfulfiledWish] = useState("0");
  const [slotItems, setSLotItems] = useState([]);
  //   console.log(openSlot, pendWish, fulfilWish, "hello there");

  useEffect(() => {
    getAllSlots();
    getAllPendingWishes(user._id);
    getAllFulfilledWishes(user._id);
  }, [
    getAllSlots,
    getAllPendingWishes,
    getAllFulfilledWishes,
    user,
  ]);

  useEffect(() => {
    setOpenSlot(slotCount.itemCount);
    setPendWish(pendingCount.itemCount);
    setfulfiledWish(fulfiledCount.itemCount);
    setSLotItems(slotList);
  }, [slotCount, pendingCount, fulfiledCount, slotList, wishes]);
  // console.log(slotCount, openSlot, 'user id')
  return (
    <Fragment>
      <div className="wrapper d-flex">
        <div className="side-nav d-none d-lg-flex h-100 px-0 flex-column">
          <div className="ds-brand-name flex-grow-1 px-2 pt-4">
            <a href="/">wishBox</a>
          </div>
          <SideBar page={'dashboard'} isActive={'is-active'}/>
          <div className="flex-grow-1"></div>
        </div>
        <div className="container-fluid">
          <nav className="profile-notif">
            <ul className="nav justify-content-end mt-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bell-o"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user-circle-o"></i>
                </a>
              </li>
            </ul>
          </nav>
          <div className="filter">
            <nav className="profile-notif">
              <ul className="nav justify-content-end mt-2">
                <li className="nav-item dropdown px-4">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Filter
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <form className="form-inline has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    id="navSearch"
                    placeholder="find.."
                    aria-label="Search"
                  />
                </form>
              </ul>
            </nav>
          </div>
          <div className="dash-cards d-flex">
            <SlotCard
              iconType="fa fa-folder-open-o folder"
              cardNumber={openSlot}
              cardCaption={"All Open Slots"}
            />
            <SlotCard
              iconType="fa fa-dropbox box"
              cardNumber={pendingWish}
              cardCaption={"All your Pending Wishes"}
            />
            <SlotCard
              iconType="fa fa-star star"
              cardNumber={fulfiledWish}
              cardCaption={"All your Fulfiled Wishes"}
            />
          </div>
          <div className="slots-wrapper d-lg-flex justify-content-between">
            <div className="slots">
              <div className="slot-header">
                <div>
                  <h3>RECENT SLOT CREATED</h3>
                </div>
                <div>
                  <a href="">See All Slots</a>
                </div>
              </div>
              <div className="slot-list">
                <div className="list-header">
                  <h4>Name of slot</h4>
                  <h4>Status</h4>
                  <h4>Closing Date</h4>
                </div>
                <div className="list">
                  {slotItems.length > 0 ? (
                    slotItems
                      .slice(0, 5)
                      .map(({ title, endDate, open }, index) => {
                        return (
                          <Link className="list-item" to="#" key={index}>
                            <span>
                              <div>{title.substring(0, 1).toUpperCase()}</div>
                              {title}
                            </span>
                            <span>{open ? "OPEN" : "CLOSED"}</span>
                            <span className="text-right">
                              {moment(endDate).format("DD/MM/YYYY")}
                            </span>
                          </Link>
                        );
                      })
                  ) : (
                    <div className="list-header empty-wish">
                      No wishes made yet
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="fulfiled-slots">
              <h4 className="fulfiled-header">RECENTLY FULFILED WISHES</h4>
              <div className="fulfiled-list">
                <div className="fulfiled-list-header">
                  <span>Fulfiled:</span>
                  <span>31 June, 2019</span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="fulfiled-list-body">
                  I wish for new pair of nike airmax, that all i really need
                  right now, my old shoes are bad
                </div>
              </div>
              <div className="fulfiled-list">
                <div className="fulfiled-list-header">
                  <span>Fulfiled:</span>
                  <span>31 June, 2019</span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="fulfiled-list-body">
                  I wish for new pair of nike airmax, that all i really need
                  right now, my old shoes are bad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = (state) => {
   console.log(state, 'state');
  const user = state.setCurrentUser.user;
  const slotList = state.slots.data || [];
  const slotCount = state.slots.meta_data || {};
  const pendingCount = state.wishes.pendingWishes.meta_data || {};
  const fulfiledCount = state.wishes.fulfilledWishes.meta_data || {};
  return { slotList, slotCount, user, pendingCount, fulfiledCount };
};
export default connect(mapStateToProps, {
  getAllSlots,
  getAllPendingWishes,
  getAllFulfilledWishes,
})(Dashboard);
