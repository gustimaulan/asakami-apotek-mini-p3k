import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWarna2 } from "../features/rootSlice";

const Color2 = () => {
  const userForm = useSelector((state) => state.userForm);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(userForm.warna2);

  const colors = ["Navy", "Biru Muda", "Hitam"];

  const setColor = (e) => {
    setChecked(e);
    dispatch(setWarna2(e));
  };

  return (
    <div className="flex flex-col">
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex items-center hover:bg-gray-100 border-gray-300 border-2 py-3 px-2"
        >
          <input
            value={color}
            checked={checked === color ? true : false}
            onChange={(e) => setColor(e.target.value)}
            id={`number-${color}2`}
            type="radio"
            name={`number-${color}2`}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor={`number-${color}2`}
            className="ms-2 w-full text-sm font-medium text-gray-900"
          >
            {color.toUpperCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Color2;
