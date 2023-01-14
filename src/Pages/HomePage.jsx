import React from "react";
import { Hero, FeaturedProducts, Services, Contact } from "../components";

export const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
