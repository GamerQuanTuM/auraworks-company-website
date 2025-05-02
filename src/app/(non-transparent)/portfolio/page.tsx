import React, { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

type Props = {
  project: Project;
  index: number;
};

const projects = [
  {
    id: 1,
    title: "프린티",
    description: "작가와 팬을 잇는 일러스트 출력 플랫폼",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fprinttie%2Fprinttie_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 2,
    title: "하이어리",
    description: "매일 사용하는 건강한 목표 달성 솔루션",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fhiary%2Fhiary_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 3,
    title: "G-ALPHA",
    description: "물류 포워더 및 물류관계자를 위한 예상물류비 비교견적 솔루션",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fg-alpha%2Fg-alpha_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 4,
    title: "스파르타빌더스",
    description:
      "직계약으로 안전한 외주 개발 문화를 선도하는 프리미엄 외주개발사 매칭 서비스 플랫폼",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fsparta-builders%2Fsparta-builders_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 5,
    title: "KOSTA-EDU",
    description: "한국소프트웨어기술진흥협회의 학습관리 시스템",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fkosta-edu%2Fkosta-edu_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 6,
    title: "달콤수학",
    description: "엄마의 수학을 돕는 엄마표 온라인 수학교육 강의 플랫폼",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fdalcomedu%2Fdalcomedu_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 7,
    title: "TAX-RESEARCH",
    description:
      "간편하고 빠르게 예상환급금을 알아볼 수 있는 세금환급 경정청구 솔루션",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Ftax-research%2Ftax-research_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 8,
    title: "카미지",
    description:
      "빅데이터를 기반으로 제공되는 다양한 차량 정보와 함께 자유롭게 소통하는 커뮤니티",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fcar-image%2Fcar-image_thumbnail.webp%0A&w=1920&q=75",
    tags: ["웹앱", "반응형", "ADMIN"],
  },
  {
    id: 9,
    title: "WisdomHub",
    description: "나의 지혜가 자산이 되는 철학 사유 플랫폼",
    imageUrl:
      "https://daggle.io/_next/image?url=https%3A%2F%2Fdagglebucket.s3.ap-northeast-2.amazonaws.com%2Fportfolio%2Fwisdomhub%2Fwisdomhub_thumbnail.webp%0A&w=1920&q=75",
    tags: ["안드로이드", "iOS"],
  },
];

const ProjectCard: FC<Props> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between">
          <div className="flex-1">
            <motion.h3
              className="text-lg md:text-xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-4 text-sm md:text-base flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {project.description}
            </motion.p>
          </div>
          <div className="w-[10%]">
            <motion.div
              className="w-10 h-10 border-[1px] border-gray-200 rounded-full p-2 flex items-center justify-center"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string, tagIndex: number) => (
            <motion.span
              key={tagIndex}
              className="px-3 py-1 bg-[#e7e1f7] text-[#5221c4] rounded-full text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.4 + index * 0.1 + tagIndex * 0.05,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -120 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="flex-1 my-20 md:my-40 w-full px-4 md:px-0 md:w-4/5 lg:w-3/4 mx-auto flex flex-col gap-7 md:gap-16">
      <motion.div
        className="flex flex-col justify-center items-center gap-2 md:gap-3 text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.p
          className="text-[#81848e] text-sm md:text-xl font-medium"
          variants={titleVariants}
        >
          포트폴리오
        </motion.p>
        <motion.h1
          className="text-xl md:text-4xl font-normal text-slate-800"
          variants={titleVariants}
        >
          다글제작소와 함께 만들어진
        </motion.h1>
        <motion.h1
          className="text-xl md:text-4xl font-normal text-slate-800"
          variants={titleVariants}
        >
          <span className="font-bold text-[#1A1A1A]">서비스</span>
          들을 확인해보세요
        </motion.h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
