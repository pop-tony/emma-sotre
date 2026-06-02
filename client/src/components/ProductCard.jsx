// src/components/ProductCard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProductCard({
  id,
  images = [],
  name,
  price,
  salePrice = null,
  tag,
  onAddToCart,
  onToggleWishlist
}) {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const isOnSale =!!salePrice;
  const displayPrice = salePrice || price;
  const currentImage = images[imageIndex] || 'https://via.placeholder.com/400';

  const handleWishlist = (e) => {
    e.stopPropagation(); // don't trigger navigate
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(id);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation(); // don't trigger navigate
    // Just go to product page to select size/color
    navigate(`/product/${id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={() => navigate(`/product/${id}`)}>
      {/* Image */}
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 dark:bg-zinc-900"
        onMouseEnter={() => images.length > 1 && setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        <img
          src={currentImage}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Tag */}
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-black">
            {tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition hover:bg-white dark:bg-black/90 dark:hover:bg-black"
        >
          <Heart className={`h-4 w-4 ${isWishlisted? 'fill-rose-500 text-rose-500' : 'text-zinc-700 dark:text-zinc-300'}`} />
        </button>

        {/* Quick Add - shows on hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-3 text-sm font-semibold text-white transition group-hover:translate-y-0 dark:bg-white dark:text-black"
        >
          View Product
        </button>
      </div>

      {/* Info - minimal */}
      <div className="mt-3">
        <h3 className="text-sm font-medium leading-tight">{name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          {isOnSale && (
            <span className="text-sm text-zinc-500 line-through">₵{price}</span>
          )}
          <span className="font-semibold">₵{displayPrice}</span>
          {isOnSale && (
            <span className="text-xs font-semibold text-rose-500">
              Save ₵{price - salePrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}