import React, { useState, useEffect, useContext } from 'react';
import { LogContext } from '../context/LogContext';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const { logEmail } = useContext(LogContext);
  const [userData, setUserData] = useState(null);
  const [newAddress, setNewAddress] = useState("");
  useEffect(() => {
    if (logEmail) {
      axios.get(`http://localhost:3001/user/${logEmail}`)
        .then(response => setUserData(response.data))
        .catch(error => console.error("Error fetching user data:", error));
    }
  }, [logEmail]);

  if (!userData) {
    return <h2>Loading profile...</h2>;
  }

  const updateAddress = () => {
    axios.put('http://localhost:3001/update-address', {
      Email: logEmail,
      address: newAddress
    })
      .then(response => {
        alert("Address updated successfully!");
        setUserData(response.data.user);
      })
      .catch(error => alert("Failed to update address"));
  };

  return (
    <div className='Profile'>
      <div className='profile-cover'>
        <h1>Profile</h1>
        <div className="profile-container">
          <p><strong>Full Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.Email}</p>
          <p><strong>Phone:</strong> {userData.PhoneNo}</p>
          <div className="profile-address">
          <strong>Address:</strong>
          <p> {userData.address} </p>
          </div>
          <textarea
            placeholder="Enter your address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <div className='btn-update-address-div'>

          <button className='btn-update-address' onClick={updateAddress}>Update Address</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
