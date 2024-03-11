import React from "react";

function Item({ item, favorites, setFavorites }) {

  const favoritesArray = favorites || [];

  const isFavorite = favoritesArray.some((fav) => fav.id === item.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favoritesArray.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favoritesArray, item]);
    }
  };

  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Title: {item.title}</p>
      <img src={item.thumbnailUrl} alt={item.title} />
      <button onClick={toggleFavorite}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
    </div>
  );
}

export default Item;
