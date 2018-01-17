import React from 'react'

import './style.css'

const ProfileAvatar = ({ toggleProfile, imgSrc="https://pbs.twimg.com/profile_images/554631714970955776/uzPxPPtr.jpeg" }) => (
  <div className="login-action-box">
    <button
      onClick={toggleProfile}
      className="profile__avatar"
    >
      <img src={imgSrc} alt="Avatar" />
    </button>
  </div>
)

export default ProfileAvatar
