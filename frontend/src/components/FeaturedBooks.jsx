
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Loss, Love, Rediscovery",
    author: "Justin Gift Kero",
    price: 1500,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
  },
  {
    id: 2,
    title: "The Art of Letting Go",
    author: "Amara James",
    price: 1200,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
  },
  {
    id: 3,
    title: "Whispers of the Soul",
    author: "Daniel Morgan",
    price: 1800,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
  },
];

function FeaturedBooks() {
  return (
    <section id="books" className="bg-[#FAF8F3] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="flex justify-between items-end mb-12">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#A47C54] mb-3">
              Our collection
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-[#302820]">
              Featured Books
            </h2>

            <p className="text-[#74695E] mt-4">
              Stories and poetry worth keeping.
            </p>
          </div>

          <a
            href="#books"
            className="hidden md:block text-sm border-b border-[#302820] pb-1"
          >
            View all books →
          </a>

        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedBooks;
