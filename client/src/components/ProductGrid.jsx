// src/components/ProductGrid.jsx
import { useNavigate } from 'react-router-dom';
import { allProducts, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ category = 'All', onAddToCart, onToggleWishlist, showLimit = 8 }) {
  const navigate = useNavigate();

  const filtered = category === "All"
  ? allProducts
   : allProducts.filter(item => item.category === category);

  const displayItems = filtered.slice(0, showLimit);
  const hasMore = filtered.length > showLimit;

  return (
    <section id="shop" className="bg-white px-4 py-20 text-zinc-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight">New Arrivals</h2>
        <p className="mb-12 text-center text-zinc-600 dark:text-zinc-400">
          Curated pieces, styled for you
        </p>

        {filtered.length === 0? (
          <p className="text-center text-zinc-500">No products in this category yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {displayItems.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => navigate("/shop")}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-3 font-semibold transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  View All Products
                  <span className="text-lg">→</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}