import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const PhotoDetailsModal = (props) => {
  const photoId = photos.find(photo => photo.urls.full === props.photoUrl);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"
          onClick={props.closeModal} />
      </button>

      {/* Show the PhotoFavButton in the modal */}
      <PhotoFavButton
        displayAlert={props.favorites.includes(photoId.id)}
        selected={props.favorites.includes(photoId.id)}
        onClick={() => {
          props.toggleFavorite(photoId.id);
        }}
      />

      <img
        className="photo-details-modal__image"
        src={props.photoUrl}
        alt="Full Photo" />

      {/* Display similar photos */}
      <div className="similar-pictures-container">
        Similar photos
      </div>
      <div className="similar-photos">
        {<PhotoList toggleFavorite={props.toggleFavorite} />}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
