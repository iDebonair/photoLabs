import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation favorites={props.favorites} />
      <PhotoList
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        openModal={props.openModal}
      />
    </div>
  );
};

export default HomeRoute;
