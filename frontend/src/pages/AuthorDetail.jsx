import { useParams, Link } from "react-router-dom";
import { authors } from "../data/authors";
import { poems } from "../data/poems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AuthorDetail() {
  const { id } = useParams();

  const author = authors.find((item) => item.id === Number(id));

  if (!author) {
    return (
      <div className="min-h-screen bg-[#FAF8F3]">
        <Navbar />
        <div className="text-center py-32">
          <h1 className="text-3xl font-serif text-[#302820]">
            Author not found
          </h1>
          <Link to="/authors" className="text-[#A47C54] underline mt-6 inline-block">
            Back to Authors
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const authorPoems = poems.filter(
    (poem) => poem.author === author.name
  );

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <Link to="/authors" className="text-sm text-[#A47C54] underline">
          ← Back to Authors
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <img
            src={author.image}
            alt={author.name}
            className="w-full h-[400px] object-cover"
          />

          <div>
            <p className="text-sm uppercase tracking-widest text-[#A47C54] mb-4">
              Meet the author
            </p>

            <h1 className="text-4xl font-serif text-[#302820] mb-6">
              {author.name}
            </h1>

            <p className="text-gray-600 leading-8">
              {author.biography}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-serif text-[#302820] mb-8">
            Published Poems
          </h2>

          {authorPoems.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {authorPoems.map((poem) => (
                <div
                  key={poem.id}
                  className="bg-white border border-[#E9E3D9] p-7"
                >
                  <p className="text-xs uppercase tracking-widest text-[#A47C54] mb-3">
                    {poem.category}
                  </p>

                  <h3 className="text-xl font-serif text-[#302820] mb-4">
                    {poem.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-7 mb-5">
                    {poem.excerpt}
                  </p>

                  <Link
                    to={`/poetry/${poem.id}`}
                    className="text-sm text-[#A47C54] underline"
                  >
                    Read poem
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              This author has not published any poems yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AuthorDetail;