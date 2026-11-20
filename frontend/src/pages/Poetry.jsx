
import { useState } from "react";
import { Link } from "react-router-dom";
import { poems } from "../data/poems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Poetry() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPoems = poems.filter((poem) => {
    const matchesSearch =
      poem.title.toLowerCase().includes(search.toLowerCase()) ||
      poem.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || poem.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#FAF8F3] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[#A47C54] mb-4">
            Words and expressions
          </p>

          <h1 className="text-5xl font-serif text-[#302820] mb-5">
            The Poetry Library
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto leading-7">
            Explore poems from talented writers.
            Discover words that inspire, comfort and connect us.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by poem title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#D8CFC2] bg-white px-5 py-4 outline-none focus:border-[#A47C54]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["All", "Love", "Life", "Hope"].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-2 rounded-full text-sm transition ${
                category === item
                  ? "bg-[#302820] text-white"
                  : "border border-[#D8CFC2] text-[#62594F] hover:bg-[#EDE6DC]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Poems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPoems.map((poem) => (
            <article
              key={poem.id}
              className="bg-white p-8 border border-[#E9E3D9] hover:shadow-md transition"
            >
              <p className="text-xs uppercase tracking-widest text-[#A47C54] mb-5">
                {poem.category}
              </p>

              <h2 className="text-2xl font-serif text-[#302820] mb-4">
                {poem.title}
              </h2>

              <p className="text-sm text-gray-600 leading-7 mb-6">
                {poem.excerpt}
              </p>

              <div className="border-t border-[#E9E3D9] pt-5 flex justify-between items-center">
                <p className="text-sm text-[#62594F]">
                  By {poem.author}
                </p>

                <Link
                  to={`/poetry/${poem.id}`}
                  className="text-sm text-[#A47C54] underline underline-offset-4"
                >
                  Read poem
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPoems.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No poems found. Try another search.
          </p>
        )}

      </section>

      <Footer />
    </div>
  );
}

export default Poetry;
