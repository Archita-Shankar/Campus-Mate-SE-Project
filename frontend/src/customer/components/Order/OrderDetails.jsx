import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top"
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-blue-makes-duck-face_158538-15831.jpg?ga=GA1.1.603994773.1719512123&semt=ais_hybrid"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Womens casual top</p>
                  <p className="space-x-5 opacity-50 font-semibold">
                    <span>Color: pink</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: linearia</p>
                  <p>Rs. 1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon sx={{ fontSize: "2.2rem" }} className="px-2 mb-1.5" />
                <span>Rate & Review Prodct</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
