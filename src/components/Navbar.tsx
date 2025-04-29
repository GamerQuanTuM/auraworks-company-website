"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { buttonVariants, linkVariants } from "@/lib/variants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Get current path on initial load
    setActiveLink(window.location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/quotation", text: "다글견적소" },
    { href: "/portfolio", text: "포트폴리오" },
    { href: "/blog/category/interview", text: "성공사례" },
    { href: "/outsourcing", text: "아웃소싱" },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`w-full z-[500] fixed top-0 left-0 right-0 backdrop-blur-lg text-white hidden lg:block ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="main-container flex items-center justify-between">
        <div className="flex items-center my-6 md:my-9 space-x-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <Image
                alt="Logo"
                width={100}
                height={20}
                className="md:w-[100px] md:h-[20px] w-[90px] h-[18px]"
                src="https://daggle.io/svg/logo/logo-light.svg"
                priority
              />
            </Link>
          </motion.div>

          <div className="ml-5 flex items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                variants={linkVariants}
              >
                <Link href={link.href} className="cursor-pointer relative">
                  <h1 className="text-lg font-semibold hover:text-gray-300 transition duration-300">
                    {link.text}
                  </h1>
                  {activeLink === link.href && (
                    <motion.div
                      className="h-0.5 bg-white absolute bottom-0 left-0 right-0"
                      layoutId="activeNavIndicator"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
          <Button className="inline-flex items-center justify-center cursor-pointer transition-colors text-black border bg-white border-line font-semibold px-7 py-6 rounded-lg hover:bg-gray-100  relative">
            프로젝트 문의하기
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
