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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-48 lg:w-3/4 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="h-full flex flex-col gap-8 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">Ali Kaan Aydın kimdir?</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              1 Nisan 1997 tarihinde dünyaya gelen Ali Kaan Aydın, ilkokul ve
              ortaokul eğitimini Samsun&apos;un Terme ilçesinde başarıyla
              tamamlamış, lise eğitimine ise Aziz Atik Fen Lisesi&apos;nde devam
              etmiştir. Eğitim hayatındaki başarısıyla dikkat çeken Ali Kaan
              Aydın, hukuk alanındaki tutkusunu Atatürk Üniversitesi Hukuk
              Fakültesi&apos;nde aldığı eğitimle hayata geçirmiştir.
              Mezuniyetinin ardından başladığı avukatlık kariyerinde 4 yılı
              aşkın süredir müvekkillerine hukuki çözümler sunmaktadır.
            </p>
            <p className="text-lg">
              Ali Kaan Aydın,özellikle miras hukuku, ceza hukuku ve medeni hukuk
              alanlarında derinlemesine uzmanlaşmış, bu alanlarda yürüttüğü
              davalar ve sunduğu hukuki danışmanlık hizmetleriyle adından söz
              ettirmiştir. Gerek bireysel gerekse kurumsal müvekkillerine
              etkili, sonuç odaklı ve güvenilir bir hizmet sunmayı ilke
              edinmiştir.
            </p>
            <p className="text-lg">
              Sunduğu hizmetlerde sadece hukuki çözümler sunmakla kalmayıp, aynı
              zamanda müvekkillerinin haklarını en iyi şekilde savunarak onların
              yanında olduğunu hissettiren bir yaklaşımı benimsemektedir.
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
              Hizmet Alanları
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap mb-12"
            >
              <p>
                Ali Kaan Aydın, hukuk alanındaki uzmanlığı ve deneyimiyle
                müvekkillerine çeşitli hukuk dallarında profesyonel çözümler
                sunmaktadır. Medeni hukuk, miras hukuku ve ceza hukuku başta
                olmak üzere birçok alanda etkili ve sonuç odaklı hizmetler
                sunarak müvekkillerinin haklarını en iyi şekilde korumayı
                amaçlamaktadır. Aşağıda, sunduğumuz başlıca hizmet alanlarını
                inceleyebilirsiniz.
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
                      Medeni hukuk alanında, bireylerin özel hayatlarını
                      düzenleyen hukuki meselelerde danışmanlık ve temsil
                      hizmeti sunmaktayız. Aile hukuku, sözleşme hukuku,
                      mülkiyet hakları gibi konularda müvekkillerimizin
                      haklarını en iyi şekilde koruyarak sonuç odaklı çözümler
                      üretmekteyiz.
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
                      Miras hukuku alanında, miras paylaşımı, vasiyetname
                      hazırlanması ve miras davalarına yönelik kapsamlı hukuki
                      destek sağlamaktayız. Aile içi hassas dengeleri gözeterek
                      müvekkillerimizin haklarının korunmasını ve adil çözümler
                      üretilmesini hedefliyoruz.
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
                        Ceza Hukuku
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Ceza hukuku alanında, müvekkillerimizin haklarını en
                      etkili şekilde savunmak için suç isnatlarına karşı
                      kapsamlı bir savunma stratejisi geliştirmekteyiz. Her
                      aşamada müvekkillerimizin yanındayız ve adaletin
                      sağlanması için kararlılıkla çalışıyoruz
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
