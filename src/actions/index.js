import axios        from 'axios';
import jwtDecode    from 'jwt-decode';
import swal         from 'sweetalert';
import setAuthToken from '../utils/SetAuthToken';
import {
  USER_AUTHENTICATED, CREATE_PARCEL_SUCCESS,
  CREATE_PARCEL_FAIL, GET_PARCELS_SUCCESS,
  GET_PARCELS_ERROR, GET_PARCEL_SUCCESS, GET_PARCEL_ERROR,
  UPDATE_PARCEL_SUCCESS, UPDATE_PARCEL_ERROR,
  SIGN_UP_USER_ERROR
}                   from './constants';

// const API = 'https://creditdeliveries.herokuapp.com';
const API = 'http://localhost:3001';

/**
 *
 *
 * @export
 * @param {any} user
 * @returns {void}
 */
export function setCurrentUser (user) {
  return {
    type: USER_AUTHENTICATED,
    user
  };
}

export function signupErros (errors) {
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
 * @returns {boolean}
 */
export function SigninRequest (userData) {
  return dispatch => axios.post(`${API}/v1/login`, userData)
    .then(res => {
      const token = registerToken(res.data);
      dispatch(setCurrentUser(decode(token)));
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
function registerToken ({token}) {
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);

  return token;
}

/**
 *
 *
 * @desc this method signs up a user
 * @param {object} userData
 * @returns {boolean}
 */
export function SignupRequest (userData) {
  return dispatch => axios.post(`${API}/v1/signup`, userData)
    .then(res => {
      const token = registerToken(res.data);
      dispatch(setCurrentUser(decode(token)));
    }).catch(({response}) => {
      dispatch(signupErros({errors: response.data}));
      return false;
    })
}


// const createParcelSuccess = parcel => ({ type: CREATE_PARCEL_SUCCESS, parcel });

// const createParcelFail = parcel => ({ type: CREATE_PARCEL_FAIL, parcel });
// /**
//  * 
//  * 
//  * @desc this method signs up a user 
//  * @param {any} userData 
//  * @returns {void}
//  */
// export function createParcel(parcelData) {
//   return dispatch => axios.post(`${API}/api/v1/admin/parcel`, parcelData).then(res => {
//       swal({
//           title: "Hi there!",
//           text: res.data.message,
//           icon: "success"
//         });
//     dispatch(setCurrentUser(createParcelSuccess(res.data)));
//   }).catch((err)=> {
//     dispatch(setCurrentUser(createParcelFail(err)));
//   })
// }


// const getParcelsSuccess = parcels =>
//   ({ type: GET_PARCELS_SUCCESS, parcels });

// const getParcelsFailed = parcels =>
//   ({ type: GET_PARCELS_ERROR, parcels });
// /**
//    * @function getAllBill
//    *
//    * @param { number } page
//    *
//    * @returns {object} dispatches an action
//    *
//    * @description It gets all the existing bills
//    */
// export const getAllParcels = () =>
//   dispatch => axios.get(`${API}/api/v1/admin/parcel`)
//     .then((response) => {
//       dispatch(getParcelsSuccess(response.data));
//     })
//     .catch((err) => {
//       dispatch(getParcelsFailed(err.response.data.message,));
//     });

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
function decode (token) {
  return jwtDecode(token);
}