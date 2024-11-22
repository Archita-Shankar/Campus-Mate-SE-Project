import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://img.freepik.com/premium-photo/woman-stands-front-purple-background-with-picture-flowers_160148-11711.jpg?ga=GA1.1.603994773.1719512123&semt=ais_hybrid"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size L, White</p>
          <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-5 mt-5">
        <div className="flex items-center space-x-4">
          <IconButton sx={{ color: "rgb(40,38,38)" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-3 border rounded-sm">3</span>
          <IconButton sx={{ color: "rgb(40,38,38)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <Button sx={{ color: "rgb(173,12,2)" }}>REMOVE</Button>
      </div>
    </div>
  );
};

export default CartItem;
