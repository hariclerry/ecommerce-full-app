import React from "react";
import "./menuItems.scss";

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <h1 className="title">SHOP NOW</h1>
      </div>
    </div>
  );
};

export default MenuItems;
