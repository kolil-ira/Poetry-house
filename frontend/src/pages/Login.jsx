
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Feather,
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
} from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] flex flex-col">

      {/* Header */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-[#302820]"
        >
          The Poetry House.
        </Link>

        <Link
          to="/"
          className="text-sm text-[#62594F] hover:text-[#A47C54] transition"
        >
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-5 py-10">

        <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-xl shadow-[#302820]/5 overflow-hidden">

          {/* Left Visual Panel */}
          <div className="relative bg-[#302820] text-[#FAF8F3] p-10 md:p-14 flex flex-col justify-between min-h-[550px] overflow-hidden">

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[#A47C54]/30" />
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full border border-[#A47C54]/30" />
            <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full border border-[#A47C54]/20" />

            <div className="relative z-10">
              <div className="w-12 h-12 border border-[#A47C54] flex items-center justify-center">
                <Feather className="text-[#C5A47E]" size={24} />
              </div>

              <p className="uppercase tracking-[0.3em] text-xs text-[#C5A47E] mt-10">
                A home for words
              </p>

              <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-5">
                Every story
                <br />
                deserves to
                <br />
                <span className="italic text-[#C5A47E]">
                  be heard.
                </span>
              </h1>

              <p className="text-[#D5CFC5] leading-7 mt-7 max-w-sm">
                Discover beautiful poetry, meet talented authors,
                and find stories that stay with you long after
                you've read them.
              </p>
            </div>

            <div className="relative z-10 border-t border-[#FFFFFF]/20 pt-7 mt-12">
              <BookOpen className="text-[#C5A47E] mb-4" size={22} />

              <p className="font-serif italic text-xl leading-relaxed">
                "A poem begins as a lump in the throat,
                a sense of wrong, a homesickness,
                a lovesickness."
              </p>

              <p className="text-xs uppercase tracking-widest text-[#C5A47E] mt-4">
                The Poetry House
              </p>
            </div>
          </div>

          {/* Right Login Form */}
          <div className="p-8 md:p-14 flex flex-col justify-center">

            <div className="mb-9">
              <p className="text-xs uppercase tracking-[0.25em] text-[#A47C54] mb-4">
                Welcome back
              </p>

              <h2 className="font-serif text-4xl text-[#302820]">
                Sign in to your account
              </h2>

              <p className="text-sm text-[#81796F] mt-3">
                We're glad to have you back.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Email */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Email Address
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <Mail size={18} className="text-[#A47C54]" />

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-transparent p-4 outline-none text-sm text-[#302820]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Password
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <LockKeyhole size={18} className="text-[#A47C54]" />

                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="w-full bg-transparent p-4 outline-none text-sm text-[#302820]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#81796F] hover:text-[#302820]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-[#62594F]">
                  <input type="checkbox" className="accent-[#302820]" />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[#A47C54] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign in */}
              <button
                type="submit"
                className="w-full bg-[#302820] text-white py-4 flex items-center justify-center gap-3 hover:bg-[#A47C54] transition duration-300 group"
              >
                Sign In
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

            </form>

            {/* Registration links */}
            <div className="mt-9 pt-7 border-t border-[#E9E3D9]">
              <p className="text-center text-sm text-[#81796F] mb-5">
                New to The Poetry House?
              </p>

              <div className="grid grid-cols-2 gap-3">

                <Link
                  to="/register/reader"
                  className="border border-[#A47C54] text-[#302820] p-4 text-center hover:bg-[#F5F0E8] transition group"
                >
                  <BookOpen size={20} className="mx-auto mb-2 text-[#A47C54]" />

                  <span className="block text-sm font-medium">
                    Join as Reader
                  </span>

                  <span className="text-xs text-[#81796F] mt-1 block">
                    Discover poetry
                  </span>
                </Link>

                <Link
                  to="/register/author"
                  className="bg-[#F5F0E8] text-[#302820] p-4 text-center hover:bg-[#E9DFD1] transition group"
                >
                  <Feather size={20} className="mx-auto mb-2 text-[#A47C54]" />

                  <span className="block text-sm font-medium">
                    Become an Author
                  </span>

                  <span className="text-xs text-[#81796F] mt-1 block">
                    Share your work
                  </span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-[#81796F]">
        © 2026 The Poetry House. All rights reserved.
      </footer>

    </div>
  );
}

export default Login;
