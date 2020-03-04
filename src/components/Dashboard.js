import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getAllSlots } from '../actions'
import SlotCard from './Commons/SlotCards';


function Dashboard({ getAllSlots, slotCount }) {
    const [openSlot, setOpenSlot] = useState("0");
    const [pendWish, setPendWish] = useState("823");
    const [fulwish, setFulWish] = useState("16");


    useEffect(() => {
        getAllSlots()
    }, [])

    useEffect(() => {
        setOpenSlot(slotCount.itemCount)
    }, [slotCount])

    return (
        <Fragment>
            <div className="wrapper d-flex">
                <div className="side-nav d-none d-lg-flex h-100 px-0 flex-column">
                    <div className="ds-brand-name flex-grow-1 px-2 pt-4">
                        <a href="/">wishBox</a>
                    </div>
                    <div className="flex-grow-1 d-lg-flex flex-column align-items-center justify-content-between">
                        <span>
                            <a href="#">
                                <i className="fa fa-th-large"></i>
                                Home
                    </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fa fa-folder-open-o"></i>
                                Slots
                    </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fa fa-dropbox"></i>
                                Wishes
                    </a>
                        </span>
                        <span>
                            <a href="#">
                                <i className="fa fa-star"></i>
                                Fulfiled
                    </a>
                        </span>
                    </div>
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
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter
                            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <form className="form-inline has-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input className="form-control mr-sm-2" type="search" placeholder="find.." aria-label="Search" />
                                </form>
                            </ul>
                        </nav>
                    </div>
                    <div className="dash-cards d-flex">
                        <SlotCard cardNumber={openSlot} cardCaption={'All Open Slots'} />
                        <SlotCard cardNumber={pendWish} cardCaption={'All your Pending Wishes'} />
                        <SlotCard cardNumber={fulwish} cardCaption={'All your Fulfiled Wishes'} />


                    </div>
                    <div className="slots-wrapper d-lg-flex justify-content-between">
                        <div className="slots">
                            <div className="slot-header">
                                <div>
                                    <h3>RECENT SLOT CREATED</h3>
                                </div>
                                <div>
                                    <a href="">
                                        See All Slots
                            </a>
                                </div>
                            </div>
                            <div className="slot-list">
                                <div className="list-header">
                                    <h4>Name of slot</h4>
                                    <h4>Number of wishes</h4>
                                    <h4>Closing Date</h4>
                                </div>
                                <div className="list">
                                    <a className="list-item" href="#">
                                        <span><strong>D</strong>December wishbox</span>
                                        <span>2000 wishes</span>
                                        <span className="text-right">16/06/19</span>
                                    </a>
                                    <a className="list-item" href="#">
                                        <span><strong>D</strong>December wishbox</span>
                                        <span>2000 wishes</span>
                                        <span className="text-right">16/06/19</span>
                                    </a>
                                    <a className="list-item" href="#">
                                        <span><strong>D</strong>December wishbox</span>
                                        <span>2000 wishes</span>
                                        <span className="text-right">16/06/19</span>
                                    </a>
                                    <a className="list-item" href="#">
                                        <span><strong>D</strong>December wishbox</span>
                                        <span>2000 wishes</span>
                                        <span className="text-right">16/06/19</span>
                                    </a>
                                    <a className="list-item" href="#">
                                        <span><strong>D</strong>December wishbox</span>
                                        <span>2000 wishes</span>
                                        <span className="text-right">16/06/19</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="fulfiled-slots">
                            <h4 className="fulfiled-header">RECENTLY FULFILED WISHES</h4>
                            <div className="fulfiled-list">
                                <div className="fulfiled-list-header">
                                    <span>Fulfiled:</span>
                                    <span>31 June, 2019</span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="fulfiled-list-body">
                                    I wish for new pair of nike airmax,
                                    that all i really need right now, my old shoes are bad
                        </div>
                            </div>
                            <div className="fulfiled-list">
                                <div className="fulfiled-list-header">
                                    <span>Fulfiled:</span>
                                    <span>31 June, 2019</span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="fulfiled-list-body">
                                    I wish for new pair of nike airmax,
                                    that all i really need right now, my old shoes are bad
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue">
                <span className="copy-right">&copy; wishBox. All rights reserved </span>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>

                </ul>
            </footer>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    //  console.log(state.slots.meta_data, 'state');
    const slotList = state.slots.data
    const slotCount = state.slots.meta_data || {}
    return { slotList, slotCount }
}
export default connect(mapStateToProps, { getAllSlots })(Dashboard);