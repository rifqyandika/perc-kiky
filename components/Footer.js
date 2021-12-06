import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 py-12 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
          <div className="col-span-3">
            <a
              href="#"
              title="Hellonext Home Page"
              className="flex items-center"
            >
              <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-900 ">
                Perc.
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900 ">
                  Kiky
                </span>
              </h2>
            </a>
            <p className="my-4 text-xs leading-normal text-gray-600">
              <strong>Office :</strong> Jl. Raya Karangjati RT.04 RW.08
              Ardimulyo - Singosari - Malang
            </p>
            <p className="my-4 text-xs leading-normal text-gray-600">
              <strong>Telp :</strong> 0341 - 454224
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </p>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Features
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Pricing
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Feedback
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              FAQs
            </a>
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Support
            </p>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Chat
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              {" "}
              Email Support{" "}
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              GDPR
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              {" "}
              Help{" "}
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Resources
            </p>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Blog
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              {" "}
              Twitter{" "}
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Alternatives
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Why feature vote?
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </p>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              About Us
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Privacy
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Terms
            </a>
            <a
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-purple-800"
              href="#"
            >
              Status
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">
            ❤️&nbsp; &nbsp;Built with <strong>Nextjs & TailwindCSS</strong>.
          </p>
          <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">
            Copyright © 2021 <strong>PercKIKY</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
