"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { buttonVariants, linkVariants } from "@/lib/variants";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [openDrawer, setOpenDrawer] = useState(false);

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
      className={`w-full z-[500] fixed top-0 left-0 right-0 backdrop-blur-lg text-white ${
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

          <div className="ml-5 hidden md:flex items-center justify-center gap-6 ">
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
          <Button className="hidden md:inline-flex items-center justify-center cursor-pointer transition-colors text-black border bg-white font-semibold px-7 py-6 rounded-lg hover:bg-gray-100  relative">
            프로젝트 문의하기
          </Button>

          <Drawer direction="right">
            <DrawerTrigger>
              <Menu size={25} color="#FFF" className="inline-block md:hidden" />
            </DrawerTrigger>
            <DrawerContent className="z-[600]">
              <DrawerHeader>
                <div className="flex justify-between items-center mt-3">
                  <Link href="/">
                    <Image
                      alt="Logo"
                      width={100}
                      height={20}
                      className="md:w-[100px] md:h-[20px] w-[90px] h-[18px]"
                      src="https://daggle.io/svg/logo/logo-dark.svg"
                      priority
                    />
                  </Link>

                  <DrawerClose>
                    <X size={20} className="mb-2" />
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="ml-5 flex flex-col justify-center gap-6 mt-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    <Link href={link.href} className="cursor-pointer relative">
                      <h1 className="text-base font-semibold hover:text-gray-300 transition duration-300">
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
              <DrawerFooter>
                <Button className="inline-flex items-center justify-center cursor-pointer transition-colors font-semibold px-7 py-6 rounded-lg bg-[#5221c4] hover:bg-[#511bce] relative">
                  프로젝트 문의하기
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
