"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const servicePlanningFullImage =
  "https://daggle.io/_next/image?url=%2Fpng%2Fprocess-section%2Fservice.png&w=1920&q=75";
const designFullImage =
  "https://daggle.io/_next/image?url=%2Fpng%2Fprocess-section%2Fdesign.png&w=1920&q=75";
const developmentImage =
  "https://daggle.io/_next/image?url=%2Fpng%2Fprocess-section%2Fdevelopment.png&w=1920&q=75";
const maintainanceImage =
  "https://daggle.io/_next/image?url=%2Fpng%2Fprocess-section%2Fmaintenance.png&w=1920&q=75";

const processSteps = [
  {
    id: 1,
    title: "Service Planning",
    subTitle: "서비스 기획",
    desc: "진행 상황을 문서로 명확히 공유하며, 정밀한 기획으로 프로젝트의 완성도를 높입니다.",
    image: servicePlanningFullImage,
    alt: "service-planning",
  },
  {
    id: 2,
    title: "Design",
    subTitle: "사용자 경험 기반 UX/UI",
    desc: "브랜드와 개성과 사용 편이성을 모두 고려한 디자인으로 최적의 경험을 만듭니다.",
    image: designFullImage,
    alt: "design",
  },
  {
    id: 3,
    title: "Development",
    subTitle: "개발",
    desc: "서비스의 구조와 목적에 맞는 최적의 기술 스택으로 직접 개발하여, 유지보수와 확장에 강한 시스템을 구축합니다.",
    image: developmentImage,
    alt: "development",
  },
  {
    id: 4,
    title: "Maintenance",
    subTitle: "시스템 유지보수",
    desc: "문제 발생 시 빠른 대응은 물론, 주기적인 점검과 개선을 통해 시스템 안정성과 성능을 꾸준히 관리합니다.",
    image: maintainanceImage,
    alt: "maintainance",
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState<number | null>(null);
  const [activeImageOnMobile, setActiveImageOnMobile] = useState(
    processSteps[0].image
  );
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  const handleMouseEnter = (id: number) => {
    setHoveredIndex(id);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      setShowDescription(id);
    }, 200);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setShowDescription(null);
    setHoveredIndex(null);
  };

  const handleAccordionToggle = (id: number) => {
    // Toggle the expanded state
    if (expandedStep === id) {
      setExpandedStep(null);
    } else {
      setExpandedStep(id);
      // Change the background image with a smooth transition
      setActiveImageOnMobile(
        processSteps.find((step) => step.id === id)?.image ||
          processSteps[0].image
      );
    }
  };

  return (
    <>
      <section className="h-fit flex flex-col gap-5 py-20 items-center rounded-lg">
        <div className="text-center font-bold text-3xl md:text-4xl space-y-5">
          <h1>단계에 맞춰 꼼꼼하게</h1>
          <h1>
            진행되는 <span className="text-[#5d25e1]">작업 프로세스</span>
          </h1>
        </div>

        <div className="mt-10 h-[35rem] w-[80%] mx-auto hidden md:block relative rounded-lg">
          {/* Background images for all sections - always present but opacity controlled */}
          {processSteps.map((step) => (
            <div
              key={`bg-${step.id}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                hoveredIndex === step.id
                  ? "opacity-100 z-0"
                  : hoveredIndex === null
                  ? "opacity-0 z-0"
                  : "opacity-0 z-0"
              }`}
            >
              <Image
                src={step.image}
                alt={`Full ${step.id}`}
                className="w-full h-full object-cover rounded-lg"
                width={1920}
                height={1080}
                priority
              />
            </div>
          ))}

          {/* Default state images when nothing is hovered */}
          <div
            className={`absolute inset-0 z-0 flex transition-opacity duration-700 ease-out ${
              hoveredIndex === null ? "opacity-100" : "opacity-0"
            }`}
          >
            {processSteps.map((step) => (
              <div
                key={`default-${step.id}`}
                className="flex-1 h-full relative border-r border-white last:border-r-0"
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  className={`h-full w-full object-cover ${
                    step.id === 1
                      ? "object-left rounded-l-lg"
                      : step.id === 2
                      ? "object-center"
                      : step.id === 3
                      ? "object-center"
                      : step.id === 4
                      ? "object-right rounded-r-lg"
                      : ""
                  }`}
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>

          {/* Overlay sections - always visible */}
          <div className="absolute inset-0 z-10 flex">
            {processSteps.map((step) => (
              <div
                key={`section-${step.id}`}
                className={`flex-1 h-full relative ${
                  step.id !== 4 ? "border-r border-white" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(step.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Title - moves up when hovered */}
                <div
                  className={`absolute bottom-0 left-0 w-full p-4 text-white z-20 transition-transform duration-500 ease-out 
                  ${
                    hoveredIndex === step.id
                      ? "transform -translate-y-40"
                      : "transform translate-y-0"
                  }`}
                >
                  <h3 className="font-bold text-2xl">{step.title}</h3>
                  <p className="text-base font-bold mt-1 opacity-80">
                    {step.subTitle}
                  </p>
                </div>

                {/* Description with fade-in transition and delayed appearance */}
                <div
                  className={`absolute bottom-0 left-0 right-0 px-4 py-8 bg-black bg-opacity-70 text-white z-10 
                  transition-all duration-500 ease-out ${
                    showDescription === step.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-base px-2 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="flex flex-col md:hidden mx-4 mb-10 rounded-lg"
        style={{
          backgroundImage: `url(${activeImageOnMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out", // Smooth transition for background image
        }}
      >
        {processSteps.map((step) => (
          <div key={step.id}>
            <div className="relative h-36">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-3">
                <p className="text-white font-bold text-2xl">{step.title}</p>
                <p className="text-white font-bold text-base">
                  {step.subTitle}
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3">
                {expandedStep === step.id ? (
                  <ChevronUp
                    size={20}
                    color="#FFF"
                    onClick={() => handleAccordionToggle(step.id)}
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    color="#FFF"
                    onClick={() => handleAccordionToggle(step.id)}
                  />
                )}
              </div>
            </div>
            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeImageOnMobile === processSteps[3].image
                  ? "rounded-b-lg"
                  : "rounded-none"
              }`}
              style={{
                maxHeight: expandedStep === step.id ? "100px" : "0",
                opacity: expandedStep === step.id ? 1 : 0,
              }}
            >
              <div className="px-4 py-8 bg-black bg-opacity-50 flex">
                <p className="text-white text-base">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Features;
