import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../next-seo.config";

export default function blog() {
  return (
    <Layout>
      <NextSeo
        title="Blog - Jasa Offset & Sablon di Malang"
        description={`Blog - ${SEO.description}`}
      />
      <div className="py-12">
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
              Blog
            </h2>
            <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:gap-12 xl:gap-16">
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <Link href="/blog/hello-blog">
                <a className="relative self-start flex-shrink-0 block w-full h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:w-24 lg:w-40 md:h-24 lg:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110"
                  />
                </a>
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">July 19, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    New trends in Tech
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="relative self-start flex-shrink-0 block w-full h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:w-24 lg:w-40 md:h-24 lg:h-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 07, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Working with legacy stacks
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="relative self-start flex-shrink-0 block w-full h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:w-24 lg:w-40 md:h-24 lg:h-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">March 15, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="relative self-start flex-shrink-0 block w-full h-56 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:w-24 lg:w-40 md:h-24 lg:h-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-200 transform group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">January 27, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
