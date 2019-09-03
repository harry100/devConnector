import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return(
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <img src="/images/user.svg" alt="user" style={{height: "15px", width: "15px", marginRight: "10px"}} /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <img src="/images/suitcase.svg" alt="user" style={{height: "15px", width: "15px", marginRight: "10px"}} /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <img src="/images/mortarboard.svg" alt="user" style={{height: "15px", width: "15px", marginRight: "10px"}} />Add Education
      </Link>
    </div>
  )
}

export default ProfileActions;
