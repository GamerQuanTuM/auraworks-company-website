"use client"
import React, { FC } from "react";
import * as motion from "motion/react-client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/variants";

const faqList: AccordionItemProps[] = [
  {
    title: "작업 문의 후, 프로젝트 일정은 어떻게 진행되나요?",
    content: [
      "제공하진 정보를 바탕으로 비대면(ZOOM)미팅을 진행합니다.",
      "미팅을 통해 서비스 개요,실현 가능성,예산 및 작업 일정 등을 상세히 검토합니다.",
      "계약이 완료된 후,기획->디자인->개발의 순서로 프로젝트가 진행됩니다.",
    ],
  },
  {
    title: "예산과 작업 일정 조율이 필요할 경우 어떻게 하나요?",
    content: [
      "해당 서비스의 주요 기능을 명확히 하고,서비스 규모를 조율하여 최적의 솔루션을 제시합니다.",
    ],
  },
  {
    title: "다글견적소와 예산/일정이 동일한가요?",
    content: [
      "거의 동일합니다. 각 서비스는 기능별로 다를 수 있으므로 완전히 일치하는 일정 및 가격 책정은 어려우나, 유연한 설계를 통해 거의 비슷한 수준을 유지합니다.",
    ],
  },
  {
    title: "정부지원금 사용이 가능한가요?",
    content: [
      "가능합니다. 정부 지원 사업을 위한 필요 문서 제작에도 도움을 드립니다.",
    ],
  },
  {
    title: "IT 지식이 전혀 없어도 프로젝트 의뢰가 가능할까요?",
    content: [
      "가능합니다. 기술적인 검토는 당사가 담당하며,모든 단계를 쉽게 이해할 수 있도록 전문적으로 설명드립니다.",
    ],
  },
  {
    title: "프로젝트 진행 상황을 어떻게 확인할 수 있나요?",
    content: [
      "꼭 프로젝트 기간 동안 실시간 소통 채널 및 링크 공유를 통해 모든 작업상황(기획/디자인/개발)을 공유합니다. 정기적인 주간 보고를 통해 매주 작업 내역을 업데이트해 드립니다.",
    ],
  },
  {
    title: "프로젝트 산출물은 어떻게 제공되나요?",
    content: [
      "프로젝트 기간 동안 계정 생성 및 실시간 고유를 통해 상세 기능 정의서,디자인 산출물,개발 산출물을 제공해드립니다.",
    ],
  },
  {
    title: "프로젝트 종료 후 유지보수 비용이 발생하나요?",
    content: [
      "프로젝트 종료 후 6개월 동안 발견된 버그는 24시간 이내 확인 후 무료로 수정해 드립니다. 추가 기능 개발이 필요한 경우 별도의 계약을 통해 진행합니다.",
    ],
  },
  {
    title: "기존의 코드도 수정이 가능한가요?",
    content: [
      "가능합니다. PHP,Java,Python,JavaScript,TypeScript 등 다양한 언어로 개발된 프로젝트의 유지보수 및 기능 추가 개발 경험이 풍부합니다.",
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <section className="h-fit bg-black text-white px-6 md:px-0">
        <div className="w-full md:max-w-7xl px-0 md:px-6 mx-auto text-center py-28">
          <p>FAQ</p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            궁금하실 점을 미리 준비해봤어요
          </h1>

          <div className="mt-10">
            {faqList.map((faq, index) => (
              <AccordionComponent
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </div>
      </section>

      <div
        className="background-image-class h-fit py-6 md:py-0 md:h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${"https://daggle.io/_next/image?url=%2Fpng%2Fbottom-cta-bg.png&w=1920&q=75"})`,
        }}
      >
        <p className="text-xl md:text-5xl font-bold text-center text-white space-y-5">
          <span className="block">안정적인 성공을 책임지는</span>
          <span className="block">IT 비지니스 파트너 다글제작소입니다.</span>

          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="flex justify-center"
          >
            <Button className="flex items-center justify-center cursor-pointer transition-colors text-white border bg-[#5221c4] hover:bg-[#511bce] font-semibold px-7 py-8 rounded-lg w-fit md:w-60 border-none text-lg mt-10">
              프로젝트 문의하기
            </Button>
          </motion.div>
        </p>
      </div>
    </>
  );
};

export default FAQ;

type AccordionItemProps = {
  title: string;
  content: string[];
};

const AccordionComponent: FC<AccordionItemProps> = ({ content, title }) => {
  return (
    <Accordion
      className="border-b-[1px] border-[#e5e5e5] mt-5"
      type="single"
      collapsible
    >
      <AccordionItem value={title}>
        <AccordionTrigger className="text-sm md:text-base font-bold h-20">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-left bg-[#1A1A1A] py-6 px-4 text-xs md:text-sm">
          {content.map((item, idx) => (
            <li key={idx} className="mt-1">
              {item}
            </li>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
