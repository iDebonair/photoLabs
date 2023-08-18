import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  return (
    <AppContext.Provider value={{ likedPhotos, setLikedPhotos }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;