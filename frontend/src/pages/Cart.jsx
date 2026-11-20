import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#A47C54] mb-4">
            Your selections
          </p>

          <h1 className="text-5xl font-serif text-[#302820]">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-serif text-[#302820] mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-600 mb-8">
              You haven't added any books yet.
            </p>

            <Link
              to="/books"
              className="bg-[#302820] text-white px-7 py-3 inline-block hover:bg-[#A47C54] transition"
            >
              Explore Books
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E9E3D9] p-6 flex flex-col md:flex-row gap-6 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-36 object-cover"
                  />

                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs uppercase tracking-widest text-[#A47C54]">
                      {item.author}
                    </p>

                    <h2 className="text-xl font-serif text-[#302820] mt-2">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-2">KSh {item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border px-3 py-1"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="font-medium text-[#302820]">
                      KSh {item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600 underline mt-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white border border-[#E9E3D9] p-8 max-w-md ml-auto">
              <div className="flex justify-between mb-5">
                <span className="text-gray-600">Total items</span>
                <span>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between text-xl font-serif text-[#302820] border-t pt-5">
                <span>Total</span>
                <span>KSh {cartTotal.toLocaleString()}</span>
              </div>

              <Link
                to="/checkout"
                className="block text-center w-full bg-[#302820] text-white py-4 mt-6 hover:bg-[#A47C54] transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Cart;
