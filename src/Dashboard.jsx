import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Dashboard({ favorites }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/list">Go to List Page</Link>
      <h2>Favorites</h2>
      {favorites.map((item) => (
        <Item key={item.id} item={item} isFavorite={true} />
      ))}
    </div>
  );
}

export default Dashboard;
