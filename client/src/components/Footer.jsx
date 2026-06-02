export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-100 px-4 py-16 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
            EMMA<span className="text-rose-500">STUDIO</span>
          </h3>
          <p className="max-w-sm">
            Contemporary pieces for the modern wardrobe. Designed in Accra, worn worldwide.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">Shop</h4>
          <div className="flex flex-col gap-2">
            <a href="/shop" className="hover:text-rose-500">Shop All</a>
            <a href="/shop" className="hover:text-rose-500">New Arrivals</a>
            <a href="/contact" className="hover:text-rose-500">Contact Us</a>
            <a href="/orders" className="hover:text-rose-500">Track Order</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">Connect</h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-rose-500">Instagram</a>
            <a href="#" className="hover:text-rose-500">TikTok</a>
            <a href="mailto:hello@emmastudio.co" className="hover:text-rose-500">Email</a>
            <a href="#" className="hover:text-rose-500">Size Guide</a>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-200 pt-8 text-center text-sm dark:border-neutral-800">
          <p>© 2026 Emma Studio. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
}