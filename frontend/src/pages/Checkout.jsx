
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, cartTotal } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF8F3]">
        <Navbar />

        <div className="text-center py-24">
          <h1 className="text-3xl font-serif text-[#302820]">
            Your cart is empty
          </h1>

          <Link
            to="/books"
            className="inline-block mt-6 bg-[#302820] text-white px-6 py-3"
          >
            Explore Books
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF8F3]">
        <Navbar />

        <div className="text-center py-24 px-6">
          <h1 className="text-4xl font-serif text-[#302820]">
            Thank you, {formData.fullName}!
          </h1>

          <p className="mt-4 text-gray-600">
            Your order details have been submitted successfully.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            This is currently a frontend demonstration. Your order
            will be saved once we connect Django.
          </p>

          <Link
            to="/books"
            className="inline-block mt-8 bg-[#302820] text-white px-7 py-3"
          >
            Continue Shopping
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#A47C54] mb-4">
            Almost there
          </p>

          <h1 className="text-5xl font-serif text-[#302820]">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Customer details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif text-[#302820] mb-6">
              Delivery Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E9E3D9] bg-white p-4"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E9E3D9] bg-white p-4"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E9E3D9] bg-white p-4"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border border-[#E9E3D9] bg-white p-4"
                  placeholder="Enter your delivery address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#302820] text-white py-4 hover:bg-[#A47C54] transition"
              >
                Place Order
              </button>

            </form>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white border border-[#E9E3D9] p-6">
              <h2 className="text-xl font-serif text-[#302820] mb-6">
                Your Order
              </h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 mb-5 text-sm"
                >
                  <div>
                    <p className="text-[#302820]">
                      {item.title}
                    </p>
                    <p className="text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium whitespace-nowrap">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="border-t pt-5 flex justify-between font-serif text-lg">
                <span>Total</span>
                <span>KSh {cartTotal.toLocaleString()}</span>
              </div>

              <p className="text-xs text-gray-500 mt-5">
                Payment arrangements will be handled separately.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Checkout;
