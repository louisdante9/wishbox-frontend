import axios from 'axios';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert';
import setAuthToken from '../utils/SetAuthToken';
import {
  USER_AUTHENTICATED, CREATE_SLOT_SUCCESS,
  CREATE_SLOT_FAIL, GET_SLOT_SUCCESS,
  GET_SLOT_ERROR,
  GET_ALL_WISHES_SUCCESS, GET_ALL_WISHES_ERROR,
  GET_ALL_PENDING_WISHES_SUCCESS, GET_ALL_PENDING_WISHES_ERROR,
  GET_ALL_FULFILLED_WISHES_SUCCESS, GET_ALL_FULFILLED_WISHES_ERROR,
  SIGN_UP_USER_ERROR
} from './constants';

// const API = 'https://creditdeliveries.herokuapp.com';
const API = 'http://localhost:9000';

/**
 *
 *
 * @export
 * @param {any} user
 * @returns {void}
 */
export function setCurrentUser(user) {
  return {
    type: USER_AUTHENTICATED,
    user
  };
}

export function signupErros(errors) {
  return {
    type: SIGN_UP_USER_ERROR,
    errors
  };
}

/**
 *
 *
 * @desc this function signs in a user
 * @param {object} responseData
 * @returns {function}
 */
export function SigninRequest(userData) {
  return dispatch => axios.post(`${API}/v1/login`, userData)
    .then(res => {
      const token = registerToken(res.data);
      dispatch(setCurrentUser(decode(token)));
      return decode(token)
    });
}

/**
 *
 *
 * @desc this function register the returned jwt token to
 * localstorage and pass it to axios header
 * @param {object} data
 * @returns {string}
 */
function registerToken({ token }) {
  window.localStorage.setItem('token', token);
  setAuthToken(token);
  return token;
}

/**
 *
 *
 * @desc this method signs up a user
 * @param {object} userData
 * @param callback
 * @returns {function}
 */
export function SignupRequest(userData, callback) {
  return dispatch => axios.post(`${API}/v1/signup`, userData)
    .then(res => {
      const token = registerToken(res.data);
      dispatch(setCurrentUser(decode(token)));
      return callback(res);
    }).catch(({ res }) => {
      dispatch(signupErros({ errors: res }));
      return callback(res);
    })
}


const createSlotSuccess = slot => ({ type: CREATE_SLOT_SUCCESS, slot });

const createSlotFail = slot => ({ type: CREATE_SLOT_FAIL, slot });
/**
 * 
 * 
 * @desc this method signs up a user 
 * @param {any} userData 
 * @returns {void}
 */
export function createSlot(slotData) {
  return dispatch => axios.post(`${API}/v1/slot`, slotData).then(res => {
    swal({
      title: "Hi there!",
      text: res.data.message,
      icon: "success"
    });
    dispatch(setCurrentUser(createSlotSuccess(res.data)));
  }).catch((err) => {
    dispatch(setCurrentUser(createSlotFail(err)));
  })
}


const getSlotSuccess = slots =>
  ({ type: GET_SLOT_SUCCESS, payload: slots });

const getSlotFailed = slots =>
  ({ type: GET_SLOT_ERROR, payload: slots });
/**
   * @function getAllBill
   *
   * @param { number } page
   *
   * @returns {object} dispatches an action
   *
   * @description It gets all the existing bills
   */
export const getAllSlots = () =>
  dispatch => axios.get(`${API}/v1/slots`)
    .then((response) => {
      // return console.log(response.data, 'this is a test')
      dispatch(getSlotSuccess(response.data));
    })
    .catch((err) => {
      // return console.log(err, 'error is here')
      dispatch(getSlotFailed(err.data.message));
    });


const getAllWishesSuccess = allWishes =>
  ({ type: GET_ALL_WISHES_SUCCESS, payload: allWishes });

const getAllWishesFailed = allWishes =>
  ({ type: GET_ALL_WISHES_ERROR, payload: allWishes });

/**
 * @function getAllWishes
 *
 * @param { number } page
 *
 * @returns {object} dispatches an action
 *
 * @description It gets all the existing bills
 */
export const getAllWishes = () =>
  dispatch => axios.get(`${API}/v1/wishes`)
    .then((response) => {
      // return console.log(response)
      dispatch(getAllWishesSuccess(response.data));
    })
    .catch((err) => {
      // return console.log(err, 'error is here')
      dispatch(getAllWishesFailed(err.data.message));
    });

// const getAllPendingSuccess = allPendingWishes =>
//   ({ type: GET_ALL_PENDING_WISHES_SUCCESS, payload: allPendingWishes });

// const getAllPendingFailed = allPendingWishes =>
//   ({ type: GET_ALL_PENDING_WISHES_ERROR, payload: allPendingWishes });

// /**
//  * @function getAllPendingWishes
//  *
//  * @param { number } page
//  *
//  * @returns {object} dispatches an action
//  *
//  * @description It gets all the existing bills
//  */
// export const getAllPendingWishes = () =>
//   dispatch => axios.get(`${API}/v1/wishes?status=pending`)
//     .then((response) => {
//       dispatch(getAllPendingSuccess(response.data));
//     })
//     .catch((err) => {
//       // return console.log(err, 'error is here')
//       dispatch(getAllPendingFailed(err.data.message));
//     });


const getAllFulfilledSuccess = allFulfilledWishes =>
  ({ type: GET_ALL_FULFILLED_WISHES_SUCCESS, payload: allFulfilledWishes });

const getAllFulfilledFailed = allFulfilledWishes =>
  ({ type: GET_ALL_FULFILLED_WISHES_ERROR, payload: allFulfilledWishes });

/**
 * @function getAllFulfilledWishes
 *
 * @param { number } page
 *
 * @returns {object} dispatches an action
 *
 * @description It gets all the existing bills
 */
export const getAllFulfilledWishes = () =>
  dispatch => axios.get(`${API}/v1/wishes?status=fulfilled`)
    .then((response) => {
      dispatch(getAllFulfilledSuccess(response.data));
    })
    .catch((err) => {
      // return console.log(err, 'error is here')
      dispatch(getAllFulfilledFailed(err.data.message));
    });


// /**
//  * 
//  * 
//  * @desc this method logs out a user
//  * @returns {void}
//  */
// export function logout() {
//   return dispatch => {
//     localStorage.removeItem('jwtToken');
//     setAuthToken(false);
//     dispatch(setCurrentUser({}));
//   };
// }


// const getAParcelSuccess = parcel =>
//   ({ type: GET_PARCEL_SUCCESS, parcel });

// const getAParcelFailed = parcel =>
//   ({ type: GET_PARCEL_ERROR, parcel });

// /**
//    * @function getABill
//    *
//    * @param { number } Id
//    *
//    * @returns {object} dispatches an action
//    *
//    * @description It gets a single bill by Id
//    */
// export const getAParcel = id => dispatch =>{
//   // return console.log(id, 'hello there')
//   axios.get(`${API}/api/v1/admin/parcel/${id}`)
//     .then((response) => {
//       //  return console.log(response)
//       dispatch(getAParcelSuccess(response.data));
//     })
//     .catch((error) => {
//       swal({
//         title: "Oops!",
//         text: `Sorry ${error.response.data.message}`,
//         icon: "error"
//       });
//       dispatch(getAParcelFailed(error.response.data.message));
//     });
//   }
//     const updateAParcelSuccess = parcel =>
//     ({ type: UPDATE_PARCEL_SUCCESS, parcel });

//   const updateAParcelFailed = parcel =>
//     ({ type: UPDATE_PARCEL_ERROR, parcel });

//   /**
//      * @function getABill
//      *
//      * @param { number } Id
//      *
//      * @returns {object} dispatches an action
//      *
//      * @description It gets a single bill by Id
//      */
//   export function updateAParcel (id, obj) { 
//     return dispatch =>
//     axios.post(`${API}/api/v1/admin/parcel/${id}`, obj)
//       .then((response) => {
//         dispatch(updateAParcelSuccess(response.data));
//       })
//       .catch((error) => {
//         console.log(error)
//         swal({
//           title: "Oops!",
//           text: `Sorry ${error.response.data.message}`,
//           icon: "error"
//         });
//         dispatch(updateAParcelFailed(error.response.data.message));
//       });
//     }

/**
 *
 * @desc this function returns a jwt token
 * @param {any} token
 * @returns {void}
 */
function decode(token) {
  return jwtDecode(token);
}