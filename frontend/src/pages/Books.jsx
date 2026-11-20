
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";

const books = [
  {
    id: 1,
    title: "Loss, Love, Rediscovery",
    author: "Justin Gift Kero",
    price: 1200,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
  },
  {
    id: 2,
    title: "The Art of Becoming",
    author: "Amara James",
    price: 1500,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
  },
  {
    id: 3,
    title: "Letters to Tomorrow",
    author: "Daniel Morgan",
    price: 1000,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
  },
];

function Books() {
  return (
    <div className="bg-[#FAF8F3] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#A47C54] mb-4">
            The bookstore
          </p>

          <h1 className="text-5xl font-serif text-[#302820] mb-5">
            Discover Our Books
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto leading-7">
            Explore books from independent authors.
            Find your next favourite read.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Books;
