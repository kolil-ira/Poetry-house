import { useParams, Link } from "react-router-dom";
import { poems } from "../data/poems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PoemDetail() {
  const { id } = useParams();

  const poem = poems.find((item) => item.id === Number(id));

  if (!poem) {
    return (
      <div className="min-h-screen bg-[#FAF8F3]">
        <Navbar />
        <div className="text-center py-32">
          <h1 className="text-3xl font-serif text-[#302820]">
            Poem not found
          </h1>
          <Link to="/poetry" className="text-[#A47C54] underline mt-6 inline-block">
            Back to Poetry Library
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Navbar />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/poetry"
          className="text-sm text-[#A47C54] underline"
        >
          ← Back to Poetry Library
        </Link>

        <div className="text-center mt-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#A47C54] mb-5">
            {poem.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-[#302820] mb-5">
            {poem.title}
          </h1>

          <p className="text-gray-500 mb-12">
            By {poem.author}
          </p>

          <div className="border-t border-[#D8CFC2] pt-10">
            {poem.content.map((line, index) => (
              <p
                key={index}
                className="text-lg text-[#62594F] leading-9 mb-5"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PoemDetail;