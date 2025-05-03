"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants, useAnimationControls } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectsCardProps {
  imageSrc: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ imageSrc }) => {
  return (
    <div className="shrink-0 snap-center mx-3">
      <div className="relative aspect-[391/391] h-[391px] rounded-xl  overflow-hidden">
        <Image
          alt={`${imageSrc}-png`}
          width={1000}
          height={1000}
          className="rounded-[20px] object-cover h-96"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  const containerVariants: Variants = {
    hidden: {
      transition: {
        delay: 0.5,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const testimonialCardVariants: Variants = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  ("");

  const projects = [
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fcar-image%2Fcar-image_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fdalcomedu%2Fdalcomedu_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fg-alpha%2Fg-alpha_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fhiary%2Fhiary_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fkosta-edu%2Fkosta-edu_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fprinttie%2Fprinttie_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fsparta-builders%2Fsparta-builders_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Ftax-research%2Ftax-research_thumbnail.webp%0A&w=750&q=75",
    "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fwisdomhub%2Fwisdomhub_thumbnail.webp%0A&w=750&q=75",
  ];

  // Create duplicated array for the marquee effect
  const marqueeItems = [...projects, ...projects];

  // Calculate the width of a single item (plus margin)
  const itemWidth = 391 + 24; // Card width + margins
  const totalWidth = itemWidth * projects.length;

  // Controls for the animation
  const controls = useAnimationControls();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Start the marquee animation
    if (!isHovering) {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      // Pause the animation while hovering
      controls.stop();
    }

    return () => controls.stop();
  }, [controls, totalWidth, isHovering]);

  return (
    <section className="h-[100vh] bg-white w-full my-10 md:my-20">
      <motion.div
        className="text-center flex flex-col gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, margin: "0px 0px -100px 0px" }}
      >
        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-3xl md:text-4xl"
        >
          고객 만족도 최상
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-3xl md:text-4xl"
        >
          다글제작소 포트폴리오
        </motion.h1>
      </motion.div>

      {/* Marquee container with fade effects */}
      <motion.div
        variants={testimonialCardVariants}
        initial="hidden"
        whileInView="show"
        className="relative mt-20 w-[90%] lg:w-[60%] mx-auto overflow-hidden mask-gradient"
      >
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* First copy of items */}
          <motion.div
            style={{ willChange: "transform" }}
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
          >
            {marqueeItems.map((testimonial, index) => (
              <ProjectsCard key={index} imageSrc={testimonial} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="pt-10 md:pt-20 flex justify-center">
        <Button className="inline-flex items-center justify-center cursor-pointer transition-colors text-black border bg-white border-gray-400 font-semibold px-7 py-6 rounded-lg hover:bg-gray-100">
          포트폴리오 더 보기
        </Button>
      </div>
      
    </section>
  );
};

export default Projects;
