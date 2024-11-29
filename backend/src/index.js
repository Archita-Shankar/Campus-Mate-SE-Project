const express=require("express")

const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    return res.status(200).send({message: "welcome to ecommerce api - node", status:true})
})

const authRoutes=require("./routes/auth.route.js");
app.use("/auth",authRoutes);

const userRoutes=require("./routes/user.route.js");
app.use("/users",userRoutes);

const productRoutes=require("./routes/product.route.js");
app.use("/products",productRoutes);

const adminProductRoutes=require("./routes/adminProduct.route.js");
app.use("/admin/products",adminProductRoutes);

const cartRoutes=require("./routes/cart.route.js");
app.use("/cart",cartRoutes);

const cartItemRoutes=require("./routes/cartItem.route.js");
app.use("/cartItems",cartItemRoutes);

const orderRoutes=require("./routes/order.route.js");
app.use("/orders",orderRoutes);

const adminOrderRoutes=require("./routes/adminOrder.route.js");
app.use("/admin/orders",adminOrderRoutes);

const reviewRoutes=require("./routes/review.route.js");
app.use("/reviews",reviewRoutes);

const ratingRoutes=require("./routes/rating.route.js");
app.use("/ratings",ratingRoutes);

module.exports=app;