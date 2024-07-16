import React, { useRef } from "react";
import other from "../utils/other.js";
import slider from "../utils/slider.js";
import { useNavigate } from "react-router-dom";

const CTACard = () => {
  // const navigate = useNavigate();
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleWhatsapp1 = () => {
    const phoneNumber = "6285227713001";
    const message =
      "Halo kak, Saya mau info produk Apotek Mini P3K-nya dong kak";

    fbq("track", "AddToCart");

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`
    );
  };
  const handleWhatsapp2 = () => {
    const phoneNumber = "6285227713001";
    const message =
      "Halo kak, Saya mau info produk Apotek Mini by Request-nya dong kak";

    fbq("track", "AddToCart");

    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="mt-4 p-4 rounded-md border-2">
          <img className="mb-2" src={slider[0].img} alt={slider[0].title} />
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            PAKET 1
          </h3>
          <p className="text-md">Apotek Mini P3K Version</p>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col">
              <p className="text-xs text-red-600 line-through">Rp150.000</p>
              <p className="text-purple-800 font-bold">RpXXX.000</p>
            </div>
          </div>
          <button
            onClick={handleWhatsapp1}
            className="w-full my-4 py-2 px-4 text-sm rounded-md shadow-md bg-purple-900 text-white hover:bg-blue-950"
          >
            PESAN SEKARANG
          </button>
        </div>
        <div className="mt-4 p-4 rounded-md border-2">
          <img className="mb-2" src="/custom-kit.jpeg" alt="custom kit" />
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            PAKET 2
          </h3>
          <p className="text-md">Apotek Mini By Request</p>
          <div className="flex flex-col">
            <p className="text-xs text-red-600 line-through">RpXXX.000</p>
            <p className="text-purple-900 font-bold">Rp Hubungi Kami</p>
          </div>
          <button
            onClick={handleWhatsapp2}
            className="w-full my-4 py-2 px-4 text-sm rounded-md shadow-md bg-purple-900 text-white hover:bg-blue-950"
          >
            PESAN SEKARANG
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          ref={bottomRef}
          className="h-8 my-8"
          src={other.allBank.img}
          alt={other.allBank.title}
        />
      </div>
      {/* {<div className="w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl font-bold text-gray-800 text-center">
          Mau tanya tanya dulu?
        </h1>
        <button
          onClick={handleWhatsapp}
          className="w-8/12 my-2 py-2 px-4 text-sm rounded-md shadow-md bg-green-800 text-white hover:bg-green-950"
        >
          CHAT WHATSAPP
        </button>
      </div> } */}
      <div className="p-2 fixed bottom-0 left-0 w-full bg-white">
        <button
          onClick={scrollToBottom}
          className="w-full py-3 px-4 text-sm rounded-md shadow-md bg-purple-800 text-white hover:bg-purple-950"
        >
          AMBIL PROMO SEKARANG JUGA
        </button>
      </div>
    </div>
  );
};

export default CTACard;
