
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Feather,
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Mail,
  LockKeyhole,
  BookOpen,
  PenLine,
} from "lucide-react";

function AuthorRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] flex flex-col">

      {/* Header */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-[#302820]">
          The Poetry House.
        </Link>

        <Link to="/" className="text-sm text-[#62594F] hover:text-[#A47C54] transition">
          Back to Home
        </Link>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-xl shadow-[#302820]/5 overflow-hidden">

          {/* Left Panel */}
          <div className="relative bg-[#302820] text-[#FAF8F3] p-10 md:p-14 flex flex-col justify-between min-h-[650px] overflow-hidden">

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[#A47C54]/30" />
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full border border-[#A47C54]/30" />
            <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full border border-[#A47C54]/20" />

            <div className="relative z-10">
              <div className="w-12 h-12 border border-[#A47C54] flex items-center justify-center">
                <Feather className="text-[#C5A47E]" size={24} />
              </div>

              <p className="uppercase tracking-[0.3em] text-xs text-[#C5A47E] mt-10">
                Your voice matters
              </p>

              <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-5">
                Your words.
                <br />
                Your stories.
                <br />
                <span className="italic text-[#C5A47E]">
                  Your legacy.
                </span>
              </h1>

              <p className="text-[#D5CFC5] leading-7 mt-7 max-w-sm">
                Create your author profile, share your poetry with
                readers, and bring your published books to a community
                that appreciates meaningful words.
              </p>
            </div>

            <div className="relative z-10 border-t border-white/20 pt-7 mt-12">
              <BookOpen className="text-[#C5A47E] mb-4" size={22} />

              <p className="font-serif italic text-2xl leading-relaxed">
                "Fill your paper with the breathings of your heart."
              </p>

              <p className="text-xs uppercase tracking-widest text-[#C5A47E] mt-4">
                A space for every storyteller
              </p>
            </div>
          </div>

          {/* Author Registration Form */}
          <div className="p-8 md:p-14 flex flex-col justify-center">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#A47C54] mb-4">
                Become a published voice
              </p>

              <h2 className="font-serif text-4xl text-[#302820]">
                Join as an author
              </h2>

              <p className="text-sm text-[#81796F] mt-3">
                Tell us a little about yourself and your writing.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Full Name */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Full Name
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <User size={18} className="text-[#A47C54]" />

                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Pen Name */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Pen Name
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <Feather size={18} className="text-[#A47C54]" />

                  <input
                    type="text"
                    required
                    placeholder="Name readers will know you by"
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Username
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <PenLine size={18} className="text-[#A47C54]" />

                  <input
                    type="text"
                    required
                    placeholder="Choose a username"
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />
                </div>
              </div>

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
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Biography */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Short Biography
                </label>

                <textarea
                  required
                  rows="3"
                  placeholder="Tell readers about yourself and your writing..."
                  className="w-full border border-[#E9E3D9] bg-[#FAF8F3] p-4 outline-none text-sm resize-none focus:border-[#A47C54] transition"
                />
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
                    minLength={8}
                    placeholder="At least 8 characters"
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#81796F]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-[#302820] mb-2">
                  Confirm Password
                </label>

                <div className="flex items-center border border-[#E9E3D9] bg-[#FAF8F3] px-4 focus-within:border-[#A47C54] transition">
                  <LockKeyhole size={18} className="text-[#A47C54]" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    minLength={8}
                    placeholder="Confirm your password"
                    className="w-full bg-transparent p-3.5 outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#81796F]"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#302820] text-white py-4 flex items-center justify-center gap-3 hover:bg-[#A47C54] transition duration-300 group"
              >
                Create Author Account

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

            </form>

            {/* Bottom Links */}
            <div className="mt-7 pt-6 border-t border-[#E9E3D9] text-center">
              <p className="text-sm text-[#81796F]">
                Already have an account?{" "}
                <Link to="/login" className="text-[#A47C54] underline">
                  Sign in
                </Link>
              </p>

              <p className="text-sm text-[#81796F] mt-4">
                Just here to read?{" "}
                <Link to="/register/reader" className="text-[#A47C54] underline">
                  Join as a reader
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-[#81796F]">
        © 2026 The Poetry House. All rights reserved.
      </footer>

    </div>
  );
}

export default AuthorRegister;
