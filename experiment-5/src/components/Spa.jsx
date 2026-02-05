import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

/* Lazy loading with artificial delay
   (to visibly demonstrate performance optimization) */

const Home = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Home")), 800);
    }),
);

const Contact = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Contact")), 1000);
    }),
);

const About = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./About")), 1200);
    }),
);

export default function Singlepageapp() {
  return (
    <BrowserRouter>
      <nav>
        <h2>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/contact">Contact</Link>
          {" | "}
          <Link to="/about">About</Link>
        </h2>
      </nav>

      {/* Suspense fallback as recommended in PDF */}
      <Suspense fallback={<h3>Loading component...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
