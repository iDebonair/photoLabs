import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (photoID) => {
    if (favorites.includes(photoID)) {
      const cloneFavorite = [...favorites];
      const filteredFavorite = cloneFavorite.filter((id) => {
        return id !== photoID;
      });
      setFavorites(filteredFavorite);
    } else {
      // const cloneFavorite = [...favorites];
      // cloneFavorite.push(photoID);
      setFavorites([...favorites,photoID]);
    }
  };
  return (
    <div className="home-route">
      <TopNavigation favorites={favorites}/>
      <PhotoList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
