import React from "react";
import CategotySidebar from "./CategotySidebar";
import AllProduct from "./AllProduct";
import "./Product_Sidebar.css";
const Product_Sidebar = () => {
  return (
    <div className="product_sidebar">
      <CategotySidebar />
      <AllProduct />
    </div>
  );
};

export default Product_Sidebar;
