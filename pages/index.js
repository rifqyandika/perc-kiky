import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="items-center min-h-screen px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-0 mx-auto lg:grid-cols-11 lg:gap-24 xl:w-11/12">
          <div className="col-auto my-0 lg:my-10 md:col-span-7 ">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl md:leading-none tracking-none md:tracking-tight">
              Partner Terbaik,
            </h1>
            <h1 className="mb-10 text-4xl font-extrabold tracking-wide text-primary md:text-6xl md:tracking-relaxed md:mb-4">
              Offset & Printing
            </h1>
            <a
              href="https://api.whatsapp.com/send?phone=081233803876"
              className="w-full mb-2 btn btn-dark btn-lg sm:w-auto sm:mb-0"
            >
              Hubungi Kami
            </a>
          </div>
          <div className="col-auto  md:col-span-4 lg:flex">
            <img src="img/hero.svg" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Hasil Cetak Berkualitas
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Dengan berpedoman hasil yang terbaik, kami memberikan pengalaman bagi client kami untuk mendapatkan hasil yang berkualitas.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <img className="w-full h-full py-30" src='../img/01.png' />
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Tenaga Cetak Profesional
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Dengan Team produksi yang diisi tenaga profesional dan ahli pada bidangnya,
              kami tetap menjaga kualitas hasil cetak.
            </p>
            <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
              Learn More
            </a>
          </div>
          <img className="w-full h-full py-40" src='../img/02.png' />
        </div>
      </section>
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
          Klien Kami
        </h1>
        <p className="mb-16 text-lg text-center text-gray-600">
          Organizations of all sizes trust Us to manage customer feedback
        </p>
        <div className="grid grid-cols-2 gap-6 mb-16 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center">
            <img
              src="../img/logo1.jpg"
              alt="Todoist Logo"
              className="block object-contain h-36"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="../img/logo2.jpg"
              alt="Todoist Logo"
              className="block object-contain h-36"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="../img/logo3.jpg"
              alt="Todoist Logo"
              className="block object-contain h-36"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="../img/logo4.jpg"
              alt="Todoist Logo"
              className="block object-contain h-36"
            />
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="btn btn-light btn-lg btn-icon">
            <span>See our Testimonials</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="ml-3">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  );
}
