
const poems = [
  {
    id: 1,
    title: "The Things We Never Said",
    author: "Justin Gift Kero",
    category: "Love",
    excerpt: "Some words remain in our hearts long after the moment has passed..."
  },
  {
    id: 2,
    title: "A Quiet Kind of Strength",
    author: "Amara James",
    category: "Life",
    excerpt: "There is courage in choosing to rise, even when nobody is watching..."
  },
  {
    id: 3,
    title: "When Tomorrow Comes",
    author: "Daniel Morgan",
    category: "Hope",
    excerpt: "Every sunrise carries a promise that yesterday could never keep..."
  }
];

function LatestPoems() {
  return (
    <section className="bg-[#FAF8F3] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#A47C54] mb-3">
              From our writers
            </p>
            <h2 className="text-4xl font-serif text-[#302820]">
              Latest Poems
            </h2>
          </div>

          <button className="text-sm text-[#A47C54] hover:underline">
            Explore all poems →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {poems.map((poem) => (
            <article
              key={poem.id}
              className="border-t border-[#D8CFC2] pt-6"
            >
              <p className="text-xs uppercase tracking-widest text-[#A47C54] mb-4">
                {poem.category}
              </p>

              <h3 className="text-2xl font-serif text-[#302820] mb-3">
                {poem.title}
              </h3>

              <p className="text-sm text-gray-600 leading-7 mb-5">
                {poem.excerpt}
              </p>

              <p className="text-sm font-medium text-[#302820]">
                By {poem.author}
              </p>

              <button className="mt-5 text-sm underline underline-offset-4 text-[#A47C54]">
                Read poem
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestPoems;
