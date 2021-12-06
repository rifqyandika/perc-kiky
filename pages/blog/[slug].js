import React from "react";
import Layout from "../../components/Layout";

export default function blogDetails() {
  return (
    <Layout>
      <div className="flex flex-col justify-between p-4 lg:flex-row lg:p-12">
        <div className="w-full">
          <article className="xl:divide-y xl:divide-gray-200">
            <header className="pt-6 xl:pb-10">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500">
                      <time dateTime="2021-08-11T19:30:00.000Z">
                        Wednesday, August 11, 2021
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
                    Introducing Tailwind UI Ecommerce
                  </h1>
                </div>
              </div>
            </header>
            <div
              className="pb-16 divide-y divide-gray-200 xl:divide-y-0 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:pb-20"
              style={{ gridTemplateRows: "auto 1fr" }}
            >
              <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div className="pt-10 pb-8 max-w-none">
                  <div className="prose max-w-none">
                    <p>
                      Almost 6 months in the making, we finally released the
                      first all-new component kit for{" "}
                      <a href="https://tailwindui.com">Tailwind UI</a> since the
                      initial launch back in February 2020!{" "}
                    </p>
                    <a href="https://tailwindui.com">
                      <img
                        src="/_next/static/media/card.8bac93c3bf37d71d5a251451214dda18.jpg"
                        alt="Tailwind UI Ecommerce available now"
                      />
                    </a>
                    <p>
                      <a href="https://tailwindui.com/#product-ecommerce">
                        Tailwind UI Ecommerce
                      </a>{" "}
                      adds over 100 new components across 14 new component
                      categories and 7 new page example categories, including
                      stuff like:
                    </p>
                    <ul>
                      <li>Product Overviews</li>
                      <li>Product Lists</li>
                      <li>Category Previews</li>
                      <li>Shopping Carts</li>
                      <li>Category Filters</li>
                      <li>Product Quickviews</li>
                      <li>Store Navigation</li>
                      <li>Promo Sections</li>
                      <li>Checkout Forms</li>
                      <li>Customer Reviews</li>
                      <li>Order Summaries</li>
                      <li>Storefront Pages</li>
                      <li>Product Pages</li>
                      <li>Order History Pages</li>
                    </ul>
                    <p>...and more.</p>
                    <p>
                      For a quick preview, check out this product page example
                      we shared via our newsletter last week:
                    </p>
                    <a href="https://tailwindui.com/page-examples/ecommerce-product-page-02">
                      <img
                        src="/_next/static/media/product-page-preview.705c02fcf00fe28c7bcc9fb262d0bb62.jpg"
                        alt="Preview one of the new product page examples"
                      />
                    </a>
                    <p>
                      It's been a really fun and challenging process putting
                      this together, and I'm really proud of how it turned out.
                      I wrote up a big post about{" "}
                      <a href="https://blog.tailwindcss.com/designing-tailwind-ui-ecommerce">
                        "Designing Tailwind UI Ecommerce"
                      </a>{" "}
                      that's worth a read if you're interested in the process
                      behind putting together a new Tailwind UI product like
                      this.{" "}
                    </p>
                    <p>
                      You can check out a bunch more interactive previews as
                      well as screenshots of every single new example over at{" "}
                      <a href="https://tailwindui.com/#product-ecommerce">
                        the Tailwind UI website
                      </a>
                      .{" "}
                    </p>
                    <p>
                      If you like what you see, consider{" "}
                      <a href="https://tailwindui.com/pricing">
                        purchasing a license
                      </a>{" "}
                      — it's the best way to support our work on Tailwind CSS
                      and Headless UI and makes it possible for us to keep
                      making these tools better and better.{" "}
                    </p>
                  </div>
                </div>
                <div className="pt-6 pb-16">
                  <p>
                    {" "}
                    Want to check it out?{" "}
                    <a
                      href="https://tailwindui.com"
                      className="font-medium text-teal-600 hover:text-teal-700"
                    >
                      {" "}
                      Visit the Tailwind UI website →{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="w-full lg:w-4/12">
          <div className="flex flex-col items-center md:flex-row lg:gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
