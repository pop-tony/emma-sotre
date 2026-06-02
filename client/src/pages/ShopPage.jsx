// src/pages/ShopPage.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products'; // rename your data file

const categories = ["All", "New In", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories", "Sale"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const handleWishlist = (id) => {
    // connect to wishlist context later
    console.log('Wishlist toggle:', id);
  };

  const filtered = activeCategory === "All"
 ? allProducts
   : allProducts.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white px-4 py-24 text-zinc-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-rose-500">Collection</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Shop All</h1>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:px-6 sm:text-sm ${
                activeCategory === cat
               ? 'bg-black text-white dark:bg-white dark:text-black'
                 : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0? (
          <p className="text-center text-zinc-500">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart}
                onToggleWishlist={handleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}