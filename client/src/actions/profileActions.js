import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';
// GET_ERRORS


//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('http://localhost:4000/api/profile')
    .then(response => {
      console.log(response)
      dispatch({
        type: GET_PROFILE,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    })
}

//Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}
