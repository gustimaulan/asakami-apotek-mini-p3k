import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import other from "../utils/other.js";

//import Swal from "sweetalert2";

const HomePage = () => {
  useEffect(() => {
    // Swal.fire({
    //   title: "Garansi Tukar Ukuran!",
    //   text: "Nikmati garansi tukar ukuran sepuasnya untuk kepuasan belanjamu!",
    // });
  }, []);
  return (
    <div className="bg-white">
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
