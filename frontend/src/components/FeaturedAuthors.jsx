
const authors = [
  {
    id: 1,
    name: "Justin Gift Kero",
    category: "Poet & Author",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    id: 2,
    name: "Amara James",
    category: "Poet",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
  },
  {
    id: 3,
    name: "Daniel Morgan",
    category: "Writer & Poet",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
];

function FeaturedAuthors() {
  return (
    <section id="authors" className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="flex justify-between items-end mb-12">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#A47C54] mb-3">
              Discover voices
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-[#302820]">
              Meet our authors
            </h2>

            <p className="text-[#74695E] mt-4 max-w-lg">
              Explore the minds and stories behind the words.
            </p>
          </div>

          <a
            href="#authors"
            className="hidden md:block text-sm border-b border-[#302820] pb-1"
          >
            View all authors →
          </a>

        </div>

        {/* Authors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {authors.map((author) => (
            <div key={author.id} className="group">

              <div className="overflow-hidden bg-[#F5F0E8]">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-[#A47C54]">
                  {author.category}
                </p>

                <h3 className="font-serif text-2xl text-[#302820] mt-2">
                  {author.name}
                </h3>

                <a
                  href="#poetry"
                  className="inline-block mt-3 text-sm text-[#74695E] border-b border-[#A47C54] pb-1"
                >
                  Explore works →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedAuthors;
