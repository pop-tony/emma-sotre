// src/context/OrderContext.jsx
import axios from 'axios';
import React from 'react'
import { createContext, useContext, useState, useEffect, useRef } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderIds, setOrderIds] = useState([]);
  const [orders, setOrders] = useState([]);
  const isInitialLoad = useRef(true);

  const backendUrl = import.meta.env.VITE_ENV === "development"? import.meta.env.VITE_BACKEND_URL : "/api";

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const saved = localStorage.getItem('emmastudio-orderIds');

        if (!saved) return;

        const orderIds = JSON.parse(saved);

        if (!Array.isArray(orderIds) || orderIds.length === 0) return;

        const promises = orderIds.map(async (orderId) => {
          try {
            const res = await axios.get(`${backendUrl}/order/i-data?orderId=${orderId}`);
            return res.data.success? res.data.data : null;
          } catch (error) {
            console.error(`Failed to fetch order ${orderId}:`, error);
            return null;
          }
        });

        const results = await Promise.all(promises);
        const fetchedOrders = results.filter(Boolean);

        setOrders(fetchedOrders);
      } catch (error) {
        console.error('[ORDERS] Failed to load orders:', error);
      } finally {
        isInitialLoad.current = false;
      }
    };

    loadOrders();
  }, [orderIds]);

  useEffect(() => {
    if (isInitialLoad.current) return;

    if (orderIds.length > 0) {
      localStorage.setItem('emmastudio-orderIds', JSON.stringify(orderIds));
    }
  }, [orderIds]);

  const addOrder = (orderId) => {
    setOrderIds(prev => [...prev, orderId]);
  };

  const ordersCount = orderIds.length;

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o =>
      o._id === orderId? {...o, status: newStatus } : o
    ));
  };

  return (
    <OrderContext.Provider value={{
      orders,
      addOrder,
      ordersCount,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrderContext must be used within OrderProvider');
  return context;
};