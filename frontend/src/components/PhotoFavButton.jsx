import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} displayAlert={props.displayAlert} onClick={props.onClick} />
      </div>
    </div>
  );
};

export default PhotoFavButton;