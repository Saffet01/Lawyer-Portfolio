"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactPage = () => {
  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const text = "Danışmak için iletişime geçebilirsiniz.";

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "0.75rem",
  };

  const center = { lat: 40.991088726282584, lng: 28.83006280285001 };

  return (
    <motion.div
      className=""
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
          {/* <motion.div className="mb-8 text-4xl">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div> */}

          {/* buraya google haritalar ve adres bilgisi gelecek */}
          <div className="w-full px-5 border-black">
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center}/>
              </GoogleMap>
            </LoadScript>
          </div>
          <span className="p-8 text-gray-500">Ataköy 7-8-9-10. Kısım Mah. Çobançeşme E-5 Yan Yol Cad. Nivo Ataköy Residance No:12 A Blok O:32 Bakırköy  - İSTANBUL</span>
        </div>

        {/* form container */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-5">
          <span>Sayın Avukat,</span>

          <textarea
            rows={6}
            className="bg-transparent border-2 border-red-100 resize-none"
          />

          <span>Email Adresim;</span>
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent border-2 border-red-100 resize-none"
          />

          <span>Saygılarımla.</span>

          <button className="bg-purple-100 rounded-xl p-2 font-semibold text-gray-600">
            Gönder
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              Mesajınız başarıyla gönderildi!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Mesajınız gönderilemedi.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
