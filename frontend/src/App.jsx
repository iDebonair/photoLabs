import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { toggleFavorite, openModal, closeModal, state, getPhotosByTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        openModal={openModal}
        getPhotosByTopic={getPhotosByTopic}
        toggleFavorite={toggleFavorite} // Pass toggleFavorite to HomeRoute
        favorites={state.favorites} // Pass favorites to HomeRoute
      />

      {state.isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          toggleFavorite={toggleFavorite} // Pass toggleFavorite to the modal
          favorites={state.favorites} // Pass favorites to the modal
          photo={state.selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
