import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Facebook from "../tracking/facebook";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Facebook />
      <ProductCard />
      <ProductDetail />
      <CTA />
      <FAQ />
      <img src="/asakami-front.jpg" alt="asakami" />
      <Footer />
    </div>
  );
};

export default HomePage;
