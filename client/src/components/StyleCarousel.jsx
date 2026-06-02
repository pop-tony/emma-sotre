// src/components/StyleCarousel.jsx
import { useState, useEffect } from 'react';

const styleLooks = [
  {
    id: 1,
    name: "Zara A.",
    handle: "@zara.styles",
    quote: "This linen set is everything. Dress it up or down — I've worn it 5 ways already.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
  },
  {
    id: 2,
    name: "Kwesi M.",
    handle: "@kwesi.fits",
    quote: "Quality is insane for the price. The oversized tee fits exactly like the photos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    id: 3,
    name: "Naa D.",
    handle: "@naa.daily",
    quote: "Finally found trousers that actually fit my waist AND length. Running back for more colors.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
];

export default function StyleCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % styleLooks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-neutral-50 px-4 py-20 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <div
        className="mx-auto max-w-4xl text-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Styled By You</h2>
        <p className="mb-12 text-zinc-600 dark:text-zinc-400">Tag @yourbrand to be featured</p>

        <div className="relative h-80 overflow-hidden rounded-2xl">
          {styleLooks.map((t, idx) => (
            <div
              key={t.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="grid h-full md:grid-cols-2">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
                <div className="flex flex-col justify-center bg-white p-8 text-left dark:bg-zinc-900">
                  <p className="mb-6 text-lg italic text-zinc-700 dark:text-zinc-200">"{t.quote}"</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-rose-500">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {styleLooks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-8 rounded-full transition ${
                idx === current? 'bg-black dark:bg-white' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
              aria-label={`Go to look ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}