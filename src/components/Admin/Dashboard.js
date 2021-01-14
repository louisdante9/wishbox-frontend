import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import moment from 'moment';

import { getAllSlots, getAllWishes, getAllFulfilledWishes } from '../../actions'
import Footer from '../Commons/Footer';
// import logo from '../../assests/logo.png'



function AdminDashboard({ getAllSlots, getAllWishes,
    getAllFulfilledWishes, admin, slotCount,
    allWishesCount, allFulfilledWishesCount }) {
    const [openSlot, setOpenSlot] = useState("0");
    const [allWish, setAllWish] = useState("0");
    const [fulwish, setFulWish] = useState("0");
    const [activeAll, setActiveAll] = useState('active')
    const [activePro, setActivePro] = useState('')
    const [activeComp, setActiveComp] = useState('')
    const [status, setStatus] = useState(true)


    useEffect(() => {
        getAllSlots();
        getAllFulfilledWishes();
        getAllWishes();
    }, [])

    useEffect(() => {
        setOpenSlot(slotCount.length)
        setAllWish(allWishesCount.length)
        setFulWish(allFulfilledWishesCount.length)
    }, [slotCount, allWishesCount, allFulfilledWishesCount])

    const handleActiveClass = (e, btn) => {
        e.preventDefault()
        if (btn === 'a') {
            setActiveAll('active')
            setActivePro('')
            setActiveComp('')
        }
        if (btn === 'b') {
            setActiveAll('')
            setActivePro('active')
            setActiveComp('')
            setStatus(true)
        }
        if (btn === 'c') {
            setActiveAll('')
            setActivePro('')
            setActiveComp('active')
            setStatus(false)
        }
    }
    const fullName = admin.name.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    // console.log(slotCount, 'slots list')
    const slotInProgress = slotCount.filter((slot) => slot.open === true);
    const slotListAll = slotCount.map((slot) => {
        return <div className="admin-slot-item admin-slots" key={slot._id}>
            <div className="slot-item-statusbar admin-status">
                <div></div>
                <div>{moment(slot.startDate).format('D dddd, MMMM YYYY')} - {moment(slot.endDate).format('D dddd, MMMM YYYY')}</div>
            </div>
            <div className="slot-item-title admin-title">
                <p>
                    {slot.title.toUpperCase()}
                </p>
                <p className={slot.open === true ? 'open' : 'closed'}>
                    {slot.open === true ? 'OPEN' : 'CLOSED'}
                </p>
            </div>
            <div className="slot-item-desc admin-desc">
                <p>
                    {slot.details}
                </p>
            </div>
        </div>
    })
    let slotList = slotCount.map((slot) => {
        if (slot.open === status) {
            return <div className="admin-slot-item admin-slots" key={slot._id}>
                <div className="slot-item-statusbar admin-status">
                    <div></div>
                    <div>{moment(slot.startDate).format('D dddd, MMMM YYYY')} - {moment(slot.endDate).format('D dddd, MMMM YYYY')}</div>
                </div>
                <div className="slot-item-title admin-title">
                    <p>
                        {slot.title.toUpperCase()}
                    </p>
                    <p className={slot.open === true ? 'open' : 'closed'}>
                        {slot.open === true ? 'OPEN' : 'CLOSED'}
                    </p>
                </div>
                <div className="slot-item-desc admin-desc">
                    <p>
                        {slot.details}
                    </p>
                </div>
            </div>
        }
    }, status)
    return (
        <Fragment>
            <div className="admin-nav">
                <nav className="profile-notif">
                    <div className="ds-brand-name flex-grow-1 px-2 pt-4">
                        <NavLink to="/">wishBox</NavLink>
                    </div>
                    <div className="flex-grow-1 d-lg-flex flex align-items-center justify-content-center">
                        <span>
                            <NavLink 
                            exact={true} 
                            activeClassName='is-active'
                            to="/admin/dashboard">
                                Dashboard
                            </NavLink>
                        </span>
                        <span>
                            <NavLink to="#">
                                Wishes
                            </NavLink>
                        </span>
                        <span>
                            <NavLink to="#">
                                Fulfilments
                            </NavLink>
                        </span>
                    </div>
                    <div className="flex-grow-1">
                        <ul className="nav justify-content-center mt-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-bell-o"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {/* <i className="fa fa-user-circle-o"></i> */}
                                    <img src={require('../../assests/logo.png')} alt="logo" className="logo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="wrapper d-flex">

                <div className="container-fluid">

                    <div className="main-wrapper admin-profile-wrapper">
                        <div className="left">

                            <div>
                                <div className="setting-icon">
                                    <i className="fa fa-cog"></i>
                                </div>
                                <div className="img-frame">
                                    <img src={require('../../assests/logo.png')} alt="profile image" />
                                </div>
                                <h5 className="usr-name">{fullName}</h5>
                                <div className="usr-stats">
                                    <div>
                                        <p>SLOTS</p>
                                        <p>{openSlot}</p>
                                    </div>
                                    <div>
                                        <p>WISHES</p>
                                        <p>{allWish}</p>
                                    </div>
                                    <div>
                                        <p>FULFILMENTS</p>
                                        <p>{fulwish}</p>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg btn-create-slot">Create a Slot</button>
                            </div>

                            <div className="slot-bar admin-slot-bar">
                                <h4>SLOTS</h4>
                                <div className={activeAll} onClick={(e) => handleActiveClass(e, 'a')}>
                                    All
                                </div>
                                <div className={activePro} onClick={(e) => handleActiveClass(e, 'b')}>
                                    In Progress
                                </div>
                                <div className={activeComp} onClick={(e) => handleActiveClass(e, 'c')}>
                                    Completed
                                </div>

                            </div>
                        </div>
                        <div className="right">
                            <div className="d-lg-flex flex justify-content-between">
                                <div>
                                    <h3>Slots</h3>
                                    <p>{slotInProgress.length} in progress</p>
                                </div>
                                <div className="d-lg-flex flex align-items-center">


                                    <form className="form-inline has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input className="form-control mr-sm-2 " type="search" placeholder="find..."
                                            aria-label="Search" id="slot-search" />
                                    </form>
                                </div>
                            </div>
                            <div className="wish-slot-wrapper">
                                {(activeAll === 'active') ? slotListAll : slotList}
                            </div>
                            <div aria-label="Page navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}


const mapStateToProps = (state) => {
    // console.log(state, 'state');
    const admin = state.setCurrentUser.user
    const slotList = state.slots.data
    const slotCount = state.slots.data || []
    const allWishesCount = state.wishes.allWishes.data || []
    const allFulfilledWishesCount = state.fulfilled.fulfilledWishes.data || []

    return { admin, slotList, slotCount, allWishesCount, allFulfilledWishesCount }
}

export default connect(mapStateToProps, { getAllSlots, getAllWishes, getAllFulfilledWishes })(AdminDashboard);