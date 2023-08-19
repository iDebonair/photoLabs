import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { name, profile } = props.data;
  const location = props.location;
  const urls = props.urls;
  const handleFavIconClick = () => {
    props.toggleFavorite(props.photoID);
    
  };
  const selected = props.favorites && props.favorites.includes(props.photoID);

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        displayAlert={selected}
        selected={selected}
        onClick={() => {
          handleFavIconClick();
        }}
      />
      <img
        className="photo-list__image"
        src={urls.regular}
        onClick={() => props.openModal()} // Open modal with full URL
      />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="profile-picture" />
        <div className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">
            {location.city} ,{" "}
            {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
