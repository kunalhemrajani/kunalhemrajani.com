import React from 'react';

import config from '../../config';
const userAvatar = require('../assets/images/avatar.png');

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="128px" src={userAvatar} alt="Kunal Hemrajani Avatar" />
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
    </header>
  );
}
