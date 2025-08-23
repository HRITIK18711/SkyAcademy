import React from "react";

export default function Onlineclass() {
  return (
    <section className="mt-20 md:mt-45 min-h-[75vh] w-full flex items-center justify-center bg-gradient-to-br from-fuchsia-100 via-rose-100 to-amber-100">
      {/* Poster Card */}
      <div className="relative max-w-3xl w-[92%] rounded-3xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.35)]">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-500 animate-[pulse_3s_ease-in-out_infinite] opacity-80" />
        {/* Glass panel */}
        <div className="relative m-[2px] rounded-[calc(1.5rem-2px)] bg-white/90 backdrop-blur-xl border border-white/50 px-6 sm:px-10 py-12 sm:py-16 text-center">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide bg-black/90 text-white shadow">
            ONLINE CLASSES
            <span className="ml-1 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              We will be getting soon......
            </span>
          </h1>

          {/* Subcopy */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700">
            Our online dance classes are almost ready. We’re polishing the last
            steps so you can learn offline till then—stay tuned!
          </p>

          {/* Soft divider */}
          <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          {/* CTA placeholders */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              className="w-full sm:w-auto inline-flex justify-center rounded-xl px-5 py-3 font-semibold bg-black text-white hover:opacity-90 active:opacity-80 transition"
            >
              Back to Home
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
