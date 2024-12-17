"use client";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-3/4 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="h-full flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">Hakkımda</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio fuga quis vero quisquam, sapiente odio obcaecati
              voluptas harum labore quaerat sunt omnis odit eveniet. Accusamus
              nostrum provident doloribus, dicta illo assumenda nam esse
              molestiae accusantium autem aut laboriosam expedita perferendis
              dolore. Illo, porro culpa quod inventore nihil dolorum magnam
              voluptates rerum iste eos, id excepturi quo, eveniet voluptatem
              expedita quisquam dicta cumque dolores. Hic, voluptatum.
              Blanditiis consequuntur repudiandae quasi maiores ex laboriosam
              dicta voluptatem adipisci, nesciunt veniam officiis incidunt. Nam
              repellendus pariatur et corporis dolorum voluptatem fugit numquam,
              ullam animi quia sunt voluptatum dolores voluptates placeat atque
              excepturi architecto cum.
            </p>
            <div className="self-end">
              <Image src="/sign.png" width={200} height={100} alt="imza" />
            </div>
          </div>

          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Alanlar
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap mb-12"
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores expedita esse architecto impedit, ut nesciunt, laborum
                commodi placeat quisquam quia beatae, neque vel magnam
                cupiditate! Corporis sed sapiente quisquam accusantium
                asperiores quaerat, dignissimos obcaecati quis tenetur non.
                Inventore asperiores quas at possimus dolorum mollitia tenetur,
                iure, accusantium perferendis cum consectetur! Debitis assumenda
                temporibus repudiandae!
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
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/4 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
