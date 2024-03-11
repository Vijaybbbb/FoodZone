import React from 'react';
import './Profile.css';
import UserNavbar from '../UserNavBar/UserNavbar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const user = useSelector(state=> state.userData)
  const navigate = useNavigate()

  return (
    <div>
    <UserNavbar/>
    <div className="profile-container">
      <div className="qcard">
        <div className="qcard-img">
          <img src="https://octodex.github.com/images/codercat.jpg" alt="profile" />
        </div>
        <div className="qdesc">
          <h6 className="qprimary-text">{user?.email}</h6><br />
          <h6 className="qsecondary-text">Member</h6>
        </div>
        <button id="qbutton" className="qprimary-text" onClick={()=>{
          navigate('/')
          localStorage.clear()
        }}>Log Out</button>
        <div className="qdetails">
          <div className="qrating">
            <h6 className="qprimary-text">86%</h6>
            <h6 className="qsecondary-text">Rating</h6>
          </div>
          <div className="qactivity">
            <h6 className="qprimary-text">92%</h6>
            <h6 className="qsecondary-text">Activity</h6>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Profile;
