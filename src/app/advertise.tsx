import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import type { Variants } from "motion/react";

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

const cardContainerVariants = {
  hidden: { opacity: 0, y: 150 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const speechBubbleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Advertise = () => {
  return (
    <div className="h-fit bg-black w-full flex flex-col items-center justify-center z-[120] relative py-20">
      <motion.div
        className="w-[70%] h-[70%] text-center text-white flex flex-col gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5, margin: "0px 0px -100px 0px" }}
      >
        <motion.h1 variants={itemVariants} className="font-extrabold text-4xl">
          외주개발이
        </motion.h1>
        <motion.h1 variants={itemVariants} className="font-extrabold text-4xl">
          고민되고 어려운 이유
        </motion.h1>
        <motion.div variants={itemVariants}>
          <p className="text-base font-semibold">
            실제 다글제작소와 함께 프로젝트 진행 중 고객사의 고민들을
          </p>
          <p className="text-base font-semibold">
            토대로 도출한 가장 대표적인 사례입니다.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex md:flex-row max-w-[328px] tab:max-w-[520px] md:max-w-full mx-auto flex-col items-center justify-center gap-6 mt-16"
      >
        {/* Left Card */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col relative w-[320px] h-full tab:w-[520px] md:w-[457px] tab:h-[383.5px] md:h-[486px]"
        >
          <div className="flex flex-col gap-2 bg-gradient-to-b text-center md:text-start items-center md:items-start p-4 md:p-6 text-white rounded-[16px] from-[#6025E1] to-[#35147B] md:w-[361px] w-full md:h-[486px] h-full self-end">
            <div className="flex flex-col gap-1 mb-6">
              <span className="font-bold text-2xl">커뮤니케이션의 부재</span>
              <span className="text-sm font-semibold mt-2">
                "초도미팅 이후로 작업 진행 상황에 대해 공유하지 않고.
                <br />
                직접 물어봐야 알 수 있는 수동적인 태도가 답답해요."
              </span>
            </div>
            <div className="relative md:static mob:w-full h-full justify-center text-center">
              <motion.div
                variants={speechBubbleVariants}
                className="flex relative flex-col z-10 top-2 tab:top-0 md:top-0 left-[44px] tab:left-10 md:left-44"
                style={{ width: "fit-content", textAlign: "center" }}
              >
                <div className="bg-white text-black rounded-md p-3">
                  <p className="text-sm font-semibold text-black">
                    제가 물어보지 않으면
                    <br />말 안하실건가요?
                  </p>
                </div>
                <Image
                  alt="comment-tail"
                  loading="lazy"
                  width="15"
                  height="15"
                  decoding="async"
                  className="absolute -bottom-[10px] left-4"
                  src="https://daggle.io/svg/icon/polygon.svg"
                  style={{ color: "transparent" }}
                />
              </motion.div>
              <Image
                alt="problem-absent-communication"
                loading="lazy"
                width={1000}
                height={1000}
                decoding="async"
                className="block md:absolute md:bottom-0 md:left-0"
                src="https://daggle.io/_next/image?url=%2Fpng%2Fproblem-section%2Fproblem-absent-communication.png&w=1080&q=75"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="flex flex-col gap-5 w-full md:w-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col relative w-full h-full md:w-[455px] md:h-[234px]"
          >
            <div className="flex flex-col gap-2 text-center md:text-start items-center md:items-start bg-gradient-to-b p-8 h-full text-white rounded-[16px] from-[#262626] to-[#000000B2]">
              <p className="font-bold text-2xl">IT 개발사 보증의 고민</p>
              <p className="text-sm font-semibold mt-2">
                "수많은 IT개발사 중에서 어떤 곳을
                <br />
                선택해야 할지 잘 모르겠어요."
              </p>
              <div className="relative md:static mob:w-full h-full justify-center text-center">
                <motion.div
                  variants={speechBubbleVariants}
                  className="flex relative flex-col z-10 top-0 md:top-5 left-8 md:left-0"
                  style={{ width: "fit-content", textAlign: "center" }}
                >
                  <div className="bg-white text-black rounded-md p-3">
                    <p className="text-sm font-semibold text-black">
                      어디서부터 어떻게 봐야 하는 걸까요?
                    </p>
                  </div>
                  <Image
                    alt="comment-tail"
                    loading="lazy"
                    width="15"
                    height="15"
                    decoding="async"
                    className="absolute -right-[10px] top-1/2 -translate-y-1/2 rotate-[270deg]"
                    src="https://daggle.io/svg/icon/polygon.svg"
                    style={{ color: "transparent" }}
                  />
                </motion.div>
                <img
                  alt="problem-worry-guarantee"
                  loading="lazy"
                  width="220"
                  height="220"
                  decoding="async"
                  className="block md:absolute md:bottom-0 md:right-0"
                  src="https://daggle.io/_next/image?url=%2Fpng%2Fproblem-section%2Fproblem-worry-guarantee.png&w=640&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col relative w-full h-full md:w-[455px] md:h-[234px]"
          >
            <div className="flex flex-col gap-2 text-center md:text-start items-center md:items-start bg-gradient-to-b p-8 h-full text-white rounded-[16px] from-[#262626] to-[#000000B2]">
              <p className="font-bold text-2xl">불만족스러운 퀄리티</p>
              <p className="text-sm font-semibold mt-2">
                "완성으로 보이지 않는 결과물을
                <br />
                최종이라고 해서 당황스러웠던 경험이 있어요."
              </p>
              <div className="relative md:static mob:w-full h-full mt-5 justify-center text-center">
                <motion.div
                  variants={speechBubbleVariants}
                  className="flex relative flex-col z-10 -top-5 md:top-2 left-4 md:left-16"
                  style={{ width: "fit-content", textAlign: "center" }}
                >
                  <div className="bg-white text-black rounded-md p-3">
                    <p className="text-sm font-semibold text-black">
                      이게 끝인가요..?(거짓말)
                    </p>
                  </div>
                  <Image
                    alt="comment-tail"
                    loading="lazy"
                    width="15"
                    height="15"
                    decoding="async"
                    className="absolute -right-[10px] top-1/2 -translate-y-1/2 rotate-[270deg]"
                    src="https://daggle.io/svg/icon/polygon.svg"
                    style={{ color: "transparent" }}
                  />
                </motion.div>
                <Image
                  alt="problem-low-quality"
                  loading="lazy"
                  width="162"
                  height="140"
                  decoding="async"
                  className="block md:absolute md:bottom-0 md:right-4"
                  src="https://daggle.io/_next/image?url=%2Fpng%2Fproblem-section%2Fproblem-low-quality.png&w=384&q=75"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Advertise;
