export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          Rise
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-300">

          <a
            href="#moods"
            className="transition hover:text-white"
          >
            Moods
          </a>

          <a
            href="/favorites"
            className="transition hover:text-white"
          >
            Favorites
          </a>

        </div>

      </div>

    </nav>
  );
}