import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

export const MenuItem = withRouter(
  ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`) }>
      <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
);
