
function Footer() {
  return (
    <footer className="bg-[#302820] text-[#FAF8F3] px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-serif mb-4">
            The Poetry House.
          </h2>
          <p className="text-sm text-gray-300 leading-7 max-w-sm">
            A home for words, stories and creativity.
            Discover poets, explore poems and find books
            that speak to you.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Authors</a></li>
            <li><a href="#" className="hover:text-white">Poetry</a></li>
            <li><a href="#" className="hover:text-white">Books</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Get in touch</h3>
          <p className="text-sm text-gray-300 leading-7">
            Have questions or want to publish your work?
          </p>
          <p className="text-sm mt-3">
            Contact us
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-600 mt-12 pt-6">
        <p className="text-xs text-gray-400 text-center">
          © 2026 The Poetry House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
