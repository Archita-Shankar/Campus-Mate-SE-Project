import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate=useNavigate();
  const {cart}=useSelector(store=>store)
  const dispatch=useDispatch()
  const handleCheckout=()=>{
    navigate('/checkout?step=2')
  }

  const deliveryCharges = 4697;

  const totalDiscountedPrice =
  (cart.cart?.totalPrice || 0) - (cart.cart?.discount || 0) + deliveryCharges;

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>Rs. {cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">Rs. {cart.cart?.discount}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Rs. 4697</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">Rs. {totalDiscountedPrice}</span>
              </div>
            </div>
            <Button onClick={handleCheckout}
              color="secondary"
              variant="contained" className="w-full"
              sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
