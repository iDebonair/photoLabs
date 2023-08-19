import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState('');
  const [favorites, setFavorites] = useState([]);
  

  const toggleFavorite = (photoID) => {
    console.log("toggle fav");
    console.log("photo id", photoID);
    if (favorites.includes(photoID)) {
      const cloneFavorite = [...favorites];
      const filteredFavorite = cloneFavorite.filter((id) => {
        return id !== photoID;
      });
      setFavorites(filteredFavorite);
    } else {
      setFavorites([...favorites, photoID]);
    }
  };

  const openModal = (photoUrl) => {
    setSelectedPhotoUrl(photoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute
        openModal={openModal}
        toggleFavorite={toggleFavorite} // Pass toggleFavorite to HomeRoute
        favorites={favorites} // Pass favorites to HomeRoute. be sure that it is operatin properly
      />
      
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          toggleFavorite={toggleFavorite} // Pass toggleFavorite to the modal
          favorites={favorites} // Pass favorites to the modal
          photoUrl={selectedPhotoUrl}
          setFavorites={setFavorites}
        />
      )}
    </div>
  );
};

export default App;
