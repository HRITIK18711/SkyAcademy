// src/Component/Privacy.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header offset so fixed header doesn't overlap */}
      <div className="mt-20 md:mt-45" />

      {/* Page container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <Link
            to="/"
            className="shrink-0 rounded-lg px-4 py-2 text-sm font-semibold border hover:bg-gray-50"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="mt-2 text-gray-500">
          Effective Date: <span className="font-medium">[Insert Date]</span>
        </p>
        <p className="text-gray-500">
          Organization: <span className="font-medium">Sky Hop Professional Dance Institute</span>
        </p>

        {/* Intro */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-700">
            Welcome to <span className="font-semibold">Sky Hop</span> (“we,” “our,” or “us”).
            This Privacy Policy explains how we collect, use, protect, and share
            your information when you visit our website and use our services. By
            using our site, you agree to this Policy.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["Information We Collect", "#info"],
            ["How We Use Information", "#use"],
            ["Cookies & Tracking", "#cookies"],
            ["Data Security", "#security"],
            ["Sharing Information", "#sharing"],
            ["Third-Party Links", "#thirdparty"],
            ["Your Rights", "#rights"],
            ["Children’s Privacy", "#children"],
            ["Changes to This Policy", "#changes"],
            ["Contact Us", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl border p-4 text-sm font-semibold hover:bg-gray-50"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Sections */}
        <section id="info" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">1) Information We Collect</h2>
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">a) Personal Information (you provide)</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700">
              <li>Name, email, phone number</li>
              <li>Messages sent via forms (enquiry/registration)</li>
            </ul>
            <h3 className="mt-4 font-semibold">b) Non-Personal/Usage Data (automatic)</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-700">
              <li>IP address, device info, browser type</li>
              <li>Pages visited, time on page, general location</li>
            </ul>
          </div>
        </section>

        <section id="use" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">2) How We Use Information</h2>
          <div className="rounded-xl border p-6">
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and improve our classes and services</li>
              <li>Respond to enquiries and support requests</li>
              <li>Send updates or promotions (only if you opt in)</li>
              <li>Analytics, performance, and fraud prevention</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        <section id="cookies" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">3) Cookies & Tracking</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              We may use cookies or similar technologies to remember preferences,
              analyze traffic, and enhance your experience. You can control cookies
              in your browser settings; disabling some may affect site features.
            </p>
          </div>
        </section>

        <section id="security" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">4) Data Security</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              We implement reasonable technical and organizational measures to
              protect your data. However, no method of transmission or storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        <section id="sharing" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">5) Sharing Information</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p className="font-semibold">We do not sell your personal information.</p>
            <ul className="mt-2 list-disc pl-6">
              <li>
                Trusted vendors (hosting, analytics, communications) under
                confidentiality and data-protection obligations
              </li>
              <li>Lawful requests (court orders, legal compliance)</li>
              <li>Protection of our rights, users, or the public</li>
            </ul>
          </div>
        </section>

        <section id="thirdparty" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">6) Third-Party Links</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              Our site may link to third-party websites (e.g., social platforms,
              videos). Their practices are governed by their own policies; please
              review them separately.
            </p>
          </div>
        </section>

        <section id="rights" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">7) Your Rights</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <ul className="list-disc pl-6">
              <li>Access, correct, or request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-2">
              To exercise rights, contact us at{" "}
              <span className="font-semibold">[your email]</span>.
            </p>
          </div>
        </section>

        <section id="children" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">8) Children’s Privacy</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              Our website is not intended for children under 13. We do not
              knowingly collect data from children. If you believe a child has
              provided data, please contact us to remove it.
            </p>
          </div>
        </section>

        <section id="changes" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">9) Changes to This Policy</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              We may update this Policy periodically. Updates will be posted on
              this page with a revised Effective Date. Please review regularly.
            </p>
          </div>
        </section>

        <section id="contact" className="mt-10 space-y-4">
          <h2 className="text-2xl font-bold">10) Contact Us</h2>
          <div className="rounded-xl border p-6 text-gray-700">
            <p>
              Email: <span className="font-semibold">[your email]</span>
              <br />
              Address (optional): <span className="font-semibold">[your address]</span>
            </p>
          </div>
        </section>

        {/* Footer note */}
        <p className="mt-10 text-xs text-gray-500">
          This template is provided for general informational purposes and does not
          constitute legal advice.
        </p>
      </section>
    </main>
  );
}
