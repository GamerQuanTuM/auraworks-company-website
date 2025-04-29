"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/variants";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const loaderVariants: Variants = {
    visible: {
      y: "0%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        easings: [0.1, 0.1, 0.8, 0.1],
      },
    },
    hidden: {
      y: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        easings: [0.1, 0.1, 0.8, 0.1],
      },
    },
  };

  const textVariants: Variants = {
    initial: {
      y: 500,
    },
    final: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        easings: [0.1, 0.1, 0.8, 0.1],
      },
    },
  };

  return (
    <div className="bg-black h-screen text-white">
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${"https://daggle.io/_next/image?url=%2Fpng%2Fhero-section%2Fhero-bg.webp&w=1920&q=100"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        variants={textVariants}
        initial={"initial"}
        animate={"final"}
        className="relative z-[100] h-[85%] w-[80%] mx-auto flex items-end"
      >
        <div className="flex flex-col gap-10">
          <div className="text-5xl font-bold text-white flex flex-col gap-10">
            <span>외주개발의 정직함을 더하는</span>
            <span>IT 비즈니스 파트너 다글제작소</span>
          </div>
          <div className="flex items-center gap-14">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button className="inline-flex items-center justify-center cursor-pointer transition-colors text-white border bg-[#5221c4] hover:bg-[#511bce] font-semibold px-7 py-8 rounded-lg w-60 border-none text-lg">
                프로젝트 문의하기
              </Button>
            </motion.div>
            <div className="flex gap-3 items-center cursor-pointer">
              <h1 className="font-semi-bold text-lg">서비스 소개서</h1>
              <FileDown size={15} color="#FFF" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Loading Overlay */}
      <motion.img
        className="absolute inset-0 z-[501] w-full h-full object-cover"
        src="https://daggle.io/_next/image?url=%2Fpng%2Fhero-section%2Fhero-animation-bg.png&w=1920&q=100"
        initial="visible"
        animate={loading ? "visible" : "hidden"}
        variants={loaderVariants}
        alt="Loading"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Banner;
