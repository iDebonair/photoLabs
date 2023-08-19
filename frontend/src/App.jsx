import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {toggleFavorite,openModal,closeModal,state} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        openModal={openModal}
        toggleFavorite={toggleFavorite} // Pass toggleFavorite to HomeRoute
        favorites={state.favorites} // Pass favorites to HomeRoute. be sure that it is operatin properly
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
