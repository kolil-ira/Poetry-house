import { useState } from "react";
import { useCart } from "../context/CartContext";

function BookCard({ book }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="group">
      <div className="bg-[#F5F0E8] overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="mt-4">
        <p className="text-xs text-[#A47C54] uppercase tracking-wider">
          {book.author}
        </p>

        <h3 className="font-serif text-xl mt-2 text-[#302820]">
          {book.title}
        </h3>

        <div className="flex justify-between items-center mt-4">
          <p className="font-medium text-[#302820]">
            KSh {book.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="border border-[#302820] px-4 py-2 text-sm hover:bg-[#302820] hover:text-white transition"
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;