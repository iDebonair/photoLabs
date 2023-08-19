import { useReducer } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: {},
  favorites: []
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
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = photoID => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: photoID });
  };

  const openModal = photo => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return { toggleFavorite, openModal, closeModal, state };
};

export default useApplicationData;
