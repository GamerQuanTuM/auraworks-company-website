import React, { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  href: string;
  created_at: string;
  updated_at: string;
};

type Props = {
  project: Project;
  index: number;
};

const ProjectCard: FC<Props> = ({ project, index }) => {
  return (
    <Link href={project.href}>
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
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
            src={project.image_url}
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
                className="text-gray-600 mb-4 text-sm lg:text-base flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {project.description}
              </motion.p>
            </div>
            <div className="w-[10%]">
              <motion.div
                className="sm:w-10 sm:h-10 md:h-8 md:w-8 lg:w-10 lg:h-10 border-[1px] border-gray-200 rounded-full p-2 flex items-center justify-center"
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
    </Link>
  );
};

const Portfolio = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio`);
  const { data } = await response.json();

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
    <div className="flex-1 my-20 md:my-40 w-full px-4 lg:px-0 lg:w-4/5 mx-auto flex flex-col gap-7 md:gap-16">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
        {data.map((project: Project, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
