import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"
          onClick={props.closeModal} />
      </button>

      {/* Show the PhotoFavButton in the modal */}

      <div className="photo-details-modal__images">
        <PhotoFavButton
          displayAlert={props.favorites.includes(props.photo.id)}
          selected={props.favorites.includes(props.photo.id)}
          onClick={() => {
            props.toggleFavorite(props.photo.id);
          }}
        />
        <img className="photo-details-modal__image"
          src={props.photo.urls.full}
          alt="Full Photo" />
        <div>
          <img className="photo-list__user-profile" src={props.photo.user.profile} alt="profile-picture" />
          <div className="photo-list__user-info">
            <div>{props.photo.user.name}</div>
            <div className="photo-list__user-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </div>
        </div>
        <h2 className='photos-details-modal__header'>Similar Photos</h2>
        {<PhotoList toggleFavorite={props.toggleFavorite} />}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
