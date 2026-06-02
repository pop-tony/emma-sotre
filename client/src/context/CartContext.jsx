// src/context/CartContext.jsx
import React from 'react'
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('emmastudio-cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCartItems(parsed);
        }
      }
    } catch (error) {
      console.error('[CART] Failed to load cart:', error);
      localStorage.removeItem('emmastudio-cart');
    } finally {
      isInitialLoad.current = false;
    }
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) return;
    localStorage.setItem('emmastudio-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // product should include: id, name, price, size, color, image
    const { id, size, color } = product;

    // Check if same product + size + color already exists
    const existingIndex = cartItems.findIndex(
      item => item.id === id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      // Increment quantity if exists
      setCartItems(prev =>
        prev.map((item, idx) =>
          idx === existingIndex
         ? {...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item
      const newItem = {
       ...product,
        cartItemId: uuidv4(),
        quantity: 1,
        addedAt: Date.now()
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId!== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId? {...item, quantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (parseFloat(item.price) * item.quantity), 0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('emmastudio-cart');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};