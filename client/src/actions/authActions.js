import axios from 'axios';
import { GET_ERRORS } from './types';

//Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:4000/api/users/register', userData)
    // .then(res => history.push('/login'))
    .then(res => console.log('/login'))
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
};
