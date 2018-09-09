import React from "react";
import ItemList from "./ItemsList";
import Sidebar from "./../layout/Sidebar";

const Items = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 mb-3">
        <Sidebar />
      </div>
      <div className="col-lg-9 col-md-8 pl-md-0">
        <div className="card">
          <div className="card-header">Items</div>
          <div className="card-body">
            <ItemList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
