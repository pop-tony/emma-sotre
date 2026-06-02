// src/pages/Lookbook.jsx
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/products';

const lookbookShots = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    title: 'Summer Essentials',
    caption: 'Linen sets for golden hour',
    productIds: ['linen-set-01', 'tee-02']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    title: 'Urban Core',
    caption: 'Heavy tees + cargo silhouettes',
    productIds: ['tee-01', 'cargo-01']
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800',
    title: 'Monochrome',
    caption: 'All black everything',
    productIds: ['jacket-01', 'pants-01']
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1539104197760-3a4a9e3d0a74?w=800',
    title: 'Studio Days',
    caption: 'Oversized workwear',
    productIds: ['jacket-02', 'tee-03']
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
    title: 'Off Duty',
    caption: 'Relaxed fits for weekends',
    productIds: ['hoodie-01', 'sweatpants-01']
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800',
    title: 'Night Out',
    caption: 'Elevated basics',
    productIds: ['dress-01', 'blazer-01']
  }
];

export default function Lookbook() {
  const navigate = useNavigate();

  const getProduct = (id) => allProducts.find(p => p.id === id);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      {/* Header */}
      <div className="px-4 py-16 text-center sm:py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-rose-500">Editorial</p>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Lookbook</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Styled by us. Worn by you. Explore the latest collection through our lens.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lookbookShots.map((shot, idx) => (
            <div
              key={shot.id}
              className={`group relative overflow-hidden rounded-2xl ${
                idx % 3 === 0? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={shot.image}
                alt={shot.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="mb-1 text-2xl font-bold">{shot.title}</h3>
                <p className="mb-4 text-sm text-white/80">{shot.caption}</p>
                
                {/* Shop buttons */}
                <div className="flex flex-wrap gap-2">
                  {shot.productIds.map(pid => {
                    const product = getProduct(pid);
                    return product && (
                      <button
                        key={pid}
                        onClick={() => navigate(`/product/${pid}`)}
                        className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-md transition hover:bg-white hover:text-black"
                      >
                        Shop {product.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}