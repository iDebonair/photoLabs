import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { name, profile } = props.data;
  const location = props.location;
  const urls = props.urls;

  const [selected, setSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleFavIconClick = () => {
    setSelected(!selected);
    setDisplayAlert(true);
  };

  console.log("testing PhotoListItem ", props);
  return (
    <div className="photo-list-item">
      <PhotoFavButton
        displayAlert={displayAlert}
        selected={selected}
        onClick={handleFavIconClick}
      />
      <div className="photo-list">
        <div className="photo-list__image">
          <img src={urls.regular} />
        </div>
        {/* <div className="photo-list__user-profile">
            <img src = { profile } alt = "profile-picture" />
          </div> */}
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">
            <div>{name}</div>
            <div className="photo-list__user-location">
              { location.city} ,{" "}
              { location.country }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
