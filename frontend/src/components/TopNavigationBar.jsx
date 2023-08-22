import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favorites, topicData, getPhotosByTopic }) => {

  const handleTopicClick = (topicId) => {
    getPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicClick={handleTopicClick} />
      <FavBadge isFavPhotoExist={favorites.length > 0} favCount={favorites.length} />
    </div>
  );
};

export default TopNavigation;
