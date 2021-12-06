import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="font-sans antialiased bg-gray-50 ">
        {props.children}
      </main>
      <Footer />
    </>
  );
}
