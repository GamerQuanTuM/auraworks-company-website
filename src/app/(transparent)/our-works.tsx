import Image from "next/image";
import React, { FC } from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

function Variant(position: number, delay?: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: position,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  };
}

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const OurWorks = () => {
  const titleVariant = Variant(50, 0.5);
  const cardContainerVariant = Variant(75, 1);
  const cardContents = [
    {
      id: 1,
      title: "안정감이 느껴지는 빠른 제작",
      description:
        "엔터프라이즈급 베이스코드와 자체 라이브러리/디자인시스템을 이용하여 빠르고 안정적인 제작이 가능합니다.",
      img: "https://daggle.io/svg/icon/development.svg",
      alt: "Development",
    },
    {
      id: 2,
      title: "꼼꼼한 개발의 수준 높은 완성도",
      description:
        "개발 과정의 세심한 검토, 최적화된 코드 작성, 사용자 경험을 최우선으로 고려하여 지속 가능성을 기반으로 높은 수준의 결과물을 만듭니다.",
      img: "https://daggle.io/svg/icon/completeness.svg",
      alt: "Completeness",
    },
    {
      id: 3,
      title: "정해진 일정에 맞춰 진행되는 프로젝트",
      description:
        "개발 과정의 세심한 검토, 최적화된 코드 작성, 사용자 경험을 최우선으로 고려하여 지속 가능성을 기반으로 높은 수준의 결과물을 만듭니다.",
      img: "https://daggle.io/svg/icon/circle-clock.svg",
      alt: "Circle-Clock",
    },
  ];
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="w-[90%] max-w-6xl mx-auto text-black flex flex-col md:flex-row gap-12 py-20 md:py-40"
    >
      <motion.div
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="text-2xl md:text-4xl font-bold w-full md:w-[60%]"
      >
        <span className="text-[#5d25e1]">높은 수준</span>을 유지하기 위한
        기본적인 자세
      </motion.div>

      <div className="flex flex-col gap-10">
        {cardContents.map((content) => (
          <motion.div
            key={content.id}
            variants={cardContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <Card {...content} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWorks;

type CardProps = {
  title: string;
  description: string;
  img: string;
  alt: string;
};

const Card: FC<CardProps> = ({ description, img, title, alt }) => (
  <div className="flex gap-5 md:gap-10 card-shadow p-6 md:p-12 rounded-xl flex-col md:flex-row items-start">
    <div className="w-full md:w-fit flex justify-center md:justify-start">
      <Image
        src={img}
        alt={alt}
        loading="lazy"
        width={40}
        height={40}
        className="w-12 h-12 object-top"
      />
    </div>
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
      <p className="text-gray-500 text-sm md:text-base font-medium">
        {description}
      </p>
    </div>
  </div>
);
