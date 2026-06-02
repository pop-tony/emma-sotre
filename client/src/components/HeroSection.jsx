import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800"
        alt="Fashion editorial"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]">Summer '26</p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-8xl">
          NEW DROP
        </h1>
        <p className="mb-10 max-w-2xl text-lg md:text-xl font-light">
          Effortless silhouettes. Bold statements. Your new essentials are here.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            onClick={() => navigate('/shop')}
            className="cursor-pointer rounded-full bg-white px-10 py-4 font-semibold text-black transition hover:bg-neutral-200"
          >
            Shop Collection
          </a>
          <a
            onClick={() => navigate('/lookbook')}
            className="cursor-pointer rounded-full border border-white px-10 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            View Lookbook
          </a>
        </div>
      </div>
    </section>
  );
}