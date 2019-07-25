import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

//Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:4000/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
};

//Login Get user token
export const loginUser = (userData) => dispatch => {
  axios
    .post('http://localhost:4000/api/users/login', userData)
    .then(res => {
      //Save to localstorage
      const { token } = res.data;
      //Set token to localstorage
      localStorage.setItem('jwtToken', token);
      //Set token to Auth Header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded)
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}

//Set logged in user
export const setCurrentUser = (decoded) => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
