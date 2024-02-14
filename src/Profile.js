// Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-photo">
        <img src="profile-photo.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>John Doe</h1>
        <p>Email: john@example.com</p>
        <p>Position: Software Engineer</p>
      </div>
    </div>
  );
};

export default Profile;
