const orderService = require("../services/order.service.js");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const confirmedOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const orders = await orderService.confirmOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const shippedOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const orders = await orderService.shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliveredOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const orders = await orderService.deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const cancelledOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const orders = await orderService.cancelOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletedOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const orders = await orderService.deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAllOrders,
  confirmedOrder,
  shippedOrder,
  deliveredOrder,
  cancelledOrder,
  deletedOrder,
};
