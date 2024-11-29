const express=require("express")
const router=express.Router();

const orderController=require("../controller/adminOrder.controller.js");
const authenticate=require("../middleware/authenticate.js");

router.get("/", authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, orderController.confirmedOrder);
router.put("/:orderId/shipped", authenticate, orderController.shippedOrder);
router.put("/:orderId/delivered", authenticate, orderController.deliveredOrder);
router.put("/:orderId/cancelled", authenticate, orderController.cancelledOrder);
router.put("/:orderId/deleted", authenticate, orderController.deletedOrder);

module.exports=router;
