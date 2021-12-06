import { NextSeo } from "next-seo";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../next-seo.config";

export default function undangan() {
  return (
    <Layout>
      <NextSeo
        title="Undangan - Jasa Offset & Sablon di Malang"
        description={`Undangan - ${SEO.description}`}
      />
      <div className="py-10">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
              Undangan
            </h2>
            <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {/* product - start */}
            <div>
              <a
                href="#"
                className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                />
                <div className="absolute left-0 flex gap-2 bottom-2">
                  <span className="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">
                    -50%
                  </span>
                  <span className="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">
                    New
                  </span>
                </div>
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Fancy Outfit
                  </a>
                  <span className="text-gray-500">by Fancy Brand</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    $19.99
                  </span>
                  <span className="text-sm text-red-500 line-through">
                    $39.99
                  </span>
                </div>
              </div>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Nick Karvounis"
                  className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Cool Outfit
                  </a>
                  <span className="text-gray-500">by Cool Brand</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    $29.99
                  </span>
                </div>
              </div>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Austin Wade"
                  className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Nice Outfit
                  </a>
                  <span className="text-gray-500">by Nice Brand</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    $35.00
                  </span>
                </div>
              </div>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="relative block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  loading="lazy"
                  alt="Photo by Vladimir Fedotov"
                  className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex items-start justify-between gap-2 px-2">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Lavish Outfit
                  </a>
                  <span className="text-gray-500">by Lavish Brand</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-600 lg:text-lg">
                    $49.99
                  </span>
                </div>
              </div>
            </div>
            {/* product - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
