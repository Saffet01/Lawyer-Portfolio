"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {

  const [success, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const text = "Danışmak için iletişime geçebilirsiniz.";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
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
          </motion.div>
        </div>

        {/* form container */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-5">
            <span>Sayın Avukat,</span>

            <textarea rows={6} className="bg-transparent border-2 border-red-100 resize-none"/>

            <span>Email Adresim;</span>
            <input type="text" name="" id=""className="bg-transparent border-2 border-red-100 resize-none"/>

            <span>Saygılarımla.</span>

            <button className="bg-purple-100 rounded-xl p-2 font-semibold text-gray-600">Gönder</button>

            {success && <span className="text-green-600 font-semibold">Mesajınız başarıyla gönderildi!</span>}
            {error && <span className="text-red-600 font-semibold">Mesajınız gönderilemedi.</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
