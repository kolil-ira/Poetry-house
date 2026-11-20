import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { authors } from "../data/authors";

function Authors() {
  return (
    <div className="bg-[#FAF8F3] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#A47C54] mb-4">
            Meet the storytellers
          </p>

          <h1 className="text-5xl font-serif text-[#302820] mb-5">
            Our Authors
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto leading-7">
            Discover the talented writers behind the words.
            Explore their stories, poems and published books.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {authors.map((author) => (
            <div key={author.id} className="group">
              <div className="overflow-hidden bg-[#F5F0E8]">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-serif text-[#302820]">
                  {author.name}
                </h2>

                <p className="text-sm text-gray-600 mt-2 leading-6">
                  {author.description}
                </p>

                <Link
                  to={`/authors/${author.id}`}
                  className="mt-4 inline-block text-sm text-[#A47C54] underline underline-offset-4"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Authors;