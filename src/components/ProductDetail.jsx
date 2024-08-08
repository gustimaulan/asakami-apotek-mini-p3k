import React from "react";
import productItems from "../utils/productItems.js";

const ProductDetail = () => {
  return (
    <div className="p-4 text-gray-800">
      <p>Terdiri dari:</p>
      <ul className="pl-10 py-4">
        {productItems.map((item,index) => (
          <li key={index} className="font-light">✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
