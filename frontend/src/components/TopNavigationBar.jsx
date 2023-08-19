import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import FavIcon from './FavIcon';

const TopNavigation = ({ favorites }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={favorites.length > 0} favCount={favorites.length} />
    </div>
  );
};

export default TopNavigation;
