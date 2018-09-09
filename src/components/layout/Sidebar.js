import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="list-group">
      <Link to="/items" className="list-group-item list-group-item-action">
        Items
      </Link>
      <Link
        to="/items/create"
        className="list-group-item list-group-item-action"
      >
        Create
      </Link>
    </div>
  );
};

export default Sidebar;
