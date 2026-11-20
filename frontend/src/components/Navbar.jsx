
import { Link } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-[#FAF8F3] border-b border-[#E9E3D9]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-[#302820]"
        >
          The Poetry House.
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#62594F]">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/authors" className="hover:text-black">Authors</Link>
          <Link to="/poetry" className="hover:text-black">Poetry</Link>
          <Link to="/books" className="hover:text-black">Books</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button aria-label="Search">
            <Search size={20} />
          </button>

          <Link
            to="/cart"
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative"
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#A47C54] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="hidden sm:block bg-[#302820] text-white px-5 py-2.5 rounded-full text-sm hover:bg-[#514536]"
          >
            Sign In
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
