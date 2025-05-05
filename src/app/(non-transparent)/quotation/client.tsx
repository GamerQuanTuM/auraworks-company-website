"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  LogOut,
  CircleUser,
  FilePlus,
  SquarePen,
  ImageUp,
  FileVideo,
  Video,
  MessageSquareText,
  ThumbsUp,
  MessageSquare,
  CircleDollarSign,
  Truck,
  ShoppingBag,
  Clock,
  Map,
  MapPinned,
  Box,
  Container,
  Globe,
  Vault,
  Headset,
  BotMessageSquare,
  MessageSquareDot,
  FolderKanban,
  BellRing,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import type { Content } from "./page";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/lib/variants";
import { Separator } from "@/components/ui/separator";

const itemList = [
  {
    id: 1,
    title: "커뮤니티",
    activeOptions: [1, 2, 3, 5, 8, 9, 10],
  },

  {
    id: 2,
    title: "LMS/온라인교육",
    activeOptions: [1, 4, 7, 11, 12, 21],
  },
  {
    id: 3,
    title: "플랫폼",
    activeOptions: [1, 2, 3, 4, 10, 15, 25],
  },
  {
    id: 4,
    title: "커머스",
    activeOptions: [1, 11, 12, 13, 21, 23],
  },
  {
    id: 5,
    title: "AI",
    activeOptions: [1, 2, 3, 4, 20, 23],
  },
  {
    id: 6,
    title: "블록체인",
    activeOptions: [1, 2, 3, 4, 17, 18],
  },
  {
    id: 7,
    title: "금융",
    activeOptions: [1, 2, 3, 4, 23, 24],
  },
  {
    id: 8,
    title: "기타",
    activeOptions: [],
  },
];

const options = [
  { id: 1, label: "로그인/회원가입", icon: LogOut },
  { id: 2, label: "소셜로그인", icon: CircleUser },
  { id: 3, label: "온보딩(추가정보)", icon: FilePlus },
  { id: 4, label: "일반 게시글", icon: SquarePen },
  { id: 5, label: "사진 게시글", icon: ImageUp },
  { id: 6, label: "동영상 게시글", icon: FileVideo },
  { id: 7, label: "동영상 강의", icon: Video },
  { id: 8, label: "댓글 / 답글", icon: MessageSquareText },
  { id: 9, label: "댓글 / 답글", icon: ThumbsUp },
  { id: 10, label: "좋아요", icon: MessageSquare },
  { id: 11, label: "결제하기", icon: CircleDollarSign },
  { id: 12, label: "주문 / 배송", icon: Truck },
  { id: 13, label: "장바구니", icon: ShoppingBag },
  { id: 14, label: "예약하기", icon: Clock },
  { id: 15, label: "지도보기", icon: Map },
  { id: 16, label: "GPS 추적", icon: MapPinned },
  { id: 17, label: "NFT", icon: Box },
  { id: 18, label: "블록체인", icon: Container },
  { id: 19, label: "메타버스", icon: Globe },
  { id: 20, label: "AI", icon: Vault },
  { id: 21, label: "CS 챗봇", icon: Headset },
  { id: 22, label: "AI 챗봇", icon: BotMessageSquare },
  { id: 23, label: "알림톡 자동발송", icon: MessageSquareDot },
  { id: 24, label: "마이 데이터", icon: FolderKanban },
  { id: 25, label: "푸시 알림", icon: BellRing },
];

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

// Form container animation variants
const formContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.7,
    },
  },
};

// Options grid animation variants
const optionsGridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

// Option item animation variants
const optionItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Result box animation variants
const resultBoxVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.0,
    },
  },
};

const Estimate = ({ content }: { content: Content[] }) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const [showList, setShowList] = useState(false);
  // Track the order of selection
  const [selectionOrder, setSelectionOrder] = useState<number[]>([]);

  const handleValueChange = (value: string) => {
    setShowList(true);
    if (value === "기타") {
      setSelectedList([]);
      setSelectionOrder([]);
      return;
    }

    const selectedObject = itemList.find((item) => item.title === value);
    const list = selectedObject?.activeOptions || [];
    setSelectedList(list);
    setSelectionOrder(list);
  };

  // Function to toggle a feature selection while maintaining order
  const toggleFeature = (optionId: number) => {
    if (selectedList.includes(optionId)) {
      // Remove from both lists
      setSelectedList((prev) => prev.filter((id) => id !== optionId));
      setSelectionOrder((prev) => prev.filter((id) => id !== optionId));
    } else {
      // Add to both lists, with the selected item appearing at the end of selectionOrder
      setSelectedList((prev) => [...prev, optionId]);
      setSelectionOrder((prev) => [...prev, optionId]);
    }
  };

  // Calculate total days for each role
  // const calculateTotalDays = () => {
  //   if (selectedList.length === 0) return { planner: 0, designer: 0, developer: 0 };

  //   let totalPlanner = 0;
  //   let totalDesigner = 0;
  //   let totalDeveloper = 0;

  //   selectedList.forEach(id => {
  //     const featureName = options.find(opt => opt.id === id)?.label;
  //     if (featureName) {
  //       const feature = content.find(item => item.feature_name === featureName);
  //       if (feature) {
  //         totalPlanner += feature.planner_days;
  //         totalDesigner += feature.designer_days;
  //         totalDeveloper += feature.developer_days;
  //       }
  //     }
  //   });

  //   return { planner: totalPlanner, designer: totalDesigner, developer: totalDeveloper };
  // };

  // Calculate estimated months
  // const calculateEstimatedMonths = () => {
  //   const { planner, designer, developer } = calculateTotalDays();
  //   const maxDays = Math.max(planner, designer, developer);
  //   // Assuming 20 working days per month
  //   return maxDays > 0 ? Math.ceil(maxDays / 20) : 0;
  // };

  return (
    <div className="flex-1 py-20 md:py-40 w-full px-4 lg:px-0 lg:w-4/5 mx-auto flex flex-col gap-7 md:gap-16">
      {/* Title Section - Keep existing animations */}
      <motion.div
        className="flex flex-col justify-center items-center gap-2 md:gap-3 text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.p
          className="text-[#81848e] text-sm md:text-lg font-medium"
          variants={titleVariants}
        >
          다글견적소
        </motion.p>
        <motion.h1
          className="text-xl md:text-4xl font-normal text-slate-800"
          variants={titleVariants}
        >
          다글견적소
        </motion.h1>
        <motion.h1
          className="text-xl md:text-4xl font-normal text-slate-800"
          variants={titleVariants}
        >
          <span className="font-bold text-[#1A1A1A]">예상 기간</span>을
          확인해보세요
        </motion.h1>
      </motion.div>

      <div className="space-y-16">
        {/* Form Container with Animation */}
        <motion.div
          className="rounded-xl w-full md:w-1/2 mx-auto h-fit border-[1px] border-slate-300 bg-white py-8"
          initial="hidden"
          animate="show"
          variants={formContainerVariants}
        >
          <div className="w-full md:w-[80%] mx-auto space-y-8 px-4 md:px-0">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Label className="font-bold text-base">
                서비스 종류 <span className="text-red-500">*</span>
              </Label>
              <Select onValueChange={handleValueChange}>
                <SelectTrigger className="w-full text-lg" size="lg">
                  <SelectValue
                    className="placeholder:text-[#e5e7eb]"
                    placeholder="서비스 종류를 선택해주세요"
                  />
                </SelectTrigger>

                <SelectContent
                  side="bottom"
                  position="popper"
                  avoidCollisions={false}
                  className="max-h-[300px] overflow-y-auto"
                  style={{
                    // Force downward opening
                    position: "relative",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto",
                    transform: "none",
                  }}
                >
                  {itemList.map((item, i) => (
                    <SelectItem value={item.title} key={i} className="h-12">
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Label className="font-bold text-base">
                관리자 여부<span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-5">
                <div className="space-x-2">
                  <Checkbox
                    checked={checked1}
                    onCheckedChange={() => {
                      if (checked2) {
                        setChecked2(false);
                      }
                      setChecked1(!checked1);
                    }}
                  />
                  <span>있음</span>
                </div>
                <div className="space-x-2">
                  <Checkbox
                    checked={checked2}
                    onCheckedChange={() => {
                      if (checked1) {
                        setChecked1(false);
                      }
                      setChecked2(!checked2);
                    }}
                  />
                  <span>없음</span>
                </div>
              </div>
            </motion.div>

            {showList && (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Label className="font-bold text-base">
                  상세 기능<span className="text-red-500">*</span>
                </Label>

                <motion.div
                  className="grid grid-cols-3 lg:grid-cols-4 gap-4"
                  variants={optionsGridVariants}
                  initial="hidden"
                  animate="show"
                >
                  {options.map((option) => {
                    const isSelected = selectedList.includes(option.id);
                    return (
                      <motion.div
                        key={option.id}
                        className={`${
                          isSelected ? "bg-[#f3edff]" : "bg-white"
                        } rounded-lg border-[1px] border-gray-300 flex flex-col gap-3 items-center justify-center w-24 h-24 p-4 md:p-0 md:h-28 md:w-28 cursor-pointer`}
                        onClick={() => toggleFeature(option.id)}
                        variants={optionItemVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{
                          scale: 0.95,
                          transition: { duration: 0.1 },
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: isSelected ? [1, 1.2, 1] : 1,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <option.icon
                            className={`h-4 w-4 md:h-6 md:w-6 ${
                              isSelected ? "text-[#5d25e1]" : "text-black"
                            }`}
                          />
                        </motion.div>
                        <Label
                          className={`font-bold text-xs md:text-sm ${
                            isSelected ? "text-[#5d25e1]" : "text-black"
                          }`}
                        >
                          {option.label}
                        </Label>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
        {/* Result Box with Animation */}
        <motion.div
          className="rounded-xl w-full md:w-1/2 mx-auto h-fit border-[1px] border-slate-300 bg-white py-8"
          variants={resultBoxVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="w-full md:w-[80%] mx-auto space-y-6 px-2 md:px-0">
              <Label className="font-medium text-lg text-[#0a0a0a]">
                견적 영수증
              </Label>
              {selectedList.length > 0 && (
                <div className="space-y-5">
                  <div className="flex text-sm md:text-base items-center justify-between font-semibold">
                    <p className="w-1/4 text-center">선택 기능</p>
                    <p className="w-1/4 text-center">기획자(1인)</p>
                    <p className="w-1/4 text-center">디자이너(1인)</p>
                    <p className="w-1/4 text-center">개발자(1인)</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    {/* Render features in the order they were selected */}
                    {selectionOrder.map((optionId) => {
                      const option = options.find((opt) => opt.id === optionId);
                      if (!option) return null;

                      const feature = content.find(
                        (item) => item.feature_name === option.label
                      );
                      if (!feature) return null;

                      return (
                        <motion.div
                          key={optionId}
                          className="flex items-center justify-between font-medium text-slate-900 text-sm"
                          initial={{ opacity: 0, x: 120 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <p className="w-1/4 text-center">{option.label}</p>
                          <p className="w-1/4 text-center">
                            {feature.planner_days}일
                          </p>
                          <p className="w-1/4 text-center">
                            {feature.designer_days}일
                          </p>
                          <p className="w-1/4 text-center">
                            {feature.developer_days}일
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <p className="w-1/4 text-center">총 기간</p>
                    <p className="w-1/4 text-center">0.1개월</p>
                    <p className="w-1/4 text-center">0.1개월</p>
                    <p className="w-1/4 text-center">0.1개월</p>
                  </div>
                </div>
              )}

              <div className="bg-[#F9F9F9] rounded-xl h-16 flex items-center justify-between px-6">
                <h1 className="text-lg font-medium">예상 작업 기간</h1>
                <h1 className="text-xl font-medium">0개월</h1>
              </div>
              <p className="text-[#484a50] text-xs">
                * 총 소요 시간은 추가 인력투입으로 기간 조정이 가능합니다.
              </p>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button
                  disabled={selectedList.length === 0}
                  className={`inline-flex h-12 w-full items-center justify-center cursor-pointer transition-colors font-semibold px-7 py-6 rounded-lg ${
                    selectedList.length != 0
                      ? "bg-[#5221c4] hover:bg-[#511bce]"
                      : "bg-gray-200 hover:bg-gray-200 text-black"
                  } relative`}
                >
                  프로젝트 문의하기
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Estimate;
