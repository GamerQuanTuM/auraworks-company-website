"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Text = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animations
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const clipPath1 = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
  const clipPath2 = useTransform(
    scrollYProgress,
    [0.2, 0.35],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.55], [50, 0]);
  const clipPath3 = useTransform(
    scrollYProgress,
    [0.4, 0.55],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const opacity4 = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.75], [50, 0]);
  const clipPath4 = useTransform(
    scrollYProgress,
    [0.6, 0.75],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section
      ref={containerRef}
      className="h-[150vh] md:h-[350vh] lg:h-[400vh] relative bg-white"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-0">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 w-full max-w-6xl mx-auto">
          {/* Top Left */}
          <div className="flex justify-start text-xl sm:text-2xl md:text-5xl font-bold overflow-hidden">
            <div className="flex flex-col gap-6 sm:gap-8">
              <motion.span
                style={{ opacity: opacity1, y: y1, clipPath: clipPath1 }}
                className="block"
              >
                진입장벽이 높은 외주개발
              </motion.span>
              <motion.span
                style={{ opacity: opacity2, y: y2, clipPath: clipPath2 }}
                className="block"
              >
                여전히 고민하고 있으신가요?
              </motion.span>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex justify-end text-xl sm:text-2xl md:text-5xl font-bold overflow-hidden">
            <div className="flex flex-col gap-6 sm:gap-8 text-right">
              <motion.span
                style={{ opacity: opacity3, y: y3, clipPath: clipPath3 }}
                className="block"
              >
                협업의 경험이 달라지면
              </motion.span>
              <motion.span
                style={{ opacity: opacity4, y: y4, clipPath: clipPath4 }}
                className="block"
              >
                모든 것이 달라집니다.
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
