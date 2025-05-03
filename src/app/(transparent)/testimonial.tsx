"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants, useAnimationControls } from "motion/react";
import Image from "next/image";

interface TestimonialCardProps {
  imageSrc: string;
  highlightText: string;
  mainText: string;
  serviceName: string;
  personTitle: string;
  personName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  highlightText,
  mainText,
  serviceName,
  personTitle,
  personName,
}) => {
  return (
    <div className="shrink-0 snap-center mx-3">
      <div className="relative aspect-[319/391] h-[391px] rounded-[20px] overflow-hidden">
        <Image
          alt={mainText}
          width={1000}
          height={1000}
          className="rounded-[20px] object-cover"
          src={imageSrc}
        />
        <div className="bg-black/50 rounded-[20px] absolute inset-0"></div>
        <div className="absolute flex-col justify-between p-6 inset-0 flex">
          <p className="text-white whitespace-pre-line text-2xl font-bold">
            {mainText.split(highlightText)[0]}
            <span className="text-[#BEA0FF]">{highlightText}</span>
            {mainText.split(highlightText)[1]}
          </p>
          <div className="flex text-white flex-col gap-2">
            <hr className="border-[#D6D7DC]" />
            <div className="flex flex-col gap-2">
              <p className="text-body-2">{serviceName}</p>
              <p className="text-title-m">
                {personTitle} {personName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
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

  const testimonials = [
    {
      id: 1,
      imageSrc:
        "https://daggle.io/_next/image?url=%2Fpng%2Fclient-section%2Fsea-air.png&w=640&q=75",
      highlightText: "빠른 의사결정",
      mainText: "빠른 의사결정이 가능하도록 도와준 개발사였어요.",
      serviceName: '경력직 이직 지원 서비스 플랫폼 "지원전에"',
      personTitle: "인텐스랩 CPO",
      personName: "김현기",
    },
    {
      id: 2,
      imageSrc:
        "https://daggle.io/_next/image?url=%2Fpng%2Fclient-section%2Fcar-image.png&w=640&q=75",
      highlightText: "최초의 개발사",
      mainText: "외주개발의 인식을 뒤바꾼\n최초의 개발사였어요.",
      serviceName: '글로벌 최적경로 비교견적 솔루션 "G-알파"',
      personTitle: "(주)씨에어허브 CEO",
      personName: "장현진",
    },
    {
      id: 3,
      imageSrc:
        "https://daggle.io/_next/image?url=%2Fpng%2Fclient-section%2Fjiwon.png&w=640&q=75",
      highlightText: "'성장'을 고민",
      mainText: "'개발'만 하려고 했는데,\n'성장'을 고민하게 됐어요.",
      serviceName: '차주 중심 커뮤니티 플랫폼 "카미지"',
      personTitle: "(주)카미지 CEO",
      personName: "안성규",
    },
  ];

  // Create duplicated array for the marquee effect
  const marqueeItems = [...testimonials, ...testimonials];

  // Calculate the width of a single item (plus margin)
  const itemWidth = 319 + 24; // Card width + margins
  const totalWidth = itemWidth * testimonials.length;

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
    <section className="h-[100vh] bg-white w-full">
      <motion.div
        className="text-center flex flex-col gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, margin: "0px 0px -100px 0px" }}
      >
        <motion.h1 variants={itemVariants} className="font-extrabold text-2xl">
          성공사례
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-3xl md:text-4xl"
        >
          다글제작소와 <span className="text-[#5D25E1]">성공적인 협업</span>이
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-3xl md:text-4xl"
        >
          가능한 이유는 뭘까요?
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
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                imageSrc={testimonial.imageSrc}
                highlightText={testimonial.highlightText}
                mainText={testimonial.mainText}
                serviceName={testimonial.serviceName}
                personTitle={testimonial.personTitle}
                personName={testimonial.personName}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
