import { useReducer, useEffect } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: {},
  favorites: [],
  photoData: [],
  topicData: []
};

const reducer = (state, action) => {
  switch (action.type) {
  case "TOGGLE_FAVORITE":
    if (state.favorites.includes(action.payload)) {
      const filteredFavorites = state.favorites.filter(id => id !== action.payload);
      return { ...state, favorites: filteredFavorites };
    } else {
      return { ...state, favorites: [...state.favorites, action.payload] };
    }
  case "OPEN_MODAL":
    return { ...state, selectedPhoto: action.payload, isModalOpen: true };
  case "CLOSE_MODAL":
    return { ...state, isModalOpen: false };
  case 'SET_PHOTO_DATA':
    return { ...state, photoData: action.payload };
  case 'SET_TOPIC_DATA':
    return { ...state, topicData: action.payload };
  case 'GET_PHOTOS_BY_TOPICS':
    return { ...state, photoData: action.payload };
  default:
    return state;
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'GET_PHOTOS_BY_TOPICS', payload: data }))
      .catch((error) => console.error("Error fetching photos by topic:", error));
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
      .catch((error) => console.error("Error fetching photo data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
      .catch((error) => console.error("Error fetching topic data:", error));
  }, []);

  const toggleFavorite = photoID => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: photoID });
  };

  const openModal = photo => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return { toggleFavorite, openModal, closeModal, getPhotosByTopic, state };
};

export default useApplicationData;
