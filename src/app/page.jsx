"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/lawyer.png"
            alt=""
            fill
            className="object-contain z-10"
          />
        </div>

        <div className="lg:h-full lg:w-1/2 h-1/2 flex flex-col gap-8 items-center justify-center mt-6">
          <h1 className="text-4xl md:text-6xl font-bold flex flex-col items-center justify-center">
            <span className="font-semibold text-red-900">
              <span className="text-black font-light">AVUKAT </span>ALİ KAAN
              AYDIN
            </span>

            <span className="font-light">HUKUK DANIŞMANLIĞI</span>
          </h1>
          <p className="md:text-xl font-light">
            Hukuki sorunlarınızda yanınızdayız! Uzman ekibimizle bireysel ve
            kurumsal danışmanlık hizmetleri sunarak, haklarınızı en iyi şekilde
            korumayı hedefliyoruz. Etik değerler ve profesyonellik ilkesiyle,
            güvenilir çözümler için bize ulaşabilirsiniz.
          </p>

          <div>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">İletişim</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
