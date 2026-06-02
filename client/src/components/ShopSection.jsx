// src/components/ShopSection.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductGrid from './ProductGrid';

const categories = ['All', 'New In', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories', 'Sale'];

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const handleWishlist = (id) => {
    // hook up to wishlist context later
    console.log('Wishlist:', id);
  };

  return (
    <>
      <section className="bg-white px-4 pt-20 text-zinc-900 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                  activeCategory === cat
                   ? 'cursor-pointer bg-black text-white dark:bg-white dark:text-black'
                    : 'cursor-pointer bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      <ProductGrid
        category={activeCategory}
        onAddToCart={addToCart}
        onToggleWishlist={handleWishlist}
      />
    </>
  );
}