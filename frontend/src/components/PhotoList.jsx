import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <div>
      <ul className="photo-list">
        {props.photoData.map((photo) => (
          <PhotoListItem
            toggleFavorite={props.toggleFavorite}
            favorites={props.favorites}
            photoID={photo.id}
            key={photo.id}
            data={photo.user}
            location={photo.location}
            urls={photo.urls}
            openModal={() => props.openModal(photo)}
            setFavorites={props.setFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
