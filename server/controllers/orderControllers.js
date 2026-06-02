import consultModel from "../models/consultationModel.js";
import orderAModel from "../models/orderAModel.js";
import orderModel from "../models/orderModel.js";

export const createOrderA = async (req, res) => {
  try {
    const { name, email, phone, date, time, notes, serviceName, servicePrice } = req.body.formData;
    const clientName = name;
    // Validate required fields
    if (!clientName || !email || !phone || !date || !time || !serviceName || !servicePrice) {
      return res.status(400).json({ success: false, message: 'Missing Required Details' });
    }
    const order = new orderModel({ clientName, email, phone, date, time, notes, serviceName, servicePrice });
    await order.save();

    return res.json({ success: true, message: "Order successfully created" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export const createConsult = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body.orderData.customer;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'Missing Required Details' });
    }

    const consult = new consultModel({name, email, phone, message});
    await consult.save();

    return res.json({ success: true, message: "Inquirery Sent" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export const createOrder = async (req, res) => {

  try {
    const { customer, items, total, paymentRef, status } = req.body.orderData;
    const { name, email, phone, address } = customer;
    const { price, quantity } = items[0];
    const customerName = name;
    const itemName = items[0].name
    // Validate required fields
    if (!customerName || !email || !phone || !address || !itemName || !price || !quantity || !total || !paymentRef || !status) {
      return res.status(400).json({ success: false, message: 'Missing Required Details' });
    }
    
    const order = new orderAModel({ customerName, email, phone, address, itemName, price, quantity, total, paymentRef, status });
    await order.save();

    return res.json({ success: true, message: "Order successfully created" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export const updateOrder = async (req, res) => {
    let updatedOrder;
    
  try {
    const { name, price, orderId, quantity, description, brand, color, buyer, address, number, city, email } = req.body;

    updatedOrder = await orderModel.findByIdAndUpdate(orderId,
        { name, price, orderId, quantity, description, brand, color, buyer, address, number, city, email },
        { new: true });
    

    if (!updatedOrder) {
      return res.json({ success: false, message: 'Order not found' });
    }

    return res.json({ success: true, product: updatedOrder });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to update product' });
  }
}

export const deleteOrder = async (req, res) => {

    const { orderId } = req.body

  try {
    await orderModel.deleteOne({ _id: orderId });
    return res.json({ success: true, message: "Order Deleted!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to delete order' });
  }
}

export const getOrderData = async (req, res) => {
  try {
    const orders = await orderModel.find();

    if (!orders.length) {
      return res.json({ success: false, message: "No orders found!" });
    }

    return res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to get orders' });
  }
}

export const getOrderDataIndividual = async (req, res) => {
  try {

    const orderId = req.query.orderId

    const order = await orderAModel.findById(orderId);

    if (!order) {
      return res.json({ success: false, message: "No orders found!" });
    }

    return res.json({ success: true, data:order });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to get orders' });
  }
}

export const updateConsult = async (req, res) => {
  let updatedConsult;
  
  try {
    const { consultId,status } = req.body;

    updatedConsult = await consultModel.findByIdAndUpdate(consultId,
        { status },
        { new: true });
    

    if (!updatedConsult) {
      return res.json({ success: false, message: 'Consult not found' });
    }

    return res.json({ success: true, consult: updatedConsult });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to update Consult' });
  }
}

export const getConsultData = async (req, res) => {
  try {
    const consults = await consultModel.find();

    if (!consults.length) {
      return res.json({ success: false, message: "No consults found!" });
    }

    return res.json({ success: true, consults });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to get cunsult' });
  }
}

export const deleteConsult = async (req, res) => {

  const { consultId } = req.body

  try {
    await consultModel.deleteOne({ _id: consultId });
    return res.json({ success: true, message: "consult Deleted!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: 'Failed to delete consult' });
  }
}