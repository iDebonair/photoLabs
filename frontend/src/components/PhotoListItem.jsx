import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { name, profile } = props.data;
  const location = props.location;
  const urls = props.urls;

  // const [selected, setSelected] = useState(false);
  // const [displayAlert, setDisplayAlert] = useState(false);

  const handleFavIconClick = () => {
    // setSelected(!selected);
    // setDisplayAlert(true);
    props.toggleFavorite(props.photoID);
  };
  const selected = props.favorites.includes(props.photoID);
  console.log("testing PhotoListItem ", props);
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        displayAlert={selected}
        selected={selected}
        onClick={handleFavIconClick}
      />
      <img className="photo-list__image" src={urls.regular} />
      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src = { profile } alt = "profile-picture" />
        <div className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">
            { location.city} ,{" "}
            { location.country }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
