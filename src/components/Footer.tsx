"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerItems = [
    { label: "대표자", value: "안성범" },
    { label: "이메일", value: "contact@daggle.io" },
    { label: "주소", value: "서울특별시 강남구 논현로98길 28" },
    { label: "사업자등록번호", value: "303-19-83028" },
  ];

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Main section variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Logo variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
    hover: { scale: 1.05 },
  };

  // Info item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
      },
    }),
    hover: { x: 5 },
  };

  // Copyright variants
  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, delay: 0.5 },
    },
  };

  // Text hover variants
  const textHoverVariants = {
    hover: { color: "#9CA3AF" },
  };

  return (
    <div className="h-[30vh] bg-black pt-20 md:pt-0">
      <motion.div
        className="w-full bg-black text-gray-400 py-8 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={sectionVariants} className="mb-8">
            <motion.img
              src="https://daggle.io/svg/logo/logo-gray-footer.svg"
              alt="다글제작소"
              className="h-12 mb-6 "
              variants={logoVariants}
              whileHover="hover"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            variants={containerVariants}
          >
            {footerItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                custom={index}
                variants={itemVariants}
                whileHover="hover"
              >
                <span className="font-medium text-gray-500 w-32">
                  {item.label}:
                </span>
                <span className="text-gray-300">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pt-6 border-t border-gray-800"
            variants={copyrightVariants}
          >
            <motion.p
              className="text-sm text-gray-500"
              variants={textHoverVariants}
              whileHover="hover"
            >
              Copyright 2024 All rights reserved by 다글제작소
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
