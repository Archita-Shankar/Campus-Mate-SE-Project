import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import { Shop } from "@mui/icons-material";
import ShopPage from "./customer/ShopPage/ShopPage";
import Faculty from "./customer/Faculty/faculty";
import UpcomingEvents from "./customer/UpcomingEvents.jsx/UpcomingEvents";
import AboutUs from "./customer/components/AboutUs/AboutUs";

function App() {
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
        <Route path="/:lavelOne/:lavelTwo/:lavelThre" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
        <Route path="/shop" element={<ShopPage />}></Route> 
        <Route path="/labs" element={<Faculty />}></Route> 
        <Route path="/events" element={<UpcomingEvents />}></Route> 
        <Route path="/about" element={<AboutUs />}></Route> 

        
        {/* <Order/> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
