import React from 'react'
import { Route, Routes } from 'react-router-dom'

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>

      <Route path="/login" element={<HomePage />}></Route>
      <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>

        
     
        {/* <Order/> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRouter