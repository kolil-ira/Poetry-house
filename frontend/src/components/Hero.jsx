
function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAF8F3] px-6 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Left side */}
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-[#9B7955] mb-6">
            Stories • Poetry • Literature
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#302820]">
            Words that
            <span className="italic text-[#A47C54]"> stay </span>
            with you.
          </h1>

          <p className="mt-7 text-[#74695E] text-lg leading-relaxed max-w-lg">
            Discover independent poets, explore meaningful poetry
            and find books that speak to your soul.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#books"
              className="bg-[#302820] text-white px-7 py-3.5 rounded-full hover:bg-[#514536]"
            >
              Explore Books
            </a>

            <a
              href="#authors"
              className="border border-[#302820] text-[#302820] px-7 py-3.5 rounded-full hover:bg-[#302820] hover:text-white"
            >
              Meet Our Authors
            </a>
          </div>

          <p className="mt-12 text-sm text-[#8B8175]">
            A home for independent voices and beautiful words.
          </p>
        </div>

        {/* Right side */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000"
            alt="Books arranged on a table"
            className="w-full h-[450px] object-cover rounded-sm shadow-xl"
          />

          <div className="absolute -bottom-6 -left-5 bg-white p-6 shadow-lg max-w-[230px]">
            <p className="font-serif italic text-xl text-[#302820]">
              "Every page holds a world waiting to be discovered."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
