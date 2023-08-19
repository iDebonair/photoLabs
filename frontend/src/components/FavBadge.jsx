import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favCount }) => {
  console.log("Fav badge", isFavPhotoExist, favCount)
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} favCount={favCount}/>
    </div>
  );
};

export default FavBadge;