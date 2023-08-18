import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem toggleFavorite={props.toggleFavorite} favorites={props.favorites} photoID={photo.id} key={photo.id} data={photo.user} location = {photo.location} urls={photo.urls}/>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
