"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-8 md:gap-32 lg:gap-48 xl:gap-64">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-2xl">
              Ali Kaan Aydın <span>kimdir?</span>
            </h1>
            <p className="text-xl font-light italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              earum libero cumque praesentium minus laboriosam sed voluptatum
              soluta suscipit, culpa inventore commodi. Delectus enim dolores,
              dolore maiores porro nam in ipsum quo placeat, laboriosam
              quibusdam distinctio amet, molestiae laudantium voluptatum minus
              odit impedit est! Asperiores.
            </p>
            <div className="self-end">
              <Image
                src="/sign.png"
                alt=""
                className="object-contain z-10"
                height={80}
                width={240}
              />
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-2xl">Çalışılan Alanlar</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              expedita esse architecto impedit, ut nesciunt, laborum commodi
              placeat quisquam quia beatae, neque vel magnam cupiditate!
              Corporis sed sapiente quisquam accusantium asperiores quaerat,
              dignissimos obcaecati quis tenetur non. Inventore asperiores quas
              at possimus dolorum mollitia tenetur, iure, accusantium
              perferendis cum consectetur! Debitis assumenda temporibus
              repudiandae!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-[200px]">
                  <Image
                    className="rounded-t-lg"
                    src="/medenihukuk.png"
                    alt="Medeni Hukuk"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    onError={(e) => {
                      console.log("Image error:", e);
                    }}
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Medeni Hukuk
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem eum similique quod velit exercitationem! Error
                    debitis quibusdam optio necessitatibus. Sed.
                  </p>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-[200px]">
                  <Image
                    className="rounded-t-lg"
                    src="/mirashukuku.png"
                    alt="Miras Hukuku"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    onError={(e) => {
                      console.log("Image error:", e);
                    }}
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Miras Hukuku
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem eum similique quod velit exercitationem! Error
                    debitis quibusdam optio necessitatibus. Sed.
                  </p>
                </div>
              </div>

              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-[200px]">
                  <Image
                    className="rounded-t-lg"
                    src="/cezahukuku.png"
                    alt="Ceza Hukuku"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    onError={(e) => {
                      console.log("Image error:", e);
                    }}
                  />
                </div>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Miras Hukuku
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem eum similique quod velit exercitationem! Error
                    debitis quibusdam optio necessitatibus. Sed.
                  </p>
                </div>
              </div>
            </div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div>experience</div>
        </div>

        <div className="hidden">svg</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
